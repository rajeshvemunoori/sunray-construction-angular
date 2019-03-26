import { EntityConfig, iEntity } from '@ceo/entity';
export declare class WordpressEntityConfig extends EntityConfig {
    ofType(entityData: iEntity): boolean;
    urlFromAttributes(entityData?: any): string;
}
