import { extend } from 'lodash';
import { __spread } from 'tslib';
import { Injectable, Inject, NgModule } from '@angular/core';
import { Angulartics2, Angulartics2Module } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for Angulartics2
 */
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(angulartics2, segment) {
        // options
        // https://github.com/angulartics/angulartics2/blob/master/src/core/angulartics2.ts#L90-L104
        // angulartics2.virtualPageviews(value: boolean);
        // angulartics2.excludeRoutes(routes: Array<string>);
        // angulartics2.firstPageview(value: boolean);
        // angulartics2.withBase(value: string);
        this.angulartics2 = angulartics2;
        this.segment = segment;
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
        { type: Injectable }
    ];
    /** @nocollapse */
    AnalyticsService.ctorParameters = function () { return [
        { type: Angulartics2 },
        { type: Angulartics2Segment }
    ]; };
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
        this.analytics.track(action, extend(properties, { category: this.category }));
    };
    /** @nocollapse */
    Analytics.ctorParameters = function () { return [
        { type: AnalyticsService, decorators: [{ type: Inject, args: [AnalyticsService,] }] }
    ]; };
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        Angulartics2Module.forRoot([
                            Angulartics2Segment
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

export { analyticsProviders, AnalyticsService, Analytics, AnalyticsModule };

//# sourceMappingURL=ceo-analytics.js.map