import { extend } from 'lodash';
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
class AnalyticsService {
    /**
     * @param {?} angulartics2
     * @param {?} segment
     */
    constructor(angulartics2, segment) {
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
     *
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    track(action, properties) {
        if (!this.devMode()) {
            this.segment.eventTrack(action, properties);
        }
    }
    /**
     * Called automatically by default with Angular 2 Routing
     * However, that can be turned off and this could be used manually
     *
     * @param {?} path
     * @param {?} location
     * @return {?}
     */
    pageTrack(path, location) {
        if (!this.devMode()) {
            //this.segment.pageTrack(path, location);
            this.segment.pageTrack(path);
        }
    }
    /**
     * Identify authenticated users
     *
     * @param {?} properties
     * @return {?}
     */
    identify(properties) {
        if (!this.devMode()) {
            this.segment.setUserProperties(properties);
        }
    }
    /**
     * Control whether analytics are tracked
     * true: dev mode on, therefore do not track anything
     * false: dev mode off, track everything
     *
     * @param {?=} enable
     * @return {?}
     */
    devMode(enable) {
        //if (typeof enable !== 'undefined') {
        //  this.angulartics2.developerMode(enable);
        //}
        return this.angulartics2.settings.developerMode;
    }
}
AnalyticsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnalyticsService.ctorParameters = () => [
    { type: Angulartics2 },
    { type: Angulartics2Segment }
];
/**
 * Base class
 * Standardizes tracking actions and categorization
 */
class Analytics {
    /**
     * @param {?} analytics
     */
    constructor(analytics) {
        this.analytics = analytics;
    }
    /**
     * Track actions, events, etc.
     *
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    track(action, properties) {
        this.analytics.track(action, extend(properties, { category: this.category }));
    }
}
/** @nocollapse */
Analytics.ctorParameters = () => [
    { type: AnalyticsService, decorators: [{ type: Inject, args: [AnalyticsService,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const analyticsProviders = [
    AnalyticsService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnalyticsModule {
}
AnalyticsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    Angulartics2Module.forRoot([
                        Angulartics2Segment
                    ])
                ],
                providers: [
                    ...analyticsProviders
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

export { analyticsProviders, AnalyticsService, Analytics, AnalyticsModule };

//# sourceMappingURL=ceo-analytics.js.map