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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9lbnRpdHktdHlwZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBV3BDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFHNUIsWUFDRSxjQUFrQztRQUVsQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQTtJQUN0QyxDQUFDOzs7OztJQUVELEtBQUssQ0FDSCxZQUEyQjs7WUFHdkIsY0FBYyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOztZQUM1QyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7O1lBRS9DLEdBQUcsR0FBRyxFQUFFOztZQUNSLFVBQVUsR0FBRyxtQkFBc0IsY0FBYyxFQUFBO1FBQ3JELEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUE7UUFDNUIsT0FBTyxtQkFBZ0IsR0FBRyxFQUFBLENBQUE7SUFDNUIsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUNyQixZQUEyQjs7WUFHdkIsVUFBVTtRQUNkLElBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRTtZQUMxQixVQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQTtTQUNyQzthQUNJO1lBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUE7U0FDakM7UUFFRCxNQUFNLE1BQU8sU0FBUSxVQUFVOztRQUN0QixpQkFBVSxHQUFXLFlBQVksQ0FBQyxJQUFJLENBQUE7UUFDdEMsYUFBTSxHQUFRLFlBQVksQ0FBQTs7O1lBRGpDLGtCQUE2Qzs7WUFDN0MsY0FBaUM7O1FBR25DLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztDQUNGOzs7SUF4Q0MsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGNsYXNzaWZ5IH0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRmVhdHVyZUNvbmZpZyxcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxuICBpRW50aXR5VHlwZU1hcCxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbmZpZyxcbiAgRW50aXR5VHlwZUlkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlRmFjdG9yeSB7XG4gIGJhc2VFbnRpdHlUeXBlOiBpRW50aXR5Q29uc3RydWN0b3JcblxuICBjb25zdHJ1Y3RvcihcbiAgICBiYXNlRW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yXG4gICkge1xuICAgIHRoaXMuYmFzZUVudGl0eVR5cGUgPSBiYXNlRW50aXR5VHlwZVxuICB9XG5cbiAgYnVpbGQoXG4gICAgZW50aXR5Q29uZmlnOiBpRW50aXR5Q29uZmlnLFxuICApOiBpRW50aXR5VHlwZU1hcCB7XG5cbiAgICBsZXQgZW50aXR5VHlwZU5hbWUgPSBjbGFzc2lmeShlbnRpdHlDb25maWcubmFtZSlcbiAgICBsZXQgZW50aXR5VHlwZSA9IHRoaXMuYnVpbGRFbnRpdHlUeXBlKGVudGl0eUNvbmZpZylcblxuICAgIGxldCBtYXAgPSB7fVxuICAgIGxldCBpZGVudGlmaWVyID0gPEVudGl0eVR5cGVJZGVudGlmaWVyPmVudGl0eVR5cGVOYW1lXG4gICAgbWFwW2lkZW50aWZpZXJdID0gZW50aXR5VHlwZVxuICAgIHJldHVybiA8aUVudGl0eVR5cGVNYXA+bWFwXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5VHlwZShcbiAgICBlbnRpdHlDb25maWc6IGlFbnRpdHlDb25maWcsXG4gICkge1xuXG4gICAgdmFyIGVudGl0eVR5cGVcbiAgICBpZihlbnRpdHlDb25maWcuZW50aXR5VHlwZSkge1xuICAgICAgZW50aXR5VHlwZSA9IGVudGl0eUNvbmZpZy5lbnRpdHlUeXBlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW50aXR5VHlwZSA9IHRoaXMuYmFzZUVudGl0eVR5cGVcbiAgICB9XG5cbiAgICBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBlbnRpdHlUeXBlIHtcbiAgICAgIHN0YXRpYyBfc2xpY2VOYW1lOiBzdHJpbmcgPSBlbnRpdHlDb25maWcubmFtZVxuICAgICAgc3RhdGljIGNvbmZpZzogYW55ID0gZW50aXR5Q29uZmlnXG4gICAgfVxuXG4gICAgcmV0dXJuIEVudGl0eVxuICB9XG59XG4iXX0=