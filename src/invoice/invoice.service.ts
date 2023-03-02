import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}
  addInvoice(dto: InvoiceDto) {
    try {
      return this.prisma.invoice.create({
        data: {
          ticketId: dto.ticketId,
          tripId: dto.tripId,
          complete: dto.complete,
          date: new Date(dto.date),
          roomCost: Number(dto.roomCost),
          roomCount: Number(dto.roomCount),
          roomType: dto.roomType,
        },
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
  getInvoiceById(id: number) {
    try {
      return this.prisma.invoice.findFirst({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }
  updateInvoice(dto: InvoiceDto, id: number) {
    try {
      return this.prisma.invoice.update({
        data: {
          ticketId: dto.ticketId,
          tripId: dto.tripId,
          complete: dto.complete,
          date: new Date(dto.date),
          roomCost: dto.roomCost,
          roomCount: dto.roomCount,
          roomType: dto.roomType,
        },
        where: { id: Number(id) },
      });
    } catch (error) {
      return error;
    }
  }
}
