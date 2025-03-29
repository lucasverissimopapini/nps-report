import { Test, TestingModule } from '@nestjs/testing';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { PrismaModule } from '../../../shared/services/prisma/prisma.module';
import { ReponseErrorService } from '../../../core/services/reponse-error/reponse-error.service';

describe('SurveyService', () => {
  let service: SurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyService, ReponseErrorService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<SurveyService>(SurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return save survey', async () => {
      const dto: CreateSurveyDto = {
        nm_product: 'Test name',
        nu_rating: 53,
      };

      const survey = await service.create(dto);
      expect(survey?.data).toHaveProperty('id');
      expect(survey?.data.nm_product).toBe(dto.nm_product);
    });
  });
});
