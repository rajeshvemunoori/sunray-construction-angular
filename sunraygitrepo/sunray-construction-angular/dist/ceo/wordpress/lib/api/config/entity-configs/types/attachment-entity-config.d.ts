import { iEntity } from '@ceo/entity';
import { AttachmentEntity } from '../../../classes/entities/index';
import { WordpressEntityConfig } from '../base-entity-config';
export declare class AttachmentEntityConfig extends WordpressEntityConfig {
    ofType(entityData: iEntity): boolean;
}
export declare const entityConfigType: {
    type: string;
    url: string;
    entityConfig: typeof AttachmentEntityConfig;
    entityType: typeof AttachmentEntity;
};
