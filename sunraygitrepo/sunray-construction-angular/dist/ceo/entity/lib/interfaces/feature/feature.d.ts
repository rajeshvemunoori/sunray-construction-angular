import { FeatureIdentifier } from './feature-identifier';
import { iCustomSelector } from '../selectors/custom-selector';
import { SliceName } from '../types';
import * as entity from '../entity/index';
export interface iFeature {
    name: FeatureIdentifier;
    entityTypes: entity.iEntityTypeMap;
    baseEntityType: entity.iEntityConstructor;
    sliceNames: SliceName[];
    seedEntities: any[];
    selectors?: iCustomSelector[];
    entityTypeFromEntityData(entityData: entity.iEntity): entity.iEntityConstructor;
    entityType(type: string): any;
}
export interface iFeatureConfig extends iFeature {
}
export interface iFeatureMap {
    [key: string]: iFeature;
}
