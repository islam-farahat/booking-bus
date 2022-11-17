import { PrismaService } from './../prisma/prisma.service';

import { BusDto } from './bus.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusService {
  constructor(private prisma: PrismaService) {}
  async addBus(dto: BusDto) {
    try {
      return await this.prisma.bus.create({
        data: {
          busNum: dto.busNum,
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getBuses() {
    try {
      return await this.prisma.bus.findMany();
    } catch (error) {
      return error;
    }
  }
  async getBus(id: number) {
    try {
      return await this.prisma.bus.findUnique({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }
  async removeBus(id: number) {
    try {
      return await this.prisma.bus.delete({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }
}
