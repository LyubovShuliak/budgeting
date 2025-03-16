import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { Repository } from 'typeorm';

import { User } from '../common/config/typeorm/entities/User';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    const credential = GoogleAuthProvider.credential(createAuthDto.idToken);

    // Sign in with credential from the Google user.
    const auth = getAuth();
    try {
      const data = await signInWithCredential(auth, credential);
      const [user] = data.user.providerData;
      const isUserRegistered = await this.userRepository.findOne({
        where: { uid: user.uid },
      });

      if (isUserRegistered) {
        await this.userRepository.update(
          { uid: isUserRegistered.uid },
          {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photo: user.photoURL,
          },
        );
        return await this.userRepository.findOne({
          where: { uid: user.uid },
        });
      } else {
        const DBUser = await this.userRepository.save({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photo: user.photoURL,
        });

        return DBUser;
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      return {};
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
