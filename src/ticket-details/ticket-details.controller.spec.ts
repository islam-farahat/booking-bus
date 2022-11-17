import { Test, TestingModule } from '@nestjs/testing';
import { TicketDetailsController } from './ticket-details.controller';

describe('TicketDetailsController', () => {
  let controller: TicketDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketDetailsController],
    }).compile();

    controller = module.get<TicketDetailsController>(TicketDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
