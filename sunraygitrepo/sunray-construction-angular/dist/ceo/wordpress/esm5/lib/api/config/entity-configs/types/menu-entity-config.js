/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { WordpressEntityConfig } from '../base-entity-config';
var MenuEntityConfig = /** @class */ (function (_super) {
    tslib_1.__extends(MenuEntityConfig, _super);
    function MenuEntityConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    MenuEntityConfig.prototype.ofType = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        if (entityData.type) {
            return this.type == entityData.type;
        }
        /** @type {?} */
        var attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/menus");
    };
    /**
     * @param {?=} entityData
     * @return {?}
     */
    MenuEntityConfig.prototype.urlFromAttributes = /**
     * @param {?=} entityData
     * @return {?}
     */
    function (entityData) {
        if (entityData === void 0) { entityData = {}; }
        return _.get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
    };
    return MenuEntityConfig;
}(WordpressEntityConfig));
export { MenuEntityConfig };
/** @type {?} */
export var entityConfigType = {
    type: "menus",
    isSeed: true,
    seed: [{}],
    url: 'wp-api-menus/v2/menus',
    entityConfig: MenuEntityConfig
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9tZW51LWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQU0zQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUU3RDtJQUFzQyw0Q0FBcUI7SUFBM0Q7O0lBYUEsQ0FBQzs7Ozs7SUFaQyxpQ0FBTTs7OztJQUFOLFVBQU8sVUFBbUI7UUFDeEIsSUFBRyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFBO1NBQ3BDOztZQUVHLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBQ3RELE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMzQyxDQUFDOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixVQUFvQjtRQUFwQiwyQkFBQSxFQUFBLGVBQW9CO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBc0MscUJBQXFCLEdBYTFEOzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUc7SUFDOUIsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNWLEdBQUcsRUFBRSx1QkFBdUI7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtDQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICdAY2VvL2VudGl0eSdcblxuaW1wb3J0IHsgV29yZHByZXNzRW50aXR5Q29uZmlnIH0gZnJvbSAnLi4vYmFzZS1lbnRpdHktY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgTWVudUVudGl0eUNvbmZpZyBleHRlbmRzIFdvcmRwcmVzc0VudGl0eUNvbmZpZyB7XG4gIG9mVHlwZShlbnRpdHlEYXRhOiBpRW50aXR5KTogYm9vbGVhbiB7XG4gICAgaWYoZW50aXR5RGF0YS50eXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlID09IGVudGl0eURhdGEudHlwZVxuICAgIH1cblxuICAgIGxldCBhdHRyaWJ1dGVzVXJsID0gdGhpcy51cmxGcm9tQXR0cmlidXRlcyhlbnRpdHlEYXRhKVxuICAgIHJldHVybiBhdHRyaWJ1dGVzVXJsLmluY2x1ZGVzKFwidjIvbWVudXNcIilcbiAgfVxuXG4gIHVybEZyb21BdHRyaWJ1dGVzKGVudGl0eURhdGE6IGFueSA9IHt9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gXy5nZXQoZW50aXR5RGF0YSwgWydhdHRyaWJ1dGVzJywgJ21ldGEnLCAnbGlua3MnLCAnc2VsZiddLCAnICcpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVudGl0eUNvbmZpZ1R5cGUgPSB7XG4gIHR5cGU6IFwibWVudXNcIixcbiAgaXNTZWVkOiB0cnVlLFxuICBzZWVkOiBbe31dLFxuICB1cmw6ICd3cC1hcGktbWVudXMvdjIvbWVudXMnLFxuICBlbnRpdHlDb25maWc6IE1lbnVFbnRpdHlDb25maWdcbn1cbiJdfQ==