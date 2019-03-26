(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('@angular/core'), require('angulartics2'), require('angulartics2/segment')) :
    typeof define === 'function' && define.amd ? define('@ceo/analytics', ['exports', 'lodash', '@angular/core', 'angulartics2', 'angulartics2/segment'], factory) :
    (factory((global.ceo = global.ceo || {}, global.ceo.analytics = {}),global._,global.ng.core,global.angulartics2,global.segment));
}(this, (function (exports,_,core,angulartics2,segment) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper for Angulartics2
     */
    var AnalyticsService = /** @class */ (function () {
        function AnalyticsService(angulartics2$$1, segment$$1) {
            // options
            // https://github.com/angulartics/angulartics2/blob/master/src/core/angulartics2.ts#L90-L104
            // angulartics2.virtualPageviews(value: boolean);
            // angulartics2.excludeRoutes(routes: Array<string>);
            // angulartics2.firstPageview(value: boolean);
            // angulartics2.withBase(value: string);
            this.angulartics2 = angulartics2$$1;
            this.segment = segment$$1;
            this.devMode(false);
        }
        /**
         * Track actions, events, etc.
         **/
        /**
         * Track actions, events, etc.
         *
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
        AnalyticsService.prototype.track = /**
         * Track actions, events, etc.
         *
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
            function (action, properties) {
                if (!this.devMode()) {
                    this.segment.eventTrack(action, properties);
                }
            };
        /**
         * Called automatically by default with Angular 2 Routing
         * However, that can be turned off and this could be used manually
         **/
        /**
         * Called automatically by default with Angular 2 Routing
         * However, that can be turned off and this could be used manually
         *
         * @param {?} path
         * @param {?} location
         * @return {?}
         */
        AnalyticsService.prototype.pageTrack = /**
         * Called automatically by default with Angular 2 Routing
         * However, that can be turned off and this could be used manually
         *
         * @param {?} path
         * @param {?} location
         * @return {?}
         */
            function (path, location) {
                if (!this.devMode()) {
                    //this.segment.pageTrack(path, location);
                    this.segment.pageTrack(path);
                }
            };
        /**
         * Identify authenticated users
         **/
        /**
         * Identify authenticated users
         *
         * @param {?} properties
         * @return {?}
         */
        AnalyticsService.prototype.identify = /**
         * Identify authenticated users
         *
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                if (!this.devMode()) {
                    this.segment.setUserProperties(properties);
                }
            };
        /**
         * Control whether analytics are tracked
         * true: dev mode on, therefore do not track anything
         * false: dev mode off, track everything
         **/
        /**
         * Control whether analytics are tracked
         * true: dev mode on, therefore do not track anything
         * false: dev mode off, track everything
         *
         * @param {?=} enable
         * @return {?}
         */
        AnalyticsService.prototype.devMode = /**
         * Control whether analytics are tracked
         * true: dev mode on, therefore do not track anything
         * false: dev mode off, track everything
         *
         * @param {?=} enable
         * @return {?}
         */
            function (enable) {
                //if (typeof enable !== 'undefined') {
                //  this.angulartics2.developerMode(enable);
                //}
                return this.angulartics2.settings.developerMode;
            };
        AnalyticsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AnalyticsService.ctorParameters = function () {
            return [
                { type: angulartics2.Angulartics2 },
                { type: segment.Angulartics2Segment }
            ];
        };
        return AnalyticsService;
    }());
    /**
     * Base class
     * Standardizes tracking actions and categorization
     */
    var Analytics = /** @class */ (function () {
        function Analytics(analytics) {
            this.analytics = analytics;
        }
        /**
         * Track actions, events, etc.
         **/
        /**
         * Track actions, events, etc.
         *
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
        Analytics.prototype.track = /**
         * Track actions, events, etc.
         *
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
            function (action, properties) {
                this.analytics.track(action, _.extend(properties, { category: this.category }));
            };
        /** @nocollapse */
        Analytics.ctorParameters = function () {
            return [
                { type: AnalyticsService, decorators: [{ type: core.Inject, args: [AnalyticsService,] }] }
            ];
        };
        return Analytics;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var analyticsProviders = [
        AnalyticsService
    ];

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
    var AnalyticsModule = /** @class */ (function () {
        function AnalyticsModule() {
        }
        AnalyticsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            angulartics2.Angulartics2Module.forRoot([
                                segment.Angulartics2Segment
                            ])
                        ],
                        providers: __spread(analyticsProviders)
                    },] }
        ];
        return AnalyticsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.analyticsProviders = analyticsProviders;
    exports.AnalyticsService = AnalyticsService;
    exports.Analytics = Analytics;
    exports.AnalyticsModule = AnalyticsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ceo-analytics.umd.js.map