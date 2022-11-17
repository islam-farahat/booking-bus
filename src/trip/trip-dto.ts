import { IsNotEmpty } from 'class-validator';
export class TripDto {
  @IsNotEmpty()
  from: string;
  @IsNotEmpty()
  to: string;
  @IsNotEmpty()
  date: string;
  @IsNotEmpty()
  time: string;
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  busNumber: string;
  @IsNotEmpty()
  seatsCount: number;
  @IsNotEmpty()
  seats: boolean[];
  id?: number;
}
