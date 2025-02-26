import { Module } from '@nestjs/common';

import { TypeOrmConfigModule } from './common/config/typeorm/typeorm.module';
import { ShoppingHistoryModule } from './shopping-history/shopping-history.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [TypeOrmConfigModule, ShoppingListModule, ShoppingHistoryModule],
})
export class AppModule {}
