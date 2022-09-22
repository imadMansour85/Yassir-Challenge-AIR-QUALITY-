import { AirQualityRecordDocument } from "../AirQualityRecord";

export interface AirQualityRecordInterface {
    ts: Date,
    aqius: number,  
    mainus: string,  
    aqicn: number,
    maincn: string,
  
}

export interface Response {
    result : AirQualityRecordInterface
}