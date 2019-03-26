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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9mZWF0dXJlL2ZlYXR1cmUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQVkzQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUVqRTtJQVVFLHVCQUFtQixJQUE4QjtRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsc0JBQUkscUNBQVU7Ozs7UUFBZDtZQUNFLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO2FBQ3hCO1lBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVk7Ozs7UUFBaEI7WUFDQyxJQUFHLENBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7YUFDdkM7WUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUE7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBVzs7OztRQUFmO1lBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7YUFDNUM7WUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsZ0RBQXdCOzs7O0lBQXhCLFVBQ0UsVUFBb0M7O1lBRWhDLE1BQU0s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J2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgaUZlYXR1cmVDb25maWcsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICBpRW50aXR5VHlwZU1hcCxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbmZpZyxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgRW50aXR5VHlwZUZhY3RvcnkgfSBmcm9tICcuLi9lbnRpdHkvZW50aXR5LXR5cGUuZmFjdG9yeSdcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb25maWcgaW1wbGVtZW50cyBpRmVhdHVyZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZ1xuICBlbnRpdHlDb25maWdzOiBpRW50aXR5Q29uZmlnW11cbiAgYmFzZUVudGl0eVR5cGU6IGlFbnRpdHlDb25zdHJ1Y3RvclxuICBzZWxlY3RvcnM6IGFueVxuXG4gIHByaXZhdGUgX2VudGl0eVR5cGVzOiBpRW50aXR5VHlwZU1hcFxuICBwcml2YXRlIF9zbGljZU5hbWVzOiBzdHJpbmdbXVxuICBwcml2YXRlIF9zZWVkRW50aXRpZXM6IGlFbnRpdHlDb25zdHJ1Y3RvcltdXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPGlGZWF0dXJlQ29uZmlnPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdClcbiAgfVxuXG4gIGdldCBzbGljZU5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBpZih0aGlzLl9zbGljZU5hbWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2xpY2VOYW1lc1xuICAgIH1cblxuICAgIHRoaXMuX3NsaWNlTmFtZXMgPSB0aGlzLmJ1aWxkU2xpY2VOYW1lcygpXG4gICAgcmV0dXJuIHRoaXMuX3NsaWNlTmFtZXNcbiAgfVxuXG4gIGdldCBzZWVkRW50aXRpZXMoKSB7XG4gICBpZighIHRoaXMuX3NlZWRFbnRpdGllcykge1xuICAgICB0aGlzLl9zZWVkRW50aXRpZXMgPSB0aGlzLmJ1aWxkU2VlZHMoKVxuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fc2VlZEVudGl0aWVzXG4gIH1cblxuICBnZXQgZW50aXR5VHlwZXMoKTogaUVudGl0eVR5cGVNYXAge1xuICAgIGlmKCF0aGlzLl9lbnRpdHlUeXBlcykge1xuICAgICAgdGhpcy5fZW50aXR5VHlwZXMgPSB0aGlzLmJ1aWxkRW50aXR5VHlwZXMoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlc1xuICB9XG5cbiAgZW50aXR5VHlwZUZyb21FbnRpdHlEYXRhKFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtc1xuICApOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuICAgIGxldCBvZlR5cGUgPSAoZW50aXR5VHlwZSkgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eVR5cGUuY29uZmlnLm9mVHlwZShlbnRpdHlEYXRhKVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdHlUeXBlcywgb2ZUeXBlKVxuICB9XG5cbiAgZW50aXR5VHlwZSh0aGVUeXBlOiBzdHJpbmcpOiBpRW50aXR5Q29uc3RydWN0b3Ige1xuICAgIGxldCBoYXNUeXBlID0gKGVudGl0eVR5cGUpID0+IHtcbiAgICAgIHJldHVybiBlbnRpdHlUeXBlLmNvbmZpZy50eXBlID09IHRoZVR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gXy5maW5kKHRoaXMuZW50aXR5VHlwZXMsIGhhc1R5cGUpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICBwcml2YXRlIGdldCBlbnRpdHlTbGljZU5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgZ2V0TmFtZSA9IChlbnRpdHlUeXBlKSA9PiB7XG4gICAgICByZXR1cm4gZW50aXR5VHlwZS5zbGljZU5hbWVcbiAgICB9XG4gICAgcmV0dXJuIF8ubWFwKHRoaXMuZW50aXR5VHlwZXMsIGdldE5hbWUpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2xpY2VOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHByZWZpeGVkU2xpY2VOYW1lID0gKHNsaWNlTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIF8uam9pbihbdGhpcy5uYW1lLCAnZW50aXRpZXMnLCBzbGljZU5hbWVdLCAnLicpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8ubWFwKHRoaXMuZW50aXR5U2xpY2VOYW1lcywgcHJlZml4ZWRTbGljZU5hbWUpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2VlZHMoKSB7XG4gICAgcmV0dXJuIF8uZmxhdHRlbihcbiAgICAgIF8ubWFwKFxuICAgICAgICB0aGlzLmVudGl0eVR5cGVzLFxuICAgICAgICBfLmJpbmQodGhpcy5idWlsZEVudGl0eVR5cGVTZWVkcywgdGhpcylcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5VHlwZVNlZWRzKGVudGl0eVR5cGUpIHtcbiAgICBsZXQgYnVpbGRSZXNvdXJjZUlkZW50aWlmZXIgPSAoXG4gICAgICByaTogaVJlc291cmNlSWRlbnRpZmllclxuICAgICkgPT4ge1xuICAgICAgbGV0IG1hcCA9IHtcbiAgICAgICAgZmVhdHVyZTogdGhpcy5uYW1lLFxuICAgICAgICB0eXBlOiBlbnRpdHlUeXBlLmNvbmZpZy50eXBlXG4gICAgICB9XG4gICAgICByZXR1cm4gXy5tZXJnZShtYXAsIHJpKVxuICAgIH1cblxuICAgIHJldHVybiBfLm1hcChlbnRpdHlUeXBlLmNvbmZpZy5zZWVkLCBidWlsZFJlc291cmNlSWRlbnRpaWZlcilcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdHlUeXBlcygpIHtcbiAgICB2YXIgZmFjdG9yeSA9IG5ldyBFbnRpdHlUeXBlRmFjdG9yeSh0aGlzLmJhc2VFbnRpdHlUeXBlKVxuICAgIGxldCBidWlsZCA9IF8uYmluZChmYWN0b3J5LmJ1aWxkLCBmYWN0b3J5KVxuICAgIGxldCBlbnRpdHlUeXBlTWFwcyA9IF8ubWFwKHRoaXMuZW50aXR5Q29uZmlncywgYnVpbGQpXG4gICAgcmV0dXJuIF8uYXNzaWduLmFwcGx5KF8sIGVudGl0eVR5cGVNYXBzKVxuICB9XG59XG4iXX0=