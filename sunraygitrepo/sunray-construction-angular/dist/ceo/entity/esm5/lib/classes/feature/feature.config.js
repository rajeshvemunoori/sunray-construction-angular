/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { EntityTypeFactory } from '../entity/entity-type.factory';
var FeatureConfig = /** @class */ (function () {
    function FeatureConfig(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(FeatureConfig.prototype, "sliceNames", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._sliceNames) {
                return this._sliceNames;
            }
            this._sliceNames = this.buildSliceNames();
            return this._sliceNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "seedEntities", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._seedEntities) {
                this._seedEntities = this.buildSeeds();
            }
            return this._seedEntities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "entityTypes", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._entityTypes) {
                this._entityTypes = this.buildEntityTypes();
            }
            return this._entityTypes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} entityData
     * @return {?}
     */
    FeatureConfig.prototype.entityTypeFromEntityData = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        /** @type {?} */
        var ofType = function (entityType) {
            return entityType.config.ofType(entityData);
        };
        return _.find(this.entityTypes, ofType);
    };
    /**
     * @param {?} theType
     * @return {?}
     */
    FeatureConfig.prototype.entityType = /**
     * @param {?} theType
     * @return {?}
     */
    function (theType) {
        /** @type {?} */
        var hasType = function (entityType) {
            return entityType.config.type == theType;
        };
        return _.find(this.entityTypes, hasType);
    };
    Object.defineProperty(FeatureConfig.prototype, "entitySliceNames", {
        ////////////////////////////
        // Private methods
        ////////////////////////////
        get: 
        ////////////////////////////
        // Private methods
        ////////////////////////////
        /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var getName = function (entityType) {
                return entityType.sliceName;
            };
            return _.map(this.entityTypes, getName);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    FeatureConfig.prototype.buildSliceNames = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var prefixedSliceName = function (sliceName) {
            return _.join([_this.name, 'entities', sliceName], '.');
        };
        return _.map(this.entitySliceNames, prefixedSliceName);
    };
    /**
     * @private
     * @return {?}
     */
    FeatureConfig.prototype.buildSeeds = /**
     * @private
     * @return {?}
     */
    function () {
        return _.flatten(_.map(this.entityTypes, _.bind(this.buildEntityTypeSeeds, this)));
    };
    /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    FeatureConfig.prototype.buildEntityTypeSeeds = /**
     * @private
     * @param {?} entityType
     * @return {?}
     */
    function (entityType) {
        var _this = this;
        /** @type {?} */
        var buildResourceIdentiifer = function (ri) {
            /** @type {?} */
            var map = {
                feature: _this.name,
                type: entityType.config.type
            };
            return _.merge(map, ri);
        };
        return _.map(entityType.config.seed, buildResourceIdentiifer);
    };
    /**
     * @private
     * @return {?}
     */
    FeatureConfig.prototype.buildEntityTypes = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = new EntityTypeFactory(this.baseEntityType);
        /** @type {?} */
        var build = _.bind(factory.build, factory);
        /** @type {?} */
        var entityTypeMaps = _.map(this.entityConfigs, build);
        return _.assign.apply(_, entityTypeMaps);
    };
    return FeatureConfig;
}());
export { FeatureConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2ZlYXR1cmUvZmVhdHVyZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBWTNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBRWpFO0lBVUUsdUJBQW1CLElBQThCO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxzQkFBSSxxQ0FBVTs7OztRQUFkO1lBQ0UsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7YUFDeEI7WUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUN6QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNDLElBQUcsQ0FBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTthQUN2QztZQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFXOzs7O1FBQWY7WUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTthQUM1QztZQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxnREFBd0I7Ozs7SUFBeEIsVUFDRSxVQUFvQzs7WUFFaEMsTUFBTSxHQUFHLFVB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J1xuXG5pbXBvcnQge1xuICBpRmVhdHVyZUNvbmZpZyxcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHlUeXBlTWFwLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uZmlnLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBFbnRpdHlUeXBlRmFjdG9yeSB9IGZyb20gJy4uL2VudGl0eS9lbnRpdHktdHlwZS5mYWN0b3J5J1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbmZpZyBpbXBsZW1lbnRzIGlGZWF0dXJlQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nXG4gIGVudGl0eUNvbmZpZ3M6IGlFbnRpdHlDb25maWdbXVxuICBiYXNlRW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yXG4gIHNlbGVjdG9yczogYW55XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZXM6IGlFbnRpdHlUeXBlTWFwXG4gIHByaXZhdGUgX3NsaWNlTmFtZXM6IHN0cmluZ1tdXG4gIHByaXZhdGUgX3NlZWRFbnRpdGllczogaUVudGl0eUNvbnN0cnVjdG9yW11cblxuICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8aUZlYXR1cmVDb25maWc+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KVxuICB9XG5cbiAgZ2V0IHNsaWNlTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGlmKHRoaXMuX3NsaWNlTmFtZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zbGljZU5hbWVzXG4gICAgfVxuXG4gICAgdGhpcy5fc2xpY2VOYW1lcyA9IHRoaXMuYnVpbGRTbGljZU5hbWVzKClcbiAgICByZXR1cm4gdGhpcy5fc2xpY2VOYW1lc1xuICB9XG5cbiAgZ2V0IHNlZWRFbnRpdGllcygpIHtcbiAgIGlmKCEgdGhpcy5fc2VlZEVudGl0aWVzKSB7XG4gICAgIHRoaXMuX3NlZWRFbnRpdGllcyA9IHRoaXMuYnVpbGRTZWVkcygpXG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9zZWVkRW50aXRpZXNcbiAgfVxuXG4gIGdldCBlbnRpdHlUeXBlcygpOiBpRW50aXR5VHlwZU1hcCB7XG4gICAgaWYoIXRoaXMuX2VudGl0eVR5cGVzKSB7XG4gICAgICB0aGlzLl9lbnRpdHlUeXBlcyA9IHRoaXMuYnVpbGRFbnRpdHlUeXBlcygpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVzXG4gIH1cblxuICBlbnRpdHlUeXBlRnJvbUVudGl0eURhdGEoXG4gICAgZW50aXR5RGF0YTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zXG4gICk6IGlFbnRpdHlDb25zdHJ1Y3RvciB7XG4gICAgbGV0IG9mVHlwZSA9IChlbnRpdHlUeXBlKSA9PiB7XG4gICAgICByZXR1cm4gZW50aXR5VHlwZS5jb25maWcub2ZUeXBlKGVudGl0eURhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLmVudGl0eVR5cGVzLCBvZlR5cGUpXG4gIH1cblxuICBlbnRpdHlUeXBlKHRoZVR5cGU6IHN0cmluZyk6IGlFbnRpdHlDb25zdHJ1Y3RvciB7XG4gICAgbGV0IGhhc1R5cGUgPSAoZW50aXR5VHlwZSkgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eVR5cGUuY29uZmlnLnR5cGUgPT0gdGhlVHlwZVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdHlUeXBlcywgaGFzVHlwZSlcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gIHByaXZhdGUgZ2V0IGVudGl0eVNsaWNlTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGxldCBnZXROYW1lID0gKGVudGl0eVR5cGUpID0+IHtcbiAgICAgIHJldHVybiBlbnRpdHlUeXBlLnNsaWNlTmFtZVxuICAgIH1cbiAgICByZXR1cm4gXy5tYXAodGhpcy5lbnRpdHlUeXBlcywgZ2V0TmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTbGljZU5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcHJlZml4ZWRTbGljZU5hbWUgPSAoc2xpY2VOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gXy5qb2luKFt0aGlzLm5hbWUsICdlbnRpdGllcycsIHNsaWNlTmFtZV0sICcuJylcbiAgICB9XG5cbiAgICByZXR1cm4gXy5tYXAodGhpcy5lbnRpdHlTbGljZU5hbWVzLCBwcmVmaXhlZFNsaWNlTmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTZWVkcygpIHtcbiAgICByZXR1cm4gXy5mbGF0dGVuKFxuICAgICAgXy5tYXAoXG4gICAgICAgIHRoaXMuZW50aXR5VHlwZXMsXG4gICAgICAgIF8uYmluZCh0aGlzLmJ1aWxkRW50aXR5VHlwZVNlZWRzLCB0aGlzKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdHlUeXBlU2VlZHMoZW50aXR5VHlwZSkge1xuICAgIGxldCBidWlsZFJlc291cmNlSWRlbnRpaWZlciA9IChcbiAgICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyXG4gICAgKSA9PiB7XG4gICAgICBsZXQgbWFwID0ge1xuICAgICAgICBmZWF0dXJlOiB0aGlzLm5hbWUsXG4gICAgICAgIHR5cGU6IGVudGl0eVR5cGUuY29uZmlnLnR5cGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBfLm1lcmdlKG1hcCwgcmkpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8ubWFwKGVudGl0eVR5cGUuY29uZmlnLnNlZWQsIGJ1aWxkUmVzb3VyY2VJZGVudGlpZmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eVR5cGVzKCkge1xuICAgIHZhciBmYWN0b3J5ID0gbmV3IEVudGl0eVR5cGVGYWN0b3J5KHRoaXMuYmFzZUVudGl0eVR5cGUpXG4gICAgbGV0IGJ1aWxkID0gXy5iaW5kKGZhY3RvcnkuYnVpbGQsIGZhY3RvcnkpXG4gICAgbGV0IGVudGl0eVR5cGVNYXBzID0gXy5tYXAodGhpcy5lbnRpdHlDb25maWdzLCBidWlsZClcbiAgICByZXR1cm4gXy5hc3NpZ24uYXBwbHkoXywgZW50aXR5VHlwZU1hcHMpXG4gIH1cbn1cbiJdfQ==