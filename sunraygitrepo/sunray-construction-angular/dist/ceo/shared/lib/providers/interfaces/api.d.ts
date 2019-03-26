import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';
export declare type ApiUrl = string;
export declare type ApiResourceParam = iApiResourceIdentifier | string;
export interface iApiQueryParams extends HttpParamsOptions {
}
export interface iApiRequestParams extends iApiQueryParams {
}
export interface iApiRequestOptions {
    headers?: any;
    params?: HttpParams;
    responseType?: string;
    observe?: string;
}
export interface iApiResource {
    [key: string]: iApiResourceTypeConfig;
}
export interface iApiRequestPayload {
    data: iApiResource;
    resourceIdentifier: iApiResourceIdentifier;
}
export interface iApiResourceTypeInnerConfig {
    hasResourceType(ri: iApiResourceIdentifier): boolean;
    urlFragment(iApiResourceIdentifier: any): string;
}
export interface iApiResourceTypeConfig {
    config: iApiResourceTypeInnerConfig;
}
export interface iApiResourceTypeMap {
    [key: string]: iApiResourceTypeConfig;
}
export interface iApiConfig {
    url: string;
    defaultQueryParams?: iApiRequestParams;
    defaultBodyParams?: iApiRequestParams;
    resourceTypes: iApiResourceTypeMap;
}
export interface iApiResourceIdentifier {
    type: string;
    feature?: string;
    id?: any;
    [key: string]: any;
}
export interface iApiResponse {
    data: any;
    resourceIdentifier: iApiResourceIdentifier;
}
export interface iApiService {
    post$(payload: iApiRequestPayload): Observable<any>;
    delete$(payload: iApiRequestPayload): Observable<any>;
    get$(payload: iApiRequestPayload): Observable<any>;
    put$(payload: iApiRequestPayload): Observable<any>;
    create$(payload: iApiRequestPayload): Observable<any>;
    update$(payload: iApiRequestPayload): Observable<any>;
}
export interface iApiUrlProvider {
}
export interface iApiErrorResponse extends Error {
    name: string;
    message: string;
    error: any | null;
}
