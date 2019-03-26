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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2VudGl0eS10eXBlLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUVwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBZ0IsYUFBYSxDQUFBO0FBYTdDLE9BQU8sRUFDTCxzQkFBc0IsR0FDdkIsTUFBTSw0QkFBNEIsQ0FBQTs7O0FBS25DLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFHcEMsWUFDWSxLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQzFCLENBQUM7Ozs7O0lBRUosUUFBUSxDQUNOLFVBQW9DO1FBR3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUN4RCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FDbkIsT0FBdUIsRUFDdkIsVUFBb0M7UUFHcEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUNsRCxPQUFPLENBQUMsY0FBYyxDQUFBO0lBQzFCLENBQUM7Ozs7Ozs7SUFFTyxtQkFBbUIsQ0FDekIsT0FBdUIsRUFDdkIsVUFBb0M7UUFHcEMsT0FBTyxPQUFPLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUNqQixXQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN4QixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUUsQ0FDeEMsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUlELElBQVksU0FBUztRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDOzs7OztJQUVPLGNBQWM7O1lBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7UUFDakUsT0FBTyxtQkFBeUIsUUFBUSxFQUFBLENBQUE7SUFDMUMsQ0FBQzs7O1lBekRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQW5CUSxLQUFLOzs7Ozs7OztJQXFCWiwrQ0FBMkM7Ozs7O0lBR3pDLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBwaXBlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlIH0gICAgICAgICAgIGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBGZWF0dXJlSWRlbnRpZmllcixcbiAgaUVudGl0eUNvbmZpZyxcbiAgaUVudGl0eVR5cGVNYXAsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICBpRmVhdHVyZUNvbmZpZyxcbiAgaUZlYXR1cmVNYXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGVudGl0eUZlYXR1cmVTZWxlY3RvcnMsXG59IGZyb20gJy4uL3N0YXRlL2ZlYXR1cmUvc2VsZWN0b3JzJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlUHJvdmlkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZmVhdHVyZXMkOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8YW55PixcbiAgKSB7fVxuXG4gIHByb3ZpZGUkKFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5Q29uc3RydWN0b3I+IHtcblxuICAgIHJldHVybiB0aGlzLmdldEZlYXR1cmUkKGVudGl0eURhdGEuZmVhdHVyZSkucGlwZShcbiAgICAgIG1hcChmZWF0dXJlID0+IHRoaXMuZ2V0RW50aXR5VHlwZShmZWF0dXJlLCBlbnRpdHlEYXRhKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRpdHlUeXBlKFxuICAgIGZlYXR1cmU6IGlGZWF0dXJlQ29uZmlnLFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtc1xuICApOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VzdG9tRW50aXR5VHlwZShmZWF0dXJlLCBlbnRpdHlEYXRhKSB8fFxuICAgICAgZmVhdHVyZS5iYXNlRW50aXR5VHlwZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21FbnRpdHlUeXBlKFxuICAgIGZlYXR1cmU6IGlGZWF0dXJlQ29uZmlnLFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtc1xuICApOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuXG4gICAgcmV0dXJuIGZlYXR1cmUuZW50aXR5VHlwZUZyb21FbnRpdHlEYXRhKGVudGl0eURhdGEpXG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmUkKFxuICAgIGZlYXR1cmVOYW1lOiBGZWF0dXJlSWRlbnRpZmllclxuICApOiBPYnNlcnZhYmxlPGlGZWF0dXJlQ29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMkLnBpcGUoXG4gICAgICBtYXAoZmVhdHVyZXMgPT4gZmVhdHVyZXNbZmVhdHVyZU5hbWVdICksXG4gICAgKVxuICB9XG5cblxuICAvLyBuZXcgc3R1ZmZcbiAgcHJpdmF0ZSBnZXQgZmVhdHVyZXMkKCk6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+IHtcbiAgICBpZighdGhpcy5fZmVhdHVyZXMkKSB7XG4gICAgICB0aGlzLl9mZWF0dXJlcyQgPSB0aGlzLmJ1aWxkRmVhdHVyZXMkKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZXMkXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRmVhdHVyZXMkKCk6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+IHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0b3JlLnNlbGVjdChlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLmZlYXR1cmVzKVxuICAgIHJldHVybiA8T2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4+ZmVhdHVyZXNcbiAgfVxufVxuIl19