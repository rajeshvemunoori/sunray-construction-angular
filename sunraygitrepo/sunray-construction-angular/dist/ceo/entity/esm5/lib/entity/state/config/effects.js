/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, defer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
var EntityConfigEffects = /** @class */ (function () {
    function EntityConfigEffects(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.init$ = defer(function () { });
    }
    EntityConfigEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityConfigEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], EntityConfigEffects.prototype, "init$", void 0);
    return EntityConfigEffects;
}());
export { EntityConfigEffects };
if (false) {
    /** @type {?} */
    EntityConfigEffects.prototype.init$;
    /**
     * @type {?}
     * @private
     */
    EntityConfigEffects.prototype.store;
    /**
     * @type {?}
     * @private
     */
    EntityConfigEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zdGF0ZS9jb25maWcvZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQU0sS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRTVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFTLGFBQWEsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQTtBQUd2RDtJQUVFLDZCQUNVLEtBQWlCLEVBQ2pCLFFBQXNCO1FBRHRCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUtoQyxVQUFLLEdBQ0gsS0FBSyxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUE7SUFMZCxDQUFDOztnQkFMTCxVQUFVOzs7O2dCQUpGLEtBQUs7Z0JBQ0wsT0FBTzs7SUFZZDtRQURDLE1BQU0sRUFBRTswQ0FDRixVQUFVO3NEQUNBO0lBQ25CLDBCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksbUJBQW1COzs7SUFPOUIsb0NBRWlCOzs7OztJQVBmLG9DQUF5Qjs7Ozs7SUFDekIsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGRlZmVyIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSAgICBmcm9tICdAbmdyeC9zdG9yZSdcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cydcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5Q29uZmlnRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LFxuICApIHt9XG5cblxuICBARWZmZWN0KClcbiAgaW5pdCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgZGVmZXIoKCkgPT4ge30pXG59XG4iXX0=