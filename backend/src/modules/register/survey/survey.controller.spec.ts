import { Test, TestingModule } from '@nestjs/testing';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { FindAllSurveyDto } from './dto/find-all-survey.dto';

describe('SurveyController', () => {
  let controller: SurveyController;
  let service: SurveyService;

  const respCreateSurveyDto = {
    id: '4a974d4c-4128-4c57-8b2b-1a86149483aa',
    nm_product: 'Produto A',
    nu_rating: 5,
    ds_comment: 'Comentário A',
    dt_create: '2025-03-27T18:11:14.649Z',
  };
  const respFindAllSurveyDto = {
    status: 200,
    code: 2001048,
    message: 'Requisição foi feita com sucesso',
    suggestion: 'Requisição foi feita com sucesso',
    data: [
      {
        id: '4a974d4c-4128-4c57-8b2b-1a86149483aa',
        nm_product: 'Test Survey',
        nu_rating: 5,
        ds_comment: 'Comentário A',
        dt_create: '2025-03-27T18:11:14.649Z',
      },
    ],
    total_register: 1,
    total_page: 1,
    page: 1,
    size: 10,
  };
  const respFindAllBadRequestSurveyLimitZeroDto = {
    status: 400,
    code: 4001001,
    message: 'Dados incorretos fornecidos.',
    suggestion:
      'Certifique-se de que os dados fornecidos estão no formato correto e atendem aos critérios esperados.',
    data: [
      {
        target: {
          nu_limit: 0,
          nu_page: 1,
        },
        value: 0,
        property: 'nu_limit',
        children: [],
        constrains: {
          isNotIn:
            'O valor do campo "nu_limit" não pode ser zero (0), deve possuir no mínimo 1 registro por página.',
        },
      },
    ],
  };
  const respFindAllBadRequestSurveyPageZeroDto = {
    status: 400,
    code: 4001001,
    message: 'Dados incorretos fornecidos.',
    suggestion:
      'Certifique-se de que os dados fornecidos estão no formato correto e atendem aos critérios esperados.',
    data: [
      {
        target: {
          nu_limit: 1,
          nu_page: 0,
        },
        value: 0,
        property: 'nu_page',
        children: [],
        constrains: {
          isNotIn: 'O valor do campo "nu_page" não pode ser zero (0).',
        },
      },
    ],
  };
  const respCreateBadRequestSurveyDto = {
    status: 400,
    code: 4001001,
    message: 'Dados incorretos fornecidos.',
    suggestion:
      'Certifique-se de que os dados fornecidos estão no formato correto e atendem aos critérios esperados.',
    data: [
      {
        target: {
          nm_product: 'Produto A',
          nu_rating: 324,
          ds_comment: 'Comentário A',
        },
        value: 324,
        property: 'nu_rating',
        children: [],
        constrains: {
          isIn: 'O campo "nu_rating" deve ser um número entre 0 e 5.',
        },
      },
    ],
  };

  const mockSurveyService = {
    create: jest.fn().mockResolvedValue(respCreateSurveyDto),
    findAll: jest.fn().mockResolvedValue(respFindAllSurveyDto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyController],
      providers: [
        {
          provide: SurveyService,
          useValue: mockSurveyService,
        },
      ],
    }).compile();

    controller = module.get<SurveyController>(SurveyController);
    service = module.get<SurveyService>(SurveyService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a survey', async () => {
      const dto: CreateSurveyDto = {
        nm_product: 'Produto A',
        nu_rating: 5,
        ds_comment: 'Comentario A',
      };
      await expect(controller.create(dto)).resolves.toBe(respCreateSurveyDto);
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('should return a bad request', async () => {
      const dto: CreateSurveyDto = {
        nm_product: 'Produto A',
        nu_rating: 324,
        ds_comment: 'Comentario A',
      };
      mockSurveyService.create.mockRejectedValue(respCreateBadRequestSurveyDto);
      await expect(controller.create(dto)).rejects.toBe(
        respCreateBadRequestSurveyDto,
      );
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should return all surveys', async () => {
      const dto: FindAllSurveyDto = { nu_page: 1, nu_limit: 10 };
      await expect(controller.findAll(dto)).resolves.toBe(respFindAllSurveyDto);
      expect(service.findAll).toHaveBeenCalledWith(dto);
    });

    it('should return a bad request nu_limit is zero', async () => {
      const dto: FindAllSurveyDto = { nu_page: 1, nu_limit: 0 };
      mockSurveyService.findAll.mockRejectedValue(
        respFindAllBadRequestSurveyLimitZeroDto,
      );
      await expect(controller.findAll(dto)).rejects.toBe(
        respFindAllBadRequestSurveyLimitZeroDto,
      );
      expect(service.findAll).toHaveBeenCalledWith(dto);
    });
    it('should return a bad request nu_page is zero', async () => {
      const dto: FindAllSurveyDto = { nu_page: 0, nu_limit: 0 };
      mockSurveyService.findAll.mockRejectedValue(
        respFindAllBadRequestSurveyPageZeroDto,
      );
      await expect(controller.findAll(dto)).rejects.toBe(
        respFindAllBadRequestSurveyPageZeroDto,
      );
      expect(service.findAll).toHaveBeenCalledWith(dto);
    });
  });
});
