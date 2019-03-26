/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { ApplicationConfigActionTypes, } from './actions';
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function applicationConfigReducer(state, action) {
    /** @type {?} */
    var deltaState = {};
    switch (action.type) {
        case 'ROUTER_NAVIGATION':
            deltaState = {
                route: action.payload.routerState
            };
            return _.assign({}, state, deltaState);
        case ApplicationConfigActionTypes.LAUNCH:
            deltaState = {
                launched: true
            };
            return _.assign({}, state, deltaState);
        case ApplicationConfigActionTypes.SET_PRIMARY_ENTITY:
            deltaState = {
                primaryEntity: action.payload,
            };
            return _.assign({}, state, deltaState);
        case ApplicationConfigActionTypes.SET_RESOURCE_TYPE:
            deltaState = {
                resourceType: action.payload,
            };
            return _.assign({}, state, deltaState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQ0wsNEJBQTRCLEdBRTdCLE1BQU0sV0FBVyxDQUFDOzs7Ozs7QUFNbkIsTUFBTSxVQUFVLHdCQUF3QixDQUN0QyxLQUE4QixFQUM5QixNQUFxQzs7UUFFakMsVUFBVSxHQUFHLEVBQUU7SUFFbkIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssbUJBQW1CO1lBQ3RCLFVBQVUsR0FBRztnQkFDWCxLQUFLLEVBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO2FBQ25DLENBQUM7WUFDRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6QyxLQUFLLDRCQUE0QixDQUFDLE1BQU07WUFDdEMsVUFBVSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQztZQUNGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLEtBQUssNEJBQTRCLENBQUMsa0JBQWtCO1lBQ2xELFVBQVUsR0FBRztnQkFDWixhQUFhLEVBQUUsTUFBTSxDQUFDLE9BQU87YUFDN0IsQ0FBQztZQUNGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLEtBQUssNEJBQTRCLENBQUMsaUJBQWlCO1lBQ2pELFVBQVUsR0FBRztnQkFDWCxZQUFZLEVBQUUsTUFBTSxDQUFDLE9BQU87YUFDN0IsQ0FBQztZQUNGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuICBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvblR5cGVzLFxuICBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvbnNVbmlvbixcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW1wb3J0IHtcbiAgaUFwcGxpY2F0aW9uQ29uZmlnU3RhdGVcbn0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBsaWNhdGlvbkNvbmZpZ1JlZHVjZXIoXG4gIHN0YXRlOiBpQXBwbGljYXRpb25Db25maWdTdGF0ZSxcbiAgYWN0aW9uOiBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvbnNVbmlvblxuKTogaUFwcGxpY2F0aW9uQ29uZmlnU3RhdGUge1xuICB2YXIgZGVsdGFTdGF0ZSA9IHt9O1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdST1VURVJfTkFWSUdBVElPTic6XG4gICAgICBkZWx0YVN0YXRlID0ge1xuICAgICAgICByb3V0ZTogIGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwgZGVsdGFTdGF0ZSk7IFxuICAgIGNhc2UgQXBwbGljYXRpb25Db25maWdBY3Rpb25UeXBlcy5MQVVOQ0g6XG4gICAgICBkZWx0YVN0YXRlID0ge1xuICAgICAgICBsYXVuY2hlZDogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBfLmFzc2lnbih7fSwgc3RhdGUsIGRlbHRhU3RhdGUpOyBcbiAgICBjYXNlIEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9uVHlwZXMuU0VUX1BSSU1BUllfRU5USVRZOlxuICAgICAgZGVsdGFTdGF0ZSA9IHtcbiAgICAgICBwcmltYXJ5RW50aXR5OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gXy5hc3NpZ24oe30sIHN0YXRlLCBkZWx0YVN0YXRlKTtcbiAgICBjYXNlIEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9uVHlwZXMuU0VUX1JFU09VUkNFX1RZUEU6XG4gICAgICBkZWx0YVN0YXRlID0ge1xuICAgICAgICByZXNvdXJjZVR5cGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBfLmFzc2lnbih7fSwgc3RhdGUsIGRlbHRhU3RhdGUpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==