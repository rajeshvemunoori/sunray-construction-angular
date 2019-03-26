/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SliceAction, } from '@ceo/state';
import { actions } from './entity.actions';
/** @type {?} */
export const TEMP = 'TEMP_ID_VALUE';
/**
 * @template T
 */
export class EntityAction extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
    }
}
if (false) {
    /** @type {?} */
    EntityAction.prototype.slice;
    /** @type {?} */
    EntityAction.prototype.payload;
}
/**
 * @template T
 */
export class Init extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.INIT;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Init.prototype.actionName;
}
// Action to add a new entity on the server.
/**
 * @template T
 */
export class Add extends EntityAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload = {}) {
        super(slice, Object.assign({}, { dirty: true }, payload));
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.ADD;
    }
    // If the payload contains the temp ID value, that means
    // we want the server to assign and ID value, so drop the ID field
    /**
     * @return {?}
     */
    payloadForPost() {
        /** @type {?} */
        const newPayload = Object.assign({}, this.payload);
        if (this.payload.id === TEMP) {
            delete newPayload.id;
            delete newPayload.dirty;
        }
        return newPayload;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Add.prototype.actionName;
    /** @type {?} */
    Add.prototype.slice;
    /** @type {?} */
    Add.prototype.payload;
}
// Action to send array of entities to the store.
/**
 * @template T
 */
export class AddStoreEntities extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.ADD_STORE_ENTITIES;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddStoreEntities.prototype.actionName;
    /** @type {?} */
    AddStoreEntities.prototype.slice;
    /** @type {?} */
    AddStoreEntities.prototype.payload;
}
// Action to load data from the server
/**
 * @template T
 */
export class Load extends SliceAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload = null) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.LOAD;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Load.prototype.actionName;
    /** @type {?} */
    Load.prototype.slice;
    /** @type {?} */
    Load.prototype.payload;
}
// Action to capture successful response from the server.
/**
 * @template T
 */
export class AsyncSuccess extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.ASYNC_SUCCESS;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsyncSuccess.prototype.actionName;
    /** @type {?} */
    AsyncSuccess.prototype.slice;
    /** @type {?} */
    AsyncSuccess.prototype.payload;
}
/**
 * @template T
 */
export class LoadSeedData extends SliceAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload = null) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.LOAD_SEED_DATA;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadSeedData.prototype.actionName;
    /** @type {?} */
    LoadSeedData.prototype.slice;
    /** @type {?} */
    LoadSeedData.prototype.payload;
}
///////////////////////////////////////
///////////////////////////////////////
// Not being used at this time: ///////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
/**
 * @template T
 */
export class Initialized extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.INITIALIZED;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Initialized.prototype.actionName;
}
/**
 * @template T
 */
export class Patch extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Patch.prototype.actionName;
}
/**
 * Create a temporary entity to go into the store but not to the server or be
 * validated. If the id of the payload is missing or null
 * then use the TEMP value. Otherwise use the payload.id value
 * @template T
 */
export class AddTemp extends EntityAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload = {}) {
        super(slice, Object.assign({}, payload, (payload.id ? {} : { id: TEMP })));
        this.slice = slice;
        this.actionName = actions.ADD_TEMP;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddTemp.prototype.actionName;
    /** @type {?} */
    AddTemp.prototype.slice;
}
/**
 * Use this action to first put in the store and then
 * submit to the server
 * @template T
 */
export class AddOptimistically extends Add {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload = {}) {
        super(slice, Object.assign({}, { id: TEMP }, payload));
        this.slice = slice;
        this.actionName = actions.ADD_OPTIMISTICALLY;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddOptimistically.prototype.actionName;
    /** @type {?} */
    AddOptimistically.prototype.slice;
}
/**
 * @template T
 */
export class AddSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.ADD_SUCCESS;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddSuccess.prototype.actionName;
}
/**
 * @template T
 */
export class AddUpdateFail extends EntityAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload = {}) {
        super(slice, Object.assign({}, payload, (payload.id ? {} : { id: TEMP })));
        this.slice = slice;
        this.actionName = actions.ADD_UPDATE_FAIL;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddUpdateFail.prototype.actionName;
    /** @type {?} */
    AddUpdateFail.prototype.slice;
}
/**
 * @template T
 */
export class Delete extends EntityAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload = null) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.DELETE;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Delete.prototype.actionName;
    /** @type {?} */
    Delete.prototype.slice;
    /** @type {?} */
    Delete.prototype.payload;
}
/**
 * @template T
 */
export class DeleteFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.DELETE_FAIL;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DeleteFail.prototype.actionName;
}
/**
 * @template T
 */
export class DeleteSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.DELETE_SUCCESS;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DeleteSuccess.prototype.actionName;
}
/**
 * @template T
 */
export class LoadFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.LOAD_FAIL;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadFail.prototype.actionName;
}
/**
 * @template T
 */
export class Async extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.ASYNC;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Async.prototype.actionName;
}
/**
 * @template T
 */
export class AsyncFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.ASYNC_FAIL;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsyncFail.prototype.actionName;
}
/**
 * @template T
 */
export class AsyncDataReady extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.ASYNC_DATA_READY;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsyncDataReady.prototype.actionName;
    /** @type {?} */
    AsyncDataReady.prototype.slice;
    /** @type {?} */
    AsyncDataReady.prototype.payload;
}
// this makes Effect loadFromRemote$ work
/**
 * @template T
 */
export class LoadSuccess extends AsyncSuccess {
    constructor() {
        super(...arguments);
        this.actionName = actions.LOAD_SUCCESS;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadSuccess.prototype.actionName;
}
/**
 * @template T
 */
export class PatchSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH_SUCCESS;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PatchSuccess.prototype.actionName;
}
/**
 * @template T
 */
export class PatchFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH_FAIL;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PatchFail.prototype.actionName;
}
/**
 * @template T
 */
export class Update extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.UPDATE;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Update.prototype.actionName;
}
/**
 * @template T
 */
export class PatchEach extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH_EACH;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PatchEach.prototype.actionName;
}
/**
 * @template T
 */
export class UpdateSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.UPDATE_SUCCESS;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UpdateSuccess.prototype.actionName;
}
/**
 * @template T
 */
export class Select extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.SELECT;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Select.prototype.actionName;
}
/**
 * @template T
 */
export class SelectNext extends EntityAction {
    /**
     * @param {?} slice
     */
    constructor(slice) {
        super(slice, null);
        this.slice = slice;
        this.actionName = actions.SELECT_NEXT;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SelectNext.prototype.actionName;
    /** @type {?} */
    SelectNext.prototype.slice;
}
/**
 * @template T
 */
export class Unload extends EntityAction {
    /**
     * @param {?} slice
     */
    constructor(slice) {
        super(slice, null);
        this.slice = slice;
        this.actionName = actions.UNLOAD;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Unload.prototype.actionName;
    /** @type {?} */
    Unload.prototype.slice;
}
/**
 * @template T
 */
export class SetSelected extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.SET_SELECTED;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SetSelected.prototype.actionName;
    /** @type {?} */
    SetSelected.prototype.slice;
    /** @type {?} */
    SetSelected.prototype.payload;
}
/**
 * @template T
 */
export class SetPrimaryEntity extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.SET_PRIMARY_ENTITY;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SetPrimaryEntity.prototype.actionName;
    /** @type {?} */
    SetPrimaryEntity.prototype.slice;
    /** @type {?} */
    SetPrimaryEntity.prototype.payload;
}
/**
 * @template T
 */
export class SetScopeEntities extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice, payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = actions.SET_SCOPE_ENTITIES;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SetScopeEntities.prototype.actionName;
    /** @type {?} */
    SetScopeEntities.prototype.slice;
    /** @type {?} */
    SetScopeEntities.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFjdGlvbi1jbGFzc2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9lbnRpdHkvZW50aXR5LmFjdGlvbi1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBRUwsV0FBVyxHQUVaLE1BQU0sWUFBWSxDQUFBO0FBT25CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTs7QUFFMUMsTUFBTSxPQUFPLElBQUksR0FBRyxlQUFlOzs7O0FBRW5DLE1BQU0sT0FBTyxZQUNYLFNBQVEsV0FBVzs7Ozs7SUFFbkIsWUFBbUIsS0FBVSxFQUFTLE9BQVU7UUFDOUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtRQURKLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFHO0lBRWhELENBQUM7Q0FDRjs7O0lBSGEsNkJBQWlCOztJQUFFLCtCQUFpQjs7Ozs7QUFLbEQsTUFBTSxPQUFPLElBQ1gsU0FBUSxXQUFXO0lBRHJCOztRQUdZLGVBQVUsR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFBO0lBQzdDLENBQUM7Q0FBQTs7Ozs7O0lBREMsMEJBQTJDOzs7Ozs7QUFJN0MsTUFBTSxPQUFPLEdBQXVCLFNBQVEsWUFBZTs7Ozs7SUFHekQsWUFBbUIsS0FBVSxFQUFTLFVBQWUsRUFBRTtRQUNyRCxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFEeEMsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFGN0MsZUFBVSxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUE7SUFJMUMsQ0FBQzs7Ozs7O0lBSUQsY0FBYzs7Y0FDTixVQUFVLEdBQUcsTUFB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QkFBb0MsU0FBUSxXQUFXOzs7OztJQUVsRSxZQUFtQixLQUFhLEVBQVMsT0FBWTtRQUNuRCxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBREosVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEM0MsZUFBVSxHQUFXLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQTtJQUd6RCxDQUFDO0NBQ0Y7Ozs7OztJQUpDLHNDQUF5RDs7SUFDN0MsaUNBQW9COztJQUFFLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBQYXlsb2FkQWN0aW9uLFxuICBTbGljZUFjdGlvbixcbiAgdHlwZUZvcixcbn0gZnJvbSAnQGNlby9zdGF0ZSdcblxuaW1wb3J0IHtcbiAgaUFwaVJlc3BvbnNlLFxuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9lbnRpdHkuYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFRFTVAgPSAnVEVNUF9JRF9WQUxVRSdcblxuZXhwb3J0IGNsYXNzIEVudGl0eUFjdGlvbjxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwdWJsaWMgcGF5bG9hZDogVCkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0PFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIGltcGxlbWVudHMgUGF5bG9hZEFjdGlvbiB7XG5cbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuSU5JVFxufVxuXG4vLyBBY3Rpb24gdG8gYWRkIGEgbmV3IGVudGl0eSBvbiB0aGUgc2VydmVyLlxuZXhwb3J0IGNsYXNzIEFkZDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcHVibGljIHBheWxvYWQ6IGFueSA9IHt9KSB7XG4gICAgc3VwZXIoc2xpY2UsIE9iamVjdC5hc3NpZ24oe30sIHsgZGlydHk6IHRydWUgfSwgcGF5bG9hZCkpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF5bG9hZCBjb250YWlucyB0aGUgdGVtcCBJRCB2YWx1ZSwgdGhhdCBtZWFuc1xuICAvLyB3ZSB3YW50IHRoZSBzZXJ2ZXIgdG8gYXNzaWduIGFuZCBJRCB2YWx1ZSwgc28gZHJvcCB0aGUgSUQgZmllbGRcbiAgcGF5bG9hZEZvclBvc3QoKSB7XG4gICAgY29uc3QgbmV3UGF5bG9hZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGF5bG9hZClcbiAgICBpZiAodGhpcy5wYXlsb2FkLmlkID09PSBURU1QKSB7XG4gICAgICBkZWxldGUgbmV3UGF5bG9hZC5pZFxuICAgICAgZGVsZXRlIG5ld1BheWxvYWQuZGlydHlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UGF5bG9hZFxuICB9XG59XG5cbi8vIEFjdGlvbiB0byBzZW5kIGFycmF5IG9mIGVudGl0aWVzIHRvIHRoZSBzdG9yZS5cbmV4cG9ydCBjbGFzcyBBZGRTdG9yZUVudGl0aWVzPFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfU1RPUkVfRU5USVRJRVNcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IFRbXSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbi8vIEFjdGlvbiB0byBsb2FkIGRhdGEgZnJvbSB0aGUgc2VydmVyXG5leHBvcnQgY2xhc3MgTG9hZDxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkxPQURcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSA9IG51bGwpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG4vLyBBY3Rpb24gdG8gY2FwdHVyZSBzdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cbmV4cG9ydCBjbGFzcyBBc3luY1N1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFTWU5DX1NVQ0NFU1NcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGlBcGlSZXNwb25zZSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIExvYWRTZWVkRGF0YTxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkxPQURfU0VFRF9EQVRBXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE5vdCBiZWluZyB1c2VkIGF0IHRoaXMgdGltZTogLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemVkPFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIGltcGxlbWVudHMgUGF5bG9hZEFjdGlvbiB7XG5cbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuSU5JVElBTElaRURcbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlBBVENIXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdGVtcG9yYXJ5IGVudGl0eSB0byBnbyBpbnRvIHRoZSBzdG9yZSBidXQgbm90IHRvIHRoZSBzZXJ2ZXIgb3IgYmVcbiAqIHZhbGlkYXRlZC4gSWYgdGhlIGlkIG9mIHRoZSBwYXlsb2FkIGlzIG1pc3Npbmcgb3IgbnVsbFxuICogdGhlbiB1c2UgdGhlIFRFTVAgdmFsdWUuIE90aGVyd2lzZSB1c2UgdGhlIHBheWxvYWQuaWQgdmFsdWVcbiovXG5leHBvcnQgY2xhc3MgQWRkVGVtcDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfVEVNUFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCBwYXlsb2FkLCAocGF5bG9hZC5pZCA/IHt9IDogeyBpZDogVEVNUCB9KSkpXG4gIH1cbn1cblxuLyoqXG4qIFVzZSB0aGlzIGFjdGlvbiB0byBmaXJzdCBwdXQgaW4gdGhlIHN0b3JlIGFuZCB0aGVuXG4qIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4qL1xuZXhwb3J0IGNsYXNzIEFkZE9wdGltaXN0aWNhbGx5PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEFkZDxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFERF9PUFRJTUlTVElDQUxMWVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCB7IGlkOiBURU1QIH0sIHBheWxvYWQpKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRTdWNjZXNzPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFERF9TVUNDRVNTXG59XG5cbmV4cG9ydCBjbGFzcyBBZGRVcGRhdGVGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFERF9VUERBVEVfRkFJTFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCBwYXlsb2FkLCAocGF5bG9hZC5pZCA/IHt9IDogeyBpZDogVEVNUCB9KSkpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5ERUxFVEVcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSA9IG51bGwpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmFpbDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5ERUxFVEVfRkFJTFxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5ERUxFVEVfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZEZhaWw8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuTE9BRF9GQUlMXG59XG5cbmV4cG9ydCBjbGFzcyBBc3luYzxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BU1lOQ1xufVxuXG5leHBvcnQgY2xhc3MgQXN5bmNGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFTWU5DX0ZBSUxcbn1cblxuZXhwb3J0IGNsYXNzIEFzeW5jRGF0YVJlYWR5PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQVNZTkNfREFUQV9SRUFEWVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogVFtdKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuLy8gdGhpcyBtYWtlcyBFZmZlY3QgbG9hZEZyb21SZW1vdGUkIHdvcmtcbmV4cG9ydCBjbGFzcyBMb2FkU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBBc3luY1N1Y2Nlc3M8VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5MT0FEX1NVQ0NFU1Ncbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5QQVRDSF9TVUNDRVNTXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaEZhaWw8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuUEFUQ0hfRkFJTFxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlVQREFURVxufVxuXG5leHBvcnQgY2xhc3MgUGF0Y2hFYWNoPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuUEFUQ0hfRUFDSFxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5VUERBVEVfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlNFTEVDVFxufVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0TmV4dDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRUxFQ1RfTkVYVFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVubG9hZDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5VTkxPQURcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBudWxsKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRTZWxlY3RlZDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlNFVF9TRUxFQ1RFRFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFByaW1hcnlFbnRpdHk8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRVRfUFJJTUFSWV9FTlRJVFkgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFNjb3BlRW50aXRpZXM8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRVRfU0NPUEVfRU5USVRJRVNcbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuIl19