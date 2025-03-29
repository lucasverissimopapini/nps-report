import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { dicionaryCode } from './core/dictionary/http-dictionary';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory(errors) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            ...dicionaryCode.INVALID_DATA,
            data: errors,
          },
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  );
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('NPS Survey API')
    .setDescription(
      'API para uma aplicação NPS Survey que tem a finalidade de ajudar as empresas a medir a satisfação dos clientes com produtos e serviços',
    )
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc-swagger', app, document);

  app.use('/', (req, res, next) => {
    if (req.path === '/') {
      return res.redirect('/doc-swagger');
    }
    next();
  });

  await app.listen(3001);
}
bootstrap();
