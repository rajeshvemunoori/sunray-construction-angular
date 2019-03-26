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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LXR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3V0aWwvYnVpbGRlcnMvZW50aXR5L2J1aWxkLWVudGl0eS10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFFakMsb0JBQW9CLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLEVBQUU7SUFDdEQsTUFBTSxNQUFPLFNBQVEsVUFBVTs7SUFDdEIsaUJBQVUsR0FBVyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLGFBQU0sR0FBUSxZQUFZLENBQUM7OztRQURsQyxrQkFBOEM7O1FBQzlDLGNBQWtDOztJQUdwQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixhQUFhLEVBQ2IsVUFBVTs7UUFHTixhQUFhLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUU7O1lBQzVDLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzs7WUFDdkMsZUFBZSxHQUFHLG9CQUFvQixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7UUFDcEUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGVBQWUsQ0FBQTtRQUN4QyxPQUFPLFdBQVcsQ0FBQTtJQUNwQixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgY2xhc3NpZnkgfSBmcm9tICdAY2VvL2NvcmUnO1xuXG5sZXQgYnVpbGRFbnRpdHlUeXBlQ2xhc3MgPSAoZW50aXR5Q29uZmlnLCBiYXNlRW50aXR5KSA9PiB7XG4gIGNsYXNzIEVudGl0eSBleHRlbmRzIGJhc2VFbnRpdHkge1xuICAgIHN0YXRpYyBfc2xpY2VOYW1lOiBzdHJpbmcgPSBlbnRpdHlDb25maWcubmFtZTtcbiAgICBzdGF0aWMgY29uZmlnOiBhbnkgPSBlbnRpdHlDb25maWc7XG4gIH1cblxuICByZXR1cm4gRW50aXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbnRpdHlUeXBlcyhcbiAgZW50aXR5Q29uZmlncyxcbiAgYmFzZUVudGl0eVxuKSB7XG5cbiAgbGV0IGFkZEVudGl0eVR5cGUgPSAoZW50aXR5VHlwZXMsIGVudGl0eUNvbmZpZykgPT4ge1xuICAgIGxldCBjbGFzc05hbWUgPSBjbGFzc2lmeShlbnRpdHlDb25maWcubmFtZSlcbiAgICBsZXQgZW50aXR5VHlwZUNsYXNzID0gYnVpbGRFbnRpdHlUeXBlQ2xhc3MoZW50aXR5Q29uZmlnLCBiYXNlRW50aXR5KVxuICAgIGVudGl0eVR5cGVzW2NsYXNzTmFtZV0gPSBlbnRpdHlUeXBlQ2xhc3NcbiAgICByZXR1cm4gZW50aXR5VHlwZXNcbiAgfVxuXG4gIHJldHVybiBfLnJlZHVjZShlbnRpdHlDb25maWdzLCBhZGRFbnRpdHlUeXBlLCB7fSk7XG59XG4iXX0=