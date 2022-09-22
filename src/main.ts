import { NestFactory } from '@nestjs/core';
import { AppModule } from './air_quality.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import "./jobs/jobs"

require('dotenv').config({ path: require('find-config')('.env') })

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('AIR Quality')
  .setDescription('AIR Quality API')
  .setVersion('1.0')
  .addTag('AIR_QUALITY')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
