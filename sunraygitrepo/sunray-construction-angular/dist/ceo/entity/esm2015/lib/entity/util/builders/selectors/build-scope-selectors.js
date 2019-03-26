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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtc2NvcGUtc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLXNjb3BlLXNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGFBQWEsQ0FBQTtBQUVwQixPQUFPLEVBQ0wsU0FBUyxHQUNWLE1BQU0sV0FBVyxDQUFBOztBQVFsQixNQUFNLE9BQU8sa0JBQWtCLEdBQUcsQ0FDaEMsYUFBYSxFQUNiLFNBQVMsRUFDVCxTQUFTLEVBQ1QsRUFBRTs7UUFFRSxjQUFjLEdBQUcsYUFBYSxDQUFDLG9CQUFvQjs7UUFFbkQsbUJBQW1CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7O1lBQ3pDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7O1lBQzNDLGFBQWEsR0FDZixDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDdkQsVUFBVSxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUNsRCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDOztRQUVHLFlBQVksR0FBRyxnQkFBZ0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQ3pELFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxjQUFjLENBQ3RDLFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLFNBQVMsQ0FBQyxjQUFjLEVBQ3hCLG1CQUFtQixDQUNwQixDQUFBO0lBRUQsT0FBTyxTQUFTLENBQUE7QUFDbEIsQ0FBQztBQUVELG1EQUFtRDs7OztBQUNuRCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUU7O1FBQzFELFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1FBQ3pDLGFBQWEsR0FDZixDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztJQUU5QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGNyZWF0ZVNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgY2FtZWxDYXNlLFxufSBmcm9tICdAY2VvL2NvcmUnXG5cblxuaW1wb3J0IHtcbiAgaUVudGl0eSxcbiAgaUVudGl0eUFkYXB0ZXIsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBidWlsZFNjb3BlU2VsZWN0b3IgPSAoXG4gIGVudGl0eUFkYXB0ZXIsXG4gIHNlbGVjdG9ycyxcbiAgc2NvcGVOYW1lLFxuKSA9PiB7XG5cbiAgdmFyIGNvbGxlY3Rpb25UeXBlID0gZW50aXR5QWRhcHRlci5lbnRpdHlDb2xsZWN0aW9uVHlwZVxuXG4gIGxldCBzZWxlY3RTY29wZUVudGl0aWVzID0gKHNjb3BlcywgZW50aXRpZXMpID0+IHtcbiAgICBsZXQgaWRzID0gXy5nZXQoc2NvcGVzLCBbc2NvcGVOYW1lLCAnaWRzJ10sIFtdKVxuICAgIGxldCBzY29wZUVudGl0aWVzID1cbiAgICAgIF8uY29tcGFjdChpZHMubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZW50aXRpZXNbaWRdIH0pKVxuICAgIGxldCBjb2xsZWN0aW9uID0gbmV3IGNvbGxlY3Rpb25UeXBlKHNjb3BlRW50aXRpZXMpXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgfVxuXG4gIGxldCBzZWxlY3Rvck5hbWUgPSBgc2VsZWN0LnNjb3BlLiR7Y2FtZWxDYXNlKHNjb3BlTmFtZSl9YFxuICBzZWxlY3RvcnNbc2VsZWN0b3JOYW1lXSA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdG9ycy5zZWxlY3RTY29wZXMsXG4gICAgc2VsZWN0b3JzLnNlbGVjdEVudGl0aWVzLFxuICAgIHNlbGVjdFNjb3BlRW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBzZWxlY3RvcnNcbn1cblxuLy8gR2V0IGFsbCB0aGUgU2VsZWN0b3JzIGludGVybmFsIHRvIGFuIGVudGl0eSB0eXBlXG5leHBvcnQgY29uc3QgYnVpbGRTY29wZVNlbGVjdG9ycyA9IChlbnRpdHlBZGFwdGVyLCBzZWxlY3RvcnMpID0+IHtcbiAgbGV0IHNjb3BlTmFtZXMgPSBfLmtleXMoZW50aXR5QWRhcHRlci5zY29wZXMpXG4gIGxldCBidWlsZFNlbGVjdG9yID1cbiAgICBfLnBhcnRpYWwoYnVpbGRTY29wZVNlbGVjdG9yLCBlbnRpdHlBZGFwdGVyKVxuXG4gIHJldHVybiBfLnJlZHVjZShzY29wZU5hbWVzLCBidWlsZFNlbGVjdG9yLCBzZWxlY3RvcnMpXG59XG4iXX0=