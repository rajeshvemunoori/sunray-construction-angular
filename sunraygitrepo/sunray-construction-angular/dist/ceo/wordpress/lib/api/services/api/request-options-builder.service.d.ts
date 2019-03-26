import * as _ from 'lodash';
import { ApiRequestOptionsBuilder as BaseApiRequestOptionsBuilder, iApiResourceIdentifier } from '@ceo/shared';
export declare class RequestOptionsBuilder extends BaseApiRequestOptionsBuilder {
    protected filterParams(ri: iApiResourceIdentifier): {
        filter: _.Dictionary<any>;
    } | {
        filter?: undefined;
    };
}
