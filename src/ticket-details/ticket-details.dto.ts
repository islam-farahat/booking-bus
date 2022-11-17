import { IsNotEmpty } from 'class-validator';

export class TicketDetailsDto {
  @IsNotEmpty()
  license: string;
  @IsNotEmpty()
  mobile: string;
  @IsNotEmpty()
  branchName: string;
  @IsNotEmpty()
  terms: string;
  id?: number;
}
