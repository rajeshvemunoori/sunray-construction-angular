/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, defer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
var ApplicationConfigEffects = /** @class */ (function () {
    function ApplicationConfigEffects(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.init$ = defer(function () { });
    }
    ApplicationConfigEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ApplicationConfigEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ApplicationConfigEffects.prototype, "init$", void 0);
    return ApplicationConfigEffects;
}());
export { ApplicationConfigEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQVMsYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhEO0lBRUUsa0NBQ1UsS0FBaUIsRUFDakIsUUFBc0I7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBS2hDLFVBQUssR0FDSCxLQUFLLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQTtJQUxkLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBSEYsS0FBSztnQkFDTCxPQUFPOztJQVdkO1FBREMsTUFBTSxFQUFFOzBDQUNGLFVBQVU7MkRBQ0E7SUFFbkIsK0JBQUM7Q0FBQSxBQVpELElBWUM7U0FYWSx3QkFBd0I7OztJQU9uQyx5Q0FFaUI7Ozs7O0lBUGYseUNBQXlCOzs7OztJQUN6Qiw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIGRlZmVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9ICAgIGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Db25maWdFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sXG4gICkge31cblxuXG4gIEBFZmZlY3QoKVxuICBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICBkZWZlcigoKSA9PiB7fSlcblxufVxuIl19