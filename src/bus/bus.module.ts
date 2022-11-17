import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BusController],
  providers: [BusService],
})
export class BusModule {}
