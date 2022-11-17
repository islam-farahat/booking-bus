import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}
  addInvoice(dto: InvoiceDto) {
    try {
      return this.prisma.invoice.create({
        data: { ticketId: dto.ticketId, tripId: dto.tripId },
      });
    } catch (error) {
      return error;
    }
  }
  getInvoices() {
    try {
      return this.prisma.invoice.findMany();
    } catch (error) {
      return error;
    }
  }
}
