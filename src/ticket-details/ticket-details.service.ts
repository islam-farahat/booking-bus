import { TicketDetailsDto } from './ticket-details.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketDetailsService {
  constructor(private prisma: PrismaService) {}
  async addTicketDetails(dto: TicketDetailsDto) {
    try {
      return await this.prisma.ticketDetail.create({
        data: {
          license: dto.license,
          mobile: dto.mobile,
          branchName: dto.branchName,
          terms: dto.terms,
          vatSerial: dto.vatSerial,
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getTicketDetailsByName(name: string) {
    try {
      return await this.prisma.ticketDetail.findUnique({
        where: { branchName: name },
      });
    } catch (error) {
      return error;
    }
  }

  async updateTicketDetailsByName(dto: TicketDetailsDto, name: string) {
    try {
      return await this.prisma.ticketDetail.update({
        where: { branchName: name },
        data: {
          license: dto.license,
          mobile: dto.mobile,
          terms: dto.terms,
          vatSerial: dto.vatSerial,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
