import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
  } from '@nestjs/common';
  import { Response } from 'express';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const status = exception.getStatus();
      const data = exception.getResponse() as any;
  
      response.status(status).json({
        status: false,
        error: data.error || data.message || data || 'Internal server error',
        message: data.message || data.error || data || 'Something went wrong',
        status_code: status,
      });
    }
  }
  