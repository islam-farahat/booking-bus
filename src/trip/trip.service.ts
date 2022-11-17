import { TripDto } from './trip-dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async addTrip(dto: TripDto) {
    try {
      return await this.prisma.trip.create({
        data: {
          date: dto.date,
          price: dto.price,
          time: dto.time,
          seatsCount: dto.seatsCount,
          busNumber: dto.busNumber,
          from: dto.from,
          to: dto.to,
          seats: dto.seats,
        },
      });
    } catch (error) {
      return error;
    }
  }
  async getTrips() {
    try {
      return await this.prisma.trip.findMany();
    } catch (error) {
      return error;
    }
  }
  async getTrip(id: number) {
    try {
      return await this.prisma.trip.findUnique({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }
  async updateTrip(dto: TripDto, id: number) {
    try {
      return await this.prisma.trip.update({
        data: {
          date: dto.date,
          price: dto.price,
          time: dto.time,
          seatsCount: dto.seatsCount,
          busNumber: dto.busNumber,
          from: dto.from,
          to: dto.to,
          seats: dto.seats,
        },
        where: { id: Number(id) },
      });
    } catch (error) {
      return error;
    }
  }
}
