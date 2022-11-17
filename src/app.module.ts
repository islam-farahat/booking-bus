import { BusModule } from './bus/bus.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CityModule } from './city/city.module';
import { TripModule } from './trip/trip.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketDetailsModule } from './ticket-details/ticket-details.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    BusModule,
    CityModule,
    TripModule,
    TicketModule,
    TicketDetailsModule,
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
