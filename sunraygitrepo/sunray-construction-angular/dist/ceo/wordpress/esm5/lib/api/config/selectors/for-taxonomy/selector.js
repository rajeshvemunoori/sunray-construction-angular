/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { pluralize } from '@ceo/core';
/**
 * @param {?} selectorService
 * @param {?} ri
 * @return {?}
 */
export function selector(selectorService, ri) {
    /** @type {?} */
    var si = {
        feature: 'cms',
        entityType: ri.type,
        selectorType: 'all'
    };
    /** @type {?} */
    var baseSelector = selectorService
        .selectorFromSelectorIdentifier(si);
    /** @type {?} */
    var taxonomyType = pluralize(ri.filter.taxonomy);
    /** @type {?} */
    var taxonomyValue = ri.filter.term
    // Filter function
    ;
    // Filter function
    /** @type {?} */
    var filterByTaxonomy = function (state, taxonomyState) {
        if (state && state.where) {
            /** @type {?} */
            var taxonomy = taxonomyState.findByAttr('slug', taxonomyValue);
            if (taxonomy) {
                /** @type {?} */
                var filter = {};
                filter[taxonomyType] = taxonomy.id;
                return state.where(filter);
            }
            else {
                return state.none();
            }
        }
        else {
            return state;
        }
    }
    // Get the selector for the taxonomy
    ;
    // Get the selector for the taxonomy
    /** @type {?} */
    var taxonomySelectorIdentifier = {
        feature: 'cms',
        entityType: taxonomyType,
        selectorType: 'all'
    };
    /** @type {?} */
    var taxonomySelector = selectorService
        .selectorFromSelectorIdentifier(taxonomySelectorIdentifier);
    return createSelector(baseSelector, taxonomySelector, filterByTaxonomy);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvY29uZmlnL3NlbGVjdG9ycy9mb3ItdGF4b25vbXkvc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBUyxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFBO0FBRXJFLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxXQUFXLENBQUE7Ozs7OztBQU1sQixNQUFNLFVBQVUsUUFBUSxDQUN0QixlQUFlLEVBQ2YsRUFBdUI7O1FBR25CLEVBQUUsR0FBRztRQUNQLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ25CLFlBQVksRUFBRSxLQUFLO0tBQ3BCOztRQUNHLFlBQVksR0FBRyxlQUFlO1NBQy9CLDhCQUE4QixDQUFDLEVBQUUsQ0FBQzs7UUFFakMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7UUFDNUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSTtJQUVsQyxrQkFBa0I7Ozs7UUFDZCxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBRSxhQUFhO1FBQzFDLElBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7O2dCQUNuQixRQUFRLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDO1lBQzlELElBQUcsUUFBUSxFQUFFOztvQkFDUCxNQUFNLEdBQUcsRUFBRTtnQkFDZixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQTtnQkFFbEMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQzNCO2lCQUNJO2dCQUNILE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO2FBQ3BCO1NBQ0Y7YUFDSTtZQUNILE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0lBRUQsb0NBQW9DOzs7O1FBQ2hDLDBCQUEwQixHQUFHO1FBQy9CLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLFlBQVk7UUFDeEIsWUFBWSxFQUFFLEtBQUs7S0FDcEI7O1FBQ0csZ0JBQWdCLEdBQUcsZUFBZTtTQUNuQyw4QkFBOEIsQ0FBQywwQkFBMEIsQ0FBQztJQUU3RCxPQUFPLGNBQWMsQ0FDbkIsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixnQkFBZ0IsQ0FDakIsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSwgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgcGx1cmFsaXplXG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnQGNlby9lbnRpdHknXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvcihcbiAgc2VsZWN0b3JTZXJ2aWNlLFxuICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbikge1xuXG4gIGxldCBzaSA9IHtcbiAgICBmZWF0dXJlOiAnY21zJyxcbiAgICBlbnRpdHlUeXBlOiByaS50eXBlLFxuICAgIHNlbGVjdG9yVHlwZTogJ2FsbCdcbiAgfVxuICBsZXQgYmFzZVNlbGVjdG9yID0gc2VsZWN0b3JTZXJ2aWNlXG4gICAgLnNlbGVjdG9yRnJvbVNlbGVjdG9ySWRlbnRpZmllcihzaSlcblxuICB2YXIgdGF4b25vbXlUeXBlID0gcGx1cmFsaXplKHJpLmZpbHRlci50YXhvbm9teSlcbiAgdmFyIHRheG9ub215VmFsdWUgPSByaS5maWx0ZXIudGVybVxuXG4gIC8vIEZpbHRlciBmdW5jdGlvblxuICBsZXQgZmlsdGVyQnlUYXhvbm9teSA9IChzdGF0ZSwgdGF4b25vbXlTdGF0ZSkgPT4ge1xuICAgIGlmKHN0YXRlICYmIHN0YXRlLndoZXJlKSB7XG4gICAgICBsZXQgdGF4b25vbXkgPSB0YXhvbm9teVN0YXRlLmZpbmRCeUF0dHIoJ3NsdWcnLCB0YXhvbm9teVZhbHVlKVxuICAgICAgaWYodGF4b25vbXkpIHtcbiAgICAgICAgbGV0IGZpbHRlciA9IHt9XG4gICAgICAgIGZpbHRlclt0YXhvbm9teVR5cGVdID0gdGF4b25vbXkuaWRcblxuICAgICAgICByZXR1cm4gc3RhdGUud2hlcmUoZmlsdGVyKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5ub25lKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIHNlbGVjdG9yIGZvciB0aGUgdGF4b25vbXlcbiAgbGV0IHRheG9ub215U2VsZWN0b3JJZGVudGlmaWVyID0ge1xuICAgIGZlYXR1cmU6ICdjbXMnLFxuICAgIGVudGl0eVR5cGU6IHRheG9ub215VHlwZSxcbiAgICBzZWxlY3RvclR5cGU6ICdhbGwnXG4gIH1cbiAgbGV0IHRheG9ub215U2VsZWN0b3IgPSBzZWxlY3RvclNlcnZpY2VcbiAgICAuc2VsZWN0b3JGcm9tU2VsZWN0b3JJZGVudGlmaWVyKHRheG9ub215U2VsZWN0b3JJZGVudGlmaWVyKVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBiYXNlU2VsZWN0b3IsXG4gICAgdGF4b25vbXlTZWxlY3RvcixcbiAgICBmaWx0ZXJCeVRheG9ub215LFxuICApXG59XG4iXX0=