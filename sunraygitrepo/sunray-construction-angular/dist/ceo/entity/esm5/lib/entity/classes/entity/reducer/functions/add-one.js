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
    var entityId = entity.id;
    /** @type {?} */
    var newEntities = _.omit(state.entities, entityId);
    /** @type {?} */
    var newIds = _.without(state.ids, entityId);
    state = _.extend(state, { ids: newIds, entities: newEntities });
    return adapter.addOne(entity, state);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW9uZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9yZWR1Y2VyL2Z1bmN0aW9ucy9hZGQtb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTs7Ozs7Ozs7QUFHM0IsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsTUFBVyxFQUNYLE9BQVksRUFDWixLQUFVOzs7UUFJTixRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQUU7O1FBQ3BCLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDOztRQUM5QyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztJQUMzQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFBO0lBRTdELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyBhZGRPbmVcbmV4cG9ydCBmdW5jdGlvbiBhZGRPbmUoXG4gIGVudGl0eTogYW55LFxuICBhZGFwdGVyOiBhbnksXG4gIHN0YXRlOiBhbnlcbikge1xuXG4gIC8vIFJlbW92ZSB0aGUgZW50aXR5IGlmIGFscmVhZHkgZXhpc3RpbmdcbiAgbGV0IGVudGl0eUlkID0gZW50aXR5LmlkXG4gIGxldCBuZXdFbnRpdGllcyA9IF8ub21pdChzdGF0ZS5lbnRpdGllcywgZW50aXR5SWQpXG4gIGxldCBuZXdJZHMgPSBfLndpdGhvdXQoc3RhdGUuaWRzLCBlbnRpdHlJZClcbiAgc3RhdGUgPSBfLmV4dGVuZChzdGF0ZSwge2lkczogbmV3SWRzLCBlbnRpdGllczogbmV3RW50aXRpZXN9KVxuXG4gIHJldHVybiBhZGFwdGVyLmFkZE9uZShlbnRpdHksIHN0YXRlKVxufVxuIl19