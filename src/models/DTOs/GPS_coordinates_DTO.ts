import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsLongitude,IsLatitude,Min,Max, IsNumber } from "class-validator";

export class GPS_coordinates {

  @ApiProperty({
    description: 'Longitude numerical value,must be between the range [-180, 180].',
  })
  @IsLongitude()
  lon: number;

  @ApiProperty({
    description: 'Latitude numerical value, must be between the range [-90, 90].',
  })
  @IsLatitude()
  lat: number;
}