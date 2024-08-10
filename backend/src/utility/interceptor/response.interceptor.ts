import {
    CallHandler,
    ExecutionContext,
    HttpStatus,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  export interface IResponse<T> {
    data?: T;
    message: string;
    status?: boolean;
    statusCode?: HttpStatus;
  }
  
  @Injectable()
  export class CustomResponseInterceptor<T>
    implements NestInterceptor<T, IResponse<T>>
  {
    intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Observable<IResponse<T>> {
      const request = context.switchToHttp().getRequest();
      const response = context.switchToHttp().getResponse();
      const excludedRoutes = ['/public/*'];
  
      // Check if the request URL is in the excludedRoutes array
      if (excludedRoutes.includes(request.url)) {
        // If the URL matches any excluded route, bypass the interceptor and proceed to the route handler directly
        return next.handle();
      }
  
      //     return next.handle().pipe(
      //       // response.status(),
      //       map((data) => ({
      //         status: data?.status || true,
      //         status_code: data?.status_code || HttpStatus.OK,
      //         message: data?.message,
      //         data: data?.data,
      //         error: data?.error,
  
      //       })),
      //     );
      //   }
      // }
  
  
      return next.handle().pipe(
        map((data) => {
          response.status(data?.status_code || HttpStatus.OK);
  
          return {
            status: data?.status || true,
            status_code: data?.status_code || HttpStatus.OK,
            message: data?.message,
            data: data?.data,
            error: data?.error,
          };
        }),
      );
    }
  }
  