/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector } from '@ngrx/store';
/** @type {?} */
export const selectSystemComponents = createFeatureSelector('systemComponents');
/** @type {?} */
let selectActiveComponents = (state) => {
    return state.activeComponents;
};
const ɵ0 = selectActiveComponents;
/** @type {?} */
export const selectSystemComponentsActiveComponents = createSelector(selectSystemComponents, selectActiveComponents);
/** @type {?} */
export const systemComponentsSelectors = {
    slice: selectSystemComponents,
    activeComponents: selectSystemComponentsActiveComponents
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zdGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zbGljZXMvc3lzdGVtLWNvbXBvbmVudHMvc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQ0cscUJBQXFCLEVBQzdCLGNBQWMsRUFDZixNQUFNLGFBQWEsQ0FBQzs7QUFNckIsTUFBTSxPQUFPLHNCQUFzQixHQUFHLHFCQUFxQixDQUFNLGtCQUFrQixDQUFDOztJQUdoRixzQkFBc0IsR0FBRyxDQUFDLEtBQTZCLEVBQUUsRUFBRTtJQUM3RCxPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQTtBQUMvQixDQUFDOzs7QUFFRCxNQUFNLE9BQU8sc0NBQXNDLEdBQUcsY0FBYyxDQUNwRSxzQkFBc0IsRUFDdEIsc0JBQXNCLENBQ3JCOztBQUVELE1BQU0sT0FBTyx5QkFBeUIsR0FBRztJQUN2QyxLQUFLLEVBQUUsc0JBQXNCO0lBQzdCLGdCQUFnQixFQUFFLHNDQUFzQztDQUN6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBpcGUgfSAgIGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBzZWxlY3QsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3Jcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyByb3V0ZXJTZWxlY3RvcnMgfSAgICAgICAgZnJvbSAnLi4vcm91dGVyJztcblxuaW1wb3J0IHsgaVN5c3RlbUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0U3lzdGVtQ29tcG9uZW50cyA9IGNyZWF0ZUZlYXR1cmVTZWxlY3Rvcjxhbnk+KCdzeXN0ZW1Db21wb25lbnRzJylcblxuXG5sZXQgc2VsZWN0QWN0aXZlQ29tcG9uZW50cyA9IChzdGF0ZTogaVN5c3RlbUNvbXBvbmVudHNTdGF0ZSkgPT4ge1xuICByZXR1cm4gc3RhdGUuYWN0aXZlQ29tcG9uZW50c1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFN5c3RlbUNvbXBvbmVudHNBY3RpdmVDb21wb25lbnRzID0gY3JlYXRlU2VsZWN0b3IoXG5zZWxlY3RTeXN0ZW1Db21wb25lbnRzLFxuc2VsZWN0QWN0aXZlQ29tcG9uZW50cyxcbik7XG5cbmV4cG9ydCBjb25zdCBzeXN0ZW1Db21wb25lbnRzU2VsZWN0b3JzID0ge1xuICBzbGljZTogc2VsZWN0U3lzdGVtQ29tcG9uZW50cyxcbiAgYWN0aXZlQ29tcG9uZW50czogc2VsZWN0U3lzdGVtQ29tcG9uZW50c0FjdGl2ZUNvbXBvbmVudHNcbn1cbiJdfQ==