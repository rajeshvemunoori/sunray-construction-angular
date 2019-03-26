/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { WordpressEntityConfig } from '../base-entity-config';
export class PageEntityConfig extends WordpressEntityConfig {
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        if (entityData.type) {
            return entityData.type == 'page';
        }
        /** @type {?} */
        let attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/pages");
    }
    /**
     * @param {?=} entityData
     * @return {?}
     */
    urlFromAttributes(entityData = {}) {
        return _.get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
    }
}
/** @type {?} */
export const entityConfigType = {
    type: "pages",
    url: 'wp/v2/pages',
    primaryKeys: ["id", "slug"],
    entityConfig: PageEntityConfig,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9wYWdlLWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRTdELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxxQkFBcUI7Ozs7O0lBQ3pELE1BQU0sQ0FBQyxVQUFtQjtRQUN4QixJQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxVQUFVLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQTtTQUNqQzs7WUFFRyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQUN0RCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxhQUFrQixFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQixHQUFHO0lBQzlCLElBQUksRUFBRSxPQUFPO0lBQ2IsR0FBRyxFQUFFLGFBQWE7SUFDbEIsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUMzQixZQUFZLEVBQUUsZ0JBQWdCO0NBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG59IGZyb20gJ0BjZW8vZW50aXR5J1xuXG5pbXBvcnQgeyBXb3JkcHJlc3NFbnRpdHlDb25maWcgfSBmcm9tICcuLi9iYXNlLWVudGl0eS1jb25maWcnXG5cbmV4cG9ydCBjbGFzcyBQYWdlRW50aXR5Q29uZmlnIGV4dGVuZHMgV29yZHByZXNzRW50aXR5Q29uZmlnIHtcbiAgb2ZUeXBlKGVudGl0eURhdGE6IGlFbnRpdHkpOiBib29sZWFuIHtcbiAgICBpZihlbnRpdHlEYXRhLnR5cGUpIHtcbiAgICAgIHJldHVybiBlbnRpdHlEYXRhLnR5cGUgPT0gJ3BhZ2UnXG4gICAgfVxuXG4gICAgbGV0IGF0dHJpYnV0ZXNVcmwgPSB0aGlzLnVybEZyb21BdHRyaWJ1dGVzKGVudGl0eURhdGEpXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNVcmwuaW5jbHVkZXMoXCJ2Mi9wYWdlc1wiKVxuICB9XG5cbiAgdXJsRnJvbUF0dHJpYnV0ZXMoZW50aXR5RGF0YTogYW55ID0ge30pOiBzdHJpbmcge1xuICAgIHJldHVybiBfLmdldChlbnRpdHlEYXRhLCBbJ2F0dHJpYnV0ZXMnLCAnbWV0YScsICdsaW5rcycsICdzZWxmJ10sICcgJylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW50aXR5Q29uZmlnVHlwZSA9IHtcbiAgdHlwZTogXCJwYWdlc1wiLFxuICB1cmw6ICd3cC92Mi9wYWdlcycsXG4gIHByaW1hcnlLZXlzOiBbXCJpZFwiLCBcInNsdWdcIl0sXG4gIGVudGl0eUNvbmZpZzogUGFnZUVudGl0eUNvbmZpZyxcbn1cbiJdfQ==