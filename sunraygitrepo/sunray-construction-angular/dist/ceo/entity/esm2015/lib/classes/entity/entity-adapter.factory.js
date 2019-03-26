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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFkYXB0ZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L2VudGl0eS1hZGFwdGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBVyxrQkFBa0IsQ0FBQTtBQUVyRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQ1UsY0FBYztRQUFkLG1CQUFjLEdBQWQsY0FBYyxDQUFBO0lBQ3JCLENBQUM7Ozs7SUFFSixJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FDaEMsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxVQUFVOztZQUN6QixJQUFJLEdBQUc7WUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJO1lBQ3BDLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO1FBQ0QsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0NBQ0Y7OztJQS9CQyx5Q0FBZ0I7Ozs7O0lBR2QsOENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEVudGl0eUFkYXB0ZXIgfSAgICAgIGZyb20gJy4vZW50aXR5LmFkYXB0ZXInXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlBZGFwdGVyRmFjdG9yeSB7XG4gIF9hZGFwdGVyczogYW55W11cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9mZWF0dXJlQ29uZmlnLFxuICApIHt9XG5cbiAgZ2V0IGZlYXR1cmVDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZUNvbmZpZ1xuICB9XG5cbiAgZ2V0IGFkYXB0ZXJzKCk6IGFueVtdIHtcbiAgICBpZighdGhpcy5fYWRhcHRlcnMpIHtcbiAgICAgIHRoaXMuX2FkYXB0ZXJzID0gdGhpcy5idWlsZEFkYXB0ZXJzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXJzXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRhcHRlcnMoKSB7XG4gICAgcmV0dXJuIF8ubWFwKFxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnLmVudGl0eVR5cGVzLFxuICAgICAgXy5iaW5kKHRoaXMuYnVpbGRBZGFwdGVyLCB0aGlzKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBZGFwdGVyKGVudGl0eVR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVDb25maWcubmFtZSxcbiAgICAgIGVudGl0eVR5cGU6IGVudGl0eVR5cGUsXG4gICAgfVxuICAgIHJldHVybiBuZXcgRW50aXR5QWRhcHRlcihvcHRzKVxuICB9XG59XG4iXX0=