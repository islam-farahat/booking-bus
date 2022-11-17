import { IsNotEmpty } from 'class-validator';
export class BusDto {
  @IsNotEmpty()
  busNum: string;
  id?: number;
}
