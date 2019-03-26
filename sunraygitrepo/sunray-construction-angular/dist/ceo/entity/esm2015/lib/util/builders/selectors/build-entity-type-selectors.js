/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
ngrx selectors
  selectIds
  selectEntities
  selectTotal

custom selectors
  selectAll
  selectSelectedEntity
  selectScopes
*/
import * as _ from 'lodash';
import { buildScopeSelectors } from './build-scope-selectors';
/** @type {?} */
export const buildEntityTypeSelectors = (entityAdapter) => {
    /** @type {?} */
    var collectionType = entityAdapter.entityCollectionType;
    /** @type {?} */
    var selectors = entityAdapter.ngrxEntityAdapter.getSelectors();
    /** @type {?} */
    let defaults = ['selectIds', 'selectEntities', 'selectTotal'];
    /** @type {?} */
    let decoratedSelectors = _.pick(selectors, defaults)
    // Wrap the selectAll selector in order to return an
    // entity collection object
    ;
    // Wrap the selectAll selector in order to return an
    // entity collection object
    decoratedSelectors.selectAll = (state) => {
        /** @type {?} */
        let entities = selectors.selectAll(state);
        /** @type {?} */
        let collection = new collectionType(entities);
        return collection;
    };
    decoratedSelectors.selectSelectedEntity = (state) => {
        return state.entities[state.selectedEntityId];
    };
    decoratedSelectors.selectScopes = (state) => { return state.scopes; };
    buildScopeSelectors(entityAdapter, decoratedSelectors);
    return decoratedSelectors;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LXR5cGUtc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvdXRpbC9idWlsZGVycy9zZWxlY3RvcnMvYnVpbGQtZW50aXR5LXR5cGUtc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTzNCLE9BQU8sRUFDTCxtQkFBbUIsRUFDcEIsTUFBTSx5QkFBeUIsQ0FBQTs7QUFFaEMsTUFBTSxPQUFPLHdCQUF3QixHQUFHLENBQ3RDLGFBQWEsRUFDYixFQUFFOztRQUVFLGNBQWMsR0FBRyxhQUFhLENBQUMsb0JBQW9COztRQUVuRCxTQUFTLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRTs7UUFFMUQsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQzs7UUFDekQsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBRXBELG9EQUFvRDtJQUNwRCwyQkFBMkI7O0lBRDNCLG9EQUFvRDtJQUNwRCwyQkFBMkI7SUFDM0Isa0JBQWtCLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7O1lBQ3hDLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzs7WUFDckMsVUFBVSxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUM3QyxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDLENBQUE7SUFFRCxrQkFBa0IsQ0FBQyxvQkFBb0IsR0FBRyxDQUN4QyxLQUE0QixFQUNuQixFQUFFO1FBRVgsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQy9DLENBQUMsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFlBQVksR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQyxDQUFBO0lBRXBFLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO0lBRXRELE9BQU8sa0JBQWtCLENBQUE7QUFFM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5uZ3J4IHNlbGVjdG9yc1xuICBzZWxlY3RJZHNcbiAgc2VsZWN0RW50aXRpZXNcbiAgc2VsZWN0VG90YWxcblxuY3VzdG9tIHNlbGVjdG9ycyBcbiAgc2VsZWN0QWxsXG4gIHNlbGVjdFNlbGVjdGVkRW50aXR5XG4gIHNlbGVjdFNjb3Blc1xuKi9cblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTdGF0ZSxcbiAgaUVudGl0eSxcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgYnVpbGRTY29wZVNlbGVjdG9yc1xufSBmcm9tICcuL2J1aWxkLXNjb3BlLXNlbGVjdG9ycydcblxuZXhwb3J0IGNvbnN0IGJ1aWxkRW50aXR5VHlwZVNlbGVjdG9ycyA9IChcbiAgZW50aXR5QWRhcHRlcixcbikgPT4ge1xuXG4gIHZhciBjb2xsZWN0aW9uVHlwZSA9IGVudGl0eUFkYXB0ZXIuZW50aXR5Q29sbGVjdGlvblR5cGVcblxuICB2YXIgc2VsZWN0b3JzID0gZW50aXR5QWRhcHRlci5uZ3J4RW50aXR5QWRhcHRlci5nZXRTZWxlY3RvcnMoKVxuXG4gIGxldCBkZWZhdWx0cyA9IFsnc2VsZWN0SWRzJywgJ3NlbGVjdEVudGl0aWVzJywgJ3NlbGVjdFRvdGFsJ11cbiAgbGV0IGRlY29yYXRlZFNlbGVjdG9ycyA9IF8ucGljayhzZWxlY3RvcnMsIGRlZmF1bHRzKVxuICBcbiAgLy8gV3JhcCB0aGUgc2VsZWN0QWxsIHNlbGVjdG9yIGluIG9yZGVyIHRvIHJldHVybiBhblxuICAvLyBlbnRpdHkgY29sbGVjdGlvbiBvYmplY3RcbiAgZGVjb3JhdGVkU2VsZWN0b3JzLnNlbGVjdEFsbCA9IChzdGF0ZTogYW55KSA9PiB7XG4gICAgbGV0IGVudGl0aWVzID0gc2VsZWN0b3JzLnNlbGVjdEFsbChzdGF0ZSkgXG4gICAgbGV0IGNvbGxlY3Rpb24gPSBuZXcgY29sbGVjdGlvblR5cGUoZW50aXRpZXMpXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgfVxuXG4gIGRlY29yYXRlZFNlbGVjdG9ycy5zZWxlY3RTZWxlY3RlZEVudGl0eSA9IChcbiAgICBzdGF0ZTogaUVudGl0eVN0YXRlPGlFbnRpdHk+XG4gICk6IGlFbnRpdHkgPT4ge1xuXG4gICAgcmV0dXJuIHN0YXRlLmVudGl0aWVzW3N0YXRlLnNlbGVjdGVkRW50aXR5SWRdXG4gIH1cblxuICBkZWNvcmF0ZWRTZWxlY3RvcnMuc2VsZWN0U2NvcGVzID0gKHN0YXRlKSA9PiB7IHJldHVybiBzdGF0ZS5zY29wZXMgfVxuXG4gIGJ1aWxkU2NvcGVTZWxlY3RvcnMoZW50aXR5QWRhcHRlciwgZGVjb3JhdGVkU2VsZWN0b3JzKVxuXG4gIHJldHVybiBkZWNvcmF0ZWRTZWxlY3RvcnNcblxufVxuIl19