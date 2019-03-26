/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { WordpressEntity as BaseEntity } from '../../classes';
import { WordpressEntityConfig as BaseEntityConfig } from './base-entity-config';
/**
 * @param {?} params
 * @return {?}
 */
export function buildEntityConfig(params) {
    /** @type {?} */
    var configType = _.get(params, 'entityConfig', BaseEntityConfig);
    /** @type {?} */
    var configParams = _.omit(params, ['entityConfig', 'configuration']);
    configParams = _.defaults(configParams, { entityType: BaseEntity });
    return new configType(configParams);
}
/**
 * @param {?} entityConfigParams
 * @return {?}
 */
export function buildEntityConfigs(entityConfigParams) {
    return _.map(_.sortBy(entityConfigParams, 'type'), buildEntityConfig);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LWNvbmZpZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvY29uZmlnL2VudGl0eS1jb25maWdzL2J1aWxkLWVudGl0eS1jb25maWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsZUFBZSxJQUFJLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUU3RCxPQUFPLEVBQUUscUJBQXFCLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTs7Ozs7QUFFaEYsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixNQUFNOztRQUdGLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7O1FBRTVELFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNwRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQTtJQUNqRSxPQUFPLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ3JDLENBQUM7Ozs7O0FBR0QsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxrQkFBa0I7SUFFbEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUNWLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEVBQ3BDLGlCQUFpQixDQUNsQixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBXb3JkcHJlc3NFbnRpdHkgYXMgQmFzZUVudGl0eSB9IGZyb20gJy4uLy4uL2NsYXNzZXMnXG5cbmltcG9ydCB7IFdvcmRwcmVzc0VudGl0eUNvbmZpZyBhcyBCYXNlRW50aXR5Q29uZmlnIH0gZnJvbSAnLi9iYXNlLWVudGl0eS1jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVudGl0eUNvbmZpZyhcbiAgcGFyYW1zXG4pIHtcblxuICBsZXQgY29uZmlnVHlwZSA9IF8uZ2V0KHBhcmFtcywgJ2VudGl0eUNvbmZpZycsIEJhc2VFbnRpdHlDb25maWcpXG5cbiAgbGV0IGNvbmZpZ1BhcmFtcyA9IF8ub21pdChwYXJhbXMsIFsnZW50aXR5Q29uZmlnJywgJ2NvbmZpZ3VyYXRpb24nXSlcbiAgY29uZmlnUGFyYW1zID0gXy5kZWZhdWx0cyhjb25maWdQYXJhbXMsIHtlbnRpdHlUeXBlOiBCYXNlRW50aXR5fSlcbiAgcmV0dXJuIG5ldyBjb25maWdUeXBlKGNvbmZpZ1BhcmFtcylcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbnRpdHlDb25maWdzKFxuICBlbnRpdHlDb25maWdQYXJhbXNcbikge1xuICByZXR1cm4gXy5tYXAoXG4gICAgXy5zb3J0QnkoZW50aXR5Q29uZmlnUGFyYW1zLCAndHlwZScpLFxuICAgIGJ1aWxkRW50aXR5Q29uZmlnXG4gIClcbn1cbiJdfQ==