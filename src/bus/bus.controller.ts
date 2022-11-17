import { BusService } from './bus.service';
import { BusDto } from './bus.dto';
import { JwtGuard } from './../auth/guard/index';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

// @UseGuards(JwtGuard)
@Controller('buses')
export class BusController {
  constructor(private busService: BusService) {}
  @Post()
  addBus(@Body() dto: BusDto) {
    return this.busService.addBus(dto);
  }
  @Get()
  getBuses() {
    return this.busService.getBuses();
  }
  @Get(':id')
  getBus(@Param() params) {
    return this.busService.getBus(params.id);
  }
  @Delete(':id')
  removeBus(@Param() params) {
    return this.busService.removeBus(params.id);
  }
}
