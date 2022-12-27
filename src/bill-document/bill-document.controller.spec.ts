import { Test, TestingModule } from '@nestjs/testing';
import { BillDocumentController } from './bill-document.controller';
import { BillDocumentService } from './bill-document.service';

describe('BillDocumentController', () => {
  let controller: BillDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillDocumentController],
      providers: [BillDocumentService],
    }).compile();

    controller = module.get<BillDocumentController>(BillDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
