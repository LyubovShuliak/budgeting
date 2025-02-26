import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ItemName } from './ItemName';

@Entity({ database: process.env.DATABASE_NAME, name: 'prices' })
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    unique: false,
    name: 'measurement',
    enum: ['kg', 'package', 'piece'],
  })
  measurement: string;

  @Column({
    type: 'numeric',
  })
  quantity: number;
  @Column({ type: 'int', unique: false, name: 'price' })
  price: string;
  @ManyToOne(() => ItemName, (item) => item.prices)
  @JoinColumn({ name: 'item_id' })
  item: ItemName;
}
