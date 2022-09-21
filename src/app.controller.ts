import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("air_quality")
  getAirQuality(
    @Query("lat") lat,
    @Query("lon") lon,
  ): any {
    return this.appService.getAirQuality(lon,lat);
  }
}
