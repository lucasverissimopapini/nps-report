/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { dicionaryCode } from '../../dictionary/http-dictionary';
import { PrismaService } from '../../../shared/services/prisma/prisma.service';
import { ValidationError } from 'class-validator';

@Injectable()
export class ReponseErrorService {
  constructor(private readonly prisma: PrismaService) {}

  errorSend(
    error:
      | HttpException
      | Prisma.PrismaClientKnownRequestError
      | ValidationError[]
      | any,
  ) {
    if (error instanceof HttpException) {
      throw error;
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const errorMessage =
        this.prisma.errorMsg(error.code) ??
        'Ocorreu um erro com banco de dados. Erro não identificado !';
      console.log(errorMessage);

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          ...dicionaryCode.INVALID_DATA,
          data: {},
          message: errorMessage,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (error instanceof ValidationError) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          ...dicionaryCode.INVALID_DATA,
          data: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    throw new HttpException(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        ...dicionaryCode.INTERNAL_SERVER_ERROR,
        data: {},
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
