/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createFeatureSelector, createSelector } from '@ngrx/store';
/** @type {?} */
export const selectRouter = createFeatureSelector('router');
/** @type {?} */
let selectState = (state) => {
    if (state && state.state) {
        return state.state;
    }
    else {
        return null;
    }
};
const ɵ0 = selectState;
/** @type {?} */
export const selectRouterState = createSelector(selectRouter, selectState);
/** @type {?} */
let selectParamId = (state) => {
    if (state) {
        return _.get(state, 'params.id');
    }
    else {
        return null;
    }
};
const ɵ1 = selectParamId;
/** @type {?} */
export const selectRouteParamId = createSelector(selectRouterState, selectParamId);
/** @type {?} */
export const routerSelectors = {
    selectState: selectRouterState,
    selectRouteParamId: selectRouteParamId,
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zdGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zbGljZXMvcm91dGVyL3NlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7O0FBSXRGLE1BQU0sT0FBTyxZQUFZLEdBQUcscUJBQXFCLENBQU8sUUFBUSxDQUFDOztJQUU3RCxXQUFXLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUU7SUFDdkMsSUFBRyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7S0FDcEI7U0FDSTtRQUNILE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDOzs7QUFFRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsY0FBYyxDQUM3QyxZQUFZLEVBQ1osV0FBVyxDQUNaOztJQUVHLGFBQWEsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQ2pDLElBQUcsS0FBSyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztLQUNsQztTQUNJO1FBQ0gsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7OztBQUVELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxjQUFjLENBQzlDLGlCQUFpQixFQUNqQixhQUFhLENBQ2Q7O0FBRUQsTUFBTSxPQUFPLGVBQWUsR0FBRztJQUM3QixXQUFXLEVBQUUsaUJBQWlCO0lBQzlCLGtCQUFrQixFQUFFLGtCQUFrQjtDQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgUm91dGVyU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFJvdXRlciA9IGNyZWF0ZUZlYXR1cmVTZWxlY3Rvcjxhbnk+ICgncm91dGVyJyk7XG5cbmxldCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm91dGVyU3RhdGUpID0+IHtcbiAgaWYoc3RhdGUgJiYgc3RhdGUuc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc3RhdGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb3V0ZXJTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RSb3V0ZXIsXG4gIHNlbGVjdFN0YXRlLFxuKVxuXG5sZXQgc2VsZWN0UGFyYW1JZCA9IChzdGF0ZTogYW55KSA9PiB7XG4gIGlmKHN0YXRlKSB7XG4gICAgcmV0dXJuIF8uZ2V0KHN0YXRlLCAncGFyYW1zLmlkJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdFJvdXRlUGFyYW1JZCA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RSb3V0ZXJTdGF0ZSxcbiAgc2VsZWN0UGFyYW1JZCxcbilcblxuZXhwb3J0IGNvbnN0IHJvdXRlclNlbGVjdG9ycyA9IHtcbiAgc2VsZWN0U3RhdGU6IHNlbGVjdFJvdXRlclN0YXRlLFxuICBzZWxlY3RSb3V0ZVBhcmFtSWQ6IHNlbGVjdFJvdXRlUGFyYW1JZCxcbn1cbiJdfQ==