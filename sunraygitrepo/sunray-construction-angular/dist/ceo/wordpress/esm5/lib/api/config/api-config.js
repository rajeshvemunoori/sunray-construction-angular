/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//
//import { environment } from 'src/environments/environment'
import { FeatureConfig } from '@ceo/entity';
import { ApiConfig } from '@ceo/shared';
import { featureConfig } from './feature-config';
import { featureUrl } from './url';
/** @type {?} */
var config = new FeatureConfig(featureConfig);
/** @type {?} */
var params = {
    url: featureUrl,
    defaultBodyParams: {},
    defaultQueryParams: {
        "_embed": true,
        "per_page": 100,
    },
    resourceTypes: config.entityTypes,
};
/** @type {?} */
export var apiConfig = new ApiConfig(params);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9jb25maWcvYXBpLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFFdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBUyxPQUFPLENBQUE7O0lBRWpDLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUM7O0lBRXpDLE1BQU0sR0FBRztJQUNYLEdBQUcsRUFBRSxVQUFVO0lBQ2YsaUJBQWlCLEVBQUUsRUFBRTtJQUNyQixrQkFBa0IsRUFBRTtRQUNsQixRQUFRLEVBQUUsSUFBSTtRQUNkLFVBQVUsRUFBRSxHQUFHO0tBQ2hCO0lBQ0QsYUFBYSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0NBQ2xDOztBQUNELE1BQU0sS0FBTyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuXG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnIH0gZnJvbSAnQGNlby9lbnRpdHknXG5pbXBvcnQgeyBBcGlDb25maWcgfSBmcm9tICdAY2VvL3NoYXJlZCdcblxuaW1wb3J0IHsgZmVhdHVyZUNvbmZpZyB9IGZyb20gJy4vZmVhdHVyZS1jb25maWcnXG5pbXBvcnQgeyBmZWF0dXJlVXJsIH0gICAgZnJvbSAnLi91cmwnXG5cbmxldCBjb25maWcgPSBuZXcgRmVhdHVyZUNvbmZpZyhmZWF0dXJlQ29uZmlnKVxuXG5sZXQgcGFyYW1zID0ge1xuICB1cmw6IGZlYXR1cmVVcmwsXG4gIGRlZmF1bHRCb2R5UGFyYW1zOiB7fSxcbiAgZGVmYXVsdFF1ZXJ5UGFyYW1zOiB7XG4gICAgXCJfZW1iZWRcIjogdHJ1ZSxcbiAgICBcInBlcl9wYWdlXCI6IDEwMCxcbiAgfSxcbiAgcmVzb3VyY2VUeXBlczogY29uZmlnLmVudGl0eVR5cGVzLFxufVxuZXhwb3J0IGNvbnN0IGFwaUNvbmZpZyA9IG5ldyBBcGlDb25maWcocGFyYW1zKVxuIl19