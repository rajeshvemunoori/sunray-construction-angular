/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
var LogEffects = /** @class */ (function () {
    function LogEffects(actions$) {
        var _this = this;
        this.actions$ = actions$;
        this.log$ = this.actions$
            .pipe(tap(function (action) { return _this.log(action); }));
    }
    /**
     * @private
     * @param {?} action
     * @param {?=} loggingEnabled
     * @return {?}
     */
    LogEffects.prototype.log = /**
     * @private
     * @param {?} action
     * @param {?=} loggingEnabled
     * @return {?}
     */
    function (action, loggingEnabled) {
        if (loggingEnabled === void 0) { loggingEnabled = false; }
        if (loggingEnabled) {
            console.log(action);
        }
    };
    LogEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LogEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Observable)
    ], LogEffects.prototype, "log$", void 0);
    return LogEffects;
}());
export { LogEffects };
if (false) {
    /** @type {?} */
    LogEffects.prototype.log$;
    /**
     * @type {?}
     * @private
     */
    LogEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3N0YXRlLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvbG9nLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhEO0lBRUUsb0JBQW9CLFFBQWlCO1FBQXJDLGlCQUF5QztRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBR3JDLFNBQUksR0FDRixJQUFJLENBQUMsUUFBUTthQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztJQUxILENBQUM7Ozs7Ozs7SUFRakMsd0JBQUc7Ozs7OztJQUFYLFVBQVksTUFBVyxFQUFFLGNBQStCO1FBQS9CLCtCQUFBLEVBQUEsc0JBQStCO1FBQ3RELElBQUcsY0FBYyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDcEI7SUFDSCxDQUFDOztnQkFkRixVQUFVOzs7O2dCQUZGLE9BQU87O0lBT2Q7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQ3RCLFVBQVU7NENBRTJCO0lBUTdDLGlCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksVUFBVTs7O0lBR3JCLDBCQUcyQzs7Ozs7SUFML0IsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9uIH0gICAgICAgICAgZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cblxuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIGxvZyQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUodGFwKGFjdGlvbiA9PiB0aGlzLmxvZyhhY3Rpb24pKSk7XG5cblxuICBwcml2YXRlIGxvZyhhY3Rpb246IGFueSwgbG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmKGxvZ2dpbmdFbmFibGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgfVxuICB9XG59XG4iXX0=