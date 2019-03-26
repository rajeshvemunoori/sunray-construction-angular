/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { classify } from '@ceo/core';
var EntityTypeFactory = /** @class */ (function () {
    function EntityTypeFactory(baseEntityType) {
        this.baseEntityType = baseEntityType;
    }
    /**
     * @param {?} entityConfig
     * @return {?}
     */
    EntityTypeFactory.prototype.build = /**
     * @param {?} entityConfig
     * @return {?}
     */
    function (entityConfig) {
        /** @type {?} */
        var entityTypeName = classify(entityConfig.name);
        /** @type {?} */
        var entityType = this.buildEntityType(entityConfig);
        /** @type {?} */
        var map = {};
        /** @type {?} */
        var identifier = (/** @type {?} */ (entityTypeName));
        map[identifier] = entityType;
        return (/** @type {?} */ (map));
    };
    /**
     * @private
     * @param {?} entityConfig
     * @return {?}
     */
    EntityTypeFactory.prototype.buildEntityType = /**
     * @private
     * @param {?} entityConfig
     * @return {?}
     */
    function (entityConfig) {
        /** @type {?} */
        var entityType;
        if (entityConfig.entityType) {
            entityType = entityConfig.entityType;
        }
        else {
            entityType = this.baseEntityType;
        }
        var Entity = /** @class */ (function (_super) {
            tslib_1.__extends(Entity, _super);
            function Entity() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Entity._sliceName = entityConfig.name;
            Entity.config = entityConfig;
            return Entity;
        }(entityType));
        if (false) {
            /** @type {?} */
            Entity._sliceName;
            /** @type {?} */
            Entity.config;
        }
        return Entity;
    };
    return EntityTypeFactory;
}());
export { EntityTypeFactory };
if (false) {
    /** @type {?} */
    EntityTypeFactory.prototype.baseEntityType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L2VudGl0eS10eXBlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBV3BDO0lBR0UsMkJBQ0UsY0FBa0M7UUFFbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUE7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxpQ0FBSzs7OztJQUFMLFVBQ0UsWUFBMkI7O1lBR3ZCLGNBQWMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzs7WUFDNUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDOztZQUUvQyxHQUFHLEdBQUcsRUFBRTs7WUFDUixVQUFVLEdBQUcsbUJBQXNCLGNBQWMsRUFBQTtRQUNyRCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFBO1FBQzVCLE9BQU8sbUJBQWdCLEdBQUcsRUFBQSxDQUFBO0lBQzVCLENBQUM7Ozs7OztJQUVPLDJDQUFlOzs7OztJQUF2QixVQUNFLFlBQTJCOztZQUd2QixVQUFVO1FBQ2QsSUFBRyxZQUFZLENBQUMsVUFBVSxFQUFFO1lBQzFCLFVBQVUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFBO1NBQ3JDO2FBQ0k7WUFDSCxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtTQUNqQztRQUVEO1lBQXFCLGtDQUFVO1lBQS9COztZQUdBLENBQUM7WUFGUSxpQkFBVSxHQUFXLFlBQVksQ0FBQyxJQUFJLENBQUE7WUFDdEMsYUFBTSxHQUFRLFlBQVksQ0FBQTtZQUNuQyxhQUFDO1NBQUEsQUFIRCxDQUFxQixVQUFVLEdBRzlCOzs7WUFGQyxrQkFBNkM7O1lBQzdDLGNBQWlDOztRQUduQyxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7Ozs7SUF4Q0MsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGNsYXNzaWZ5IH0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRmVhdHVyZUNvbmZpZyxcbiAgaUVudGl0eUNvbnN0cnVjdG9yLFxuICBpRW50aXR5VHlwZU1hcCxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbmZpZyxcbiAgRW50aXR5VHlwZUlkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlRmFjdG9yeSB7XG4gIGJhc2VFbnRpdHlUeXBlOiBpRW50aXR5Q29uc3RydWN0b3JcblxuICBjb25zdHJ1Y3RvcihcbiAgICBiYXNlRW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yXG4gICkge1xuICAgIHRoaXMuYmFzZUVudGl0eVR5cGUgPSBiYXNlRW50aXR5VHlwZVxuICB9XG5cbiAgYnVpbGQoXG4gICAgZW50aXR5Q29uZmlnOiBpRW50aXR5Q29uZmlnLFxuICApOiBpRW50aXR5VHlwZU1hcCB7XG5cbiAgICBsZXQgZW50aXR5VHlwZU5hbWUgPSBjbGFzc2lmeShlbnRpdHlDb25maWcubmFtZSlcbiAgICBsZXQgZW50aXR5VHlwZSA9IHRoaXMuYnVpbGRFbnRpdHlUeXBlKGVudGl0eUNvbmZpZylcblxuICAgIGxldCBtYXAgPSB7fVxuICAgIGxldCBpZGVudGlmaWVyID0gPEVudGl0eVR5cGVJZGVudGlmaWVyPmVudGl0eVR5cGVOYW1lXG4gICAgbWFwW2lkZW50aWZpZXJdID0gZW50aXR5VHlwZVxuICAgIHJldHVybiA8aUVudGl0eVR5cGVNYXA+bWFwXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5VHlwZShcbiAgICBlbnRpdHlDb25maWc6IGlFbnRpdHlDb25maWcsXG4gICkge1xuXG4gICAgdmFyIGVudGl0eVR5cGVcbiAgICBpZihlbnRpdHlDb25maWcuZW50aXR5VHlwZSkge1xuICAgICAgZW50aXR5VHlwZSA9IGVudGl0eUNvbmZpZy5lbnRpdHlUeXBlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW50aXR5VHlwZSA9IHRoaXMuYmFzZUVudGl0eVR5cGVcbiAgICB9XG5cbiAgICBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBlbnRpdHlUeXBlIHtcbiAgICAgIHN0YXRpYyBfc2xpY2VOYW1lOiBzdHJpbmcgPSBlbnRpdHlDb25maWcubmFtZVxuICAgICAgc3RhdGljIGNvbmZpZzogYW55ID0gZW50aXR5Q29uZmlnXG4gICAgfVxuXG4gICAgcmV0dXJuIEVudGl0eVxuICB9XG59XG4iXX0=