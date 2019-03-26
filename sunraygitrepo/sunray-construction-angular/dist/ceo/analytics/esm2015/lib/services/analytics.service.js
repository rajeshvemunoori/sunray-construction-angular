/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// vendor
import * as _ from 'lodash';
// angular
import { Injectable, Inject } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';
/**
 * @record
 */
export function iAnalyticsProperties() { }
if (false) {
    /** @type {?|undefined} */
    iAnalyticsProperties.prototype.category;
    /** @type {?|undefined} */
    iAnalyticsProperties.prototype.label;
    /** @type {?|undefined} */
    iAnalyticsProperties.prototype.value;
}
/**
 * @record
 */
export function iAnalytics() { }
if (false) {
    /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    iAnalytics.prototype.track = function (action, properties) { };
}
/**
 * Wrapper for Angulartics2
 */
export class AnalyticsService {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.angulartics2;
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.segment;
}
/**
 * Base class
 * Standardizes tracking actions and categorization
 */
export class Analytics {
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
        this.analytics.track(action, _.extend(properties, { category: this.category }));
    }
}
/** @nocollapse */
Analytics.ctorParameters = () => [
    { type: AnalyticsService, decorators: [{ type: Inject, args: [AnalyticsService,] }] }
];
if (false) {
    /** @type {?} */
    Analytics.prototype.category;
    /** @type {?} */
    Analytics.prototype.analytics;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2FuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUc1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFPLHNCQUFzQixDQUFDOzs7O0FBRTVELDBDQUlDOzs7SUFIQyx3Q0FBa0I7O0lBQ2xCLHFDQUFlOztJQUNmLHFDQUFlOzs7OztBQUdqQixnQ0FFQzs7Ozs7OztJQURDLCtEQUE4RDs7Ozs7QUFPaEUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFBb0IsWUFBMEIsRUFBVSxPQUE0QjtRQUNsRixVQUFVO1FBQ1YsNEZBQTRGO1FBQzVGLGlEQUFpRDtRQUNqRCxxREFBcUQ7UUFDckQsOENBQThDO1FBQzlDLHdDQUF3QztRQU50QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBUWxGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7SUFLTSxLQUFLLENBQUMsTUFBYyxFQUFFLFVBQWdDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBTU0sU0FBUyxDQUFDLElBQVksRUFBRSxRQUFhO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIseUNBQXlDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7OztJQUtNLFFBQVEsQ0FBQyxVQUFlO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7Ozs7OztJQU9NLE9BQU8sQ0FBQyxNQUFnQjtRQUM3QixzQ0FBc0M7UUFDdEMsNENBQTRDO1FBQzVDLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDOzs7WUFwREYsVUFBVTs7OztZQWhCRixZQUFZO1lBQ1osbUJBQW1COzs7Ozs7O0lBaUJkLHdDQUFrQzs7Ozs7SUFBRSxtQ0FBb0M7Ozs7OztBQXlEdEYsTUFBTSxPQUFPLFNBQVM7Ozs7SUFJcEIsWUFBNkMsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFeEUsQ0FBQzs7Ozs7Ozs7SUFLRCxLQUFLLENBQUMsTUFBYyxFQUFFLFVBQWdDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7WUFUdUQsZ0JBQWdCLHVCQUEzRCxNQUFNLFNBQUMsZ0JBQWdCOzs7O0lBRnBDLDZCQUF3Qjs7SUFFWiw4QkFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2ZW5kb3JcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5pbXBvcnQgeyBBbmd1bGFydGljczJTZWdtZW50IH0gIGZyb20gJ2FuZ3VsYXJ0aWNzMi9zZWdtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBpQW5hbHl0aWNzUHJvcGVydGllcyB7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgdmFsdWU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaUFuYWx5dGljcyB7XG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBpQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQ7XG59XG5cbi8qKlxuICogV3JhcHBlciBmb3IgQW5ndWxhcnRpY3MyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIGltcGxlbWVudHMgaUFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsIHByaXZhdGUgc2VnbWVudDogQW5ndWxhcnRpY3MyU2VnbWVudCkge1xuICAgIC8vIG9wdGlvbnNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhcnRpY3MvYW5ndWxhcnRpY3MyL2Jsb2IvbWFzdGVyL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMi50cyNMOTAtTDEwNFxuICAgIC8vIGFuZ3VsYXJ0aWNzMi52aXJ0dWFsUGFnZXZpZXdzKHZhbHVlOiBib29sZWFuKTtcbiAgICAvLyBhbmd1bGFydGljczIuZXhjbHVkZVJvdXRlcyhyb3V0ZXM6IEFycmF5PHN0cmluZz4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi5maXJzdFBhZ2V2aWV3KHZhbHVlOiBib29sZWFuKTtcbiAgICAvLyBhbmd1bGFydGljczIud2l0aEJhc2UodmFsdWU6IHN0cmluZyk7XG5cbiAgICB0aGlzLmRldk1vZGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIGFjdGlvbnMsIGV2ZW50cywgZXRjLlxuICAgKiovXG4gIHB1YmxpYyB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogaUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQuZXZlbnRUcmFjayhhY3Rpb24sIHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgYXV0b21hdGljYWxseSBieSBkZWZhdWx0IHdpdGggQW5ndWxhciAyIFJvdXRpbmdcbiAgICogSG93ZXZlciwgdGhhdCBjYW4gYmUgdHVybmVkIG9mZiBhbmQgdGhpcyBjb3VsZCBiZSB1c2VkIG1hbnVhbGx5XG4gICAqKi9cbiAgcHVibGljIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICAvL3RoaXMuc2VnbWVudC5wYWdlVHJhY2socGF0aCwgbG9jYXRpb24pO1xuICAgICAgdGhpcy5zZWdtZW50LnBhZ2VUcmFjayhwYXRoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWRlbnRpZnkgYXV0aGVudGljYXRlZCB1c2Vyc1xuICAgKiovXG4gIHB1YmxpYyBpZGVudGlmeShwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQuc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgd2hldGhlciBhbmFseXRpY3MgYXJlIHRyYWNrZWRcbiAgICogdHJ1ZTogZGV2IG1vZGUgb24sIHRoZXJlZm9yZSBkbyBub3QgdHJhY2sgYW55dGhpbmdcbiAgICogZmFsc2U6IGRldiBtb2RlIG9mZiwgdHJhY2sgZXZlcnl0aGluZ1xuICAgKiovXG4gIHB1YmxpYyBkZXZNb2RlKGVuYWJsZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAvL2lmICh0eXBlb2YgZW5hYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vICB0aGlzLmFuZ3VsYXJ0aWNzMi5kZXZlbG9wZXJNb2RlKGVuYWJsZSk7XG4gICAgLy99XG4gICAgcmV0dXJuIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmRldmVsb3Blck1vZGU7XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzXG4gKiBTdGFuZGFyZGl6ZXMgdHJhY2tpbmcgYWN0aW9ucyBhbmQgY2F0ZWdvcml6YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFuYWx5dGljcyBpbXBsZW1lbnRzIGlBbmFseXRpY3Mge1xuICAvLyBzdWItY2xhc3NlcyBzaG91bGQgZGVmaW5lIHRoZWlyIGNhdGVnb3J5XG4gIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQW5hbHl0aWNzU2VydmljZSkgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSkge1xuXG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXG4gICAqKi9cbiAgdHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGlBbmFseXRpY3NQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgdGhpcy5hbmFseXRpY3MudHJhY2soYWN0aW9uLCBfLmV4dGVuZChwcm9wZXJ0aWVzLCB7IGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5IH0pKTtcbiAgfVxufVxuIl19