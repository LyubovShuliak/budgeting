import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { EnvironmentConfigService } from './common/config/environment-config/environment-config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const config = new EnvironmentConfigService(configService);

  await app.listen(+config.getPort());
}
bootstrap();
