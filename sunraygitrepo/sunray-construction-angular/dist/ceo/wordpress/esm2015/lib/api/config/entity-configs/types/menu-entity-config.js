/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { WordpressEntityConfig } from '../base-entity-config';
export class MenuEntityConfig extends WordpressEntityConfig {
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        if (entityData.type) {
            return this.type == entityData.type;
        }
        /** @type {?} */
        let attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/menus");
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
    type: "menus",
    isSeed: true,
    seed: [{}],
    url: 'wp-api-menus/v2/menus',
    entityConfig: MenuEntityConfig
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9tZW51LWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRTdELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxxQkFBcUI7Ozs7O0lBQ3pELE1BQU0sQ0FBQyxVQUFtQjtRQUN4QixJQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUE7U0FDcEM7O1lBRUcsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7UUFDdEQsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsYUFBa0IsRUFBRTtRQUNwQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDeEUsQ0FBQztDQUNGOztBQUVELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRztJQUM5QixJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1YsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0NBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG59IGZyb20gJ0BjZW8vZW50aXR5J1xuXG5pbXBvcnQgeyBXb3JkcHJlc3NFbnRpdHlDb25maWcgfSBmcm9tICcuLi9iYXNlLWVudGl0eS1jb25maWcnXG5cbmV4cG9ydCBjbGFzcyBNZW51RW50aXR5Q29uZmlnIGV4dGVuZHMgV29yZHByZXNzRW50aXR5Q29uZmlnIHtcbiAgb2ZUeXBlKGVudGl0eURhdGE6IGlFbnRpdHkpOiBib29sZWFuIHtcbiAgICBpZihlbnRpdHlEYXRhLnR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gZW50aXR5RGF0YS50eXBlXG4gICAgfVxuXG4gICAgbGV0IGF0dHJpYnV0ZXNVcmwgPSB0aGlzLnVybEZyb21BdHRyaWJ1dGVzKGVudGl0eURhdGEpXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNVcmwuaW5jbHVkZXMoXCJ2Mi9tZW51c1wiKVxuICB9XG5cbiAgdXJsRnJvbUF0dHJpYnV0ZXMoZW50aXR5RGF0YTogYW55ID0ge30pOiBzdHJpbmcge1xuICAgIHJldHVybiBfLmdldChlbnRpdHlEYXRhLCBbJ2F0dHJpYnV0ZXMnLCAnbWV0YScsICdsaW5rcycsICdzZWxmJ10sICcgJylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW50aXR5Q29uZmlnVHlwZSA9IHtcbiAgdHlwZTogXCJtZW51c1wiLFxuICBpc1NlZWQ6IHRydWUsXG4gIHNlZWQ6IFt7fV0sXG4gIHVybDogJ3dwLWFwaS1tZW51cy92Mi9tZW51cycsXG4gIGVudGl0eUNvbmZpZzogTWVudUVudGl0eUNvbmZpZ1xufVxuIl19