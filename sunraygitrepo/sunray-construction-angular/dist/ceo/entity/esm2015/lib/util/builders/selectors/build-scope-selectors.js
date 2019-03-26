/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createSelector, } from '@ngrx/store';
import { camelCase, } from '@ceo/core';
/** @type {?} */
export const buildScopeSelector = (entityAdapter, selectors, scopeName) => {
    /** @type {?} */
    var collectionType = entityAdapter.entityCollectionType;
    /** @type {?} */
    let selectScopeEntities = (scopes, entities) => {
        /** @type {?} */
        let ids = _.get(scopes, [scopeName, 'ids'], []);
        /** @type {?} */
        let scopeEntities = _.compact(ids.map(function (id) { return entities[id]; }));
        /** @type {?} */
        let collection = new collectionType(scopeEntities);
        return collection;
    };
    /** @type {?} */
    let selectorName = `select.scope.${camelCase(scopeName)}`;
    selectors[selectorName] = createSelector(selectors.selectScopes, selectors.selectEntities, selectScopeEntities);
    return selectors;
}
// Get all the Selectors internal to an entity type
;
// Get all the Selectors internal to an entity type
/** @type {?} */
export const buildScopeSelectors = (entityAdapter, selectors) => {
    /** @type {?} */
    let scopeNames = _.keys(entityAdapter.scopes);
    /** @type {?} */
    let buildSelector = _.partial(buildScopeSelector, entityAdapter);
    return _.reduce(scopeNames, buildSelector, selectors);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtc2NvcGUtc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvdXRpbC9idWlsZGVycy9zZWxlY3RvcnMvYnVpbGQtc2NvcGUtc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsY0FBYyxHQUNmLE1BQU0sYUFBYSxDQUFBO0FBRXBCLE9BQU8sRUFDTCxTQUFTLEdBQ1YsTUFBTSxXQUFXLENBQUE7O0FBUWxCLE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxDQUNoQyxhQUFhLEVBQ2IsU0FBUyxFQUNULFNBQVMsRUFDVCxFQUFFOztRQUVFLGNBQWMsR0FBRyxhQUFhLENBQUMsb0JBQW9COztRQUVuRCxtQkFBbUIsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRTs7WUFDekMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7WUFDM0MsYUFBYSxHQUNmLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN2RCxVQUFVLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ2xELE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7O1FBRUcsWUFBWSxHQUFHLGdCQUFnQixTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDekQsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLGNBQWMsQ0FDdEMsU0FBUyxDQUFDLFlBQVksRUFDdEIsU0FBUyxDQUFDLGNBQWMsRUFDeEIsbUJBQW1CLENBQ3BCLENBQUE7SUFFRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQsbURBQW1EOzs7O0FBQ25ELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRTs7UUFDMUQsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7UUFDekMsYUFBYSxHQUNmLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO0lBRTlDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0FBQ3ZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBjYW1lbENhc2UsXG59IGZyb20gJ0BjZW8vY29yZSdcblxuXG5pbXBvcnQge1xuICBpRW50aXR5LFxuICBpRW50aXR5QWRhcHRlcixcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNvbnN0IGJ1aWxkU2NvcGVTZWxlY3RvciA9IChcbiAgZW50aXR5QWRhcHRlcixcbiAgc2VsZWN0b3JzLFxuICBzY29wZU5hbWUsXG4pID0+IHtcblxuICB2YXIgY29sbGVjdGlvblR5cGUgPSBlbnRpdHlBZGFwdGVyLmVudGl0eUNvbGxlY3Rpb25UeXBlXG5cbiAgbGV0IHNlbGVjdFNjb3BlRW50aXRpZXMgPSAoc2NvcGVzLCBlbnRpdGllcykgPT4ge1xuICAgIGxldCBpZHMgPSBfLmdldChzY29wZXMsIFtzY29wZU5hbWUsICdpZHMnXSwgW10pXG4gICAgbGV0IHNjb3BlRW50aXRpZXMgPVxuICAgICAgXy5jb21wYWN0KGlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBlbnRpdGllc1tpZF0gfSkpXG4gICAgbGV0IGNvbGxlY3Rpb24gPSBuZXcgY29sbGVjdGlvblR5cGUoc2NvcGVFbnRpdGllcylcbiAgICByZXR1cm4gY29sbGVjdGlvblxuICB9XG5cbiAgbGV0IHNlbGVjdG9yTmFtZSA9IGBzZWxlY3Quc2NvcGUuJHtjYW1lbENhc2Uoc2NvcGVOYW1lKX1gXG4gIHNlbGVjdG9yc1tzZWxlY3Rvck5hbWVdID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0b3JzLnNlbGVjdFNjb3BlcyxcbiAgICBzZWxlY3RvcnMuc2VsZWN0RW50aXRpZXMsXG4gICAgc2VsZWN0U2NvcGVFbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIHNlbGVjdG9yc1xufVxuXG4vLyBHZXQgYWxsIHRoZSBTZWxlY3RvcnMgaW50ZXJuYWwgdG8gYW4gZW50aXR5IHR5cGVcbmV4cG9ydCBjb25zdCBidWlsZFNjb3BlU2VsZWN0b3JzID0gKGVudGl0eUFkYXB0ZXIsIHNlbGVjdG9ycykgPT4ge1xuICBsZXQgc2NvcGVOYW1lcyA9IF8ua2V5cyhlbnRpdHlBZGFwdGVyLnNjb3BlcylcbiAgbGV0IGJ1aWxkU2VsZWN0b3IgPVxuICAgIF8ucGFydGlhbChidWlsZFNjb3BlU2VsZWN0b3IsIGVudGl0eUFkYXB0ZXIpXG5cbiAgcmV0dXJuIF8ucmVkdWNlKHNjb3BlTmFtZXMsIGJ1aWxkU2VsZWN0b3IsIHNlbGVjdG9ycylcbn1cbiJdfQ==