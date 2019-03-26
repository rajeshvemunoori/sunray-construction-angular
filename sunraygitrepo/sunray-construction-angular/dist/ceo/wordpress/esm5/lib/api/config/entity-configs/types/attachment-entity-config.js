/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AttachmentEntity, } from '../../../classes/entities/index';
import { WordpressEntityConfig } from '../base-entity-config';
var AttachmentEntityConfig = /** @class */ (function (_super) {
    tslib_1.__extends(AttachmentEntityConfig, _super);
    function AttachmentEntityConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    AttachmentEntityConfig.prototype.ofType = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        if (entityData.type) {
            return entityData.type == 'attachment';
        }
        /** @type {?} */
        var attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/media");
    };
    return AttachmentEntityConfig;
}(WordpressEntityConfig));
export { AttachmentEntityConfig };
/** @type {?} */
export var entityConfigType = {
    type: "attachments",
    url: 'wp/v2/media',
    entityConfig: AttachmentEntityConfig,
    entityType: AttachmentEntity,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudC1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9hdHRhY2htZW50LWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0saUNBQWlDLENBQUE7QUFFeEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFFN0Q7SUFBNEMsa0RBQXFCO0lBQWpFOztJQVNBLENBQUM7Ozs7O0lBUkMsdUNBQU07Ozs7SUFBTixVQUFPLFVBQW1CO1FBQ3hCLElBQUcsVUFBVSxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLFVBQVUsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFBO1NBQ3ZDOztZQUVHLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBQ3RELE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBNEMscUJBQXFCLEdBU2hFOzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUc7SUFDOUIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxVQUFVLEVBQUUsZ0JBQWdCO0NBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG59IGZyb20gJ0BjZW8vZW50aXR5J1xuXG5pbXBvcnQge1xuICBBdHRhY2htZW50RW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2VudGl0aWVzL2luZGV4J1xuXG5pbXBvcnQgeyBXb3JkcHJlc3NFbnRpdHlDb25maWcgfSBmcm9tICcuLi9iYXNlLWVudGl0eS1jb25maWcnXG5cbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50RW50aXR5Q29uZmlnIGV4dGVuZHMgV29yZHByZXNzRW50aXR5Q29uZmlnIHtcbiAgb2ZUeXBlKGVudGl0eURhdGE6IGlFbnRpdHkpOiBib29sZWFuIHtcbiAgICBpZihlbnRpdHlEYXRhLnR5cGUpIHtcbiAgICAgIHJldHVybiBlbnRpdHlEYXRhLnR5cGUgPT0gJ2F0dGFjaG1lbnQnXG4gICAgfVxuXG4gICAgbGV0IGF0dHJpYnV0ZXNVcmwgPSB0aGlzLnVybEZyb21BdHRyaWJ1dGVzKGVudGl0eURhdGEpXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNVcmwuaW5jbHVkZXMoXCJ2Mi9tZWRpYVwiKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnRpdHlDb25maWdUeXBlID0ge1xuICB0eXBlOiBcImF0dGFjaG1lbnRzXCIsXG4gIHVybDogJ3dwL3YyL21lZGlhJyxcbiAgZW50aXR5Q29uZmlnOiBBdHRhY2htZW50RW50aXR5Q29uZmlnLFxuICBlbnRpdHlUeXBlOiBBdHRhY2htZW50RW50aXR5LFxufVxuXG4iXX0=