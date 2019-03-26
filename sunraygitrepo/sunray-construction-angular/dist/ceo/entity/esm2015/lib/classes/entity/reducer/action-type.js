/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { typeFor } from '@ceo/state';
// get theType
/**
 * @param {?} featureName
 * @param {?} sliceName
 * @param {?} actionName
 * @return {?}
 */
export function actionType(featureName, sliceName, actionName) {
    /** @type {?} */
    let fullSliceName = _.join([featureName, sliceName], ".");
    return typeFor(fullSliceName, actionName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2VudGl0eS9yZWR1Y2VyL2FjdGlvbi10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQVcsWUFBWSxDQUFBOzs7Ozs7OztBQUd6QyxNQUFNLFVBQVUsVUFBVSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVTs7UUFDdkQsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ3pELE9BQU8sT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IHR5cGVGb3IgfSAgICAgIGZyb20gJ0BjZW8vc3RhdGUnXG5cbi8vIGdldCB0aGVUeXBlXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uVHlwZShmZWF0dXJlTmFtZSwgc2xpY2VOYW1lLCBhY3Rpb25OYW1lKSB7XG4gIGxldCBmdWxsU2xpY2VOYW1lID0gXy5qb2luKFtmZWF0dXJlTmFtZSwgc2xpY2VOYW1lXSwgXCIuXCIpXG4gIHJldHVybiB0eXBlRm9yKGZ1bGxTbGljZU5hbWUsIGFjdGlvbk5hbWUpXG59XG4iXX0=