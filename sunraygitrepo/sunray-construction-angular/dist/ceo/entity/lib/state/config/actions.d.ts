import { PayloadAction } from '@ceo/state';
export declare enum EntityConfigActionTypes {
    SET_PRIMARY_ENTITY = "SET_PRIMARY_ENTITY"
}
export declare class SetPrimaryEntity extends PayloadAction {
    slice: string;
    payload: any;
    readonly type = EntityConfigActionTypes.SET_PRIMARY_ENTITY;
    constructor(slice: string, payload: any);
}
export declare type EntityConfigActionsUnion = SetPrimaryEntity;
