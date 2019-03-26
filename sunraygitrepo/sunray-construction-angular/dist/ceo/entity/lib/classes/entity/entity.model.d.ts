import { iEntity, iEntityAttributes, EntityIdentifier, EntityTypeIdentifier } from '../../interfaces/index';
export declare class BaseEntity implements iEntity {
    static _sliceName: string;
    static config: any;
    id: EntityIdentifier;
    type: EntityTypeIdentifier;
    attributes: iEntityAttributes;
}
