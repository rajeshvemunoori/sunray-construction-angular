/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
// addOne
/**
 * @param {?} entity
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
export function addOne(entity, adapter, state) {
    // Remove the entity if already existing
    /** @type {?} */
    let entityId = entity.id;
    /** @type {?} */
    let newEntities = _.omit(state.entities, entityId);
    /** @type {?} */
    let newIds = _.without(state.ids, entityId);
    state = _.extend(state, { ids: newIds, entities: newEntities });
    return adapter.addOne(entity, state);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW9uZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvZW50aXR5L3JlZHVjZXIvZnVuY3Rpb25zL2FkZC1vbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7Ozs7OztBQUczQixNQUFNLFVBQVUsTUFBTSxDQUNwQixNQUFXLEVBQ1gsT0FBWSxFQUNaLEtBQVU7OztRQUlOLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRTs7UUFDcEIsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7O1FBQzlDLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO0lBQzNDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUE7SUFFN0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbi8vIGFkZE9uZVxuZXhwb3J0IGZ1bmN0aW9uIGFkZE9uZShcbiAgZW50aXR5OiBhbnksXG4gIGFkYXB0ZXI6IGFueSxcbiAgc3RhdGU6IGFueVxuKSB7XG5cbiAgLy8gUmVtb3ZlIHRoZSBlbnRpdHkgaWYgYWxyZWFkeSBleGlzdGluZ1xuICBsZXQgZW50aXR5SWQgPSBlbnRpdHkuaWRcbiAgbGV0IG5ld0VudGl0aWVzID0gXy5vbWl0KHN0YXRlLmVudGl0aWVzLCBlbnRpdHlJZClcbiAgbGV0IG5ld0lkcyA9IF8ud2l0aG91dChzdGF0ZS5pZHMsIGVudGl0eUlkKVxuICBzdGF0ZSA9IF8uZXh0ZW5kKHN0YXRlLCB7aWRzOiBuZXdJZHMsIGVudGl0aWVzOiBuZXdFbnRpdGllc30pXG5cbiAgcmV0dXJuIGFkYXB0ZXIuYWRkT25lKGVudGl0eSwgc3RhdGUpXG59XG4iXX0=