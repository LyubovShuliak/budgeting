import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: process.env.DATABASE_NAME, name: 'tags' })
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true, name: 'name' })
  name: string;
  @Column({ type: 'text', unique: false, name: 'color', nullable: true })
  color: string;
}
