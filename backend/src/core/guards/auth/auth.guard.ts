import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { dicionaryCode } from '../../dictionary/http-dictionary';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;

    if (!authorization) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          ...dicionaryCode.AUTHENTICATION_FAILED,
          data: {},
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    

    const token = authorization.split(' ')[1];

    if (token !== '6b73f2c77cb2cca1135b3c4aa5a049ff') {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          ...dicionaryCode.AUTHENTICATION_FAILED,
          data: {},
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    return true;
  }
}
