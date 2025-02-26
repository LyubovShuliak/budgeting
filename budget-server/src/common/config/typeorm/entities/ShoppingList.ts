import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ItemName } from './ItemName';

@Entity({ database: process.env.DATABASE_NAME, name: 'shoppingList' })
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;
  @OneToOne(() => ItemName)
  @JoinColumn({ name: 'item_id' })
  item: ItemName;
}
