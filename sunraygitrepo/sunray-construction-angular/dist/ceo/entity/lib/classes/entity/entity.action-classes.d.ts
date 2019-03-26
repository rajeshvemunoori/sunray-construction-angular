import { PayloadAction, SliceAction } from '@ceo/state';
import { iApiResponse, iEntity } from '../../interfaces/index';
export declare const TEMP = "TEMP_ID_VALUE";
export declare class EntityAction<T extends iEntity> extends SliceAction implements PayloadAction {
    slice: any;
    payload: T;
    constructor(slice: any, payload: T);
}
export declare class Init<T extends iEntity> extends SliceAction implements PayloadAction {
    protected actionName: string;
}
export declare class Add<T extends iEntity> extends EntityAction<T> {
    slice: any;
    payload: any;
    protected actionName: string;
    constructor(slice: any, payload?: any);
    payloadForPost(): any;
}
export declare class AddStoreEntities<T extends iEntity> extends SliceAction {
    slice: string;
    payload: T[];
    protected actionName: string;
    constructor(slice: string, payload: T[]);
}
export declare class Load<T extends iEntity> extends SliceAction implements PayloadAction {
    slice: string;
    payload: any;
    protected actionName: string;
    constructor(slice: string, payload?: any);
}
export declare class AsyncSuccess<T extends iEntity> extends SliceAction {
    slice: string;
    payload: iApiResponse;
    protected actionName: string;
    constructor(slice: string, payload: iApiResponse);
}
export declare class LoadSeedData<T extends iEntity> extends SliceAction implements PayloadAction {
    slice: string;
    payload: any;
    protected actionName: string;
    constructor(slice: string, payload?: any);
}
export declare class Initialized<T extends iEntity> extends SliceAction implements PayloadAction {
    protected actionName: string;
}
export declare class Patch<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
/**
 * Create a temporary entity to go into the store but not to the server or be
 * validated. If the id of the payload is missing or null
 * then use the TEMP value. Otherwise use the payload.id value
*/
export declare class AddTemp<T extends iEntity> extends EntityAction<T> {
    slice: any;
    protected actionName: string;
    constructor(slice: any, payload?: any);
}
/**
* Use this action to first put in the store and then
* submit to the server
*/
export declare class AddOptimistically<T extends iEntity> extends Add<T> {
    slice: any;
    protected actionName: string;
    constructor(slice: any, payload?: any);
}
export declare class AddSuccess<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class AddUpdateFail<T extends iEntity> extends EntityAction<T> {
    slice: any;
    protected actionName: string;
    constructor(slice: any, payload?: any);
}
export declare class Delete<T extends iEntity> extends EntityAction<T> {
    slice: string;
    payload: any;
    protected actionName: string;
    constructor(slice: string, payload?: any);
}
export declare class DeleteFail<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class DeleteSuccess<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class LoadFail<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class Async<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class AsyncFail<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class AsyncDataReady<T extends iEntity> extends SliceAction {
    slice: string;
    payload: T[];
    protected actionName: string;
    constructor(slice: string, payload: T[]);
}
export declare class LoadSuccess<T extends iEntity> extends AsyncSuccess<T> {
    protected actionName: string;
}
export declare class PatchSuccess<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class PatchFail<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class Update<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class PatchEach<T extends iEntity> extends SliceAction {
    protected actionName: string;
}
export declare class UpdateSuccess<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class Select<T extends iEntity> extends EntityAction<T> {
    protected actionName: string;
}
export declare class SelectNext<T extends iEntity> extends EntityAction<T> {
    slice: any;
    protected actionName: string;
    constructor(slice: any);
}
export declare class Unload<T extends iEntity> extends EntityAction<T> {
    slice: any;
    protected actionName: string;
    constructor(slice: any);
}
export declare class SetSelected<T extends iEntity> extends SliceAction {
    slice: string;
    payload: any;
    protected actionName: string;
    constructor(slice: string, payload: any);
}
export declare class SetPrimaryEntity<T extends iEntity> extends SliceAction {
    slice: string;
    payload: any;
    protected actionName: string;
    constructor(slice: string, payload: any);
}
export declare class SetScopeEntities<T extends iEntity> extends SliceAction {
    slice: string;
    payload: any;
    protected actionName: string;
    constructor(slice: string, payload: any);
}
