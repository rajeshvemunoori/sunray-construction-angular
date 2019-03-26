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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2NvbmZpZy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBTSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFFNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQVMsYUFBYSxDQUFBO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFBO0FBR3ZEO0lBRUUsNkJBQ1UsS0FBaUIsRUFDakIsUUFBc0I7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBS2hDLFVBQUssR0FDSCxLQUFLLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQTtJQUxkLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBSkYsS0FBSztnQkFDTCxPQUFPOztJQVlkO1FBREMsTUFBTSxFQUFFOzBDQUNGLFVBQVU7c0RBQ0E7SUFDbkIsMEJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxtQkFBbUI7OztJQU85QixvQ0FFaUI7Ozs7O0lBUGYsb0NBQXlCOzs7OztJQUN6Qix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZGVmZXIgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9ICAgIGZyb20gJ0BuZ3J4L3N0b3JlJ1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlDb25maWdFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sXG4gICkge31cblxuXG4gIEBFZmZlY3QoKVxuICBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICBkZWZlcigoKSA9PiB7fSlcbn1cbiJdfQ==