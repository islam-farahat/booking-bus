import { IsNotEmpty } from 'class-validator';

export class InvoiceDto {
  id!: number;
  @IsNotEmpty()
  ticketId!: number[];
  @IsNotEmpty()
  tripId!: number;
}
