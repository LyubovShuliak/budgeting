import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ItemName } from './ItemName';
import { Tags } from './Tags';

@Entity({ database: process.env.DATABASE_NAME, name: 'tag_item' })
export class TagItemRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Tags, {})
  @JoinColumn({ name: 'tag_id' })
  tag: Tags;
  @ManyToOne(() => ItemName, (item) => item.item)
  @JoinColumn({ name: 'item_id' })
  item: ItemName;
}
