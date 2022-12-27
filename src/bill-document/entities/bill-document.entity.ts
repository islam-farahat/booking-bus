import { IsNotEmpty } from 'class-validator';

export class BillDocument {
  id?: number;
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  buscount: number;
  @IsNotEmpty()
  from: string;
  @IsNotEmpty()
  to: string;
  @IsNotEmpty()
  date: Date;
}
