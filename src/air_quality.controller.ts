import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './air_quality.service';
import { AirQualityRecordDocument } from './models/AirQualityRecord';
import { GPS_coordinates } from './models/DTOs/GPS_coordinates_DTO';
import {Response} from "./models/interfaces/AirQualityRecordInterface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("air_quality")
  @ApiOperation({ summary: 'get air quality for a given zone' })
  @UsePipes(ValidationPipe)
  getAirQuality(
    @Query() jps_coordinates: GPS_coordinates,
  ): Promise<Response> {
    return this.appService.getAirQuality(jps_coordinates);
  }

  @Get("most_polluted_time")
  @ApiOperation({ summary: 'the most polluted time' })
  mostPolluted(): Promise<AirQualityRecordDocument[]>  {
    return this.appService.mostPollutedDay();
  }

}
