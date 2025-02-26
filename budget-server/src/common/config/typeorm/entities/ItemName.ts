import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Price } from './Price';

@Entity({ database: process.env.DATABASE_NAME, name: 'items' })
export class ItemName {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: false, name: 'name' })
  name: string;
  @Column({ type: 'text', unique: false, name: 'note', nullable: true })
  note: string;
  @OneToMany(() => Price, (price) => price.item, {})
  prices: Price[];
}
