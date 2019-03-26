/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { EntityAdapter } from './entity.adapter';
var EntityAdapterFactory = /** @class */ (function () {
    function EntityAdapterFactory(_featureConfig) {
        this._featureConfig = _featureConfig;
    }
    Object.defineProperty(EntityAdapterFactory.prototype, "featureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._featureConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityAdapterFactory.prototype, "adapters", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._adapters) {
                this._adapters = this.buildAdapters();
            }
            return this._adapters;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    EntityAdapterFactory.prototype.buildAdapters = /**
     * @private
     * @return {?}
     */
    function () {
        return _.map(this.featureConfig.entityTypes, _.bind(this.buildAdapter, this));
    };
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    EntityAdapterFactory.prototype.buildAdapter = /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    function (entityType) {
        /** @type {?} */
        var opts = {
            featureName: this.featureConfig.name,
            entityType: entityType,
        };
        return new EntityAdapter(opts);
    };
    return EntityAdapterFactory;
}());
export { EntityAdapterFactory };
if (false) {
    /** @type {?} */
    EntityAdapterFactory.prototype._adapters;
    /**
     * @type {?}
     * @private
     */
    EntityAdapterFactory.prototype._featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFkYXB0ZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9lbnRpdHktYWRhcHRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQVcsa0JBQWtCLENBQUE7QUFFckQ7SUFHRSw4QkFDVSxjQUFjO1FBQWQsbUJBQWMsR0FBZCxjQUFjLENBQUE7SUFDckIsQ0FBQztJQUVKLHNCQUFJLCtDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQVE7Ozs7UUFBWjtZQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTthQUN0QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN2QixDQUFDOzs7T0FBQTs7Ozs7SUFFTyw0Q0FBYTs7OztJQUFyQjtRQUNFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FDVixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUNoQyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMkNBQVk7Ozs7O0lBQXBCLFVBQXFCLFVBQVU7O1lBQ3pCLElBQUksR0FBRztZQUNULFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7WUFDcEMsVUFBVSxFQUFFLFVBQVU7U0FDdkI7UUFDRCxPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7Ozs7SUEvQkMseUNBQWdCOzs7OztJQUdkLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBFbnRpdHlBZGFwdGVyIH0gICAgICBmcm9tICcuL2VudGl0eS5hZGFwdGVyJ1xuXG5leHBvcnQgY2xhc3MgRW50aXR5QWRhcHRlckZhY3Rvcnkge1xuICBfYWRhcHRlcnM6IGFueVtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZmVhdHVyZUNvbmZpZyxcbiAgKSB7fVxuXG4gIGdldCBmZWF0dXJlQ29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVDb25maWdcbiAgfVxuXG4gIGdldCBhZGFwdGVycygpOiBhbnlbXSB7XG4gICAgaWYoIXRoaXMuX2FkYXB0ZXJzKSB7XG4gICAgICB0aGlzLl9hZGFwdGVycyA9IHRoaXMuYnVpbGRBZGFwdGVycygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyc1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFkYXB0ZXJzKCkge1xuICAgIHJldHVybiBfLm1hcChcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZy5lbnRpdHlUeXBlcyxcbiAgICAgIF8uYmluZCh0aGlzLmJ1aWxkQWRhcHRlciwgdGhpcylcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRhcHRlcihlbnRpdHlUeXBlKSB7XG4gICAgbGV0IG9wdHMgPSB7XG4gICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlQ29uZmlnLm5hbWUsXG4gICAgICBlbnRpdHlUeXBlOiBlbnRpdHlUeXBlLFxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVudGl0eUFkYXB0ZXIob3B0cylcbiAgfVxufVxuIl19