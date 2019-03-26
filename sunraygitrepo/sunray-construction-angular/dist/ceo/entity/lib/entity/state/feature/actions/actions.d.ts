import { Action } from '@ngrx/store';
import { PayloadAction } from '@ceo/state';
import { ActionTypes } from './action-types';
export declare class AddFeature extends PayloadAction {
    readonly type = ActionTypes.ADD_FEATURE;
}
export declare class LoadPrimaryEntity extends PayloadAction {
    readonly type = ActionTypes.LOAD_PRIMARY_ENTITY;
}
export declare class RegisterFeature extends PayloadAction {
    readonly type = ActionTypes.REGISTER_FEATURE;
}
export declare class SelectPrimaryEntity implements Action {
    readonly type = ActionTypes.SELECT_PRIMARY_ENTITY;
}
export declare class SetPrimaryEntity extends PayloadAction {
    readonly type = ActionTypes.SET_PRIMARY_ENTITY;
}
export declare class SetPrimaryEntityIdentifier extends PayloadAction {
    readonly type = ActionTypes.SET_PRIMARY_ENTITY_IDENTIFIER;
}
