import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Tags } from './Tags';
import { ItemName } from './ItemName';

@Entity({ database: process.env.DATABASE_NAME, name: 'items' })
export class TagItemRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Tags, {})
  @JoinColumn({ name: 'tag_id' })
  tag: Tags;
  @OneToOne(() => ItemName, {})
  @JoinColumn({ name: 'item_id' })
  item: ItemName;
}
