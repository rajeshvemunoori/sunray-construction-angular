import { HttpResponse, HttpRequest } from '@angular/common/http';
import { iRequestCacheService } from '../../interfaces/index';
export declare type CacheEntryResponse = HttpResponse<any> | undefined;
export declare class RequestCacheService implements iRequestCacheService {
    private cacheEntries;
    get(req: HttpRequest<any>): CacheEntryResponse;
    put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}
