/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createSelector, } from '@ngrx/store';
import { camelCase, } from '@ceo/core';
/** @type {?} */
export var buildScopeSelector = function (entityAdapter, selectors, scopeName) {
    /** @type {?} */
    var collectionType = entityAdapter.entityCollectionType;
    /** @type {?} */
    var selectScopeEntities = function (scopes, entities) {
        /** @type {?} */
        var ids = _.get(scopes, [scopeName, 'ids'], []);
        /** @type {?} */
        var scopeEntities = _.compact(ids.map(function (id) { return entities[id]; }));
        /** @type {?} */
        var collection = new collectionType(scopeEntities);
        return collection;
    };
    /** @type {?} */
    var selectorName = "select.scope." + camelCase(scopeName);
    selectors[selectorName] = createSelector(selectors.selectScopes, selectors.selectEntities, selectScopeEntities);
    return selectors;
}
// Get all the Selectors internal to an entity type
;
// Get all the Selectors internal to an entity type
/** @type {?} */
export var buildScopeSelectors = function (entityAdapter, selectors) {
    /** @type {?} */
    var scopeNames = _.keys(entityAdapter.scopes);
    /** @type {?} */
    var buildSelector = _.partial(buildScopeSelector, entityAdapter);
    return _.reduce(scopeNames, buildSelector, selectors);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtc2NvcGUtc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLXNjb3BlLXNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGFBQWEsQ0FBQTtBQUVwQixPQUFPLEVBQ0wsU0FBUyxHQUNWLE1BQU0sV0FBVyxDQUFBOztBQVFsQixNQUFNLEtBQU8sa0JBQWtCLEdBQUcsVUFDaEMsYUFBYSxFQUNiLFNBQVMsRUFDVCxTQUFTOztRQUdMLGNBQWMsR0FBRyxhQUFhLENBQUMsb0JBQW9COztRQUVuRCxtQkFBbUIsR0FBRyxVQUFDLE1BQU0sRUFBRSxRQUFROztZQUNyQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDOztZQUMzQyxhQUFhLEdBQ2YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3ZELFVBQVUsR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQzs7UUFFRyxZQUFZLEdBQUcsa0JBQWdCLFNBQVMsQ0FBQyxTQUFTLENBQUc7SUFDekQsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLGNBQWMsQ0FDdEMsU0FBUyxDQUFDLFlBQVksRUFDdEIsU0FBUyxDQUFDLGNBQWMsRUFDeEIsbUJBQW1CLENBQ3BCLENBQUE7SUFFRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQsbURBQW1EOzs7O0FBQ25ELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxVQUFDLGFBQWEsRUFBRSxTQUFTOztRQUN0RCxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztRQUN6QyxhQUFhLEdBQ2YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUM7SUFFOUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBjcmVhdGVTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIGNhbWVsQ2FzZSxcbn0gZnJvbSAnQGNlby9jb3JlJ1xuXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG4gIGlFbnRpdHlBZGFwdGVyLFxufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY29uc3QgYnVpbGRTY29wZVNlbGVjdG9yID0gKFxuICBlbnRpdHlBZGFwdGVyLFxuICBzZWxlY3RvcnMsXG4gIHNjb3BlTmFtZSxcbikgPT4ge1xuXG4gIHZhciBjb2xsZWN0aW9uVHlwZSA9IGVudGl0eUFkYXB0ZXIuZW50aXR5Q29sbGVjdGlvblR5cGVcblxuICBsZXQgc2VsZWN0U2NvcGVFbnRpdGllcyA9IChzY29wZXMsIGVudGl0aWVzKSA9PiB7XG4gICAgbGV0IGlkcyA9IF8uZ2V0KHNjb3BlcywgW3Njb3BlTmFtZSwgJ2lkcyddLCBbXSlcbiAgICBsZXQgc2NvcGVFbnRpdGllcyA9XG4gICAgICBfLmNvbXBhY3QoaWRzLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGVudGl0aWVzW2lkXSB9KSlcbiAgICBsZXQgY29sbGVjdGlvbiA9IG5ldyBjb2xsZWN0aW9uVHlwZShzY29wZUVudGl0aWVzKVxuICAgIHJldHVybiBjb2xsZWN0aW9uXG4gIH1cblxuICBsZXQgc2VsZWN0b3JOYW1lID0gYHNlbGVjdC5zY29wZS4ke2NhbWVsQ2FzZShzY29wZU5hbWUpfWBcbiAgc2VsZWN0b3JzW3NlbGVjdG9yTmFtZV0gPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RvcnMuc2VsZWN0U2NvcGVzLFxuICAgIHNlbGVjdG9ycy5zZWxlY3RFbnRpdGllcyxcbiAgICBzZWxlY3RTY29wZUVudGl0aWVzXG4gIClcblxuICByZXR1cm4gc2VsZWN0b3JzXG59XG5cbi8vIEdldCBhbGwgdGhlIFNlbGVjdG9ycyBpbnRlcm5hbCB0byBhbiBlbnRpdHkgdHlwZVxuZXhwb3J0IGNvbnN0IGJ1aWxkU2NvcGVTZWxlY3RvcnMgPSAoZW50aXR5QWRhcHRlciwgc2VsZWN0b3JzKSA9PiB7XG4gIGxldCBzY29wZU5hbWVzID0gXy5rZXlzKGVudGl0eUFkYXB0ZXIuc2NvcGVzKVxuICBsZXQgYnVpbGRTZWxlY3RvciA9XG4gICAgXy5wYXJ0aWFsKGJ1aWxkU2NvcGVTZWxlY3RvciwgZW50aXR5QWRhcHRlcilcblxuICByZXR1cm4gXy5yZWR1Y2Uoc2NvcGVOYW1lcywgYnVpbGRTZWxlY3Rvciwgc2VsZWN0b3JzKVxufVxuIl19