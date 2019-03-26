/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Observable, defer, of as observableOf, } from 'rxjs';
import { map, tap, mergeMap, distinctUntilChanged, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store, } from '@ngrx/store';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { FeatureActions, } from './actions/index';
import { DataService, } from '../../services/data.service';
import { RouteEntityTypeProvider, } from '../../services/route-entity-type-provider.service';
import { ResourceIdentifierService, } from '../../services/resource-identifier.service';
import { SelectorProvider, } from '../../services/selectors/selector-provider.service';
import { entityFeatureSelectors, } from './selectors';
export class FeatureEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     * @param {?} dataService
     * @param {?} routeEntityTypeProvider
     * @param {?} resourceIdentifierService
     * @param {?} selectorProvider
     */
    constructor(store, actions$, dataService, routeEntityTypeProvider, resourceIdentifierService, selectorProvider) {
        this.store = store;
        this.actions$ = actions$;
        this.dataService = dataService;
        this.routeEntityTypeProvider = routeEntityTypeProvider;
        this.resourceIdentifierService = resourceIdentifierService;
        this.selectorProvider = selectorProvider;
        this.handleRouterNavigation$ = this.actions$
            .pipe(ofType(ROUTER_NAVIGATION), mergeMap((action) => {
            return this.routeEntityTypeProvider
                .handleRouterNavigation$(action.payload.routerState);
        }), distinctUntilChanged(this.resourceIdentifierService.isSameResource), tap((payload) => {
            if (this.resourceIdentifierService.isValid(payload)) {
                this.dataService.get$(payload);
            }
        }), map((payload) => {
            return new FeatureActions.SetPrimaryEntityIdentifier(payload);
        }));
        this.registerFeature$ = this.actions$
            .pipe(ofType('[EntityFeature] REGISTER_FEATURE'), map((action) => {
            /** @type {?} */
            let feature = action.payload;
            /** @type {?} */
            let addFeatureAction = new FeatureActions.AddFeature(feature);
            return addFeatureAction;
        }));
        this.loadPrimaryEntity$ = this.actions$
            .pipe(ofType('[EntityFeature] LOAD_PRIMARY_ENTITY'), mergeMap((action) => {
            return this.dataService.get$(action.payload);
        }));
        this.selectPrimaryEntity$ = this.actions$
            .pipe(ofType('[EntityFeature] SELECT_PRIMARY_ENTITY'), mergeMap((action) => {
            return this.store.select(entityFeatureSelectors.primaryEntityIdentifier);
        }), distinctUntilChanged(this.resourceIdentifierService.isSameResource), mergeMap((payload) => {
            if (_.isNil(payload)) {
                return observableOf(null);
            }
            else {
                /** @type {?} */
                let selector = this.selectorProvider.provide(payload);
                return this.store.select((/** @type {?} */ (selector)));
            }
        }), map((payload) => {
            return new FeatureActions.SetPrimaryEntity(payload);
        }));
        this.init$ = defer(() => {
            return observableOf(new FeatureActions.SelectPrimaryEntity());
        });
    }
}
FeatureEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FeatureEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions },
    { type: DataService },
    { type: RouteEntityTypeProvider },
    { type: ResourceIdentifierService },
    { type: SelectorProvider }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], FeatureEffects.prototype, "handleRouterNavigation$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], FeatureEffects.prototype, "registerFeature$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], FeatureEffects.prototype, "loadPrimaryEntity$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], FeatureEffects.prototype, "selectPrimaryEntity$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], FeatureEffects.prototype, "init$", void 0);
if (false) {
    /** @type {?} */
    FeatureEffects.prototype.handleRouterNavigation$;
    /** @type {?} */
    FeatureEffects.prototype.registerFeature$;
    /** @type {?} */
    FeatureEffects.prototype.loadPrimaryEntity$;
    /** @type {?} */
    FeatureEffects.prototype.selectPrimaryEntity$;
    /** @type {?} */
    FeatureEffects.prototype.init$;
    /**
     * @type {?}
     * @private
     */
    FeatureEffects.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FeatureEffects.prototype.actions$;
    /**
     * @type {?}
     * @protected
     */
    FeatureEffects.prototype.dataService;
    /**
     * @type {?}
     * @protected
     */
    FeatureEffects.prototype.routeEntityTypeProvider;
    /**
     * @type {?}
     * @protected
     */
    FeatureEffects.prototype.resourceIdentifierService;
    /**
     * @type {?}
     * @protected
     */
    FeatureEffects.prototype.selectorProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zdGF0ZS9mZWF0dXJlL2VmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsVUFBVSxFQUNWLEtBQUssRUFDTCxFQUFFLElBQUksWUFBWSxHQUNuQixNQUFNLE1BQU0sQ0FBQTtBQUViLE9BQU8sRUFDTCxHQUFHLEVBQ0gsR0FBRyxFQUNILFFBQVEsRUFFUixvQkFBb0IsR0FDckIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFDTCxLQUFLLEdBRU4sTUFBTSxhQUFhLENBQUE7QUFFcEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLE1BQU8sZUFBZSxDQUFBO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBRXRELE9BQU8sRUFDTCxjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQTtBQU14QixPQUFPLEVBQ0wsV0FBVyxHQUNaLE1BQU0sNkJBQTZCLENBQUE7QUFFcEMsT0FBTyxFQUNMLHVCQUF1QixHQUN4QixNQUFNLG1EQUFtRCxDQUFBO0FBRTFELE9BQU8sRUFDTCx5QkFBeUIsR0FDMUIsTUFBTSw0Q0FBNEMsQ0FBQTtBQUVuRCxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0sb0RBQW9ELENBQUE7QUFFM0QsT0FBTyxFQUNMLHNCQUFzQixHQUN2QixNQUFNLGFBQWEsQ0FBQTtBQUdwQixNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBQ3pCLFlBQ1UsS0FBaUIsRUFDakIsUUFBc0IsRUFDcEIsV0FBd0IsRUFDeEIsdUJBQWdELEVBQ2hELHlCQUFvRCxFQUNwRCxnQkFBa0M7UUFMcEMsVUFB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QUFHLEVBQUU7WUFDVCxPQUFPLFlBQVksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUE7UUFDL0QsQ0FBQyxDQUFDLENBQUE7SUF2RUQsQ0FBQzs7O1lBVEwsVUFBVTs7OztZQXBDVCxLQUFLO1lBSUUsT0FBTztZQWFkLFdBQVc7WUFJWCx1QkFBdUI7WUFJdkIseUJBQXlCO1lBSXpCLGdCQUFnQjs7QUFtQmhCO0lBREMsTUFBTSxFQUFFO3NDQUNnQixVQUFVOytEQWlCOUI7QUFHTDtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVO3dEQVN2QjtBQUdMO0lBREMsTUFBTSxFQUFFO3NDQUNXLFVBQVU7MERBT3pCO0FBR0w7SUFEQyxNQUFNLEVBQUU7c0NBQ2EsVUFBVTs0REFvQjNCO0FBR0w7SUFEQyxNQUFNLEVBQUU7c0NBQ0YsVUFBVTs2Q0FHYjs7O0lBckVKLGlEQWtCSzs7SUFFTCwwQ0FVSzs7SUFFTCw0Q0FRSzs7SUFFTCw4Q0FxQks7O0lBRUwsK0JBSUk7Ozs7O0lBN0VGLCtCQUF5Qjs7Ozs7SUFDekIsa0NBQThCOzs7OztJQUM5QixxQ0FBa0M7Ozs7O0lBQ2xDLGlEQUEwRDs7Ozs7SUFDMUQsbURBQThEOzs7OztJQUM5RCwwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgZGVmZXIsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWFwLFxuICB0YXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIFN0b3JlLCBBY3Rpb24sXG4gIGNyZWF0ZVNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUsIH0gIGZyb20gJ0BuZ3J4L2VmZmVjdHMnXG5cbmltcG9ydCB7IFJPVVRFUl9OQVZJR0FUSU9OIH0gZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJ1xuXG5pbXBvcnQge1xuICBGZWF0dXJlQWN0aW9ucyxcbn0gZnJvbSAnLi9hY3Rpb25zL2luZGV4J1xuXG5pbXBvcnQge1xuICBFbnRpdHlBY3Rpb25zLFxufSBmcm9tICcuLi8uLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBEYXRhU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJ1xuXG5pbXBvcnQge1xuICBSb3V0ZUVudGl0eVR5cGVQcm92aWRlcixcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcm91dGUtZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZSdcblxuaW1wb3J0IHtcbiAgUmVzb3VyY2VJZGVudGlmaWVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzb3VyY2UtaWRlbnRpZmllci5zZXJ2aWNlJ1xuXG5pbXBvcnQge1xuICBTZWxlY3RvclByb3ZpZGVyLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWxlY3RvcnMvc2VsZWN0b3ItcHJvdmlkZXIuc2VydmljZSdcblxuaW1wb3J0IHtcbiAgZW50aXR5RmVhdHVyZVNlbGVjdG9ycyxcbn0gZnJvbSAnLi9zZWxlY3RvcnMnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGZWF0dXJlRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LFxuICAgIHByb3RlY3RlZCBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlRW50aXR5VHlwZVByb3ZpZGVyOiBSb3V0ZUVudGl0eVR5cGVQcm92aWRlcixcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VJZGVudGlmaWVyU2VydmljZTogUmVzb3VyY2VJZGVudGlmaWVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0b3JQcm92aWRlcjogU2VsZWN0b3JQcm92aWRlcixcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBoYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKFJPVVRFUl9OQVZJR0FUSU9OKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVFbnRpdHlUeXBlUHJvdmlkZXJcbiAgICAgICAgICAgIC5oYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uJChhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSlcbiAgICAgICAgfSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKHRoaXMucmVzb3VyY2VJZGVudGlmaWVyU2VydmljZS5pc1NhbWVSZXNvdXJjZSksXG4gICAgICAgIHRhcCgocGF5bG9hZDogYW55KSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5yZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlLmlzVmFsaWQocGF5bG9hZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0JChwYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgocGF5bG9hZDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBGZWF0dXJlQWN0aW9ucy5TZXRQcmltYXJ5RW50aXR5SWRlbnRpZmllcihwYXlsb2FkKVxuICAgICAgICB9KSxcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgcmVnaXN0ZXJGZWF0dXJlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKCdbRW50aXR5RmVhdHVyZV0gUkVHSVNURVJfRkVBVFVSRScpLFxuICAgICAgICBtYXAoKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgIGxldCBhZGRGZWF0dXJlQWN0aW9uID0gbmV3IEZlYXR1cmVBY3Rpb25zLkFkZEZlYXR1cmUoZmVhdHVyZSlcbiAgICAgICAgICByZXR1cm4gYWRkRmVhdHVyZUFjdGlvblxuICAgICAgICB9KVxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkUHJpbWFyeUVudGl0eSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSgnW0VudGl0eUZlYXR1cmVdIExPQURfUFJJTUFSWV9FTlRJVFknKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0JChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfSksXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIHNlbGVjdFByaW1hcnlFbnRpdHkkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoJ1tFbnRpdHlGZWF0dXJlXSBTRUxFQ1RfUFJJTUFSWV9FTlRJVFknKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGVudGl0eUZlYXR1cmVTZWxlY3RvcnMucHJpbWFyeUVudGl0eUlkZW50aWZpZXIpXG4gICAgICAgIH0pLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCh0aGlzLnJlc291cmNlSWRlbnRpZmllclNlcnZpY2UuaXNTYW1lUmVzb3VyY2UpLFxuICAgICAgICBtZXJnZU1hcCgocGF5bG9hZDogYW55KSA9PiB7XG4gICAgICAgICAgaWYoXy5pc05pbChwYXlsb2FkKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3JQcm92aWRlci5wcm92aWRlKHBheWxvYWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoPGFueT5zZWxlY3RvcilcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHBheWxvYWQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRmVhdHVyZUFjdGlvbnMuU2V0UHJpbWFyeUVudGl0eShwYXlsb2FkKVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKG5ldyBGZWF0dXJlQWN0aW9ucy5TZWxlY3RQcmltYXJ5RW50aXR5KCkpXG4gICAgfSlcbn1cbiJdfQ==