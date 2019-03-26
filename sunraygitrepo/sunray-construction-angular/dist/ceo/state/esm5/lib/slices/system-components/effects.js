/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, defer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
var SystemComponentsEffects = /** @class */ (function () {
    function SystemComponentsEffects(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.activateComponent$ = defer(function () { });
    }
    SystemComponentsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SystemComponentsEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], SystemComponentsEffects.prototype, "activateComponent$", void 0);
    return SystemComponentsEffects;
}());
export { SystemComponentsEffects };
if (false) {
    /** @type {?} */
    SystemComponentsEffects.prototype.activateComponent$;
    /**
     * @type {?}
     * @private
     */
    SystemComponentsEffects.prototype.store;
    /**
     * @type {?}
     * @private
     */
    SystemComponentsEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL3N5c3RlbS1jb21wb25lbnRzL2VmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBUyxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEQ7SUFFRSxpQ0FDVSxLQUFpQixFQUNqQixRQUFzQjtRQUR0QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFLaEMsdUJBQWtCLEdBQ2xCLEtBQUssQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFBO0lBTFosQ0FBQzs7Z0JBTEwsVUFBVTs7OztnQkFIRixLQUFLO2dCQUNMLE9BQU87O0lBV2Q7UUFEQyxNQUFNLEVBQUU7MENBQ1csVUFBVTt1RUFDZjtJQVNqQiw4QkFBQztDQUFBLEFBbkJELElBbUJDO1NBbEJZLHVCQUF1Qjs7O0lBT2xDLHFEQUVlOzs7OztJQVBiLHdDQUF5Qjs7Ozs7SUFDekIsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBkZWZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSAgICBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c3RlbUNvbXBvbmVudHNFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sXG4gICkge31cblxuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUNvbXBvbmVudCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gIGRlZmVyKCgpID0+IHt9KVxuICAgIC8vIFByb2JhYmx5IGRvbnQgd29ycnkgYWJvdXQgdGhpcyBhdCBhbGxcbiAgIC8vIHRoaXMuYWN0aW9ucyRcbiAgIC8vICAgLm9mVHlwZSgnW1N5c3RlbUNvbXBvbmVudHNdIEFDVElWQVRFX0NPTVBPTkVOVCcpXG4gICAvLyAgIC5waXBlKFxuICAgLy8gICAgIF8ubWFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgIC8vICAgICAgIGFsZXJ0KFwiU3lzdGVtIENvbXBvbmVudCByZXF1ZXN0ZWRcIilcbiAgIC8vICAgICB9KVxuICAgLy8gICApXG59XG4iXX0=