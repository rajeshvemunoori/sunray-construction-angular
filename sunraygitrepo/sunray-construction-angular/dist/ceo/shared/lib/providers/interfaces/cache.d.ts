import { HttpResponse, HttpRequest } from '@angular/common/http';
export interface iRequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}
export interface iRequestCacheService {
    get(req: HttpRequest<any>): HttpResponse<any> | undefined;
    put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}
