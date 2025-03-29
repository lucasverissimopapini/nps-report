import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './modules/register/survey/survey.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ReponseErrorService } from './core/services/reponse-error/reponse-error.service';
import { PrismaModule } from './shared/services/prisma/prisma.module';

@Module({
  imports: [SurveyModule, DashboardModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, ReponseErrorService],
})
export class AppModule {}
