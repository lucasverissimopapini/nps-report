import { ApiResponseOptions } from '@nestjs/swagger';

export const CalculateNpsSuccess: ApiResponseOptions = {
  status: 200,
  description: 'Operação com sucesso',
  schema: {
    type: 'object',
    properties: {
      status: { type: 'number', example: 200 },
      code: { type: 'number', example: 2001048 },
      message: {
        type: 'string',
        example: 'Sucesso na operação.',
      },
      suggestion: {
        type: 'string',
        example: 'Requisição foi feita com sucesso',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            nm_product: { type: 'string', example: 'Test name' },
            pct_promotor: { type: 'number', example: 57 },
            pct_detrador: { type: 'number', example: 28 },
            nu_nps: { type: 'number', example: 29 },
          },
        },
      },
    },
  },
};
