import { ApiResponseOptions } from '@nestjs/swagger';

export const CreateSuccessSurvey: ApiResponseOptions = {
  status: 201,
  description: 'Operação com sucesso.',
  schema: {
    type: 'object',
    properties: {
      status: { type: 'number', example: 201 },
      code: { type: 'number', example: 2011048 },
      message: {
        type: 'string',
        example: 'Requisição foi feita com sucesso',
      },
      suggestion: {
        type: 'string',
        example: 'Requisição foi feita com sucesso',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '4a974d4c-4128-4c57-8b2b-1a86149483aa',
          },
          nm_product: { type: 'string', example: 'Produto A' },
          nu_rating: { type: 'number', example: 5 },
          ds_comment: { type: 'string', example: 'Comentário A' },
          dt_create: { type: 'string', example: '2025-03-27T18:11:14.649Z' },
        },
      },
    },
  },
};

export const CreateBadRequestSurvey: ApiResponseOptions = {
  status: 400,
  description: 'Exemplo de erro quando o body esta com algum campo inválido !',
  schema: {
    type: 'object',
    properties: {
      status: { type: 'number', example: 400 },
      code: { type: 'number', example: 4001001 },
      message: {
        type: 'string',
        example: 'Dados incorretos fornecidos.',
      },
      suggestion: {
        type: 'string',
        example:
          'Certifique-se de que os dados fornecidos estão no formato correto e atendem aos critérios esperados.',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            target: {
              type: 'object',
              properties: {
                nm_product: { type: 'string', example: 'Produto A' },
                nu_rating: { type: 'number', example: '5' },
                ds_comment: { type: 'string', example: 'Comentário A' },
              },
            },
            value: { type: 'string', example: '5' },
            property: { type: 'string', example: 'nu_rating' },
            children: { type: 'array', example: [] },
            constrains: {
              type: 'object',
              properties: {
                isIn: {
                  type: 'string',
                  example:
                    'O campo "nu_rating" deve ser um número entre 0 e 5.',
                },
                isInt: {
                  type: 'string',
                  example:
                    'O campo "nu_rating" é obrigatório e deve ser um número inteiro.',
                },
              },
            },
          },
        },
      },
    },
  },
};

export const FindAllSuccessSurvey: ApiResponseOptions = {
  status: 200,
  description: 'Operação com sucesso.',
  schema: {
    type: 'object',
    properties: {
      status: { type: 'number', example: 200 },
      code: { type: 'number', example: 2001048 },
      message: {
        type: 'string',
        example: 'Requisição foi feita com sucesso',
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
            id: {
              type: 'string',
              example: '4a974d4c-4128-4c57-8b2b-1a86149483aa',
            },
            nm_product: { type: 'string', example: 'Produto A' },
            nu_rating: { type: 'number', example: 5 },
            ds_comment: { type: 'string', example: 'Comentário A' },
            dt_create: { type: 'string', example: '2025-03-27T18:11:14.649Z' },
          },
        },
      },
      total_register: { type: 'number', example: 1 },
      total_page: { type: 'number', example: 1 },
      page: { type: 'number', example: 1 },
      size: { type: 'number', example: 10 },
    },
  },
};

export const FindAllAgrupedSuccessSurvey: ApiResponseOptions = {
  status: 200,
  description: 'Operação com sucesso.',
  schema: {
    type: 'object',
    properties: {
      status: { type: 'number', example: 200 },
      code: { type: 'number', example: 2001048 },
      message: {
        type: 'string',
        example: 'Requisição foi feita com sucesso',
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
            id: {
              type: 'string',
              example: '4a974d4c-4128-4c57-8b2b-1a86149483aa',
            },
            nm_product: { type: 'string', example: 'Produto A' },
            avg_rating: { type: 'number', example: 5 },
            sum_rating: { type: 'number', example: 10 },
          },
        },
      },
      total_register: { type: 'number', example: 1 },
      total_page: { type: 'number', example: 1 },
      page: { type: 'number', example: 1 },
      size: { type: 'number', example: 10 },
    },
  },
};

export const FindAllBadRequestSurvey: ApiResponseOptions = {
  status: 400,
  description: 'Exemplo de erro quando a query params está inválida !',
  schema: {
    type: 'object',
    properties: {
      status: { type: 'number', example: 400 },
      code: { type: 'number', example: 4001001 },
      message: {
        type: 'string',
        example: 'Dados incorretos fornecidos.',
      },
      suggestion: {
        type: 'string',
        example:
          'Certifique-se de que os dados fornecidos estão no formato correto e atendem aos critérios esperados.',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            target: {
              type: 'object',
              properties: {
                nu_limit: { type: 'number', example: 0 },
                nu_page: { type: 'number', example: 1 },
              },
            },
            value: { type: 'number', example: 0 },
            property: { type: 'string', example: 'nu_limit' },
            children: { type: 'array', example: [] },
            constrains: {
              type: 'object',
              properties: {
                isNotIn: {
                  type: 'string',
                  example:
                    'O valor do campo "nu_limit" não pode ser zero (0), deve possuir no mínimo 1 registro por página.',
                },
              },
            },
          },
        },
      },
    },
  },
};
