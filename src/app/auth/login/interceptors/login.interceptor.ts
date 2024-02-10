import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { environment } from '../../../../environments/environments.dev';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
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
            tap(event => {
                if (event instanceof HttpResponse) {
                    localStorage.setItem('email', event.body.data.email);
                    localStorage.setItem('token', event.body.data.token);
                }
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
            }),
            finalize(() => {})
        );
    }
}

export const LoginInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoginInterceptor,
        multi: true,
    },
];
