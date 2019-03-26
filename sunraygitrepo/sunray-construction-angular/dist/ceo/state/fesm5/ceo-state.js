import { tap } from 'rxjs/operators';
import { Observable, defer } from 'rxjs';
import { assign, reduce, get, merge } from 'lodash';
import { __decorate, __metadata, __spread, __extends, __assign } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { Store, createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PayloadAction = /** @class */ (function () {
    function PayloadAction(payload) {
        this.payload = payload;
    }
    return PayloadAction;
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
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 * @type {?}
 */
var typeCache = {};
/**
 * @template T
 * @param {?} label
 * @return {?}
 */
function type(label) {
    if (typeCache[(/** @type {?} */ (label))]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[(/** @type {?} */ (label))] = true;
    return (/** @type {?} */ (label));
}
/** @type {?} */
var typeForCache = {};
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
        typeForCache[slice][action] = "[" + slice + "] " + action;
        type(typeForCache[slice][action]);
        return typeForCache[slice][action];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var sliceActions = {
    INIT: 'INIT',
    INITIALIZED: 'INITIALIZED',
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    PATCH: 'PATCH',
    UPDATE: 'UPDATE',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS'
};
var SliceAction = /** @class */ (function (_super) {
    __extends(SliceAction, _super);
    function SliceAction(slice, payload) {
        var _this = _super.call(this, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = '';
        return _this;
    }
    Object.defineProperty(SliceAction.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return typeFor(this.slice, this.actionName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceAction.prototype, "verb", {
        get: /**
         * @return {?}
         */
        function () {
            return this.actionName;
        },
        enumerable: true,
        configurable: true
    });
    return SliceAction;
}(PayloadAction));
var Init = /** @class */ (function (_super) {
    __extends(Init, _super);
    function Init() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.INIT;
        return _this;
    }
    return Init;
}(SliceAction));
var Initialized = /** @class */ (function (_super) {
    __extends(Initialized, _super);
    function Initialized() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.INITIALIZED;
        return _this;
    }
    return Initialized;
}(SliceAction));
var LoadFail = /** @class */ (function (_super) {
    __extends(LoadFail, _super);
    function LoadFail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.LOAD_FAIL;
        return _this;
    }
    return LoadFail;
}(SliceAction));
var LoadSuccess = /** @class */ (function (_super) {
    __extends(LoadSuccess, _super);
    function LoadSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.LOAD_SUCCESS;
        return _this;
    }
    return LoadSuccess;
}(SliceAction));
var Patch = /** @class */ (function (_super) {
    __extends(Patch, _super);
    function Patch(slice, path, val) {
        var _this = _super.call(this, slice, { path: path, val: val }) || this;
        _this.slice = slice;
        _this.actionName = sliceActions.PATCH;
        return _this;
    }
    return Patch;
}(SliceAction));
var Update = /** @class */ (function (_super) {
    __extends(Update, _super);
    function Update(slice, path, val) {
        var _this = _super.call(this, slice, { path: path, val: val }) || this;
        _this.slice = slice;
        _this.actionName = sliceActions.UPDATE;
        return _this;
    }
    return Update;
}(SliceAction));

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
    var newState = merge({}, state, {
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
    var newState = merge({}, state, {
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
    var newState = merge({}, state, action.payload, {
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
    var obj = [state];
    /** @type {?} */
    var patch = !update;
    /** @type {?} */
    var path = action.payload.path;
    /** @type {?} */
    var hasPath = path && path.length;
    /** @type {?} */
    var pathLength = hasPath ? path.length : 0;
    /** @type {?} */
    var key = path[path.length - 1];
    /** @type {?} */
    var val = {};
    /** @type {?} */
    var pos = pathLength;
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
    var i = 0;
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
    return __assign({}, state, obj[0]);
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
var LogEffects = /** @class */ (function () {
    function LogEffects(actions$) {
        var _this = this;
        this.actions$ = actions$;
        this.log$ = this.actions$
            .pipe(tap(function (action) { return _this.log(action); }));
    }
    /**
     * @private
     * @param {?} action
     * @param {?=} loggingEnabled
     * @return {?}
     */
    LogEffects.prototype.log = /**
     * @private
     * @param {?} action
     * @param {?=} loggingEnabled
     * @return {?}
     */
    function (action, loggingEnabled) {
        if (loggingEnabled === void 0) { loggingEnabled = false; }
        if (loggingEnabled) {
            console.log(action);
        }
    };
    LogEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LogEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], LogEffects.prototype, "log$", void 0);
    return LogEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { ApplicationConfigEffects } from './application-config.effects'; 
/** @type {?} */
var effects = [
    LogEffects,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ApplicationConfigActionTypes = {
    ROUTER_NAVIGATION: 'ROUTER_NAVIGATION',
    LAUNCH: '[ApplicationConfig] LAUNCH',
    LOAD_RESOURCE_BY_ID: '[ApplicationConfig] LOAD_RESOURCE_BY_ID',
    SET_PRIMARY_ENTITY: '[ApplicationConfig] SET_PRIMARY_ENTITY',
    SET_RESOURCE_TYPE: '[ApplicationConfig] SET_RESOURCE_TYPE',
};
var RouterNavigation = /** @class */ (function () {
    function RouterNavigation() {
        this.type = ApplicationConfigActionTypes.ROUTER_NAVIGATION;
    }
    return RouterNavigation;
}());
var Launch = /** @class */ (function () {
    function Launch() {
        this.type = ApplicationConfigActionTypes.LAUNCH;
    }
    return Launch;
}());
var LoadResourceById = /** @class */ (function () {
    function LoadResourceById() {
        this.type = ApplicationConfigActionTypes.LOAD_RESOURCE_BY_ID;
    }
    return LoadResourceById;
}());
var SetPrimaryEntity = /** @class */ (function (_super) {
    __extends(SetPrimaryEntity, _super);
    function SetPrimaryEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ApplicationConfigActionTypes.SET_PRIMARY_ENTITY;
        return _this;
    }
    return SetPrimaryEntity;
}(PayloadAction));
var SetResourceType = /** @class */ (function (_super) {
    __extends(SetResourceType, _super);
    function SetResourceType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ApplicationConfigActionTypes.SET_RESOURCE_TYPE;
        return _this;
    }
    return SetResourceType;
}(PayloadAction));

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
var applicationConfigInitialState = {
    route: {},
    launched: false,
    resourceType: null,
    primaryEntity: null,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationConfigEffects = /** @class */ (function () {
    function ApplicationConfigEffects(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.init$ = defer(function () { });
    }
    ApplicationConfigEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ApplicationConfigEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ApplicationConfigEffects.prototype, "init$", void 0);
    return ApplicationConfigEffects;
}());

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
var selectRouter = createFeatureSelector('router');
/** @type {?} */
var selectState = function (state) {
    if (state && state.state) {
        return state.state;
    }
    else {
        return null;
    }
};
/** @type {?} */
var selectRouterState = createSelector(selectRouter, selectState);
/** @type {?} */
var selectParamId = function (state) {
    if (state) {
        return get(state, 'params.id');
    }
    else {
        return null;
    }
};
/** @type {?} */
var selectRouteParamId = createSelector(selectRouterState, selectParamId);
/** @type {?} */
var routerSelectors = {
    selectState: selectRouterState,
    selectRouteParamId: selectRouteParamId,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#navigation-actions
// https://ngrx.io/guide/router-store/configuration
var RouterCustomSerializer = /** @class */ (function () {
    function RouterCustomSerializer() {
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    RouterCustomSerializer.prototype.serialize = /**
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        /** @type {?} */
        var route = routerState.root;
        /** @type {?} */
        var params = {};
        while (route.firstChild) {
            Object.assign(params, route.params);
            route = route.firstChild;
        }
        Object.assign(params, route.params);
        /** @type {?} */
        var segments = (/** @type {?} */ (get(routerState, 'root.children[0]._urlSegment.segments')));
        var url = routerState.url, queryParams = routerState.root.queryParams;
        return { url: url, params: params, segments: segments, queryParams: queryParams };
    };
    RouterCustomSerializer.decorators = [
        { type: Injectable }
    ];
    return RouterCustomSerializer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var selectApplicationConfig = createFeatureSelector('applicationConfig');
/** @type {?} */
var selectLaunched = function (state) {
    return state.launched;
};
/** @type {?} */
var selectApplicationConfigLaunched = createSelector(selectApplicationConfig, selectLaunched);
/** @type {?} */
var selectResourceType = function (state) {
    return state.resourceType;
};
/** @type {?} */
var selectApplicationConfigResourceType = createSelector(selectApplicationConfig, selectResourceType);
/** @type {?} */
var buildResourceById = function (resourceType, routeParamId) {
    /** @type {?} */
    var idParam = {
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
var selectApplicationConfigResourceById = createSelector(selectApplicationConfigResourceType, routerSelectors.selectRouteParamId, buildResourceById);
/** @type {?} */
var selectPrimaryEntity = function (state) {
    return state.primaryEntity;
};
/** @type {?} */
var selectApplicationConfigPrimaryEntity = createSelector(selectApplicationConfig, selectPrimaryEntity);
/** @type {?} */
var applicationConfigSelectors = {
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
var SystemComponentsActionTypes = {
    ACTIVATE_COMPONENT: '[SystemComponents] ACTIVATE_COMPONENT',
};
var ActivateComponent = /** @class */ (function () {
    function ActivateComponent() {
        this.type = SystemComponentsActionTypes.ACTIVATE_COMPONENT;
    }
    return ActivateComponent;
}());

var actions$1 = /*#__PURE__*/Object.freeze({
    SystemComponentsActionTypes: SystemComponentsActionTypes,
    ActivateComponent: ActivateComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var systemComponentsInitialState = {
    activeComponents: [],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SystemComponentsEffects = /** @class */ (function () {
    function SystemComponentsEffects(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.activateComponent$ = defer(function () { });
    }
    SystemComponentsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SystemComponentsEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], SystemComponentsEffects.prototype, "activateComponent$", void 0);
    return SystemComponentsEffects;
}());

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
            var currentActiveComponents = state.activeComponents;
            /** @type {?} */
            var addActiveComponent = function (components, component) {
                components.push(component);
                return components;
            };
            /** @type {?} */
            var components = reduce(currentActiveComponents, addActiveComponent, []);
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
var selectSystemComponents = createFeatureSelector('systemComponents');
/** @type {?} */
var selectActiveComponents = function (state) {
    return state.activeComponents;
};
/** @type {?} */
var selectSystemComponentsActiveComponents = createSelector(selectSystemComponents, selectActiveComponents);
/** @type {?} */
var systemComponentsSelectors = {
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
var propertySelector = function () {
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
var initialState = {
    applicationConfig: applicationConfigInitialState,
    systemComponents: systemComponentsInitialState,
};
/** @type {?} */
var reducer = {
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
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forRoot(reducer, {
                            initialState: initialState,
                        }),
                        EffectsModule.forRoot(__spread(effects, [
                            ApplicationConfigEffects,
                            SystemComponentsEffects,
                        ])),
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
                    providers: __spread(services, [
                        {
                            provide: RouterStateSerializer,
                            useClass: RouterCustomSerializer
                        }
                    ]),
                },] }
    ];
    return StateModule;
}());

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