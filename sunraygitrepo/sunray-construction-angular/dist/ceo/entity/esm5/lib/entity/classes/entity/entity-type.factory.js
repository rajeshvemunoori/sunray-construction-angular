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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9lbnRpdHktdHlwZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQVdwQztJQUdFLDJCQUNFLGNBQWtDO1FBRWxDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO0lBQ3RDLENBQUM7Ozs7O0lBRUQsaUNBQUs7Ozs7SUFBTCxVQUNFLFlBQTJCOztZQUd2QixjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQzVDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQzs7WUFFL0MsR0FBRyxHQUFHLEVBQUU7O1lBQ1IsVUFBVSxHQUFHLG1CQUFzQixjQUFjLEVBQUE7UUFDckQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtRQUM1QixPQUFPLG1CQUFnQixHQUFHLEVBQUEsQ0FBQTtJQUM1QixDQUFDOzs7Ozs7SUFFTywyQ0FBZTs7Ozs7SUFBdkIsVUFDRSxZQUEyQjs7WUFHdkIsVUFBVTtRQUNkLElBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRTtZQUMxQixVQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQTtTQUNyQzthQUNJO1lBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUE7U0FDakM7UUFFRDtZQUFxQixrQ0FBVTtZQUEvQjs7WUFHQSxDQUFDO1lBRlEsaUJBQVUsR0FBVyxZQUFZLENBQUMsSUFBSSxDQUFBO1lBQ3RDLGFBQU0sR0FBUSxZQUFZLENBQUE7WUFDbkMsYUFBQztTQUFBLEFBSEQsQ0FBcUIsVUFBVSxHQUc5Qjs7O1lBRkMsa0JBQTZDOztZQUM3QyxjQUFpQzs7UUFHbkMsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDOzs7O0lBeENDLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBjbGFzc2lmeSB9IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaUZlYXR1cmVDb25maWcsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaUVudGl0eVR5cGVNYXAsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25maWcsXG4gIEVudGl0eVR5cGVJZGVudGlmaWVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgRW50aXR5VHlwZUZhY3Rvcnkge1xuICBiYXNlRW50aXR5VHlwZTogaUVudGl0eUNvbnN0cnVjdG9yXG5cbiAgY29uc3RydWN0b3IoXG4gICAgYmFzZUVudGl0eVR5cGU6IGlFbnRpdHlDb25zdHJ1Y3RvclxuICApIHtcbiAgICB0aGlzLmJhc2VFbnRpdHlUeXBlID0gYmFzZUVudGl0eVR5cGVcbiAgfVxuXG4gIGJ1aWxkKFxuICAgIGVudGl0eUNvbmZpZzogaUVudGl0eUNvbmZpZyxcbiAgKTogaUVudGl0eVR5cGVNYXAge1xuXG4gICAgbGV0IGVudGl0eVR5cGVOYW1lID0gY2xhc3NpZnkoZW50aXR5Q29uZmlnLm5hbWUpXG4gICAgbGV0IGVudGl0eVR5cGUgPSB0aGlzLmJ1aWxkRW50aXR5VHlwZShlbnRpdHlDb25maWcpXG5cbiAgICBsZXQgbWFwID0ge31cbiAgICBsZXQgaWRlbnRpZmllciA9IDxFbnRpdHlUeXBlSWRlbnRpZmllcj5lbnRpdHlUeXBlTmFtZVxuICAgIG1hcFtpZGVudGlmaWVyXSA9IGVudGl0eVR5cGVcbiAgICByZXR1cm4gPGlFbnRpdHlUeXBlTWFwPm1hcFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eVR5cGUoXG4gICAgZW50aXR5Q29uZmlnOiBpRW50aXR5Q29uZmlnLFxuICApIHtcblxuICAgIHZhciBlbnRpdHlUeXBlXG4gICAgaWYoZW50aXR5Q29uZmlnLmVudGl0eVR5cGUpIHtcbiAgICAgIGVudGl0eVR5cGUgPSBlbnRpdHlDb25maWcuZW50aXR5VHlwZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVudGl0eVR5cGUgPSB0aGlzLmJhc2VFbnRpdHlUeXBlXG4gICAgfVxuXG4gICAgY2xhc3MgRW50aXR5IGV4dGVuZHMgZW50aXR5VHlwZSB7XG4gICAgICBzdGF0aWMgX3NsaWNlTmFtZTogc3RyaW5nID0gZW50aXR5Q29uZmlnLm5hbWVcbiAgICAgIHN0YXRpYyBjb25maWc6IGFueSA9IGVudGl0eUNvbmZpZ1xuICAgIH1cblxuICAgIHJldHVybiBFbnRpdHlcbiAgfVxufVxuIl19