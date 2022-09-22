import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AirQualityRecordDocument = AirQualityRecord & Document;

@Schema()
export class AirQualityRecord {
  @Prop({ required: true })
  ts: Date;

  @Prop({ required: true })
  aqius: number;

  @Prop({ required: true })
  mainus: string;

  @Prop({ required: true })
  aqicn: number;

  @Prop({ required: true })
  maincn: string;

}

export const AirQualityRecordSchema = SchemaFactory.createForClass(AirQualityRecord);
