import { InvoiceService } from './invoice.service';
import { InvoiceDto } from './invoice.dto';
import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';

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
  @Get(':id')
  getInvoiceById(@Param() params) {
    return this.invoiceService.getInvoiceById(params.id);
  }
  @Put(':id')
  updateInvoice(@Body() dto: InvoiceDto, @Param() params) {
    return this.invoiceService.updateInvoice(dto, params.id);
  }
}
