/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
export class RouteReusableStrategy extends RouteReuseStrategy {
    /**
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) {
        return false;
    }
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    store(route, detachedTree) { }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) {
        return false;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    retrieve(route) {
        return null;
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        return (future.routeConfig === curr.routeConfig) || future.data.reuseRoute;
    }
}
RouteReusableStrategy.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcmV1c2FibGUtc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcm91dGUtcmV1c2FibGUtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQyxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFBOzs7Ozs7QUFRakcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQjs7Ozs7SUFFcEQsWUFBWSxDQUFDLEtBQTZCO1FBQy9DLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQTZCLEVBQUUsWUFBd0MsSUFBVSxDQUFDOzs7OztJQUV4RixZQUFZLENBQUMsS0FBNkI7UUFDL0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUE2QjtRQUMzQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVNLGdCQUFnQixDQUFDLE1BQThCLEVBQUUsSUFBNEI7UUFDbEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzVFLENBQUM7OztZQW5CRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBEZXRhY2hlZFJvdXRlSGFuZGxlLCBSb3V0ZVJldXNlU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cbi8qKlxuICogQSByb3V0ZSBzdHJhdGVneSBhbGxvd2luZyBmb3IgZXhwbGljaXQgcm91dGUgcmV1c2UuXG4gKiBVc2VkIGFzIGEgd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgzNzRcbiAqIFRvIHJldXNlIGEgZ2l2ZW4gcm91dGUsIGFkZCBgZGF0YTogeyByZXVzZTogdHJ1ZSB9YCB0byB0aGUgcm91dGUgZGVmaW5pdGlvbi5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlUmV1c2FibGVTdHJhdGVneSBleHRlbmRzIFJvdXRlUmV1c2VTdHJhdGVneSB7XG5cbiAgcHVibGljIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9yZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgZGV0YWNoZWRUcmVlOiBEZXRhY2hlZFJvdXRlSGFuZGxlIHwgbnVsbCk6IHZvaWQgeyB9XG5cbiAgcHVibGljIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IERldGFjaGVkUm91dGVIYW5kbGUgfCBudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRSZXVzZVJvdXRlKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoZnV0dXJlLnJvdXRlQ29uZmlnID09PSBjdXJyLnJvdXRlQ29uZmlnKSB8fCBmdXR1cmUuZGF0YS5yZXVzZVJvdXRlXG4gIH1cbn1cbiJdfQ==