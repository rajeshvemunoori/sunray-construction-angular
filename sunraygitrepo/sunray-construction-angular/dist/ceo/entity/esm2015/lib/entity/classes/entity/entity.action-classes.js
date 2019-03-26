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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFjdGlvbi1jbGFzc2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2NsYXNzZXMvZW50aXR5L2VudGl0eS5hY3Rpb24tY2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUVMLFdBQVcsR0FFWixNQUFNLFlBQVksQ0FBQTtBQU9uQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7O0FBRTFDLE1BQU0sT0FBTyxJQUFJLEdBQUcsZUFBZTs7OztBQUVuQyxNQUFNLE9BQU8sWUFDWCxTQUFRLFdBQVc7Ozs7O0lBRW5CLFlBQW1CLEtBQVUsRUFBUyxPQUFVO1FBQzlDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFESixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBRztJQUVoRCxDQUFDO0NBQ0Y7OztJQUhhLDZCQUFpQjs7SUFBRSwrQkFBaUI7Ozs7O0FBS2xELE1BQU0sT0FBTyxJQUNYLFNBQVEsV0FBVztJQURyQjs7UUFHWSxlQUFVLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQTtJQUM3QyxDQUFDO0NBQUE7Ozs7OztJQURDLDBCQUEyQzs7Ozs7O0FBSTdDLE1BQU0sT0FBTyxHQUF1QixTQUFRLFlBQWU7Ozs7O0lBR3pELFlBQW1CLEtBQVUsRUFBUyxVQUFlLEVBQUU7UUFDckQsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBRHhDLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjdDLGVBQVUsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFBO0lBSTFDLENBQUM7Ozs7OztJQUlELGNBQWM7O2NBQ04sVUFBVSxH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LE9BQU8sZ0JBQW9DLFNBQVEsV0FBVzs7Ozs7SUFFbEUsWUFBbUIsS0FBYSxFQUFTLE9BQVk7UUFDbkQsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtRQURKLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRDNDLGVBQVUsR0FBVyxPQUFPLENBQUMsa0JBQWtCLENBQUE7SUFHekQsQ0FBQztDQUNGOzs7Ozs7SUFKQyxzQ0FBeUQ7O0lBQzdDLGlDQUFvQjs7SUFBRSxtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgUGF5bG9hZEFjdGlvbixcbiAgU2xpY2VBY3Rpb24sXG4gIHR5cGVGb3IsXG59IGZyb20gJ0BjZW8vc3RhdGUnXG5cbmltcG9ydCB7XG4gIGlBcGlSZXNwb25zZSxcbiAgaUVudGl0eSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vZW50aXR5LmFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBURU1QID0gJ1RFTVBfSURfVkFMVUUnXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlBY3Rpb248VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24gaW1wbGVtZW50cyBQYXlsb2FkQWN0aW9uIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcHVibGljIHBheWxvYWQ6IFQpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5pdDxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLklOSVRcbn1cblxuLy8gQWN0aW9uIHRvIGFkZCBhIG5ldyBlbnRpdHkgb24gdGhlIHNlcnZlci5cbmV4cG9ydCBjbGFzcyBBZGQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQUREXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBhbnksIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCB7IGRpcnR5OiB0cnVlIH0sIHBheWxvYWQpKVxuICB9XG5cbiAgLy8gSWYgdGhlIHBheWxvYWQgY29udGFpbnMgdGhlIHRlbXAgSUQgdmFsdWUsIHRoYXQgbWVhbnNcbiAgLy8gd2Ugd2FudCB0aGUgc2VydmVyIHRvIGFzc2lnbiBhbmQgSUQgdmFsdWUsIHNvIGRyb3AgdGhlIElEIGZpZWxkXG4gIHBheWxvYWRGb3JQb3N0KCkge1xuICAgIGNvbnN0IG5ld1BheWxvYWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBheWxvYWQpXG4gICAgaWYgKHRoaXMucGF5bG9hZC5pZCA9PT0gVEVNUCkge1xuICAgICAgZGVsZXRlIG5ld1BheWxvYWQuaWRcbiAgICAgIGRlbGV0ZSBuZXdQYXlsb2FkLmRpcnR5XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1BheWxvYWRcbiAgfVxufVxuXG4vLyBBY3Rpb24gdG8gc2VuZCBhcnJheSBvZiBlbnRpdGllcyB0byB0aGUgc3RvcmUuXG5leHBvcnQgY2xhc3MgQWRkU3RvcmVFbnRpdGllczxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG5cbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQUREX1NUT1JFX0VOVElUSUVTXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBUW10pIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG4vLyBBY3Rpb24gdG8gbG9hZCBkYXRhIGZyb20gdGhlIHNlcnZlclxuZXhwb3J0IGNsYXNzIExvYWQ8VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24gaW1wbGVtZW50cyBQYXlsb2FkQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5MT0FEXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuLy8gQWN0aW9uIHRvIGNhcHR1cmUgc3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY2xhc3MgQXN5bmNTdWNjZXNzPFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BU1lOQ19TVUNDRVNTXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBpQXBpUmVzcG9uc2UpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMb2FkU2VlZERhdGE8VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24gaW1wbGVtZW50cyBQYXlsb2FkQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5MT0FEX1NFRURfREFUQVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55ID0gbnVsbCkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBOb3QgYmVpbmcgdXNlZCBhdCB0aGlzIHRpbWU6IC8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplZDxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLklOSVRJQUxJWkVEXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5QQVRDSFxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRlbXBvcmFyeSBlbnRpdHkgdG8gZ28gaW50byB0aGUgc3RvcmUgYnV0IG5vdCB0byB0aGUgc2VydmVyIG9yIGJlXG4gKiB2YWxpZGF0ZWQuIElmIHRoZSBpZCBvZiB0aGUgcGF5bG9hZCBpcyBtaXNzaW5nIG9yIG51bGxcbiAqIHRoZW4gdXNlIHRoZSBURU1QIHZhbHVlLiBPdGhlcndpc2UgdXNlIHRoZSBwYXlsb2FkLmlkIHZhbHVlXG4qL1xuZXhwb3J0IGNsYXNzIEFkZFRlbXA8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQUREX1RFTVBcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcGF5bG9hZDogYW55ID0ge30pIHtcbiAgICBzdXBlcihzbGljZSwgT2JqZWN0LmFzc2lnbih7fSwgcGF5bG9hZCwgKHBheWxvYWQuaWQgPyB7fSA6IHsgaWQ6IFRFTVAgfSkpKVxuICB9XG59XG5cbi8qKlxuKiBVc2UgdGhpcyBhY3Rpb24gdG8gZmlyc3QgcHV0IGluIHRoZSBzdG9yZSBhbmQgdGhlblxuKiBzdWJtaXQgdG8gdGhlIHNlcnZlclxuKi9cbmV4cG9ydCBjbGFzcyBBZGRPcHRpbWlzdGljYWxseTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBBZGQ8VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfT1BUSU1JU1RJQ0FMTFlcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcGF5bG9hZDogYW55ID0ge30pIHtcbiAgICBzdXBlcihzbGljZSwgT2JqZWN0LmFzc2lnbih7fSwgeyBpZDogVEVNUCB9LCBwYXlsb2FkKSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgQWRkVXBkYXRlRmFpbDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfVVBEQVRFX0ZBSUxcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcGF5bG9hZDogYW55ID0ge30pIHtcbiAgICBzdXBlcihzbGljZSwgT2JqZWN0LmFzc2lnbih7fSwgcGF5bG9hZCwgKHBheWxvYWQuaWQgPyB7fSA6IHsgaWQ6IFRFTVAgfSkpKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGU8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuREVMRVRFXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUZhaWw8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuREVMRVRFX0ZBSUxcbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuREVMRVRFX1NVQ0NFU1Ncbn1cblxuZXhwb3J0IGNsYXNzIExvYWRGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkxPQURfRkFJTFxufVxuXG5leHBvcnQgY2xhc3MgQXN5bmM8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQVNZTkNcbn1cblxuZXhwb3J0IGNsYXNzIEFzeW5jRmFpbDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BU1lOQ19GQUlMXG59XG5cbmV4cG9ydCBjbGFzcyBBc3luY0RhdGFSZWFkeTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFTWU5DX0RBVEFfUkVBRFlcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IFRbXSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbi8vIHRoaXMgbWFrZXMgRWZmZWN0IGxvYWRGcm9tUmVtb3RlJCB3b3JrXG5leHBvcnQgY2xhc3MgTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgQXN5bmNTdWNjZXNzPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuTE9BRF9TVUNDRVNTXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaFN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuUEFUQ0hfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgUGF0Y2hGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlBBVENIX0ZBSUxcbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5VUERBVEVcbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoRWFjaDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlBBVENIX0VBQ0hcbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuVVBEQVRFX1NVQ0NFU1Ncbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRUxFQ1Rcbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdE5leHQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuU0VMRUNUX05FWFRcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBudWxsKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmxvYWQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuVU5MT0FEXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBhbnkpIHtcbiAgICBzdXBlcihzbGljZSwgbnVsbClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0U2VsZWN0ZWQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRVRfU0VMRUNURURcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQcmltYXJ5RW50aXR5PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuU0VUX1BSSU1BUllfRU5USVRZIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRTY29wZUVudGl0aWVzPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuU0VUX1NDT1BFX0VOVElUSUVTXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cbiJdfQ==