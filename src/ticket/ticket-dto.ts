import { IsNotEmpty } from 'class-validator';

export class TicketDto {
  id?: number;
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  mobile: string;
  @IsNotEmpty()
  nationality: string;
  @IsNotEmpty()
  idNumber: number;
  @IsNotEmpty()
  busNumber: number;
  @IsNotEmpty()
  chairNumber: number;
}
