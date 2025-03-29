import { ConsoleLogger, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { dicionaryCode } from '../../../core/dictionary/http-dictionary';
import { PrismaService } from '../../../shared/services/prisma/prisma.service';
import { ReponseErrorService } from '../../../core/services/reponse-error/reponse-error.service';
import { FindAllSurveyDto } from './dto/find-all-survey.dto';

@Injectable()
export class SurveyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly responseError: ReponseErrorService,
  ) {}

  /**
   * * Cria um novo registro de avaliacao.
   *
   * @param createSurveyDto dados da avaliac o
   * @returns um objeto com status, codigo, mensagem e dados do registro criado
   */
  async create(createSurveyDto: CreateSurveyDto) {
    try {
      const register = await this.prisma.tb_survey.create({
        data: createSurveyDto,
      });

      return {
        status: HttpStatus.CREATED,
        ...dicionaryCode.SUCCESS_CREATE,
        data: register,
      };
    } catch (error) {
      console.log('SurveyService - create --> ', error);

      return this.responseError.errorSend(error);
    }
  }

  /**
   * * Busca todas as avaliacoes.
   *
   * @param payload nu_limit e nu_page
   */
  async findAll(payload: FindAllSurveyDto) {
    try {
      const { nu_limit, nu_page } = payload;

      const total_register = await this.prisma.tb_survey.count();
      const data = await this.prisma.tb_survey.findMany({
        skip: (nu_page - 1) * nu_limit,
        take: nu_limit,
      });
      const total_page = total_register
        ? Math.ceil(total_register / nu_limit)
        : 1;

      return {
        status: HttpStatus.OK,
        ...dicionaryCode.SUCCESS_OK,
        data,
        total_register,
        total_page,
        page: nu_page,
        size: nu_limit,
      };
    } catch (error) {
      console.log('SurveyService - findAll --> ', error);
      return this.responseError.errorSend(error);
    }
  }

  /**
   * * Busca todas as avaliacoes agrupadas por produto, com os valores de
   * * nota media e soma de nota.
   *
   * @param filter nu_limit e nu_page
   */
  async findAllAgruped(filter: FindAllSurveyDto) {
    try {
      const { nu_limit, nu_page } = filter;

      const sql = `
        SELECT
          a.nm_product,
          AVG(a.nu_rating) AS avg_rating,
          SUM(a.nu_rating) AS sum_rating
        FROM tb_survey a
        GROUP BY a.nm_product
        ORDER BY a.nm_product DESC
      `;

      const data: {
        nm_product: string;
        avg_rating: number;
        sum_rating: number;
      }[] = await this.prisma.$queryRawUnsafe(`
        ${sql}  
        LIMIT ${nu_limit}
        OFFSET ${nu_limit * (nu_page - 1)}
        `);
      const total_register: {
        nm_product: string;
        avg_rating: number;
        sum_rating: number;
      }[] = await this.prisma.$queryRawUnsafe(sql);
      const total_page = total_register.length
        ? Math.ceil(total_register.length / nu_limit)
        : 1;

      return {
        status: HttpStatus.OK,
        ...dicionaryCode.SUCCESS_OK,
        data: data.map((item) => {
          return {
            nm_product: item.nm_product,
            avg_rating: Number(Number(item.avg_rating).toFixed(2)),
            sum_rating: Number(Number(item.sum_rating).toFixed(2)),
          };
        }),
        total_register: total_register.length,
        total_page,
        page: nu_page,
        size: nu_limit,
      };
    } catch (error) {
      console.log('SurveyService - findAllAgruped --> ', error);
      return this.responseError.errorSend(error);
    }
  }
}
