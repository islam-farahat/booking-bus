import { Test, TestingModule } from '@nestjs/testing';
import { BillDocumentService } from './bill-document.service';

describe('BillDocumentService', () => {
  let service: BillDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillDocumentService],
    }).compile();

    service = module.get<BillDocumentService>(BillDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
