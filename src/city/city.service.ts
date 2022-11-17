import { CityDto } from './city-dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  async addCity(dto: CityDto) {
    try {
      return await this.prisma.city.create({
        data: { cityName: dto.cityName },
      });
    } catch (error) {
      return error;
    }
  }
  async getCites() {
    try {
      return await this.prisma.city.findMany();
    } catch (error) {
      return error;
    }
  }
  async removeCity(id: number) {
    try {
      return await this.prisma.city.delete({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }
}
