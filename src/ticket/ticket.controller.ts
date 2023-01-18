import { TicketDto } from './ticket-dto';
import { TicketService } from './ticket.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}
  @Post()
  addTicket(@Body() dto: TicketDto) {
    return this.ticketService.addTicket(dto);
  }
  @Get()
  getTickets() {
    return this.ticketService.getTickets();
  }
  @Get(':id')
  getTicket(@Param() params) {
    return this.ticketService.getTicket(params.id);
  }
  @Get('info/:id')
  getTicketsByBusId(@Param() params) {
    return this.ticketService.getTicketsByBusId(params.id);
  }
  @Put(':id')
  updateTicket(@Body() dto: TicketDto, @Param() params) {
    return this.ticketService.updateTicket(params.id, dto);
  }
}
