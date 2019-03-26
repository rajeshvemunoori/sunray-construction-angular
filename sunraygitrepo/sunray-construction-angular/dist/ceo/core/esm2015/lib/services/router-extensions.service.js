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
export class RouterExtensions {
    /**
     * @param {?} router
     * @param {?} locationStrategy
     */
    constructor(router, locationStrategy) {
        this.router = router;
        this.locationStrategy = locationStrategy;
    }
    /**
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    navigate(commands, extras) {
        return this.router.navigate(commands, extras);
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateByUrl(url, options) {
        return this.router.navigateByUrl(url);
    }
    /**
     * @return {?}
     */
    back() {
        this.locationStrategy.back();
    }
}
RouterExtensions.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterExtensions.ctorParameters = () => [
    { type: Router },
    { type: LocationStrategy }
];
if (false) {
    /** @type {?} */
    RouterExtensions.prototype.router;
    /**
     * @type {?}
     * @private
     */
    RouterExtensions.prototype.locationStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWV4dGVuc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9yb3V0ZXItZXh0ZW5zaW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUE2QixNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXBFLDhDQVdDOzs7SUFUQyxnREFBdUI7O0lBQ3ZCLDRDQUFtQjs7SUFDbkIsOENBS0U7Ozs7O0FBSUosdUNBSUM7Ozs7Ozs7SUFIQyx1RUFBb0Y7Ozs7OztJQUNwRix3RUFBMkY7Ozs7SUFDM0YsbURBQWE7O0FBSWYsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFM0IsWUFBbUIsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7Ozs7OztJQUUzRSxRQUFRLENBQUMsUUFBb0IsRUFBRSxNQUFpQztRQUNyRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFTSxhQUFhLENBQUMsR0FBcUIsRUFBRSxPQUFrQztRQUM1RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7OztZQWZGLFVBQVU7Ozs7WUFyQkYsTUFBTTtZQUROLGdCQUFnQjs7OztJQXlCWCxrQ0FBcUI7Ozs7O0lBQUUsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIFVybFRyZWUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyBleHRlbmRzIE5hdmlnYXRpb25FeHRyYXMge1xuICAvLyBPcHRpb25zIGZvciBuYXRpdmVzY3JpcHRcbiAgY2xlYXJIaXN0b3J5PzogYm9vbGVhbjtcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICB0cmFuc2l0aW9uPzogeyAvLyBTZWUgLT4gaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9pbnRlcmZhY2VzL191aV9mcmFtZV8ubmF2aWdhdGlvbnRyYW5zaXRpb24uaHRtbFxuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgaW5zdGFuY2U/OiBhbnk7XG4gICAgZHVyYXRpb24/OiBudW1iZXI7XG4gICAgY3VydmU/OiBhbnk7XG4gIH07XG4gIC8vIEVORCAtIE9wdGlvbnMgZm9yIG5hdGl2ZXNjcmlwdFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJFeHRlbnNpb25zIHtcbiAgbmF2aWdhdGUoY29tbWFuZHM6IEFycmF5PGFueT4sIGV4dHJhcz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj47XG4gIG5hdmlnYXRlQnlVcmwodXJsOiBzdHJpbmcgfCBVcmxUcmVlLCBvcHRpb25zPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPjtcbiAgYmFjaygpOiB2b2lkO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyRXh0ZW5zaW9ucyBpbXBsZW1lbnRzIElSb3V0ZXJFeHRlbnNpb25zIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSkgeyB9XG5cbiAgcHVibGljIG5hdmlnYXRlKGNvbW1hbmRzOiBBcnJheTxhbnk+LCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoY29tbWFuZHMsIGV4dHJhcyk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyB8IFVybFRyZWUsIG9wdGlvbnM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICB9XG5cbiAgcHVibGljIGJhY2soKSB7XG4gICAgdGhpcy5sb2NhdGlvblN0cmF0ZWd5LmJhY2soKTtcbiAgfVxufVxuIl19