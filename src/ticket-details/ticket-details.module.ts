import { Module } from '@nestjs/common';
import { TicketDetailsController } from './ticket-details.controller';
import { TicketDetailsService } from './ticket-details.service';

@Module({
  controllers: [TicketDetailsController],
  providers: [TicketDetailsService],
})
export class TicketDetailsModule {}
