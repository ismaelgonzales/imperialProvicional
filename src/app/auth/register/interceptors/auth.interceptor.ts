import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments.dev';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class RegisterInterceptor implements HttpInterceptor {
    private readonly url: string = `${environment.envVar.BACKEND_URL}`;
    private request: any;

    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const url = `${this.url}/${req.url}`;

        this.request = req.clone({
            url,
            setHeaders: {
                'Cache-control': 'no-cache',
            },
        });

        return next.handle(this.request).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
            })
        );
    }
}

export const RegisterInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RegisterInterceptor,
        multi: true,
    },
];
