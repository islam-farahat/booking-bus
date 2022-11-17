import { InvoiceService } from './invoice.service';
import { InvoiceDto } from './invoice.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}
  @Post()
  addInvoice(@Body() dto: InvoiceDto) {
    return this.invoiceService.addInvoice(dto);
  }
  @Get()
  getInvoices() {
    return this.invoiceService.getInvoices();
  }
}
