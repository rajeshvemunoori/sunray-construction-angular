import { iEntityConstructor, iEntityTypeMap, iEntityConfig } from '../../interfaces/index';
export declare class EntityTypeFactory {
    baseEntityType: iEntityConstructor;
    constructor(baseEntityType: iEntityConstructor);
    build(entityConfig: iEntityConfig): iEntityTypeMap;
    private buildEntityType;
}
