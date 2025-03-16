import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { AuthModule } from './auth/auth.module';
import { TypeOrmConfigModule } from './common/config/typeorm/typeorm.module';
import { JwtStrategy } from './common/strategies/jwt.strategy';
import { ShoppingHistoryModule } from './shopping-history/shopping-history.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmConfigModule,
    ShoppingListModule,
    ShoppingHistoryModule,
    AuthModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_KEY'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    JwtStrategy,
    {
      provide: 'FIREBASE_APP',
      useFactory: async (configService: ConfigService) => {
        return initializeApp({
          apiKey: configService.get('PROJECT_KEY'),
          authDomain: configService.get('AUTH_ADMIN'),
          databaseURL: configService.get('DATABASE'),
          projectId: configService.get('PROJECT_ID'),
          storageBucket: configService.get('BUCKET'),
          messagingSenderId: configService.get<string>('SENDER_ID'),
          appId: configService.get('APP_ID'),
          measurementId: configService.get('MEASERMENT_ID'),
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
