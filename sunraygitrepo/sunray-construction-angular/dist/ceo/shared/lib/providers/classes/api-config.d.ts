import { iApiConfig, iApiRequestParams, iApiResourceTypeMap } from '../interfaces/index';
export declare class ApiConfig implements iApiConfig {
    _url: string;
    _defaultBodyParams: any;
    _defaultQueryParams: any;
    _resourceTypes: any;
    constructor(params: any);
    readonly url: string;
    readonly defaultQueryParams: iApiRequestParams;
    readonly defaultBodyParams: iApiRequestParams;
    readonly resourceTypes: iApiResourceTypeMap;
}
