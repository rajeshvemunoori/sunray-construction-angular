/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { WordpressEntityConfig } from '../base-entity-config';
var PageEntityConfig = /** @class */ (function (_super) {
    tslib_1.__extends(PageEntityConfig, _super);
    function PageEntityConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    PageEntityConfig.prototype.ofType = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        if (entityData.type) {
            return entityData.type == 'page';
        }
        /** @type {?} */
        var attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/pages");
    };
    /**
     * @param {?=} entityData
     * @return {?}
     */
    PageEntityConfig.prototype.urlFromAttributes = /**
     * @param {?=} entityData
     * @return {?}
     */
    function (entityData) {
        if (entityData === void 0) { entityData = {}; }
        return _.get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
    };
    return PageEntityConfig;
}(WordpressEntityConfig));
export { PageEntityConfig };
/** @type {?} */
export var entityConfigType = {
    type: "pages",
    url: 'wp/v2/pages',
    primaryKeys: ["id", "slug"],
    entityConfig: PageEntityConfig,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9wYWdlLWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQU0zQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUU3RDtJQUFzQyw0Q0FBcUI7SUFBM0Q7O0lBYUEsQ0FBQzs7Ozs7SUFaQyxpQ0FBTTs7OztJQUFOLFVBQU8sVUFBbUI7UUFDeEIsSUFBRyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sVUFBVSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUE7U0FDakM7O1lBRUcsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7UUFDdEQsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7Ozs7O0lBRUQsNENBQWlCOzs7O0lBQWpCLFVBQWtCLFVBQW9CO1FBQXBCLDJCQUFBLEVBQUEsZUFBb0I7UUFDcEMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFiRCxDQUFzQyxxQkFBcUIsR0FhMUQ7OztBQUVELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRztJQUM5QixJQUFJLEVBQUUsT0FBTztJQUNiLEdBQUcsRUFBRSxhQUFhO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7SUFDM0IsWUFBWSxFQUFFLGdCQUFnQjtDQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICdAY2VvL2VudGl0eSdcblxuaW1wb3J0IHsgV29yZHByZXNzRW50aXR5Q29uZmlnIH0gZnJvbSAnLi4vYmFzZS1lbnRpdHktY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgUGFnZUVudGl0eUNvbmZpZyBleHRlbmRzIFdvcmRwcmVzc0VudGl0eUNvbmZpZyB7XG4gIG9mVHlwZShlbnRpdHlEYXRhOiBpRW50aXR5KTogYm9vbGVhbiB7XG4gICAgaWYoZW50aXR5RGF0YS50eXBlKSB7XG4gICAgICByZXR1cm4gZW50aXR5RGF0YS50eXBlID09ICdwYWdlJ1xuICAgIH1cblxuICAgIGxldCBhdHRyaWJ1dGVzVXJsID0gdGhpcy51cmxGcm9tQXR0cmlidXRlcyhlbnRpdHlEYXRhKVxuICAgIHJldHVybiBhdHRyaWJ1dGVzVXJsLmluY2x1ZGVzKFwidjIvcGFnZXNcIilcbiAgfVxuXG4gIHVybEZyb21BdHRyaWJ1dGVzKGVudGl0eURhdGE6IGFueSA9IHt9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gXy5nZXQoZW50aXR5RGF0YSwgWydhdHRyaWJ1dGVzJywgJ21ldGEnLCAnbGlua3MnLCAnc2VsZiddLCAnICcpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVudGl0eUNvbmZpZ1R5cGUgPSB7XG4gIHR5cGU6IFwicGFnZXNcIixcbiAgdXJsOiAnd3AvdjIvcGFnZXMnLFxuICBwcmltYXJ5S2V5czogW1wiaWRcIiwgXCJzbHVnXCJdLFxuICBlbnRpdHlDb25maWc6IFBhZ2VFbnRpdHlDb25maWcsXG59XG4iXX0=