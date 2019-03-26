/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { entityFeatureSelectors, } from '../state/feature/selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class EntityTypeProviderService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    provide$(entityData) {
        return this.getFeature$(entityData.feature).pipe(map(feature => this.getEntityType(feature, entityData)));
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    getEntityType(feature, entityData) {
        return this.getCustomEntityType(feature, entityData) ||
            feature.baseEntityType;
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    getCustomEntityType(feature, entityData) {
        return feature.entityTypeFromEntityData(entityData);
    }
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    getFeature$(featureName) {
        return this.features$.pipe(map(features => features[featureName]));
    }
    // new stuff
    /**
     * @private
     * @return {?}
     */
    get features$() {
        if (!this._features$) {
            this._features$ = this.buildFeatures$();
        }
        return this._features$;
    }
    /**
     * @private
     * @return {?}
     */
    buildFeatures$() {
        /** @type {?} */
        let features = this.store.select(entityFeatureSelectors.features);
        return (/** @type {?} */ (features));
    }
}
EntityTypeProviderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityTypeProviderService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ EntityTypeProviderService.ngInjectableDef = i0.defineInjectable({ factory: function EntityTypeProviderService_Factory() { return new EntityTypeProviderService(i0.inject(i1.Store)); }, token: EntityTypeProviderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityTypeProviderService.prototype._features$;
    /**
     * @type {?}
     * @protected
     */
    EntityTypeProviderService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9lbnRpdHktdHlwZS1wcm92aWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFPQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQWdCLGFBQWEsQ0FBQTtBQWE3QyxPQUFPLEVBQ0wsc0JBQXNCLEdBQ3ZCLE1BQU0sNEJBQTRCLENBQUE7OztBQUtuQyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3BDLFlBQ1ksS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUMxQixDQUFDOzs7OztJQUVKLFFBQVEsQ0FDTixVQUFvQztRQUdwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FDeEQsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7SUFFTyxhQUFhLENBQ25CLE9BQXVCLEVBQ3ZCLFVBQW9DO1FBR3BDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7WUFDbEQsT0FBTyxDQUFDLGNBQWMsQ0FBQTtJQUMxQixDQUFDOzs7Ozs7O0lBRU8sbUJBQW1CLENBQ3pCLE9BQXVCLEVBQ3ZCLFVBQW9DO1FBR3BDLE9BQU8sT0FBTyxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FDakIsV0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFFLENBQ3hDLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFJRCxJQUFZLFNBQVM7UUFDbkIsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7U0FDeEM7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFTyxjQUFjOztZQUNoQixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1FBQ2pFLE9BQU8sbUJBQXlCLFFBQVEsRUFBQSxDQUFBO0lBQzFDLENBQUM7OztZQXpERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFuQlEsS0FBSzs7Ozs7Ozs7SUFxQlosK0NBQTJDOzs7OztJQUd6QywwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgcGlwZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSB9ICAgICAgICAgICBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgRmVhdHVyZUlkZW50aWZpZXIsXG4gIGlFbnRpdHlDb25maWcsXG4gIGlFbnRpdHlUeXBlTWFwLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uc3RydWN0b3IsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUZlYXR1cmVDb25maWcsXG4gIGlGZWF0dXJlTWFwLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLFxufSBmcm9tICcuLi9zdGF0ZS9mZWF0dXJlL3NlbGVjdG9ycydcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5VHlwZVByb3ZpZGVyU2VydmljZSB7XG4gIHByaXZhdGUgX2ZlYXR1cmVzJDogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGFueT4sXG4gICkge31cblxuICBwcm92aWRlJChcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gICk6IE9ic2VydmFibGU8aUVudGl0eUNvbnN0cnVjdG9yPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRGZWF0dXJlJChlbnRpdHlEYXRhLmZlYXR1cmUpLnBpcGUoXG4gICAgICBtYXAoZmVhdHVyZSA9PiB0aGlzLmdldEVudGl0eVR5cGUoZmVhdHVyZSwgZW50aXR5RGF0YSkpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW50aXR5VHlwZShcbiAgICBmZWF0dXJlOiBpRmVhdHVyZUNvbmZpZyxcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXNcbiAgKTogaUVudGl0eUNvbnN0cnVjdG9yIHtcblxuICAgIHJldHVybiB0aGlzLmdldEN1c3RvbUVudGl0eVR5cGUoZmVhdHVyZSwgZW50aXR5RGF0YSkgfHxcbiAgICAgIGZlYXR1cmUuYmFzZUVudGl0eVR5cGVcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VzdG9tRW50aXR5VHlwZShcbiAgICBmZWF0dXJlOiBpRmVhdHVyZUNvbmZpZyxcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXNcbiAgKTogaUVudGl0eUNvbnN0cnVjdG9yIHtcblxuICAgIHJldHVybiBmZWF0dXJlLmVudGl0eVR5cGVGcm9tRW50aXR5RGF0YShlbnRpdHlEYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlJChcbiAgICBmZWF0dXJlTmFtZTogRmVhdHVyZUlkZW50aWZpZXJcbiAgKTogT2JzZXJ2YWJsZTxpRmVhdHVyZUNvbmZpZz4ge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzJC5waXBlKFxuICAgICAgbWFwKGZlYXR1cmVzID0+IGZlYXR1cmVzW2ZlYXR1cmVOYW1lXSApLFxuICAgIClcbiAgfVxuXG5cbiAgLy8gbmV3IHN0dWZmXG4gIHByaXZhdGUgZ2V0IGZlYXR1cmVzJCgpOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPiB7XG4gICAgaWYoIXRoaXMuX2ZlYXR1cmVzJCkge1xuICAgICAgdGhpcy5fZmVhdHVyZXMkID0gdGhpcy5idWlsZEZlYXR1cmVzJCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVzJFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZlYXR1cmVzJCgpOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPiB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdG9yZS5zZWxlY3QoZW50aXR5RmVhdHVyZVNlbGVjdG9ycy5mZWF0dXJlcylcbiAgICByZXR1cm4gPE9ic2VydmFibGU8aUZlYXR1cmVNYXA+PmZlYXR1cmVzXG4gIH1cbn1cbiJdfQ==