import { Test, TestingModule } from '@nestjs/testing';
import { SsrController } from './ssr.controller';
import { SsrService } from './ssr.service';
import { MockService } from '../mock/mock.service';

describe('SsrController', () => {
  let controller: SsrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsrController],
      providers: [
        {
          provide: SsrService,
          useValue: { renderVueApp: jest.fn() },
        },
        {
          provide: MockService,
          useValue: { getMockData: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<SsrController>(SsrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
