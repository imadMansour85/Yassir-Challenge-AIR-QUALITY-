import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config({ path: require('find-config')('.env') })

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
