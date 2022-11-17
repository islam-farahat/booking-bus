import { TicketDto } from './ticket-dto';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async addTicket(dto: TicketDto) {
    try {
      return await this.prisma.ticket.create({
        data: {
          busNumber: Number(dto.busNumber),
          chairNumber: Number(dto.chairNumber),
          fullName: dto.fullName,
          idNumber: Number(dto.idNumber),
          mobile: dto.mobile,
          nationality: dto.nationality,
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getTickets() {
    try {
      return await this.prisma.ticket.findMany();
    } catch (error) {
      return error;
    }
  }
  async getTicket(id: number) {
    try {
      return await this.prisma.ticket.findUnique({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }
  async getTicketsByBusId(busId: number) {
    try {
      return await this.prisma.ticket.findMany({
        where: { busNumber: Number(busId) },
      });
    } catch (error) {
      return error;
    }
  }
}
