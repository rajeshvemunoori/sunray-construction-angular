import { Action } from '@ngrx/store';
import { PayloadAction } from '../payload/index';
export declare const sliceActions: {
    INIT: string;
    INITIALIZED: string;
    LOAD: string;
    LOAD_FAIL: string;
    LOAD_SUCCESS: string;
    PATCH: string;
    UPDATE: string;
    UPDATE_SUCCESS: string;
};
export declare class SliceAction extends PayloadAction implements Action {
    slice: string;
    payload?: any;
    protected actionName: string;
    constructor(slice: string, payload?: any);
    readonly type: string;
    readonly verb: string;
}
export declare class Init extends SliceAction {
    protected actionName: string;
}
export declare class Initialized extends SliceAction {
    protected actionName: string;
}
export declare class LoadFail extends SliceAction {
    protected actionName: string;
}
export declare class LoadSuccess extends SliceAction {
    protected actionName: string;
}
export declare class Patch extends SliceAction {
    slice: any;
    protected actionName: string;
    constructor(slice: any, path: string[], val: any);
}
export declare class Update extends SliceAction {
    slice: any;
    protected actionName: string;
    constructor(slice: any, path: string[], val: any);
}
