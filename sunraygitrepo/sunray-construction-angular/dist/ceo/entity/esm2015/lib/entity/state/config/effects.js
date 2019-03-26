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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zdGF0ZS9jb25maWcvZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQU0sS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRTVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFTLGFBQWEsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQTtBQUl2RCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUM5QixZQUNVLEtBQWlCLEVBQ2pCLFFBQXNCO1FBRHRCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUtoQyxVQUFLLEdBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFBO0lBTGQsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQUpGLEtBQUs7WUFDTCxPQUFPOztBQVlkO0lBREMsTUFBTSxFQUFFO3NDQUNGLFVBQVU7a0RBQ0E7OztJQUZqQixvQ0FFaUI7Ozs7O0lBUGYsb0NBQXlCOzs7OztJQUN6Qix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZGVmZXIgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9ICAgIGZyb20gJ0BuZ3J4L3N0b3JlJ1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlDb25maWdFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sXG4gICkge31cblxuXG4gIEBFZmZlY3QoKVxuICBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICBkZWZlcigoKSA9PiB7fSlcbn1cbiJdfQ==