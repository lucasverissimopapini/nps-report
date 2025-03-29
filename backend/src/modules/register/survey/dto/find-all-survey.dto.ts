import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNotIn } from 'class-validator';

export class FindAllSurveyDto {
  @ApiProperty({
    description: 'Numero de itens por página.',
    required: true,
  })
  @Transform(({ value }) => {
    return parseInt(value);
  })
  @IsInt({
    message:
      'O parametro "nu_limit" ele é obrigatório e deve ser um número inteiro',
  })
  @IsNotIn([0], {
    message:
      'O valor do campo "nu_limit" não pode ser zero (0), deve possuir no mínimo 1 registro por página.',
  })
  nu_limit: number;

  @ApiProperty({
    description: 'Número da página.',
    required: true,
  })
  @Transform(({ value }) => {
    return parseInt(value);
  })
  @IsInt({
    message:
      'O parametro "nu_page" ele é obrigatório e deve ser um número inteiro',
  })
  @IsNotIn([0], {
    message: 'O valor do campo "nu_page" não pode ser zero (0).',
  })
  nu_page: number;
}
