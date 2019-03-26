/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { EntityConfigActionTypes, } from './actions';
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function entityConfigReducer(state, action) {
    /** @type {?} */
    var deltaState = {};
    switch (action.type) {
        case EntityConfigActionTypes.SET_PRIMARY_ENTITY:
            deltaState = {
                primaryEntity: _.omit(action.payload, 'feature'),
            };
            return _.assign({}, state, deltaState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zdGF0ZS9jb25maWcvcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLHVCQUF1QixHQUV4QixNQUFNLFdBQVcsQ0FBQTs7Ozs7O0FBTWxCLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsS0FBeUIsRUFDekIsTUFBZ0M7O1FBRTVCLFVBQVUsR0FBRyxFQUFFO0lBRW5CLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHVCQUF1QixDQUFDLGtCQUFrQjtZQUM3QyxVQUFVLEdBQUc7Z0JBQ1osYUFBYSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7YUFDaEQsQ0FBQTtZQUNELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ3hDO1lBQ0UsT0FBTyxLQUFLLENBQUE7S0FDZjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgRW50aXR5Q29uZmlnQWN0aW9uVHlwZXMsXG4gIEVudGl0eUNvbmZpZ0FjdGlvbnNVbmlvbixcbn0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5Q29uZmlnU3RhdGVcbn0gZnJvbSAnLi9zdGF0ZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUNvbmZpZ1JlZHVjZXIoXG4gIHN0YXRlOiBpRW50aXR5Q29uZmlnU3RhdGUsXG4gIGFjdGlvbjogRW50aXR5Q29uZmlnQWN0aW9uc1VuaW9uXG4pOiBpRW50aXR5Q29uZmlnU3RhdGUge1xuICB2YXIgZGVsdGFTdGF0ZSA9IHt9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRW50aXR5Q29uZmlnQWN0aW9uVHlwZXMuU0VUX1BSSU1BUllfRU5USVRZOlxuICAgICAgZGVsdGFTdGF0ZSA9IHtcbiAgICAgICBwcmltYXJ5RW50aXR5OiBfLm9taXQoYWN0aW9uLnBheWxvYWQsICdmZWF0dXJlJyksXG4gICAgICB9XG4gICAgICByZXR1cm4gXy5hc3NpZ24oe30sIHN0YXRlLCBkZWx0YVN0YXRlKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuIl19