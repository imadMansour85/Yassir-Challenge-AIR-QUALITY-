import { Module } from '@nestjs/common';
import { AppController } from './air_quality.controller';
import { AppService } from './air_quality.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AirQualityRecord, AirQualityRecordSchema } from './models/AirQualityRecord';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), MongooseModule.forFeature([{ name: AirQualityRecord.name, schema: AirQualityRecordSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
