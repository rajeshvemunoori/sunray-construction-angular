import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCacheService } from '../cache/index';
export declare class CachingInterceptor implements HttpInterceptor {
    private cache;
    constructor(cache: RequestCacheService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isCachable;
}
