import { HttpStatus, Injectable } from '@nestjs/common';
import { dicionaryCode } from '../../core/dictionary/http-dictionary';
import { PrismaService } from '../../shared/services/prisma/prisma.service';
import { ReponseErrorService } from '../../core/services/reponse-error/reponse-error.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly responseError: ReponseErrorService,
  ) {}

  /**
   * * Calcula a nota NPS (Net Promoter Score) para cada produto
   * * A nota NPS é calculada como a diferença entre a porcentagem de
   * * promotores e a porcentagem de detratores.
   */
  async calculeNps() {
    try {
      const sql = `
          WITH survey AS
  (SELECT a.nm_product,
          COUNT(CASE
                    WHEN a.nu_rating >= 4 THEN 1
                END) AS nu_promotor,
          COUNT(CASE
                    WHEN a.nu_rating <= 2 THEN 1
                END) AS nu_detrator,
          COUNT (a.nu_rating) AS nu_count_total
   FROM tb_survey a
   GROUP BY a.nm_product)
SELECT s.nm_product,
       (s.nu_promotor * 100 / s.nu_count_total) AS pct_promotor,
       (s.nu_detrator * 100 / s.nu_count_total) AS pct_detrador,
       ((s.nu_promotor * 100 / s.nu_count_total) - (s.nu_detrator * 100 / s.nu_count_total)) AS nu_nps
FROM survey s
ORDER BY nu_nps DESC
      `;

      const data: {
        nm_product: string;
        pct_promotor: number;
        pct_detrador: number;
        nu_nps: number;
      }[] = await this.prisma.$queryRawUnsafe(sql);

      return {
        status: HttpStatus.OK,
        ...dicionaryCode.SUCCESS_OK,
        data: data.map((item) => {
          return {
            nm_product: item.nm_product,
            pct_promotor: Number(item.pct_promotor),
            pct_detrador: Number(item.pct_detrador),
            nu_nps: Number(item.nu_nps),
          };
        }),
      };
    } catch (error) {
      console.log('SurveyService - calculeNps --> ', error);
      return this.responseError.errorSend(error);
    }
  }
}
