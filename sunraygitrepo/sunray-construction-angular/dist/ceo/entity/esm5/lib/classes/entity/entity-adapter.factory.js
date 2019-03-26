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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFkYXB0ZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L2VudGl0eS1hZGFwdGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBVyxrQkFBa0IsQ0FBQTtBQUVyRDtJQUdFLDhCQUNVLGNBQWM7UUFBZCxtQkFBYyxHQUFkLGNBQWMsQ0FBQTtJQUNyQixDQUFDO0lBRUosc0JBQUksK0NBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBUTs7OztRQUFaO1lBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2FBQ3RDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3ZCLENBQUM7OztPQUFBOzs7OztJQUVPLDRDQUFhOzs7O0lBQXJCO1FBQ0UsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQ2hDLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTywyQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsVUFBVTs7WUFDekIsSUFBSSxHQUFHO1lBQ1QsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTtZQUNwQyxVQUFVLEVBQUUsVUFBVTtTQUN2QjtRQUNELE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7OztJQS9CQyx5Q0FBZ0I7Ozs7O0lBR2QsOENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEVudGl0eUFkYXB0ZXIgfSAgICAgIGZyb20gJy4vZW50aXR5LmFkYXB0ZXInXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlBZGFwdGVyRmFjdG9yeSB7XG4gIF9hZGFwdGVyczogYW55W11cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9mZWF0dXJlQ29uZmlnLFxuICApIHt9XG5cbiAgZ2V0IGZlYXR1cmVDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZUNvbmZpZ1xuICB9XG5cbiAgZ2V0IGFkYXB0ZXJzKCk6IGFueVtdIHtcbiAgICBpZighdGhpcy5fYWRhcHRlcnMpIHtcbiAgICAgIHRoaXMuX2FkYXB0ZXJzID0gdGhpcy5idWlsZEFkYXB0ZXJzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXJzXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRhcHRlcnMoKSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnLmVudGl0eVR5cGVzLFxuICAgICAgXy5iaW5kKHRoaXMuYnVpbGRBZGFwdGVyLCB0aGlzKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBZGFwdGVyKGVudGl0eVR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVDb25maWcubmFtZSxcbiAgICAgIGVudGl0eVR5cGU6IGVudGl0eVR5cGUsXG4gICAgfVxuICAgIHJldHVybiBuZXcgRW50aXR5QWRhcHRlcihvcHRzKVxuICB9XG59XG4iXX0=