/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Loads the pane list
// Initializes it to the Pane class
// Serves as Pane Factory;
// uses pane attributes to build Pane objects
import * as _ from 'lodash';
import { BehaviorSubject, } from 'rxjs';
import { startWith, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PaneFactory } from './pane-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./pane-factory.service";
var PaneProvider = /** @class */ (function () {
    function PaneProvider(paneFactory) {
        var _this = this;
        this.paneFactory = paneFactory;
        this._activePane$ = new BehaviorSubject(null);
        this.panes = [];
        this._panes$ = this.paneFactory.build$();
        this._panes$.subscribe(function (panes) { return _this.setPanes(panes); });
    }
    Object.defineProperty(PaneProvider.prototype, "panes$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._panes$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaneProvider.prototype, "activePane$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activePane$.pipe(startWith(this.activePaneFromPanes(this.panes)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pane
     * @param {?} activeStatus
     * @return {?}
     */
    PaneProvider.prototype.setPaneActiveStatus = /**
     * @param {?} pane
     * @param {?} activeStatus
     * @return {?}
     */
    function (pane, activeStatus) {
        pane.setStatus(activeStatus);
        if (activeStatus) {
            this.emitActivePane(pane);
        }
        return true;
    };
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    PaneProvider.prototype.emitActivePanes = /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    function (panes) {
        /** @type {?} */
        var pane = this.activePaneFromPanes(panes);
        this.emitActivePane(pane);
    };
    /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    PaneProvider.prototype.emitActivePane = /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    function (pane) {
        this._activePane$.next(pane);
    };
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    PaneProvider.prototype.setPanes = /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    function (panes) {
        this.panes = panes;
        this.emitActivePanes(this.panes);
    };
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    PaneProvider.prototype.activePaneFromPanes = /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    function (panes) {
        return _.find(panes, 'active');
    };
    PaneProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PaneProvider.ctorParameters = function () { return [
        { type: PaneFactory }
    ]; };
    /** @nocollapse */ PaneProvider.ngInjectableDef = i0.defineInjectable({ factory: function PaneProvider_Factory() { return new PaneProvider(i0.inject(i1.PaneFactory)); }, token: PaneProvider, providedIn: "root" });
    return PaneProvider;
}());
export { PaneProvider };
if (false) {
    /** @type {?} */
    PaneProvider.prototype._panes$;
    /** @type {?} */
    PaneProvider.prototype._activePane$;
    /**
     * @type {?}
     * @private
     */
    PaneProvider.prototype.panes;
    /**
     * @type {?}
     * @private
     */
    PaneProvider.prototype.paneFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL3BhbmUtcHJvdmlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFFVyxlQUFlLEdBQ2hDLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUVMLFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFVLHdCQUF3QixDQUFBOzs7QUFFeEQ7SUFTRSxzQkFDVSxXQUF3QjtRQURsQyxpQkFNQztRQUxTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTGxDLGlCQUFZLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFBO1FBRTNELFVBQUssR0FBWSxFQUFFLENBQUM7UUFLMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBRXhDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCxzQkFBSSxnQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzNCLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2hELENBQUE7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7O0lBRUQsMENBQW1COzs7OztJQUFuQixVQUFvQixJQUFJLEVBQUUsWUFBWTtRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVCLElBQUcsWUFBWSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQzs7Ozs7O0lBRU8sc0NBQWU7Ozs7O0lBQXZCLFVBQXdCLEtBQUs7O1lBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8scUNBQWM7Ozs7O0lBQXRCLFVBQXVCLElBQUk7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sK0JBQVE7Ozs7O0lBQWhCLFVBQWlCLEtBQUs7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7Ozs7O0lBRU8sMENBQW1COzs7OztJQUEzQixVQUE0QixLQUFjO1FBQ3hDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Z0JBbkRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsV0FBVzs7O3VCQXBCcEI7Q0EwRUMsQUFwREQsSUFvREM7U0FqRFksWUFBWTs7O0lBQ3ZCLCtCQUE2Qjs7SUFDN0Isb0NBQW1FOzs7OztJQUVuRSw2QkFBNEI7Ozs7O0lBRzFCLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExvYWRzIHRoZSBwYW5lIGxpc3Rcbi8vIEluaXRpYWxpemVzIGl0IHRvIHRoZSBQYW5lIGNsYXNzXG4vLyBTZXJ2ZXMgYXMgUGFuZSBGYWN0b3J5O1xuLy8gdXNlcyBwYW5lIGF0dHJpYnV0ZXMgdG8gYnVpbGQgUGFuZSBvYmplY3RzXG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICB6aXAgYXMgb2JzZXJ2YWJsZVppcCwgIFxuICBPYnNlcnZhYmxlLCBvZiwgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpUGFuZVByb3ZpZGVyLCBpUGFuZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IFBhbmVGYWN0b3J5IH0gICAgIGZyb20gJy4vcGFuZS1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVQcm92aWRlciBpbXBsZW1lbnRzIGlQYW5lUHJvdmlkZXIge1xuICBfcGFuZXMkOiBPYnNlcnZhYmxlPGlQYW5lW10+O1xuICBfYWN0aXZlUGFuZSQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpXG5cbiAgcHJpdmF0ZSBwYW5lczogaVBhbmVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFuZUZhY3Rvcnk6IFBhbmVGYWN0b3J5XG4gICkge1xuICAgIHRoaXMuX3BhbmVzJCA9IHRoaXMucGFuZUZhY3RvcnkuYnVpbGQkKClcblxuICAgIHRoaXMuX3BhbmVzJC5zdWJzY3JpYmUocGFuZXMgPT4gdGhpcy5zZXRQYW5lcyhwYW5lcykpXG4gIH1cblxuICBnZXQgcGFuZXMkKCk6IE9ic2VydmFibGU8aVBhbmVbXT4ge1xuICAgIHJldHVybiB0aGlzLl9wYW5lcyRcbiAgfVxuXG4gIGdldCBhY3RpdmVQYW5lJCgpOiBPYnNlcnZhYmxlPGlQYW5lPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVBhbmUkLnBpcGUoXG4gICAgICBzdGFydFdpdGgodGhpcy5hY3RpdmVQYW5lRnJvbVBhbmVzKHRoaXMucGFuZXMpKVxuICAgIClcbiAgfVxuXG4gIHNldFBhbmVBY3RpdmVTdGF0dXMocGFuZSwgYWN0aXZlU3RhdHVzKTogYm9vbGVhbiB7XG4gICAgcGFuZS5zZXRTdGF0dXMoYWN0aXZlU3RhdHVzKVxuICAgIGlmKGFjdGl2ZVN0YXR1cykge1xuICAgICAgdGhpcy5lbWl0QWN0aXZlUGFuZShwYW5lKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0QWN0aXZlUGFuZXMocGFuZXMpIHtcbiAgICBsZXQgcGFuZSA9IHRoaXMuYWN0aXZlUGFuZUZyb21QYW5lcyhwYW5lcylcbiAgICB0aGlzLmVtaXRBY3RpdmVQYW5lKHBhbmUpXG4gIH1cblxuICBwcml2YXRlIGVtaXRBY3RpdmVQYW5lKHBhbmUpIHtcbiAgICB0aGlzLl9hY3RpdmVQYW5lJC5uZXh0KHBhbmUpIFxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYW5lcyhwYW5lcykge1xuICAgIHRoaXMucGFuZXMgPSBwYW5lc1xuICAgIHRoaXMuZW1pdEFjdGl2ZVBhbmVzKHRoaXMucGFuZXMpXG4gIH1cblxuICBwcml2YXRlIGFjdGl2ZVBhbmVGcm9tUGFuZXMocGFuZXM6IGlQYW5lW10pOiBpUGFuZSB7XG4gICAgcmV0dXJuIF8uZmluZChwYW5lcywgJ2FjdGl2ZScpXG4gIH1cbn1cblxuXG4vKlxuICBwcml2YXRlIHBhbmVzQnlOYW1lJChwYW5lTmFtZSk6IE9ic2VydmFibGU8aVBhbmVbXT4ge1xuICAgIHJldHVybiB0aGlzLl9wYW5lcyQucGlwZShcbiAgICAgIG1hcChwYW5lcyA9PiB0aGlzLnBhbmVzQnlOYW1lKHBhbmVzLCBwYW5lTmFtZSkpXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBwYW5lc0J5TmFtZShwYW5lcywgcGFuZU5hbWUpOiBpUGFuZVtdIHtcbiAgICByZXR1cm4gKDxpUGFuZVtdPiBfLmZpbHRlcihcbiAgICAgIHBhbmVzLCBcbiAgICAgIHtuYW1lOiBwYW5lTmFtZX1cbiAgICApKVxuICB9XG4qL1xuIl19