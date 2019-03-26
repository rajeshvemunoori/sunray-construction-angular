import * as types from './types';
import * as entity from './entity/index';
import { iResourceIdentifier } from './resource';
import { FeatureIdentifier } from './feature/index';
export interface iEntityAdapter {
    featureName: FeatureIdentifier;
    entityType: any;
    entityName: any;
    sliceName: any;
    scopes: any;
    ngrxEntityAdapter: any;
    entityCollectionType: any;
}
export interface iEntityConfig {
    type: string;
    name: string;
    url?: types.EntityConfigUrl;
    primaryKeys?: any[];
    isSeed?: boolean;
    seed: iResourceIdentifier[];
    urlFragment(any: any): types.EntityConfigUrlFragment;
    getName(): string;
    entityType: entity.iEntityConstructor;
    entityClass?: entity.iEntityConstructor;
}
