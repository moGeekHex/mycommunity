import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  // tslint:disable-next-line:variable-name
  public intercept(_context: ExecutionContext, call$: Observable<T>): Observable<Response<T>> {
    return call$.pipe(map(data => ({ data })));
  }
}
