import { sliceActions, SliceAction, typeFor, PayloadAction, applicationConfigSelectors, ApplicationConfigActions } from '@ceo/state';
import { __decorate, __metadata } from 'tslib';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { createEntityAdapter } from '@ngrx/entity';
import { createSelector, compose, createFeatureSelector, Store, StoreModule, combineReducers } from '@ngrx/store';
import { Actions, Effect, ofType, EffectsModule } from '@ngrx/effects';
import { Validators } from '@angular/forms';
import { camelCase, classify, slugify, InflectionService, pluralize, snakeCase } from '@ceo/core';
import * as _ from 'lodash';
import { flatten, join, bind, map, split, has, defaults, find, merge, isEmpty, includes, keys, head, intersection, omit, pick, get, set, isNil, partial, fromPairs, mapValues, flatMap, compact, reduce, values, last, isEqual, pickBy, drop, dropRight, cloneDeep, assign, sortBy, filter, toString, every, lowerCase, isFunction, isArray, clone, startsWith, without, extend } from 'lodash';
import { of, combineLatest, Observable, defer, zip } from 'rxjs';
import { map as map$1, mergeMap, tap, distinctUntilChanged, switchMap, filter as filter$1, shareReplay } from 'rxjs/operators';
import { Injectable, NgModule, InjectionToken, defineInjectable, inject, Inject } from '@angular/core';
import { Mixin, AttributeGetterSetter, AttributeUpdater, Memoizer, ApiService, FormMemberFactory, FormFactory, CeoFormsModule } from '@ceo/shared';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const actions = Object.assign({}, sliceActions, { ADD: 'ADD', ADD_OPTIMISTICALLY: 'ADD_OPTIMISTICALLY', ADD_SUCCESS: 'ADD_SUCCESS', ADD_TEMP: 'ADD_TEMP', ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL', UPDATE_SUCCESS: 'UPDATE_SUCCESS', DELETE: 'DELETE', DELETE_FAIL: 'DELETE_FAIL', DELETE_SUCCESS: 'DELETE_SUCCESS', DELETE_TEMP: 'DELETE_TEMP', ASYNC: 'ASYNC', ASYNC_FAIL: 'ASYNC_FAIL', ASYNC_SUCCESS: 'ASYNC_SUCCESS', ASYNC_DATA_READY: 'ASYNC_DATA_READY', PATCH: 'PATCH', PATCH_EACH: 'PATCH_EACH', PATCH_FAIL: 'PATCH_FAIL', PATCH_SUCCESS: 'PATCH_SUCCESS', RESTORE_TEMP: 'RESTORE_TEMP', SELECT: 'SELECT', SELECT_NEXT: 'SELECT_NEXT', UNLOAD: 'UNLOAD', ADD_STORE_ENTITIES: "ADD_STORE_ENTITIES", SET_SELECTED: "SET_SELECTED", LOAD_SEED_DATA: 'LOAD_SEED_DATA', SET_PRIMARY_ENTITY: 'SET_PRIMARY_ENTITY', SET_SCOPE_ENTITIES: 'SET_SCOPE_ENTITIES' });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TEMP = 'TEMP_ID_VALUE';
/**
 * @template T
 */
class EntityAction extends SliceAction {
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
/**
 * @template T
 */
class Init extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.INIT;
    }
}
// Action to add a new entity on the server.
/**
 * @template T
 */
class Add extends EntityAction {
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
// Action to send array of entities to the store.
/**
 * @template T
 */
class AddStoreEntities extends SliceAction {
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
// Action to load data from the server
/**
 * @template T
 */
class Load extends SliceAction {
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
// Action to capture successful response from the server.
/**
 * @template T
 */
class AsyncSuccess extends SliceAction {
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
/**
 * @template T
 */
class LoadSeedData extends SliceAction {
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
class Initialized extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.INITIALIZED;
    }
}
/**
 * @template T
 */
class Patch extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH;
    }
}
/**
 * Create a temporary entity to go into the store but not to the server or be
 * validated. If the id of the payload is missing or null
 * then use the TEMP value. Otherwise use the payload.id value
 * @template T
 */
class AddTemp extends EntityAction {
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
/**
 * Use this action to first put in the store and then
 * submit to the server
 * @template T
 */
class AddOptimistically extends Add {
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
/**
 * @template T
 */
class AddSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.ADD_SUCCESS;
    }
}
/**
 * @template T
 */
class AddUpdateFail extends EntityAction {
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
/**
 * @template T
 */
class Delete extends EntityAction {
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
/**
 * @template T
 */
class DeleteFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.DELETE_FAIL;
    }
}
/**
 * @template T
 */
class DeleteSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.DELETE_SUCCESS;
    }
}
/**
 * @template T
 */
class LoadFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.LOAD_FAIL;
    }
}
/**
 * @template T
 */
class Async extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.ASYNC;
    }
}
/**
 * @template T
 */
class AsyncFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.ASYNC_FAIL;
    }
}
/**
 * @template T
 */
class AsyncDataReady extends SliceAction {
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
// this makes Effect loadFromRemote$ work
/**
 * @template T
 */
class LoadSuccess extends AsyncSuccess {
    constructor() {
        super(...arguments);
        this.actionName = actions.LOAD_SUCCESS;
    }
}
/**
 * @template T
 */
class PatchSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH_SUCCESS;
    }
}
/**
 * @template T
 */
class PatchFail extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH_FAIL;
    }
}
/**
 * @template T
 */
class Update extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.UPDATE;
    }
}
/**
 * @template T
 */
class PatchEach extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.PATCH_EACH;
    }
}
/**
 * @template T
 */
class UpdateSuccess extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.UPDATE_SUCCESS;
    }
}
/**
 * @template T
 */
class Select extends EntityAction {
    constructor() {
        super(...arguments);
        this.actionName = actions.SELECT;
    }
}
/**
 * @template T
 */
class SelectNext extends EntityAction {
    /**
     * @param {?} slice
     */
    constructor(slice) {
        super(slice, null);
        this.slice = slice;
        this.actionName = actions.SELECT_NEXT;
    }
}
/**
 * @template T
 */
class Unload extends EntityAction {
    /**
     * @param {?} slice
     */
    constructor(slice) {
        super(slice, null);
        this.slice = slice;
        this.actionName = actions.UNLOAD;
    }
}
/**
 * @template T
 */
class SetSelected extends SliceAction {
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
/**
 * @template T
 */
class SetPrimaryEntity extends SliceAction {
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
/**
 * @template T
 */
class SetScopeEntities extends SliceAction {
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
const buildScopeSelector = (entityAdapter, selectors, scopeName) => {
    /** @type {?} */
    var collectionType = entityAdapter.entityCollectionType;
    /** @type {?} */
    let selectScopeEntities = (scopes, entities) => {
        /** @type {?} */
        let ids = get(scopes, [scopeName, 'ids'], []);
        /** @type {?} */
        let scopeEntities = compact(ids.map(function (id) { return entities[id]; }));
        /** @type {?} */
        let collection = new collectionType(scopeEntities);
        return collection;
    };
    /** @type {?} */
    let selectorName = `select.scope.${camelCase(scopeName)}`;
    selectors[selectorName] = createSelector(selectors.selectScopes, selectors.selectEntities, selectScopeEntities);
    return selectors;
}
// Get all the Selectors internal to an entity type
;
// Get all the Selectors internal to an entity type
/** @type {?} */
const buildScopeSelectors = (entityAdapter, selectors) => {
    /** @type {?} */
    let scopeNames = keys(entityAdapter.scopes);
    /** @type {?} */
    let buildSelector = partial(buildScopeSelector, entityAdapter);
    return reduce(scopeNames, buildSelector, selectors);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const buildEntityTypeSelectors = (entityAdapter) => {
    /** @type {?} */
    var collectionType = entityAdapter.entityCollectionType;
    /** @type {?} */
    var selectors = entityAdapter.ngrxEntityAdapter.getSelectors();
    /** @type {?} */
    let defaults$$1 = ['selectIds', 'selectEntities', 'selectTotal'];
    /** @type {?} */
    let decoratedSelectors = pick(selectors, defaults$$1)
    // Wrap the selectAll selector in order to return an
    // entity collection object
    ;
    // Wrap the selectAll selector in order to return an
    // entity collection object
    decoratedSelectors.selectAll = (state) => {
        /** @type {?} */
        let entities = selectors.selectAll(state);
        /** @type {?} */
        let collection = new collectionType(entities);
        return collection;
    };
    decoratedSelectors.selectSelectedEntity = (state) => {
        return state.entities[state.selectedEntityId];
    };
    decoratedSelectors.selectScopes = (state) => { return state.scopes; };
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
    let fullSliceName = join([featureName, sliceName], ".");
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
    let entityId = entity.id;
    /** @type {?} */
    let newEntities = omit(state.entities, entityId);
    /** @type {?} */
    let newIds = without(state.ids, entityId);
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
    let payloadIds = map(flatten([action.payload]), 'id');
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
    let entities = action.payload.entities;
    /** @type {?} */
    let scopeName = action.payload.scope;
    /** @type {?} */
    let ids = map(entities, 'id');
    /** @type {?} */
    let stateDelta = {
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
    let payload = flatten([action.payload]);
    /** @type {?} */
    let payloadIds = map(flatten([payload]), 'id');
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
            let entityData = action.payload;
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
                let stateDelta = {
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
                let stateDelta = {
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
class EntityCollection {
    /**
     * @param {?=} entities
     */
    constructor(entities = []) {
        this.entities = entities;
        this.length = entities.length;
    }
    /**
     * @return {?}
     */
    none() {
        return this.buildCollection([]);
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    sort(attributes) {
        attributes = flatten([attributes]);
        /** @type {?} */
        let entities = sortBy(this.entities, attributes);
        return this.buildCollection(entities);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    filter(...args) {
        // @ts-ignore:
        /** @type {?} */
        let entities = this.entities.filter(...args);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    invokeFilter(methodName, attribute) {
        /** @type {?} */
        let filterByMethod = (entity) => {
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
        let entities = filter(this.entities, filterByMethod);
        return this.buildCollection(entities);
    }
    // TODO: deprecate this method
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    filterByInvoke(methodName, attribute) {
        return this.invokeFilter(methodName, attribute);
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    filterByAttrs(filters) {
        /** @type {?} */
        let runFilter = (entityCollection, filter$$1, attr) => {
            return entityCollection.filterByAttr(attr, filter$$1);
        };
        /** @type {?} */
        let value = reduce(filters, runFilter, this);
        return value;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    find(id) {
        /** @type {?} */
        let findEntity = (entity) => {
            /** @type {?} */
            var defaults$$1 = ["id"];
            /** @type {?} */
            var idAttributes = get(entity.constructor, 'config.primaryKeys', defaults$$1);
            /** @type {?} */
            let hasId = (attr) => {
                return entity[attr] == id;
            };
            return !isNil(find(idAttributes, hasId));
        };
        return find(this.entities, findEntity);
    }
    /**
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    findByAttr(attr, value) {
        /**
         * @param {?} entity
         * @return {?}
         */
        function findEntity(entity) {
            return entity[attr] == value;
        }
        return find(this.entities, findEntity);
    }
    /**
     * @param {?} mapFn
     * @return {?}
     */
    map(mapFn) {
        return map(this.entities, mapFn);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    slice(...args) {
        /** @type {?} */
        let entities = this.entities.slice(...args);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} conditions
     * @return {?}
     */
    where(conditions) {
        /** @type {?} */
        var filterByCondition = (entity, value, key) => {
            // When the entity does not have the attribute at all
            if (!has(entity, key)) {
                return false;
            }
            /** @type {?} */
            let entityValue = entity[key]
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
        var filterEntity = (entity) => {
            return every(conditions, partial(filterByCondition, entity));
        };
        /** @type {?} */
        let entities = filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} conditions
     * @return {?}
     */
    stringSearch(conditions) {
        /** @type {?} */
        let runFilter = (entityCollection, searchTerm, attr) => {
            return entityCollection.stringSearchByAttr(attr, searchTerm);
        };
        return reduce(conditions, runFilter, this);
    }
    /**
     * @param {?} conditions
     * @return {?}
     */
    search(conditions) {
        /** @type {?} */
        var filterByCondition = (entity, value, key) => {
            /** @type {?} */
            let entityValue = entity.attributes[key];
            if (value instanceof Array) {
                return includes(value, entityValue);
            }
            else {
                return includes(entityValue, value);
            }
        };
        /** @type {?} */
        var filterEntity = (entity) => {
            return every(conditions, partial(filterByCondition, entity));
        };
        /** @type {?} */
        let entities = filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} attr
     * @param {?} searchTerm
     * @return {?}
     */
    stringSearchByAttr(attr, searchTerm) {
        /** @type {?} */
        let attrFilter = (entity) => {
            if (!searchTerm) {
                return true;
            }
            /** @type {?} */
            let entityValue = entity[attr];
            /** @type {?} */
            let entityWildcardValue = lowerCase(entityValue);
            /** @type {?} */
            let searchTermWildcardValue = lowerCase(searchTerm);
            return includes(entityWildcardValue, searchTermWildcardValue);
        };
        return this.filter(attrFilter);
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return isEmpty(this.entities);
    }
    /**
     * @return {?}
     */
    isNotEmpty() {
        return !this.isEmpty();
    }
    /**
     * @return {?}
     */
    hasEntities() {
        return this.isNotEmpty();
    }
    /**
     * @private
     * @param {?} attr
     * @param {?} filter
     * @return {?}
     */
    filterByAttr(attr, filter$$1) {
        /** @type {?} */
        let attrFilter = (entity) => {
            /** @type {?} */
            let value = entity.attributes[attr];
            return filter$$1(value);
        };
        return this.filter(attrFilter);
    }
    /**
     * @private
     * @param {?} entities
     * @return {?}
     */
    buildCollection(entities) {
        /** @type {?} */
        let collectionType = this.constructor;
        return new collectionType(entities);
    }
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        /** @type {?} */
        let current = 0;
        /** @type {?} */
        let entities = this.entities;
        return {
            next: function () {
                /** @type {?} */
                let noEntities = isEmpty(entities);
                /** @type {?} */
                let value = noEntities ? null : entities[current++];
                /** @type {?} */
                let done = noEntities ? true : current > entities.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityAdapter {
    /**
     * @param {?} entityOpts
     */
    constructor(entityOpts) {
        this.featureName = entityOpts.featureName;
        this.entityType = entityOpts.entityType;
        this.entityConfig = this.entityType.config;
        this.entityName = this.entityType.sliceName;
        this.sliceName = this.entityName;
    }
    /**
     * @return {?}
     */
    get entityCollectionType() {
        return EntityCollection;
    }
    /**
     * @return {?}
     */
    get reducer() {
        return this.getterWithBuilder('_reducer', 'buildReducer');
    }
    /**
     * @return {?}
     */
    get selectors() {
        return this.getterWithBuilder('_selectors', 'buildSelectors');
    }
    /**
     * @return {?}
     */
    get initialState() {
        return this.getterWithBuilder('_initialState', 'buildInitialState');
    }
    /**
     * @return {?}
     */
    get ngrxEntityAdapter() {
        if (!this._ngrxEntityAdapter) {
            this._ngrxEntityAdapter = this.buildNgrxEntityAdapter();
        }
        return this._ngrxEntityAdapter;
    }
    /**
     * @return {?}
     */
    get scopes() {
        /** @type {?} */
        let defaultScopes = {};
        return get(this.entityConfig, 'initialState.scopes', defaultScopes);
    }
    /**
     * @private
     * @return {?}
     */
    buildReducer() {
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
        let baseReducer = (state = initialState, action) => {
            if (customReducer) {
                state = customReducer(state, action);
            }
            state = entityReducer(action, featureName, sliceName, adapter, state);
            return state;
        };
        return baseReducer;
    }
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    featureEntitySliceName(featureName) {
        return join([featureName, 'entities'], '.');
    }
    /**
     * @private
     * @return {?}
     */
    buildSelectors() {
        return buildEntityTypeSelectors(this);
    }
    /**
     * @private
     * @return {?}
     */
    buildInitialState() {
        /** @type {?} */
        let entityTypeInitialState = {
            selectedEntityId: null,
        };
        /** @type {?} */
        let initialState = merge(entityTypeInitialState, this.entityType.initialState);
        return this.ngrxEntityAdapter.getInitialState(initialState);
    }
    /**
     * @private
     * @return {?}
     */
    buildNgrxEntityAdapter() {
        return createEntityAdapter();
    }
    /**
     * @private
     * @param {?} propName
     * @param {?} builder
     * @return {?}
     */
    getterWithBuilder(propName, builder) {
        if (!this[propName]) {
            this[propName] = this[builder]();
        }
        return this[propName];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityAdapterFactory {
    /**
     * @param {?} _featureConfig
     */
    constructor(_featureConfig) {
        this._featureConfig = _featureConfig;
    }
    /**
     * @return {?}
     */
    get featureConfig() {
        return this._featureConfig;
    }
    /**
     * @return {?}
     */
    get adapters() {
        if (!this._adapters) {
            this._adapters = this.buildAdapters();
        }
        return this._adapters;
    }
    /**
     * @private
     * @return {?}
     */
    buildAdapters() {
        return map(this.featureConfig.entityTypes, bind(this.buildAdapter, this));
    }
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    buildAdapter(entityType) {
        /** @type {?} */
        let opts = {
            featureName: this.featureConfig.name,
            entityType: entityType,
        };
        return new EntityAdapter(opts);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityTypeFactory {
    /**
     * @param {?} baseEntityType
     */
    constructor(baseEntityType) {
        this.baseEntityType = baseEntityType;
    }
    /**
     * @param {?} entityConfig
     * @return {?}
     */
    build(entityConfig) {
        /** @type {?} */
        let entityTypeName = classify(entityConfig.name);
        /** @type {?} */
        let entityType = this.buildEntityType(entityConfig);
        /** @type {?} */
        let map$$1 = {};
        /** @type {?} */
        let identifier = (/** @type {?} */ (entityTypeName));
        map$$1[identifier] = entityType;
        return (/** @type {?} */ (map$$1));
    }
    /**
     * @private
     * @param {?} entityConfig
     * @return {?}
     */
    buildEntityType(entityConfig) {
        /** @type {?} */
        var entityType;
        if (entityConfig.entityType) {
            entityType = entityConfig.entityType;
        }
        else {
            entityType = this.baseEntityType;
        }
        class Entity extends entityType {
        }
        Entity._sliceName = entityConfig.name;
        Entity.config = entityConfig;
        return Entity;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityConfig {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.primaryKeys = ['id'];
        this.seed = [];
        this.initialState = {};
        Object.assign(this, init);
    }
    /**
     * @return {?}
     */
    get name() {
        if (!this._name) {
            this._name = this.type;
        }
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @return {?}
     */
    getName() {
        return this.type;
    }
    /**
     * @param {?=} resourceIdentifier
     * @return {?}
     */
    hasResourceType(resourceIdentifier = {}) {
        return this.type == resourceIdentifier.type;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        return this.type == entityData.type;
    }
    /**
     * @return {?}
     */
    isCustom() {
        return has(this, "primaryKeys");
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    urlFragment(opts = {}) {
        if (isFunction(this.url)) {
            return this.url(opts);
        }
        else {
            return this.url ? this.url : this.type;
        }
    }
    /**
     * @return {?}
     */
    get entityType() {
        return this._entityType;
    }
    /**
     * @param {?} entityType
     * @return {?}
     */
    set entityType(entityType) {
        this._entityType = entityType;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityEffectsConfig {
    /**
     * @param {?} config
     */
    constructor(config) {
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
    hasEffectType(effectTypeName) {
        return (has(this.effectTypes, effectTypeName) &&
            this.effectTypes[effectTypeName]);
    }
    /**
     * @param {?} configItem
     * @return {?}
     */
    getConfig(configItem) {
        return this.config[configItem];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
let JsonApiEntity = 
// @dynamic
class JsonApiEntity {
    /**
     * @param {?=} init
     * @param {?=} dataService
     */
    constructor(init, dataService) {
        this.attributes = {};
        this.defaultAttributes = {};
        // Mixin methods
        this.updatedKeys = [];
        Object.assign(this, init);
        this._dataService = dataService;
        this.setAttributes();
    }
    /**
     * @return {?}
     */
    static get sliceName() {
        if (this._sliceName) {
            return this._sliceName;
        }
        if (this.config) {
            return this.config.name;
        }
        return this.constructor.name;
    }
    /**
     * @return {?}
     */
    setAttributes() {
        this.attributes =
            defaults(this.attributes, ((/** @type {?} */ (this.constructor))).defaultAttributes);
        this.updateAttributes(this.attributes);
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    getAttr(attrName) {
        return this.attributes[attrName];
    }
    /**
     * @param {?} attrName
     * @param {?} value
     * @return {?}
     */
    setAttr(attrName, value) {
        attrName = slugify(attrName);
        /** @type {?} */
        let prop = {};
        prop[attrName] = value;
        this.updateAttributes(prop);
    }
    /**
     * @return {?}
     */
    get dataService() {
        return this._dataService;
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set dataService(service) {
        this._dataService = service;
    }
    /**
     * @return {?}
     */
    get isNew() {
        return !has(this, 'id');
    }
    /**
     * @param {?} name
     * @return {?}
     */
    nameStartsWith(name) {
        /** @type {?} */
        let nameIndex = this.getAttr('name')
            .toLowerCase()
            .indexOf(name.toLowerCase());
        return nameIndex === 0;
    }
    /**
     * @return {?}
     */
    getSliceName() {
        return this.type;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    relationship(type) {
        return this[type];
    }
    /**
     * @param {?} relationshipName
     * @return {?}
     */
    relationshipSize(relationshipName) {
        if (!this.hasRelationship(relationshipName)) {
            return 0;
        }
        /** @type {?} */
        let relationshipData = this.relationships[relationshipName].data;
        if (isArray(relationshipData)) {
            return relationshipData.length;
        }
        return 1;
    }
    /**
     * @param {?} relationshipName
     * @param {?=} opts
     * @return {?}
     */
    relationship$(relationshipName, opts = {}) {
        return this.dataService.relationship$(this, relationshipName, opts);
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    save$(opts = {}) {
        /** @type {?} */
        let saveAction = this.isNew ? 'create$' : 'update$';
        return this.dataService[saveAction](this.toResourceIdentifier(), opts);
    }
    /**
     * @private
     * @return {?}
     */
    toResourceIdentifier() {
        /** @type {?} */
        let ri = (/** @type {?} */ (clone(pick(this, 'feature', 'type'))));
        ri.data = this.attributes;
        if (!this.isNew) {
            ri.id = this.id;
        }
        return ri;
    }
    /**
     * @private
     * @param {?} relationshipName
     * @return {?}
     */
    hasRelationship(relationshipName) {
        return (this.relationships &&
            this.relationships[relationshipName] &&
            this.relationships[relationshipName].data);
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    updateAttributes(attributes) { }
    /**
     * @return {?}
     */
    createAttributeSettersAndGetters() { }
    /**
     * @param {?} props
     * @return {?}
     */
    createSettersAndGetters(props) { }
    /**
     * @param {?} obj
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    createGetSet(obj, props, key, name) { }
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    generateGetSet(props, key, name) { }
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setProp(props, key, value) { }
    /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    getProp(props, key) { }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    memoized(property, value) { }
};
JsonApiEntity._sliceName = '';
JsonApiEntity.config = {};
JsonApiEntity.defaultAttributes = {};
// @dynamic
JsonApiEntity = __decorate([
    Mixin([AttributeGetterSetter, AttributeUpdater, Memoizer]),
    __metadata("design:paramtypes", [Object, Object])
], JsonApiEntity);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceAssociationEntity extends JsonApiEntity {
    /**
     * @param {?} attrName
     * @return {?}
     */
    isForAttribute(attrName) {
        return ((/** @type {?} */ (this))).name == attrName;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceAttributeEntity extends JsonApiEntity {
    /**
     * @param {?} attrName
     * @return {?}
     */
    isForAttribute(attrName) {
        return ((/** @type {?} */ (this))).name == attrName;
    }
}

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
    let propName = `${camelCase(relationshipName)}$`;
    /** @type {?} */
    let privatePropName = `_${propName}`;
    /** @type {?} */
    let getter = buildEntityRelationshipProperty(relationshipName);
    console.log("building get set for " + entityType.name + " : " + relationshipName);
    /** @type {?} */
    let props = {
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
    let defineGetSet = partial(defineEntityRelationshipGetSet, entityType);
    map(entityType.relationshipNames, defineGetSet);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceConfigurationEntity extends JsonApiEntity {
}
ResourceConfigurationEntity.defaultAttributes = {
    isRoutable: true
};
ResourceConfigurationEntity.relationshipNames = [
    'resource-associations',
    'resource-attributes',
    'resource-validators',
];
/** @type {?} */
let buildEntityRelationship = (name) => {
    defineEntityRelationshipGetSet(ResourceConfigurationEntity, name);
};
map(ResourceConfigurationEntity.relationshipNames, buildEntityRelationship);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceValidatorEntity extends JsonApiEntity {
    /**
     * @param {?} attrName
     * @return {?}
     */
    isForAttribute(attrName) {
        return includes(((/** @type {?} */ (this))).attributeNames, attrName);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureConfig {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    /**
     * @return {?}
     */
    get sliceNames() {
        if (this._sliceNames) {
            return this._sliceNames;
        }
        this._sliceNames = this.buildSliceNames();
        return this._sliceNames;
    }
    /**
     * @return {?}
     */
    get seedEntities() {
        if (!this._seedEntities) {
            this._seedEntities = this.buildSeeds();
        }
        return this._seedEntities;
    }
    /**
     * @return {?}
     */
    get entityTypes() {
        if (!this._entityTypes) {
            this._entityTypes = this.buildEntityTypes();
        }
        return this._entityTypes;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    entityTypeFromEntityData(entityData) {
        /** @type {?} */
        let ofType$$1 = (entityType) => {
            return entityType.config.ofType(entityData);
        };
        return find(this.entityTypes, ofType$$1);
    }
    /**
     * @param {?} theType
     * @return {?}
     */
    entityType(theType) {
        /** @type {?} */
        let hasType = (entityType) => {
            return entityType.config.type == theType;
        };
        return find(this.entityTypes, hasType);
    }
    ////////////////////////////
    // Private methods
    ////////////////////////////
    /**
     * @private
     * @return {?}
     */
    get entitySliceNames() {
        /** @type {?} */
        let getName = (entityType) => {
            return entityType.sliceName;
        };
        return map(this.entityTypes, getName);
    }
    /**
     * @private
     * @return {?}
     */
    buildSliceNames() {
        /** @type {?} */
        let prefixedSliceName = (sliceName) => {
            return join([this.name, 'entities', sliceName], '.');
        };
        return map(this.entitySliceNames, prefixedSliceName);
    }
    /**
     * @private
     * @return {?}
     */
    buildSeeds() {
        return flatten(map(this.entityTypes, bind(this.buildEntityTypeSeeds, this)));
    }
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    buildEntityTypeSeeds(entityType) {
        /** @type {?} */
        let buildResourceIdentiifer = (ri) => {
            /** @type {?} */
            let map$$1 = {
                feature: this.name,
                type: entityType.config.type
            };
            return merge(map$$1, ri);
        };
        return map(entityType.config.seed, buildResourceIdentiifer);
    }
    /**
     * @private
     * @return {?}
     */
    buildEntityTypes() {
        /** @type {?} */
        var factory = new EntityTypeFactory(this.baseEntityType);
        /** @type {?} */
        let build = bind(factory.build, factory);
        /** @type {?} */
        let entityTypeMaps = map(this.entityConfigs, build);
        return assign.apply(_, entityTypeMaps);
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
const EntityHasOneRelationshipType = "HasOne";
/** @type {?} */
const EntityHasManyRelationshipType = "HasMany";

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
const EntitySelectorTypes = {
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
class EntityCloner {
    /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    clone(entity, dataService = null) {
        /** @type {?} */
        let entityCtor = entity.constructor;
        return new entityCtor(this.constructorParams(entity), dataService);
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    constructorParams(entity) {
        /** @type {?} */
        let paramNames = [
            'id',
            'feature',
            'type',
            'attributes',
            'relationships',
        ];
        return (/** @type {?} */ (pick(entity, paramNames)));
    }
}
EntityCloner.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectorNameService {
    /**
     * @param {?} inflectionService
     */
    constructor(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} featureConfig
     * @return {?}
     */
    getFeatureSelectorName(featureConfig) {
        return featureConfig.name;
    }
    /**
     * @param {?} entityAdapter
     * @return {?}
     */
    getEntitySelectorName(entityAdapter) {
        return entityAdapter.sliceName;
    }
    /**
     * @param {?} parentName
     * @param {?} selectorName
     * @return {?}
     */
    getNestedSelectorName(parentName, selectorName) {
        /** @type {?} */
        let parentSegments = this.buildSegments(parentName);
        /** @type {?} */
        let selectorNameSegments = this.buildSegments(selectorName, 'select');
        /** @type {?} */
        let segments = flatten([parentSegments, selectorNameSegments]);
        return join(segments, '.');
    }
    /**
     * @param {?} si
     * @return {?}
     */
    getResourceSelectorName(si) {
        return this.selectorIdentifierToSelectorName(si);
    }
    // Alias for getResourceSelectorName
    /**
     * @param {?} si
     * @return {?}
     */
    getSelectorName(si) {
        return this.getResourceSelectorName(si);
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    buildSegments(value, prefix = '') {
        /** @type {?} */
        let camelCase$$1 = bind(this.inflectionService.camelCase, this);
        /** @type {?} */
        let inflections = [
            ['removePrefix', prefix],
            ['replace', / /g, ''],
            ['trim', '.'],
            ['split', '.'],
        ];
        /** @type {?} */
        let result = ((/** @type {?} */ (this.inflectionService))).inflect(value, inflections);
        return map(result, camelCase$$1);
    }
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    sanitizedSelectorName(selectorName) {
        /** @type {?} */
        let prefix = 'select';
        selectorName = this.inflectionService.removePrefix(selectorName, prefix);
        /** @type {?} */
        let camelCase$$1 = (value) => {
            return this.inflectionService.camelCase(value);
        };
        /** @type {?} */
        let segments = map(split(selectorName, '.'), camelCase$$1);
        return segments;
    }
    /**
     * @private
     * @param {?} si
     * @return {?}
     */
    selectorIdentifierToSelectorName(si) {
        /** @type {?} */
        let featureName = this.inflectionService.camelCase(si.feature);
        /** @type {?} */
        let featureEntities = 'entities';
        /** @type {?} */
        let sliceName = this.inflectionService.camelCase(si.entityType);
        /** @type {?} */
        let selectorType = this.inflectionService.camelCase(si.selectorType);
        /** @type {?} */
        let segments = [
            featureName,
            featureEntities,
            sliceName,
            selectorType,
        ];
        if (has(si, 'scope')) {
            /** @type {?} */
            let scopeName = this.inflectionService.camelCase(si.scope);
            segments.push(scopeName);
        }
        return join(segments, '.');
    }
}
SelectorNameService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SelectorNameService.ctorParameters = () => [
    { type: InflectionService }
];
/** @nocollapse */ SelectorNameService.ngInjectableDef = defineInjectable({ factory: function SelectorNameService_Factory() { return new SelectorNameService(inject(InflectionService)); }, token: SelectorNameService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const buildEntitySelectors = (entityAdapter, entityTypeSelector, selectorNameService) => {
    /** @type {?} */
    let buildEntityScopedSelector = (selector, selectorName) => {
        /** @type {?} */
        let entitySelectorName = selectorNameService.getEntitySelectorName(entityAdapter);
        /** @type {?} */
        let entityScopedSelectorName = selectorNameService.getNestedSelectorName(entitySelectorName, selectorName);
        /** @type {?} */
        let featureLevelSelector = createSelector(entityTypeSelector, selector);
        /** @type {?} */
        let selectors = {};
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
const buildSliceSelector = (sliceName) => {
    return (state) => {
        return state[sliceName];
    };
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Get all the Entity Type data for an entity type.
/** @type {?} */
const buildEntityTypeSliceSelector = (entityAdapter) => {
    return buildSliceSelector(entityAdapter.sliceName);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const buildRootSelector = (featureSelector, entitySelector) => {
    /** @type {?} */
    let rootSelectorName = join([featureSelector.name, entitySelector.name], '.');
    /** @type {?} */
    let rootSelector = compose(entitySelector.selector, featureSelector.selector);
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
const buildFeatureSelector = (featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors) => {
    // Feature Selector
    /** @type {?} */
    var featureSelectorName = selectorNameService.getFeatureSelectorName(featureConfig);
    /** @type {?} */
    let featureSelectorFunction = createFeatureSelector(featureSelectorName);
    /** @type {?} */
    let featureSelector = {
        name: featureSelectorName,
        selector: featureSelectorFunction
    };
    selectorService.addSelector(featureSelector);
    // Feature Entities Selector
    /** @type {?} */
    var featureEntitiesSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'entities');
    /** @type {?} */
    let entitiesSelectorFunction = buildSliceSelector('entities');
    /** @type {?} */
    let featureEntitiesSelectorFunction = compose(entitiesSelectorFunction, featureSelector.selector);
    /** @type {?} */
    let featureEntitiesSelector = {
        name: featureEntitiesSelectorName,
        selector: featureEntitiesSelectorFunction
    };
    selectorService.addSelector(featureEntitiesSelector);
    // Feature Config Selector
    /** @type {?} */
    var featureConfigSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'config');
    /** @type {?} */
    let configSelectorFunction = buildSliceSelector('config');
    /** @type {?} */
    let featureConfigSelectorFunction = compose(configSelectorFunction, featureSelector.selector);
    /** @type {?} */
    let featureConfigSelector = {
        name: featureConfigSelectorName,
        selector: featureConfigSelectorFunction
    };
    selectorService.addSelector(featureConfigSelector);
    /** @type {?} */
    let addEntity = (entityAdapter) => {
        /** @type {?} */
        var entityTypeSelector = buildEntityTypeSliceSelector(entityAdapter);
        /** @type {?} */
        let entitySelectors = buildEntitySelectors(entityAdapter, entityTypeSelector, selectorNameService);
        /** @type {?} */
        let buildRootSelectorForEntity = (selector, selectorName) => {
            /** @type {?} */
            let entitySelector = {
                name: selectorName,
                selector: selector
            };
            return buildRootSelector(featureEntitiesSelector, entitySelector);
        };
        /** @type {?} */
        let rootSelectors = map(entitySelectors, buildRootSelectorForEntity);
        /** @type {?} */
        let addSelectors = (selector) => {
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
const buildFilterSelector = (selector, filter$$1) => {
    /** @type {?} */
    let filterState = (state) => {
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
const buildFindSelector = (selector, ri, findPropPath = 'id') => {
    /** @type {?} */
    let find$$1 = (state) => {
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
const selectEntityFeature = createFeatureSelector('entity');
/** @type {?} */
let selectFeatures = (state) => {
    return state.features;
};
/** @type {?} */
let selectPrimaryEntityIdentifier = (state) => {
    return get(state, 'primaryEntity.resourceIdentifier');
};
/** @type {?} */
let selectPrimaryEntity = (state) => {
    return get(state, 'primaryEntity.entity');
};
/** @type {?} */
let selectors = {
    features: selectFeatures,
    primaryEntity: selectPrimaryEntity,
    primaryEntityIdentifier: selectPrimaryEntityIdentifier,
};
/** @type {?} */
let buildFeatureSelector$1 = (selector, name) => {
    return createSelector(selectEntityFeature, selector);
};
/** @type {?} */
const entityFeatureSelectors = mapValues(selectors, buildFeatureSelector$1);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectorService {
    /**
     * @param {?} inflectionService
     * @param {?} store
     * @param {?} selectorNameService
     */
    constructor(inflectionService, store, selectorNameService) {
        this.inflectionService = inflectionService;
        this.store = store;
        this.selectorNameService = selectorNameService;
        this.selectors = {};
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    select$(selectorName) {
        /** @type {?} */
        let selector = this.getSelector(selectorName);
        return this.store.select(selector);
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    select(selectorName) {
        return this.select$(selectorName);
    }
    /**
     * @param {?} si
     * @return {?}
     */
    selectorFromSelectorIdentifier(si) {
        /** @type {?} */
        let selectorName = this.selectorNameService.getResourceSelectorName(si);
        return this.getSelector(selectorName);
    }
    /**
     * @param {?} selectorName
     * @return {?}
     */
    getSelector(selectorName) {
        /** @type {?} */
        let path = this.selectorPath(selectorName);
        return get(this.selectors, path);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    addSelector(selector) {
        /** @type {?} */
        let path = this.selectorPath(selector.name);
        this.log(selector, path, false);
        return set(this.selectors, path, selector.selector);
    }
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    selectorPath(selectorName) {
        /** @type {?} */
        let pathElements = split(selectorName, '.')
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
    }
    /**
     * @private
     * @param {?} selector
     * @param {?} path
     * @param {?=} loggingEnabled
     * @return {?}
     */
    log(selector, path, loggingEnabled = false) {
        if (loggingEnabled) {
            console.log("Registering the selector " + path);
        }
    }
}
SelectorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectorService.ctorParameters = () => [
    { type: InflectionService },
    { type: Store },
    { type: SelectorNameService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectorProvider {
    /**
     * @param {?} selectorService
     * @param {?} store
     */
    constructor(selectorService, store) {
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
    provide(ri, opts = {}) {
        opts = defaults(opts, this.defaultOpts);
        /** @type {?} */
        let selector = this.customSelector(ri, opts) ||
            this.defaultSelector(ri, opts);
        return selector;
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    customSelector(ri, opts = {}) {
        /** @type {?} */
        let feature = this.features[ri.feature];
        if (feature) {
            /** @type {?} */
            let selectorIsValid = (selector) => {
                return selector.isValid(ri);
            };
            /** @type {?} */
            let selector = find(feature.selectors, selectorIsValid);
            if (selector) {
                return (/** @type {?} */ (selector.selector(this.selectorService, ri)));
            }
            else {
                return null;
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    defaultSelector(ri, opts = {}) {
        if (this.isRelationshipResourceRequest(ri)) {
            ri = {
                feature: ri.feature,
                type: ri.relationship.type
            };
        }
        /** @type {?} */
        let si = this.selectorIdentifier(ri, opts);
        /** @type {?} */
        let selector = this.getBaseSelector(si);
        if (this.isFindRequest(ri)) {
            selector = this.findSelector(selector, ri);
        }
        if (this.isFilteredResourceRequest(ri)) {
            selector = this.filterSelector(selector, ri);
        }
        return selector;
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isRelationshipResourceRequest(ri) {
        return has(ri, 'relationship');
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    selectorIdentifier(ri, opts = {}) {
        /** @type {?} */
        let isScoped = this.isScopedResourceIdentifier(ri);
        /** @type {?} */
        var selectorType = isScoped ? 'scope' : opts.selectorType;
        /** @type {?} */
        let si = {
            feature: ri.feature,
            entityType: ri.type,
            selectorType: (/** @type {?} */ (selectorType))
        };
        if (isScoped) {
            si = merge(si, { scope: ri.filter.scope });
        }
        return si;
    }
    /**
     * @private
     * @param {?} selectorIdentifier
     * @return {?}
     */
    getBaseSelector(selectorIdentifier) {
        return this.selectorService
            .selectorFromSelectorIdentifier(selectorIdentifier);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isFindRequest(ri) {
        return !isEmpty(this.findPropPath(ri));
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    findPropPath(ri) {
        /** @type {?} */
        let primaryKeys = this.getPrimaryKeys(ri)
        // Simple case when primary key is 'id'
        ;
        // Simple case when primary key is 'id'
        if (has(ri, 'id') && includes(primaryKeys, 'id')) {
            return 'id';
        }
        // Alternate scenario: when the primary key is
        // mixed in with the filter params
        /** @type {?} */
        let filterKeys = keys(this.getFilterParams(ri));
        /** @type {?} */
        let primaryKey = head(intersection(primaryKeys, filterKeys));
        if (primaryKey) {
            return `filter.${primaryKey}`;
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    findSelector(selector, ri) {
        return buildFindSelector(selector, ri, this.findPropPath(ri));
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isFilteredResourceRequest(ri) {
        return has(ri, 'filter');
    }
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    filterSelector(selector, ri) {
        /** @type {?} */
        let filter$$1 = this.getFilterParams(ri);
        return buildFilterSelector(selector, filter$$1);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isScopedResourceIdentifier(ri) {
        return has(ri, 'filter.scope');
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToFeatures() {
        this.features$ =
            (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
        this.features$
            .subscribe(features => this.features = features);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getFeature(ri) {
        return this.features[ri.feature];
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getFilterParams(ri) {
        return omit(ri.filter, 'scope');
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getPrimaryKeys(ri) {
        /** @type {?} */
        var primaryKeys = ['id'];
        /** @type {?} */
        let feature = this.getFeature(ri);
        /** @type {?} */
        let entityType = feature.entityType(ri.type);
        if (entityType) {
            primaryKeys = entityType.config.primaryKeys || primaryKeys;
        }
        return primaryKeys;
    }
}
SelectorProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectorProvider.ctorParameters = () => [
    { type: SelectorService },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    SelectorNameService,
    SelectorProvider,
    SelectorService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityRelationshipProvider {
    constructor() {
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
    provide$(dataService, entity, relationshipIdentifier, opts = {}) {
        /** @type {?} */
        let relationship = this.relationshipData(entity, relationshipIdentifier);
        if (!relationship) {
            return of((/** @type {?} */ (null)));
        }
        /** @type {?} */
        let relationshipType = this.relationshipType(relationship);
        if (!relationshipType) {
            return of((/** @type {?} */ (null)));
        }
        return this.loadRelationshipData$(dataService, entity, relationship, relationshipType, opts);
    }
    /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} relationship
     * @param {?} relationshipType
     * @param {?=} opts
     * @return {?}
     */
    loadRelationshipData$(dataService, entity, relationship, relationshipType, opts = {}) {
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
                let firstRelationship = relationship[0];
                resourceType = (firstRelationship).type || 'entity';
            }
            prepareRelationship = this.prepareHasMany;
        }
        return this.loadResourceTypeData$(dataService, entity, resourceType, opts).pipe(map$1(entities => prepareRelationship(relationship, entities)));
    }
    /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    prepareHasMany(relationship, entities) {
        /** @type {?} */
        let ids = map(relationship, 'id');
        return entities.where({ id: ids });
    }
    /**
     * @private
     * @param {?} relationship
     * @param {?} entities
     * @return {?}
     */
    prepareHasOne(relationship, entities) {
        return entities.find(((/** @type {?} */ (relationship))).id);
    }
    /**
     * @private
     * @param {?} dataService
     * @param {?} entity
     * @param {?} resourceType
     * @param {?=} opts
     * @return {?}
     */
    loadResourceTypeData$(dataService, entity, resourceType, opts = {}) {
        /** @type {?} */
        let resourceOpts = {
            feature: entity.feature,
            type: resourceType,
        };
        return dataService.get$(resourceOpts, this.buildDataServiceOpts(opts));
    }
    /**
     * @private
     * @param {?=} opts
     * @return {?}
     */
    buildDataServiceOpts(opts = {}) {
        return defaults(opts, this.defaultDataServiceOpts);
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @return {?}
     */
    relationshipData(entity, relationshipIdentifier) {
        if (entity && entity.relationships) {
            /** @type {?} */
            let wrappedData = entity.relationships[relationshipIdentifier];
            if (wrappedData) {
                return wrappedData.data;
            }
            else {
                return null;
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} relationship
     * @return {?}
     */
    relationshipType(relationship) {
        if (has(relationship, 'id')) {
            return EntityHasOneRelationshipType;
        }
        if (relationship instanceof Array) {
            return EntityHasManyRelationshipType;
        }
        return null;
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    defaultRelationResourceType(entity) {
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
    }
}
EntityRelationshipProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ EntityRelationshipProvider.ngInjectableDef = defineInjectable({ factory: function EntityRelationshipProvider_Factory() { return new EntityRelationshipProvider(); }, token: EntityRelationshipProvider, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityTypeProviderService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    provide$(entityData) {
        return this.getFeature$(entityData.feature).pipe(map$1(feature => this.getEntityType(feature, entityData)));
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    getEntityType(feature, entityData) {
        return this.getCustomEntityType(feature, entityData) ||
            feature.baseEntityType;
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    getCustomEntityType(feature, entityData) {
        return feature.entityTypeFromEntityData(entityData);
    }
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    getFeature$(featureName) {
        return this.features$.pipe(map$1(features => features[featureName]));
    }
    // new stuff
    /**
     * @private
     * @return {?}
     */
    get features$() {
        if (!this._features$) {
            this._features$ = this.buildFeatures$();
        }
        return this._features$;
    }
    /**
     * @private
     * @return {?}
     */
    buildFeatures$() {
        /** @type {?} */
        let features = this.store.select(entityFeatureSelectors.features);
        return (/** @type {?} */ (features));
    }
}
EntityTypeProviderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityTypeProviderService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ EntityTypeProviderService.ngInjectableDef = defineInjectable({ factory: function EntityTypeProviderService_Factory() { return new EntityTypeProviderService(inject(Store)); }, token: EntityTypeProviderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityFactory {
    /**
     * @param {?} entityTypeProvider
     * @param {?} relationshipProvider
     */
    constructor(entityTypeProvider, relationshipProvider) {
        this.entityTypeProvider = entityTypeProvider;
        this.relationshipProvider = relationshipProvider;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    build$(entityData) {
        return this.getEntityType$(entityData).pipe(map$1(entityType => new entityType(entityData)));
    }
    /**
     * @private
     * @param {?} entityData
     * @return {?}
     */
    getEntityType$(entityData) {
        return this.entityTypeProvider.provide$(entityData);
    }
}
EntityFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityFactory.ctorParameters = () => [
    { type: EntityTypeProviderService },
    { type: EntityRelationshipProvider }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataService {
    /**
     * @param {?} store
     * @param {?} selectorProvider
     * @param {?} entityRelationshipProvider
     * @param {?} entityCloner
     * @param {?} entityFactory
     */
    constructor(store, selectorProvider, entityRelationshipProvider, entityCloner, entityFactory) {
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
    build$(entityData) {
        return this.entityFactory.build$(entityData).pipe(map$1(entity => (/** @type {?} */ (this.decoratedData(entity)))));
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    create$(ri, opts = {}) {
        /** @type {?} */
        let actionType$$1 = Add;
        return this.executeRequest$(ri, opts, actionType$$1);
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    delete$(ri, opts = {}) {
        /** @type {?} */
        let actionType$$1 = Delete;
        return this.executeRequest$(ri, opts, actionType$$1);
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    get$(ri, opts = {}) {
        /** @type {?} */
        let actionType$$1 = Load;
        return this.executeRequest$(ri, opts, actionType$$1);
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    update$(ri, opts = {}) {
        /** @type {?} */
        let actionType$$1 = Update;
        return this.executeRequest$(ri, opts, actionType$$1);
    }
    /**
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    relationship$(entity, relationshipIdentifier, opts = {}) {
        return this.entityRelationshipProvider.provide$(this, entity, relationshipIdentifier, opts);
    }
    // TODO: deprecate this method
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    get(ri, opts = {}) {
        return this.get$(ri, opts);
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @param {?=} actionType
     * @return {?}
     */
    executeRequest$(ri, opts = {}, actionType$$1) {
        opts = defaults(opts, this.defaultOpts);
        if (this.shouldDispatch(ri, opts)) {
            /** @type {?} */
            let sliceName = this.getSliceName(ri);
            /** @type {?} */
            let action = new actionType$$1(sliceName, ri);
            this.store.dispatch(action);
        }
        /** @type {?} */
        let selector = this.getSelector(ri, opts);
        if (selector) {
            return this.storeData$(selector, opts).pipe(map$1(data => this.decoratedData(data)));
        }
        else {
            return this.noData$();
        }
    }
    /**
     * @private
     * @param {?} selector
     * @param {?=} opts
     * @return {?}
     */
    storeData$(selector, opts = {}) {
        return this.store.select(selector);
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    decoratedData(data) {
        /** @type {?} */
        var buildDecoratedEntity = (entity) => {
            return this.entityCloner.clone(entity, this);
        };
        if (data) {
            if (EntityCollection.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                let clonedEntities = data.map(buildDecoratedEntity);
                /** @type {?} */
                let clonedCollection = new EntityCollection(clonedEntities);
                return (/** @type {?} */ (clonedCollection));
            }
            if (JsonApiEntity.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                let clone$$1 = buildDecoratedEntity((/** @type {?} */ (data)));
                return (/** @type {?} */ (clone$$1));
            }
        }
        return data;
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    getSelector(ri, opts = {}) {
        return this.selectorProvider.provide(ri, opts.selectorOpts);
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    shouldDispatch(ri, opts = {}) {
        return opts.syncWithApi;
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getSliceName(ri) {
        return join([ri.feature, 'entities', ri.type], '.');
    }
    /**
     * @private
     * @return {?}
     */
    noData$() {
        return of([]);
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: Store },
    { type: SelectorProvider },
    { type: EntityRelationshipProvider },
    { type: EntityCloner },
    { type: EntityFactory }
];
/** @nocollapse */ DataService.ngInjectableDef = defineInjectable({ factory: function DataService_Factory() { return new DataService(inject(Store), inject(SelectorProvider), inject(EntityRelationshipProvider), inject(EntityCloner), inject(EntityFactory)); }, token: DataService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeBuilder {
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        return {
            feature: params.feature,
            type: params.type,
            id: params.id,
            attributes: omit(params, ['id', 'feature'])
        };
    }
}
AttributeBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ AttributeBuilder.ngInjectableDef = defineInjectable({ factory: function AttributeBuilder_Factory() { return new AttributeBuilder(); }, token: AttributeBuilder, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JsonApiAttributeBuilder {
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        /** @type {?} */
        let propNames = ['feature', 'type', 'id', 'attributes', 'relationships'];
        return (/** @type {?} */ (pick(params, propNames)));
    }
}
JsonApiAttributeBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ JsonApiAttributeBuilder.ngInjectableDef = defineInjectable({ factory: function JsonApiAttributeBuilder_Factory() { return new JsonApiAttributeBuilder(); }, token: JsonApiAttributeBuilder, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$1 = [
    AttributeBuilder,
    JsonApiAttributeBuilder,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityService {
    /**
     * @param {?} entityFactory
     * @param {?} apiService
     * @param {?} attributeBuilder
     */
    constructor(entityFactory, apiService, attributeBuilder) {
        this.entityFactory = entityFactory;
        this.apiService = apiService;
        this.attributeBuilder = attributeBuilder;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    create$(...args) {
        return this.apiEntityRequest$('create$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    post$(...args) {
        return this.apiEntityRequest$('post$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    delete$(...args) {
        return this.apiEntityRequest$('delete$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    get$(...args) {
        return this.apiEntityRequest$('get$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    update$(...args) {
        return this.apiEntityRequest$('update$', ...args);
    }
    /**
     * @private
     * @param {?} action
     * @param {...?} args
     * @return {?}
     */
    apiEntityRequest$(action, ...args) {
        return this.entityData$(((/** @type {?} */ (this.apiService)))[action](...args));
    }
    /**
     * @private
     * @param {?} apiData$
     * @return {?}
     */
    entityData$(apiData$) {
        return apiData$.pipe(mergeMap(apiResponse => this.buildEntityData$(apiResponse)));
    }
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    buildEntityData$(apiResponse) {
        return this.buildEntities$(apiResponse).pipe(map$1(entities => {
            return {
                data: entities,
                resourceIdentifier: apiResponse.resourceIdentifier,
            };
        }));
    }
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    buildEntities$(apiResponse) {
        /** @type {?} */
        var resourceIdentifier = apiResponse.resourceIdentifier;
        /** @type {?} */
        var apiData = apiResponse.data;
        /** @type {?} */
        var featureName = resourceIdentifier.feature;
        /** @type {?} */
        let buildEntity$ = bind(partial(this.buildEntity$, featureName), this);
        /** @type {?} */
        let observables = map(apiData, buildEntity$);
        return combineLatest(observables);
    }
    /**
     * @private
     * @param {?} featureName
     * @param {?} entityData
     * @return {?}
     */
    buildEntity$(featureName, entityData) {
        /** @type {?} */
        let featureData = {
            feature: featureName
        };
        defaults(entityData, featureData);
        /** @type {?} */
        let data = this.attributeBuilder.build(entityData);
        return this.entityFactory.build$(data);
    }
}
EntityService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityService.ctorParameters = () => [
    { type: EntityFactory },
    { type: ApiService },
    { type: AttributeBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EntityConfigActionTypes = {
    SET_PRIMARY_ENTITY: 'SET_PRIMARY_ENTITY',
};
class SetPrimaryEntity$1 extends PayloadAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice);
        this.slice = slice;
        this.payload = payload;
        this.type = EntityConfigActionTypes.SET_PRIMARY_ENTITY;
    }
}

var actions$1 = /*#__PURE__*/Object.freeze({
    EntityConfigActionTypes: EntityConfigActionTypes,
    SetPrimaryEntity: SetPrimaryEntity$1
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityConfigEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     */
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.init$ = defer(() => { });
    }
}
EntityConfigEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityConfigEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], EntityConfigEffects.prototype, "init$", void 0);

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
const selectAppFeature = createFeatureSelector('app')
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
const ActionTypes = {
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
class AddFeature extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.ADD_FEATURE;
    }
}
class LoadPrimaryEntity extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.LOAD_PRIMARY_ENTITY;
    }
}
class RegisterFeature extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.REGISTER_FEATURE;
    }
}
class SelectPrimaryEntity {
    constructor() {
        this.type = ActionTypes.SELECT_PRIMARY_ENTITY;
    }
}
class SetPrimaryEntity$2 extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.SET_PRIMARY_ENTITY;
    }
}
class SetPrimaryEntityIdentifier extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.SET_PRIMARY_ENTITY_IDENTIFIER;
    }
}

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
class RouteEntityTypeProvider {
    /**
     * @param {?} store
     * @param {?} dataService
     * @param {?} inflectionService
     */
    constructor(store, dataService, inflectionService) {
        this.store = store;
        this.dataService = dataService;
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    handleRouterNavigation$(routerState) {
        return this.features$.pipe(mergeMap(features => this.featureRoutableEntities$(features)), map$1(collection => {
            return this.resourceIdentifierFromRouterState(collection, routerState);
        }));
    }
    /**
     * @private
     * @param {?} collection
     * @param {?} routerState
     * @return {?}
     */
    resourceIdentifierFromRouterState(collection, routerState) {
        /** @type {?} */
        let entityTypeSlug = this.entityTypeSlugFromRouterState(routerState);
        if (entityTypeSlug) {
            /** @type {?} */
            let entity = collection.findByAttr('urlSlug', entityTypeSlug);
            if (entity) {
                /** @type {?} */
                let routerStateOpts = this.resourceIdentifierOptsFromRouterState(entity, routerState);
                return merge({}, entity.resourceIdentifier, routerStateOpts);
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} routerState
     * @return {?}
     */
    resourceIdentifierOptsFromRouterState(entity, routerState) {
        /** @type {?} */
        let params = routerState.params;
        /** @type {?} */
        let ri = (/** @type {?} */ ({}));
        /** @type {?} */
        let isPrimaryKey = (value, prop) => {
            return includes(entity.primaryKeys, prop);
        };
        /** @type {?} */
        let idKey = pickBy(params, isPrimaryKey);
        if (idKey) {
            ri.id = head(values(idKey));
        }
        /** @type {?} */
        let filter$$1 = omit(params, keys(idKey));
        if (!isEmpty(filter$$1)) {
            ri.filter = filter$$1;
        }
        return ri;
    }
    /**
     * @private
     * @param {?} routerState
     * @return {?}
     */
    entityTypeSlugFromRouterState(routerState) {
        /** @type {?} */
        let segments = map(routerState.segments, 'path');
        if (head(segments) == 'app') {
            segments = drop(segments);
        }
        /** @type {?} */
        let params = values(routerState.params);
        /** @type {?} */
        let segmentsWithoutParam = (segments, param) => {
            if (last(segments) == param) {
                return dropRight(segments);
            }
            else {
                return segments;
            }
        };
        /** @type {?} */
        let finalSegments = reduce(params, segmentsWithoutParam, segments);
        return finalSegments[0];
    }
    /**
     * @private
     * @param {?} features
     * @return {?}
     */
    featureRoutableEntities$(features) {
        /** @type {?} */
        let getRoutableEntities = bind(this.getRoutableEntities, this);
        /** @type {?} */
        let routableEntities = map(features, getRoutableEntities);
        return combineLatest(routableEntities).pipe(map$1(routableEntityCollections => {
            /** @type {?} */
            let entities = flatten(map(routableEntityCollections, 'entities'));
            return new EntityCollection(entities);
        }));
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} featureName
     * @return {?}
     */
    getRoutableEntities(feature, featureName) {
        return this.resourceConfigurations$(feature).pipe(map$1(collection => this.routableResourceConfigurations(collection)), map$1(collection => this.buildResourceIdentifiers(feature, collection)));
    }
    /**
     * @private
     * @param {?} collection
     * @return {?}
     */
    routableResourceConfigurations(collection) {
        return collection.where({ isRoutable: true });
    }
    /**
     * @private
     * @param {?} feature
     * @return {?}
     */
    resourceConfigurations$(feature) {
        /** @type {?} */
        let ri = {
            feature: feature.name,
            type: 'resource-configurations',
        };
        /** @type {?} */
        let dataOpts = {
            syncWithApi: false,
        };
        return this.dataService.get$(ri, dataOpts);
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} collection
     * @return {?}
     */
    buildResourceIdentifiers(feature, collection) {
        /** @type {?} */
        let buildResourceIdentifier = (entity) => {
            /** @type {?} */
            let ri = {
                feature: feature.name,
                type: entity.resourceType,
            };
            /** @type {?} */
            let attributes = {
                resourceIdentifier: ri,
                urlSlug: entity.displaySlug,
                primaryKeys: entity.primaryKeys
            };
            /** @type {?} */
            let data = {
                id: entity.id,
                type: 'resource-identifiers',
                attributes: attributes,
            };
            return new JsonApiEntity(data);
        };
        /** @type {?} */
        let entities = map(collection.entities, buildResourceIdentifier);
        return new EntityCollection(entities);
    }
    /**
     * @private
     * @return {?}
     */
    get features$() {
        if (!this._features$) {
            this._features$ = this.getFeatures$();
        }
        return this._features$;
    }
    /**
     * @private
     * @return {?}
     */
    getFeatures$() {
        return (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
    }
}
RouteEntityTypeProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RouteEntityTypeProvider.ctorParameters = () => [
    { type: Store },
    { type: DataService },
    { type: InflectionService }
];
/** @nocollapse */ RouteEntityTypeProvider.ngInjectableDef = defineInjectable({ factory: function RouteEntityTypeProvider_Factory() { return new RouteEntityTypeProvider(inject(Store), inject(DataService), inject(InflectionService)); }, token: RouteEntityTypeProvider, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceIdentifierService {
    /**
     * @param {?} inflectionService
     */
    constructor(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    isValid(ri) {
        return has(ri, 'feature') && has(ri, 'type');
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    isScope(ri) {
        return has(ri, 'filter.scope');
    }
    /**
     * @param {?} riOne
     * @param {?} riTwo
     * @return {?}
     */
    isSameResource(riOne, riTwo) {
        return isEqual(riOne, riTwo);
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    scopeName(ri) {
        /** @type {?} */
        let scopeKey = get(ri, 'filter.scope');
        return this.inflectionService.camelCase(scopeKey);
    }
}
ResourceIdentifierService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ResourceIdentifierService.ctorParameters = () => [
    { type: InflectionService }
];
/** @nocollapse */ ResourceIdentifierService.ngInjectableDef = defineInjectable({ factory: function ResourceIdentifierService_Factory() { return new ResourceIdentifierService(inject(InflectionService)); }, token: ResourceIdentifierService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     * @param {?} dataService
     * @param {?} routeEntityTypeProvider
     * @param {?} resourceIdentifierService
     * @param {?} selectorProvider
     */
    constructor(store, actions$, dataService, routeEntityTypeProvider, resourceIdentifierService, selectorProvider) {
        this.store = store;
        this.actions$ = actions$;
        this.dataService = dataService;
        this.routeEntityTypeProvider = routeEntityTypeProvider;
        this.resourceIdentifierService = resourceIdentifierService;
        this.selectorProvider = selectorProvider;
        this.handleRouterNavigation$ = this.actions$
            .pipe(ofType(ROUTER_NAVIGATION), mergeMap((action) => {
            return this.routeEntityTypeProvider
                .handleRouterNavigation$(action.payload.routerState);
        }), distinctUntilChanged(this.resourceIdentifierService.isSameResource), tap((payload) => {
            if (this.resourceIdentifierService.isValid(payload)) {
                this.dataService.get$(payload);
            }
        }), map$1((payload) => {
            return new SetPrimaryEntityIdentifier(payload);
        }));
        this.registerFeature$ = this.actions$
            .pipe(ofType('[EntityFeature] REGISTER_FEATURE'), map$1((action) => {
            /** @type {?} */
            let feature = action.payload;
            /** @type {?} */
            let addFeatureAction = new AddFeature(feature);
            return addFeatureAction;
        }));
        this.loadPrimaryEntity$ = this.actions$
            .pipe(ofType('[EntityFeature] LOAD_PRIMARY_ENTITY'), mergeMap((action) => {
            return this.dataService.get$(action.payload);
        }));
        this.selectPrimaryEntity$ = this.actions$
            .pipe(ofType('[EntityFeature] SELECT_PRIMARY_ENTITY'), mergeMap((action) => {
            return this.store.select(entityFeatureSelectors.primaryEntityIdentifier);
        }), distinctUntilChanged(this.resourceIdentifierService.isSameResource), mergeMap((payload) => {
            if (isNil(payload)) {
                return of(null);
            }
            else {
                /** @type {?} */
                let selector = this.selectorProvider.provide(payload);
                return this.store.select((/** @type {?} */ (selector)));
            }
        }), map$1((payload) => {
            return new SetPrimaryEntity$2(payload);
        }));
        this.init$ = defer(() => {
            return of(new SelectPrimaryEntity());
        });
    }
}
FeatureEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FeatureEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions },
    { type: DataService },
    { type: RouteEntityTypeProvider },
    { type: ResourceIdentifierService },
    { type: SelectorProvider }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const featureInitialState = {
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
            let existingFeatures = state.features;
            /** @type {?} */
            let newFeature = action.payload;
            /** @type {?} */
            let featuresDelta = {};
            featuresDelta[newFeature.name] = newFeature;
            /** @type {?} */
            let newFeatures = Object.assign({}, existingFeatures, featuresDelta);
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
const effects = [
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
const FEATURE_CONFIG = new InjectionToken("Entity Feature Config");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     * @param {?} entityService
     * @param {?} featureConfig
     * @param {?} resourceIdentifierService
     */
    constructor(store, actions$, entityService, featureConfig, resourceIdentifierService) {
        this.store = store;
        this.actions$ = actions$;
        this.entityService = entityService;
        this.featureConfig = featureConfig;
        this.resourceIdentifierService = resourceIdentifierService;
        this.featureName = 'Feature';
        this.init$ = this.actions$
            .pipe(ofType(this.featureAction("INIT")), switchMap((action) => {
            /** @type {?} */
            let registerFeatureAction = new RegisterFeature(this.featureConfig);
            /** @type {?} */
            let loadSeedAction = new LoadSeedData(this.featureName, this.featureConfig);
            return [registerFeatureAction, loadSeedAction];
        }));
        this.seed$ = this.actions$
            .pipe(ofType(this.featureAction("LOAD_SEED_DATA")), switchMap((action) => {
            /** @type {?} */
            var feature = action.payload;
            /** @type {?} */
            let seeds = action.payload.seedEntities;
            /** @type {?} */
            let buildLoadAction = (ri) => {
                /** @type {?} */
                let sliceName = this.getFeatureEntitySlice(feature.name, ri.type);
                return new Load(sliceName, ri);
            };
            return map(seeds, buildLoadAction);
        }));
        this.load$ = this.actions$
            .pipe(ofType(...this.sliceActions("LOAD")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.get$(resourceOpts);
        }), map$1((payload) => {
            return new AsyncSuccess(this.featureName, payload);
        }));
        this.add$ = this.actions$
            .pipe(ofType(...this.sliceActions("ADD")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.create$(resourceOpts);
        }), map$1((payload) => {
            return new AsyncSuccess(this.featureName, payload);
        }));
        this.update$ = this.actions$
            .pipe(ofType(...this.sliceActions("UPDATE")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.update$(resourceOpts);
        }), map$1((payload) => {
            return new AsyncSuccess(this.featureName, payload);
        }));
        this.asyncSuccess$ = this.actions$
            .pipe(ofType(this.featureAction("ASYNC_SUCCESS")), map$1((action) => {
            return {
                resourceIdentifier: action.payload.resourceIdentifier,
                data: this.groupedEntities(action.payload),
            };
        }), switchMap((payload) => {
            return this.buildAddToStoreActions(payload);
        }));
        this.delete$ = this.actions$
            .pipe(ofType(...this.sliceActions("DELETE")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.delete$(resourceOpts);
        }), map$1((payload) => {
            return new DeleteSuccess(this.getEntitySlice(payload.resourceIdentifier.type), payload.data);
        }));
        this.loadApplicationResource$ = this.actions$
            .pipe(ofType('[ApplicationConfig] LOAD_RESOURCE_BY_ID'), mergeMap(() => {
            return this.store.select(applicationConfigSelectors.resourceById);
        }), filter$1((payload) => this.isValidPayload(payload)), mergeMap((payload) => {
            return this.entityService.get$(payload);
        }), filter$1((payload) => this.isValidResource(payload)), map$1((payload) => {
            return new ApplicationConfigActions.SetPrimaryEntity(payload);
        }));
        this.featureName = featureConfig.name;
    }
    /**
     * @return {?}
     */
    ngrxOnIdentifyEffects() {
        return this.featureName;
    }
    /**
     * @return {?}
     */
    ngrxOnInitEffects() {
        /** @type {?} */
        let initFeatureAction = new Init(this.featureName, this.featureConfig);
        return initFeatureAction;
    }
    // Private methods
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddToStoreActions(payload) {
        /** @type {?} */
        let actions$$1 = [];
        /** @type {?} */
        let addActions = map(payload.data, bind(this.buildAddEntitiesAction, this));
        actions$$1 = actions$$1.concat(addActions);
        if (this.resourceIdentifierService.isScope(payload.resourceIdentifier)) {
            /** @type {?} */
            let scopeAction = this.buildAddScopeEntitiesAction(payload);
            actions$$1 = actions$$1.concat([scopeAction]);
        }
        return flatten(actions$$1);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddEntitiesAction(payload) {
        return new AddStoreEntities(this.getEntitySlice(payload.sliceName), payload.entities);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddScopeEntitiesAction(payload) {
        /** @type {?} */
        let ri = payload.resourceIdentifier;
        /** @type {?} */
        let scopeName = this.resourceIdentifierService.scopeName(ri);
        /** @type {?} */
        var sliceName = ri.type;
        /** @type {?} */
        let hasEntityType = (payload) => {
            return payload.sliceName == sliceName;
        };
        /** @type {?} */
        let sliceNamePayload = find(payload.data, hasEntityType);
        /** @type {?} */
        let entities = sliceNamePayload.entities;
        /** @type {?} */
        let actionPayload = {
            scope: scopeName,
            entities: entities
        };
        return new SetScopeEntities(this.getEntitySlice(sliceName), actionPayload);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    groupedEntities(payload) {
        /** @type {?} */
        let entities = payload.data;
        /** @type {?} */
        let groupedBySlice = (entityTypeMap, entity) => {
            /** @type {?} */
            let sliceName = entity.constructor.sliceName;
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
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isValidPayload(payload) {
        //TODO: @Deepak  - it should ensure the payload is for THIS feature
        return has(payload, 'feature') &&
            has(payload, 'type') &&
            has(payload, 'id');
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isValidResource(payload) {
        return payload;
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    buildResourceOpts(action) {
        /** @type {?} */
        let ri = {
            type: last(split(action.slice, "."))
        };
        ri = merge({}, ri, action.payload);
        return {
            payload: action.payload,
            type: last(split(action.slice, ".")),
            data: action.payload.data,
            resourceIdentifier: ri,
        };
    }
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    featureAction(actionName) {
        /** @type {?} */
        let featureName = this.featureConfig.name;
        return typeFor(featureName, actions[actionName]);
    }
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    sliceActions(actionName) {
        /** @type {?} */
        let buildActionType = (sliceName) => {
            return typeFor(sliceName, actions[actionName]);
        };
        /** @type {?} */
        let sliceActions$$1 = map(this.featureConfig.sliceNames, buildActionType);
        return sliceActions$$1;
    }
    /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    getSliceName(resourceOpts) {
        return join([resourceOpts.feature, 'entities', resourceOpts.type], '.');
    }
    /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    getEntitySlice(sliceName) {
        return this.getFeatureEntitySlice(this.featureName, sliceName);
    }
    /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    getFeatureEntitySlice(featureName, sliceName) {
        return join([featureName, 'entities', sliceName], '.');
    }
}
EntityEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions },
    { type: EntityService },
    { type: undefined, decorators: [{ type: Inject, args: [FEATURE_CONFIG,] }] },
    { type: ResourceIdentifierService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const entityServices = [
    DataService,
    EntityCloner,
    EntityEffects,
    EntityFactory,
    EntityRelationshipProvider,
    EntityService,
    EntityTypeProviderService,
    ResourceIdentifierService,
    RouteEntityTypeProvider,
    DataService,
    ...services$1,
    ...services,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const buildEntityEffects = (store, actions, entityService, featureConfig, resourceIdentifierService) => {
    return new EntityEffects(store, actions, entityService, featureConfig, resourceIdentifierService);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let buildEntityConfig = (apiConfig, defaultEntityConfigClass, params) => {
    /** @type {?} */
    let configClass = get(params, 'entityConfigClass', defaultEntityConfigClass);
    /** @type {?} */
    let configParams = merge(omit(params, ['entityConfigClass']), { apiConfig: apiConfig });
    return new configClass(configParams);
};
/** @type {?} */
const buildEntityConfigs = (entityConfigParams, apiConfig, defaultEntityConfigClass) => {
    /** @type {?} */
    let build = partial(buildEntityConfig, apiConfig, defaultEntityConfigClass);
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
    let createInitialStateForEntityType = (name) => {
        /** @type {?} */
        let prop = {};
        /** @type {?} */
        let initialState = createEntityAdapter().getInitialState();
        /** @type {?} */
        let customInitialState = {
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
    let sliceName = entityType.sliceName;
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
const buildEntityTypeProvider = (featureConfig) => {
    return new EntityTypeProviderService(featureConfig);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let buildEntityTypeClass = (entityConfig, baseEntity) => {
    class Entity extends baseEntity {
    }
    Entity._sliceName = entityConfig.name;
    Entity.config = entityConfig;
    return Entity;
};
/**
 * @param {?} entityConfigs
 * @param {?} baseEntity
 * @return {?}
 */
function buildEntityTypes(entityConfigs, baseEntity) {
    /** @type {?} */
    let addEntityType = (entityTypes, entityConfig) => {
        /** @type {?} */
        let className = classify(entityConfig.name);
        /** @type {?} */
        let entityTypeClass = buildEntityTypeClass(entityConfig, baseEntity);
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
    let featureConfig = new FeatureConfig(config);
    /** @type {?} */
    let entityTypes = featureConfig.entityTypes;
    /** @type {?} */
    let entityStates = reduce(map(entityTypes, buildEntityInitialState), merge, {});
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
    let factory = new EntityAdapterFactory(featureConfig);
    /** @type {?} */
    let entityAdapters = factory.adapters;
    buildFeatureSelector(featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors);
    /** @type {?} */
    var featureEntitiesReducerPrefix = join([featureConfig.name, 'entities'], '.');
    /** @type {?} */
    var entityReducers = reduce(map(entityAdapters, buildEntityReducer), merge, {})
    // @Luis: action should not be any
    ;
    // @Luis: action should not be any
    /** @type {?} */
    let featureEntitiesReducer = (state, action) => {
        /** @type {?} */
        let sliceName = action.slice;
        if (startsWith(sliceName, featureEntitiesReducerPrefix)) {
            /** @type {?} */
            let entitySliceName = last(split(sliceName, '.'));
            /** @type {?} */
            let stateDelta = {};
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
    let reducers = {
        config: entityConfigReducer,
        entities: featureEntitiesReducer,
    };
    return combineReducers(reducers);
}
/** @type {?} */
let buildEntityReducer = (entityTypeAdapter) => {
    /** @type {?} */
    let reducer = {};
    /** @type {?} */
    let key = entityTypeAdapter.sliceName;
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
let featureConfig = {
    name: 'Default Feature',
    entityConfigs: [],
    baseEntityType: JsonApiEntity,
};
const ɵ0$5 = featureConfig;
/** @type {?} */
let featureConfigProvider = {
    provide: FEATURE_CONFIG,
    useValue: ɵ0$5,
    multi: true,
};
/** @type {?} */
const providers = [
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
class EntityModule {
}
EntityModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('entity', featureReducer, {
                        initialState: featureInitialState,
                    }),
                    EffectsModule.forFeature([
                        ...effects,
                    ]),
                ],
                declarations: [],
                providers: [
                    ...entityServices,
                    ...providers,
                ]
            },] }
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
class EntityFormManager {
    /**
     * @param {?} entity$
     * @param {?} form$
     */
    constructor(entity$, form$) {
        this.entity$ = entity$;
        this.form$ = form$;
    }
    /**
     * @param {?} entity$
     * @return {?}
     */
    set entity$(entity$) {
        this._entity$ = entity$;
        entity$.subscribe(entity => this.entity = entity);
    }
    /**
     * @return {?}
     */
    get entity$() {
        return this._entity$;
    }
    /**
     * @param {?} form$
     * @return {?}
     */
    set form$(form$) {
        this._form$ = form$;
        form$.subscribe(form => this.form = form);
    }
    /**
     * @return {?}
     */
    get form$() {
        return this._form$;
    }
    /**
     * @return {?}
     */
    get entity() {
        return this._entity;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    set entity(entity) {
        this._entity = entity;
    }
    /**
     * @return {?}
     */
    get form() {
        return this._form;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    set form(form) {
        this._form = form;
    }
    /**
     * @return {?}
     */
    formToEntity() {
        this.entity.updateAttributes(this.form.value);
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
class FormEntity extends JsonApiEntity {
}
FormEntity.relationshipNames = [
    'form-fields',
];
//buildEntityRelationshipProperties(FormEntity)
/** @type {?} */
let buildEntityRelationship$1 = (name) => {
    defineEntityRelationshipGetSet(FormEntity, name);
};
map(FormEntity.relationshipNames, buildEntityRelationship$1);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormFieldEntity extends JsonApiEntity {
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
class DropdownOptionsFactory {
    /**
     * @param {?} data$
     * @param {?} entityKey
     * @return {?}
     */
    build(data$, entityKey) {
        /** @type {?} */
        var dropdownData$ = data$.pipe(map$1(entityCollection => {
            /** @type {?} */
            var getOptions = (entity) => {
                return this.getOptions(entityKey, entity);
            };
            return map(entityCollection.entities, getOptions);
        }));
        return dropdownData$;
    }
    /**
     * @param {?} key
     * @param {?} entity
     * @return {?}
     */
    getOptions(key, entity) {
        return {
            key: entity.id,
            value: entity.attributes[key]
        };
    }
}
DropdownOptionsFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DropdownOptionsFactory.ngInjectableDef = defineInjectable({ factory: function DropdownOptionsFactory_Factory() { return new DropdownOptionsFactory(); }, token: DropdownOptionsFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const resourceList = [
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
class DropdownFactory {
    /**
     * @param {?} dataService
     * @param {?} optionsFactory
     */
    constructor(dataService, optionsFactory) {
        this.dataService = dataService;
        this.optionsFactory = optionsFactory;
    }
    /**
     * @param {?} resolvable
     * @return {?}
     */
    build(resolvable) {
        /** @type {?} */
        var entityKey = 'name';
        /** @type {?} */
        var name = pluralize(resolvable.name.replace('_id', ''));
        /** @type {?} */
        let resource = resourceList.filter(item => item.key === name);
        if (resource.length > 0) {
            entityKey = resource[0].value;
            this.selectorData$ = this.getSelectors$(resource[0].name);
        }
        else {
            this.selectorData$ = this.getSelectors$(name);
        }
        return this.optionsFactory.build(this.selectorData$, entityKey);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getSelectors$(type) {
        /** @type {?} */
        let resourceOpts = {
            feature: "app",
            type: type
        };
        return this.dataService.get$(resourceOpts);
    }
}
DropdownFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DropdownFactory.ctorParameters = () => [
    { type: DataService },
    { type: DropdownOptionsFactory }
];
/** @nocollapse */ DropdownFactory.ngInjectableDef = defineInjectable({ factory: function DropdownFactory_Factory() { return new DropdownFactory(inject(DataService), inject(DropdownOptionsFactory)); }, token: DropdownFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormControlDataFactory {
    /**
     * @param {?} selectFactory
     */
    constructor(selectFactory) {
        this.selectFactory = selectFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    build(entity) {
        return {
            type: FormControlDataFactory.formMemberType,
            data: {
                label: this.labelParams(entity),
                control: this.controlParams(entity)
            }
        };
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    labelParams(entity) {
        return {
            text: entity.displayName,
        };
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    controlParams(entity) {
        /** @type {?} */
        let params = {
            controlType: this.controlType(entity),
            placeholder: entity.displayName,
            key: entity.name,
            validators: this.buildEntityValidators(entity),
            displayName: entity.displayName,
        };
        /** @type {?} */
        let controlTypeParams = this.controlTypeData(entity, this.controlType(entity));
        return defaults(params, controlTypeParams);
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    controlType(entity) {
        if (entity.name.includes("_id")) {
            return (/** @type {?} */ ('select'));
        }
        if (entity.dataType == 'boolean') {
            return (/** @type {?} */ ('checkbox'));
        }
        return FormControlDataFactory.defaultControlType;
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} controlType
     * @return {?}
     */
    controlTypeData(entity, controlType) {
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
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    selectControlTypeData(entity) {
        return {
            options: this.selectFactory.build(entity)
        };
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    inputControlTypeData(entity) {
        return {
            required: true,
            inputType: this.inputType(entity),
        };
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    inputType(entity) {
        /** @type {?} */
        var inputType = 'text';
        if (entity.name == 'email') {
            inputType = 'email';
        }
        if (entity.name == 'password') {
            inputType = 'password';
        }
        return (/** @type {?} */ (inputType));
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    buildEntityValidators(entity) {
        /** @type {?} */
        let validators = [Validators.required];
        if (entity.name == 'email') {
            validators.push(Validators.email);
        }
        return validators;
    }
}
FormControlDataFactory.defaultControlType = 'input';
FormControlDataFactory.formMemberType = 'form-item';
FormControlDataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormControlDataFactory.ctorParameters = () => [
    { type: DropdownFactory }
];
/** @nocollapse */ FormControlDataFactory.ngInjectableDef = defineInjectable({ factory: function FormControlDataFactory_Factory() { return new FormControlDataFactory(inject(DropdownFactory)); }, token: FormControlDataFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormControlValidatorFactory {
    /**
     * @param {?} resolvable
     * @return {?}
     */
    build(resolvable) {
        return {
            type: 'form-item',
            data: {
                control: {
                    validators: [Validators.required],
                }
            }
        };
    }
}
FormControlValidatorFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ FormControlValidatorFactory.ngInjectableDef = defineInjectable({ factory: function FormControlValidatorFactory_Factory() { return new FormControlValidatorFactory(); }, token: FormControlValidatorFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormGroupDataFactory {
    /**
     * @param {?} entity
     * @return {?}
     */
    build(entity) {
        /** @type {?} */
        let resourceType = this.pluralizeType(entity);
        return {
            memberType: 'form-group',
            key: this.inputKey(entity),
            resourceType: resourceType,
            formName: this.buildFormName(resourceType)
        };
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    pluralizeType(entity) {
        return pluralize(snakeCase(entity.className));
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    inputKey(entity) {
        return `${entity.name}_attributes`;
    }
    /**
     * @private
     * @param {?} resourceType
     * @param {?=} formType
     * @return {?}
     */
    buildFormName(resourceType, formType = 'edit') {
        return `${resourceType}.${formType}`;
    }
}
FormGroupDataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ FormGroupDataFactory.ngInjectableDef = defineInjectable({ factory: function FormGroupDataFactory_Factory() { return new FormGroupDataFactory(); }, token: FormGroupDataFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormItemDataFactory {
    /**
     * @param {?} formControlDataFactory
     * @param {?} formControlValidatorFactory
     */
    constructor(formControlDataFactory, formControlValidatorFactory) {
        this.formControlDataFactory = formControlDataFactory;
        this.formControlValidatorFactory = formControlValidatorFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    build(entity) {
        /** @type {?} */
        let factory = this.resolveParamsFactory(entity);
        return factory.build(entity);
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    resolveParamsFactory(entity) {
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
    }
}
FormItemDataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormItemDataFactory.ctorParameters = () => [
    { type: FormControlDataFactory },
    { type: FormControlValidatorFactory }
];
/** @nocollapse */ FormItemDataFactory.ngInjectableDef = defineInjectable({ factory: function FormItemDataFactory_Factory() { return new FormItemDataFactory(inject(FormControlDataFactory), inject(FormControlValidatorFactory)); }, token: FormItemDataFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataFactoryResolver {
    /**
     * @param {?} formGroupDataFactory
     * @param {?} formItemDataFactory
     */
    constructor(formGroupDataFactory, formItemDataFactory) {
        this.formGroupDataFactory = formGroupDataFactory;
        this.formItemDataFactory = formItemDataFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    resolve(entity) {
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
    }
}
DataFactoryResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataFactoryResolver.ctorParameters = () => [
    { type: FormGroupDataFactory },
    { type: FormItemDataFactory }
];
/** @nocollapse */ DataFactoryResolver.ngInjectableDef = defineInjectable({ factory: function DataFactoryResolver_Factory() { return new DataFactoryResolver(inject(FormGroupDataFactory), inject(FormItemDataFactory)); }, token: DataFactoryResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataFactory {
    /**
     * @param {?} dataFactoryResolver
     */
    constructor(dataFactoryResolver) {
        this.dataFactoryResolver = dataFactoryResolver;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    build(entity) {
        /** @type {?} */
        let factory = this.resolveDataFactory(entity);
        return (/** @type {?} */ (factory.build(entity)));
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    resolveDataFactory(entity) {
        return this.dataFactoryResolver.resolve(entity);
    }
}
DataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataFactory.ctorParameters = () => [
    { type: DataFactoryResolver }
];
/** @nocollapse */ DataFactory.ngInjectableDef = defineInjectable({ factory: function DataFactory_Factory() { return new DataFactory(inject(DataFactoryResolver)); }, token: DataFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RelationshipProvider {
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipName
     * @return {?}
     */
    provide$(resourceConfiguration, formFieldEntity, relationshipName) {
        return resourceConfiguration.relationship$(relationshipName).pipe(filter$1((collection) => {
            return this.relationshipFullyLoaded(resourceConfiguration, relationshipName, collection);
        }), map$1((collection) => {
            return collection.invokeFilter('isForAttribute', formFieldEntity.inputName);
        }));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} relationshipName
     * @param {?} collection
     * @return {?}
     */
    relationshipFullyLoaded(resourceConfiguration, relationshipName, collection) {
        /** @type {?} */
        let relationshipSize = resourceConfiguration.relationshipSize(relationshipName);
        return collection.length == relationshipSize;
    }
}
RelationshipProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ RelationshipProvider.ngInjectableDef = defineInjectable({ factory: function RelationshipProvider_Factory() { return new RelationshipProvider(); }, token: RelationshipProvider, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RelationshipsProvider {
    /**
     * @param {?} relationshipProvider
     */
    constructor(relationshipProvider) {
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
    provide$(resourceConfiguration, formFieldEntity) {
        /** @type {?} */
        let provideRelationships$ = bind(partial(this.provideRelationship$, resourceConfiguration, formFieldEntity), this);
        /** @type {?} */
        let relationships = map(this.relationshipTypes, provideRelationships$);
        return zip(...relationships).pipe(map$1(relationshipCollections => {
            return flatMap(relationshipCollections, 'entities');
        }));
    }
    /**
     * @private
     * @param {?} collections
     * @return {?}
     */
    flattenedRelationships(collections) {
        return flatMap((/** @type {?} */ (pick(collections, 'entities'))));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipType
     * @return {?}
     */
    provideRelationship$(resourceConfiguration, formFieldEntity, relationshipType) {
        return this.relationshipProvider.provide$(resourceConfiguration, formFieldEntity, relationshipType);
    }
}
RelationshipsProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RelationshipsProvider.ctorParameters = () => [
    { type: RelationshipProvider }
];
/** @nocollapse */ RelationshipsProvider.ngInjectableDef = defineInjectable({ factory: function RelationshipsProvider_Factory() { return new RelationshipsProvider(inject(RelationshipProvider)); }, token: RelationshipsProvider, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormMemberFactoryParamsService {
    /**
     * @param {?} relationshipsProvider
     * @param {?} relationshipDataFactory
     */
    constructor(relationshipsProvider, relationshipDataFactory) {
        this.relationshipsProvider = relationshipsProvider;
        this.relationshipDataFactory = relationshipDataFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    provide$(resourceConfiguration, formFieldEntity) {
        return this.relationships$(resourceConfiguration, formFieldEntity).pipe(map$1(relationships => {
            return this.buildParams(relationships, formFieldEntity);
        }));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    relationships$(resourceConfiguration, formFieldEntity) {
        return this.relationshipsProvider.provide$(resourceConfiguration, formFieldEntity);
    }
    /**
     * @private
     * @param {?} entities
     * @param {?} formFieldEntity
     * @return {?}
     */
    buildParams(entities, formFieldEntity) {
        /** @type {?} */
        let buildEntityFormMemberParams = bind(this.buildEntityFormMemberParams, this);
        /** @type {?} */
        let entitiesParams = map(entities, buildEntityFormMemberParams);
        /** @type {?} */
        let params = merge({}, ...entitiesParams);
        return (/** @type {?} */ (params));
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    buildEntityFormMemberParams(entity) {
        return this.relationshipDataFactory.build(entity);
    }
}
FormMemberFactoryParamsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormMemberFactoryParamsService.ctorParameters = () => [
    { type: RelationshipsProvider },
    { type: DataFactory }
];
/** @nocollapse */ FormMemberFactoryParamsService.ngInjectableDef = defineInjectable({ factory: function FormMemberFactoryParamsService_Factory() { return new FormMemberFactoryParamsService(inject(RelationshipsProvider), inject(DataFactory)); }, token: FormMemberFactoryParamsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormFactory$1 {
    /**
     * @param {?} formMemberFactory
     * @param {?} formMemberFactoryParamsService
     * @param {?} formFactory
     */
    constructor(formMemberFactory, formMemberFactoryParamsService, formFactory) {
        this.formMemberFactory = formMemberFactory;
        this.formMemberFactoryParamsService = formMemberFactoryParamsService;
        this.formFactory = formFactory;
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @return {?}
     */
    build$(resourceConfiguration, form) {
        return this.buildFormGroup$(resourceConfiguration, form, null);
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} form
     * @param {?} resourceType
     * @return {?}
     */
    buildFormGroup$(resourceConfiguration, form, resourceType) {
        return (/** @type {?} */ (form.formFields$.pipe(mergeMap(formFields => {
            return this.buildFormMembersParams$(resourceConfiguration, formFields);
        }), map$1((params) => {
            return this.buildFormMembers(params);
        }), map$1((formMembers) => {
            return this.buildForm(formMembers, resourceType);
        }))));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFields
     * @return {?}
     */
    buildFormMembersParams$(resourceConfiguration, formFields) {
        /** @type {?} */
        let buildFormMemberParams$ = partial(bind(this.buildFormMemberParams$, this), resourceConfiguration);
        /** @type {?} */
        let formMemberParams$ = map(formFields.entities, buildFormMemberParams$);
        return combineLatest(...formMemberParams$).pipe(map$1(formMembersParams => {
            /** @type {?} */
            let mergedParams = merge({}, ...formMembersParams);
            return (/** @type {?} */ (mergedParams));
        }));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    buildFormMemberParams$(resourceConfiguration, formFieldEntity) {
        return this.formMemberFactoryParamsService.provide$(resourceConfiguration, formFieldEntity).pipe(map$1((params) => {
            /** @type {?} */
            let pair = [formFieldEntity.inputName, params];
            return (/** @type {?} */ (fromPairs([pair])));
        }));
    }
    /**
     * @private
     * @param {?} paramsSet
     * @return {?}
     */
    buildFormMembers(paramsSet) {
        /** @type {?} */
        let buildFormMember = (params) => {
            return this.formMemberFactory.build(params);
        };
        /** @type {?} */
        let formMembers = mapValues(paramsSet, buildFormMember);
        return formMembers;
    }
    /**
     * @private
     * @param {?} formMembers
     * @param {?} resourceType
     * @return {?}
     */
    buildForm(formMembers, resourceType) {
        /** @type {?} */
        var formParams;
        if (resourceType) {
            /** @type {?} */
            let pair = [resourceType, formMembers];
            formParams = fromPairs([pair]);
        }
        else {
            formParams = formMembers;
        }
        return this.formFactory.build(formParams);
    }
}
FormFactory$1.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormFactory$1.ctorParameters = () => [
    { type: FormMemberFactory },
    { type: FormMemberFactoryParamsService },
    { type: FormFactory }
];
/** @nocollapse */ FormFactory$1.ngInjectableDef = defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory$1(inject(FormMemberFactory), inject(FormMemberFactoryParamsService), inject(FormFactory)); }, token: FormFactory$1, providedIn: "root" });

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
class EntityFormFactory {
    /**
     * @param {?} resourceConfigurationFormFactory
     * @param {?} dataService
     */
    constructor(resourceConfigurationFormFactory, dataService) {
        this.resourceConfigurationFormFactory = resourceConfigurationFormFactory;
        this.dataService = dataService;
    }
    /**
     * @param {?} entity
     * @param {?} opts
     * @return {?}
     */
    build$(entity, opts) {
        /** @type {?} */
        let data$ = combineLatest(this.resourceConfiguration$(entity), this.form$(entity, opts.formName));
        return (/** @type {?} */ (data$.pipe(mergeMap(([rc, form]) => {
            return this.resourceConfigurationFormFactory.build$((/** @type {?} */ (rc)), (/** @type {?} */ (form)));
        }))));
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    form$(entity, formName) {
        /** @type {?} */
        let opts = {
            feature: entity.feature,
            type: 'forms',
            id: formName,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    resourceConfiguration$(entity) {
        /** @type {?} */
        let opts = {
            feature: entity.feature,
            type: 'resource-configurations',
            id: entity.type,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    }
    /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    loadData$(opts) {
        return this.dataService.get$(opts).pipe(filter$1(entityType => !isNil(entityType)));
    }
}
EntityFormFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityFormFactory.ctorParameters = () => [
    { type: FormFactory$1 },
    { type: DataService }
];
/** @nocollapse */ EntityFormFactory.ngInjectableDef = defineInjectable({ factory: function EntityFormFactory_Factory() { return new EntityFormFactory(inject(FormFactory$1), inject(DataService)); }, token: EntityFormFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityFormManagerFactory {
    /**
     * @param {?} formFactory
     */
    constructor(formFactory) {
        this.formFactory = formFactory;
    }
    /**
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    build(entity$, formName) {
        /** @type {?} */
        let form$ = (/** @type {?} */ (this.buildForm$(entity$, formName).pipe(shareReplay(1))));
        return new EntityFormManager(entity$, form$);
    }
    /**
     * @private
     * @param {?} entity$
     * @param {?} formName
     * @return {?}
     */
    buildForm$(entity$, formName) {
        return (/** @type {?} */ (entity$.pipe(shareReplay(1), mergeMap(entity => this.buildForm(entity, formName)))));
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    buildForm(entity, formName) {
        /** @type {?} */
        let opts = {
            formName: formName
        };
        return this.formFactory.build$(entity, opts);
    }
}
EntityFormManagerFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityFormManagerFactory.ctorParameters = () => [
    { type: EntityFormFactory }
];
/** @nocollapse */ EntityFormManagerFactory.ngInjectableDef = defineInjectable({ factory: function EntityFormManagerFactory_Factory() { return new EntityFormManagerFactory(inject(EntityFormFactory)); }, token: EntityFormManagerFactory, providedIn: "root" });

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
const services$2 = [
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
const services$3 = [
    FormMemberFactoryParamsService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$4 = [
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
const services$5 = [
    FormFactory$1,
    ...services$2,
    ...services$3,
    ...services$4,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$6 = [
    ...services$5,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$7 = [
    EntityFormFactory,
    EntityFormManagerFactory,
    ...services$6,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CeoEntityFormsModule {
}
CeoEntityFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CeoFormsModule,
                ],
                declarations: [],
                providers: [
                    ...services$7,
                ]
            },] }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { entity_actionClasses as EntityActions, EntityAction, actions as EntityActionsMap, EntityAdapter, EntityAdapterFactory, EntityTypeFactory, EntityCollection, EntityConfig, EntityEffectsConfig, actionType, addMany, addOne, removeMany, removeOne, setScopeIds, updateMany, updateOne, entityReducer, JsonApiEntity, ResourceAssociationEntity, ResourceAttributeEntity, ResourceConfigurationEntity, ResourceValidatorEntity, FeatureConfig, EntityHasOneRelationshipType, EntityHasManyRelationshipType, EntitySelectorTypes, entityServices, DataService, EntityCloner, DataService as EntityDataService, EntityEffects, EntityFactory, EntityService, EntityRelationshipProvider, EntityTypeProviderService, ResourceIdentifierService, RouteEntityTypeProvider, AttributeBuilder as EntityAttributeBuilder, JsonApiAttributeBuilder as JsonApiEntityAttributeBuilder, SelectorNameService as EntitySelectorNameService, SelectorService as EntitySelectorService, SelectorProvider as EntitySelectorProvider, actions$1 as EntityConfigActions, EntityConfigEffects, configInitialState, entityConfigReducer, selectAppFeature, actions$2 as FeatureActions, actionTypes as FeatureActionTypes, FeatureEffects, featureInitialState, featureReducer, selectEntityFeature, entityFeatureSelectors, featureInitialState as initialState, featureReducer as reducer, effects, buildEntityEffects, buildEntityConfigs, buildEntityInitialState, buildEntityRelationshipProperty, defineEntityRelationshipGetSet, buildEntityRelationshipProperties, buildEntityService, buildEntityTypeProvider, buildEntityTypes, buildFeatureConfig, buildFeatureInitialState, buildFeatureReducer, buildScopeSelectors, buildEntitySelectors, buildEntityTypeSelectors, buildEntityTypeSliceSelector, buildFeatureSelector, buildFilterSelector, buildFindSelector, buildRootSelector, buildSliceSelector, FEATURE_CONFIG, providers, EntityModule, EntityFormManager, FormEntity, FormFieldEntity, EntityFormFactory, EntityFormManagerFactory, FormFactory$1 as ResourceConfigurationFormFactory, FormControlDataFactory, FormControlValidatorFactory, FormGroupDataFactory, FormItemDataFactory, DropdownFactory, DropdownOptionsFactory, FormMemberFactoryParamsService, DataFactory as RelationshipDataFactory, DataFactoryResolver as RelationshipDataFactoryResolver, RelationshipProvider, RelationshipsProvider, CeoEntityFormsModule, services$1 as ɵa, services as ɵb, services$2 as ɵf, services$3 as ɵg, services$4 as ɵh, services$5 as ɵe, services$6 as ɵd, services$7 as ɵc };

//# sourceMappingURL=ceo-entity.js.map