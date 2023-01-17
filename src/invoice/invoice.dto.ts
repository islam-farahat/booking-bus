import { IsBoolean, IsNotEmpty } from 'class-validator';

export class InvoiceDto {
  id!: number;
  @IsNotEmpty()
  ticketId!: number[];
  @IsNotEmpty()
  tripId!: number;
  @IsNotEmpty()
  date: Date;
  @IsNotEmpty()
  complete: boolean;
}
