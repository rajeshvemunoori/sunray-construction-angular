import { iEntityConfig } from '@ceo/entity';
import { WordpressEntity } from '../classes/index';
export declare const featureName = "cms";
export declare const featureConfig: {
    name: string;
    entityConfigs: iEntityConfig[];
    baseEntityType: typeof WordpressEntity;
    selectors: {
        selector: typeof import("./selectors/for-taxonomy/selector").selector;
        isValid: typeof import("./selectors/for-taxonomy/is-valid").isValid;
    }[];
};
