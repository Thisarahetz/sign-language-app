import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, ValidationPipe, VersioningType } from '@nestjs/common';
import { CustomResponseInterceptor } from './utility/interceptor/response.interceptor';
import { HttpExceptionFilter } from './utility/responce-error-ts';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useGlobalInterceptors(new CustomResponseInterceptor());
  app.useGlobalFilters(
    new HttpExceptionFilter(),
   
  );
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.map((error) => ({
          property: error.property,
          message: error.constraints[Object.keys(error.constraints)[0]],
        }));
        return new HttpException(
          {
            status: 422,
            message: result[0]?.message || 'Validation failed',
            error: 'Invalid',
          },
          422,
       );
      },
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.setGlobalPrefix('api');

    // setup public static folder
    app.useStaticAssets(join(__dirname, '..', '/public'), {
      index: false,
      prefix: '/public',
    });
  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
