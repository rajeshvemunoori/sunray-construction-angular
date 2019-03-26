import { ApiUrl, iApiResourceIdentifier, iApiResourceTypeConfig } from '../../../interfaces/index';
export declare class RequestUrlBuilder {
    apiConfig: any;
    constructor(apiConfig: any);
    build(ri: iApiResourceIdentifier): ApiUrl;
    protected getResourceTypeUrl(ri: iApiResourceIdentifier): ApiUrl;
    protected getResourceTypeUrlFragment(ri: iApiResourceIdentifier): any;
    protected getResourceType(ri: iApiResourceIdentifier): iApiResourceTypeConfig;
    protected isSingleResourceRequest(ri: iApiResourceIdentifier): boolean;
    protected singleResourceRequestFragment(ri: iApiResourceIdentifier): string;
}
