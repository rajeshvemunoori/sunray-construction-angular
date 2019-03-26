import { iFeatureConfig, iEntityConstructor, iEntityConstructorParams, iEntityTypeMap, iEntityConfig } from '../../interfaces/index';
export declare class FeatureConfig implements iFeatureConfig {
    name: string;
    entityConfigs: iEntityConfig[];
    baseEntityType: iEntityConstructor;
    selectors: any;
    private _entityTypes;
    private _sliceNames;
    private _seedEntities;
    constructor(init?: Partial<iFeatureConfig>);
    readonly sliceNames: string[];
    readonly seedEntities: iEntityConstructor[];
    readonly entityTypes: iEntityTypeMap;
    entityTypeFromEntityData(entityData: iEntityConstructorParams): iEntityConstructor;
    entityType(theType: string): iEntityConstructor;
    private readonly entitySliceNames;
    private buildSliceNames;
    private buildSeeds;
    private buildEntityTypeSeeds;
    private buildEntityTypes;
}
