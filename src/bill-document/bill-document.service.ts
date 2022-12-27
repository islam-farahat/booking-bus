import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateBillDocumentDto } from './dto/create-bill-document.dto';

@Injectable()
export class BillDocumentService {
  constructor(private prisma: PrismaService) {}
  async create(createBillDocumentDto: CreateBillDocumentDto) {
    return await this.prisma.billdocument.create({
      data: {
        buscount: createBillDocumentDto.buscount,
        date: new Date(createBillDocumentDto.date),
        from: createBillDocumentDto.from,
        fullName: createBillDocumentDto.fullName,
        price: createBillDocumentDto.price,
        to: createBillDocumentDto.to,
      },
    });
  }

  async findAll() {
    return await this.prisma.billdocument.findMany();
  }
  async findByDate(startDate: Date, endDate: Date) {
    return await this.prisma.billdocument.findMany({
      where: {
        AND: [
          { date: { gte: new Date(startDate) } },
          { date: { lte: new Date(endDate) } },
        ],
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.billdocument.findFirst({ where: { id: id } });
  }
}
