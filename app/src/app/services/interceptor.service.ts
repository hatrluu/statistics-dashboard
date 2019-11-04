import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class InterceptorsService implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const proxyReq = req.clone({ url: `${'http://localhost:7001/statistics-dashboard'}${req.url}` });
        // const proxyReq = req.clone({ url: `'${location.host}'${req.url}` });
        // const proxyReq = req.clone({ url: `statistics-dashboard/${req.url}`});
        console.log(`Host: ${location.host} req.url ${location.host}`);
        const proxyReq = req.clone({ url: `http://${location.host}/statistics-dashboard${req.url}` });
        return next.handle(proxyReq)
            .pipe(
                catchError((err: any) => {
                    console.log(err);
                    throw throwError(err)
                })
            );
    }
}
