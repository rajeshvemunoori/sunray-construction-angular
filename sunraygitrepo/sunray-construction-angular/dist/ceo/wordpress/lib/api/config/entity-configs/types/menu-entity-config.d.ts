import { iEntity } from '@ceo/entity';
import { WordpressEntityConfig } from '../base-entity-config';
export declare class MenuEntityConfig extends WordpressEntityConfig {
    ofType(entityData: iEntity): boolean;
    urlFromAttributes(entityData?: any): string;
}
export declare const entityConfigType: {
    type: string;
    isSeed: boolean;
    seed: {}[];
    url: string;
    entityConfig: typeof MenuEntityConfig;
};
