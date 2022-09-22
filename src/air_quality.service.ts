import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios'
import { AirQualityRecord, AirQualityRecordDocument } from './models/AirQualityRecord';


const externalAPICall = axios.create()

@Injectable()
export class AppService {
  constructor(@InjectModel(AirQualityRecord.name) private AirQualityRecordModel: Model<AirQualityRecordDocument>) { }
  async getAirQuality(jps_coordinates): Promise<any> {
    try {
      let result: any = await externalAPICall.get(`http://api.airvisual.com/v2/nearest_city?lat=${jps_coordinates.lat}&lon=${jps_coordinates.lon}&key=${process.env.AIR_QUALITY_API}`);
      const airQualityRecord = new this.AirQualityRecordModel(result.data.data.current.pollution);
      airQualityRecord.save();

      return { result: result.data.data.current.pollution };
    } catch (error) {
      console.log(error.message);
      return error.message
    }
  }
  async mostPollutedDay(): Promise<any> {
    try {
      let max_value = await this.AirQualityRecordModel.find().sort({ aqius: -1, ts: -1 }).limit(1).exec()
      return { result: max_value };
    } catch (error) {
      console.log(error.message);
      return error.message
    }
  }
}
