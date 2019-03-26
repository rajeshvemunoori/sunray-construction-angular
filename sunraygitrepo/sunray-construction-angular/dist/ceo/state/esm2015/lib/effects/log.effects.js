/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
export class LogEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.log$ = this.actions$
            .pipe(tap(action => this.log(action)));
    }
    /**
     * @private
     * @param {?} action
     * @param {?=} loggingEnabled
     * @return {?}
     */
    log(action, loggingEnabled = false) {
        if (loggingEnabled) {
            console.log(action);
        }
    }
}
LogEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LogEffects.ctorParameters = () => [
    { type: Actions }
];
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Observable)
], LogEffects.prototype, "log$", void 0);
if (false) {
    /** @type {?} */
    LogEffects.prototype.log$;
    /**
     * @type {?}
     * @private
     */
    LogEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3N0YXRlLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvbG9nLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hELE1BQU0sT0FBTyxVQUFVOzs7O0lBQ3JCLFlBQW9CLFFBQWlCO1FBQWpCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFHckMsU0FBSSxHQUNGLElBQUksQ0FBQyxRQUFRO2FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTEgsQ0FBQzs7Ozs7OztJQVFqQyxHQUFHLENBQUMsTUFBVyxFQUFFLGlCQUEwQixLQUFLO1FBQ3RELElBQUcsY0FBYyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDcEI7SUFDSCxDQUFDOzs7WUFkRixVQUFVOzs7O1lBRkYsT0FBTzs7QUFPZDtJQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FDdEIsVUFBVTt3Q0FFMkI7OztJQUgzQywwQkFHMkM7Ozs7O0lBTC9CLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbiB9ICAgICAgICAgIGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMpIHt9XG5cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBsb2ckOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKHRhcChhY3Rpb24gPT4gdGhpcy5sb2coYWN0aW9uKSkpO1xuXG5cbiAgcHJpdmF0ZSBsb2coYWN0aW9uOiBhbnksIGxvZ2dpbmdFbmFibGVkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZihsb2dnaW5nRW5hYmxlZCkge1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxuICAgIH1cbiAgfVxufVxuIl19