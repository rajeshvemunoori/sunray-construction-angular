import { sliceActions, SliceAction, typeFor, PayloadAction, applicationConfigSelectors, ApplicationConfigActions } from '@ceo/state';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { createEntityAdapter } from '@ngrx/entity';
import { createSelector, compose, createFeatureSelector, Store, StoreModule, combineReducers } from '@ngrx/store';
import { Actions, Effect, ofType, EffectsModule } from '@ngrx/effects';
import { Validators } from '@angular/forms';
import { camelCase, classify, slugify, InflectionService, pluralize, snakeCase } from '@ceo/core';
import * as _ from 'lodash';
import { omit, pick, flatten, join, bind, map, split, has, defaults, find, merge, isEmpty, includes, keys, head, intersection, get, set, isNil, partial, fromPairs, mapValues, flatMap, compact, reduce, values, last, isEqual, pickBy, drop, dropRight, cloneDeep, assign, sortBy, filter, toString, every, lowerCase, isFunction, isArray, clone, startsWith, without, extend } from 'lodash';
import { of, combineLatest, Observable, defer, zip } from 'rxjs';
import { map as map$1, mergeMap, tap, distinctUntilChanged, switchMap, filter as filter$1, shareReplay } from 'rxjs/operators';
import { Injectable, InjectionToken, defineInjectable, inject, NgModule, Inject } from '@angular/core';
import { Mixin, AttributeGetterSetter, AttributeUpdater, Memoizer, ApiService, FormMemberFactory, FormFactory, CeoFormsModule } from '@ceo/shared';
import { __spread, __read, __extends, __decorate, __metadata, __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var actions = __assign({}, sliceActions, { ADD: 'ADD', ADD_OPTIMISTICALLY: 'ADD_OPTIMISTICALLY', ADD_SUCCESS: 'ADD_SUCCESS', ADD_TEMP: 'ADD_TEMP', ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL', UPDATE_SUCCESS: 'UPDATE_SUCCESS', DELETE: 'DELETE', DELETE_FAIL: 'DELETE_FAIL', DELETE_SUCCESS: 'DELETE_SUCCESS', DELETE_TEMP: 'DELETE_TEMP', ASYNC: 'ASYNC', ASYNC_FAIL: 'ASYNC_FAIL', ASYNC_SUCCESS: 'ASYNC_SUCCESS', ASYNC_DATA_READY: 'ASYNC_DATA_READY', PATCH: 'PATCH', PATCH_EACH: 'PATCH_EACH', PATCH_FAIL: 'PATCH_FAIL', PATCH_SUCCESS: 'PATCH_SUCCESS', RESTORE_TEMP: 'RESTORE_TEMP', SELECT: 'SELECT', SELECT_NEXT: 'SELECT_NEXT', UNLOAD: 'UNLOAD', ADD_STORE_ENTITIES: "ADD_STORE_ENTITIES", SET_SELECTED: "SET_SELECTED", LOAD_SEED_DATA: 'LOAD_SEED_DATA', SET_PRIMARY_ENTITY: 'SET_PRIMARY_ENTITY', SET_SCOPE_ENTITIES: 'SET_SCOPE_ENTITIES' });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TEMP = 'TEMP_ID_VALUE';
/**
 * @template T
 */
var  /**
 * @template T
 */
EntityAction = /** @class */ (function (_super) {
    __extends(EntityAction, _super);
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
var /**
 * @template T
 */
Init = /** @class */ (function (_super) {
    __extends(Init, _super);
    function Init() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.INIT;
        return _this;
    }
    return Init;
}(SliceAction));
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
    __extends(Add, _super);
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
    __extends(AddStoreEntities, _super);
    function AddStoreEntities(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.ADD_STORE_ENTITIES;
        return _this;
    }
    return AddStoreEntities;
}(SliceAction));
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
    __extends(Load, _super);
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
    __extends(AsyncSuccess, _super);
    function AsyncSuccess(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.ASYNC_SUCCESS;
        return _this;
    }
    return AsyncSuccess;
}(SliceAction));
/**
 * @template T
 */
var /**
 * @template T
 */
LoadSeedData = /** @class */ (function (_super) {
    __extends(LoadSeedData, _super);
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
    __extends(Initialized, _super);
    function Initialized() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.INITIALIZED;
        return _this;
    }
    return Initialized;
}(SliceAction));
/**
 * @template T
 */
var /**
 * @template T
 */
Patch = /** @class */ (function (_super) {
    __extends(Patch, _super);
    function Patch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.PATCH;
        return _this;
    }
    return Patch;
}(EntityAction));
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
    __extends(AddTemp, _super);
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
    __extends(AddOptimistically, _super);
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
 * @template T
 */
var /**
 * @template T
 */
AddSuccess = /** @class */ (function (_super) {
    __extends(AddSuccess, _super);
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
var /**
 * @template T
 */
AddUpdateFail = /** @class */ (function (_super) {
    __extends(AddUpdateFail, _super);
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
var /**
 * @template T
 */
Delete = /** @class */ (function (_super) {
    __extends(Delete, _super);
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
var /**
 * @template T
 */
DeleteFail = /** @class */ (function (_super) {
    __extends(DeleteFail, _super);
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
var /**
 * @template T
 */
DeleteSuccess = /** @class */ (function (_super) {
    __extends(DeleteSuccess, _super);
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
var /**
 * @template T
 */
LoadFail = /** @class */ (function (_super) {
    __extends(LoadFail, _super);
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
var /**
 * @template T
 */
Async = /** @class */ (function (_super) {
    __extends(Async, _super);
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
var /**
 * @template T
 */
AsyncFail = /** @class */ (function (_super) {
    __extends(AsyncFail, _super);
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
var /**
 * @template T
 */
AsyncDataReady = /** @class */ (function (_super) {
    __extends(AsyncDataReady, _super);
    function AsyncDataReady(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.ASYNC_DATA_READY;
        return _this;
    }
    return AsyncDataReady;
}(SliceAction));
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
    __extends(LoadSuccess, _super);
    function LoadSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = actions.LOAD_SUCCESS;
        return _this;
    }
    return LoadSuccess;
}(AsyncSuccess));
/**
 * @template T
 */
var /**
 * @template T
 */
PatchSuccess = /** @class */ (function (_super) {
    __extends(PatchSuccess, _super);
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
var /**
 * @template T
 */
PatchFail = /** @class */ (function (_super) {
    __extends(PatchFail, _super);
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
var /**
 * @template T
 */
Update = /** @class */ (function (_super) {
    __extends(Update, _super);
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
var /**
 * @template T
 */
PatchEach = /** @class */ (function (_super) {
    __extends(PatchEach, _super);
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
var /**
 * @template T
 */
UpdateSuccess = /** @class */ (function (_super) {
    __extends(UpdateSuccess, _super);
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
var /**
 * @template T
 */
Select = /** @class */ (function (_super) {
    __extends(Select, _super);
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
var /**
 * @template T
 */
SelectNext = /** @class */ (function (_super) {
    __extends(SelectNext, _super);
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
var /**
 * @template T
 */
Unload = /** @class */ (function (_super) {
    __extends(Unload, _super);
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
var /**
 * @template T
 */
SetSelected = /** @class */ (function (_super) {
    __extends(SetSelected, _super);
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
var /**
 * @template T
 */
SetPrimaryEntity = /** @class */ (function (_super) {
    __extends(SetPrimaryEntity, _super);
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
var /**
 * @template T
 */
SetScopeEntities = /** @class */ (function (_super) {
    __extends(SetScopeEntities, _super);
    function SetScopeEntities(slice, payload) {
        var _this = _super.call(this, slice, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = actions.SET_SCOPE_ENTITIES;
        return _this;
    }
    return SetScopeEntities;
}(SliceAction));

var entity_actionClasses = /*#__PURE__*/Object.freeze({
    TEMP: TEMP,
    EntityAction: EntityAction,
    Init: Init,
    Add: Add,
    AddStoreEntities: AddStoreEntities,
    Load: Load,
    AsyncSuccess: AsyncSuccess,
    LoadSeedData: LoadSeedData,
    Initialized: Initialized,
    Patch: Patch,
    AddTemp: AddTemp,
    AddOptimistically: AddOptimistically,
    AddSuccess: AddSuccess,
    AddUpdateFail: AddUpdateFail,
    Delete: Delete,
    DeleteFail: DeleteFail,
    DeleteSuccess: DeleteSuccess,
    LoadFail: LoadFail,
    Async: Async,
    AsyncFail: AsyncFail,
    AsyncDataReady: AsyncDataReady,
    LoadSuccess: LoadSuccess,
    PatchSuccess: PatchSuccess,
    PatchFail: PatchFail,
    Update: Update,
    PatchEach: PatchEach,
    UpdateSuccess: UpdateSuccess,
    Select: Select,
    SelectNext: SelectNext,
    Unload: Unload,
    SetSelected: SetSelected,
    SetPrimaryEntity: SetPrimaryEntity,
    SetScopeEntities: SetScopeEntities
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildScopeSelector = function (entityAdapter, selectors, scopeName) {
    /** @type {?} */
    var collectionType = entityAdapter.entityCollectionType;
    /** @type {?} */
    var selectScopeEntities = function (scopes, entities) {
        /** @type {?} */
        var ids = get(scopes, [scopeName, 'ids'], []);
        /** @type {?} */
        var scopeEntities = compact(ids.map(function (id) { return entities[id]; }));
        /** @type {?} */
        var collection = new collectionType(scopeEntities);
        return collection;
    };
    /** @type {?} */
    var selectorName = "select.scope." + camelCase(scopeName);
    selectors[selectorName] = createSelector(selectors.selectScopes, selectors.selectEntities, selectScopeEntities);
    return selectors;
}
// Get all the Selectors internal to an entity type
;
// Get all the Selectors internal to an entity type
/** @type {?} */
var buildScopeSelectors = function (entityAdapter, selectors) {
    /** @type {?} */
    var scopeNames = keys(entityAdapter.scopes);
    /** @type {?} */
    var buildSelector = partial(buildScopeSelector, entityAdapter);
    return reduce(scopeNames, buildSelector, selectors);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildEntityTypeSelectors = function (entityAdapter) {
    /** @type {?} */
    var collectionType = entityAdapter.entityCollectionType;
    /** @type {?} */
    var selectors = entityAdapter.ngrxEntityAdapter.getSelectors();
    /** @type {?} */
    var defaults$$1 = ['selectIds', 'selectEntities', 'selectTotal'];
    /** @type {?} */
    var decoratedSelectors = pick(selectors, defaults$$1)
    // Wrap the selectAll selector in order to return an
    // entity collection object
    ;
    // Wrap the selectAll selector in order to return an
    // entity collection object
    decoratedSelectors.selectAll = function (state) {
        /** @type {?} */
        var entities = selectors.selectAll(state);
        /** @type {?} */
        var collection = new collectionType(entities);
        return collection;
    };
    decoratedSelectors.selectSelectedEntity = function (state) {
        return state.entities[state.selectedEntityId];
    };
    decoratedSelectors.selectScopes = function (state) { return state.scopes; };
    buildScopeSelectors(entityAdapter, decoratedSelectors);
    return decoratedSelectors;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// get theType
/**
 * @param {?} featureName
 * @param {?} sliceName
 * @param {?} actionName
 * @return {?}
 */
function actionType(featureName, sliceName, actionName) {
    /** @type {?} */
    var fullSliceName = join([featureName, sliceName], ".");
    return typeFor(fullSliceName, actionName);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} entities
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function addMany(entities, adapter, state) {
    return adapter.addMany(entities, state);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// addOne
/**
 * @param {?} entity
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function addOne(entity, adapter, state) {
    // Remove the entity if already existing
    /** @type {?} */
    var entityId = entity.id;
    /** @type {?} */
    var newEntities = omit(state.entities, entityId);
    /** @type {?} */
    var newIds = without(state.ids, entityId);
    state = extend(state, { ids: newIds, entities: newEntities });
    return adapter.addOne(entity, state);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function removeMany(action, adapter, state) {
    /** @type {?} */
    var payloadIds = map(flatten([action.payload]), 'id');
    return adapter.removeMany(payloadIds, state);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// removeOne
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function removeOne(action, adapter, state) {
    return adapter.removeOne(action.payload.id, state);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function setScopeIds(action, adapter, state) {
    /** @type {?} */
    var entities = action.payload.entities;
    /** @type {?} */
    var scopeName = action.payload.scope;
    /** @type {?} */
    var ids = map(entities, 'id');
    /** @type {?} */
    var stateDelta = {
        scopes: {}
    };
    stateDelta.scopes[scopeName] = {
        ids: ids
    };
    return Object.assign({}, state, stateDelta);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// updateMany
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function updateMany(action, adapter, state) {
    /** @type {?} */
    var payload = flatten([action.payload]);
    /** @type {?} */
    var payloadIds = map(flatten([payload]), 'id');
    return adapter.upsertMany(payload, state);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// updateOne
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function updateOne(action, adapter, state) {
    return adapter.updateOne(action.payload, state);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} action
 * @param {?} featureName
 * @param {?} sliceName
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
function entityReducer(action, featureName, sliceName, adapter, state) {
    switch (action.type) {
        // Handle add store entities
        case actionType(featureName, sliceName, actions.ADD_STORE_ENTITIES):
            /** @type {?} */
            var entityData = action.payload;
            if (isArray(entityData) && entityData.length == 1) {
                // Single item
                entityData = head(entityData);
            }
            if (isArray(entityData)) {
                return addMany(entityData, adapter, state);
            }
            else {
                return addOne(entityData, adapter, state);
            }
        // Handle set selected store entity
        case actionType(featureName, sliceName, actions.SET_PRIMARY_ENTITY):
            if (state.selectedEntityId == action.payload.entity.id) {
                return state;
            }
            else {
                /** @type {?} */
                var stateDelta = {
                    selectedEntityId: action.payload.entity.id
                };
                return Object.assign({}, state, stateDelta);
            }
        case actionType(featureName, sliceName, actions.SET_SELECTED):
            if (state.selectedEntityId == action.payload.entity.id) {
                return state;
            }
            else {
                /** @type {?} */
                var stateDelta = {
                    selectedEntityId: action.payload.entity.id
                };
                return Object.assign({}, state, stateDelta);
            }
        // Handle set selected store entity
        case actionType(featureName, sliceName, actions.UPDATE_SUCCESS):
            if (Array.isArray(action.payload)) {
                return updateMany(action, adapter, state);
            }
            else {
                return updateOne(action, adapter, state);
            }
        // Handle delete store entities
        case actionType(featureName, sliceName, actions.DELETE_SUCCESS):
            if (Array.isArray(action.payload)) {
                return removeMany(action, adapter, state);
            }
            else {
                return removeOne(action, adapter, state);
            }
        // Handle set scope entities
        case actionType(featureName, sliceName, actions.SET_SCOPE_ENTITIES):
            return setScopeIds(action, adapter, state);
        // Return the state
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityCollection = /** @class */ (function () {
    function EntityCollection(entities) {
        if (entities === void 0) { entities = []; }
        this.entities = entities;
        this.length = entities.length;
    }
    /**
     * @return {?}
     */
    EntityCollection.prototype.none = /**
     * @return {?}
     */
    function () {
        return this.buildCollection([]);
    };
    /**
     * @param {?} attributes
     * @return {?}
     */
    EntityCollection.prototype.sort = /**
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) {
        attributes = flatten([attributes]);
        /** @type {?} */
        var entities = sortBy(this.entities, attributes);
        return this.buildCollection(entities);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityCollection.prototype.filter = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        // @ts-ignore:
        /** @type {?} */
        var entities = (_a = this.entities).filter.apply(_a, __spread(args));
        return this.buildCollection(entities);
    };
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    EntityCollection.prototype.invokeFilter = /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    function (methodName, attribute) {
        /** @type {?} */
        var filterByMethod = function (entity) {
            if (entity[methodName]) {
                return entity[methodName](attribute);
            }
            else {
                return false;
            }
        }
        //let filterPartial = _.partialRight(filterByMethod, ...args)
        ;
        //let filterPartial = _.partialRight(filterByMethod, ...args)
        /** @type {?} */
        var entities = filter(this.entities, filterByMethod);
        return this.buildCollection(entities);
    };
    // TODO: deprecate this method
    // TODO: deprecate this method
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    EntityCollection.prototype.filterByInvoke = 
    // TODO: deprecate this method
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    function (methodName, attribute) {
        return this.invokeFilter(methodName, attribute);
    };
    /**
     * @param {?} filters
     * @return {?}
     */
    EntityCollection.prototype.filterByAttrs = /**
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        /** @type {?} */
        var runFilter = function (entityCollection, filter$$1, attr) {
            return entityCollection.filterByAttr(attr, filter$$1);
        };
        /** @type {?} */
        var value = reduce(filters, runFilter, this);
        return value;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EntityCollection.prototype.find = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var findEntity = function (entity) {
            /** @type {?} */
            var defaults$$1 = ["id"];
            /** @type {?} */
            var idAttributes = get(entity.constructor, 'config.primaryKeys', defaults$$1);
            /** @type {?} */
            var hasId = function (attr) {
                return entity[attr] == id;
            };
            return !isNil(find(idAttributes, hasId));
        };
        return find(this.entities, findEntity);
    };
    /**
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    EntityCollection.prototype.findByAttr = /**
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    function (attr, value) {
        /**
         * @param {?} entity
         * @return {?}
         */
        function findEntity(entity) {
            return entity[attr] == value;
        }
        return find(this.entities, findEntity);
    };
    /**
     * @param {?} mapFn
     * @return {?}
     */
    EntityCollection.prototype.map = /**
     * @param {?} mapFn
     * @return {?}
     */
    function (mapFn) {
        return map(this.entities, mapFn);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityCollection.prototype.slice = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        /** @type {?} */
        var entities = (_a = this.entities).slice.apply(_a, __spread(args));
        return this.buildCollection(entities);
    };
    /**
     * @param {?} conditions
     * @return {?}
     */
    EntityCollection.prototype.where = /**
     * @param {?} conditions
     * @return {?}
     */
    function (conditions) {
        /** @type {?} */
        var filterByCondition = function (entity, value, key) {
            // When the entity does not have the attribute at all
            if (!has(entity, key)) {
                return false;
            }
            /** @type {?} */
            var entityValue = entity[key]
            // Case 1: the attribute in the entity is an array
            ;
            // Case 1: the attribute in the entity is an array
            if (entityValue instanceof Array) {
                return includes(map(entityValue, toString), toString(value));
            }
            // Case 2: the condition is an array
            if (value instanceof Array) {
                return includes(map(value, toString), toString(entityValue));
            }
            return toString(entityValue) == toString(value);
        };
        /** @type {?} */
        var filterEntity = function (entity) {
            return every(conditions, partial(filterByCondition, entity));
        };
        /** @type {?} */
        var entities = filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    };
    /**
     * @param {?} conditions
     * @return {?}
     */
    EntityCollection.prototype.stringSearch = /**
     * @param {?} conditions
     * @return {?}
     */
    function (conditions) {
        /** @type {?} */
        var runFilter = function (entityCollection, searchTerm, attr) {
            return entityCollection.stringSearchByAttr(attr, searchTerm);
        };
        return reduce(conditions, runFilter, this);
    };
    /**
     * @param {?} conditions
     * @return {?}
     */
    EntityCollection.prototype.search = /**
     * @param {?} conditions
     * @return {?}
     */
    function (conditions) {
        /** @type {?} */
        var filterByCondition = function (entity, value, key) {
            /** @type {?} */
            var entityValue = entity.attributes[key];
            if (value instanceof Array) {
                return includes(value, entityValue);
            }
            else {
                return includes(entityValue, value);
            }
        };
        /** @type {?} */
        var filterEntity = function (entity) {
            return every(conditions, partial(filterByCondition, entity));
        };
        /** @type {?} */
        var entities = filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    };
    /**
     * @param {?} attr
     * @param {?} searchTerm
     * @return {?}
     */
    EntityCollection.prototype.stringSearchByAttr = /**
     * @param {?} attr
     * @param {?} searchTerm
     * @return {?}
     */
    function (attr, searchTerm) {
        /** @type {?} */
        var attrFilter = function (entity) {
            if (!searchTerm) {
                return true;
            }
            /** @type {?} */
            var entityValue = entity[attr];
            /** @type {?} */
            var entityWildcardValue = lowerCase(entityValue);
            /** @type {?} */
            var searchTermWildcardValue = lowerCase(searchTerm);
            return includes(entityWildcardValue, searchTermWildcardValue);
        };
        return this.filter(attrFilter);
    };
    /**
     * @return {?}
     */
    EntityCollection.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return isEmpty(this.entities);
    };
    /**
     * @return {?}
     */
    EntityCollection.prototype.isNotEmpty = /**
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * @return {?}
     */
    EntityCollection.prototype.hasEntities = /**
     * @return {?}
     */
    function () {
        return this.isNotEmpty();
    };
    /**
     * @private
     * @param {?} attr
     * @param {?} filter
     * @return {?}
     */
    EntityCollection.prototype.filterByAttr = /**
     * @private
     * @param {?} attr
     * @param {?} filter
     * @return {?}
     */
    function (attr, filter$$1) {
        /** @type {?} */
        var attrFilter = function (entity) {
            /** @type {?} */
            var value = entity.attributes[attr];
            return filter$$1(value);
        };
        return this.filter(attrFilter);
    };
    /**
     * @private
     * @param {?} entities
     * @return {?}
     */
    EntityCollection.prototype.buildCollection = /**
     * @private
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        /** @type {?} */
        var collectionType = this.constructor;
        return new collectionType(entities);
    };
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    EntityCollection.prototype[Symbol.iterator] = 
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = 0;
        /** @type {?} */
        var entities = this.entities;
        return {
            next: function () {
                /** @type {?} */
                var noEntities = isEmpty(entities);
                /** @type {?} */
                var value = noEntities ? null : entities[current++];
                /** @type {?} */
                var done = noEntities ? true : current > entities.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    };
    return EntityCollection;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityAdapter = /** @class */ (function () {
    function EntityAdapter(entityOpts) {
        this.featureName = entityOpts.featureName;
        this.entityType = entityOpts.entityType;
        this.entityConfig = this.entityType.config;
        this.entityName = this.entityType.sliceName;
        this.sliceName = this.entityName;
    }
    Object.defineProperty(EntityAdapter.prototype, "entityCollectionType", {
        get: /**
         * @return {?}
         */
        function () {
            return EntityCollection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "reducer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getterWithBuilder('_reducer', 'buildReducer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "selectors", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getterWithBuilder('_selectors', 'buildSelectors');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "initialState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getterWithBuilder('_initialState', 'buildInitialState');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "ngrxEntityAdapter", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._ngrxEntityAdapter) {
                this._ngrxEntityAdapter = this.buildNgrxEntityAdapter();
            }
            return this._ngrxEntityAdapter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapter.prototype, "scopes", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultScopes = {};
            return get(this.entityConfig, 'initialState.scopes', defaultScopes);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildReducer = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var adapter = this.ngrxEntityAdapter;
        /** @type {?} */
        var featureName = this.featureEntitySliceName(this.featureName);
        /** @type {?} */
        var sliceName = this.sliceName;
        /** @type {?} */
        var initialState = this.initialState;
        /** @type {?} */
        var customReducer = this.entityConfig.reducer;
        /** @type {?} */
        var baseReducer = function (state, action) {
            if (state === void 0) { state = initialState; }
            if (customReducer) {
                state = customReducer(state, action);
            }
            state = entityReducer(action, featureName, sliceName, adapter, state);
            return state;
        };
        return baseReducer;
    };
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    EntityAdapter.prototype.featureEntitySliceName = /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    function (featureName) {
        return join([featureName, 'entities'], '.');
    };
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildSelectors = /**
     * @private
     * @return {?}
     */
    function () {
        return buildEntityTypeSelectors(this);
    };
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildInitialState = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var entityTypeInitialState = {
            selectedEntityId: null,
        };
        /** @type {?} */
        var initialState = merge(entityTypeInitialState, this.entityType.initialState);
        return this.ngrxEntityAdapter.getInitialState(initialState);
    };
    /**
     * @private
     * @return {?}
     */
    EntityAdapter.prototype.buildNgrxEntityAdapter = /**
     * @private
     * @return {?}
     */
    function () {
        return createEntityAdapter();
    };
    /**
     * @private
     * @param {?} propName
     * @param {?} builder
     * @return {?}
     */
    EntityAdapter.prototype.getterWithBuilder = /**
     * @private
     * @param {?} propName
     * @param {?} builder
     * @return {?}
     */
    function (propName, builder) {
        if (!this[propName]) {
            this[propName] = this[builder]();
        }
        return this[propName];
    };
    return EntityAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityAdapterFactory = /** @class */ (function () {
    function EntityAdapterFactory(_featureConfig) {
        this._featureConfig = _featureConfig;
    }
    Object.defineProperty(EntityAdapterFactory.prototype, "featureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._featureConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapterFactory.prototype, "adapters", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._adapters) {
                this._adapters = this.buildAdapters();
            }
            return this._adapters;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    EntityAdapterFactory.prototype.buildAdapters = /**
     * @private
     * @return {?}
     */
    function () {
        return map(this.featureConfig.entityTypes, bind(this.buildAdapter, this));
    };
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    EntityAdapterFactory.prototype.buildAdapter = /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    function (entityType) {
        /** @type {?} */
        var opts = {
            featureName: this.featureConfig.name,
            entityType: entityType,
        };
        return new EntityAdapter(opts);
    };
    return EntityAdapterFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityTypeFactory = /** @class */ (function () {
    function EntityTypeFactory(baseEntityType) {
        this.baseEntityType = baseEntityType;
    }
    /**
     * @param {?} entityConfig
     * @return {?}
     */
    EntityTypeFactory.prototype.build = /**
     * @param {?} entityConfig
     * @return {?}
     */
    function (entityConfig) {
        /** @type {?} */
        var entityTypeName = classify(entityConfig.name);
        /** @type {?} */
        var entityType = this.buildEntityType(entityConfig);
        /** @type {?} */
        var map$$1 = {};
        /** @type {?} */
        var identifier = (/** @type {?} */ (entityTypeName));
        map$$1[identifier] = entityType;
        return (/** @type {?} */ (map$$1));
    };
    /**
     * @private
     * @param {?} entityConfig
     * @return {?}
     */
    EntityTypeFactory.prototype.buildEntityType = /**
     * @private
     * @param {?} entityConfig
     * @return {?}
     */
    function (entityConfig) {
        /** @type {?} */
        var entityType;
        if (entityConfig.entityType) {
            entityType = entityConfig.entityType;
        }
        else {
            entityType = this.baseEntityType;
        }
        var Entity = /** @class */ (function (_super) {
            __extends(Entity, _super);
            function Entity() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Entity._sliceName = entityConfig.name;
            Entity.config = entityConfig;
            return Entity;
        }(entityType));
        return Entity;
    };
    return EntityTypeFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityConfig = /** @class */ (function () {
    function EntityConfig(init) {
        this.primaryKeys = ['id'];
        this.seed = [];
        this.initialState = {};
        Object.assign(this, init);
    }
    Object.defineProperty(EntityConfig.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._name) {
                this._name = this.type;
            }
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EntityConfig.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @param {?=} resourceIdentifier
     * @return {?}
     */
    EntityConfig.prototype.hasResourceType = /**
     * @param {?=} resourceIdentifier
     * @return {?}
     */
    function (resourceIdentifier) {
        if (resourceIdentifier === void 0) { resourceIdentifier = {}; }
        return this.type == resourceIdentifier.type;
    };
    /**
     * @param {?} entityData
     * @return {?}
     */
    EntityConfig.prototype.ofType = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        return this.type == entityData.type;
    };
    /**
     * @return {?}
     */
    EntityConfig.prototype.isCustom = /**
     * @return {?}
     */
    function () {
        return has(this, "primaryKeys");
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    EntityConfig.prototype.urlFragment = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        if (isFunction(this.url)) {
            return this.url(opts);
        }
        else {
            return this.url ? this.url : this.type;
        }
    };
    Object.defineProperty(EntityConfig.prototype, "entityType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._entityType;
        },
        set: /**
         * @param {?} entityType
         * @return {?}
         */
        function (entityType) {
            this._entityType = entityType;
        },
        enumerable: true,
        configurable: true
    });
    return EntityConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityEffectsConfig = /** @class */ (function () {
    function EntityEffectsConfig(config) {
        this.config = config;
        this.defaultEffectTypes = {
            init: false,
            load: true,
            add: true,
            patch: true,
            asyncSuccess: true
        };
        this.sliceName = config.sliceName;
        this.initialEntity = config.initialEntity;
        this.effectTypes = merge(this.defaultEffectTypes, config.effectTypes);
    }
    /**
     * @param {?} effectTypeName
     * @return {?}
     */
    EntityEffectsConfig.prototype.hasEffectType = /**
     * @param {?} effectTypeName
     * @return {?}
     */
    function (effectTypeName) {
        return (has(this.effectTypes, effectTypeName) &&
            this.effectTypes[effectTypeName]);
    };
    /**
     * @param {?} configItem
     * @return {?}
     */
    EntityEffectsConfig.prototype.getConfig = /**
     * @param {?} configItem
     * @return {?}
     */
    function (configItem) {
        return this.config[configItem];
    };
    return EntityEffectsConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var JsonApiEntity = /** @class */ (function () {
    function JsonApiEntity(init, dataService) {
        this.attributes = {};
        this.defaultAttributes = {};
        // Mixin methods
        this.updatedKeys = [];
        Object.assign(this, init);
        this._dataService = dataService;
        this.setAttributes();
    }
    Object.defineProperty(JsonApiEntity, "sliceName", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._sliceName) {
                return this._sliceName;
            }
            if (this.config) {
                return this.config.name;
            }
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    JsonApiEntity.prototype.setAttributes = /**
     * @return {?}
     */
    function () {
        this.attributes =
            defaults(this.attributes, ((/** @type {?} */ (this.constructor))).defaultAttributes);
        this.updateAttributes(this.attributes);
    };
    /**
     * @param {?} attrName
     * @return {?}
     */
    JsonApiEntity.prototype.getAttr = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        return this.attributes[attrName];
    };
    /**
     * @param {?} attrName
     * @param {?} value
     * @return {?}
     */
    JsonApiEntity.prototype.setAttr = /**
     * @param {?} attrName
     * @param {?} value
     * @return {?}
     */
    function (attrName, value) {
        attrName = slugify(attrName);
        /** @type {?} */
        var prop = {};
        prop[attrName] = value;
        this.updateAttributes(prop);
    };
    Object.defineProperty(JsonApiEntity.prototype, "dataService", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataService;
        },
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            this._dataService = service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonApiEntity.prototype, "isNew", {
        get: /**
         * @return {?}
         */
        function () {
            return !has(this, 'id');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @return {?}
     */
    JsonApiEntity.prototype.nameStartsWith = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var nameIndex = this.getAttr('name')
            .toLowerCase()
            .indexOf(name.toLowerCase());
        return nameIndex === 0;
    };
    /**
     * @return {?}
     */
    JsonApiEntity.prototype.getSliceName = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    JsonApiEntity.prototype.relationship = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this[type];
    };
    /**
     * @param {?} relationshipName
     * @return {?}
     */
    JsonApiEntity.prototype.relationshipSize = /**
     * @param {?} relationshipName
     * @return {?}
     */
    function (relationshipName) {
        if (!this.hasRelationship(relationshipName)) {
            return 0;
        }
        /** @type {?} */
        var relationshipData = this.relationships[relationshipName].data;
        if (isArray(relationshipData)) {
            return relationshipData.length;
        }
        return 1;
    };
    /**
     * @param {?} relationshipName
     * @param {?=} opts
     * @return {?}
     */
    JsonApiEntity.prototype.relationship$ = /**
     * @param {?} relationshipName
     * @param {?=} opts
     * @return {?}
     */
    function (relationshipName, opts) {
        if (opts === void 0) { opts = {}; }
        return this.dataService.relationship$(this, relationshipName, opts);
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    JsonApiEntity.prototype.save$ = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var saveAction = this.isNew ? 'create$' : 'update$';
        return this.dataService[saveAction](this.toResourceIdentifier(), opts);
    };
    /**
     * @private
     * @return {?}
     */
    JsonApiEntity.prototype.toResourceIdentifier = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ri = (/** @type {?} */ (clone(pick(this, 'feature', 'type'))));
        ri.data = this.attributes;
        if (!this.isNew) {
            ri.id = this.id;
        }
        return ri;
    };
    /**
     * @private
     * @param {?} relationshipName
     * @return {?}
     */
    JsonApiEntity.prototype.hasRelationship = /**
     * @private
     * @param {?} relationshipName
     * @return {?}
     */
    function (relationshipName) {
        return (this.relationships &&
            this.relationships[relationshipName] &&
            this.relationships[relationshipName].data);
    };
    /**
     * @param {?} attributes
     * @return {?}
     */
    JsonApiEntity.prototype.updateAttributes = /**
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) { };
    /**
     * @return {?}
     */
    JsonApiEntity.prototype.createAttributeSettersAndGetters = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} props
     * @return {?}
     */
    JsonApiEntity.prototype.createSettersAndGetters = /**
     * @param {?} props
     * @return {?}
     */
    function (props) { };
    /**
     * @param {?} obj
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    JsonApiEntity.prototype.createGetSet = /**
     * @param {?} obj
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    function (obj, props, key, name) { };
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    JsonApiEntity.prototype.generateGetSet = /**
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    function (props, key, name) { };
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    JsonApiEntity.prototype.setProp = /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (props, key, value) { };
    /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    JsonApiEntity.prototype.getProp = /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    function (props, key) { };
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    JsonApiEntity.prototype.memoized = /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) { };
    JsonApiEntity._sliceName = '';
    JsonApiEntity.config = {};
    JsonApiEntity.defaultAttributes = {};
    // @dynamic
    JsonApiEntity = __decorate([
        Mixin([AttributeGetterSetter, AttributeUpdater, Memoizer]),
        __metadata("design:paramtypes", [Object, Object])
    ], JsonApiEntity);
    return JsonApiEntity;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceAssociationEntity = /** @class */ (function (_super) {
    __extends(ResourceAssociationEntity, _super);
    function ResourceAssociationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    ResourceAssociationEntity.prototype.isForAttribute = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        return ((/** @type {?} */ (this))).name == attrName;
    };
    return ResourceAssociationEntity;
}(JsonApiEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceAttributeEntity = /** @class */ (function (_super) {
    __extends(ResourceAttributeEntity, _super);
    function ResourceAttributeEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    ResourceAttributeEntity.prototype.isForAttribute = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        return ((/** @type {?} */ (this))).name == attrName;
    };
    return ResourceAttributeEntity;
}(JsonApiEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} relationshipName
 * @return {?}
 */
function buildEntityRelationshipProperty(relationshipName) {
    /**
     * @return {?}
     */
    function relationship() {
        return this.dataService.relationship$(this, relationshipName, {});
    }
    return relationship;
}
/**
 * @param {?} entityType
 * @param {?} relationshipName
 * @return {?}
 */
function defineEntityRelationshipGetSet(entityType, relationshipName) {
    /** @type {?} */
    var propName = camelCase(relationshipName) + "$";
    /** @type {?} */
    var privatePropName = "_" + propName;
    /** @type {?} */
    var getter = buildEntityRelationshipProperty(relationshipName);
    console.log("building get set for " + entityType.name + " : " + relationshipName);
    /** @type {?} */
    var props = {
        get: function () {
            return this.memoized(privatePropName, getter);
        },
        set: function (value) { }
    };
    Object.defineProperty(entityType.prototype, propName, props);
}
/**
 * @param {?} entityType
 * @return {?}
 */
function buildEntityRelationshipProperties(entityType) {
    /** @type {?} */
    var defineGetSet = partial(defineEntityRelationshipGetSet, entityType);
    map(entityType.relationshipNames, defineGetSet);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceConfigurationEntity = /** @class */ (function (_super) {
    __extends(ResourceConfigurationEntity, _super);
    function ResourceConfigurationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceConfigurationEntity.defaultAttributes = {
        isRoutable: true
    };
    ResourceConfigurationEntity.relationshipNames = [
        'resource-associations',
        'resource-attributes',
        'resource-validators',
    ];
    return ResourceConfigurationEntity;
}(JsonApiEntity));
/** @type {?} */
var buildEntityRelationship = function (name) {
    defineEntityRelationshipGetSet(ResourceConfigurationEntity, name);
};
map(ResourceConfigurationEntity.relationshipNames, buildEntityRelationship);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceValidatorEntity = /** @class */ (function (_super) {
    __extends(ResourceValidatorEntity, _super);
    function ResourceValidatorEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    ResourceValidatorEntity.prototype.isForAttribute = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        return includes(((/** @type {?} */ (this))).attributeNames, attrName);
    };
    return ResourceValidatorEntity;
}(JsonApiEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FeatureConfig = /** @class */ (function () {
    function FeatureConfig(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(FeatureConfig.prototype, "sliceNames", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._sliceNames) {
                return this._sliceNames;
            }
            this._sliceNames = this.buildSliceNames();
            return this._sliceNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "seedEntities", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._seedEntities) {
                this._seedEntities = this.buildSeeds();
            }
            return this._seedEntities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "entityTypes", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._entityTypes) {
                this._entityTypes = this.buildEntityTypes();
            }
            return this._entityTypes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} entityData
     * @return {?}
     */
    FeatureConfig.prototype.entityTypeFromEntityData = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        /** @type {?} */
        var ofType$$1 = function (entityType) {
            return entityType.config.ofType(entityData);
        };
        return find(this.entityTypes, ofType$$1);
    };
    /**
     * @param {?} theType
     * @return {?}
     */
    FeatureConfig.prototype.entityType = /**
     * @param {?} theType
     * @return {?}
     */
    function (theType) {
        /** @type {?} */
        var hasType = function (entityType) {
            return entityType.config.type == theType;
        };
        return find(this.entityTypes, hasType);
    };
    Object.defineProperty(FeatureConfig.prototype, "entitySliceNames", {
        ////////////////////////////
        // Private methods
        ////////////////////////////
        get: 
        ////////////////////////////
        // Private methods
        ////////////////////////////
        /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var getName = function (entityType) {
                return entityType.sliceName;
            };
            return map(this.entityTypes, getName);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    FeatureConfig.prototype.buildSliceNames = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var prefixedSliceName = function (sliceName) {
            return join([_this.name, 'entities', sliceName], '.');
        };
        return map(this.entitySliceNames, prefixedSliceName);
    };
    /**
     * @private
     * @return {?}
     */
    FeatureConfig.prototype.buildSeeds = /**
     * @private
     * @return {?}
     */
    function () {
        return flatten(map(this.entityTypes, bind(this.buildEntityTypeSeeds, this)));
    };
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    FeatureConfig.prototype.buildEntityTypeSeeds = /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    function (entityType) {
        var _this = this;
        /** @type {?} */
        var buildResourceIdentiifer = function (ri) {
            /** @type {?} */
            var map$$1 = {
                feature: _this.name,
                type: entityType.config.type
            };
            return merge(map$$1, ri);
        };
        return map(entityType.config.seed, buildResourceIdentiifer);
    };
    /**
     * @private
     * @return {?}
     */
    FeatureConfig.prototype.buildEntityTypes = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = new EntityTypeFactory(this.baseEntityType);
        /** @type {?} */
        var build = bind(factory.build, factory);
        /** @type {?} */
        var entityTypeMaps = map(this.entityConfigs, build);
        return assign.apply(_, entityTypeMaps);
    };
    return FeatureConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EntityHasOneRelationshipType = "HasOne";
/** @type {?} */
var EntityHasManyRelationshipType = "HasMany";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EntitySelectorTypes = {
    All: (/** @type {?} */ ('All')),
    Ids: (/** @type {?} */ ('Ids')),
    Entities: (/** @type {?} */ ('Entities')),
    Total: (/** @type {?} */ ('Total')),
    SelectedEntity: (/** @type {?} */ ('SelectedEntity')),
    Config: (/** @type {?} */ ('Config')),
    Scope: (/** @type {?} */ ('Scope')),
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityCloner = /** @class */ (function () {
    function EntityCloner() {
    }
    /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    EntityCloner.prototype.clone = /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    function (entity, dataService) {
        if (dataService === void 0) { dataService = null; }
        /** @type {?} */
        var entityCtor = entity.constructor;
        return new entityCtor(this.constructorParams(entity), dataService);
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    EntityCloner.prototype.constructorParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var paramNames = [
            'id',
            'feature',
            'type',
            'attributes',
            'relationships',
        ];
        return (/** @type {?} */ (pick(entity, paramNames)));
    };
    EntityCloner.decorators = [
        { type: Injectable }
    ];
    return EntityCloner;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectorNameService = /** @class */ (function () {
    function SelectorNameService(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} featureConfig
     * @return {?}
     */
    SelectorNameService.prototype.getFeatureSelectorName = /**
     * @param {?} featureConfig
     * @return {?}
     */
    function (featureConfig) {
        return featureConfig.name;
    };
    /**
     * @param {?} entityAdapter
     * @return {?}
     */
    SelectorNameService.prototype.getEntitySelectorName = /**
     * @param {?} entityAdapter
     * @return {?}
     */
    function (entityAdapter) {
        return entityAdapter.sliceName;
    };
    /**
     * @param {?} parentName
     * @param {?} selectorName
     * @return {?}
     */
    SelectorNameService.prototype.getNestedSelectorName = /**
     * @param {?} parentName
     * @param {?} selectorName
     * @return {?}
     */
    function (parentName, selectorName) {
        /** @type {?} */
        var parentSegments = this.buildSegments(parentName);
        /** @type {?} */
        var selectorNameSegments = this.buildSegments(selectorName, 'select');
        /** @type {?} */
        var segments = flatten([parentSegments, selectorNameSegments]);
        return join(segments, '.');
    };
    /**
     * @param {?} si
     * @return {?}
     */
    SelectorNameService.prototype.getResourceSelectorName = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return this.selectorIdentifierToSelectorName(si);
    };
    // Alias for getResourceSelectorName
    // Alias for getResourceSelectorName
    /**
     * @param {?} si
     * @return {?}
     */
    SelectorNameService.prototype.getSelectorName = 
    // Alias for getResourceSelectorName
    /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return this.getResourceSelectorName(si);
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    SelectorNameService.prototype.buildSegments = /**
     * @private
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    function (value, prefix) {
        if (prefix === void 0) { prefix = ''; }
        /** @type {?} */
        var camelCase$$1 = bind(this.inflectionService.camelCase, this);
        /** @type {?} */
        var inflections = [
            ['removePrefix', prefix],
            ['replace', / /g, ''],
            ['trim', '.'],
            ['split', '.'],
        ];
        /** @type {?} */
        var result = ((/** @type {?} */ (this.inflectionService))).inflect(value, inflections);
        return map(result, camelCase$$1);
    };
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    SelectorNameService.prototype.sanitizedSelectorName = /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        var _this = this;
        /** @type {?} */
        var prefix = 'select';
        selectorName = this.inflectionService.removePrefix(selectorName, prefix);
        /** @type {?} */
        var camelCase$$1 = function (value) {
            return _this.inflectionService.camelCase(value);
        };
        /** @type {?} */
        var segments = map(split(selectorName, '.'), camelCase$$1);
        return segments;
    };
    /**
     * @private
     * @param {?} si
     * @return {?}
     */
    SelectorNameService.prototype.selectorIdentifierToSelectorName = /**
     * @private
     * @param {?} si
     * @return {?}
     */
    function (si) {
        /** @type {?} */
        var featureName = this.inflectionService.camelCase(si.feature);
        /** @type {?} */
        var featureEntities = 'entities';
        /** @type {?} */
        var sliceName = this.inflectionService.camelCase(si.entityType);
        /** @type {?} */
        var selectorType = this.inflectionService.camelCase(si.selectorType);
        /** @type {?} */
        var segments = [
            featureName,
            featureEntities,
            sliceName,
            selectorType,
        ];
        if (has(si, 'scope')) {
            /** @type {?} */
            var scopeName = this.inflectionService.camelCase(si.scope);
            segments.push(scopeName);
        }
        return join(segments, '.');
    };
    SelectorNameService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SelectorNameService.ctorParameters = function () { return [
        { type: InflectionService }
    ]; };
    /** @nocollapse */ SelectorNameService.ngInjectableDef = defineInjectable({ factory: function SelectorNameService_Factory() { return new SelectorNameService(inject(InflectionService)); }, token: SelectorNameService, providedIn: "root" });
    return SelectorNameService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildEntitySelectors = function (entityAdapter, entityTypeSelector, selectorNameService) {
    /** @type {?} */
    var buildEntityScopedSelector = function (selector, selectorName) {
        /** @type {?} */
        var entitySelectorName = selectorNameService.getEntitySelectorName(entityAdapter);
        /** @type {?} */
        var entityScopedSelectorName = selectorNameService.getNestedSelectorName(entitySelectorName, selectorName);
        /** @type {?} */
        var featureLevelSelector = createSelector(entityTypeSelector, selector);
        /** @type {?} */
        var selectors = {};
        selectors[entityScopedSelectorName] = featureLevelSelector;
        return selectors;
    };
    return reduce(map(entityAdapter.selectors, buildEntityScopedSelector), merge, {});
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildSliceSelector = function (sliceName) {
    return function (state) {
        return state[sliceName];
    };
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Get all the Entity Type data for an entity type.
/** @type {?} */
var buildEntityTypeSliceSelector = function (entityAdapter) {
    return buildSliceSelector(entityAdapter.sliceName);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildRootSelector = function (featureSelector, entitySelector) {
    /** @type {?} */
    var rootSelectorName = join([featureSelector.name, entitySelector.name], '.');
    /** @type {?} */
    var rootSelector = compose(entitySelector.selector, featureSelector.selector);
    return {
        name: rootSelectorName,
        selector: rootSelector,
    };
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildFeatureSelector = function (featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors) {
    // Feature Selector
    /** @type {?} */
    var featureSelectorName = selectorNameService.getFeatureSelectorName(featureConfig);
    /** @type {?} */
    var featureSelectorFunction = createFeatureSelector(featureSelectorName);
    /** @type {?} */
    var featureSelector = {
        name: featureSelectorName,
        selector: featureSelectorFunction
    };
    selectorService.addSelector(featureSelector);
    // Feature Entities Selector
    /** @type {?} */
    var featureEntitiesSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'entities');
    /** @type {?} */
    var entitiesSelectorFunction = buildSliceSelector('entities');
    /** @type {?} */
    var featureEntitiesSelectorFunction = compose(entitiesSelectorFunction, featureSelector.selector);
    /** @type {?} */
    var featureEntitiesSelector = {
        name: featureEntitiesSelectorName,
        selector: featureEntitiesSelectorFunction
    };
    selectorService.addSelector(featureEntitiesSelector);
    // Feature Config Selector
    /** @type {?} */
    var featureConfigSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'config');
    /** @type {?} */
    var configSelectorFunction = buildSliceSelector('config');
    /** @type {?} */
    var featureConfigSelectorFunction = compose(configSelectorFunction, featureSelector.selector);
    /** @type {?} */
    var featureConfigSelector = {
        name: featureConfigSelectorName,
        selector: featureConfigSelectorFunction
    };
    selectorService.addSelector(featureConfigSelector);
    /** @type {?} */
    var addEntity = function (entityAdapter) {
        /** @type {?} */
        var entityTypeSelector = buildEntityTypeSliceSelector(entityAdapter);
        /** @type {?} */
        var entitySelectors = buildEntitySelectors(entityAdapter, entityTypeSelector, selectorNameService);
        /** @type {?} */
        var buildRootSelectorForEntity = function (selector, selectorName) {
            /** @type {?} */
            var entitySelector = {
                name: selectorName,
                selector: selector
            };
            return buildRootSelector(featureEntitiesSelector, entitySelector);
        };
        /** @type {?} */
        var rootSelectors = map(entitySelectors, buildRootSelectorForEntity);
        /** @type {?} */
        var addSelectors = function (selector) {
            selectorService.addSelector(selector);
        };
        map(rootSelectors, addSelectors);
    };
    map(entityAdapters, addEntity);
    buildCustomSelectors(selectorService);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildFilterSelector = function (selector, filter$$1) {
    /** @type {?} */
    var filterState = function (state) {
        if (state && state.where) {
            return state.where(filter$$1);
        }
        else {
            return state;
        }
    };
    return createSelector(selector, filterState);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildFindSelector = function (selector, ri, findPropPath) {
    if (findPropPath === void 0) { findPropPath = 'id'; }
    /** @type {?} */
    var find$$1 = function (state) {
        return state.find(get(ri, findPropPath));
    };
    return createSelector(selector, find$$1);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var selectEntityFeature = createFeatureSelector('entity');
/** @type {?} */
var selectFeatures = function (state) {
    return state.features;
};
/** @type {?} */
var selectPrimaryEntityIdentifier = function (state) {
    return get(state, 'primaryEntity.resourceIdentifier');
};
/** @type {?} */
var selectPrimaryEntity = function (state) {
    return get(state, 'primaryEntity.entity');
};
/** @type {?} */
var selectors = {
    features: selectFeatures,
    primaryEntity: selectPrimaryEntity,
    primaryEntityIdentifier: selectPrimaryEntityIdentifier,
};
/** @type {?} */
var buildFeatureSelector$1 = function (selector, name) {
    return createSelector(selectEntityFeature, selector);
};
/** @type {?} */
var entityFeatureSelectors = mapValues(selectors, buildFeatureSelector$1);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectorService = /** @class */ (function () {
    function SelectorService(inflectionService, store, selectorNameService) {
        this.inflectionService = inflectionService;
        this.store = store;
        this.selectorNameService = selectorNameService;
        this.selectors = {};
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.select$ = /**
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        /** @type {?} */
        var selector = this.getSelector(selectorName);
        return this.store.select(selector);
    };
    /**
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.select = /**
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        return this.select$(selectorName);
    };
    /**
     * @param {?} si
     * @return {?}
     */
    SelectorService.prototype.selectorFromSelectorIdentifier = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        /** @type {?} */
        var selectorName = this.selectorNameService.getResourceSelectorName(si);
        return this.getSelector(selectorName);
    };
    /**
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.getSelector = /**
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        /** @type {?} */
        var path = this.selectorPath(selectorName);
        return get(this.selectors, path);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    SelectorService.prototype.addSelector = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var path = this.selectorPath(selector.name);
        this.log(selector, path, false);
        return set(this.selectors, path, selector.selector);
    };
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    SelectorService.prototype.selectorPath = /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        /** @type {?} */
        var pathElements = split(selectorName, '.')
        /*
        if(pathElements.length > 1) {
          pathElements.splice(1, 0, 'entities')
        }
        */
        ;
        /*
        if(pathElements.length > 1) {
          pathElements.splice(1, 0, 'entities')
        }
        */
        pathElements.push('selector');
        return join(pathElements, '.');
    };
    /**
     * @private
     * @param {?} selector
     * @param {?} path
     * @param {?=} loggingEnabled
     * @return {?}
     */
    SelectorService.prototype.log = /**
     * @private
     * @param {?} selector
     * @param {?} path
     * @param {?=} loggingEnabled
     * @return {?}
     */
    function (selector, path, loggingEnabled) {
        if (loggingEnabled === void 0) { loggingEnabled = false; }
        if (loggingEnabled) {
            console.log("Registering the selector " + path);
        }
    };
    SelectorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectorService.ctorParameters = function () { return [
        { type: InflectionService },
        { type: Store },
        { type: SelectorNameService }
    ]; };
    return SelectorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectorProvider = /** @class */ (function () {
    function SelectorProvider(selectorService, store) {
        this.selectorService = selectorService;
        this.store = store;
        this.defaultOpts = {
            selectorType: (/** @type {?} */ (EntitySelectorTypes.All))
        };
        this.subscribeToFeatures();
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    SelectorProvider.prototype.provide = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        opts = defaults(opts, this.defaultOpts);
        /** @type {?} */
        var selector = this.customSelector(ri, opts) ||
            this.defaultSelector(ri, opts);
        return selector;
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    SelectorProvider.prototype.customSelector = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var feature = this.features[ri.feature];
        if (feature) {
            /** @type {?} */
            var selectorIsValid = function (selector) {
                return selector.isValid(ri);
            };
            /** @type {?} */
            var selector = find(feature.selectors, selectorIsValid);
            if (selector) {
                return (/** @type {?} */ (selector.selector(this.selectorService, ri)));
            }
            else {
                return null;
            }
        }
        return null;
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    SelectorProvider.prototype.defaultSelector = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        if (this.isRelationshipResourceRequest(ri)) {
            ri = {
                feature: ri.feature,
                type: ri.relationship.type
            };
        }
        /** @type {?} */
        var si = this.selectorIdentifier(ri, opts);
        /** @type {?} */
        var selector = this.getBaseSelector(si);
        if (this.isFindRequest(ri)) {
            selector = this.findSelector(selector, ri);
        }
        if (this.isFilteredResourceRequest(ri)) {
            selector = this.filterSelector(selector, ri);
        }
        return selector;
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isRelationshipResourceRequest = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return has(ri, 'relationship');
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    SelectorProvider.prototype.selectorIdentifier = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var isScoped = this.isScopedResourceIdentifier(ri);
        /** @type {?} */
        var selectorType = isScoped ? 'scope' : opts.selectorType;
        /** @type {?} */
        var si = {
            feature: ri.feature,
            entityType: ri.type,
            selectorType: (/** @type {?} */ (selectorType))
        };
        if (isScoped) {
            si = merge(si, { scope: ri.filter.scope });
        }
        return si;
    };
    /**
     * @private
     * @param {?} selectorIdentifier
     * @return {?}
     */
    SelectorProvider.prototype.getBaseSelector = /**
     * @private
     * @param {?} selectorIdentifier
     * @return {?}
     */
    function (selectorIdentifier) {
        return this.selectorService
            .selectorFromSelectorIdentifier(selectorIdentifier);
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isFindRequest = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return !isEmpty(this.findPropPath(ri));
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.findPropPath = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var primaryKeys = this.getPrimaryKeys(ri)
        // Simple case when primary key is 'id'
        ;
        // Simple case when primary key is 'id'
        if (has(ri, 'id') && includes(primaryKeys, 'id')) {
            return 'id';
        }
        // Alternate scenario: when the primary key is
        // mixed in with the filter params
        /** @type {?} */
        var filterKeys = keys(this.getFilterParams(ri));
        /** @type {?} */
        var primaryKey = head(intersection(primaryKeys, filterKeys));
        if (primaryKey) {
            return "filter." + primaryKey;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.findSelector = /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    function (selector, ri) {
        return buildFindSelector(selector, ri, this.findPropPath(ri));
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isFilteredResourceRequest = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return has(ri, 'filter');
    };
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.filterSelector = /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    function (selector, ri) {
        /** @type {?} */
        var filter$$1 = this.getFilterParams(ri);
        return buildFilterSelector(selector, filter$$1);
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isScopedResourceIdentifier = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return has(ri, 'filter.scope');
    };
    /**
     * @private
     * @return {?}
     */
    SelectorProvider.prototype.subscribeToFeatures = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.features$ =
            (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
        this.features$
            .subscribe(function (features) { return _this.features = features; });
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.getFeature = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return this.features[ri.feature];
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.getFilterParams = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return omit(ri.filter, 'scope');
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.getPrimaryKeys = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var primaryKeys = ['id'];
        /** @type {?} */
        var feature = this.getFeature(ri);
        /** @type {?} */
        var entityType = feature.entityType(ri.type);
        if (entityType) {
            primaryKeys = entityType.config.primaryKeys || primaryKeys;
        }
        return primaryKeys;
    };
    SelectorProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectorProvider.ctorParameters = function () { return [
        { type: SelectorService },
        { type: Store }
    ]; };
    return SelectorProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [
    SelectorNameService,
    SelectorProvider,
    SelectorService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityRelationshipProvider = /** @class */ (function () {
    function EntityRelationshipProvider() {
        this.defaultDataServiceOpts = {
            syncWithApi: false,
        };
    }
    /**
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.provide$ = /**
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    function (dataService, entity, relationshipIdentifier, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var relationship = this.relationshipData(entity, relationshipIdentifier);
        if (!relationship) {
            return of((/** @type {?} */ (null)));
        }
        /** @type {?} */
        var relationshipType = this.relationshipType(relationship);
        if (!relationshipType) {
            return of((/** @type {?} */ (null)));
        }
        return this.loadRelationshipData$(dataService, entity, relationship, relationshipType, opts);
    };
    /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationship
     * @param {?} relationshipType
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.loadRelationshipData$ = /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationship
     * @param {?} relationshipType
     * @param {?=} opts
     * @return {?}
     */
    function (dataService, entity, relationship, relationshipType, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var resourceType = '';
        /** @type {?} */
        var prepareRelationship;
        if (relationshipType == EntityHasOneRelationshipType) {
            resourceType = ((/** @type {?} */ (relationship))).type;
            prepareRelationship = this.prepareHasOne;
        }
        if (relationshipType == EntityHasManyRelationshipType) {
            if (isEmpty(relationship)) {
                resourceType = this.defaultRelationResourceType(entity);
            }
            else {
                /** @type {?} */
                var firstRelationship = relationship[0];
                resourceType = (firstRelationship).type || 'entity';
            }
            prepareRelationship = this.prepareHasMany;
        }
        return this.loadResourceTypeData$(dataService, entity, resourceType, opts).pipe(map$1(function (entities) { return prepareRelationship(relationship, entities); }));
    };
    /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    EntityRelationshipProvider.prototype.prepareHasMany = /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    function (relationship, entities) {
        /** @type {?} */
        var ids = map(relationship, 'id');
        return entities.where({ id: ids });
    };
    /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    EntityRelationshipProvider.prototype.prepareHasOne = /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    function (relationship, entities) {
        return entities.find(((/** @type {?} */ (relationship))).id);
    };
    /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} resourceType
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.loadResourceTypeData$ = /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} resourceType
     * @param {?=} opts
     * @return {?}
     */
    function (dataService, entity, resourceType, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var resourceOpts = {
            feature: entity.feature,
            type: resourceType,
        };
        return dataService.get$(resourceOpts, this.buildDataServiceOpts(opts));
    };
    /**
     * @private
     * @param {?=} opts
     * @return {?}
     */
    EntityRelationshipProvider.prototype.buildDataServiceOpts = /**
     * @private
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        return defaults(opts, this.defaultDataServiceOpts);
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @return {?}
     */
    EntityRelationshipProvider.prototype.relationshipData = /**
     * @private
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @return {?}
     */
    function (entity, relationshipIdentifier) {
        if (entity && entity.relationships) {
            /** @type {?} */
            var wrappedData = entity.relationships[relationshipIdentifier];
            if (wrappedData) {
                return wrappedData.data;
            }
            else {
                return null;
            }
        }
        return null;
    };
    /**
     * @private
     * @param {?} relationship
     * @return {?}
     */
    EntityRelationshipProvider.prototype.relationshipType = /**
     * @private
     * @param {?} relationship
     * @return {?}
     */
    function (relationship) {
        if (has(relationship, 'id')) {
            return EntityHasOneRelationshipType;
        }
        if (relationship instanceof Array) {
            return EntityHasManyRelationshipType;
        }
        return null;
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    EntityRelationshipProvider.prototype.defaultRelationResourceType = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        switch (entity.feature) {
            case 'app': {
                return 'sunray-entities';
            }
            case 'cms': {
                return 'wordpress-entities';
            }
            default: {
                return 'sunray-entities';
            }
        }
    };
    EntityRelationshipProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ EntityRelationshipProvider.ngInjectableDef = defineInjectable({ factory: function EntityRelationshipProvider_Factory() { return new EntityRelationshipProvider(); }, token: EntityRelationshipProvider, providedIn: "root" });
    return EntityRelationshipProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityTypeProviderService = /** @class */ (function () {
    function EntityTypeProviderService(store) {
        this.store = store;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    EntityTypeProviderService.prototype.provide$ = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        var _this = this;
        return this.getFeature$(entityData.feature).pipe(map$1(function (feature) { return _this.getEntityType(feature, entityData); }));
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    EntityTypeProviderService.prototype.getEntityType = /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    function (feature, entityData) {
        return this.getCustomEntityType(feature, entityData) ||
            feature.baseEntityType;
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    EntityTypeProviderService.prototype.getCustomEntityType = /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    function (feature, entityData) {
        return feature.entityTypeFromEntityData(entityData);
    };
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    EntityTypeProviderService.prototype.getFeature$ = /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    function (featureName) {
        return this.features$.pipe(map$1(function (features) { return features[featureName]; }));
    };
    Object.defineProperty(EntityTypeProviderService.prototype, "features$", {
        // new stuff
        get: 
        // new stuff
        /**
         * @private
         * @return {?}
         */
        function () {
            if (!this._features$) {
                this._features$ = this.buildFeatures$();
            }
            return this._features$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    EntityTypeProviderService.prototype.buildFeatures$ = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var features = this.store.select(entityFeatureSelectors.features);
        return (/** @type {?} */ (features));
    };
    EntityTypeProviderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityTypeProviderService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ EntityTypeProviderService.ngInjectableDef = defineInjectable({ factory: function EntityTypeProviderService_Factory() { return new EntityTypeProviderService(inject(Store)); }, token: EntityTypeProviderService, providedIn: "root" });
    return EntityTypeProviderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityFactory = /** @class */ (function () {
    function EntityFactory(entityTypeProvider, relationshipProvider) {
        this.entityTypeProvider = entityTypeProvider;
        this.relationshipProvider = relationshipProvider;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    EntityFactory.prototype.build$ = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        return this.getEntityType$(entityData).pipe(map$1(function (entityType) { return new entityType(entityData); }));
    };
    /**
     * @private
     * @param {?} entityData
     * @return {?}
     */
    EntityFactory.prototype.getEntityType$ = /**
     * @private
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        return this.entityTypeProvider.provide$(entityData);
    };
    EntityFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityFactory.ctorParameters = function () { return [
        { type: EntityTypeProviderService },
        { type: EntityRelationshipProvider }
    ]; };
    return EntityFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataService = /** @class */ (function () {
    function DataService(store, selectorProvider, entityRelationshipProvider, entityCloner, entityFactory) {
        this.store = store;
        this.selectorProvider = selectorProvider;
        this.entityRelationshipProvider = entityRelationshipProvider;
        this.entityCloner = entityCloner;
        this.entityFactory = entityFactory;
        this.defaultOpts = {
            syncWithApi: true,
            selectorOpts: {
                selectorType: (/** @type {?} */ (EntitySelectorTypes.All))
            }
        };
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    DataService.prototype.build$ = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        var _this = this;
        return this.entityFactory.build$(entityData).pipe(map$1(function (entity) { return (/** @type {?} */ (_this.decoratedData(entity))); }));
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.create$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType$$1 = Add;
        return this.executeRequest$(ri, opts, actionType$$1);
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.delete$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType$$1 = Delete;
        return this.executeRequest$(ri, opts, actionType$$1);
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.get$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType$$1 = Load;
        return this.executeRequest$(ri, opts, actionType$$1);
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.update$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType$$1 = Update;
        return this.executeRequest$(ri, opts, actionType$$1);
    };
    /**
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.relationship$ = /**
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    function (entity, relationshipIdentifier, opts) {
        if (opts === void 0) { opts = {}; }
        return this.entityRelationshipProvider.provide$(this, entity, relationshipIdentifier, opts);
    };
    // TODO: deprecate this method
    // TODO: deprecate this method
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.get = 
    // TODO: deprecate this method
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        return this.get$(ri, opts);
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @param {?=} actionType
     * @return {?}
     */
    DataService.prototype.executeRequest$ = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @param {?=} actionType
     * @return {?}
     */
    function (ri, opts, actionType$$1) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        opts = defaults(opts, this.defaultOpts);
        if (this.shouldDispatch(ri, opts)) {
            /** @type {?} */
            var sliceName = this.getSliceName(ri);
            /** @type {?} */
            var action = new actionType$$1(sliceName, ri);
            this.store.dispatch(action);
        }
        /** @type {?} */
        var selector = this.getSelector(ri, opts);
        if (selector) {
            return this.storeData$(selector, opts).pipe(map$1(function (data) { return _this.decoratedData(data); }));
        }
        else {
            return this.noData$();
        }
    };
    /**
     * @private
     * @param {?} selector
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.storeData$ = /**
     * @private
     * @param {?} selector
     * @param {?=} opts
     * @return {?}
     */
    function (selector, opts) {
        if (opts === void 0) { opts = {}; }
        return this.store.select(selector);
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    DataService.prototype.decoratedData = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var buildDecoratedEntity = function (entity) {
            return _this.entityCloner.clone(entity, _this);
        };
        if (data) {
            if (EntityCollection.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                var clonedEntities = data.map(buildDecoratedEntity);
                /** @type {?} */
                var clonedCollection = new EntityCollection(clonedEntities);
                return (/** @type {?} */ (clonedCollection));
            }
            if (JsonApiEntity.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                var clone$$1 = buildDecoratedEntity((/** @type {?} */ (data)));
                return (/** @type {?} */ (clone$$1));
            }
        }
        return data;
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.getSelector = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        return this.selectorProvider.provide(ri, opts.selectorOpts);
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.shouldDispatch = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        return opts.syncWithApi;
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    DataService.prototype.getSliceName = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return join([ri.feature, 'entities', ri.type], '.');
    };
    /**
     * @private
     * @return {?}
     */
    DataService.prototype.noData$ = /**
     * @private
     * @return {?}
     */
    function () {
        return of([]);
    };
    DataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: Store },
        { type: SelectorProvider },
        { type: EntityRelationshipProvider },
        { type: EntityCloner },
        { type: EntityFactory }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = defineInjectable({ factory: function DataService_Factory() { return new DataService(inject(Store), inject(SelectorProvider), inject(EntityRelationshipProvider), inject(EntityCloner), inject(EntityFactory)); }, token: DataService, providedIn: "root" });
    return DataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributeBuilder = /** @class */ (function () {
    function AttributeBuilder() {
    }
    /**
     * @param {?} params
     * @return {?}
     */
    AttributeBuilder.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return {
            feature: params.feature,
            type: params.type,
            id: params.id,
            attributes: omit(params, ['id', 'feature'])
        };
    };
    AttributeBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ AttributeBuilder.ngInjectableDef = defineInjectable({ factory: function AttributeBuilder_Factory() { return new AttributeBuilder(); }, token: AttributeBuilder, providedIn: "root" });
    return AttributeBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonApiAttributeBuilder = /** @class */ (function () {
    function JsonApiAttributeBuilder() {
    }
    /**
     * @param {?} params
     * @return {?}
     */
    JsonApiAttributeBuilder.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var propNames = ['feature', 'type', 'id', 'attributes', 'relationships'];
        return (/** @type {?} */ (pick(params, propNames)));
    };
    JsonApiAttributeBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ JsonApiAttributeBuilder.ngInjectableDef = defineInjectable({ factory: function JsonApiAttributeBuilder_Factory() { return new JsonApiAttributeBuilder(); }, token: JsonApiAttributeBuilder, providedIn: "root" });
    return JsonApiAttributeBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$1 = [
    AttributeBuilder,
    JsonApiAttributeBuilder,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityService = /** @class */ (function () {
    function EntityService(entityFactory, apiService, attributeBuilder) {
        this.entityFactory = entityFactory;
        this.apiService = apiService;
        this.attributeBuilder = attributeBuilder;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.create$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, __spread(['create$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.post$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, __spread(['post$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.delete$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, __spread(['delete$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.get$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, __spread(['get$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.update$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, __spread(['update$'], args));
    };
    /**
     * @private
     * @param {?} action
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.apiEntityRequest$ = /**
     * @private
     * @param {?} action
     * @param {...?} args
     * @return {?}
     */
    function (action) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        return this.entityData$((_a = ((/** @type {?} */ (this.apiService))))[action].apply(_a, __spread(args)));
    };
    /**
     * @private
     * @param {?} apiData$
     * @return {?}
     */
    EntityService.prototype.entityData$ = /**
     * @private
     * @param {?} apiData$
     * @return {?}
     */
    function (apiData$) {
        var _this = this;
        return apiData$.pipe(mergeMap(function (apiResponse) { return _this.buildEntityData$(apiResponse); }));
    };
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    EntityService.prototype.buildEntityData$ = /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    function (apiResponse) {
        return this.buildEntities$(apiResponse).pipe(map$1(function (entities) {
            return {
                data: entities,
                resourceIdentifier: apiResponse.resourceIdentifier,
            };
        }));
    };
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    EntityService.prototype.buildEntities$ = /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    function (apiResponse) {
        /** @type {?} */
        var resourceIdentifier = apiResponse.resourceIdentifier;
        /** @type {?} */
        var apiData = apiResponse.data;
        /** @type {?} */
        var featureName = resourceIdentifier.feature;
        /** @type {?} */
        var buildEntity$ = bind(partial(this.buildEntity$, featureName), this);
        /** @type {?} */
        var observables = map(apiData, buildEntity$);
        return combineLatest(observables);
    };
    /**
     * @private
     * @param {?} featureName
     * @param {?} entityData
     * @return {?}
     */
    EntityService.prototype.buildEntity$ = /**
     * @private
     * @param {?} featureName
     * @param {?} entityData
     * @return {?}
     */
    function (featureName, entityData) {
        /** @type {?} */
        var featureData = {
            feature: featureName
        };
        defaults(entityData, featureData);
        /** @type {?} */
        var data = this.attributeBuilder.build(entityData);
        return this.entityFactory.build$(data);
    };
    EntityService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityService.ctorParameters = function () { return [
        { type: EntityFactory },
        { type: ApiService },
        { type: AttributeBuilder }
    ]; };
    return EntityService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var EntityConfigActionTypes = {
    SET_PRIMARY_ENTITY: 'SET_PRIMARY_ENTITY',
};
var SetPrimaryEntity$1 = /** @class */ (function (_super) {
    __extends(SetPrimaryEntity, _super);
    function SetPrimaryEntity(slice, payload) {
        var _this = _super.call(this, slice) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.type = EntityConfigActionTypes.SET_PRIMARY_ENTITY;
        return _this;
    }
    return SetPrimaryEntity;
}(PayloadAction));

var actions$1 = /*#__PURE__*/Object.freeze({
    EntityConfigActionTypes: EntityConfigActionTypes,
    SetPrimaryEntity: SetPrimaryEntity$1
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityConfigEffects = /** @class */ (function () {
    function EntityConfigEffects(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.init$ = defer(function () { });
    }
    EntityConfigEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityConfigEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityConfigEffects.prototype, "init$", void 0);
    return EntityConfigEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var configInitialState = {
    primaryEntity: {
        feature: "",
        type: "",
        id: "",
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function entityConfigReducer(state, action) {
    /** @type {?} */
    var deltaState = {};
    switch (action.type) {
        case EntityConfigActionTypes.SET_PRIMARY_ENTITY:
            deltaState = {
                primaryEntity: omit(action.payload, 'feature'),
            };
            return assign({}, state, deltaState);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var selectAppFeature = createFeatureSelector('app')
/*
let selectPrimaryEntity = (state: iEntityConfigState) => {
  return state.entity.primaryEntity
}
export const selectEntityPrimaryEntity = createSelector(
  selectAppFeature,
  selectPrimaryEntity,
  (appFeature: any, primaryEntity: any) => {
    if(_.isEmpty(primaryEntity)) {
      return null
    }
    else {
      let type = primaryEntity.type
      let id = primaryEntity.id
      return appFeature.entities[type].entities[id]
    }
  }
)

export const entityConfigSelectors = {
  primaryEntity: selectEntityPrimaryEntity,
}
*/
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ActionTypes = {
    ADD_FEATURE: '[EntityFeature] ADD_FEATURE',
    LOAD_PRIMARY_ENTITY: '[EntityFeature] LOAD_PRIMARY_ENTITY',
    REGISTER_FEATURE: '[EntityFeature] REGISTER_FEATURE',
    SELECT_PRIMARY_ENTITY: '[EntityFeature] SELECT_PRIMARY_ENTITY',
    SET_PRIMARY_ENTITY: '[EntityFeature] SET_PRIMARY_ENTITY',
    SET_PRIMARY_ENTITY_IDENTIFIER: '[EntityFeature] SET_PRIMARY_ENTITY_IDENTIFIER',
};

var actionTypes = /*#__PURE__*/Object.freeze({
    ActionTypes: ActionTypes
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddFeature = /** @class */ (function (_super) {
    __extends(AddFeature, _super);
    function AddFeature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.ADD_FEATURE;
        return _this;
    }
    return AddFeature;
}(PayloadAction));
var LoadPrimaryEntity = /** @class */ (function (_super) {
    __extends(LoadPrimaryEntity, _super);
    function LoadPrimaryEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.LOAD_PRIMARY_ENTITY;
        return _this;
    }
    return LoadPrimaryEntity;
}(PayloadAction));
var RegisterFeature = /** @class */ (function (_super) {
    __extends(RegisterFeature, _super);
    function RegisterFeature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.REGISTER_FEATURE;
        return _this;
    }
    return RegisterFeature;
}(PayloadAction));
var SelectPrimaryEntity = /** @class */ (function () {
    function SelectPrimaryEntity() {
        this.type = ActionTypes.SELECT_PRIMARY_ENTITY;
    }
    return SelectPrimaryEntity;
}());
var SetPrimaryEntity$2 = /** @class */ (function (_super) {
    __extends(SetPrimaryEntity, _super);
    function SetPrimaryEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.SET_PRIMARY_ENTITY;
        return _this;
    }
    return SetPrimaryEntity;
}(PayloadAction));
var SetPrimaryEntityIdentifier = /** @class */ (function (_super) {
    __extends(SetPrimaryEntityIdentifier, _super);
    function SetPrimaryEntityIdentifier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.SET_PRIMARY_ENTITY_IDENTIFIER;
        return _this;
    }
    return SetPrimaryEntityIdentifier;
}(PayloadAction));

var actions$2 = /*#__PURE__*/Object.freeze({
    AddFeature: AddFeature,
    LoadPrimaryEntity: LoadPrimaryEntity,
    RegisterFeature: RegisterFeature,
    SelectPrimaryEntity: SelectPrimaryEntity,
    SetPrimaryEntity: SetPrimaryEntity$2,
    SetPrimaryEntityIdentifier: SetPrimaryEntityIdentifier
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouteEntityTypeProvider = /** @class */ (function () {
    function RouteEntityTypeProvider(store, dataService, inflectionService) {
        this.store = store;
        this.dataService = dataService;
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.handleRouterNavigation$ = /**
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        var _this = this;
        return this.features$.pipe(mergeMap(function (features) { return _this.featureRoutableEntities$(features); }), map$1(function (collection) {
            return _this.resourceIdentifierFromRouterState(collection, routerState);
        }));
    };
    /**
     * @private
     * @param {?} collection
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.resourceIdentifierFromRouterState = /**
     * @private
     * @param {?} collection
     * @param {?} routerState
     * @return {?}
     */
    function (collection, routerState) {
        /** @type {?} */
        var entityTypeSlug = this.entityTypeSlugFromRouterState(routerState);
        if (entityTypeSlug) {
            /** @type {?} */
            var entity = collection.findByAttr('urlSlug', entityTypeSlug);
            if (entity) {
                /** @type {?} */
                var routerStateOpts = this.resourceIdentifierOptsFromRouterState(entity, routerState);
                return merge({}, entity.resourceIdentifier, routerStateOpts);
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.resourceIdentifierOptsFromRouterState = /**
     * @private
     * @param {?} entity
     * @param {?} routerState
     * @return {?}
     */
    function (entity, routerState) {
        /** @type {?} */
        var params = routerState.params;
        /** @type {?} */
        var ri = (/** @type {?} */ ({}));
        /** @type {?} */
        var isPrimaryKey = function (value, prop) {
            return includes(entity.primaryKeys, prop);
        };
        /** @type {?} */
        var idKey = pickBy(params, isPrimaryKey);
        if (idKey) {
            ri.id = head(values(idKey));
        }
        /** @type {?} */
        var filter$$1 = omit(params, keys(idKey));
        if (!isEmpty(filter$$1)) {
            ri.filter = filter$$1;
        }
        return ri;
    };
    /**
     * @private
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.entityTypeSlugFromRouterState = /**
     * @private
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        /** @type {?} */
        var segments = map(routerState.segments, 'path');
        if (head(segments) == 'app') {
            segments = drop(segments);
        }
        /** @type {?} */
        var params = values(routerState.params);
        /** @type {?} */
        var segmentsWithoutParam = function (segments, param) {
            if (last(segments) == param) {
                return dropRight(segments);
            }
            else {
                return segments;
            }
        };
        /** @type {?} */
        var finalSegments = reduce(params, segmentsWithoutParam, segments);
        return finalSegments[0];
    };
    /**
     * @private
     * @param {?} features
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.featureRoutableEntities$ = /**
     * @private
     * @param {?} features
     * @return {?}
     */
    function (features) {
        /** @type {?} */
        var getRoutableEntities = bind(this.getRoutableEntities, this);
        /** @type {?} */
        var routableEntities = map(features, getRoutableEntities);
        return combineLatest(routableEntities).pipe(map$1(function (routableEntityCollections) {
            /** @type {?} */
            var entities = flatten(map(routableEntityCollections, 'entities'));
            return new EntityCollection(entities);
        }));
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} featureName
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.getRoutableEntities = /**
     * @private
     * @param {?} feature
     * @param {?} featureName
     * @return {?}
     */
    function (feature, featureName) {
        var _this = this;
        return this.resourceConfigurations$(feature).pipe(map$1(function (collection) { return _this.routableResourceConfigurations(collection); }), map$1(function (collection) { return _this.buildResourceIdentifiers(feature, collection); }));
    };
    /**
     * @private
     * @param {?} collection
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.routableResourceConfigurations = /**
     * @private
     * @param {?} collection
     * @return {?}
     */
    function (collection) {
        return collection.where({ isRoutable: true });
    };
    /**
     * @private
     * @param {?} feature
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.resourceConfigurations$ = /**
     * @private
     * @param {?} feature
     * @return {?}
     */
    function (feature) {
        /** @type {?} */
        var ri = {
            feature: feature.name,
            type: 'resource-configurations',
        };
        /** @type {?} */
        var dataOpts = {
            syncWithApi: false,
        };
        return this.dataService.get$(ri, dataOpts);
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} collection
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.buildResourceIdentifiers = /**
     * @private
     * @param {?} feature
     * @param {?} collection
     * @return {?}
     */
    function (feature, collection) {
        /** @type {?} */
        var buildResourceIdentifier = function (entity) {
            /** @type {?} */
            var ri = {
                feature: feature.name,
                type: entity.resourceType,
            };
            /** @type {?} */
            var attributes = {
                resourceIdentifier: ri,
                urlSlug: entity.displaySlug,
                primaryKeys: entity.primaryKeys
            };
            /** @type {?} */
            var data = {
                id: entity.id,
                type: 'resource-identifiers',
                attributes: attributes,
            };
            return new JsonApiEntity(data);
        };
        /** @type {?} */
        var entities = map(collection.entities, buildResourceIdentifier);
        return new EntityCollection(entities);
    };
    Object.defineProperty(RouteEntityTypeProvider.prototype, "features$", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this._features$) {
                this._features$ = this.getFeatures$();
            }
            return this._features$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.getFeatures$ = /**
     * @private
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
    };
    RouteEntityTypeProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RouteEntityTypeProvider.ctorParameters = function () { return [
        { type: Store },
        { type: DataService },
        { type: InflectionService }
    ]; };
    /** @nocollapse */ RouteEntityTypeProvider.ngInjectableDef = defineInjectable({ factory: function RouteEntityTypeProvider_Factory() { return new RouteEntityTypeProvider(inject(Store), inject(DataService), inject(InflectionService)); }, token: RouteEntityTypeProvider, providedIn: "root" });
    return RouteEntityTypeProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceIdentifierService = /** @class */ (function () {
    function ResourceIdentifierService(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    ResourceIdentifierService.prototype.isValid = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return has(ri, 'feature') && has(ri, 'type');
    };
    /**
     * @param {?} ri
     * @return {?}
     */
    ResourceIdentifierService.prototype.isScope = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return has(ri, 'filter.scope');
    };
    /**
     * @param {?} riOne
     * @param {?} riTwo
     * @return {?}
     */
    ResourceIdentifierService.prototype.isSameResource = /**
     * @param {?} riOne
     * @param {?} riTwo
     * @return {?}
     */
    function (riOne, riTwo) {
        return isEqual(riOne, riTwo);
    };
    /**
     * @param {?} ri
     * @return {?}
     */
    ResourceIdentifierService.prototype.scopeName = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var scopeKey = get(ri, 'filter.scope');
        return this.inflectionService.camelCase(scopeKey);
    };
    ResourceIdentifierService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ResourceIdentifierService.ctorParameters = function () { return [
        { type: InflectionService }
    ]; };
    /** @nocollapse */ ResourceIdentifierService.ngInjectableDef = defineInjectable({ factory: function ResourceIdentifierService_Factory() { return new ResourceIdentifierService(inject(InflectionService)); }, token: ResourceIdentifierService, providedIn: "root" });
    return ResourceIdentifierService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FeatureEffects = /** @class */ (function () {
    function FeatureEffects(store, actions$, dataService, routeEntityTypeProvider, resourceIdentifierService, selectorProvider) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.dataService = dataService;
        this.routeEntityTypeProvider = routeEntityTypeProvider;
        this.resourceIdentifierService = resourceIdentifierService;
        this.selectorProvider = selectorProvider;
        this.handleRouterNavigation$ = this.actions$
            .pipe(ofType(ROUTER_NAVIGATION), mergeMap(function (action) {
            return _this.routeEntityTypeProvider
                .handleRouterNavigation$(action.payload.routerState);
        }), distinctUntilChanged(this.resourceIdentifierService.isSameResource), tap(function (payload) {
            if (_this.resourceIdentifierService.isValid(payload)) {
                _this.dataService.get$(payload);
            }
        }), map$1(function (payload) {
            return new SetPrimaryEntityIdentifier(payload);
        }));
        this.registerFeature$ = this.actions$
            .pipe(ofType('[EntityFeature] REGISTER_FEATURE'), map$1(function (action) {
            /** @type {?} */
            var feature = action.payload;
            /** @type {?} */
            var addFeatureAction = new AddFeature(feature);
            return addFeatureAction;
        }));
        this.loadPrimaryEntity$ = this.actions$
            .pipe(ofType('[EntityFeature] LOAD_PRIMARY_ENTITY'), mergeMap(function (action) {
            return _this.dataService.get$(action.payload);
        }));
        this.selectPrimaryEntity$ = this.actions$
            .pipe(ofType('[EntityFeature] SELECT_PRIMARY_ENTITY'), mergeMap(function (action) {
            return _this.store.select(entityFeatureSelectors.primaryEntityIdentifier);
        }), distinctUntilChanged(this.resourceIdentifierService.isSameResource), mergeMap(function (payload) {
            if (isNil(payload)) {
                return of(null);
            }
            else {
                /** @type {?} */
                var selector = _this.selectorProvider.provide(payload);
                return _this.store.select((/** @type {?} */ (selector)));
            }
        }), map$1(function (payload) {
            return new SetPrimaryEntity$2(payload);
        }));
        this.init$ = defer(function () {
            return of(new SelectPrimaryEntity());
        });
    }
    FeatureEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FeatureEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions },
        { type: DataService },
        { type: RouteEntityTypeProvider },
        { type: ResourceIdentifierService },
        { type: SelectorProvider }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FeatureEffects.prototype, "handleRouterNavigation$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FeatureEffects.prototype, "registerFeature$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FeatureEffects.prototype, "loadPrimaryEntity$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FeatureEffects.prototype, "selectPrimaryEntity$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FeatureEffects.prototype, "init$", void 0);
    return FeatureEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var featureInitialState = {
    features: {},
    primaryEntity: {
        resourceIdentifier: null,
        entity: null
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function featureReducer(state, action) {
    /** @type {?} */
    var stateDelta = (/** @type {?} */ ({}));
    switch (action.type) {
        case '[EntityFeature] ADD_FEATURE':
            /** @type {?} */
            var existingFeatures = state.features;
            /** @type {?} */
            var newFeature = action.payload;
            /** @type {?} */
            var featuresDelta = {};
            featuresDelta[newFeature.name] = newFeature;
            /** @type {?} */
            var newFeatures = Object.assign({}, existingFeatures, featuresDelta);
            stateDelta = (/** @type {?} */ ({
                features: newFeatures
            }));
            break;
        case '[EntityFeature] SET_PRIMARY_ENTITY':
            stateDelta = {
                primaryEntity: cloneDeep(state.primaryEntity)
            };
            stateDelta.primaryEntity.entity = action.payload;
            break;
        case '[EntityFeature] SET_PRIMARY_ENTITY_IDENTIFIER':
            stateDelta = {
                primaryEntity: cloneDeep(state.primaryEntity)
            };
            stateDelta.primaryEntity.resourceIdentifier = action.payload;
            break;
        default:
            break;
    }
    return Object.assign({}, state, stateDelta);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects = [
    FeatureEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FEATURE_CONFIG = new InjectionToken("Entity Feature Config");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityEffects = /** @class */ (function () {
    function EntityEffects(store, actions$, entityService, featureConfig, resourceIdentifierService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.entityService = entityService;
        this.featureConfig = featureConfig;
        this.resourceIdentifierService = resourceIdentifierService;
        this.featureName = 'Feature';
        this.init$ = this.actions$
            .pipe(ofType(this.featureAction("INIT")), switchMap(function (action) {
            /** @type {?} */
            var registerFeatureAction = new RegisterFeature(_this.featureConfig);
            /** @type {?} */
            var loadSeedAction = new LoadSeedData(_this.featureName, _this.featureConfig);
            return [registerFeatureAction, loadSeedAction];
        }));
        this.seed$ = this.actions$
            .pipe(ofType(this.featureAction("LOAD_SEED_DATA")), switchMap(function (action) {
            /** @type {?} */
            var feature = action.payload;
            /** @type {?} */
            var seeds = action.payload.seedEntities;
            /** @type {?} */
            var buildLoadAction = function (ri) {
                /** @type {?} */
                var sliceName = _this.getFeatureEntitySlice(feature.name, ri.type);
                return new Load(sliceName, ri);
            };
            return map(seeds, buildLoadAction);
        }));
        this.load$ = this.actions$
            .pipe(ofType.apply(void 0, __spread(this.sliceActions("LOAD"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.get$(resourceOpts);
        }), map$1(function (payload) {
            return new AsyncSuccess(_this.featureName, payload);
        }));
        this.add$ = this.actions$
            .pipe(ofType.apply(void 0, __spread(this.sliceActions("ADD"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.create$(resourceOpts);
        }), map$1(function (payload) {
            return new AsyncSuccess(_this.featureName, payload);
        }));
        this.update$ = this.actions$
            .pipe(ofType.apply(void 0, __spread(this.sliceActions("UPDATE"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.update$(resourceOpts);
        }), map$1(function (payload) {
            return new AsyncSuccess(_this.featureName, payload);
        }));
        this.asyncSuccess$ = this.actions$
            .pipe(ofType(this.featureAction("ASYNC_SUCCESS")), map$1(function (action) {
            return {
                resourceIdentifier: action.payload.resourceIdentifier,
                data: _this.groupedEntities(action.payload),
            };
        }), switchMap(function (payload) {
            return _this.buildAddToStoreActions(payload);
        }));
        this.delete$ = this.actions$
            .pipe(ofType.apply(void 0, __spread(this.sliceActions("DELETE"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.delete$(resourceOpts);
        }), map$1(function (payload) {
            return new DeleteSuccess(_this.getEntitySlice(payload.resourceIdentifier.type), payload.data);
        }));
        this.loadApplicationResource$ = this.actions$
            .pipe(ofType('[ApplicationConfig] LOAD_RESOURCE_BY_ID'), mergeMap(function () {
            return _this.store.select(applicationConfigSelectors.resourceById);
        }), filter$1(function (payload) { return _this.isValidPayload(payload); }), mergeMap(function (payload) {
            return _this.entityService.get$(payload);
        }), filter$1(function (payload) { return _this.isValidResource(payload); }), map$1(function (payload) {
            return new ApplicationConfigActions.SetPrimaryEntity(payload);
        }));
        this.featureName = featureConfig.name;
    }
    /**
     * @return {?}
     */
    EntityEffects.prototype.ngrxOnIdentifyEffects = /**
     * @return {?}
     */
    function () {
        return this.featureName;
    };
    /**
     * @return {?}
     */
    EntityEffects.prototype.ngrxOnInitEffects = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var initFeatureAction = new Init(this.featureName, this.featureConfig);
        return initFeatureAction;
    };
    // Private methods
    // Private methods
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddToStoreActions = 
    // Private methods
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var actions$$1 = [];
        /** @type {?} */
        var addActions = map(payload.data, bind(this.buildAddEntitiesAction, this));
        actions$$1 = actions$$1.concat(addActions);
        if (this.resourceIdentifierService.isScope(payload.resourceIdentifier)) {
            /** @type {?} */
            var scopeAction = this.buildAddScopeEntitiesAction(payload);
            actions$$1 = actions$$1.concat([scopeAction]);
        }
        return flatten(actions$$1);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddEntitiesAction = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return new AddStoreEntities(this.getEntitySlice(payload.sliceName), payload.entities);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddScopeEntitiesAction = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var ri = payload.resourceIdentifier;
        /** @type {?} */
        var scopeName = this.resourceIdentifierService.scopeName(ri);
        /** @type {?} */
        var sliceName = ri.type;
        /** @type {?} */
        var hasEntityType = function (payload) {
            return payload.sliceName == sliceName;
        };
        /** @type {?} */
        var sliceNamePayload = find(payload.data, hasEntityType);
        /** @type {?} */
        var entities = sliceNamePayload.entities;
        /** @type {?} */
        var actionPayload = {
            scope: scopeName,
            entities: entities
        };
        return new SetScopeEntities(this.getEntitySlice(sliceName), actionPayload);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.groupedEntities = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var entities = payload.data;
        /** @type {?} */
        var groupedBySlice = function (entityTypeMap, entity) {
            /** @type {?} */
            var sliceName = entity.constructor.sliceName;
            /** @type {?} */
            var entities = [];
            if (entityTypeMap[sliceName]) {
                entities = entityTypeMap[sliceName].entities;
            }
            entities.push(entity);
            entityTypeMap[sliceName] = {
                sliceName: sliceName,
                entities: entities
            };
            return entityTypeMap;
        };
        return values(reduce(entities, groupedBySlice, {}));
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.isValidPayload = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        //TODO: @Deepak  - it should ensure the payload is for THIS feature
        return has(payload, 'feature') &&
            has(payload, 'type') &&
            has(payload, 'id');
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.isValidResource = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return payload;
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    EntityEffects.prototype.buildResourceOpts = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        /** @type {?} */
        var ri = {
            type: last(split(action.slice, "."))
        };
        ri = merge({}, ri, action.payload);
        return {
            payload: action.payload,
            type: last(split(action.slice, ".")),
            data: action.payload.data,
            resourceIdentifier: ri,
        };
    };
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    EntityEffects.prototype.featureAction = /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    function (actionName) {
        /** @type {?} */
        var featureName = this.featureConfig.name;
        return typeFor(featureName, actions[actionName]);
    };
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    EntityEffects.prototype.sliceActions = /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    function (actionName) {
        /** @type {?} */
        var buildActionType = function (sliceName) {
            return typeFor(sliceName, actions[actionName]);
        };
        /** @type {?} */
        var sliceActions$$1 = map(this.featureConfig.sliceNames, buildActionType);
        return sliceActions$$1;
    };
    /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    EntityEffects.prototype.getSliceName = /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    function (resourceOpts) {
        return join([resourceOpts.feature, 'entities', resourceOpts.type], '.');
    };
    /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    EntityEffects.prototype.getEntitySlice = /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    function (sliceName) {
        return this.getFeatureEntitySlice(this.featureName, sliceName);
    };
    /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    EntityEffects.prototype.getFeatureEntitySlice = /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    function (featureName, sliceName) {
        return join([featureName, 'entities', sliceName], '.');
    };
    EntityEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions },
        { type: EntityService },
        { type: undefined, decorators: [{ type: Inject, args: [FEATURE_CONFIG,] }] },
        { type: ResourceIdentifierService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "init$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "seed$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "load$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "add$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "update$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "asyncSuccess$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "delete$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], EntityEffects.prototype, "loadApplicationResource$", void 0);
    return EntityEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var entityServices = __spread([
    DataService,
    EntityCloner,
    EntityEffects,
    EntityFactory,
    EntityRelationshipProvider,
    EntityService,
    EntityTypeProviderService,
    ResourceIdentifierService,
    RouteEntityTypeProvider,
    DataService
], services$1, services);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildEntityEffects = function (store, actions, entityService, featureConfig, resourceIdentifierService) {
    return new EntityEffects(store, actions, entityService, featureConfig, resourceIdentifierService);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildEntityConfig = function (apiConfig, defaultEntityConfigClass, params) {
    /** @type {?} */
    var configClass = get(params, 'entityConfigClass', defaultEntityConfigClass);
    /** @type {?} */
    var configParams = merge(omit(params, ['entityConfigClass']), { apiConfig: apiConfig });
    return new configClass(configParams);
};
/** @type {?} */
var buildEntityConfigs = function (entityConfigParams, apiConfig, defaultEntityConfigClass) {
    /** @type {?} */
    var build = partial(buildEntityConfig, apiConfig, defaultEntityConfigClass);
    return map(sortBy(entityConfigParams, 'type'), build);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} entityType
 * @return {?}
 */
function buildEntityInitialState(entityType) {
    /** @type {?} */
    var createInitialStateForEntityType = function (name) {
        /** @type {?} */
        var prop = {};
        /** @type {?} */
        var initialState = createEntityAdapter().getInitialState();
        /** @type {?} */
        var customInitialState = {
            selectedEntityId: null,
            config: {
                entityType: entityType
            },
            scopes: {},
        };
        initialState =
            Object.assign({}, initialState, customInitialState, entityType.config.initialState);
        prop[name] = initialState;
        return prop;
    };
    /** @type {?} */
    var sliceName = entityType.sliceName;
    return createInitialStateForEntityType(sliceName);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} entityFactory
 * @param {?} apiService
 * @param {?} attributeBuilder
 * @return {?}
 */
function buildEntityService(entityFactory, apiService, attributeBuilder) {
    return new EntityService(entityFactory, apiService, attributeBuilder);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildEntityTypeProvider = function (featureConfig) {
    return new EntityTypeProviderService(featureConfig);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var buildEntityTypeClass = function (entityConfig, baseEntity) {
    var Entity = /** @class */ (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Entity._sliceName = entityConfig.name;
        Entity.config = entityConfig;
        return Entity;
    }(baseEntity));
    return Entity;
};
/**
 * @param {?} entityConfigs
 * @param {?} baseEntity
 * @return {?}
 */
function buildEntityTypes(entityConfigs, baseEntity) {
    /** @type {?} */
    var addEntityType = function (entityTypes, entityConfig) {
        /** @type {?} */
        var className = classify(entityConfig.name);
        /** @type {?} */
        var entityTypeClass = buildEntityTypeClass(entityConfig, baseEntity);
        entityTypes[className] = entityTypeClass;
        return entityTypes;
    };
    return reduce(entityConfigs, addEntityType, {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function buildFeatureConfig(config) {
    return new FeatureConfig(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function buildFeatureInitialState(config) {
    /** @type {?} */
    var featureConfig = new FeatureConfig(config);
    /** @type {?} */
    var entityTypes = featureConfig.entityTypes;
    /** @type {?} */
    var entityStates = reduce(map(entityTypes, buildEntityInitialState), merge, {});
    return {
        entities: entityStates
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} featureConfig
 * @param {?} selectorService
 * @param {?} selectorNameService
 * @param {?} buildCustomSelectors
 * @return {?}
 */
function buildFeatureReducer(featureConfig, selectorService, selectorNameService, buildCustomSelectors) {
    /** @type {?} */
    var factory = new EntityAdapterFactory(featureConfig);
    /** @type {?} */
    var entityAdapters = factory.adapters;
    buildFeatureSelector(featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors);
    /** @type {?} */
    var featureEntitiesReducerPrefix = join([featureConfig.name, 'entities'], '.');
    /** @type {?} */
    var entityReducers = reduce(map(entityAdapters, buildEntityReducer), merge, {})
    // @Luis: action should not be any
    ;
    // @Luis: action should not be any
    /** @type {?} */
    var featureEntitiesReducer = function (state, action) {
        /** @type {?} */
        var sliceName = action.slice;
        if (startsWith(sliceName, featureEntitiesReducerPrefix)) {
            /** @type {?} */
            var entitySliceName = last(split(sliceName, '.'));
            /** @type {?} */
            var stateDelta = {};
            if (entitySliceName) {
                stateDelta[entitySliceName] =
                    entityReducers[entitySliceName](state[entitySliceName], action);
            }
            return Object.assign({}, state, stateDelta);
        }
        else {
            return state;
        }
    };
    /** @type {?} */
    var reducers = {
        config: entityConfigReducer,
        entities: featureEntitiesReducer,
    };
    return combineReducers(reducers);
}
/** @type {?} */
var buildEntityReducer = function (entityTypeAdapter) {
    /** @type {?} */
    var reducer = {};
    /** @type {?} */
    var key = entityTypeAdapter.sliceName;
    reducer[key] = entityTypeAdapter.reducer;
    return reducer;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var featureConfig = {
    name: 'Default Feature',
    entityConfigs: [],
    baseEntityType: JsonApiEntity,
};
var ɵ0$5 = featureConfig;
/** @type {?} */
var featureConfigProvider = {
    provide: FEATURE_CONFIG,
    useValue: ɵ0$5,
    multi: true,
};
/** @type {?} */
var providers = [
    featureConfigProvider,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityModule = /** @class */ (function () {
    function EntityModule() {
    }
    EntityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('entity', featureReducer, {
                            initialState: featureInitialState,
                        }),
                        EffectsModule.forFeature(__spread(effects)),
                    ],
                    declarations: [],
                    providers: __spread(entityServices, providers)
                },] }
    ];
    return EntityModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityFormManager = /** @class */ (function () {
    function EntityFormManager(entity$, form$) {
        this.entity$ = entity$;
        this.form$ = form$;
    }
    Object.defineProperty(EntityFormManager.prototype, "entity$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._entity$;
        },
        set: /**
         * @param {?} entity$
         * @return {?}
         */
        function (entity$) {
            var _this = this;
            this._entity$ = entity$;
            entity$.subscribe(function (entity) { return _this.entity = entity; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityFormManager.prototype, "form$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._form$;
        },
        set: /**
         * @param {?} form$
         * @return {?}
         */
        function (form$) {
            var _this = this;
            this._form$ = form$;
            form$.subscribe(function (form) { return _this.form = form; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityFormManager.prototype, "entity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._entity;
        },
        set: /**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            this._entity = entity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityFormManager.prototype, "form", {
        get: /**
         * @return {?}
         */
        function () {
            return this._form;
        },
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this._form = form;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EntityFormManager.prototype.formToEntity = /**
     * @return {?}
     */
    function () {
        this.entity.updateAttributes(this.form.value);
    };
    return EntityFormManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormEntity = /** @class */ (function (_super) {
    __extends(FormEntity, _super);
    function FormEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormEntity.relationshipNames = [
        'form-fields',
    ];
    return FormEntity;
}(JsonApiEntity));
//buildEntityRelationshipProperties(FormEntity)
/** @type {?} */
var buildEntityRelationship$1 = function (name) {
    defineEntityRelationshipGetSet(FormEntity, name);
};
map(FormEntity.relationshipNames, buildEntityRelationship$1);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormFieldEntity = /** @class */ (function (_super) {
    __extends(FormFieldEntity, _super);
    function FormFieldEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormFieldEntity;
}(JsonApiEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownOptionsFactory = /** @class */ (function () {
    function DropdownOptionsFactory() {
    }
    /**
     * @param {?} data$
     * @param {?} entityKey
     * @return {?}
     */
    DropdownOptionsFactory.prototype.build = /**
     * @param {?} data$
     * @param {?} entityKey
     * @return {?}
     */
    function (data$, entityKey) {
        var _this = this;
        /** @type {?} */
        var dropdownData$ = data$.pipe(map$1(function (entityCollection) {
            /** @type {?} */
            var getOptions = function (entity) {
                return _this.getOptions(entityKey, entity);
            };
            return map(entityCollection.entities, getOptions);
        }));
        return dropdownData$;
    };
    /**
     * @param {?} key
     * @param {?} entity
     * @return {?}
     */
    DropdownOptionsFactory.prototype.getOptions = /**
     * @param {?} key
     * @param {?} entity
     * @return {?}
     */
    function (key, entity) {
        return {
            key: entity.id,
            value: entity.attributes[key]
        };
    };
    DropdownOptionsFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DropdownOptionsFactory.ngInjectableDef = defineInjectable({ factory: function DropdownOptionsFactory_Factory() { return new DropdownOptionsFactory(); }, token: DropdownOptionsFactory, providedIn: "root" });
    return DropdownOptionsFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var resourceList = [
    {
        key: 'default_project_roles',
        value: 'name',
        name: 'project-roles'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownFactory = /** @class */ (function () {
    function DropdownFactory(dataService, optionsFactory) {
        this.dataService = dataService;
        this.optionsFactory = optionsFactory;
    }
    /**
     * @param {?} resolvable
     * @return {?}
     */
    DropdownFactory.prototype.build = /**
     * @param {?} resolvable
     * @return {?}
     */
    function (resolvable) {
        /** @type {?} */
        var entityKey = 'name';
        /** @type {?} */
        var name = pluralize(resolvable.name.replace('_id', ''));
        /** @type {?} */
        var resource = resourceList.filter(function (item) { return item.key === name; });
        if (resource.length > 0) {
            entityKey = resource[0].value;
            this.selectorData$ = this.getSelectors$(resource[0].name);
        }
        else {
            this.selectorData$ = this.getSelectors$(name);
        }
        return this.optionsFactory.build(this.selectorData$, entityKey);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    DropdownFactory.prototype.getSelectors$ = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var resourceOpts = {
            feature: "app",
            type: type
        };
        return this.dataService.get$(resourceOpts);
    };
    DropdownFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DropdownFactory.ctorParameters = function () { return [
        { type: DataService },
        { type: DropdownOptionsFactory }
    ]; };
    /** @nocollapse */ DropdownFactory.ngInjectableDef = defineInjectable({ factory: function DropdownFactory_Factory() { return new DropdownFactory(inject(DataService), inject(DropdownOptionsFactory)); }, token: DropdownFactory, providedIn: "root" });
    return DropdownFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormControlDataFactory = /** @class */ (function () {
    function FormControlDataFactory(selectFactory) {
        this.selectFactory = selectFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.build = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            type: FormControlDataFactory.formMemberType,
            data: {
                label: this.labelParams(entity),
                control: this.controlParams(entity)
            }
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.labelParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            text: entity.displayName,
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.controlParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var params = {
            controlType: this.controlType(entity),
            placeholder: entity.displayName,
            key: entity.name,
            validators: this.buildEntityValidators(entity),
            displayName: entity.displayName,
        };
        /** @type {?} */
        var controlTypeParams = this.controlTypeData(entity, this.controlType(entity));
        return defaults(params, controlTypeParams);
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.controlType = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        if (entity.name.includes("_id")) {
            return (/** @type {?} */ ('select'));
        }
        if (entity.dataType == 'boolean') {
            return (/** @type {?} */ ('checkbox'));
        }
        return FormControlDataFactory.defaultControlType;
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} controlType
     * @return {?}
     */
    FormControlDataFactory.prototype.controlTypeData = /**
     * @private
     * @param {?} entity
     * @param {?} controlType
     * @return {?}
     */
    function (entity, controlType) {
        switch (controlType) {
            case "select": {
                return this.selectControlTypeData(entity);
            }
            case "input": {
                return this.inputControlTypeData(entity);
            }
            default: {
                return {};
            }
        }
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.selectControlTypeData = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            options: this.selectFactory.build(entity)
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.inputControlTypeData = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return {
            required: true,
            inputType: this.inputType(entity),
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.inputType = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var inputType = 'text';
        if (entity.name == 'email') {
            inputType = 'email';
        }
        if (entity.name == 'password') {
            inputType = 'password';
        }
        return (/** @type {?} */ (inputType));
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormControlDataFactory.prototype.buildEntityValidators = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var validators = [Validators.required];
        if (entity.name == 'email') {
            validators.push(Validators.email);
        }
        return validators;
    };
    FormControlDataFactory.defaultControlType = 'input';
    FormControlDataFactory.formMemberType = 'form-item';
    FormControlDataFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormControlDataFactory.ctorParameters = function () { return [
        { type: DropdownFactory }
    ]; };
    /** @nocollapse */ FormControlDataFactory.ngInjectableDef = defineInjectable({ factory: function FormControlDataFactory_Factory() { return new FormControlDataFactory(inject(DropdownFactory)); }, token: FormControlDataFactory, providedIn: "root" });
    return FormControlDataFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormControlValidatorFactory = /** @class */ (function () {
    function FormControlValidatorFactory() {
    }
    /**
     * @param {?} resolvable
     * @return {?}
     */
    FormControlValidatorFactory.prototype.build = /**
     * @param {?} resolvable
     * @return {?}
     */
    function (resolvable) {
        return {
            type: 'form-item',
            data: {
                control: {
                    validators: [Validators.required],
                }
            }
        };
    };
    FormControlValidatorFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FormControlValidatorFactory.ngInjectableDef = defineInjectable({ factory: function FormControlValidatorFactory_Factory() { return new FormControlValidatorFactory(); }, token: FormControlValidatorFactory, providedIn: "root" });
    return FormControlValidatorFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormGroupDataFactory = /** @class */ (function () {
    function FormGroupDataFactory() {
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    FormGroupDataFactory.prototype.build = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var resourceType = this.pluralizeType(entity);
        return {
            memberType: 'form-group',
            key: this.inputKey(entity),
            resourceType: resourceType,
            formName: this.buildFormName(resourceType)
        };
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormGroupDataFactory.prototype.pluralizeType = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return pluralize(snakeCase(entity.className));
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormGroupDataFactory.prototype.inputKey = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return entity.name + "_attributes";
    };
    /**
     * @private
     * @param {?} resourceType
     * @param {?=} formType
     * @return {?}
     */
    FormGroupDataFactory.prototype.buildFormName = /**
     * @private
     * @param {?} resourceType
     * @param {?=} formType
     * @return {?}
     */
    function (resourceType, formType) {
        if (formType === void 0) { formType = 'edit'; }
        return resourceType + "." + formType;
    };
    FormGroupDataFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ FormGroupDataFactory.ngInjectableDef = defineInjectable({ factory: function FormGroupDataFactory_Factory() { return new FormGroupDataFactory(); }, token: FormGroupDataFactory, providedIn: "root" });
    return FormGroupDataFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormItemDataFactory = /** @class */ (function () {
    function FormItemDataFactory(formControlDataFactory, formControlValidatorFactory) {
        this.formControlDataFactory = formControlDataFactory;
        this.formControlValidatorFactory = formControlValidatorFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    FormItemDataFactory.prototype.build = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var factory = this.resolveParamsFactory(entity);
        return factory.build(entity);
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormItemDataFactory.prototype.resolveParamsFactory = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        switch (entity.type) {
            case "resource-attributes": {
                return this.formControlDataFactory;
            }
            case "resource-validators": {
                return this.formControlValidatorFactory;
            }
            default: {
                return this.formControlDataFactory;
            }
        }
    };
    FormItemDataFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormItemDataFactory.ctorParameters = function () { return [
        { type: FormControlDataFactory },
        { type: FormControlValidatorFactory }
    ]; };
    /** @nocollapse */ FormItemDataFactory.ngInjectableDef = defineInjectable({ factory: function FormItemDataFactory_Factory() { return new FormItemDataFactory(inject(FormControlDataFactory), inject(FormControlValidatorFactory)); }, token: FormItemDataFactory, providedIn: "root" });
    return FormItemDataFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataFactoryResolver = /** @class */ (function () {
    function DataFactoryResolver(formGroupDataFactory, formItemDataFactory) {
        this.formGroupDataFactory = formGroupDataFactory;
        this.formItemDataFactory = formItemDataFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    DataFactoryResolver.prototype.resolve = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        switch (entity.type) {
            case "resource-associations": {
                return this.formGroupDataFactory;
            }
            case "resource-attributes": {
                return this.formItemDataFactory;
            }
            case "resource-validators": {
                return this.formItemDataFactory;
            }
            default: {
                return this.formItemDataFactory;
            }
        }
    };
    DataFactoryResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataFactoryResolver.ctorParameters = function () { return [
        { type: FormGroupDataFactory },
        { type: FormItemDataFactory }
    ]; };
    /** @nocollapse */ DataFactoryResolver.ngInjectableDef = defineInjectable({ factory: function DataFactoryResolver_Factory() { return new DataFactoryResolver(inject(FormGroupDataFactory), inject(FormItemDataFactory)); }, token: DataFactoryResolver, providedIn: "root" });
    return DataFactoryResolver;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataFactory = /** @class */ (function () {
    function DataFactory(dataFactoryResolver) {
        this.dataFactoryResolver = dataFactoryResolver;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    DataFactory.prototype.build = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var factory = this.resolveDataFactory(entity);
        return (/** @type {?} */ (factory.build(entity)));
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    DataFactory.prototype.resolveDataFactory = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.dataFactoryResolver.resolve(entity);
    };
    DataFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataFactory.ctorParameters = function () { return [
        { type: DataFactoryResolver }
    ]; };
    /** @nocollapse */ DataFactory.ngInjectableDef = defineInjectable({ factory: function DataFactory_Factory() { return new DataFactory(inject(DataFactoryResolver)); }, token: DataFactory, providedIn: "root" });
    return DataFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RelationshipProvider = /** @class */ (function () {
    function RelationshipProvider() {
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipName
     * @return {?}
     */
    RelationshipProvider.prototype.provide$ = /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipName
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity, relationshipName) {
        var _this = this;
        return resourceConfiguration.relationship$(relationshipName).pipe(filter$1(function (collection) {
            return _this.relationshipFullyLoaded(resourceConfiguration, relationshipName, collection);
        }), map$1(function (collection) {
            return collection.invokeFilter('isForAttribute', formFieldEntity.inputName);
        }));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} relationshipName
     * @param {?} collection
     * @return {?}
     */
    RelationshipProvider.prototype.relationshipFullyLoaded = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} relationshipName
     * @param {?} collection
     * @return {?}
     */
    function (resourceConfiguration, relationshipName, collection) {
        /** @type {?} */
        var relationshipSize = resourceConfiguration.relationshipSize(relationshipName);
        return collection.length == relationshipSize;
    };
    RelationshipProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ RelationshipProvider.ngInjectableDef = defineInjectable({ factory: function RelationshipProvider_Factory() { return new RelationshipProvider(); }, token: RelationshipProvider, providedIn: "root" });
    return RelationshipProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RelationshipsProvider = /** @class */ (function () {
    function RelationshipsProvider(relationshipProvider) {
        this.relationshipProvider = relationshipProvider;
        this.relationshipTypes = [
            'resource-attributes',
            'resource-associations',
            'resource-validators',
        ];
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    RelationshipsProvider.prototype.provide$ = /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity) {
        /** @type {?} */
        var provideRelationships$ = bind(partial(this.provideRelationship$, resourceConfiguration, formFieldEntity), this);
        /** @type {?} */
        var relationships = map(this.relationshipTypes, provideRelationships$);
        return zip.apply(void 0, __spread(relationships)).pipe(map$1(function (relationshipCollections) {
            return flatMap(relationshipCollections, 'entities');
        }));
    };
    /**
     * @private
     * @param {?} collections
     * @return {?}
     */
    RelationshipsProvider.prototype.flattenedRelationships = /**
     * @private
     * @param {?} collections
     * @return {?}
     */
    function (collections) {
        return flatMap((/** @type {?} */ (pick(collections, 'entities'))));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipType
     * @return {?}
     */
    RelationshipsProvider.prototype.provideRelationship$ = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipType
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity, relationshipType) {
        return this.relationshipProvider.provide$(resourceConfiguration, formFieldEntity, relationshipType);
    };
    RelationshipsProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RelationshipsProvider.ctorParameters = function () { return [
        { type: RelationshipProvider }
    ]; };
    /** @nocollapse */ RelationshipsProvider.ngInjectableDef = defineInjectable({ factory: function RelationshipsProvider_Factory() { return new RelationshipsProvider(inject(RelationshipProvider)); }, token: RelationshipsProvider, providedIn: "root" });
    return RelationshipsProvider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormMemberFactoryParamsService = /** @class */ (function () {
    function FormMemberFactoryParamsService(relationshipsProvider, relationshipDataFactory) {
        this.relationshipsProvider = relationshipsProvider;
        this.relationshipDataFactory = relationshipDataFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    FormMemberFactoryParamsService.prototype.provide$ = /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity) {
        var _this = this;
        return this.relationships$(resourceConfiguration, formFieldEntity).pipe(map$1(function (relationships) {
            return _this.buildParams(relationships, formFieldEntity);
        }));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    FormMemberFactoryParamsService.prototype.relationships$ = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity) {
        return this.relationshipsProvider.provide$(resourceConfiguration, formFieldEntity);
    };
    /**
     * @private
     * @param {?} entities
     * @param {?} formFieldEntity
     * @return {?}
     */
    FormMemberFactoryParamsService.prototype.buildParams = /**
     * @private
     * @param {?} entities
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (entities, formFieldEntity) {
        /** @type {?} */
        var buildEntityFormMemberParams = bind(this.buildEntityFormMemberParams, this);
        /** @type {?} */
        var entitiesParams = map(entities, buildEntityFormMemberParams);
        /** @type {?} */
        var params = merge.apply(_, __spread([{}], entitiesParams));
        return (/** @type {?} */ (params));
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormMemberFactoryParamsService.prototype.buildEntityFormMemberParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.relationshipDataFactory.build(entity);
    };
    FormMemberFactoryParamsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormMemberFactoryParamsService.ctorParameters = function () { return [
        { type: RelationshipsProvider },
        { type: DataFactory }
    ]; };
    /** @nocollapse */ FormMemberFactoryParamsService.ngInjectableDef = defineInjectable({ factory: function FormMemberFactoryParamsService_Factory() { return new FormMemberFactoryParamsService(inject(RelationshipsProvider), inject(DataFactory)); }, token: FormMemberFactoryParamsService, providedIn: "root" });
    return FormMemberFactoryParamsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormFactory$1 = /** @class */ (function () {
    function FormFactory$$1(formMemberFactory, formMemberFactoryParamsService, formFactory) {
        this.formMemberFactory = formMemberFactory;
        this.formMemberFactoryParamsService = formMemberFactoryParamsService;
        this.formFactory = formFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @return {?}
     */
    FormFactory$$1.prototype.build$ = /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @return {?}
     */
    function (resourceConfiguration, form) {
        return this.buildFormGroup$(resourceConfiguration, form, null);
    };
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @param {?} resourceType
     * @return {?}
     */
    FormFactory$$1.prototype.buildFormGroup$ = /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @param {?} resourceType
     * @return {?}
     */
    function (resourceConfiguration, form, resourceType) {
        var _this = this;
        return (/** @type {?} */ (form.formFields$.pipe(mergeMap(function (formFields) {
            return _this.buildFormMembersParams$(resourceConfiguration, formFields);
        }), map$1(function (params) {
            return _this.buildFormMembers(params);
        }), map$1(function (formMembers) {
            return _this.buildForm(formMembers, resourceType);
        }))));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFields
     * @return {?}
     */
    FormFactory$$1.prototype.buildFormMembersParams$ = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFields
     * @return {?}
     */
    function (resourceConfiguration, formFields) {
        /** @type {?} */
        var buildFormMemberParams$ = partial(bind(this.buildFormMemberParams$, this), resourceConfiguration);
        /** @type {?} */
        var formMemberParams$ = map(formFields.entities, buildFormMemberParams$);
        return combineLatest.apply(void 0, __spread(formMemberParams$)).pipe(map$1(function (formMembersParams) {
            /** @type {?} */
            var mergedParams = merge.apply(_, __spread([{}], formMembersParams));
            return (/** @type {?} */ (mergedParams));
        }));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    FormFactory$$1.prototype.buildFormMemberParams$ = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity) {
        return this.formMemberFactoryParamsService.provide$(resourceConfiguration, formFieldEntity).pipe(map$1(function (params) {
            /** @type {?} */
            var pair = [formFieldEntity.inputName, params];
            return (/** @type {?} */ (fromPairs([pair])));
        }));
    };
    /**
     * @private
     * @param {?} paramsSet
     * @return {?}
     */
    FormFactory$$1.prototype.buildFormMembers = /**
     * @private
     * @param {?} paramsSet
     * @return {?}
     */
    function (paramsSet) {
        var _this = this;
        /** @type {?} */
        var buildFormMember = function (params) {
            return _this.formMemberFactory.build(params);
        };
        /** @type {?} */
        var formMembers = mapValues(paramsSet, buildFormMember);
        return formMembers;
    };
    /**
     * @private
     * @param {?} formMembers
     * @param {?} resourceType
     * @return {?}
     */
    FormFactory$$1.prototype.buildForm = /**
     * @private
     * @param {?} formMembers
     * @param {?} resourceType
     * @return {?}
     */
    function (formMembers, resourceType) {
        /** @type {?} */
        var formParams;
        if (resourceType) {
            /** @type {?} */
            var pair = [resourceType, formMembers];
            formParams = fromPairs([pair]);
        }
        else {
            formParams = formMembers;
        }
        return this.formFactory.build(formParams);
    };
    FormFactory$$1.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormFactory$$1.ctorParameters = function () { return [
        { type: FormMemberFactory },
        { type: FormMemberFactoryParamsService },
        { type: FormFactory }
    ]; };
    /** @nocollapse */ FormFactory$$1.ngInjectableDef = defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory$$1(inject(FormMemberFactory), inject(FormMemberFactoryParamsService), inject(FormFactory)); }, token: FormFactory$$1, providedIn: "root" });
    return FormFactory$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityFormFactory = /** @class */ (function () {
    function EntityFormFactory(resourceConfigurationFormFactory, dataService) {
        this.resourceConfigurationFormFactory = resourceConfigurationFormFactory;
        this.dataService = dataService;
    }
    /**
     * @param {?} entity
     * @param {?} opts
     * @return {?}
     */
    EntityFormFactory.prototype.build$ = /**
     * @param {?} entity
     * @param {?} opts
     * @return {?}
     */
    function (entity, opts) {
        var _this = this;
        /** @type {?} */
        var data$ = combineLatest(this.resourceConfiguration$(entity), this.form$(entity, opts.formName));
        return (/** @type {?} */ (data$.pipe(mergeMap(function (_a) {
            var _b = __read(_a, 2), rc = _b[0], form = _b[1];
            return _this.resourceConfigurationFormFactory.build$((/** @type {?} */ (rc)), (/** @type {?} */ (form)));
        }))));
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    EntityFormFactory.prototype.form$ = /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    function (entity, formName) {
        /** @type {?} */
        var opts = {
            feature: entity.feature,
            type: 'forms',
            id: formName,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    EntityFormFactory.prototype.resourceConfiguration$ = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var opts = {
            feature: entity.feature,
            type: 'resource-configurations',
            id: entity.type,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    };
    /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    EntityFormFactory.prototype.loadData$ = /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        return this.dataService.get$(opts).pipe(filter$1(function (entityType) { return !isNil(entityType); }));
    };
    EntityFormFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityFormFactory.ctorParameters = function () { return [
        { type: FormFactory$1 },
        { type: DataService }
    ]; };
    /** @nocollapse */ EntityFormFactory.ngInjectableDef = defineInjectable({ factory: function EntityFormFactory_Factory() { return new EntityFormFactory(inject(FormFactory$1), inject(DataService)); }, token: EntityFormFactory, providedIn: "root" });
    return EntityFormFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityFormManagerFactory = /** @class */ (function () {
    function EntityFormManagerFactory(formFactory) {
        this.formFactory = formFactory;
    }
    /**
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    EntityFormManagerFactory.prototype.build = /**
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    function (entity$, formName) {
        /** @type {?} */
        var form$ = (/** @type {?} */ (this.buildForm$(entity$, formName).pipe(shareReplay(1))));
        return new EntityFormManager(entity$, form$);
    };
    /**
     * @private
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    EntityFormManagerFactory.prototype.buildForm$ = /**
     * @private
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    function (entity$, formName) {
        var _this = this;
        return (/** @type {?} */ (entity$.pipe(shareReplay(1), mergeMap(function (entity) { return _this.buildForm(entity, formName); }))));
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    EntityFormManagerFactory.prototype.buildForm = /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    function (entity, formName) {
        /** @type {?} */
        var opts = {
            formName: formName
        };
        return this.formFactory.build$(entity, opts);
    };
    EntityFormManagerFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityFormManagerFactory.ctorParameters = function () { return [
        { type: EntityFormFactory }
    ]; };
    /** @nocollapse */ EntityFormManagerFactory.ngInjectableDef = defineInjectable({ factory: function EntityFormManagerFactory_Factory() { return new EntityFormManagerFactory(inject(EntityFormFactory)); }, token: EntityFormManagerFactory, providedIn: "root" });
    return EntityFormManagerFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$2 = [
    FormControlDataFactory,
    FormControlValidatorFactory,
    FormGroupDataFactory,
    FormItemDataFactory,
    DropdownFactory,
    DropdownOptionsFactory,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$3 = [
    FormMemberFactoryParamsService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$4 = [
    DataFactory,
    DataFactoryResolver,
    RelationshipProvider,
    RelationshipsProvider,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$5 = __spread([
    FormFactory$1
], services$2, services$3, services$4);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$6 = __spread(services$5);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$7 = __spread([
    EntityFormFactory,
    EntityFormManagerFactory
], services$6);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CeoEntityFormsModule = /** @class */ (function () {
    function CeoEntityFormsModule() {
    }
    CeoEntityFormsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CeoFormsModule,
                    ],
                    declarations: [],
                    providers: __spread(services$7)
                },] }
    ];
    return CeoEntityFormsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { entity_actionClasses as EntityActions, EntityAction, actions as EntityActionsMap, EntityAdapter, EntityAdapterFactory, EntityTypeFactory, EntityCollection, EntityConfig, EntityEffectsConfig, actionType, addMany, addOne, removeMany, removeOne, setScopeIds, updateMany, updateOne, entityReducer, JsonApiEntity, ResourceAssociationEntity, ResourceAttributeEntity, ResourceConfigurationEntity, ResourceValidatorEntity, FeatureConfig, EntityHasOneRelationshipType, EntityHasManyRelationshipType, EntitySelectorTypes, entityServices, DataService, EntityCloner, DataService as EntityDataService, EntityEffects, EntityFactory, EntityService, EntityRelationshipProvider, EntityTypeProviderService, ResourceIdentifierService, RouteEntityTypeProvider, AttributeBuilder as EntityAttributeBuilder, JsonApiAttributeBuilder as JsonApiEntityAttributeBuilder, SelectorNameService as EntitySelectorNameService, SelectorService as EntitySelectorService, SelectorProvider as EntitySelectorProvider, actions$1 as EntityConfigActions, EntityConfigEffects, configInitialState, entityConfigReducer, selectAppFeature, actions$2 as FeatureActions, actionTypes as FeatureActionTypes, FeatureEffects, featureInitialState, featureReducer, selectEntityFeature, entityFeatureSelectors, featureInitialState as initialState, featureReducer as reducer, effects, buildEntityEffects, buildEntityConfigs, buildEntityInitialState, buildEntityRelationshipProperty, defineEntityRelationshipGetSet, buildEntityRelationshipProperties, buildEntityService, buildEntityTypeProvider, buildEntityTypes, buildFeatureConfig, buildFeatureInitialState, buildFeatureReducer, buildScopeSelectors, buildEntitySelectors, buildEntityTypeSelectors, buildEntityTypeSliceSelector, buildFeatureSelector, buildFilterSelector, buildFindSelector, buildRootSelector, buildSliceSelector, FEATURE_CONFIG, providers, EntityModule, EntityFormManager, FormEntity, FormFieldEntity, EntityFormFactory, EntityFormManagerFactory, FormFactory$1 as ResourceConfigurationFormFactory, FormControlDataFactory, FormControlValidatorFactory, FormGroupDataFactory, FormItemDataFactory, DropdownFactory, DropdownOptionsFactory, FormMemberFactoryParamsService, DataFactory as RelationshipDataFactory, DataFactoryResolver as RelationshipDataFactoryResolver, RelationshipProvider, RelationshipsProvider, CeoEntityFormsModule, services$1 as ɵa, services as ɵb, services$2 as ɵf, services$3 as ɵg, services$4 as ɵh, services$5 as ɵe, services$6 as ɵd, services$7 as ɵc };

//# sourceMappingURL=ceo-entity.js.map