/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SliceAction, } from '@ceo/state';
import { actions } from './entity.actions';
/** @type {?} */
export var TEMP = 'TEMP_ID_VALUE';
/**
 * @template T
 */
var /**
 * @template T
 */
EntityAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntityAction, _super);
    function EntityAction(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        return _this;
    }
    return EntityAction;
}(SliceAction));
/**
 * @template T
 */
export { EntityAction };
if (false) {
    /** @type {?} */
    EntityAction.prototype.slice;
    /** @type {?} */
    EntityAction.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
Init = /** @class */ (function (_super) {
    tslib_1.__extends(Init, _super);
    function Init() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.INIT;
        return _this;
    }
    return Init;
}(SliceAction));
/**
 * @template T
 */
export { Init };
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
var 
// Action to add a new entity on the server.
/**
 * @template T
 */
Add = /** @class */ (function (_super) {
    tslib_1.__extends(Add, _super);
    function Add(slice, payload) {
        if (payload === void 0) { payload = {}; }
        var _this = _super.call(this, slice, Object.assign({}, { dirty: true }, payload)) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.ADD;
        return _this;
    }
    // If the payload contains the temp ID value, that means
    // we want the server to assign and ID value, so drop the ID field
    // If the payload contains the temp ID value, that means
    // we want the server to assign and ID value, so drop the ID field
    /**
     * @return {?}
     */
    Add.prototype.payloadForPost = 
    // If the payload contains the temp ID value, that means
    // we want the server to assign and ID value, so drop the ID field
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newPayload = Object.assign({}, this.payload);
        if (this.payload.id === TEMP) {
            delete newPayload.id;
            delete newPayload.dirty;
        }
        return newPayload;
    };
    return Add;
}(EntityAction));
// Action to add a new entity on the server.
/**
 * @template T
 */
export { Add };
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
var 
// Action to send array of entities to the store.
/**
 * @template T
 */
AddStoreEntities = /** @class */ (function (_super) {
    tslib_1.__extends(AddStoreEntities, _super);
    function AddStoreEntities(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.ADD_STORE_ENTITIES;
        return _this;
    }
    return AddStoreEntities;
}(SliceAction));
// Action to send array of entities to the store.
/**
 * @template T
 */
export { AddStoreEntities };
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
var 
// Action to load data from the server
/**
 * @template T
 */
Load = /** @class */ (function (_super) {
    tslib_1.__extends(Load, _super);
    function Load(slice, payload) {
        if (payload === void 0) { payload = null; }
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.LOAD;
        return _this;
    }
    return Load;
}(SliceAction));
// Action to load data from the server
/**
 * @template T
 */
export { Load };
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
var 
// Action to capture successful response from the server.
/**
 * @template T
 */
AsyncSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncSuccess, _super);
    function AsyncSuccess(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.ASYNC_SUCCESS;
        return _this;
    }
    return AsyncSuccess;
}(SliceAction));
// Action to capture successful response from the server.
/**
 * @template T
 */
export { AsyncSuccess };
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
var /**
 * @template T
 */
LoadSeedData = /** @class */ (function (_super) {
    tslib_1.__extends(LoadSeedData, _super);
    function LoadSeedData(slice, payload) {
        if (payload === void 0) { payload = null; }
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.LOAD_SEED_DATA;
        return _this;
    }
    return LoadSeedData;
}(SliceAction));
/**
 * @template T
 */
export { LoadSeedData };
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
var 
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
Initialized = /** @class */ (function (_super) {
    tslib_1.__extends(Initialized, _super);
    function Initialized() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.INITIALIZED;
        return _this;
    }
    return Initialized;
}(SliceAction));
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
export { Initialized };
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
var /**
 * @template T
 */
Patch = /** @class */ (function (_super) {
    tslib_1.__extends(Patch, _super);
    function Patch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.PATCH;
        return _this;
    }
    return Patch;
}(EntityAction));
/**
 * @template T
 */
export { Patch };
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
var /**
 * Create a temporary entity to go into the store but not to the server or be
 * validated. If the id of the payload is missing or null
 * then use the TEMP value. Otherwise use the payload.id value
 * @template T
 */
AddTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AddTemp, _super);
    function AddTemp(slice, payload) {
        if (payload === void 0) { payload = {}; }
        var _this = _super.call(this, slice, Object.assign({}, payload, (payload.id ? {} : { id: TEMP }))) || this;
        _this.slice = slice;
        _this.actionName = actions.ADD_TEMP;
        return _this;
    }
    return AddTemp;
}(EntityAction));
/**
 * Create a temporary entity to go into the store but not to the server or be
 * validated. If the id of the payload is missing or null
 * then use the TEMP value. Otherwise use the payload.id value
 * @template T
 */
export { AddTemp };
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
var /**
 * Use this action to first put in the store and then
 * submit to the server
 * @template T
 */
AddOptimistically = /** @class */ (function (_super) {
    tslib_1.__extends(AddOptimistically, _super);
    function AddOptimistically(slice, payload) {
        if (payload === void 0) { payload = {}; }
        var _this = _super.call(this, slice, Object.assign({}, { id: TEMP }, payload)) || this;
        _this.slice = slice;
        _this.actionName = actions.ADD_OPTIMISTICALLY;
        return _this;
    }
    return AddOptimistically;
}(Add));
/**
 * Use this action to first put in the store and then
 * submit to the server
 * @template T
 */
export { AddOptimistically };
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
var /**
 * @template T
 */
AddSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(AddSuccess, _super);
    function AddSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.ADD_SUCCESS;
        return _this;
    }
    return AddSuccess;
}(EntityAction));
/**
 * @template T
 */
export { AddSuccess };
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
var /**
 * @template T
 */
AddUpdateFail = /** @class */ (function (_super) {
    tslib_1.__extends(AddUpdateFail, _super);
    function AddUpdateFail(slice, payload) {
        if (payload === void 0) { payload = {}; }
        var _this = _super.call(this, slice, Object.assign({}, payload, (payload.id ? {} : { id: TEMP }))) || this;
        _this.slice = slice;
        _this.actionName = actions.ADD_UPDATE_FAIL;
        return _this;
    }
    return AddUpdateFail;
}(EntityAction));
/**
 * @template T
 */
export { AddUpdateFail };
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
var /**
 * @template T
 */
Delete = /** @class */ (function (_super) {
    tslib_1.__extends(Delete, _super);
    function Delete(slice, payload) {
        if (payload === void 0) { payload = null; }
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.DELETE;
        return _this;
    }
    return Delete;
}(EntityAction));
/**
 * @template T
 */
export { Delete };
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
var /**
 * @template T
 */
DeleteFail = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteFail, _super);
    function DeleteFail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.DELETE_FAIL;
        return _this;
    }
    return DeleteFail;
}(EntityAction));
/**
 * @template T
 */
export { DeleteFail };
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
var /**
 * @template T
 */
DeleteSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteSuccess, _super);
    function DeleteSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.DELETE_SUCCESS;
        return _this;
    }
    return DeleteSuccess;
}(EntityAction));
/**
 * @template T
 */
export { DeleteSuccess };
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
var /**
 * @template T
 */
LoadFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadFail, _super);
    function LoadFail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.LOAD_FAIL;
        return _this;
    }
    return LoadFail;
}(EntityAction));
/**
 * @template T
 */
export { LoadFail };
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
var /**
 * @template T
 */
Async = /** @class */ (function (_super) {
    tslib_1.__extends(Async, _super);
    function Async() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.ASYNC;
        return _this;
    }
    return Async;
}(EntityAction));
/**
 * @template T
 */
export { Async };
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
var /**
 * @template T
 */
AsyncFail = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncFail, _super);
    function AsyncFail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.ASYNC_FAIL;
        return _this;
    }
    return AsyncFail;
}(EntityAction));
/**
 * @template T
 */
export { AsyncFail };
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
var /**
 * @template T
 */
AsyncDataReady = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncDataReady, _super);
    function AsyncDataReady(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.ASYNC_DATA_READY;
        return _this;
    }
    return AsyncDataReady;
}(SliceAction));
/**
 * @template T
 */
export { AsyncDataReady };
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
var 
// this makes Effect loadFromRemote$ work
/**
 * @template T
 */
LoadSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadSuccess, _super);
    function LoadSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.LOAD_SUCCESS;
        return _this;
    }
    return LoadSuccess;
}(AsyncSuccess));
// this makes Effect loadFromRemote$ work
/**
 * @template T
 */
export { LoadSuccess };
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
var /**
 * @template T
 */
PatchSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(PatchSuccess, _super);
    function PatchSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.PATCH_SUCCESS;
        return _this;
    }
    return PatchSuccess;
}(EntityAction));
/**
 * @template T
 */
export { PatchSuccess };
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
var /**
 * @template T
 */
PatchFail = /** @class */ (function (_super) {
    tslib_1.__extends(PatchFail, _super);
    function PatchFail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.PATCH_FAIL;
        return _this;
    }
    return PatchFail;
}(EntityAction));
/**
 * @template T
 */
export { PatchFail };
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
var /**
 * @template T
 */
Update = /** @class */ (function (_super) {
    tslib_1.__extends(Update, _super);
    function Update() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.UPDATE;
        return _this;
    }
    return Update;
}(EntityAction));
/**
 * @template T
 */
export { Update };
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
var /**
 * @template T
 */
PatchEach = /** @class */ (function (_super) {
    tslib_1.__extends(PatchEach, _super);
    function PatchEach() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.PATCH_EACH;
        return _this;
    }
    return PatchEach;
}(SliceAction));
/**
 * @template T
 */
export { PatchEach };
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
var /**
 * @template T
 */
UpdateSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateSuccess, _super);
    function UpdateSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.UPDATE_SUCCESS;
        return _this;
    }
    return UpdateSuccess;
}(EntityAction));
/**
 * @template T
 */
export { UpdateSuccess };
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
var /**
 * @template T
 */
Select = /** @class */ (function (_super) {
    tslib_1.__extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.SELECT;
        return _this;
    }
    return Select;
}(EntityAction));
/**
 * @template T
 */
export { Select };
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
var /**
 * @template T
 */
SelectNext = /** @class */ (function (_super) {
    tslib_1.__extends(SelectNext, _super);
    function SelectNext(slice) {
        var _this = _super.call(this, slice, null) || this;
        _this.slice = slice;
        _this.actionName = actions.SELECT_NEXT;
        return _this;
    }
    return SelectNext;
}(EntityAction));
/**
 * @template T
 */
export { SelectNext };
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
var /**
 * @template T
 */
Unload = /** @class */ (function (_super) {
    tslib_1.__extends(Unload, _super);
    function Unload(slice) {
        var _this = _super.call(this, slice, null) || this;
        _this.slice = slice;
        _this.actionName = actions.UNLOAD;
        return _this;
    }
    return Unload;
}(EntityAction));
/**
 * @template T
 */
export { Unload };
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
var /**
 * @template T
 */
SetSelected = /** @class */ (function (_super) {
    tslib_1.__extends(SetSelected, _super);
    function SetSelected(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.SET_SELECTED;
        return _this;
    }
    return SetSelected;
}(SliceAction));
/**
 * @template T
 */
export { SetSelected };
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
var /**
 * @template T
 */
SetPrimaryEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SetPrimaryEntity, _super);
    function SetPrimaryEntity(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.SET_PRIMARY_ENTITY;
        return _this;
    }
    return SetPrimaryEntity;
}(SliceAction));
/**
 * @template T
 */
export { SetPrimaryEntity };
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
var /**
 * @template T
 */
SetScopeEntities = /** @class */ (function (_super) {
    tslib_1.__extends(SetScopeEntities, _super);
    function SetScopeEntities(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.SET_SCOPE_ENTITIES;
        return _this;
    }
    return SetScopeEntities;
}(SliceAction));
/**
 * @template T
 */
export { SetScopeEntities };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFjdGlvbi1jbGFzc2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2NsYXNzZXMvZW50aXR5L2VudGl0eS5hY3Rpb24tY2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFFTCxXQUFXLEdBRVosTUFBTSxZQUFZLENBQUE7QUFPbkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFBOztBQUUxQyxNQUFNLEtBQU8sSUFBSSxHQUFHLGVBQWU7Ozs7QUFFbkM7Ozs7SUFDVSx3Q0FBVztJQUVuQixzQkFBbUIsS0FBVSxFQUFTLE9BQVU7UUFBaEQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3RCO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFHOztJQUVoRCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FDVSxXQUFXLEdBS3BCOzs7Ozs7O0lBSGEsNkJBQWlCOztJQUFFLCtCQUFpQjs7Ozs7QUFLbEQ7Ozs7SUFDVSxnQ0FBVztJQURyQjtRQUFBLHFFQUlDO1FBRFcsZ0JBQVUsR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFBOztJQUM3QyxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFKRCxDQUNVLFdBQVcsR0FHcEI7Ozs7Ozs7Ozs7SUFEQywwQkFBMkM7Ozs7OztBQUk3Qzs7Ozs7O0lBQTRDLCtCQUFlO0lBR3pELGFBQW1CLEtBQVUsRUFBUyxPQUFpQjtRQUFqQix3QkFBQSxFQUFBLFlBQWlCO1FBQXZELFlBQ0Usa0JBQU0sS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQzFEO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjdDLGdCQUFVLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQTs7SUFJMUMsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxrRUFBa0U7Ozs7OztJQUNsRSw0QkFBYzs7Ozs7O0lBQWQ7O1lBQ1EsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDNUIsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFBO1lBQ3BCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQTtTQUN4QjtRQUVELE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUE0QyxZQUFZLEdBa0J2RDs7Ozs7Ozs7Ozs7SUFqQkMseUJBQTBDOztJQUU5QixvQkFBaUI7O0lBQUUsc0JBQXdCOzs7Ozs7QUFrQnpEOzs7Ozs7SUFDVSw0Q0FBVztJQUluQiwwQkFBbUIsS0FBYSxFQUFTLE9BQVk7UUFBckQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3RCO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRjNDLGdCQUFVLEdBQVcsT0FBTyxDQUFDLGtCQUFrQixDQUFBOztJQUl6RCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FDVSxXQUFXLEdBT3BCOzs7Ozs7Ozs7OztJQUxDLHNDQUF5RDs7SUFFN0MsaUNBQW9COztJQUFFLG1DQUFtQjs7Ozs7O0FBTXZEOzs7Ozs7SUFDVSxnQ0FBVztJQUluQixjQUFtQixLQUFhLEVBQVMsT0FBbUI7UUFBbkIsd0JBQUEsRUFBQSxjQUFtQjtRQUE1RCxZQUNFLGtCQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsU0FDdEI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFGbEQsZ0JBQVUsR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFBOztJQUkzQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFSRCxDQUNVLFdBQVcsR0FPcEI7Ozs7Ozs7Ozs7O0lBTEMsMEJBQTJDOztJQUUvQixxQkFBb0I7O0lBQUUsdUJBQTBCOzs7Ozs7QUFNOUQ7Ozs7OztJQUNVLHdDQUFXO0lBSW5CLHNCQUFtQixLQUFhLEVBQVMsT0FBcUI7UUFBOUQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3RCO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFjO1FBRnBELGdCQUFVLEdBQVcsT0FBTyxDQUFDLGFBQWEsQ0FBQTs7SUFJcEQsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVJELENBQ1UsV0FBVyxHQU9wQjs7Ozs7Ozs7Ozs7SUFMQyxrQ0FBb0Q7O0lBRXhDLDZCQUFvQjs7SUFBRSwrQkFBNEI7Ozs7O0FBTWhFOzs7O0lBQ1Usd0NBQVc7SUFJbkIsc0JBQW1CLEtBQWEsRUFBUyxPQUFtQjtRQUFuQix3QkFBQSxFQUFBLGNBQW1CO1FBQTVELFlBQ0Usa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUN0QjtRQUZrQixXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUZsRCxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxjQUFjLENBQUE7O0lBSXJELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFSRCxDQUNVLFdBQVcsR0FPcEI7Ozs7Ozs7Ozs7SUFMQyxrQ0FBcUQ7O0lBRXpDLDZCQUFvQjs7SUFBRSwrQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjlEOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ1UsdUNBQVc7SUFEckI7UUFBQSxxRUFJQztRQURXLGdCQUFVLEdBQVcsT0FBTyxDQUFDLFdBQVcsQ0FBQTs7SUFDcEQsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUpELENBQ1UsV0FBVyxHQUdwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBREMsaUNBQWtEOzs7OztBQUdwRDs7OztJQUE4QyxpQ0FBZTtJQUE3RDtRQUFBLHFFQUVDO1FBRFcsZ0JBQVUsR0FBVyxPQUFPLENBQUMsS0FBSyxDQUFBOztJQUM5QyxDQUFDO0lBQUQsWUFBQztBQUFELENBQUMsQUFGRCxDQUE4QyxZQUFZLEdBRXpEOzs7Ozs7Ozs7O0lBREMsMkJBQTRDOzs7Ozs7OztBQVE5Qzs7Ozs7OztJQUFnRCxtQ0FBZTtJQUc3RCxpQkFBbUIsS0FBVSxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7UUFBaEQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FDM0U7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBSztRQUZuQixnQkFBVSxHQUFXLE9BQU8sQ0FBQyxRQUFRLENBQUE7O0lBSS9DLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQU5ELENBQWdELFlBQVksR0FNM0Q7Ozs7Ozs7Ozs7Ozs7SUFMQyw2QkFBK0M7O0lBRW5DLHdCQUFpQjs7Ozs7OztBQVMvQjs7Ozs7O0lBQTBELDZDQUFNO0lBRzlELDJCQUFtQixLQUFVLEVBQUUsT0FBaUI7UUFBakIsd0JBQUEsRUFBQSxZQUFpQjtRQUFoRCxZQUNFLGtCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUN2RDtRQUZrQixXQUFLLEdBQUwsS0FBSyxDQUFLO1FBRm5CLGdCQUFVLEdBQVcsT0FBTyxDQUFDLGtCQUFrQixDQUFBOztJQUl6RCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBMEQsR0FBRyxHQU01RDs7Ozs7Ozs7Ozs7O0lBTEMsdUNBQXlEOztJQUU3QyxrQ0FBaUI7Ozs7O0FBSy9COzs7O0lBQW1ELHNDQUFlO0lBQWxFO1FBQUEscUVBRUM7UUFEVyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxXQUFXLENBQUE7O0lBQ3BELENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFGRCxDQUFtRCxZQUFZLEdBRTlEOzs7Ozs7Ozs7O0lBREMsZ0NBQWtEOzs7OztBQUdwRDs7OztJQUFzRCx5Q0FBZTtJQUduRSx1QkFBbUIsS0FBVSxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7UUFBaEQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FDM0U7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBSztRQUZuQixnQkFBVSxHQUFXLE9BQU8sQ0FBQyxlQUFlLENBQUE7O0lBSXRELENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFORCxDQUFzRCxZQUFZLEdBTWpFOzs7Ozs7Ozs7O0lBTEMsbUNBQXNEOztJQUUxQyw4QkFBaUI7Ozs7O0FBSy9COzs7O0lBQStDLGtDQUFlO0lBRzVELGdCQUFtQixLQUFhLEVBQVMsT0FBbUI7UUFBbkIsd0JBQUEsRUFBQSxjQUFtQjtRQUE1RCxZQUNFLGtCQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsU0FDdEI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFGbEQsZ0JBQVUsR0FBVyxPQUFPLENBQUMsTUFBTSxDQUFBOztJQUk3QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFORCxDQUErQyxZQUFZLEdBTTFEOzs7Ozs7Ozs7O0lBTEMsNEJBQTZDOztJQUVqQyx1QkFBb0I7O0lBQUUseUJBQTBCOzs7OztBQUs5RDs7OztJQUFtRCxzQ0FBZTtJQUFsRTtRQUFBLHFFQUVDO1FBRFcsZ0JBQVUsR0FBVyxPQUFPLENBQUMsV0FBVyxDQUFBOztJQUNwRCxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBbUQsWUFBWSxHQUU5RDs7Ozs7Ozs7OztJQURDLGdDQUFrRDs7Ozs7QUFHcEQ7Ozs7SUFBc0QseUNBQWU7SUFBckU7UUFBQSxxRUFFQztRQURXLGdCQUFVLEdBQVcsT0FBTyxDQUFDLGNBQWMsQ0FBQTs7SUFDdkQsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUZELENBQXNELFlBQVksR0FFakU7Ozs7Ozs7Ozs7SUFEQyxtQ0FBcUQ7Ozs7O0FBR3ZEOzs7O0lBQWlELG9DQUFlO0lBQWhFO1FBQUEscUVBRUM7UUFEVyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxTQUFTLENBQUE7O0lBQ2xELENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUZELENBQWlELFlBQVksR0FFNUQ7Ozs7Ozs7Ozs7SUFEQyw4QkFBZ0Q7Ozs7O0FBR2xEOzs7O0lBQThDLGlDQUFlO0lBQTdEO1FBQUEscUVBRUM7UUFEVyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUE7O0lBQzlDLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQUZELENBQThDLFlBQVksR0FFekQ7Ozs7Ozs7Ozs7SUFEQywyQkFBNEM7Ozs7O0FBRzlDOzs7O0lBQWtELHFDQUFlO0lBQWpFO1FBQUEscUVBRUM7UUFEVyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxVQUFVLENBQUE7O0lBQ25ELENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxDQUFrRCxZQUFZLEdBRTdEOzs7Ozs7Ozs7O0lBREMsK0JBQWlEOzs7OztBQUduRDs7OztJQUF1RCwwQ0FBVztJQUdoRSx3QkFBbUIsS0FBYSxFQUFTLE9BQVk7UUFBckQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3RCO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRjNDLGdCQUFVLEdBQVcsT0FBTyxDQUFDLGdCQUFnQixDQUFBOztJQUl2RCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBdUQsV0FBVyxHQU1qRTs7Ozs7Ozs7OztJQUxDLG9DQUF1RDs7SUFFM0MsK0JBQW9COztJQUFFLGlDQUFtQjs7Ozs7O0FBTXZEOzs7Ozs7SUFBb0QsdUNBQWU7SUFBbkU7UUFBQSxxRUFFQztRQURXLGdCQUFVLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQTs7SUFDckQsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUZELENBQW9ELFlBQVksR0FFL0Q7Ozs7Ozs7Ozs7O0lBREMsaUNBQW1EOzs7OztBQUdyRDs7OztJQUFxRCx3Q0FBZTtJQUFwRTtRQUFBLHFFQUVDO1FBRFcsZ0JBQVUsR0FBVyxPQUFPLENBQUMsYUFBYSxDQUFBOztJQUN0RCxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBcUQsWUFBWSxHQUVoRTs7Ozs7Ozs7OztJQURDLGtDQUFvRDs7Ozs7QUFHdEQ7Ozs7SUFBa0QscUNBQWU7SUFBakU7UUFBQSxxRUFFQztRQURXLGdCQUFVLEdBQVcsT0FBTyxDQUFDLFVBQVUsQ0FBQTs7SUFDbkQsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELENBQWtELFlBQVksR0FFN0Q7Ozs7Ozs7Ozs7SUFEQywrQkFBaUQ7Ozs7O0FBR25EOzs7O0lBQStDLGtDQUFlO0lBQTlEO1FBQUEscUVBRUM7UUFEVyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUE7O0lBQy9DLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQUZELENBQStDLFlBQVksR0FFMUQ7Ozs7Ozs7Ozs7SUFEQyw0QkFBNkM7Ozs7O0FBRy9DOzs7O0lBQWtELHFDQUFXO0lBQTdEO1FBQUEscUVBRUM7UUFEVyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxVQUFVLENBQUE7O0lBQ25ELENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxDQUFrRCxXQUFXLEdBRTVEOzs7Ozs7Ozs7O0lBREMsK0JBQWlEOzs7OztBQUduRDs7OztJQUFzRCx5Q0FBZTtJQUFyRTtRQUFBLHFFQUVDO1FBRFcsZ0JBQVUsR0FBVyxPQUFPLENBQUMsY0FBYyxDQUFBOztJQUN2RCxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBc0QsWUFBWSxHQUVqRTs7Ozs7Ozs7OztJQURDLG1DQUFxRDs7Ozs7QUFHdkQ7Ozs7SUFBK0Msa0NBQWU7SUFBOUQ7UUFBQSxxRUFFQztRQURXLGdCQUFVLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQTs7SUFDL0MsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBK0MsWUFBWSxHQUUxRDs7Ozs7Ozs7OztJQURDLDRCQUE2Qzs7Ozs7QUFHL0M7Ozs7SUFBbUQsc0NBQWU7SUFHaEUsb0JBQW1CLEtBQVU7UUFBN0IsWUFDRSxrQkFBTSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQ25CO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQUs7UUFGbkIsZ0JBQVUsR0FBVyxPQUFPLENBQUMsV0FBVyxDQUFBOztJQUlsRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBbUQsWUFBWSxHQU05RDs7Ozs7Ozs7OztJQUxDLGdDQUFrRDs7SUFFdEMsMkJBQWlCOzs7OztBQUsvQjs7OztJQUErQyxrQ0FBZTtJQUc1RCxnQkFBbUIsS0FBVTtRQUE3QixZQUNFLGtCQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsU0FDbkI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBSztRQUZuQixnQkFBVSxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUE7O0lBSTdDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQU5ELENBQStDLFlBQVksR0FNMUQ7Ozs7Ozs7Ozs7SUFMQyw0QkFBNkM7O0lBRWpDLHVCQUFpQjs7Ozs7QUFLL0I7Ozs7SUFBb0QsdUNBQVc7SUFHN0QscUJBQW1CLEtBQWEsRUFBUyxPQUFZO1FBQXJELFlBQ0Usa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUN0QjtRQUZrQixXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUYzQyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUE7O0lBSW5ELENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFORCxDQUFvRCxXQUFXLEdBTTlEOzs7Ozs7Ozs7O0lBTEMsaUNBQW1EOztJQUV2Qyw0QkFBb0I7O0lBQUUsOEJBQW1COzs7OztBQUt2RDs7OztJQUF5RCw0Q0FBVztJQUVsRSwwQkFBbUIsS0FBYSxFQUFTLE9BQVk7UUFBckQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3RCO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRDNDLGdCQUFVLEdBQVcsT0FBTyxDQUFDLGtCQUFrQixDQUFBOztJQUd6RCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUQsV0FBVyxHQUtuRTs7Ozs7Ozs7OztJQUpDLHNDQUF5RDs7SUFDN0MsaUNBQW9COztJQUFFLG1DQUFtQjs7Ozs7QUFLdkQ7Ozs7SUFBeUQsNENBQVc7SUFFbEUsMEJBQW1CLEtBQWEsRUFBUyxPQUFZO1FBQXJELFlBQ0Usa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUN0QjtRQUZrQixXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQzQyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQTs7SUFHekQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlELFdBQVcsR0FLbkU7Ozs7Ozs7Ozs7SUFKQyxzQ0FBeUQ7O0lBQzdDLGlDQUFvQjs7SUFBRSxtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgUGF5bG9hZEFjdGlvbixcbiAgU2xpY2VBY3Rpb24sXG4gIHR5cGVGb3IsXG59IGZyb20gJ0BjZW8vc3RhdGUnXG5cbmltcG9ydCB7XG4gIGlBcGlSZXNwb25zZSxcbiAgaUVudGl0eSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vZW50aXR5LmFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBURU1QID0gJ1RFTVBfSURfVkFMVUUnXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlBY3Rpb248VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24gaW1wbGVtZW50cyBQYXlsb2FkQWN0aW9uIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcHVibGljIHBheWxvYWQ6IFQpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5pdDxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLklOSVRcbn1cblxuLy8gQWN0aW9uIHRvIGFkZCBhIG5ldyBlbnRpdHkgb24gdGhlIHNlcnZlci5cbmV4cG9ydCBjbGFzcyBBZGQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQUREXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBhbnksIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCB7IGRpcnR5OiB0cnVlIH0sIHBheWxvYWQpKVxuICB9XG5cbiAgLy8gSWYgdGhlIHBheWxvYWQgY29udGFpbnMgdGhlIHRlbXAgSUQgdmFsdWUsIHRoYXQgbWVhbnNcbiAgLy8gd2Ugd2FudCB0aGUgc2VydmVyIHRvIGFzc2lnbiBhbmQgSUQgdmFsdWUsIHNvIGRyb3AgdGhlIElEIGZpZWxkXG4gIHBheWxvYWRGb3JQb3N0KCkge1xuICAgIGNvbnN0IG5ld1BheWxvYWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBheWxvYWQpXG4gICAgaWYgKHRoaXMucGF5bG9hZC5pZCA9PT0gVEVNUCkge1xuICAgICAgZGVsZXRlIG5ld1BheWxvYWQuaWRcbiAgICAgIGRlbGV0ZSBuZXdQYXlsb2FkLmRpcnR5XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1BheWxvYWRcbiAgfVxufVxuXG4vLyBBY3Rpb24gdG8gc2VuZCBhcnJheSBvZiBlbnRpdGllcyB0byB0aGUgc3RvcmUuXG5leHBvcnQgY2xhc3MgQWRkU3RvcmVFbnRpdGllczxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG5cbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQUREX1NUT1JFX0VOVElUSUVTXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBUW10pIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG4vLyBBY3Rpb24gdG8gbG9hZCBkYXRhIGZyb20gdGhlIHNlcnZlclxuZXhwb3J0IGNsYXNzIExvYWQ8VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24gaW1wbGVtZW50cyBQYXlsb2FkQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5MT0FEXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuLy8gQWN0aW9uIHRvIGNhcHR1cmUgc3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY2xhc3MgQXN5bmNTdWNjZXNzPFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BU1lOQ19TVUNDRVNTXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBpQXBpUmVzcG9uc2UpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMb2FkU2VlZERhdGE8VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24gaW1wbGVtZW50cyBQYXlsb2FkQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5MT0FEX1NFRURfREFUQVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55ID0gbnVsbCkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBOb3QgYmVpbmcgdXNlZCBhdCB0aGlzIHRpbWU6IC8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplZDxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLklOSVRJQUxJWkVEXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5QQVRDSFxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRlbXBvcmFyeSBlbnRpdHkgdG8gZ28gaW50byB0aGUgc3RvcmUgYnV0IG5vdCB0byB0aGUgc2VydmVyIG9yIGJlXG4gKiB2YWxpZGF0ZWQuIElmIHRoZSBpZCBvZiB0aGUgcGF5bG9hZCBpcyBtaXNzaW5nIG9yIG51bGxcbiAqIHRoZW4gdXNlIHRoZSBURU1QIHZhbHVlLiBPdGhlcndpc2UgdXNlIHRoZSBwYXlsb2FkLmlkIHZhbHVlXG4qL1xuZXhwb3J0IGNsYXNzIEFkZFRlbXA8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQUREX1RFTVBcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcGF5bG9hZDogYW55ID0ge30pIHtcbiAgICBzdXBlcihzbGljZSwgT2JqZWN0LmFzc2lnbih7fSwgcGF5bG9hZCwgKHBheWxvYWQuaWQgPyB7fSA6IHsgaWQ6IFRFTVAgfSkpKVxuICB9XG59XG5cbi8qKlxuKiBVc2UgdGhpcyBhY3Rpb24gdG8gZmlyc3QgcHV0IGluIHRoZSBzdG9yZSBhbmQgdGhlblxuKiBzdWJtaXQgdG8gdGhlIHNlcnZlclxuKi9cbmV4cG9ydCBjbGFzcyBBZGRPcHRpbWlzdGljYWxseTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBBZGQ8VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfT1BUSU1JU1RJQ0FMTFlcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcGF5bG9hZDogYW55ID0ge30pIHtcbiAgICBzdXBlcihzbGljZSwgT2JqZWN0LmFzc2lnbih7fSwgeyBpZDogVEVNUCB9LCBwYXlsb2FkKSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgQWRkVXBkYXRlRmFpbDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfVVBEQVRFX0ZBSUxcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcGF5bG9hZDogYW55ID0ge30pIHtcbiAgICBzdXBlcihzbGljZSwgT2JqZWN0LmFzc2lnbih7fSwgcGF5bG9hZCwgKHBheWxvYWQuaWQgPyB7fSA6IHsgaWQ6IFRFTVAgfSkpKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGU8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuREVMRVRFXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUZhaWw8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuREVMRVRFX0ZBSUxcbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuREVMRVRFX1NVQ0NFU1Ncbn1cblxuZXhwb3J0IGNsYXNzIExvYWRGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkxPQURfRkFJTFxufVxuXG5leHBvcnQgY2xhc3MgQXN5bmM8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQVNZTkNcbn1cblxuZXhwb3J0IGNsYXNzIEFzeW5jRmFpbDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BU1lOQ19GQUlMXG59XG5cbmV4cG9ydCBjbGFzcyBBc3luY0RhdGFSZWFkeTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFTWU5DX0RBVEFfUkVBRFlcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IFRbXSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbi8vIHRoaXMgbWFrZXMgRWZmZWN0IGxvYWRGcm9tUmVtb3RlJCB3b3JrXG5leHBvcnQgY2xhc3MgTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgQXN5bmNTdWNjZXNzPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuTE9BRF9TVUNDRVNTXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaFN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuUEFUQ0hfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgUGF0Y2hGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlBBVENIX0ZBSUxcbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5VUERBVEVcbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoRWFjaDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlBBVENIX0VBQ0hcbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVN1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuVVBEQVRFX1NVQ0NFU1Ncbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRUxFQ1Rcbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdE5leHQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuU0VMRUNUX05FWFRcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBudWxsKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmxvYWQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuVU5MT0FEXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBhbnkpIHtcbiAgICBzdXBlcihzbGljZSwgbnVsbClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0U2VsZWN0ZWQ8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRVRfU0VMRUNURURcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQcmltYXJ5RW50aXR5PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuU0VUX1BSSU1BUllfRU5USVRZIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRTY29wZUVudGl0aWVzPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuU0VUX1NDT1BFX0VOVElUSUVTXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cbiJdfQ==