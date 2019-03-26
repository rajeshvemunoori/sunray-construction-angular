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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2ZlYXR1cmUvZmVhdHVyZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBWTNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRWpFLE1BQU0sT0FBTyxhQUFhOzs7O0lBVXhCLFlBQW1CLElBQThCO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZixJQUFHLENBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDOzs7OztJQUVELHdCQUF3QixDQUN0QixVQUFvQzs7WUFFaEMsTUFBTSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QyxDQUFDO1FBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZTs7WUFDcEIsT0FBTyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDM0IsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUE7UUFDMUMsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQzFDLENBQUM7Ozs7Ozs7O0lBT0QsSUFBWSxnQkFBZ0I7O1lBQ3RCLE9BQU8sR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQzNCLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQTtRQUM3QixDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFTyxlQUFlOztZQUNqQixpQkFBaUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3hELENBQUM7UUFFRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLENBQUE7SUFDeEQsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FDZCxDQUFDLENBQUMsR0FBRyxDQUNILElBQUksQ0FBQyxXQUFXLEVBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUN4QyxDQUNGLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxVQUFVOztZQUNqQyx1QkFBdUIsR0FBRyxDQUM1QixFQUF1QixFQUN2QixFQUFFOztnQkFDRSxHQUFHLEdBQUc7Z0JBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNsQixJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQzdCO1lBQ0QsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN6QixDQUFDO1FBRUQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUE7SUFDL0QsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7O1lBQ2xCLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7O1lBQ3BELEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDOztZQUN0QyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztRQUNyRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0NBQ0Y7OztJQXpHQyw2QkFBWTs7SUFDWixzQ0FBOEI7O0lBQzlCLHVDQUFrQzs7SUFDbEMsa0NBQWM7Ozs7O0lBRWQscUNBQW9DOzs7OztJQUNwQyxvQ0FBNkI7Ozs7O0lBQzdCLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpRmVhdHVyZUNvbmZpZyxcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHlUeXBlTWFwLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uZmlnLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBFbnRpdHlUeXBlRmFjdG9yeSB9IGZyb20gJy4uL2VudGl0eS9lbnRpdHktdHlwZS5mYWN0b3J5J1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbmZpZyBpbXBsZW1lbnRzIGlGZWF0dXJlQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nXG4gIGVudGl0eUNvbmZpZ3M6IGlFbnRpdHlDb25maWdbXVxuICBiYXNlRW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yXG4gIHNlbGVjdG9yczogYW55XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZXM6IGlFbnRpdHlUeXBlTWFwXG4gIHByaXZhdGUgX3NsaWNlTmFtZXM6IHN0cmluZ1tdXG4gIHByaXZhdGUgX3NlZWRFbnRpdGllczogaUVudGl0eUNvbnN0cnVjdG9yW11cblxuICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8aUZlYXR1cmVDb25maWc+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KVxuICB9XG5cbiAgZ2V0IHNsaWNlTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGlmKHRoaXMuX3NsaWNlTmFtZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zbGljZU5hbWVzXG4gICAgfVxuXG4gICAgdGhpcy5fc2xpY2VOYW1lcyA9IHRoaXMuYnVpbGRTbGljZU5hbWVzKClcbiAgICByZXR1cm4gdGhpcy5fc2xpY2VOYW1lc1xuICB9XG5cbiAgZ2V0IHNlZWRFbnRpdGllcygpIHtcbiAgIGlmKCEgdGhpcy5fc2VlZEVudGl0aWVzKSB7XG4gICAgIHRoaXMuX3NlZWRFbnRpdGllcyA9IHRoaXMuYnVpbGRTZWVkcygpXG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9zZWVkRW50aXRpZXNcbiAgfVxuXG4gIGdldCBlbnRpdHlUeXBlcygpOiBpRW50aXR5VHlwZU1hcCB7XG4gICAgaWYoIXRoaXMuX2VudGl0eVR5cGVzKSB7XG4gICAgICB0aGlzLl9lbnRpdHlUeXBlcyA9IHRoaXMuYnVpbGRFbnRpdHlUeXBlcygpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVzXG4gIH1cblxuICBlbnRpdHlUeXBlRnJvbUVudGl0eURhdGEoXG4gICAgZW50aXR5RGF0YTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zXG4gICk6IGlFbnRpdHlDb25zdHJ1Y3RvciB7XG4gICAgbGV0IG9mVHlwZSA9IChlbnRpdHlUeXBlKSA9PiB7XG4gICAgICByZXR1cm4gZW50aXR5VHlwZS5jb25maWcub2ZUeXBlKGVudGl0eURhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLmVudGl0eVR5cGVzLCBvZlR5cGUpXG4gIH1cblxuICBlbnRpdHlUeXBlKHRoZVR5cGU6IHN0cmluZyk6IGlFbnRpdHlDb25zdHJ1Y3RvciB7XG4gICAgbGV0IGhhc1R5cGUgPSAoZW50aXR5VHlwZSkgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eVR5cGUuY29uZmlnLnR5cGUgPT0gdGhlVHlwZVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdHlUeXBlcywgaGFzVHlwZSlcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gIHByaXZhdGUgZ2V0IGVudGl0eVNsaWNlTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGxldCBnZXROYW1lID0gKGVudGl0eVR5cGUpID0+IHtcbiAgICAgIHJldHVybiBlbnRpdHlUeXBlLnNsaWNlTmFtZVxuICAgIH1cbiAgICByZXR1cm4gXy5tYXAodGhpcy5lbnRpdHlUeXBlcywgZ2V0TmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTbGljZU5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcHJlZml4ZWRTbGljZU5hbWUgPSAoc2xpY2VOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gXy5qb2luKFt0aGlzLm5hbWUsICdlbnRpdGllcycsIHNsaWNlTmFtZV0sICcuJylcbiAgICB9XG5cbiAgICByZXR1cm4gXy5tYXAodGhpcy5lbnRpdHlTbGljZU5hbWVzLCBwcmVmaXhlZFNsaWNlTmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTZWVkcygpIHtcbiAgICByZXR1cm4gXy5mbGF0dGVuKFxuICAgICAgXy5tYXAoXG4gICAgICAgIHRoaXMuZW50aXR5VHlwZXMsXG4gICAgICAgIF8uYmluZCh0aGlzLmJ1aWxkRW50aXR5VHlwZVNlZWRzLCB0aGlzKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdHlUeXBlU2VlZHMoZW50aXR5VHlwZSkge1xuICAgIGxldCBidWlsZFJlc291cmNlSWRlbnRpaWZlciA9IChcbiAgICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyXG4gICAgKSA9PiB7XG4gICAgICBsZXQgbWFwID0ge1xuICAgICAgICBmZWF0dXJlOiB0aGlzLm5hbWUsXG4gICAgICAgIHR5cGU6IGVudGl0eVR5cGUuY29uZmlnLnR5cGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBfLm1lcmdlKG1hcCwgcmkpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8ubWFwKGVudGl0eVR5cGUuY29uZmlnLnNlZWQsIGJ1aWxkUmVzb3VyY2VJZGVudGlpZmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eVR5cGVzKCkge1xuICAgIHZhciBmYWN0b3J5ID0gbmV3IEVudGl0eVR5cGVGYWN0b3J5KHRoaXMuYmFzZUVudGl0eVR5cGUpXG4gICAgbGV0IGJ1aWxkID0gXy5iaW5kKGZhY3RvcnkuYnVpbGQsIGZhY3RvcnkpXG4gICAgbGV0IGVudGl0eVR5cGVNYXBzID0gXy5tYXAodGhpcy5lbnRpdHlDb25maWdzLCBidWlsZClcbiAgICByZXR1cm4gXy5hc3NpZ24uYXBwbHkoXywgZW50aXR5VHlwZU1hcHMpXG4gIH1cbn1cbiJdfQ==