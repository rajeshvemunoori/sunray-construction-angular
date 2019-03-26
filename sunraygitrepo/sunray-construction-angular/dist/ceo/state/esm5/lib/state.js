/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { routerReducer } from '@ngrx/router-store';
import { applicationConfigReducer, } from './slices/application-config/reducer';
import { applicationConfigInitialState, } from './slices/application-config/initial-state';
import { systemComponentsReducer, } from './slices/system-components/reducer';
import { systemComponentsInitialState, } from './slices/system-components/initial-state';
/**
 * @record
 */
export function RootState() { }
if (false) {
    /** @type {?|undefined} */
    RootState.prototype.applicationConfig;
    /** @type {?|undefined} */
    RootState.prototype.layout;
    /** @type {?|undefined} */
    RootState.prototype.theme;
    /** @type {?|undefined} */
    RootState.prototype.sunray;
    /** @type {?|undefined} */
    RootState.prototype.wordpress;
    /** @type {?|undefined} */
    RootState.prototype.router;
    /** @type {?|undefined} */
    RootState.prototype.systemComponents;
}
/** @type {?} */
export var initialState = {
    applicationConfig: applicationConfigInitialState,
    systemComponents: systemComponentsInitialState,
};
/** @type {?} */
export var reducer = {
    applicationConfig: applicationConfigReducer,
    systemComponents: systemComponentsReducer,
    router: routerReducer,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3N0YXRlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUNMLHdCQUF3QixHQUN6QixNQUFNLHFDQUFxQyxDQUFBO0FBRTVDLE9BQU8sRUFDTCw2QkFBNkIsR0FDOUIsTUFBTSwyQ0FBMkMsQ0FBQTtBQUVsRCxPQUFPLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sb0NBQW9DLENBQUE7QUFFM0MsT0FBTyxFQUNMLDRCQUE0QixHQUM3QixNQUFNLDBDQUEwQyxDQUFBOzs7O0FBRWpELCtCQVFDOzs7SUFQQyxzQ0FBd0I7O0lBQ3hCLDJCQUFhOztJQUNiLDBCQUFZOztJQUNaLDJCQUFhOztJQUNiLDhCQUFnQjs7SUFDaEIsMkJBQWE7O0lBQ2IscUNBQXVCOzs7QUFHekIsTUFBTSxLQUFPLFlBQVksR0FBYztJQUNyQyxpQkFBaUIsRUFBRSw2QkFBNkI7SUFDaEQsZ0JBQWdCLEVBQUUsNEJBQTRCO0NBQy9DOztBQUVELE1BQU0sS0FBTyxPQUFPLEdBQVE7SUFDMUIsaUJBQWlCLEVBQUUsd0JBQXdCO0lBQzNDLGdCQUFnQixFQUFFLHVCQUF1QjtJQUN6QyxNQUFNLEVBQUUsYUFBYTtDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuXG5pbXBvcnQge1xuICBhcHBsaWNhdGlvbkNvbmZpZ1JlZHVjZXIsXG59IGZyb20gJy4vc2xpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZy9yZWR1Y2VyJ1xuXG5pbXBvcnQge1xuICBhcHBsaWNhdGlvbkNvbmZpZ0luaXRpYWxTdGF0ZSxcbn0gZnJvbSAnLi9zbGljZXMvYXBwbGljYXRpb24tY29uZmlnL2luaXRpYWwtc3RhdGUnXG5cbmltcG9ydCB7XG4gIHN5c3RlbUNvbXBvbmVudHNSZWR1Y2VyLFxufSBmcm9tICcuL3NsaWNlcy9zeXN0ZW0tY29tcG9uZW50cy9yZWR1Y2VyJ1xuXG5pbXBvcnQge1xuICBzeXN0ZW1Db21wb25lbnRzSW5pdGlhbFN0YXRlLFxufSBmcm9tICcuL3NsaWNlcy9zeXN0ZW0tY29tcG9uZW50cy9pbml0aWFsLXN0YXRlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RTdGF0ZSB7XG4gIGFwcGxpY2F0aW9uQ29uZmlnPzogYW55LFxuICBsYXlvdXQ/OiBhbnksXG4gIHRoZW1lPzogYW55LFxuICBzdW5yYXk/OiBhbnksXG4gIHdvcmRwcmVzcz86IGFueSxcbiAgcm91dGVyPzogYW55LFxuICBzeXN0ZW1Db21wb25lbnRzPzogYW55LFxufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSb290U3RhdGUgPSB7XG4gIGFwcGxpY2F0aW9uQ29uZmlnOiBhcHBsaWNhdGlvbkNvbmZpZ0luaXRpYWxTdGF0ZSxcbiAgc3lzdGVtQ29tcG9uZW50czogc3lzdGVtQ29tcG9uZW50c0luaXRpYWxTdGF0ZSxcbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBhbnkgPSB7XG4gIGFwcGxpY2F0aW9uQ29uZmlnOiBhcHBsaWNhdGlvbkNvbmZpZ1JlZHVjZXIsXG4gIHN5c3RlbUNvbXBvbmVudHM6IHN5c3RlbUNvbXBvbmVudHNSZWR1Y2VyLFxuICByb3V0ZXI6IHJvdXRlclJlZHVjZXIsXG59XG4iXX0=