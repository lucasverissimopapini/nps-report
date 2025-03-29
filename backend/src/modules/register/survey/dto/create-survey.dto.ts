import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsOptional, IsString, Length } from 'class-validator';

export class CreateSurveyDto {
  @ApiProperty({
    description: 'Nome do produto',
    required: true,
    example: 'Produto A',
  })
  @IsString({ message: 'O campo "nm_product" é obrigatório' })
  @Length(1, 500, {
    message:
      'O campo "nm_product" deve ter no mínimo 1 e no máximo 500 caracteres',
  })
  nm_product: string;

  @ApiProperty({
    description: 'Nota do produto',
    required: true,
    example: 5,
  })
  @IsInt({
    message: 'O campo "nu_rating" é obrigatório e deve ser um número inteiro.',
  })
  @IsIn([0, 1, 2, 3, 4, 5], {
    message: 'O campo "nu_rating" deve ser um número entre 0 e 5.',
  })
  nu_rating: number;

  @ApiProperty({
    description: 'Comentario do produto',
    required: true,
    example: 'Comentario A',
  })
  @IsString({ message: 'O campo "ds_comment" deve ser uma string.' })
  @IsOptional()
  ds_comment?: string;
}
