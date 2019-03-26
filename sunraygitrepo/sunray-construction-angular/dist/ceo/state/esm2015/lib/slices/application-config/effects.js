/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, defer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
export class ApplicationConfigEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     */
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.init$ = defer(() => { });
    }
}
ApplicationConfigEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApplicationConfigEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ApplicationConfigEffects.prototype, "init$", void 0);
if (false) {
    /** @type {?} */
    ApplicationConfigEffects.prototype.init$;
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigEffects.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQVMsYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBQ25DLFlBQ1UsS0FBaUIsRUFDakIsUUFBc0I7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBS2hDLFVBQUssR0FDSCxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUE7SUFMZCxDQUFDOzs7WUFMTCxVQUFVOzs7O1lBSEYsS0FBSztZQUNMLE9BQU87O0FBV2Q7SUFEQyxNQUFNLEVBQUU7c0NBQ0YsVUFBVTt1REFDQTs7O0lBRmpCLHlDQUVpQjs7Ozs7SUFQZix5Q0FBeUI7Ozs7O0lBQ3pCLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGVmZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gICAgZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkNvbmZpZ0VmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PixcbiAgKSB7fVxuXG5cbiAgQEVmZmVjdCgpXG4gIGluaXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIGRlZmVyKCgpID0+IHt9KVxuXG59XG4iXX0=