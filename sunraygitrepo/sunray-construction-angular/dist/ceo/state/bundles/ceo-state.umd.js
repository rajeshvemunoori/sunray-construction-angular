(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('rxjs'), require('lodash'), require('@angular/core'), require('@ngrx/store'), require('@ngrx/effects'), require('@ngrx/router-store')) :
    typeof define === 'function' && define.amd ? define('@ceo/state', ['exports', 'rxjs/operators', 'rxjs', 'lodash', '@angular/core', '@ngrx/store', '@ngrx/effects', '@ngrx/router-store'], factory) :
    (factory((global.ceo = global.ceo || {}, global.ceo.state = {}),global.rxjs.operators,global.rxjs,global._,global.ng.core,global.store,global.effects,global.routerStore));
}(this, (function (exports,operators,rxjs,_,core,store,effects,routerStore) { 'use strict';

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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
        if (typeCache[( /** @type {?} */(label))]) {
            throw new Error("Action type \"" + label + "\" is not unique\"");
        }
        typeCache[( /** @type {?} */(label))] = true;
        return ( /** @type {?} */(label));
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
             */ function () {
                return typeFor(this.slice, this.actionName);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SliceAction.prototype, "verb", {
            get: /**
             * @return {?}
             */ function () {
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
        var newState = _.merge({}, state, {
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
        var newState = _.merge({}, state, {
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
        var newState = _.merge({}, state, action.payload, {
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
            val = _.merge({}, obj[pos], val);
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
                .pipe(operators.tap(function (action) { return _this.log(action); }));
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
                if (loggingEnabled === void 0) {
                    loggingEnabled = false;
                }
                if (loggingEnabled) {
                    console.log(action);
                }
            };
        LogEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LogEffects.ctorParameters = function () {
            return [
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", rxjs.Observable)
        ], LogEffects.prototype, "log$", void 0);
        return LogEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { ApplicationConfigEffects } from './application-config.effects'; 
    /** @type {?} */
    var effects$1 = [
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
        function ApplicationConfigEffects(store$$1, actions$) {
            this.store = store$$1;
            this.actions$ = actions$;
            this.init$ = rxjs.defer(function () { });
        }
        ApplicationConfigEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ApplicationConfigEffects.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
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
                return _.assign({}, state, deltaState);
            case ApplicationConfigActionTypes.LAUNCH:
                deltaState = {
                    launched: true
                };
                return _.assign({}, state, deltaState);
            case ApplicationConfigActionTypes.SET_PRIMARY_ENTITY:
                deltaState = {
                    primaryEntity: action.payload,
                };
                return _.assign({}, state, deltaState);
            case ApplicationConfigActionTypes.SET_RESOURCE_TYPE:
                deltaState = {
                    resourceType: action.payload,
                };
                return _.assign({}, state, deltaState);
            default:
                return state;
        }
    }

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
    var selectRouter = store.createFeatureSelector('router');
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
    var selectRouterState = store.createSelector(selectRouter, selectState);
    /** @type {?} */
    var selectParamId = function (state) {
        if (state) {
            return _.get(state, 'params.id');
        }
        else {
            return null;
        }
    };
    /** @type {?} */
    var selectRouteParamId = store.createSelector(selectRouterState, selectParamId);
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
                var segments = ( /** @type {?} */(_.get(routerState, 'root.children[0]._urlSegment.segments')));
                var url = routerState.url, queryParams = routerState.root.queryParams;
                return { url: url, params: params, segments: segments, queryParams: queryParams };
            };
        RouterCustomSerializer.decorators = [
            { type: core.Injectable }
        ];
        return RouterCustomSerializer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var selectApplicationConfig = store.createFeatureSelector('applicationConfig');
    /** @type {?} */
    var selectLaunched = function (state) {
        return state.launched;
    };
    /** @type {?} */
    var selectApplicationConfigLaunched = store.createSelector(selectApplicationConfig, selectLaunched);
    /** @type {?} */
    var selectResourceType = function (state) {
        return state.resourceType;
    };
    /** @type {?} */
    var selectApplicationConfigResourceType = store.createSelector(selectApplicationConfig, selectResourceType);
    /** @type {?} */
    var buildResourceById = function (resourceType, routeParamId) {
        /** @type {?} */
        var idParam = {
            id: routeParamId
        };
        return Object.assign({}, resourceType, idParam);
    };
    /*
    {
      feature: 'sunray',
      type: 'companies',
      id: 57
    }
    */
    /** @type {?} */
    var selectApplicationConfigResourceById = store.createSelector(selectApplicationConfigResourceType, routerSelectors.selectRouteParamId, buildResourceById);
    /** @type {?} */
    var selectPrimaryEntity = function (state) {
        return state.primaryEntity;
    };
    /** @type {?} */
    var selectApplicationConfigPrimaryEntity = store.createSelector(selectApplicationConfig, selectPrimaryEntity);
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
        function SystemComponentsEffects(store$$1, actions$) {
            this.store = store$$1;
            this.actions$ = actions$;
            this.activateComponent$ = rxjs.defer(function () { });
        }
        SystemComponentsEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SystemComponentsEffects.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
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
                var components = _.reduce(currentActiveComponents, addActiveComponent, []);
                components.push(action.payload);
                deltaState = {
                    activeComponents: components
                };
                return _.assign({}, state, deltaState);
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var selectSystemComponents = store.createFeatureSelector('systemComponents');
    /** @type {?} */
    var selectActiveComponents = function (state) {
        return state.activeComponents;
    };
    /** @type {?} */
    var selectSystemComponentsActiveComponents = store.createSelector(selectSystemComponents, selectActiveComponents);
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
        router: routerStore.routerReducer,
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
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forRoot(reducer, {
                                initialState: initialState,
                            }),
                            effects.EffectsModule.forRoot(__spread(effects$1, [
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
                            routerStore.StoreRouterConnectingModule.forRoot({
                                stateKey: 'router',
                            }),
                        ],
                        declarations: [],
                        providers: __spread(services, [
                            {
                                provide: routerStore.RouterStateSerializer,
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

    exports.PayloadAction = PayloadAction;
    exports.sliceActions = sliceActions;
    exports.SliceAction = SliceAction;
    exports.Init = Init;
    exports.Initialized = Initialized;
    exports.LoadFail = LoadFail;
    exports.LoadSuccess = LoadSuccess;
    exports.Patch = Patch;
    exports.Update = Update;
    exports.load = load;
    exports.loadFail = loadFail;
    exports.loadSuccess = loadSuccess;
    exports.update = update;
    exports.patch = patch;
    exports.type = type;
    exports.typeFor = typeFor;
    exports.effects = effects$1;
    exports.services = services;
    exports.ApplicationConfigActions = actions;
    exports.applicationConfigInitialState = applicationConfigInitialState;
    exports.ApplicationConfigEffects = ApplicationConfigEffects;
    exports.applicationConfigReducer = applicationConfigReducer;
    exports.selectApplicationConfig = selectApplicationConfig;
    exports.selectApplicationConfigLaunched = selectApplicationConfigLaunched;
    exports.selectApplicationConfigResourceType = selectApplicationConfigResourceType;
    exports.selectApplicationConfigResourceById = selectApplicationConfigResourceById;
    exports.selectApplicationConfigPrimaryEntity = selectApplicationConfigPrimaryEntity;
    exports.applicationConfigSelectors = applicationConfigSelectors;
    exports.routerInitialState = routerInitialState;
    exports.selectRouter = selectRouter;
    exports.selectRouterState = selectRouterState;
    exports.selectRouteParamId = selectRouteParamId;
    exports.routerSelectors = routerSelectors;
    exports.RouterCustomSerializer = RouterCustomSerializer;
    exports.SystemComponentsActions = actions$1;
    exports.systemComponentsInitialState = systemComponentsInitialState;
    exports.SystemComponentsEffects = SystemComponentsEffects;
    exports.systemComponentsReducer = systemComponentsReducer;
    exports.selectSystemComponents = selectSystemComponents;
    exports.selectSystemComponentsActiveComponents = selectSystemComponentsActiveComponents;
    exports.systemComponentsSelectors = systemComponentsSelectors;
    exports.propertySelector = propertySelector;
    exports.StateModule = StateModule;
    exports.ɵa = LogEffects;
    exports.ɵb = routerSelectors;
    exports.ɵc = initialState;
    exports.ɵd = reducer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ceo-state.umd.js.map