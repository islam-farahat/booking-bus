import { TicketDetailsService } from './ticket-details.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TicketDetailsDto } from './ticket-details.dto';
import { EInvoiceFields, generateQR } from '@zatca/qr';
import { QrCodeDto } from './qrcode.dto';
import { json } from 'stream/consumers';

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

  @Post('/qr-code')
  async generateQrCode(@Body() dto: QrCodeDto) {
    const qrData: EInvoiceFields = {
      sellerName: dto.sellerName,
      vatNumber: dto.vatNumber,
      timestamp: dto.timestamp,
      total: dto.total,
      vatTotal: dto.vatTotal,
    };
    const qrBuffer = await generateQR(qrData, { format: 'data-url' });
    return JSON.stringify(qrBuffer);
  }
}
