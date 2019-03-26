import { tap } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { Observable, defer } from 'rxjs';
import { assign, reduce, get, merge } from 'lodash';
import { Injectable, NgModule } from '@angular/core';
import { Store, createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PayloadAction {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
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
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 * @type {?}
 */
const typeCache = {};
/**
 * @template T
 * @param {?} label
 * @return {?}
 */
function type(label) {
    if (typeCache[(/** @type {?} */ (label))]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }
    typeCache[(/** @type {?} */ (label))] = true;
    return (/** @type {?} */ (label));
}
/** @type {?} */
const typeForCache = {};
// Takes the slice key + an action name
// Return the UNIQUE String which defines that action type.
/**
 * @param {?} slice
 * @param {?} action
 * @return {?}
 */
function typeFor(slice, action) {
    if (typeForCache[slice] && typeForCache[slice][action]) {
        return typeForCache[slice][action];
    }
    else {
        typeForCache[slice] = typeForCache[slice] || {};
        typeForCache[slice][action] = `[${slice}] ${action}`;
        type(typeForCache[slice][action]);
        return typeForCache[slice][action];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sliceActions = {
    INIT: 'INIT',
    INITIALIZED: 'INITIALIZED',
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    PATCH: 'PATCH',
    UPDATE: 'UPDATE',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS'
};
class SliceAction extends PayloadAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload) {
        super(payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = '';
    }
    /**
     * @return {?}
     */
    get type() {
        return typeFor(this.slice, this.actionName);
    }
    /**
     * @return {?}
     */
    get verb() {
        return this.actionName;
    }
}
class Init extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.INIT;
    }
}
class Initialized extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.INITIALIZED;
    }
}
class LoadFail extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.LOAD_FAIL;
    }
}
class LoadSuccess extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.LOAD_SUCCESS;
    }
}
class Patch extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} path
     * @param {?} val
     */
    constructor(slice, path, val) {
        super(slice, { path, val });
        this.slice = slice;
        this.actionName = sliceActions.PATCH;
    }
}
class Update extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} path
     * @param {?} val
     */
    constructor(slice, path, val) {
        super(slice, { path, val });
        this.slice = slice;
        this.actionName = sliceActions.UPDATE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function load(state, action) {
    /** @type {?} */
    const newState = merge({}, state, {
        hasError: false
    });
    return newState;
    // return setSliceLoading(newState, action);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function loadFail(state, action) {
    /** @type {?} */
    const newState = merge({}, state, {
        hasError: true,
    });
    return newState;
    // return setSliceLoading(newState, action);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function loadSuccess(state, action) {
    /** @type {?} */
    const newState = merge({}, state, action.payload, {
        hasError: false,
    });
    return newState;
    // return setSliceLoading(newState, action);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function update(state, action) {
    return patchOrUpdate(state, action, true);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function patch(state, action) {
    return patchOrUpdate(state, action, false);
}
/**
 *
 * @param {?} state
 * @param {?} action contains a payload that could be a primitive value, an object or a function with argument state
 * that could return a primitive value or an object
 * @param {?} update boolean true if updating, false if patching
 * @return {?}
 */
function patchOrUpdate(state, action, update) {
    /** @type {?} */
    let obj = [state];
    /** @type {?} */
    let patch = !update;
    /** @type {?} */
    const path = action.payload.path;
    /** @type {?} */
    const hasPath = path && path.length;
    /** @type {?} */
    const pathLength = hasPath ? path.length : 0;
    /** @type {?} */
    const key = path[path.length - 1];
    /** @type {?} */
    let val = {};
    /** @type {?} */
    let pos = pathLength;
    // object
    if (typeof action.payload.val === 'object') {
        // return [val, pos];
        val = action.payload.val;
    }
    else if (typeof action.payload.val === 'function') {
        // function
        val[key] = action.payload.val(state);
        pos--;
        patch = true;
    }
    else {
        // primitive
        val[key] = action.payload.val;
        pos--;
        patch = true;
    }
    /** @type {?} */
    let i = 0;
    for (i = 0; i < pos; i++) {
        obj[i + 1] = obj[i][path[i]];
    }
    if (patch) {
        val = merge({}, obj[pos], val);
    }
    obj = [];
    obj[pos] = val;
    for (i = pos - 1; i >= 0; i--) {
        obj[i] = {};
        obj[i][path[i]] = obj[i + 1];
    }
    return Object.assign({}, state, obj[0]);
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
class LogEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.log$ = this.actions$
            .pipe(tap(action => this.log(action)));
    }
    /**
     * @private
     * @param {?} action
     * @param {?=} loggingEnabled
     * @return {?}
     */
    log(action, loggingEnabled = false) {
        if (loggingEnabled) {
            console.log(action);
        }
    }
}
LogEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LogEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Observable)
], LogEffects.prototype, "log$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { ApplicationConfigEffects } from './application-config.effects'; 
/** @type {?} */
const effects = [
    LogEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ApplicationConfigActionTypes = {
    ROUTER_NAVIGATION: 'ROUTER_NAVIGATION',
    LAUNCH: '[ApplicationConfig] LAUNCH',
    LOAD_RESOURCE_BY_ID: '[ApplicationConfig] LOAD_RESOURCE_BY_ID',
    SET_PRIMARY_ENTITY: '[ApplicationConfig] SET_PRIMARY_ENTITY',
    SET_RESOURCE_TYPE: '[ApplicationConfig] SET_RESOURCE_TYPE',
};
class RouterNavigation {
    constructor() {
        this.type = ApplicationConfigActionTypes.ROUTER_NAVIGATION;
    }
}
class Launch {
    constructor() {
        this.type = ApplicationConfigActionTypes.LAUNCH;
    }
}
class LoadResourceById {
    constructor() {
        this.type = ApplicationConfigActionTypes.LOAD_RESOURCE_BY_ID;
    }
}
class SetPrimaryEntity extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ApplicationConfigActionTypes.SET_PRIMARY_ENTITY;
    }
}
class SetResourceType extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ApplicationConfigActionTypes.SET_RESOURCE_TYPE;
    }
}

var actions = /*#__PURE__*/Object.freeze({
    ApplicationConfigActionTypes: ApplicationConfigActionTypes,
    RouterNavigation: RouterNavigation,
    Launch: Launch,
    LoadResourceById: LoadResourceById,
    SetPrimaryEntity: SetPrimaryEntity,
    SetResourceType: SetResourceType
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const applicationConfigInitialState = {
    route: {},
    launched: false,
    resourceType: null,
    primaryEntity: null,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApplicationConfigEffects {
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
ApplicationConfigEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApplicationConfigEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ApplicationConfigEffects.prototype, "init$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function applicationConfigReducer(state, action) {
    /** @type {?} */
    var deltaState = {};
    switch (action.type) {
        case 'ROUTER_NAVIGATION':
            deltaState = {
                route: action.payload.routerState
            };
            return assign({}, state, deltaState);
        case ApplicationConfigActionTypes.LAUNCH:
            deltaState = {
                launched: true
            };
            return assign({}, state, deltaState);
        case ApplicationConfigActionTypes.SET_PRIMARY_ENTITY:
            deltaState = {
                primaryEntity: action.payload,
            };
            return assign({}, state, deltaState);
        case ApplicationConfigActionTypes.SET_RESOURCE_TYPE:
            deltaState = {
                resourceType: action.payload,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routerInitialState = {
    state: null,
    navigationId: null,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const selectRouter = createFeatureSelector('router');
/** @type {?} */
let selectState = (state) => {
    if (state && state.state) {
        return state.state;
    }
    else {
        return null;
    }
};
/** @type {?} */
const selectRouterState = createSelector(selectRouter, selectState);
/** @type {?} */
let selectParamId = (state) => {
    if (state) {
        return get(state, 'params.id');
    }
    else {
        return null;
    }
};
/** @type {?} */
const selectRouteParamId = createSelector(selectRouterState, selectParamId);
/** @type {?} */
const routerSelectors = {
    selectState: selectRouterState,
    selectRouteParamId: selectRouteParamId,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#navigation-actions
// https://ngrx.io/guide/router-store/configuration
class RouterCustomSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        /** @type {?} */
        let route = routerState.root;
        /** @type {?} */
        let params = {};
        while (route.firstChild) {
            Object.assign(params, route.params);
            route = route.firstChild;
        }
        Object.assign(params, route.params);
        /** @type {?} */
        let segments = (/** @type {?} */ (get(routerState, 'root.children[0]._urlSegment.segments')));
        const { url, root: { queryParams }, } = routerState;
        return { url, params, segments, queryParams };
    }
}
RouterCustomSerializer.decorators = [
    { type: Injectable }
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
const selectApplicationConfig = createFeatureSelector('applicationConfig');
/** @type {?} */
let selectLaunched = (state) => {
    return state.launched;
};
/** @type {?} */
const selectApplicationConfigLaunched = createSelector(selectApplicationConfig, selectLaunched);
/** @type {?} */
let selectResourceType = (state) => {
    return state.resourceType;
};
/** @type {?} */
const selectApplicationConfigResourceType = createSelector(selectApplicationConfig, selectResourceType);
/** @type {?} */
let buildResourceById = (resourceType, routeParamId) => {
    /** @type {?} */
    let idParam = {
        id: routeParamId
    };
    return Object.assign({}, resourceType, idParam);
}
/*
{
  feature: 'sunray',
  type: 'companies',
  id: 57
}
*/
;
/*
{
  feature: 'sunray',
  type: 'companies',
  id: 57
}
*/
/** @type {?} */
const selectApplicationConfigResourceById = createSelector(selectApplicationConfigResourceType, routerSelectors.selectRouteParamId, buildResourceById);
/** @type {?} */
let selectPrimaryEntity = (state) => {
    return state.primaryEntity;
};
/** @type {?} */
const selectApplicationConfigPrimaryEntity = createSelector(selectApplicationConfig, selectPrimaryEntity);
/** @type {?} */
const applicationConfigSelectors = {
    launched: selectApplicationConfigLaunched,
    resourceType: selectApplicationConfigResourceType,
    resourceById: selectApplicationConfigResourceById,
    primaryEntity: selectApplicationConfigPrimaryEntity,
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
/** @enum {string} */
const SystemComponentsActionTypes = {
    ACTIVATE_COMPONENT: '[SystemComponents] ACTIVATE_COMPONENT',
};
class ActivateComponent {
    constructor() {
        this.type = SystemComponentsActionTypes.ACTIVATE_COMPONENT;
    }
}

var actions$1 = /*#__PURE__*/Object.freeze({
    SystemComponentsActionTypes: SystemComponentsActionTypes,
    ActivateComponent: ActivateComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const systemComponentsInitialState = {
    activeComponents: [],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SystemComponentsEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     */
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.activateComponent$ = defer(() => { });
    }
}
SystemComponentsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SystemComponentsEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], SystemComponentsEffects.prototype, "activateComponent$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function systemComponentsReducer(state, action) {
    /** @type {?} */
    var deltaState = {};
    switch (action.type) {
        case '[SystemComponents] ACTIVATE_COMPONENT':
            // Make sure you can reach this piont
            /** @type {?} */
            let currentActiveComponents = state.activeComponents;
            /** @type {?} */
            let addActiveComponent = (components, component) => {
                components.push(component);
                return components;
            };
            /** @type {?} */
            let components = reduce(currentActiveComponents, addActiveComponent, []);
            components.push(action.payload);
            deltaState = {
                activeComponents: components
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
const selectSystemComponents = createFeatureSelector('systemComponents');
/** @type {?} */
let selectActiveComponents = (state) => {
    return state.activeComponents;
};
/** @type {?} */
const selectSystemComponentsActiveComponents = createSelector(selectSystemComponents, selectActiveComponents);
/** @type {?} */
const systemComponentsSelectors = {
    slice: selectSystemComponents,
    activeComponents: selectSystemComponentsActiveComponents
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
/** @type {?} */
const propertySelector = () => {
    return true;
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
const initialState = {
    applicationConfig: applicationConfigInitialState,
    systemComponents: systemComponentsInitialState,
};
/** @type {?} */
const reducer = {
    applicationConfig: applicationConfigReducer,
    systemComponents: systemComponentsReducer,
    router: routerReducer,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @DEEPAK, @JEETHU
// This method (used below in the *serialize*
// option for the StoreDevtoolsModule,
// can be used for adding in the name to be displayed for the action.
// (now it's always showing "<UNDEFINED>"
// More Info:
// https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md
// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#serialize
//let storeDevtoolsReplacer = (key, value) => {
//  return value
//}
//@ts-ignore
class StateModule {
}
StateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forRoot(reducer, {
                        initialState: initialState,
                    }),
                    EffectsModule.forRoot([
                        ...effects,
                        ApplicationConfigEffects,
                        SystemComponentsEffects,
                    ]),
                    //@ts-ignore: This is the correct interface
                    //for some reason, the ngrx store-devtools package
                    //does not have this correct interface,
                    //they say *serialize* should be just boolean.
                    //See links above for more info.
                    // TODO -- This is not working when moved to the @ceo/state package
                    //StoreDevtoolsModule.instrument({
                    //  name: "SunRay",
                    //  //name: environment.applicationName,
                    //  maxAge: 25,
                    //  serialize: {
                    //    replacer: "storeDevtoolsReplacer",
                    //  },
                    //}),
                    StoreRouterConnectingModule.forRoot({
                        stateKey: 'router',
                    }),
                ],
                declarations: [],
                providers: [
                    ...services,
                    {
                        provide: RouterStateSerializer,
                        useClass: RouterCustomSerializer
                    }
                ],
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

export { PayloadAction, sliceActions, SliceAction, Init, Initialized, LoadFail, LoadSuccess, Patch, Update, load, loadFail, loadSuccess, update, patch, type, typeFor, effects, services, actions as ApplicationConfigActions, applicationConfigInitialState, ApplicationConfigEffects, applicationConfigReducer, selectApplicationConfig, selectApplicationConfigLaunched, selectApplicationConfigResourceType, selectApplicationConfigResourceById, selectApplicationConfigPrimaryEntity, applicationConfigSelectors, routerInitialState, selectRouter, selectRouterState, selectRouteParamId, routerSelectors, RouterCustomSerializer, actions$1 as SystemComponentsActions, systemComponentsInitialState, SystemComponentsEffects, systemComponentsReducer, selectSystemComponents, selectSystemComponentsActiveComponents, systemComponentsSelectors, propertySelector, StateModule, LogEffects as ɵa, routerSelectors as ɵb, initialState as ɵc, reducer as ɵd };

//# sourceMappingURL=ceo-state.js.map