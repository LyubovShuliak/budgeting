import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ItemName } from './ItemName';
import { Price } from './Price';

@Entity({ database: process.env.DATABASE_NAME, name: 'history' })
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: string;
  @OneToOne(() => Price)
  @JoinColumn({ name: 'price_id' })
  price: Price;
  @OneToOne(() => ItemName)
  @JoinColumn({ name: 'item_id' })
  item: ItemName;
}
