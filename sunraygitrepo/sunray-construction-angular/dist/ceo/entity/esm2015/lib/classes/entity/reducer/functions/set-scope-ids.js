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
export function setScopeIds(action, adapter, state) {
    /** @type {?} */
    let entities = action.payload.entities;
    /** @type {?} */
    let scopeName = action.payload.scope;
    /** @type {?} */
    let ids = _.map(entities, 'id');
    /** @type {?} */
    let stateDelta = {
        scopes: {}
    };
    stateDelta.scopes[scopeName] = {
        ids: ids
    };
    return Object.assign({}, state, stateDelta);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjb3BlLWlkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L3JlZHVjZXIvZnVuY3Rpb25zL3NldC1zY29wZS1pZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7Ozs7O0FBSTNCLE1BQU0sVUFBVSxXQUFXLENBQ3pCLE1BQXlCLEVBQ3pCLE9BQVksRUFDWixLQUFVOztRQUdOLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVE7O1FBQ2xDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7O1FBR2hDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1FBRTNCLFVBQVUsR0FBRztRQUNmLE1BQU0sRUFBRSxFQUNQO0tBQ0Y7SUFDRCxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHO1FBQzdCLEdBQUcsRUFBRSxHQUFHO0tBQ1QsQ0FBQTtJQUdELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi4vLi4vZW50aXR5LmFjdGlvbi1jbGFzc2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2NvcGVJZHMoXG4gIGFjdGlvbjogRW50aXR5QWN0aW9uPGFueT4sXG4gIGFkYXB0ZXI6IGFueSxcbiAgc3RhdGU6IGFueVxuKSB7XG5cbiAgbGV0IGVudGl0aWVzID0gYWN0aW9uLnBheWxvYWQuZW50aXRpZXNcbiAgbGV0IHNjb3BlTmFtZSA9IGFjdGlvbi5wYXlsb2FkLnNjb3BlXG5cblxuICBsZXQgaWRzID0gXy5tYXAoZW50aXRpZXMsICdpZCcpXG5cbiAgbGV0IHN0YXRlRGVsdGEgPSB7XG4gICAgc2NvcGVzOiB7XG4gICAgfVxuICB9XG4gIHN0YXRlRGVsdGEuc2NvcGVzW3Njb3BlTmFtZV0gPSB7XG4gICAgaWRzOiBpZHNcbiAgfVxuXG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBzdGF0ZURlbHRhKVxufVxuIl19