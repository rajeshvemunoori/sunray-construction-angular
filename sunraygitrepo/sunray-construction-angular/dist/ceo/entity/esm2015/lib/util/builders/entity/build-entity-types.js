/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { classify } from '@ceo/core';
/** @type {?} */
let buildEntityTypeClass = (entityConfig, baseEntity) => {
    class Entity extends baseEntity {
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
};
const ɵ0 = buildEntityTypeClass;
/**
 * @param {?} entityConfigs
 * @param {?} baseEntity
 * @return {?}
 */
export function buildEntityTypes(entityConfigs, baseEntity) {
    /** @type {?} */
    let addEntityType = (entityTypes, entityConfig) => {
        /** @type {?} */
        let className = classify(entityConfig.name);
        /** @type {?} */
        let entityTypeClass = buildEntityTypeClass(entityConfig, baseEntity);
        entityTypes[className] = entityTypeClass;
        return entityTypes;
    };
    return _.reduce(entityConfigs, addEntityType, {});
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LXR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvdXRpbC9idWlsZGVycy9lbnRpdHkvYnVpbGQtZW50aXR5LXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDOztJQUVqQyxvQkFBb0IsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsRUFBRTtJQUN0RCxNQUFNLE1BQU8sU0FBUSxVQUFVOztJQUN0QixpQkFBVSxHQUFXLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDdkMsYUFBTSxHQUFRLFlBQVksQ0FBQzs7O1FBRGxDLGtCQUE4Qzs7UUFDOUMsY0FBa0M7O0lBR3BDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLGFBQWEsRUFDYixVQUFVOztRQUdOLGFBQWEsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRTs7WUFDNUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOztZQUN2QyxlQUFlLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztRQUNwRSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsZUFBZSxDQUFBO1FBQ3hDLE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBjbGFzc2lmeSB9IGZyb20gJ0BjZW8vY29yZSc7XG5cbmxldCBidWlsZEVudGl0eVR5cGVDbGFzcyA9IChlbnRpdHlDb25maWcsIGJhc2VFbnRpdHkpID0+IHtcbiAgY2xhc3MgRW50aXR5IGV4dGVuZHMgYmFzZUVudGl0eSB7XG4gICAgc3RhdGljIF9zbGljZU5hbWU6IHN0cmluZyA9IGVudGl0eUNvbmZpZy5uYW1lO1xuICAgIHN0YXRpYyBjb25maWc6IGFueSA9IGVudGl0eUNvbmZpZztcbiAgfVxuXG4gIHJldHVybiBFbnRpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVudGl0eVR5cGVzKFxuICBlbnRpdHlDb25maWdzLFxuICBiYXNlRW50aXR5XG4pIHtcblxuICBsZXQgYWRkRW50aXR5VHlwZSA9IChlbnRpdHlUeXBlcywgZW50aXR5Q29uZmlnKSA9PiB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGNsYXNzaWZ5KGVudGl0eUNvbmZpZy5uYW1lKVxuICAgIGxldCBlbnRpdHlUeXBlQ2xhc3MgPSBidWlsZEVudGl0eVR5cGVDbGFzcyhlbnRpdHlDb25maWcsIGJhc2VFbnRpdHkpXG4gICAgZW50aXR5VHlwZXNbY2xhc3NOYW1lXSA9IGVudGl0eVR5cGVDbGFzc1xuICAgIHJldHVybiBlbnRpdHlUeXBlc1xuICB9XG5cbiAgcmV0dXJuIF8ucmVkdWNlKGVudGl0eUNvbmZpZ3MsIGFkZEVudGl0eVR5cGUsIHt9KTtcbn1cbiJdfQ==