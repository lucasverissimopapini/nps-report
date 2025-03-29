import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { ReponseErrorService } from '../../core/services/reponse-error/reponse-error.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, ReponseErrorService],
})
export class DashboardModule {}
