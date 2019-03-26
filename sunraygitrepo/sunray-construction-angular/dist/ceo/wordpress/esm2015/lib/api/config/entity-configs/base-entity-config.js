/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { startsWith } from '@ceo/core';
import { EntityConfig, } from '@ceo/entity';
import { featureUrl } from '../url';
export class WordpressEntityConfig extends EntityConfig {
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        if (entityData.type) {
            return this.type == entityData.type;
        }
        /** @type {?} */
        let baseUrl = _.join([featureUrl, this.url], '/');
        /** @type {?} */
        let attributesUrl = this.urlFromAttributes(entityData);
        return startsWith(attributesUrl, baseUrl);
    }
    /**
     * @param {?=} entityData
     * @return {?}
     */
    urlFromAttributes(entityData = {}) {
        return _.get(entityData, ['attributes', '_links', 'self', '0', 'href'], ' ');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy9iYXNlLWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFFdEMsT0FBTyxFQUNMLFlBQVksR0FFYixNQUFNLGFBQWEsQ0FBQTtBQUVwQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFBO0FBRW5DLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZOzs7OztJQUNyRCxNQUFNLENBQUMsVUFBbUI7UUFDeEIsSUFBRyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFBO1NBQ3BDOztZQUVHLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7O1lBQzdDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBQ3RELE9BQU8sVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUMzQyxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLGFBQWtCLEVBQUU7UUFDcEMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgc3RhcnRzV2l0aCB9IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgRW50aXR5Q29uZmlnLFxuICBpRW50aXR5LFxufSBmcm9tICdAY2VvL2VudGl0eSdcblxuaW1wb3J0IHsgZmVhdHVyZVVybCB9IGZyb20gJy4uL3VybCdcblxuZXhwb3J0IGNsYXNzIFdvcmRwcmVzc0VudGl0eUNvbmZpZyBleHRlbmRzIEVudGl0eUNvbmZpZyB7XG4gIG9mVHlwZShlbnRpdHlEYXRhOiBpRW50aXR5KTogYm9vbGVhbiB7XG4gICAgaWYoZW50aXR5RGF0YS50eXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlID09IGVudGl0eURhdGEudHlwZVxuICAgIH1cblxuICAgIGxldCBiYXNlVXJsID0gXy5qb2luKFtmZWF0dXJlVXJsLCB0aGlzLnVybF0sICcvJylcbiAgICBsZXQgYXR0cmlidXRlc1VybCA9IHRoaXMudXJsRnJvbUF0dHJpYnV0ZXMoZW50aXR5RGF0YSlcbiAgICByZXR1cm4gc3RhcnRzV2l0aChhdHRyaWJ1dGVzVXJsLCBiYXNlVXJsKVxuICB9XG5cbiAgdXJsRnJvbUF0dHJpYnV0ZXMoZW50aXR5RGF0YTogYW55ID0ge30pOiBzdHJpbmcge1xuICAgIHJldHVybiBfLmdldChlbnRpdHlEYXRhLCBbJ2F0dHJpYnV0ZXMnLCAnX2xpbmtzJywgJ3NlbGYnLCAnMCcsICdocmVmJ10sICcgJylcbiAgfVxufVxuIl19