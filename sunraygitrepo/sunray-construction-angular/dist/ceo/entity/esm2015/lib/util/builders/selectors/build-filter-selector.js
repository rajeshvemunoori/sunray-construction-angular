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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmlsdGVyLXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvdXRpbC9idWlsZGVycy9zZWxlY3RvcnMvYnVpbGQtZmlsdGVyLXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQVMsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQTs7QUFRckUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUVsRCxXQUFXLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtRQUMvQixJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUMzQjthQUNJO1lBQ0gsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7SUFFRCxPQUFPLGNBQWMsQ0FDbkIsUUFBUSxFQUNSLFdBQVcsQ0FDWixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBTdG9yZSwgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eVN0YXRlLFxuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5cbmV4cG9ydCBjb25zdCBidWlsZEZpbHRlclNlbGVjdG9yID0gKHNlbGVjdG9yLCBmaWx0ZXIpID0+IHtcblxuICBsZXQgZmlsdGVyU3RhdGUgPSAoc3RhdGU6IGFueSkgPT4ge1xuICAgIGlmKHN0YXRlICYmIHN0YXRlLndoZXJlKSB7XG4gICAgICByZXR1cm4gc3RhdGUud2hlcmUoZmlsdGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RvcixcbiAgICBmaWx0ZXJTdGF0ZSxcbiAgKVxufVxuIl19