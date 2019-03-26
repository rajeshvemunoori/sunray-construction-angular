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
var EntityTypeProviderService = /** @class */ (function () {
    function EntityTypeProviderService(store) {
        this.store = store;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    EntityTypeProviderService.prototype.provide$ = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        var _this = this;
        return this.getFeature$(entityData.feature).pipe(map(function (feature) { return _this.getEntityType(feature, entityData); }));
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    EntityTypeProviderService.prototype.getEntityType = /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    function (feature, entityData) {
        return this.getCustomEntityType(feature, entityData) ||
            feature.baseEntityType;
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    EntityTypeProviderService.prototype.getCustomEntityType = /**
     * @private
     * @param {?} feature
     * @param {?} entityData
     * @return {?}
     */
    function (feature, entityData) {
        return feature.entityTypeFromEntityData(entityData);
    };
    /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    EntityTypeProviderService.prototype.getFeature$ = /**
     * @private
     * @param {?} featureName
     * @return {?}
     */
    function (featureName) {
        return this.features$.pipe(map(function (features) { return features[featureName]; }));
    };
    Object.defineProperty(EntityTypeProviderService.prototype, "features$", {
        // new stuff
        get: 
        // new stuff
        /**
         * @private
         * @return {?}
         */
        function () {
            if (!this._features$) {
                this._features$ = this.buildFeatures$();
            }
            return this._features$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    EntityTypeProviderService.prototype.buildFeatures$ = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var features = this.store.select(entityFeatureSelectors.features);
        return (/** @type {?} */ (features));
    };
    EntityTypeProviderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityTypeProviderService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ EntityTypeProviderService.ngInjectableDef = i0.defineInjectable({ factory: function EntityTypeProviderService_Factory() { return new EntityTypeProviderService(i0.inject(i1.Store)); }, token: EntityTypeProviderService, providedIn: "root" });
    return EntityTypeProviderService;
}());
export { EntityTypeProviderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9lbnRpdHktdHlwZS1wcm92aWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFPQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQWdCLGFBQWEsQ0FBQTtBQWE3QyxPQUFPLEVBQ0wsc0JBQXNCLEdBQ3ZCLE1BQU0sNEJBQTRCLENBQUE7OztBQUVuQztJQU1FLG1DQUNZLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7SUFDMUIsQ0FBQzs7Ozs7SUFFSiw0Q0FBUTs7OztJQUFSLFVBQ0UsVUFBb0M7UUFEdEMsaUJBT0M7UUFIQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FDeEQsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7SUFFTyxpREFBYTs7Ozs7O0lBQXJCLFVBQ0UsT0FBdUIsRUFDdkIsVUFBb0M7UUFHcEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUNsRCxPQUFPLENBQUMsY0FBYyxDQUFBO0lBQzFCLENBQUM7Ozs7Ozs7SUFFTyx1REFBbUI7Ozs7OztJQUEzQixVQUNFLE9BQXVCLEVBQ3ZCLFVBQW9DO1FBR3BDLE9BQU8sT0FBTyxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7Ozs7OztJQUVPLCtDQUFXOzs7OztJQUFuQixVQUNFLFdBQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3hCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBckIsQ0FBcUIsQ0FBRSxDQUN4QyxDQUFBO0lBQ0gsQ0FBQztJQUlELHNCQUFZLGdEQUFTO1FBRHJCLFlBQVk7Ozs7Ozs7UUFDWjtZQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTthQUN4QztZQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUN4QixDQUFDOzs7T0FBQTs7Ozs7SUFFTyxrREFBYzs7OztJQUF0Qjs7WUFDTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1FBQ2pFLE9BQU8sbUJBQXlCLFFBQVEsRUFBQSxDQUFBO0lBQzFDLENBQUM7O2dCQXpERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQW5CUSxLQUFLOzs7b0NBWGQ7Q0FzRkMsQUExREQsSUEwREM7U0F2RFkseUJBQXlCOzs7Ozs7SUFDcEMsK0NBQTJDOzs7OztJQUd6QywwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgcGlwZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSB9ICAgICAgICAgICBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgRmVhdHVyZUlkZW50aWZpZXIsXG4gIGlFbnRpdHlDb25maWcsXG4gIGlFbnRpdHlUeXBlTWFwLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uc3RydWN0b3IsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUZlYXR1cmVDb25maWcsXG4gIGlGZWF0dXJlTWFwLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLFxufSBmcm9tICcuLi9zdGF0ZS9mZWF0dXJlL3NlbGVjdG9ycydcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5VHlwZVByb3ZpZGVyU2VydmljZSB7XG4gIHByaXZhdGUgX2ZlYXR1cmVzJDogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGFueT4sXG4gICkge31cblxuICBwcm92aWRlJChcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gICk6IE9ic2VydmFibGU8aUVudGl0eUNvbnN0cnVjdG9yPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRGZWF0dXJlJChlbnRpdHlEYXRhLmZlYXR1cmUpLnBpcGUoXG4gICAgICBtYXAoZmVhdHVyZSA9PiB0aGlzLmdldEVudGl0eVR5cGUoZmVhdHVyZSwgZW50aXR5RGF0YSkpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW50aXR5VHlwZShcbiAgICBmZWF0dXJlOiBpRmVhdHVyZUNvbmZpZyxcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXNcbiAgKTogaUVudGl0eUNvbnN0cnVjdG9yIHtcblxuICAgIHJldHVybiB0aGlzLmdldEN1c3RvbUVudGl0eVR5cGUoZmVhdHVyZSwgZW50aXR5RGF0YSkgfHxcbiAgICAgIGZlYXR1cmUuYmFzZUVudGl0eVR5cGVcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VzdG9tRW50aXR5VHlwZShcbiAgICBmZWF0dXJlOiBpRmVhdHVyZUNvbmZpZyxcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXNcbiAgKTogaUVudGl0eUNvbnN0cnVjdG9yIHtcblxuICAgIHJldHVybiBmZWF0dXJlLmVudGl0eVR5cGVGcm9tRW50aXR5RGF0YShlbnRpdHlEYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlJChcbiAgICBmZWF0dXJlTmFtZTogRmVhdHVyZUlkZW50aWZpZXJcbiAgKTogT2JzZXJ2YWJsZTxpRmVhdHVyZUNvbmZpZz4ge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzJC5waXBlKFxuICAgICAgbWFwKGZlYXR1cmVzID0+IGZlYXR1cmVzW2ZlYXR1cmVOYW1lXSApLFxuICAgIClcbiAgfVxuXG5cbiAgLy8gbmV3IHN0dWZmXG4gIHByaXZhdGUgZ2V0IGZlYXR1cmVzJCgpOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPiB7XG4gICAgaWYoIXRoaXMuX2ZlYXR1cmVzJCkge1xuICAgICAgdGhpcy5fZmVhdHVyZXMkID0gdGhpcy5idWlsZEZlYXR1cmVzJCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVzJFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZlYXR1cmVzJCgpOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPiB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdG9yZS5zZWxlY3QoZW50aXR5RmVhdHVyZVNlbGVjdG9ycy5mZWF0dXJlcylcbiAgICByZXR1cm4gPE9ic2VydmFibGU8aUZlYXR1cmVNYXA+PmZlYXR1cmVzXG4gIH1cbn1cbiJdfQ==