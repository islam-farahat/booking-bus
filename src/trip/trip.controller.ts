import { TripDto } from './trip-dto';
import { TripService } from './trip.service';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('trip')
export class TripController {
  constructor(private tripService: TripService) {}
  @Post()
  addTrip(@Body() dto: TripDto) {
    return this.tripService.addTrip(dto);
  }
  @Get()
  getTrips() {
    return this.tripService.getTrips();
  }
  @Get('/filter')
  findByDate(@Query() params) {
    return this.tripService.findByDate(params.startDate, params.endDate);
  }
  @Get('/tody-filter')
  findByTodyDate(@Query() params) {
    return this.tripService.findByTodyDate(params.date);
  }
  @Get(':id')
  getTrip(@Param() params) {
    return this.tripService.getTrip(params.id);
  }
  @Put(':id')
  updateTrip(@Body() dto: TripDto, @Param() params) {
    return this.tripService.updateTrip(dto, params.id);
  }
}
