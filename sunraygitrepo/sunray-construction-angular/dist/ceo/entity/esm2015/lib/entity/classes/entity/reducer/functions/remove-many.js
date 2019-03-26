/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
export function removeMany(action, adapter, state) {
    /** @type {?} */
    let payloadIds = _.map(_.flatten([action.payload]), 'id');
    return adapter.removeMany(payloadIds, state);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLW1hbnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvcmVkdWNlci9mdW5jdGlvbnMvcmVtb3ZlLW1hbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7Ozs7O0FBSTNCLE1BQU0sVUFBVSxVQUFVLENBQ3hCLE1BQXlCLEVBQ3pCLE9BQVksRUFDWixLQUFVOztRQUdOLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQzNCLElBQUksQ0FDTDtJQUNELE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDOUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuLi8uLi9lbnRpdHkuYWN0aW9uLWNsYXNzZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNYW55KFxuICBhY3Rpb246IEVudGl0eUFjdGlvbjxhbnk+LFxuICBhZGFwdGVyOiBhbnksXG4gIHN0YXRlOiBhbnlcbikge1xuXG4gIGxldCBwYXlsb2FkSWRzID0gXy5tYXAoXG4gICAgXy5mbGF0dGVuKFthY3Rpb24ucGF5bG9hZF0pLFxuICAgICdpZCdcbiAgKVxuICByZXR1cm4gYWRhcHRlci5yZW1vdmVNYW55KHBheWxvYWRJZHMsIHN0YXRlKVxufVxuIl19