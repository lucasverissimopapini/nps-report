import { Test, TestingModule } from '@nestjs/testing';
import { ReponseErrorService } from './reponse-error.service';

describe('ReponseErrorService', () => {
  let service: ReponseErrorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReponseErrorService],
    }).compile();

    service = module.get<ReponseErrorService>(ReponseErrorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
