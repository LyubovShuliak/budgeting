import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { LoggerModule } from '../../logger/logger.module';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

import { History } from './entities/History';
import { ItemName } from './entities/ItemName';
import { Price } from './entities/Price';
import { ShoppingList } from './entities/ShoppingList';
import { TagItemRelation } from './entities/TagItemRelation';
import { Tags } from './entities/Tags';
import { User } from './entities/User';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.getDatabaseHost(),
  port: config.getDatabasePort(),
  username: config.getDatabaseUser(),
  password: config.getDatabasePassword(),
  database: config.getDatabaseName(),
  entities: [
    History,
    ItemName,
    ShoppingList,
    Tags,
    Price,
    TagItemRelation,
    User,
  ],
  migrations: [],
  migrationsRun: true,
  // cache: false,
  synchronize: true,
  logging: true,
});

@Module({
  imports: [
    EnvironmentConfigModule,
    LoggerModule,
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    }),
  ],
})
export class TypeOrmConfigModule {}
