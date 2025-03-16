import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: process.env.DATABASE_NAME, name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: false, name: 'name' })
  name: string;
  @Column({ type: 'text', unique: false, name: 'email' })
  email: string;
  @Column({ type: 'text', unique: true, name: 'uid' })
  uid: string;
  @Column({ type: 'text', unique: false, name: 'photo', nullable: true })
  photo: string;
}
