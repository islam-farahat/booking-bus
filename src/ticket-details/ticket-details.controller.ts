import { TicketDetailsService } from './ticket-details.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TicketDetailsDto } from './ticket-details.dto';

@Controller('ticket-details')
export class TicketDetailsController {
  constructor(private ticketDetailsService: TicketDetailsService) {}
  @Post()
  addTicketDetails(@Body() dto: TicketDetailsDto) {
    return this.ticketDetailsService.addTicketDetails(dto);
  }
  @Get(':id')
  getTicketDetails(@Param() params) {
    return this.ticketDetailsService.getTicketDetailsByName(params.id);
  }

  @Put(':name')
  updateTicketDetailsByName(@Body() dto: TicketDetailsDto, @Param() params) {
    return this.ticketDetailsService.updateTicketDetailsByName(
      dto,
      params.name,
    );
  }
}
