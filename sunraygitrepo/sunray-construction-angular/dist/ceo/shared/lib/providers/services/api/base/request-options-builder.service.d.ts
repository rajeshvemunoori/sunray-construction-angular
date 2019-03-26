import * as _ from 'lodash';
import { ApiUrl, iApiResourceIdentifier, iApiRequestOptions, iApiRequestPayload } from '../../../interfaces/index';
export declare class RequestOptionsBuilder {
    apiConfig: any;
    constructor(apiConfig: any);
    build(method: string, url: ApiUrl, payload: iApiRequestPayload): any;
    getBody(data: any): any;
    getOptions(url: ApiUrl, ri: iApiResourceIdentifier): iApiRequestOptions;
    getParams(ri: iApiResourceIdentifier): any;
    getResponseType(url: any): string;
    protected isBodyRequest(method: string): boolean;
    protected isTextResponseType(url: any): boolean;
    protected filterParams(ri: iApiResourceIdentifier): {
        filter: _.Dictionary<any>;
    } | {
        filter?: undefined;
    };
    protected getFilter(ri: iApiResourceIdentifier): any;
    protected sanitizedParams(params: any): _.Dictionary<any>;
}
