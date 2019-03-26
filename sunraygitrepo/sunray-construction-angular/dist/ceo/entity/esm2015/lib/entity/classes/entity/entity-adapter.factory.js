/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { EntityAdapter } from './entity.adapter';
export class EntityAdapterFactory {
    /**
     * @param {?} _featureConfig
     */
    constructor(_featureConfig) {
        this._featureConfig = _featureConfig;
    }
    /**
     * @return {?}
     */
    get featureConfig() {
        return this._featureConfig;
    }
    /**
     * @return {?}
     */
    get adapters() {
        if (!this._adapters) {
            this._adapters = this.buildAdapters();
        }
        return this._adapters;
    }
    /**
     * @private
     * @return {?}
     */
    buildAdapters() {
        return _.map(this.featureConfig.entityTypes, _.bind(this.buildAdapter, this));
    }
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    buildAdapter(entityType) {
        /** @type {?} */
        let opts = {
            featureName: this.featureConfig.name,
            entityType: entityType,
        };
        return new EntityAdapter(opts);
    }
}
if (false) {
    /** @type {?} */
    EntityAdapterFactory.prototype._adapters;
    /**
     * @type {?}
     * @private
     */
    EntityAdapterFactory.prototype._featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFkYXB0ZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9lbnRpdHktYWRhcHRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQVcsa0JBQWtCLENBQUE7QUFFckQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUcvQixZQUNVLGNBQWM7UUFBZCxtQkFBYyxHQUFkLGNBQWMsQ0FBQTtJQUNyQixDQUFDOzs7O0lBRUosSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN2QixDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQ2hDLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsVUFBVTs7WUFDekIsSUFBSSxHQUFHO1lBQ1QsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTtZQUNwQyxVQUFVLEVBQUUsVUFBVTtTQUN2QjtRQUNELE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEMsQ0FBQztDQUNGOzs7SUEvQkMseUNBQWdCOzs7OztJQUdkLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBFbnRpdHlBZGFwdGVyIH0gICAgICBmcm9tICcuL2VudGl0eS5hZGFwdGVyJ1xuXG5leHBvcnQgY2xhc3MgRW50aXR5QWRhcHRlckZhY3Rvcnkge1xuICBfYWRhcHRlcnM6IGFueVtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZmVhdHVyZUNvbmZpZyxcbiAgKSB7fVxuXG4gIGdldCBmZWF0dXJlQ29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVDb25maWdcbiAgfVxuXG4gIGdldCBhZGFwdGVycygpOiBhbnlbXSB7XG4gICAgaWYoIXRoaXMuX2FkYXB0ZXJzKSB7XG4gICAgICB0aGlzLl9hZGFwdGVycyA9IHRoaXMuYnVpbGRBZGFwdGVycygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyc1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFkYXB0ZXJzKCkge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZy5lbnRpdHlUeXBlcyxcbiAgICAgIF8uYmluZCh0aGlzLmJ1aWxkQWRhcHRlciwgdGhpcylcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRhcHRlcihlbnRpdHlUeXBlKSB7XG4gICAgbGV0IG9wdHMgPSB7XG4gICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlQ29uZmlnLm5hbWUsXG4gICAgICBlbnRpdHlUeXBlOiBlbnRpdHlUeXBlLFxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVudGl0eUFkYXB0ZXIob3B0cylcbiAgfVxufVxuIl19