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
    var fullSliceName = _.join([featureName, sliceName], ".");
    return typeFor(fullSliceName, actionName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvcmVkdWNlci9hY3Rpb24tdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFXLFlBQVksQ0FBQTs7Ozs7Ozs7QUFHekMsTUFBTSxVQUFVLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVU7O1FBQ3ZELGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUN6RCxPQUFPLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyB0eXBlRm9yIH0gICAgICBmcm9tICdAY2VvL3N0YXRlJ1xuXG4vLyBnZXQgdGhlVHlwZVxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvblR5cGUoZmVhdHVyZU5hbWUsIHNsaWNlTmFtZSwgYWN0aW9uTmFtZSkge1xuICBsZXQgZnVsbFNsaWNlTmFtZSA9IF8uam9pbihbZmVhdHVyZU5hbWUsIHNsaWNlTmFtZV0sIFwiLlwiKVxuICByZXR1cm4gdHlwZUZvcihmdWxsU2xpY2VOYW1lLCBhY3Rpb25OYW1lKVxufVxuIl19