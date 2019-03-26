/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { classify } from '@ceo/core';
export class EntityTypeFactory {
    /**
     * @param {?} baseEntityType
     */
    constructor(baseEntityType) {
        this.baseEntityType = baseEntityType;
    }
    /**
     * @param {?} entityConfig
     * @return {?}
     */
    build(entityConfig) {
        /** @type {?} */
        let entityTypeName = classify(entityConfig.name);
        /** @type {?} */
        let entityType = this.buildEntityType(entityConfig);
        /** @type {?} */
        let map = {};
        /** @type {?} */
        let identifier = (/** @type {?} */ (entityTypeName));
        map[identifier] = entityType;
        return (/** @type {?} */ (map));
    }
    /**
     * @private
     * @param {?} entityConfig
     * @return {?}
     */
    buildEntityType(entityConfig) {
        /** @type {?} */
        var entityType;
        if (entityConfig.entityType) {
            entityType = entityConfig.entityType;
        }
        else {
            entityType = this.baseEntityType;
        }
        class Entity extends entityType {
        }
        Entity._sliceName = entityConfig.name;
        Entity.config = entityConfig;
        if (false) {
            /** @type {?} */
            Entity._sliceName;
            /** @type {?} */
            Entity.config;
        }
        return Entity;
    }
}
if (false) {
    /** @type {?} */
    EntityTypeFactory.prototype.baseEntityType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L2VudGl0eS10eXBlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFXcEMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUc1QixZQUNFLGNBQWtDO1FBRWxDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO0lBQ3RDLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUNILFlBQTJCOztZQUd2QixjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQzVDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQzs7WUFFL0MsR0FBRyxHQUFHLEVBQUU7O1lBQ1IsVUFBVSxHQUFHLG1CQUFzQixjQUFjLEVBQUE7UUFDckQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtRQUM1QixPQUFPLG1CQUFnQixHQUFHLEVBQUEsQ0FBQTtJQUM1QixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQ3JCLFlBQTJCOztZQUd2QixVQUFVO1FBQ2QsSUFBRyxZQUFZLENBQUMsVUFBVSxFQUFFO1lBQzFCLFVBQVUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFBO1NBQ3JDO2FBQ0k7WUFDSCxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtTQUNqQztRQUVELE1BQU0sTUFBTyxTQUFRLFVBQVU7O1FBQ3RCLGlCQUFVLEdBQVcsWUFBWSxDQUFDLElBQUksQ0FBQTtRQUN0QyxhQUFNLEdBQVEsWUFBWSxDQUFBOzs7WUFEakMsa0JBQTZDOztZQUM3QyxjQUFpQzs7UUFHbkMsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDO0NBQ0Y7OztJQXhDQywyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgY2xhc3NpZnkgfSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlGZWF0dXJlQ29uZmlnLFxuICBpRW50aXR5Q29uc3RydWN0b3IsXG4gIGlFbnRpdHlUeXBlTWFwLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uZmlnLFxuICBFbnRpdHlUeXBlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIEVudGl0eVR5cGVGYWN0b3J5IHtcbiAgYmFzZUVudGl0eVR5cGU6IGlFbnRpdHlDb25zdHJ1Y3RvclxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJhc2VFbnRpdHlUeXBlOiBpRW50aXR5Q29uc3RydWN0b3JcbiAgKSB7XG4gICAgdGhpcy5iYXNlRW50aXR5VHlwZSA9IGJhc2VFbnRpdHlUeXBlXG4gIH1cblxuICBidWlsZChcbiAgICBlbnRpdHlDb25maWc6IGlFbnRpdHlDb25maWcsXG4gICk6IGlFbnRpdHlUeXBlTWFwIHtcblxuICAgIGxldCBlbnRpdHlUeXBlTmFtZSA9IGNsYXNzaWZ5KGVudGl0eUNvbmZpZy5uYW1lKVxuICAgIGxldCBlbnRpdHlUeXBlID0gdGhpcy5idWlsZEVudGl0eVR5cGUoZW50aXR5Q29uZmlnKVxuXG4gICAgbGV0IG1hcCA9IHt9XG4gICAgbGV0IGlkZW50aWZpZXIgPSA8RW50aXR5VHlwZUlkZW50aWZpZXI+ZW50aXR5VHlwZU5hbWVcbiAgICBtYXBbaWRlbnRpZmllcl0gPSBlbnRpdHlUeXBlXG4gICAgcmV0dXJuIDxpRW50aXR5VHlwZU1hcD5tYXBcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdHlUeXBlKFxuICAgIGVudGl0eUNvbmZpZzogaUVudGl0eUNvbmZpZyxcbiAgKSB7XG5cbiAgICB2YXIgZW50aXR5VHlwZVxuICAgIGlmKGVudGl0eUNvbmZpZy5lbnRpdHlUeXBlKSB7XG4gICAgICBlbnRpdHlUeXBlID0gZW50aXR5Q29uZmlnLmVudGl0eVR5cGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbnRpdHlUeXBlID0gdGhpcy5iYXNlRW50aXR5VHlwZVxuICAgIH1cblxuICAgIGNsYXNzIEVudGl0eSBleHRlbmRzIGVudGl0eVR5cGUge1xuICAgICAgc3RhdGljIF9zbGljZU5hbWU6IHN0cmluZyA9IGVudGl0eUNvbmZpZy5uYW1lXG4gICAgICBzdGF0aWMgY29uZmlnOiBhbnkgPSBlbnRpdHlDb25maWdcbiAgICB9XG5cbiAgICByZXR1cm4gRW50aXR5XG4gIH1cbn1cbiJdfQ==