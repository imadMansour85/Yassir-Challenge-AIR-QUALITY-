import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './air_quality.service';
import { GPS_coordinates } from './models/DTOs/GPS_coordinates_DTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("air_quality")
  @ApiOperation({ summary: 'get air quality for a given zone' })
  @UsePipes(ValidationPipe)
  getAirQuality(
    @Query() jps_coordinates: GPS_coordinates,
  ): any {
    return this.appService.getAirQuality(jps_coordinates);
  }

  @Get("most_polluted_time")
  @ApiOperation({ summary: 'the most polluted time' })
  mostPolluted(): any {
    return this.appService.mostPollutedDay();
  }

}
