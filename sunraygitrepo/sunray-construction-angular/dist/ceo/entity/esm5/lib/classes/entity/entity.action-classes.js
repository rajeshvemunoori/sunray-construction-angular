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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmFjdGlvbi1jbGFzc2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9lbnRpdHkvZW50aXR5LmFjdGlvbi1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUVMLFdBQVcsR0FFWixNQUFNLFlBQVksQ0FBQTtBQU9uQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7O0FBRTFDLE1BQU0sS0FBTyxJQUFJLEdBQUcsZUFBZTs7OztBQUVuQzs7OztJQUNVLHdDQUFXO0lBRW5CLHNCQUFtQixLQUFVLEVBQVMsT0FBVTtRQUFoRCxZQUNFLGtCQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsU0FDdEI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBSztRQUFTLGFBQU8sR0FBUCxPQUFPLENBQUc7O0lBRWhELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFORCxDQUNVLFdBQVcsR0FLcEI7Ozs7Ozs7SUFIYSw2QkFBaUI7O0lBQUUsK0JBQWlCOzs7OztBQUtsRDs7OztJQUNVLGdDQUFXO0lBRHJCO1FBQUEscUVBSUM7UUFEVyxnQkFBVSxHQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUE7O0lBQzdDLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxBQUpELENBQ1UsV0FBVyxHQUdwQjs7Ozs7Ozs7OztJQURDLDBCQUEyQzs7Ozs7O0FBSTdDOzs7Ozs7SUFBNEMsK0JBQWU7SUFHekQsYUFBbUIsS0FBVSxFQUFTLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7UUFBdkQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FDMUQ7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBSztRQUFTLGFBQU8sR0FBUCxPQUFPLENBQVU7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QVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRjNDLGdCQUFVLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQTs7SUFJbkQsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQW9ELFdBQVcsR0FNOUQ7Ozs7Ozs7Ozs7SUFMQyxpQ0FBbUQ7O0lBRXZDLDRCQUFvQjs7SUFBRSw4QkFBbUI7Ozs7O0FBS3ZEOzs7O0lBQXlELDRDQUFXO0lBRWxFLDBCQUFtQixLQUFhLEVBQVMsT0FBWTtRQUFyRCxZQUNFLGtCQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsU0FDdEI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEM0MsZ0JBQVUsR0FBVyxPQUFPLENBQUMsa0JBQWtCLENBQUE7O0lBR3pELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUF5RCxXQUFXLEdBS25FOzs7Ozs7Ozs7O0lBSkMsc0NBQXlEOztJQUM3QyxpQ0FBb0I7O0lBQUUsbUNBQW1COzs7OztBQUt2RDs7OztJQUF5RCw0Q0FBVztJQUVsRSwwQkFBbUIsS0FBYSxFQUFTLE9BQVk7UUFBckQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3RCO1FBRmtCLFdBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRDNDLGdCQUFVLEdBQVcsT0FBTyxDQUFDLGtCQUFrQixDQUFBOztJQUd6RCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUQsV0FBVyxHQUtuRTs7Ozs7Ozs7OztJQUpDLHNDQUF5RDs7SUFDN0MsaUNBQW9COztJQUFFLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBQYXlsb2FkQWN0aW9uLFxuICBTbGljZUFjdGlvbixcbiAgdHlwZUZvcixcbn0gZnJvbSAnQGNlby9zdGF0ZSdcblxuaW1wb3J0IHtcbiAgaUFwaVJlc3BvbnNlLFxuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9lbnRpdHkuYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFRFTVAgPSAnVEVNUF9JRF9WQUxVRSdcblxuZXhwb3J0IGNsYXNzIEVudGl0eUFjdGlvbjxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwdWJsaWMgcGF5bG9hZDogVCkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0PFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIGltcGxlbWVudHMgUGF5bG9hZEFjdGlvbiB7XG5cbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuSU5JVFxufVxuXG4vLyBBY3Rpb24gdG8gYWRkIGEgbmV3IGVudGl0eSBvbiB0aGUgc2VydmVyLlxuZXhwb3J0IGNsYXNzIEFkZDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcHVibGljIHBheWxvYWQ6IGFueSA9IHt9KSB7XG4gICAgc3VwZXIoc2xpY2UsIE9iamVjdC5hc3NpZ24oe30sIHsgZGlydHk6IHRydWUgfSwgcGF5bG9hZCkpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF5bG9hZCBjb250YWlucyB0aGUgdGVtcCBJRCB2YWx1ZSwgdGhhdCBtZWFuc1xuICAvLyB3ZSB3YW50IHRoZSBzZXJ2ZXIgdG8gYXNzaWduIGFuZCBJRCB2YWx1ZSwgc28gZHJvcCB0aGUgSUQgZmllbGRcbiAgcGF5bG9hZEZvclBvc3QoKSB7XG4gICAgY29uc3QgbmV3UGF5bG9hZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGF5bG9hZClcbiAgICBpZiAodGhpcy5wYXlsb2FkLmlkID09PSBURU1QKSB7XG4gICAgICBkZWxldGUgbmV3UGF5bG9hZC5pZFxuICAgICAgZGVsZXRlIG5ld1BheWxvYWQuZGlydHlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UGF5bG9hZFxuICB9XG59XG5cbi8vIEFjdGlvbiB0byBzZW5kIGFycmF5IG9mIGVudGl0aWVzIHRvIHRoZSBzdG9yZS5cbmV4cG9ydCBjbGFzcyBBZGRTdG9yZUVudGl0aWVzPFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIHtcblxuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfU1RPUkVfRU5USVRJRVNcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IFRbXSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cbi8vIEFjdGlvbiB0byBsb2FkIGRhdGEgZnJvbSB0aGUgc2VydmVyXG5leHBvcnQgY2xhc3MgTG9hZDxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkxPQURcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSA9IG51bGwpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG4vLyBBY3Rpb24gdG8gY2FwdHVyZSBzdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cbmV4cG9ydCBjbGFzcyBBc3luY1N1Y2Nlc3M8VCBleHRlbmRzIGlFbnRpdHk+XG4gIGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFTWU5DX1NVQ0NFU1NcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGlBcGlSZXNwb25zZSkge1xuICAgIHN1cGVyKHNsaWNlLCBwYXlsb2FkKVxuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIExvYWRTZWVkRGF0YTxUIGV4dGVuZHMgaUVudGl0eT5cbiAgZXh0ZW5kcyBTbGljZUFjdGlvbiBpbXBsZW1lbnRzIFBheWxvYWRBY3Rpb24ge1xuXG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkxPQURfU0VFRF9EQVRBXG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE5vdCBiZWluZyB1c2VkIGF0IHRoaXMgdGltZTogLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemVkPFQgZXh0ZW5kcyBpRW50aXR5PlxuICBleHRlbmRzIFNsaWNlQWN0aW9uIGltcGxlbWVudHMgUGF5bG9hZEFjdGlvbiB7XG5cbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuSU5JVElBTElaRURcbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlBBVENIXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdGVtcG9yYXJ5IGVudGl0eSB0byBnbyBpbnRvIHRoZSBzdG9yZSBidXQgbm90IHRvIHRoZSBzZXJ2ZXIgb3IgYmVcbiAqIHZhbGlkYXRlZC4gSWYgdGhlIGlkIG9mIHRoZSBwYXlsb2FkIGlzIG1pc3Npbmcgb3IgbnVsbFxuICogdGhlbiB1c2UgdGhlIFRFTVAgdmFsdWUuIE90aGVyd2lzZSB1c2UgdGhlIHBheWxvYWQuaWQgdmFsdWVcbiovXG5leHBvcnQgY2xhc3MgQWRkVGVtcDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BRERfVEVNUFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCBwYXlsb2FkLCAocGF5bG9hZC5pZCA/IHt9IDogeyBpZDogVEVNUCB9KSkpXG4gIH1cbn1cblxuLyoqXG4qIFVzZSB0aGlzIGFjdGlvbiB0byBmaXJzdCBwdXQgaW4gdGhlIHN0b3JlIGFuZCB0aGVuXG4qIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4qL1xuZXhwb3J0IGNsYXNzIEFkZE9wdGltaXN0aWNhbGx5PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEFkZDxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFERF9PUFRJTUlTVElDQUxMWVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCB7IGlkOiBURU1QIH0sIHBheWxvYWQpKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRTdWNjZXNzPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFERF9TVUNDRVNTXG59XG5cbmV4cG9ydCBjbGFzcyBBZGRVcGRhdGVGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFERF9VUERBVEVfRkFJTFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXlsb2FkOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKHNsaWNlLCBPYmplY3QuYXNzaWduKHt9LCBwYXlsb2FkLCAocGF5bG9hZC5pZCA/IHt9IDogeyBpZDogVEVNUCB9KSkpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZTxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5ERUxFVEVcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSA9IG51bGwpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmFpbDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5ERUxFVEVfRkFJTFxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5ERUxFVEVfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZEZhaWw8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuTE9BRF9GQUlMXG59XG5cbmV4cG9ydCBjbGFzcyBBc3luYzxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5BU1lOQ1xufVxuXG5leHBvcnQgY2xhc3MgQXN5bmNGYWlsPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLkFTWU5DX0ZBSUxcbn1cblxuZXhwb3J0IGNsYXNzIEFzeW5jRGF0YVJlYWR5PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuQVNZTkNfREFUQV9SRUFEWVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogVFtdKSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuLy8gdGhpcyBtYWtlcyBFZmZlY3QgbG9hZEZyb21SZW1vdGUkIHdvcmtcbmV4cG9ydCBjbGFzcyBMb2FkU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBBc3luY1N1Y2Nlc3M8VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5MT0FEX1NVQ0NFU1Ncbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5QQVRDSF9TVUNDRVNTXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaEZhaWw8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFQ+IHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuUEFUQ0hfRkFJTFxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlVQREFURVxufVxuXG5leHBvcnQgY2xhc3MgUGF0Y2hFYWNoPFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IGFjdGlvbnMuUEFUQ0hfRUFDSFxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlU3VjY2VzczxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5VUERBVEVfU1VDQ0VTU1xufVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0PFQgZXh0ZW5kcyBpRW50aXR5PiBleHRlbmRzIEVudGl0eUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlNFTEVDVFxufVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0TmV4dDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRUxFQ1RfTkVYVFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVubG9hZDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VD4ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5VTkxPQURcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCBudWxsKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRTZWxlY3RlZDxUIGV4dGVuZHMgaUVudGl0eT4gZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBhY3Rpb25zLlNFVF9TRUxFQ1RFRFxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFByaW1hcnlFbnRpdHk8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRVRfUFJJTUFSWV9FTlRJVFkgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIHBheWxvYWQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldFNjb3BlRW50aXRpZXM8VCBleHRlbmRzIGlFbnRpdHk+IGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gYWN0aW9ucy5TRVRfU0NPUEVfRU5USVRJRVNcbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihzbGljZSwgcGF5bG9hZClcbiAgfVxufVxuIl19