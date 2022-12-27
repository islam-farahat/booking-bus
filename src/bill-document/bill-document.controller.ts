import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { BillDocumentService } from './bill-document.service';

@Controller('bill-document')
export class BillDocumentController {
  constructor(private readonly billDocumentService: BillDocumentService) {}

  @Post()
  create(@Body() createBillDocumentDto) {
    return this.billDocumentService.create(createBillDocumentDto);
  }

  @Get()
  findAll() {
    return this.billDocumentService.findAll();
  }

  @Get('/filter')
  findByDate(@Query() params) {
    return this.billDocumentService.findByDate(
      params.startDate,
      params.endDate,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billDocumentService.findOne(+id);
  }
}
