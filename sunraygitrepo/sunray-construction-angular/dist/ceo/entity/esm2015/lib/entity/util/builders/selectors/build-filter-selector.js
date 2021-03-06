/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
/** @type {?} */
export const buildFilterSelector = (selector, filter) => {
    /** @type {?} */
    let filterState = (state) => {
        if (state && state.where) {
            return state.where(filter);
        }
        else {
            return state;
        }
    };
    return createSelector(selector, filterState);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmlsdGVyLXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLWZpbHRlci1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFTLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUE7O0FBUXJFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFFbEQsV0FBVyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDL0IsSUFBRyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDM0I7YUFDSTtZQUNILE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0lBRUQsT0FBTyxjQUFjLENBQ25CLFFBQVEsRUFDUixXQUFXLENBQ1osQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgU3RvcmUsIGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTdGF0ZSxcbiAgaUVudGl0eSxcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuXG5leHBvcnQgY29uc3QgYnVpbGRGaWx0ZXJTZWxlY3RvciA9IChzZWxlY3RvciwgZmlsdGVyKSA9PiB7XG5cbiAgbGV0IGZpbHRlclN0YXRlID0gKHN0YXRlOiBhbnkpID0+IHtcbiAgICBpZihzdGF0ZSAmJiBzdGF0ZS53aGVyZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLndoZXJlKGZpbHRlcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0b3IsXG4gICAgZmlsdGVyU3RhdGUsXG4gIClcbn1cbiJdfQ==