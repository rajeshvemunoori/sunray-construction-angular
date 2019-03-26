import * as types from '../types';
import * as entity from '../entity/index';
export interface iEntityEffectsConfigArgs {
    sliceName: types.SliceName;
    initialEntity: entity.iEntity;
    effectTypes: any;
}
export interface iEntityEffectsConfig {
    config: iEntityEffectsConfigArgs;
}
export interface iEntityEffectTypes {
    init: boolean;
    load: boolean;
    add: boolean;
    patch: boolean;
    asyncSuccess: boolean;
}
