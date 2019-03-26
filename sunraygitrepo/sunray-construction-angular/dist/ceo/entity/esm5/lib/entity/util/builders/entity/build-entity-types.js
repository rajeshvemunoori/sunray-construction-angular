/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { classify } from '@ceo/core';
/** @type {?} */
var buildEntityTypeClass = function (entityConfig, baseEntity) {
    var Entity = /** @class */ (function (_super) {
        tslib_1.__extends(Entity, _super);
        function Entity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Entity._sliceName = entityConfig.name;
        Entity.config = entityConfig;
        return Entity;
    }(baseEntity));
    if (false) {
        /** @type {?} */
        Entity._sliceName;
        /** @type {?} */
        Entity.config;
    }
    return Entity;
};
var ɵ0 = buildEntityTypeClass;
/**
 * @param {?} entityConfigs
 * @param {?} baseEntity
 * @return {?}
 */
export function buildEntityTypes(entityConfigs, baseEntity) {
    /** @type {?} */
    var addEntityType = function (entityTypes, entityConfig) {
        /** @type {?} */
        var className = classify(entityConfig.name);
        /** @type {?} */
        var entityTypeClass = buildEntityTypeClass(entityConfig, baseEntity);
        entityTypes[className] = entityTypeClass;
        return entityTypes;
    };
    return _.reduce(entityConfigs, addEntityType, {});
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LXR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3V0aWwvYnVpbGRlcnMvZW50aXR5L2J1aWxkLWVudGl0eS10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7O0lBRWpDLG9CQUFvQixHQUFHLFVBQUMsWUFBWSxFQUFFLFVBQVU7SUFDbEQ7UUFBcUIsa0NBQVU7UUFBL0I7O1FBR0EsQ0FBQztRQUZRLGlCQUFVLEdBQVcsWUFBWSxDQUFDLElBQUksQ0FBQztRQUN2QyxhQUFNLEdBQVEsWUFBWSxDQUFDO1FBQ3BDLGFBQUM7S0FBQSxBQUhELENBQXFCLFVBQVUsR0FHOUI7OztRQUZDLGtCQUE4Qzs7UUFDOUMsY0FBa0M7O0lBR3BDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLGFBQWEsRUFDYixVQUFVOztRQUdOLGFBQWEsR0FBRyxVQUFDLFdBQVcsRUFBRSxZQUFZOztZQUN4QyxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQ3ZDLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO1FBQ3BFLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxlQUFlLENBQUE7UUFDeEMsT0FBTyxXQUFXLENBQUE7SUFDcEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGNsYXNzaWZ5IH0gZnJvbSAnQGNlby9jb3JlJztcblxubGV0IGJ1aWxkRW50aXR5VHlwZUNsYXNzID0gKGVudGl0eUNvbmZpZywgYmFzZUVudGl0eSkgPT4ge1xuICBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBiYXNlRW50aXR5IHtcbiAgICBzdGF0aWMgX3NsaWNlTmFtZTogc3RyaW5nID0gZW50aXR5Q29uZmlnLm5hbWU7XG4gICAgc3RhdGljIGNvbmZpZzogYW55ID0gZW50aXR5Q29uZmlnO1xuICB9XG5cbiAgcmV0dXJuIEVudGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRW50aXR5VHlwZXMoXG4gIGVudGl0eUNvbmZpZ3MsXG4gIGJhc2VFbnRpdHlcbikge1xuXG4gIGxldCBhZGRFbnRpdHlUeXBlID0gKGVudGl0eVR5cGVzLCBlbnRpdHlDb25maWcpID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gY2xhc3NpZnkoZW50aXR5Q29uZmlnLm5hbWUpXG4gICAgbGV0IGVudGl0eVR5cGVDbGFzcyA9IGJ1aWxkRW50aXR5VHlwZUNsYXNzKGVudGl0eUNvbmZpZywgYmFzZUVudGl0eSlcbiAgICBlbnRpdHlUeXBlc1tjbGFzc05hbWVdID0gZW50aXR5VHlwZUNsYXNzXG4gICAgcmV0dXJuIGVudGl0eVR5cGVzXG4gIH1cblxuICByZXR1cm4gXy5yZWR1Y2UoZW50aXR5Q29uZmlncywgYWRkRW50aXR5VHlwZSwge30pO1xufVxuIl19