import { Injectable } from '@nestjs/common';
import axios from 'axios'
const externalAPICall = axios.create()

@Injectable()
export class AppService {
  async getAirQuality(lat, lon): Promise<any> {
    try {
      let result: any = await externalAPICall.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.AIR_QUALITY_API}`);
      return { result: result.data.data.current };
    } catch (error) {
      console.log(error.message);
      return error.message
    }
  }
}
