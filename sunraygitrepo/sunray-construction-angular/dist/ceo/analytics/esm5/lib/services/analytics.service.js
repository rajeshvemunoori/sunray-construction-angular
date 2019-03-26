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
export { AnalyticsService };
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
    Analytics.ctorParameters = function () { return [
        { type: AnalyticsService, decorators: [{ type: Inject, args: [AnalyticsService,] }] }
    ]; };
    return Analytics;
}());
export { Analytics };
if (false) {
    /** @type {?} */
    Analytics.prototype.category;
    /** @type {?} */
    Analytics.prototype.analytics;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2FuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUc1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFPLHNCQUFzQixDQUFDOzs7O0FBRTVELDBDQUlDOzs7SUFIQyx3Q0FBa0I7O0lBQ2xCLHFDQUFlOztJQUNmLHFDQUFlOzs7OztBQUdqQixnQ0FFQzs7Ozs7OztJQURDLCtEQUE4RDs7Ozs7QUFNaEU7SUFFRSwwQkFBb0IsWUFBMEIsRUFBVSxPQUE0QjtRQUNsRixVQUFVO1FBQ1YsNEZBQTRGO1FBQzVGLGlEQUFpRDtRQUNqRCxxREFBcUQ7UUFDckQsOENBQThDO1FBQzlDLHdDQUF3QztRQU50QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBUWxGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVEOztRQUVJOzs7Ozs7OztJQUNHLGdDQUFLOzs7Ozs7O0lBQVosVUFBYSxNQUFjLEVBQUUsVUFBZ0M7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQ7OztRQUdJOzs7Ozs7Ozs7SUFDRyxvQ0FBUzs7Ozs7Ozs7SUFBaEIsVUFBaUIsSUFBWSxFQUFFLFFBQWE7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQix5Q0FBeUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQ7O1FBRUk7Ozs7Ozs7SUFDRyxtQ0FBUTs7Ozs7O0lBQWYsVUFBZ0IsVUFBZTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQ7Ozs7UUFJSTs7Ozs7Ozs7O0lBQ0csa0NBQU87Ozs7Ozs7O0lBQWQsVUFBZSxNQUFnQjtRQUM3QixzQ0FBc0M7UUFDdEMsNENBQTRDO1FBQzVDLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDOztnQkFwREYsVUFBVTs7OztnQkFoQkYsWUFBWTtnQkFDWixtQkFBbUI7O0lBb0U1Qix1QkFBQztDQUFBLEFBckRELElBcURDO1NBcERZLGdCQUFnQjs7Ozs7O0lBQ2Ysd0NBQWtDOzs7OztJQUFFLG1DQUFvQzs7Ozs7O0FBeUR0RjtJQUlFLG1CQUE2QyxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUV4RSxDQUFDO0lBRUQ7O1FBRUk7Ozs7Ozs7O0lBQ0oseUJBQUs7Ozs7Ozs7SUFBTCxVQUFNLE1BQWMsRUFBRSxVQUFnQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Z0JBVHVELGdCQUFnQix1QkFBM0QsTUFBTSxTQUFDLGdCQUFnQjs7SUFVdEMsZ0JBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxTQUFTOzs7SUFFcEIsNkJBQXdCOztJQUVaLDhCQUE0RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZlbmRvclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlNlZ21lbnQgfSAgZnJvbSAnYW5ndWxhcnRpY3MyL3NlZ21lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIGlBbmFseXRpY3NQcm9wZXJ0aWVzIHtcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB2YWx1ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpQW5hbHl0aWNzIHtcbiAgdHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGlBbmFseXRpY3NQcm9wZXJ0aWVzKTogdm9pZDtcbn1cblxuLyoqXG4gKiBXcmFwcGVyIGZvciBBbmd1bGFydGljczJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2UgaW1wbGVtZW50cyBpQW5hbHl0aWNzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBzZWdtZW50OiBBbmd1bGFydGljczJTZWdtZW50KSB7XG4gICAgLy8gb3B0aW9uc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFydGljcy9hbmd1bGFydGljczIvYmxvYi9tYXN0ZXIvc3JjL2NvcmUvYW5ndWxhcnRpY3MyLnRzI0w5MC1MMTA0XG4gICAgLy8gYW5ndWxhcnRpY3MyLnZpcnR1YWxQYWdldmlld3ModmFsdWU6IGJvb2xlYW4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi5leGNsdWRlUm91dGVzKHJvdXRlczogQXJyYXk8c3RyaW5nPik7XG4gICAgLy8gYW5ndWxhcnRpY3MyLmZpcnN0UGFnZXZpZXcodmFsdWU6IGJvb2xlYW4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi53aXRoQmFzZSh2YWx1ZTogc3RyaW5nKTtcblxuICAgIHRoaXMuZGV2TW9kZShmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXG4gICAqKi9cbiAgcHVibGljIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBpQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5ldmVudFRyYWNrKGFjdGlvbiwgcHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IGJ5IGRlZmF1bHQgd2l0aCBBbmd1bGFyIDIgUm91dGluZ1xuICAgKiBIb3dldmVyLCB0aGF0IGNhbiBiZSB0dXJuZWQgb2ZmIGFuZCB0aGlzIGNvdWxkIGJlIHVzZWQgbWFudWFsbHlcbiAgICoqL1xuICBwdWJsaWMgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb246IGFueSkge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIC8vdGhpcy5zZWdtZW50LnBhZ2VUcmFjayhwYXRoLCBsb2NhdGlvbik7XG4gICAgICB0aGlzLnNlZ21lbnQucGFnZVRyYWNrKHBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGlmeSBhdXRoZW50aWNhdGVkIHVzZXJzXG4gICAqKi9cbiAgcHVibGljIGlkZW50aWZ5KHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5zZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB3aGV0aGVyIGFuYWx5dGljcyBhcmUgdHJhY2tlZFxuICAgKiB0cnVlOiBkZXYgbW9kZSBvbiwgdGhlcmVmb3JlIGRvIG5vdCB0cmFjayBhbnl0aGluZ1xuICAgKiBmYWxzZTogZGV2IG1vZGUgb2ZmLCB0cmFjayBldmVyeXRoaW5nXG4gICAqKi9cbiAgcHVibGljIGRldk1vZGUoZW5hYmxlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIC8vaWYgKHR5cGVvZiBlbmFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gIHRoaXMuYW5ndWxhcnRpY3MyLmRldmVsb3Blck1vZGUoZW5hYmxlKTtcbiAgICAvL31cbiAgICByZXR1cm4gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZTtcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3NcbiAqIFN0YW5kYXJkaXplcyB0cmFja2luZyBhY3Rpb25zIGFuZCBjYXRlZ29yaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzIGltcGxlbWVudHMgaUFuYWx5dGljcyB7XG4gIC8vIHN1Yi1jbGFzc2VzIHNob3VsZCBkZWZpbmUgdGhlaXIgY2F0ZWdvcnlcbiAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBbmFseXRpY3NTZXJ2aWNlKSBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBhY3Rpb25zLCBldmVudHMsIGV0Yy5cbiAgICoqL1xuICB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogaUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcbiAgICB0aGlzLmFuYWx5dGljcy50cmFjayhhY3Rpb24sIF8uZXh0ZW5kKHByb3BlcnRpZXMsIHsgY2F0ZWdvcnk6IHRoaXMuY2F0ZWdvcnkgfSkpO1xuICB9XG59XG4iXX0=