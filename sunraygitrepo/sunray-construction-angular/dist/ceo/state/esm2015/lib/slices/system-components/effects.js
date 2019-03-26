/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, defer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
export class SystemComponentsEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     */
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.activateComponent$ = defer(() => { });
    }
}
SystemComponentsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SystemComponentsEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], SystemComponentsEffects.prototype, "activateComponent$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL3N5c3RlbS1jb21wb25lbnRzL2VmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBUyxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFDbEMsWUFDVSxLQUFpQixFQUNqQixRQUFzQjtRQUR0QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFLaEMsdUJBQWtCLEdBQ2xCLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQTtJQUxaLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFIRixLQUFLO1lBQ0wsT0FBTzs7QUFXZDtJQURDLE1BQU0sRUFBRTtzQ0FDVyxVQUFVO21FQUNmOzs7SUFGZixxREFFZTs7Ozs7SUFQYix3Q0FBeUI7Ozs7O0lBQ3pCLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGVmZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gICAgZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXN0ZW1Db21wb25lbnRzRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LFxuICApIHt9XG5cblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVDb21wb25lbnQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICBkZWZlcigoKSA9PiB7fSlcbiAgICAvLyBQcm9iYWJseSBkb250IHdvcnJ5IGFib3V0IHRoaXMgYXQgYWxsXG4gICAvLyB0aGlzLmFjdGlvbnMkXG4gICAvLyAgIC5vZlR5cGUoJ1tTeXN0ZW1Db21wb25lbnRzXSBBQ1RJVkFURV9DT01QT05FTlQnKVxuICAgLy8gICAucGlwZShcbiAgIC8vICAgICBfLm1hcCgocGF5bG9hZDogYW55KSA9PiB7XG4gICAvLyAgICAgICBhbGVydChcIlN5c3RlbSBDb21wb25lbnQgcmVxdWVzdGVkXCIpXG4gICAvLyAgICAgfSlcbiAgIC8vICAgKVxufVxuIl19