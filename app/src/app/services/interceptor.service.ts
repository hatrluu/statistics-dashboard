import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class InterceptorsService implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const proxyReq = req.clone({ url: `http://192.168.1.211:14000/statistics-dashboard${req.url}` });
        // const proxyReq = req.clone({ url: `http://${location.host}/statistics-dashboard${req.url}` });
        // const proxyReq = req.clone({ url: `http://${location.hostname}:7001/statistics-dashboard${req.url}` });
        return next.handle(proxyReq)
            .pipe(
                catchError((err: any) => {
                    console.log(err);
                    throw throwError(err)
                })
            );
    }
}
