import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

import { jwtConstants } from '../constants/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: jwtConstants.secret,
      jwtFromRequest: (req) => req.headers.authorization,
    });
  }

  private static extractJWTFromCookie(req: Request): string | null {
    if (req.cookies && req.cookies.session) {
      return req.cookies.session;
    }

    return null;
  }

  async validate(payload: any) {
    const user = { name: payload.name };
    if (!payload.name) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
