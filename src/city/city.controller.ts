import { CityDto } from './city-dto';
import { CityService } from './city.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {}
  @Post()
  addCity(@Body() dto: CityDto) {
    return this.cityService.addCity(dto);
  }
  @Get()
  getCites() {
    return this.cityService.getCites();
  }
  @Delete(':id')
  removeCity(@Param() params) {
    return this.cityService.removeCity(params.id);
  }
}
