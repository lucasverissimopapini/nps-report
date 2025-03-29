import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { ReponseErrorService } from '../../../core/services/reponse-error/reponse-error.service';

@Module({
  controllers: [SurveyController],
  providers: [SurveyService, ReponseErrorService],
})
export class SurveyModule {}
