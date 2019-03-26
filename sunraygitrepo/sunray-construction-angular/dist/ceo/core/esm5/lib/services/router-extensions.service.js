/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// angular
import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
/**
 * @record
 */
export function ExtendedNavigationExtras() { }
if (false) {
    /** @type {?|undefined} */
    ExtendedNavigationExtras.prototype.clearHistory;
    /** @type {?|undefined} */
    ExtendedNavigationExtras.prototype.animated;
    /** @type {?|undefined} */
    ExtendedNavigationExtras.prototype.transition;
}
/**
 * @record
 */
export function IRouterExtensions() { }
if (false) {
    /**
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    IRouterExtensions.prototype.navigate = function (commands, extras) { };
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    IRouterExtensions.prototype.navigateByUrl = function (url, options) { };
    /**
     * @return {?}
     */
    IRouterExtensions.prototype.back = function () { };
}
var RouterExtensions = /** @class */ (function () {
    function RouterExtensions(router, locationStrategy) {
        this.router = router;
        this.locationStrategy = locationStrategy;
    }
    /**
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    RouterExtensions.prototype.navigate = /**
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    function (commands, extras) {
        return this.router.navigate(commands, extras);
    };
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    RouterExtensions.prototype.navigateByUrl = /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.router.navigateByUrl(url);
    };
    /**
     * @return {?}
     */
    RouterExtensions.prototype.back = /**
     * @return {?}
     */
    function () {
        this.locationStrategy.back();
    };
    RouterExtensions.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouterExtensions.ctorParameters = function () { return [
        { type: Router },
        { type: LocationStrategy }
    ]; };
    return RouterExtensions;
}());
export { RouterExtensions };
if (false) {
    /** @type {?} */
    RouterExtensions.prototype.router;
    /**
     * @type {?}
     * @private
     */
    RouterExtensions.prototype.locationStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWV4dGVuc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9yb3V0ZXItZXh0ZW5zaW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUE2QixNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXBFLDhDQVdDOzs7SUFUQyxnREFBdUI7O0lBQ3ZCLDRDQUFtQjs7SUFDbkIsOENBS0U7Ozs7O0FBSUosdUNBSUM7Ozs7Ozs7SUFIQyx1RUFBb0Y7Ozs7OztJQUNwRix3RUFBMkY7Ozs7SUFDM0YsbURBQWE7O0FBR2Y7SUFHRSwwQkFBbUIsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7Ozs7OztJQUUzRSxtQ0FBUTs7Ozs7SUFBZixVQUFnQixRQUFvQixFQUFFLE1BQWlDO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUVNLHdDQUFhOzs7OztJQUFwQixVQUFxQixHQUFxQixFQUFFLE9BQWtDO1FBQzVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLCtCQUFJOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOztnQkFmRixVQUFVOzs7O2dCQXJCRixNQUFNO2dCQUROLGdCQUFnQjs7SUFzQ3pCLHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxnQkFBZ0I7OztJQUVmLGtDQUFxQjs7Ozs7SUFBRSw0Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgVXJsVHJlZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzIGV4dGVuZHMgTmF2aWdhdGlvbkV4dHJhcyB7XG4gIC8vIE9wdGlvbnMgZm9yIG5hdGl2ZXNjcmlwdFxuICBjbGVhckhpc3Rvcnk/OiBib29sZWFuO1xuICBhbmltYXRlZD86IGJvb2xlYW47XG4gIHRyYW5zaXRpb24/OiB7IC8vIFNlZSAtPiBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2ludGVyZmFjZXMvX3VpX2ZyYW1lXy5uYXZpZ2F0aW9udHJhbnNpdGlvbi5odG1sXG4gICAgbmFtZT86IHN0cmluZztcbiAgICBpbnN0YW5jZT86IGFueTtcbiAgICBkdXJhdGlvbj86IG51bWJlcjtcbiAgICBjdXJ2ZT86IGFueTtcbiAgfTtcbiAgLy8gRU5EIC0gT3B0aW9ucyBmb3IgbmF0aXZlc2NyaXB0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlckV4dGVuc2lvbnMge1xuICBuYXZpZ2F0ZShjb21tYW5kczogQXJyYXk8YW55PiwgZXh0cmFzPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPjtcbiAgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyB8IFVybFRyZWUsIG9wdGlvbnM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+O1xuICBiYWNrKCk6IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJFeHRlbnNpb25zIGltcGxlbWVudHMgSVJvdXRlckV4dGVuc2lvbnMge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5KSB7IH1cblxuICBwdWJsaWMgbmF2aWdhdGUoY29tbWFuZHM6IEFycmF5PGFueT4sIGV4dHJhcz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShjb21tYW5kcywgZXh0cmFzKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZUJ5VXJsKHVybDogc3RyaW5nIHwgVXJsVHJlZSwgb3B0aW9ucz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gIH1cblxuICBwdWJsaWMgYmFjaygpIHtcbiAgICB0aGlzLmxvY2F0aW9uU3RyYXRlZ3kuYmFjaygpO1xuICB9XG59XG4iXX0=