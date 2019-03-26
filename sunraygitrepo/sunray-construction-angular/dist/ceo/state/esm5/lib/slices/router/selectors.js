/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createFeatureSelector, createSelector } from '@ngrx/store';
/** @type {?} */
export var selectRouter = createFeatureSelector('router');
/** @type {?} */
var selectState = function (state) {
    if (state && state.state) {
        return state.state;
    }
    else {
        return null;
    }
};
var ɵ0 = selectState;
/** @type {?} */
export var selectRouterState = createSelector(selectRouter, selectState);
/** @type {?} */
var selectParamId = function (state) {
    if (state) {
        return _.get(state, 'params.id');
    }
    else {
        return null;
    }
};
var ɵ1 = selectParamId;
/** @type {?} */
export var selectRouteParamId = createSelector(selectRouterState, selectParamId);
/** @type {?} */
export var routerSelectors = {
    selectState: selectRouterState,
    selectRouteParamId: selectRouteParamId,
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zdGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zbGljZXMvcm91dGVyL3NlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7O0FBSXRGLE1BQU0sS0FBTyxZQUFZLEdBQUcscUJBQXFCLENBQU8sUUFBUSxDQUFDOztJQUU3RCxXQUFXLEdBQUcsVUFBQyxLQUFrQjtJQUNuQyxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztLQUNwQjtTQUNJO1FBQ0gsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7OztBQUVELE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxjQUFjLENBQzdDLFlBQVksRUFDWixXQUFXLENBQ1o7O0lBRUcsYUFBYSxHQUFHLFVBQUMsS0FBVTtJQUM3QixJQUFHLEtBQUssRUFBRTtRQUNSLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDbEM7U0FDSTtRQUNILE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDOzs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsY0FBYyxDQUM5QyxpQkFBaUIsRUFDakIsYUFBYSxDQUNkOztBQUVELE1BQU0sS0FBTyxlQUFlLEdBQUc7SUFDN0IsV0FBVyxFQUFFLGlCQUFpQjtJQUM5QixrQkFBa0IsRUFBRSxrQkFBa0I7Q0FDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFJvdXRlclN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb3V0ZXIgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8YW55PiAoJ3JvdXRlcicpO1xuXG5sZXQgc2VsZWN0U3RhdGUgPSAoc3RhdGU6IFJvdXRlclN0YXRlKSA9PiB7XG4gIGlmKHN0YXRlICYmIHN0YXRlLnN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnN0YXRlO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Um91dGVyU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0Um91dGVyLFxuICBzZWxlY3RTdGF0ZSxcbilcblxubGV0IHNlbGVjdFBhcmFtSWQgPSAoc3RhdGU6IGFueSkgPT4ge1xuICBpZihzdGF0ZSkge1xuICAgIHJldHVybiBfLmdldChzdGF0ZSwgJ3BhcmFtcy5pZCcpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb3V0ZVBhcmFtSWQgPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0Um91dGVyU3RhdGUsXG4gIHNlbGVjdFBhcmFtSWQsXG4pXG5cbmV4cG9ydCBjb25zdCByb3V0ZXJTZWxlY3RvcnMgPSB7XG4gIHNlbGVjdFN0YXRlOiBzZWxlY3RSb3V0ZXJTdGF0ZSxcbiAgc2VsZWN0Um91dGVQYXJhbUlkOiBzZWxlY3RSb3V0ZVBhcmFtSWQsXG59XG4iXX0=