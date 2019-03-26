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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2ZlYXR1cmUvZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsS0FBSyxFQUNMLEVBQUUsSUFBSSxZQUFZLEdBQ25CLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNMLEdBQUcsRUFDSCxHQUFHLEVBQ0gsUUFBUSxFQUVSLG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLEtBQUssR0FFTixNQUFNLGFBQWEsQ0FBQTtBQUVwQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUcsTUFBTyxlQUFlLENBQUE7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFFdEQsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFBO0FBTXhCLE9BQU8sRUFDTCxXQUFXLEdBQ1osTUFBTSw2QkFBNkIsQ0FBQTtBQUVwQyxPQUFPLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sbURBQW1ELENBQUE7QUFFMUQsT0FBTyxFQUNMLHlCQUF5QixHQUMxQixNQUFNLDRDQUE0QyxDQUFBO0FBRW5ELE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSxvREFBb0QsQ0FBQTtBQUUzRCxPQUFPLEVBQ0wsc0JBQXNCLEdBQ3ZCLE1BQU0sYUFBYSxDQUFBO0FBR3BCLE1BQU0sT0FBTyxjQUFjOzs7Ozs7Ozs7SUFDekIsWUFDVSxLQUFpQixFQUNqQixRQUFzQixFQUNwQixXQUF3QixFQUN4Qix1QkFBZ0QsRUFDaEQseUJBQW9ELEVBQ3BELGdCQUFrQztRQUxwQyxVQUFLLEdBQUws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RTtZQUNULE9BQU8sWUFBWSxDQUFDLElBQUksY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQTtRQUMvRCxDQUFDLENBQUMsQ0FBQTtJQXZFRCxDQUFDOzs7WUFUTCxVQUFVOzs7O1lBcENULEtBQUs7WUFJRSxPQUFPO1lBYWQsV0FBVztZQUlYLHVCQUF1QjtZQUl2Qix5QkFBeUI7WUFJekIsZ0JBQWdCOztBQW1CaEI7SUFEQyxNQUFNLEVBQUU7c0NBQ2dCLFVBQVU7K0RBaUI5QjtBQUdMO0lBREMsTUFBTSxFQUFFO3NDQUNTLFVBQVU7d0RBU3ZCO0FBR0w7SUFEQyxNQUFNLEVBQUU7c0NBQ1csVUFBVTswREFPekI7QUFHTDtJQURDLE1BQU0sRUFBRTtzQ0FDYSxVQUFVOzREQW9CM0I7QUFHTDtJQURDLE1BQU0sRUFBRTtzQ0FDRixVQUFVOzZDQUdiOzs7SUFyRUosaURBa0JLOztJQUVMLDBDQVVLOztJQUVMLDRDQVFLOztJQUVMLDhDQXFCSzs7SUFFTCwrQkFJSTs7Ozs7SUE3RUYsK0JBQXlCOzs7OztJQUN6QixrQ0FBOEI7Ozs7O0lBQzlCLHFDQUFrQzs7Ozs7SUFDbEMsaURBQTBEOzs7OztJQUMxRCxtREFBOEQ7Ozs7O0lBQzlELDBDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBkZWZlcixcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBtYXAsXG4gIHRhcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgU3RvcmUsIEFjdGlvbixcbiAgY3JlYXRlU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSwgfSAgZnJvbSAnQG5ncngvZWZmZWN0cydcblxuaW1wb3J0IHsgUk9VVEVSX05BVklHQVRJT04gfSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnXG5cbmltcG9ydCB7XG4gIEZlYXR1cmVBY3Rpb25zLFxufSBmcm9tICcuL2FjdGlvbnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEVudGl0eUFjdGlvbnMsXG59IGZyb20gJy4uLy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIERhdGFTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnXG5cbmltcG9ydCB7XG4gIFJvdXRlRW50aXR5VHlwZVByb3ZpZGVyLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yb3V0ZS1lbnRpdHktdHlwZS1wcm92aWRlci5zZXJ2aWNlJ1xuXG5pbXBvcnQge1xuICBSZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXNvdXJjZS1pZGVudGlmaWVyLnNlcnZpY2UnXG5cbmltcG9ydCB7XG4gIFNlbGVjdG9yUHJvdmlkZXIsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlbGVjdG9ycy9zZWxlY3Rvci1wcm92aWRlci5zZXJ2aWNlJ1xuXG5pbXBvcnQge1xuICBlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLFxufSBmcm9tICcuL3NlbGVjdG9ycydcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sXG4gICAgcHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVFbnRpdHlUeXBlUHJvdmlkZXI6IFJvdXRlRW50aXR5VHlwZVByb3ZpZGVyLFxuICAgIHByb3RlY3RlZCByZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlOiBSZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RvclByb3ZpZGVyOiBTZWxlY3RvclByb3ZpZGVyLFxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGhhbmRsZVJvdXRlck5hdmlnYXRpb24kOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoUk9VVEVSX05BVklHQVRJT04pLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZUVudGl0eVR5cGVQcm92aWRlclxuICAgICAgICAgICAgLmhhbmRsZVJvdXRlck5hdmlnYXRpb24kKGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlKVxuICAgICAgICB9KSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQodGhpcy5yZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlLmlzU2FtZVJlc291cmNlKSxcbiAgICAgICAgdGFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnJlc291cmNlSWRlbnRpZmllclNlcnZpY2UuaXNWYWxpZChwYXlsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nZXQkKHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEZlYXR1cmVBY3Rpb25zLlNldFByaW1hcnlFbnRpdHlJZGVudGlmaWVyKHBheWxvYWQpXG4gICAgICAgIH0pLFxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICByZWdpc3RlckZlYXR1cmUkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoJ1tFbnRpdHlGZWF0dXJlXSBSRUdJU1RFUl9GRUFUVVJFJyksXG4gICAgICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgbGV0IGFkZEZlYXR1cmVBY3Rpb24gPSBuZXcgRmVhdHVyZUFjdGlvbnMuQWRkRmVhdHVyZShmZWF0dXJlKVxuICAgICAgICAgIHJldHVybiBhZGRGZWF0dXJlQWN0aW9uXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRQcmltYXJ5RW50aXR5JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKCdbRW50aXR5RmVhdHVyZV0gTE9BRF9QUklNQVJZX0VOVElUWScpLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5nZXQkKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9KSxcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgc2VsZWN0UHJpbWFyeUVudGl0eSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZSgnW0VudGl0eUZlYXR1cmVdIFNFTEVDVF9QUklNQVJZX0VOVElUWScpLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZW50aXR5RmVhdHVyZVNlbGVjdG9ycy5wcmltYXJ5RW50aXR5SWRlbnRpZmllcilcbiAgICAgICAgfSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKHRoaXMucmVzb3VyY2VJZGVudGlmaWVyU2VydmljZS5pc1NhbWVSZXNvdXJjZSksXG4gICAgICAgIG1lcmdlTWFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgICBpZihfLmlzTmlsKHBheWxvYWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKG51bGwpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvclByb3ZpZGVyLnByb3ZpZGUocGF5bG9hZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCg8YW55PnNlbGVjdG9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgocGF5bG9hZDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBGZWF0dXJlQWN0aW9ucy5TZXRQcmltYXJ5RW50aXR5KHBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIGluaXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobmV3IEZlYXR1cmVBY3Rpb25zLlNlbGVjdFByaW1hcnlFbnRpdHkoKSlcbiAgICB9KVxufVxuIl19