import { iEntity } from '@ceo/entity';
import { WordpressEntityConfig } from '../base-entity-config';
export declare class PageEntityConfig extends WordpressEntityConfig {
    ofType(entityData: iEntity): boolean;
    urlFromAttributes(entityData?: any): string;
}
export declare const entityConfigType: {
    type: string;
    url: string;
    primaryKeys: string[];
    entityConfig: typeof PageEntityConfig;
};
