/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, defer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
export class EntityConfigEffects {
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
EntityConfigEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityConfigEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityConfigEffects.prototype, "init$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2NvbmZpZy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBTSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFFNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQVMsYUFBYSxDQUFBO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFBO0FBSXZELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBQzlCLFlBQ1UsS0FBaUIsRUFDakIsUUFBc0I7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBS2hDLFVBQUssR0FDSCxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUE7SUFMZCxDQUFDOzs7WUFMTCxVQUFVOzs7O1lBSkYsS0FBSztZQUNMLE9BQU87O0FBWWQ7SUFEQyxNQUFNLEVBQUU7c0NBQ0YsVUFBVTtrREFDQTs7O0lBRmpCLG9DQUVpQjs7Ozs7SUFQZixvQ0FBeUI7Ozs7O0lBQ3pCLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBkZWZlciB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gICAgZnJvbSAnQG5ncngvc3RvcmUnXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eUNvbmZpZ0VmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PixcbiAgKSB7fVxuXG5cbiAgQEVmZmVjdCgpXG4gIGluaXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIGRlZmVyKCgpID0+IHt9KVxufVxuIl19