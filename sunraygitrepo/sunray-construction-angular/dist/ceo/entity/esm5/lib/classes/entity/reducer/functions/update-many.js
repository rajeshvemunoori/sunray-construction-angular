/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
// updateMany
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
export function updateMany(action, adapter, state) {
    /** @type {?} */
    var payload = _.flatten([action.payload]);
    /** @type {?} */
    var payloadIds = _.map(_.flatten([payload]), 'id');
    return adapter.upsertMany(payload, state);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW1hbnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2VudGl0eS9yZWR1Y2VyL2Z1bmN0aW9ucy91cGRhdGUtbWFueS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7Ozs7O0FBSzNCLE1BQU0sVUFBVSxVQUFVLENBQ3hCLE1BQXlCLEVBQ3pCLE9BQVksRUFDWixLQUFVOztRQUVOLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUNyQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FDcEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3BCLElBQUksQ0FDTDtJQUNELE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuLi8uLi9lbnRpdHkuYWN0aW9uLWNsYXNzZXMnXG5cbi8vIHVwZGF0ZU1hbnlcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNYW55KFxuICBhY3Rpb246IEVudGl0eUFjdGlvbjxhbnk+LFxuICBhZGFwdGVyOiBhbnksXG4gIHN0YXRlOiBhbnlcbikge1xuICBsZXQgcGF5bG9hZCA9IF8uZmxhdHRlbihbYWN0aW9uLnBheWxvYWRdKVxuICBsZXQgcGF5bG9hZElkcyA9IF8ubWFwKFxuICAgIF8uZmxhdHRlbihbcGF5bG9hZF0pLFxuICAgICdpZCdcbiAgKVxuICByZXR1cm4gYWRhcHRlci51cHNlcnRNYW55KHBheWxvYWQsIHN0YXRlKVxufVxuIl19