import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateBadRequestSurvey,
  CreateSuccessSurvey,
  FindAllAgrupedSuccessSurvey,
  FindAllBadRequestSurvey,
  FindAllSuccessSurvey,
} from './example-swagger';
import { FindAllSurveyDto } from './dto/find-all-survey.dto';
import { AuthGuard } from '../../../core/guards/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Survey / Pesquisa de satisfação')
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @ApiOperation({
    summary: 'Cadastrar pesquisa de satisfação',
    description:
      'Essa rota possibilita voce efetuar o cadastro de uma pesquisade satisfação de produto.',
  })
  @ApiResponse(CreateSuccessSurvey)
  @ApiBadRequestResponse(CreateBadRequestSurvey)
  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveyService.create(createSurveyDto);
  }

  @ApiOperation({
    summary: 'Listagem das pesquisas de satisfação',
    description: 'Listar todas as pesquisas de satisfação com páginação',
  })
  @ApiOkResponse(FindAllSuccessSurvey)
  @ApiBadRequestResponse(FindAllBadRequestSurvey)
  @Get()
  findAll(@Query() params: FindAllSurveyDto) {
    return this.surveyService.findAll(params);
  }

  @ApiOperation({
    summary: 'Listagem das pesquisas de satisfação agrupadas por produto',
    description:
      'Listar todas as pesquisas de satisfação agrupadas por produto',
  })
  @ApiOkResponse(FindAllAgrupedSuccessSurvey)
  @ApiBadRequestResponse(FindAllBadRequestSurvey)
  @Get('agruped')
  findAllAgruped(@Query() params: FindAllSurveyDto) {
    return this.surveyService.findAllAgruped(params);
  }
}
