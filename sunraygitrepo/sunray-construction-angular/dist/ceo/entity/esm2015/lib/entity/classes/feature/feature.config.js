/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { EntityTypeFactory } from '../entity/entity-type.factory';
export class FeatureConfig {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    /**
     * @return {?}
     */
    get sliceNames() {
        if (this._sliceNames) {
            return this._sliceNames;
        }
        this._sliceNames = this.buildSliceNames();
        return this._sliceNames;
    }
    /**
     * @return {?}
     */
    get seedEntities() {
        if (!this._seedEntities) {
            this._seedEntities = this.buildSeeds();
        }
        return this._seedEntities;
    }
    /**
     * @return {?}
     */
    get entityTypes() {
        if (!this._entityTypes) {
            this._entityTypes = this.buildEntityTypes();
        }
        return this._entityTypes;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    entityTypeFromEntityData(entityData) {
        /** @type {?} */
        let ofType = (entityType) => {
            return entityType.config.ofType(entityData);
        };
        return _.find(this.entityTypes, ofType);
    }
    /**
     * @param {?} theType
     * @return {?}
     */
    entityType(theType) {
        /** @type {?} */
        let hasType = (entityType) => {
            return entityType.config.type == theType;
        };
        return _.find(this.entityTypes, hasType);
    }
    ////////////////////////////
    // Private methods
    ////////////////////////////
    /**
     * @private
     * @return {?}
     */
    get entitySliceNames() {
        /** @type {?} */
        let getName = (entityType) => {
            return entityType.sliceName;
        };
        return _.map(this.entityTypes, getName);
    }
    /**
     * @private
     * @return {?}
     */
    buildSliceNames() {
        /** @type {?} */
        let prefixedSliceName = (sliceName) => {
            return _.join([this.name, 'entities', sliceName], '.');
        };
        return _.map(this.entitySliceNames, prefixedSliceName);
    }
    /**
     * @private
     * @return {?}
     */
    buildSeeds() {
        return _.flatten(_.map(this.entityTypes, _.bind(this.buildEntityTypeSeeds, this)));
    }
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    buildEntityTypeSeeds(entityType) {
        /** @type {?} */
        let buildResourceIdentiifer = (ri) => {
            /** @type {?} */
            let map = {
                feature: this.name,
                type: entityType.config.type
            };
            return _.merge(map, ri);
        };
        return _.map(entityType.config.seed, buildResourceIdentiifer);
    }
    /**
     * @private
     * @return {?}
     */
    buildEntityTypes() {
        /** @type {?} */
        var factory = new EntityTypeFactory(this.baseEntityType);
        /** @type {?} */
        let build = _.bind(factory.build, factory);
        /** @type {?} */
        let entityTypeMaps = _.map(this.entityConfigs, build);
        return _.assign.apply(_, entityTypeMaps);
    }
}
if (false) {
    /** @type {?} */
    FeatureConfig.prototype.name;
    /** @type {?} */
    FeatureConfig.prototype.entityConfigs;
    /** @type {?} */
    FeatureConfig.prototype.baseEntityType;
    /** @type {?} */
    FeatureConfig.prototype.selectors;
    /**
     * @type {?}
     * @private
     */
    FeatureConfig.prototype._entityTypes;
    /**
     * @type {?}
     * @private
     */
    FeatureConfig.prototype._sliceNames;
    /**
     * @type {?}
     * @private
     */
    FeatureConfig.prototype._seedEntities;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9mZWF0dXJlL2ZlYXR1cmUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQVkzQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUVqRSxNQUFNLE9BQU8sYUFBYTs7OztJQVV4QixZQUFtQixJQUE4QjtRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtTQUN4QjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2YsSUFBRyxDQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7U0FDdkM7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQzs7Ozs7SUFFRCx3QkFBd0IsQ0FDdEIsVUFBb0M7O1lBRWhDLE1BQU0sR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQzFCLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0MsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWU7O1lBQ3BCLE9BQU8sR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQzNCLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFBO1FBQzFDLENBQUM7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUMxQyxDQUFDOzs7Ozs7OztJQU9ELElBQVksZ0JBQWdCOztZQUN0QixPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMzQixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUE7UUFDN0IsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7O0lBRU8sZUFBZTs7WUFDakIsaUJBQWlCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNwQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUN4RCxDQUFDO1FBRUQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3hELENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQ2QsQ0FBQyxDQUFDLEdBQUcsQ0FDSCxJQUFJLENBQUMsV0FBVyxFQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FDeEMsQ0FDRixDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsVUFBVTs7WUFDakMsdUJBQXVCLEdBQUcsQ0FDNUIsRUFBdUIsRUFDdkIsRUFBRTs7Z0JBQ0UsR0FBRyxHQUFHO2dCQUNSLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDbEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSTthQUM3QjtZQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDekIsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFBO0lBQy9ELENBQUM7Ozs7O0lBRU8sZ0JBQWdCOztZQUNsQixPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDOztZQUNwRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQzs7WUFDdEMsY0FBYyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDckQsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUNGOzs7SUF6R0MsNkJBQVk7O0lBQ1osc0NBQThCOztJQUM5Qix1Q0FBa0M7O0lBQ2xDLGtDQUFjOzs7OztJQUVkLHFDQUFvQzs7Ozs7SUFDcEMsb0NBQTZCOzs7OztJQUM3QixzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgaUZlYXR1cmVDb25maWcsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICBpRW50aXR5VHlwZU1hcCxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbmZpZyxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgRW50aXR5VHlwZUZhY3RvcnkgfSBmcm9tICcuLi9lbnRpdHkvZW50aXR5LXR5cGUuZmFjdG9yeSdcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb25maWcgaW1wbGVtZW50cyBpRmVhdHVyZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZ1xuICBlbnRpdHlDb25maWdzOiBpRW50aXR5Q29uZmlnW11cbiAgYmFzZUVudGl0eVR5cGU6IGlFbnRpdHlDb25zdHJ1Y3RvclxuICBzZWxlY3RvcnM6IGFueVxuXG4gIHByaXZhdGUgX2VudGl0eVR5cGVzOiBpRW50aXR5VHlwZU1hcFxuICBwcml2YXRlIF9zbGljZU5hbWVzOiBzdHJpbmdbXVxuICBwcml2YXRlIF9zZWVkRW50aXRpZXM6IGlFbnRpdHlDb25zdHJ1Y3RvcltdXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPGlGZWF0dXJlQ29uZmlnPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdClcbiAgfVxuXG4gIGdldCBzbGljZU5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBpZih0aGlzLl9zbGljZU5hbWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2xpY2VOYW1lc1xuICAgIH1cblxuICAgIHRoaXMuX3NsaWNlTmFtZXMgPSB0aGlzLmJ1aWxkU2xpY2VOYW1lcygpXG4gICAgcmV0dXJuIHRoaXMuX3NsaWNlTmFtZXNcbiAgfVxuXG4gIGdldCBzZWVkRW50aXRpZXMoKSB7XG4gICBpZighIHRoaXMuX3NlZWRFbnRpdGllcykge1xuICAgICB0aGlzLl9zZWVkRW50aXRpZXMgPSB0aGlzLmJ1aWxkU2VlZHMoKVxuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fc2VlZEVudGl0aWVzXG4gIH1cblxuICBnZXQgZW50aXR5VHlwZXMoKTogaUVudGl0eVR5cGVNYXAge1xuICAgIGlmKCF0aGlzLl9lbnRpdHlUeXBlcykge1xuICAgICAgdGhpcy5fZW50aXR5VHlwZXMgPSB0aGlzLmJ1aWxkRW50aXR5VHlwZXMoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlc1xuICB9XG5cbiAgZW50aXR5VHlwZUZyb21FbnRpdHlEYXRhKFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtc1xuICApOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuICAgIGxldCBvZlR5cGUgPSAoZW50aXR5VHlwZSkgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eVR5cGUuY29uZmlnLm9mVHlwZShlbnRpdHlEYXRhKVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdHlUeXBlcywgb2ZUeXBlKVxuICB9XG5cbiAgZW50aXR5VHlwZSh0aGVUeXBlOiBzdHJpbmcpOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuICAgIGxldCBoYXNUeXBlID0gKGVudGl0eVR5cGUpID0+IHtcbiAgICAgIHJldHVybiBlbnRpdHlUeXBlLmNvbmZpZy50eXBlID09IHRoZVR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gXy5maW5kKHRoaXMuZW50aXR5VHlwZXMsIGhhc1R5cGUpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICBwcml2YXRlIGdldCBlbnRpdHlTbGljZU5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgZ2V0TmFtZSA9IChlbnRpdHlUeXBlKSA9PiB7XG4gICAgICByZXR1cm4gZW50aXR5VHlwZS5zbGljZU5hbWVcbiAgICB9XG4gICAgcmV0dXJuIF8ubWFwKHRoaXMuZW50aXR5VHlwZXMsIGdldE5hbWUpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2xpY2VOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHByZWZpeGVkU2xpY2VOYW1lID0gKHNsaWNlTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIF8uam9pbihbdGhpcy5uYW1lLCAnZW50aXRpZXMnLCBzbGljZU5hbWVdLCAnLicpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8ubWFwKHRoaXMuZW50aXR5U2xpY2VOYW1lcywgcHJlZml4ZWRTbGljZU5hbWUpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2VlZHMoKSB7XG4gICAgcmV0dXJuIF8uZmxhdHRlbihcbiAgICAgIF8ubWFwKFxuICAgICAgICB0aGlzLmVudGl0eVR5cGVzLFxuICAgICAgICBfLmJpbmQodGhpcy5idWlsZEVudGl0eVR5cGVTZWVkcywgdGhpcylcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5VHlwZVNlZWRzKGVudGl0eVR5cGUpIHtcbiAgICBsZXQgYnVpbGRSZXNvdXJjZUlkZW50aWlmZXIgPSAoXG4gICAgICByaTogaVJlc291cmNlSWRlbnRpZmllclxuICAgICkgPT4ge1xuICAgICAgbGV0IG1hcCA9IHtcbiAgICAgICAgZmVhdHVyZTogdGhpcy5uYW1lLFxuICAgICAgICB0eXBlOiBlbnRpdHlUeXBlLmNvbmZpZy50eXBlXG4gICAgICB9XG4gICAgICByZXR1cm4gXy5tZXJnZShtYXAsIHJpKVxuICAgIH1cblxuICAgIHJldHVybiBfLm1hcChlbnRpdHlUeXBlLmNvbmZpZy5zZWVkLCBidWlsZFJlc291cmNlSWRlbnRpaWZlcilcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdHlUeXBlcygpIHtcbiAgICB2YXIgZmFjdG9yeSA9IG5ldyBFbnRpdHlUeXBlRmFjdG9yeSh0aGlzLmJhc2VFbnRpdHlUeXBlKVxuICAgIGxldCBidWlsZCA9IF8uYmluZChmYWN0b3J5LmJ1aWxkLCBmYWN0b3J5KVxuICAgIGxldCBlbnRpdHlUeXBlTWFwcyA9IF8ubWFwKHRoaXMuZW50aXR5Q29uZmlncywgYnVpbGQpXG4gICAgcmV0dXJuIF8uYXNzaWduLmFwcGx5KF8sIGVudGl0eVR5cGVNYXBzKVxuICB9XG59XG4iXX0=