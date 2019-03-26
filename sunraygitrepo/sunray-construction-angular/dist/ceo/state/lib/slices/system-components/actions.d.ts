import { Action } from '@ngrx/store';
export declare enum SystemComponentsActionTypes {
    ACTIVATE_COMPONENT = "[SystemComponents] ACTIVATE_COMPONENT"
}
export declare class ActivateComponent implements Action {
    readonly type = SystemComponentsActionTypes.ACTIVATE_COMPONENT;
    payload: any;
}
export declare type SystemComponentsActionsUnion = ActivateComponent;
