import { Action } from '@ngrx/store';
import { PayloadAction } from '../../classes';
export declare enum ApplicationConfigActionTypes {
    ROUTER_NAVIGATION = "ROUTER_NAVIGATION",
    LAUNCH = "[ApplicationConfig] LAUNCH",
    LOAD_RESOURCE_BY_ID = "[ApplicationConfig] LOAD_RESOURCE_BY_ID",
    SET_PRIMARY_ENTITY = "[ApplicationConfig] SET_PRIMARY_ENTITY",
    SET_RESOURCE_TYPE = "[ApplicationConfig] SET_RESOURCE_TYPE"
}
export declare class RouterNavigation implements Action {
    readonly type = ApplicationConfigActionTypes.ROUTER_NAVIGATION;
    payload: any;
}
export declare class Launch implements Action {
    readonly type = ApplicationConfigActionTypes.LAUNCH;
}
export declare class LoadResourceById implements Action {
    readonly type = ApplicationConfigActionTypes.LOAD_RESOURCE_BY_ID;
}
export declare class SetPrimaryEntity extends PayloadAction {
    readonly type = ApplicationConfigActionTypes.SET_PRIMARY_ENTITY;
}
export declare class SetResourceType extends PayloadAction {
    readonly type = ApplicationConfigActionTypes.SET_RESOURCE_TYPE;
}
export declare type ApplicationConfigActionsUnion = Launch | LoadResourceById | RouterNavigation | SetPrimaryEntity | SetResourceType;
