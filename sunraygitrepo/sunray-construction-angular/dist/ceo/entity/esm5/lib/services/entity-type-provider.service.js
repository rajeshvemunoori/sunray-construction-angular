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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2VudGl0eS10eXBlLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUVwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBZ0IsYUFBYSxDQUFBO0FBYTdDLE9BQU8sRUFDTCxzQkFBc0IsR0FDdkIsTUFBTSw0QkFBNEIsQ0FBQTs7O0FBRW5DO0lBTUUsbUNBQ1ksS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUMxQixDQUFDOzs7OztJQUVKLDRDQUFROzs7O0lBQVIsVUFDRSxVQUFvQztRQUR0QyxpQkFPQztRQUhDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUN4RCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGlEQUFhOzs7Ozs7SUFBckIsVUFDRSxPQUF1QixFQUN2QixVQUFvQztRQUdwQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxjQUFjLENBQUE7SUFDMUIsQ0FBQzs7Ozs7OztJQUVPLHVEQUFtQjs7Ozs7O0lBQTNCLFVBQ0UsT0FBdUIsRUFDdkIsVUFBb0M7UUFHcEMsT0FBTyxPQUFPLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7Ozs7O0lBRU8sK0NBQVc7Ozs7O0lBQW5CLFVBQ0UsV0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFyQixDQUFxQixDQUFFLENBQ3hDLENBQUE7SUFDSCxDQUFDO0lBSUQsc0JBQVksZ0RBQVM7UUFEckIsWUFBWTs7Ozs7OztRQUNaO1lBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2FBQ3hDO1lBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hCLENBQUM7OztPQUFBOzs7OztJQUVPLGtEQUFjOzs7O0lBQXRCOztZQUNNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7UUFDakUsT0FBTyxtQkFBeUIsUUFBUSxFQUFBLENBQUE7SUFDMUMsQ0FBQzs7Z0JBekRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBbkJRLEtBQUs7OztvQ0FYZDtDQXNGQyxBQTFERCxJQTBEQztTQXZEWSx5QkFBeUI7Ozs7OztJQUNwQywrQ0FBMkM7Ozs7O0lBR3pDLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBwaXBlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlIH0gICAgICAgICAgIGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBGZWF0dXJlSWRlbnRpZmllcixcbiAgaUVudGl0eUNvbmZpZyxcbiAgaUVudGl0eVR5cGVNYXAsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICBpRmVhdHVyZUNvbmZpZyxcbiAgaUZlYXR1cmVNYXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGVudGl0eUZlYXR1cmVTZWxlY3RvcnMsXG59IGZyb20gJy4uL3N0YXRlL2ZlYXR1cmUvc2VsZWN0b3JzJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlUHJvdmlkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZmVhdHVyZXMkOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8YW55PixcbiAgKSB7fVxuXG4gIHByb3ZpZGUkKFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5Q29uc3RydWN0b3I+IHtcblxuICAgIHJldHVybiB0aGlzLmdldEZlYXR1cmUkKGVudGl0eURhdGEuZmVhdHVyZSkucGlwZShcbiAgICAgIG1hcChmZWF0dXJlID0+IHRoaXMuZ2V0RW50aXR5VHlwZShmZWF0dXJlLCBlbnRpdHlEYXRhKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRpdHlUeXBlKFxuICAgIGZlYXR1cmU6IGlGZWF0dXJlQ29uZmlnLFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtc1xuICApOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VzdG9tRW50aXR5VHlwZShmZWF0dXJlLCBlbnRpdHlEYXRhKSB8fFxuICAgICAgZmVhdHVyZS5iYXNlRW50aXR5VHlwZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21FbnRpdHlUeXBlKFxuICAgIGZlYXR1cmU6IGlGZWF0dXJlQ29uZmlnLFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtc1xuICApOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuXG4gICAgcmV0dXJuIGZlYXR1cmUuZW50aXR5VHlwZUZyb21FbnRpdHlEYXRhKGVudGl0eURhdGEpXG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmUkKFxuICAgIGZlYXR1cmVOYW1lOiBGZWF0dXJlSWRlbnRpZmllclxuICApOiBPYnNlcnZhYmxlPGlGZWF0dXJlQ29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMkLnBpcGUoXG4gICAgICBtYXAoZmVhdHVyZXMgPT4gZmVhdHVyZXNbZmVhdHVyZU5hbWVdICksXG4gICAgKVxuICB9XG5cblxuICAvLyBuZXcgc3R1ZmZcbiAgcHJpdmF0ZSBnZXQgZmVhdHVyZXMkKCk6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+IHtcbiAgICBpZighdGhpcy5fZmVhdHVyZXMkKSB7XG4gICAgICB0aGlzLl9mZWF0dXJlcyQgPSB0aGlzLmJ1aWxkRmVhdHVyZXMkKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZXMkXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRmVhdHVyZXMkKCk6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+IHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0b3JlLnNlbGVjdChlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLmZlYXR1cmVzKVxuICAgIHJldHVybiA8T2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4+ZmVhdHVyZXNcbiAgfVxufVxuIl19