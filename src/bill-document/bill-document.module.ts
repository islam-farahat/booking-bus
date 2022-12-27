import { Module } from '@nestjs/common';
import { BillDocumentService } from './bill-document.service';
import { BillDocumentController } from './bill-document.controller';

@Module({
  controllers: [BillDocumentController],
  providers: [BillDocumentService]
})
export class BillDocumentModule {}
