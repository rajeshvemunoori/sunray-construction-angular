/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { startsWith } from '@ceo/core';
import { EntityConfig, } from '@ceo/entity';
import { featureUrl } from '../url';
var WordpressEntityConfig = /** @class */ (function (_super) {
    tslib_1.__extends(WordpressEntityConfig, _super);
    function WordpressEntityConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    WordpressEntityConfig.prototype.ofType = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        if (entityData.type) {
            return this.type == entityData.type;
        }
        /** @type {?} */
        var baseUrl = _.join([featureUrl, this.url], '/');
        /** @type {?} */
        var attributesUrl = this.urlFromAttributes(entityData);
        return startsWith(attributesUrl, baseUrl);
    };
    /**
     * @param {?=} entityData
     * @return {?}
     */
    WordpressEntityConfig.prototype.urlFromAttributes = /**
     * @param {?=} entityData
     * @return {?}
     */
    function (entityData) {
        if (entityData === void 0) { entityData = {}; }
        return _.get(entityData, ['attributes', '_links', 'self', '0', 'href'], ' ');
    };
    return WordpressEntityConfig;
}(EntityConfig));
export { WordpressEntityConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy9iYXNlLWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRXRDLE9BQU8sRUFDTCxZQUFZLEdBRWIsTUFBTSxhQUFhLENBQUE7QUFFcEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUVuQztJQUEyQyxpREFBWTtJQUF2RDs7SUFjQSxDQUFDOzs7OztJQWJDLHNDQUFNOzs7O0lBQU4sVUFBTyxVQUFtQjtRQUN4QixJQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUE7U0FDcEM7O1lBRUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7WUFDN0MsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7UUFDdEQsT0FBTyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQzNDLENBQUM7Ozs7O0lBRUQsaURBQWlCOzs7O0lBQWpCLFVBQWtCLFVBQW9CO1FBQXBCLDJCQUFBLEVBQUEsZUFBb0I7UUFDcEMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBMkMsWUFBWSxHQWN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlDb25maWcsXG4gIGlFbnRpdHksXG59IGZyb20gJ0BjZW8vZW50aXR5J1xuXG5pbXBvcnQgeyBmZWF0dXJlVXJsIH0gZnJvbSAnLi4vdXJsJ1xuXG5leHBvcnQgY2xhc3MgV29yZHByZXNzRW50aXR5Q29uZmlnIGV4dGVuZHMgRW50aXR5Q29uZmlnIHtcbiAgb2ZUeXBlKGVudGl0eURhdGE6IGlFbnRpdHkpOiBib29sZWFuIHtcbiAgICBpZihlbnRpdHlEYXRhLnR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gZW50aXR5RGF0YS50eXBlXG4gICAgfVxuXG4gICAgbGV0IGJhc2VVcmwgPSBfLmpvaW4oW2ZlYXR1cmVVcmwsIHRoaXMudXJsXSwgJy8nKVxuICAgIGxldCBhdHRyaWJ1dGVzVXJsID0gdGhpcy51cmxGcm9tQXR0cmlidXRlcyhlbnRpdHlEYXRhKVxuICAgIHJldHVybiBzdGFydHNXaXRoKGF0dHJpYnV0ZXNVcmwsIGJhc2VVcmwpXG4gIH1cblxuICB1cmxGcm9tQXR0cmlidXRlcyhlbnRpdHlEYXRhOiBhbnkgPSB7fSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIF8uZ2V0KGVudGl0eURhdGEsIFsnYXR0cmlidXRlcycsICdfbGlua3MnLCAnc2VsZicsICcwJywgJ2hyZWYnXSwgJyAnKVxuICB9XG59XG4iXX0=