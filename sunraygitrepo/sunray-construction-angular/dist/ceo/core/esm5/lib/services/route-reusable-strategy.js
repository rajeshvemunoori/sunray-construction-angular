/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
var RouteReusableStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(RouteReusableStrategy, _super);
    function RouteReusableStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    RouteReusableStrategy.prototype.shouldDetach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return false;
    };
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    RouteReusableStrategy.prototype.store = /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    function (route, detachedTree) { };
    /**
     * @param {?} route
     * @return {?}
     */
    RouteReusableStrategy.prototype.shouldAttach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return false;
    };
    /**
     * @param {?} route
     * @return {?}
     */
    RouteReusableStrategy.prototype.retrieve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return null;
    };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    RouteReusableStrategy.prototype.shouldReuseRoute = /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        return (future.routeConfig === curr.routeConfig) || future.data.reuseRoute;
    };
    RouteReusableStrategy.decorators = [
        { type: Injectable }
    ];
    return RouteReusableStrategy;
}(RouteReuseStrategy));
export { RouteReusableStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcmV1c2FibGUtc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcm91dGUtcmV1c2FibGUtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Msa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTs7Ozs7O0FBT2pHO0lBQzJDLGlEQUFrQjtJQUQ3RDs7SUFvQkEsQ0FBQzs7Ozs7SUFqQlEsNENBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBNkI7UUFDL0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTSxxQ0FBSzs7Ozs7SUFBWixVQUFhLEtBQTZCLEVBQUUsWUFBd0MsSUFBVSxDQUFDOzs7OztJQUV4Riw0Q0FBWTs7OztJQUFuQixVQUFvQixLQUE2QjtRQUMvQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU0sd0NBQVE7Ozs7SUFBZixVQUFnQixLQUE2QjtRQUMzQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVNLGdEQUFnQjs7Ozs7SUFBdkIsVUFBd0IsTUFBOEIsRUFBRSxJQUE0QjtRQUNsRixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDNUUsQ0FBQzs7Z0JBbkJGLFVBQVU7O0lBb0JYLDRCQUFDO0NBQUEsQUFwQkQsQ0FDMkMsa0JBQWtCLEdBbUI1RDtTQW5CWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIERldGFjaGVkUm91dGVIYW5kbGUsIFJvdXRlUmV1c2VTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuLyoqXG4gKiBBIHJvdXRlIHN0cmF0ZWd5IGFsbG93aW5nIGZvciBleHBsaWNpdCByb3V0ZSByZXVzZS5cbiAqIFVzZWQgYXMgYSB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODM3NFxuICogVG8gcmV1c2UgYSBnaXZlbiByb3V0ZSwgYWRkIGBkYXRhOiB7IHJldXNlOiB0cnVlIH1gIHRvIHRoZSByb3V0ZSBkZWZpbml0aW9uLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVSZXVzYWJsZVN0cmF0ZWd5IGV4dGVuZHMgUm91dGVSZXVzZVN0cmF0ZWd5IHtcblxuICBwdWJsaWMgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHN0b3JlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBkZXRhY2hlZFRyZWU6IERldGFjaGVkUm91dGVIYW5kbGUgfCBudWxsKTogdm9pZCB7IH1cblxuICBwdWJsaWMgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogRGV0YWNoZWRSb3V0ZUhhbmRsZSB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHNob3VsZFJldXNlUm91dGUoZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChmdXR1cmUucm91dGVDb25maWcgPT09IGN1cnIucm91dGVDb25maWcpIHx8IGZ1dHVyZS5kYXRhLnJldXNlUm91dGVcbiAgfVxufVxuIl19