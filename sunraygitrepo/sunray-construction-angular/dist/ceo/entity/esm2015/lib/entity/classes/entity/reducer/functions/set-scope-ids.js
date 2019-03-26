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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjb3BlLWlkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9yZWR1Y2VyL2Z1bmN0aW9ucy9zZXQtc2NvcGUtaWRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTs7Ozs7OztBQUkzQixNQUFNLFVBQVUsV0FBVyxDQUN6QixNQUF5QixFQUN6QixPQUFZLEVBQ1osS0FBVTs7UUFHTixRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFROztRQUNsQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLOztRQUdoQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDOztRQUUzQixVQUFVLEdBQUc7UUFDZixNQUFNLEVBQUUsRUFDUDtLQUNGO0lBQ0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRztRQUM3QixHQUFHLEVBQUUsR0FBRztLQUNULENBQUE7SUFHRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEVudGl0eUFjdGlvbiB9IGZyb20gJy4uLy4uL2VudGl0eS5hY3Rpb24tY2xhc3NlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNjb3BlSWRzKFxuICBhY3Rpb246IEVudGl0eUFjdGlvbjxhbnk+LFxuICBhZGFwdGVyOiBhbnksXG4gIHN0YXRlOiBhbnlcbikge1xuXG4gIGxldCBlbnRpdGllcyA9IGFjdGlvbi5wYXlsb2FkLmVudGl0aWVzXG4gIGxldCBzY29wZU5hbWUgPSBhY3Rpb24ucGF5bG9hZC5zY29wZVxuXG5cbiAgbGV0IGlkcyA9IF8ubWFwKGVudGl0aWVzLCAnaWQnKVxuXG4gIGxldCBzdGF0ZURlbHRhID0ge1xuICAgIHNjb3Blczoge1xuICAgIH1cbiAgfVxuICBzdGF0ZURlbHRhLnNjb3Blc1tzY29wZU5hbWVdID0ge1xuICAgIGlkczogaWRzXG4gIH1cblxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgc3RhdGVEZWx0YSlcbn1cbiJdfQ==