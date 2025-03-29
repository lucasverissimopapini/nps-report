import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CalculateNpsSuccess } from './example-swagger';
import { AuthGuard } from '../../core/guards/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Dashboard')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @ApiOperation({
    summary: 'Calcula a nota NPS (Net Promoter Score) para cada produto',
    description:
      'A nota NPS é calculada como a diferença entre a porcentagem de promotores e a porcentagem de detratores.',
  })
  @ApiOkResponse(CalculateNpsSuccess)
  @Get('nps')
  calculateNps() {
    return this.dashboardService.calculeNps();
  }
}
