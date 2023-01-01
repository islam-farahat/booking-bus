import { IsNotEmpty } from 'class-validator';

export class QrCodeDto {
  @IsNotEmpty()
  sellerName: string;
  @IsNotEmpty()
  vatNumber: string;
  @IsNotEmpty()
  timestamp: string;
  @IsNotEmpty()
  total: string;
  @IsNotEmpty()
  vatTotal: string;
}
