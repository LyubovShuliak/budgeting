import { Module } from '@nestjs/common';
import { ShoppingHistoryService } from './shopping-history.service';
import { ShoppingHistoryController } from './shopping-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from '../common/config/typeorm/entities/History';
import { ItemName } from '../common/config/typeorm/entities/ItemName';
import { ShoppingList } from '../common/config/typeorm/entities/ShoppingList';
import { Tags } from '../common/config/typeorm/entities/Tags';
import { Price } from '../common/config/typeorm/entities/Price';
import { TagItemRelation } from '../common/config/typeorm/entities/TagItemRelation';

@Module({
  controllers: [ShoppingHistoryController],
  providers: [ShoppingHistoryService],
  imports: [
    TypeOrmModule.forFeature([
      History,
      ItemName,
      ShoppingList,
      Tags,
      Price,
      TagItemRelation,
    ]),
  ],
})
export class ShoppingHistoryModule {}
