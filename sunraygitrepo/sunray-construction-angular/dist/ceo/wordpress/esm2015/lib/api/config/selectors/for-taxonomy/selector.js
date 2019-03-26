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
    let si = {
        feature: 'cms',
        entityType: ri.type,
        selectorType: 'all'
    };
    /** @type {?} */
    let baseSelector = selectorService
        .selectorFromSelectorIdentifier(si);
    /** @type {?} */
    var taxonomyType = pluralize(ri.filter.taxonomy);
    /** @type {?} */
    var taxonomyValue = ri.filter.term
    // Filter function
    ;
    // Filter function
    /** @type {?} */
    let filterByTaxonomy = (state, taxonomyState) => {
        if (state && state.where) {
            /** @type {?} */
            let taxonomy = taxonomyState.findByAttr('slug', taxonomyValue);
            if (taxonomy) {
                /** @type {?} */
                let filter = {};
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
    let taxonomySelectorIdentifier = {
        feature: 'cms',
        entityType: taxonomyType,
        selectorType: 'all'
    };
    /** @type {?} */
    let taxonomySelector = selectorService
        .selectorFromSelectorIdentifier(taxonomySelectorIdentifier);
    return createSelector(baseSelector, taxonomySelector, filterByTaxonomy);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvY29uZmlnL3NlbGVjdG9ycy9mb3ItdGF4b25vbXkvc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBUyxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFBO0FBRXJFLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxXQUFXLENBQUE7Ozs7OztBQU1sQixNQUFNLFVBQVUsUUFBUSxDQUN0QixlQUFlLEVBQ2YsRUFBdUI7O1FBR25CLEVBQUUsR0FBRztRQUNQLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ25CLFlBQVksRUFBRSxLQUFLO0tBQ3BCOztRQUNHLFlBQVksR0FBRyxlQUFlO1NBQy9CLDhCQUE4QixDQUFDLEVBQUUsQ0FBQzs7UUFFakMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7UUFDNUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSTtJQUVsQyxrQkFBa0I7Ozs7UUFDZCxnQkFBZ0IsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFBRTtRQUM5QyxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFOztnQkFDbkIsUUFBUSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQztZQUM5RCxJQUFHLFFBQVEsRUFBRTs7b0JBQ1AsTUFBTSxHQUFHLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUE7Z0JBRWxDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUMzQjtpQkFDSTtnQkFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNwQjtTQUNGO2FBQ0k7WUFDSCxPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQztJQUVELG9DQUFvQzs7OztRQUNoQywwQkFBMEIsR0FBRztRQUMvQixPQUFPLEVBQUUsS0FBSztRQUNkLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFlBQVksRUFBRSxLQUFLO0tBQ3BCOztRQUNHLGdCQUFnQixHQUFHLGVBQWU7U0FDbkMsOEJBQThCLENBQUMsMEJBQTBCLENBQUM7SUFFN0QsT0FBTyxjQUFjLENBQ25CLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsZ0JBQWdCLENBQ2pCLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUsIGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIHBsdXJhbGl6ZVxufSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJ0BjZW8vZW50aXR5J1xuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3IoXG4gIHNlbGVjdG9yU2VydmljZSxcbiAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4pIHtcblxuICBsZXQgc2kgPSB7XG4gICAgZmVhdHVyZTogJ2NtcycsXG4gICAgZW50aXR5VHlwZTogcmkudHlwZSxcbiAgICBzZWxlY3RvclR5cGU6ICdhbGwnXG4gIH1cbiAgbGV0IGJhc2VTZWxlY3RvciA9IHNlbGVjdG9yU2VydmljZVxuICAgIC5zZWxlY3RvckZyb21TZWxlY3RvcklkZW50aWZpZXIoc2kpXG5cbiAgdmFyIHRheG9ub215VHlwZSA9IHBsdXJhbGl6ZShyaS5maWx0ZXIudGF4b25vbXkpXG4gIHZhciB0YXhvbm9teVZhbHVlID0gcmkuZmlsdGVyLnRlcm1cblxuICAvLyBGaWx0ZXIgZnVuY3Rpb25cbiAgbGV0IGZpbHRlckJ5VGF4b25vbXkgPSAoc3RhdGUsIHRheG9ub215U3RhdGUpID0+IHtcbiAgICBpZihzdGF0ZSAmJiBzdGF0ZS53aGVyZSkge1xuICAgICAgbGV0IHRheG9ub215ID0gdGF4b25vbXlTdGF0ZS5maW5kQnlBdHRyKCdzbHVnJywgdGF4b25vbXlWYWx1ZSlcbiAgICAgIGlmKHRheG9ub215KSB7XG4gICAgICAgIGxldCBmaWx0ZXIgPSB7fVxuICAgICAgICBmaWx0ZXJbdGF4b25vbXlUeXBlXSA9IHRheG9ub215LmlkXG5cbiAgICAgICAgcmV0dXJuIHN0YXRlLndoZXJlKGZpbHRlcilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGUubm9uZSgpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IHRoZSBzZWxlY3RvciBmb3IgdGhlIHRheG9ub215XG4gIGxldCB0YXhvbm9teVNlbGVjdG9ySWRlbnRpZmllciA9IHtcbiAgICBmZWF0dXJlOiAnY21zJyxcbiAgICBlbnRpdHlUeXBlOiB0YXhvbm9teVR5cGUsXG4gICAgc2VsZWN0b3JUeXBlOiAnYWxsJ1xuICB9XG4gIGxldCB0YXhvbm9teVNlbGVjdG9yID0gc2VsZWN0b3JTZXJ2aWNlXG4gICAgLnNlbGVjdG9yRnJvbVNlbGVjdG9ySWRlbnRpZmllcih0YXhvbm9teVNlbGVjdG9ySWRlbnRpZmllcilcblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgYmFzZVNlbGVjdG9yLFxuICAgIHRheG9ub215U2VsZWN0b3IsXG4gICAgZmlsdGVyQnlUYXhvbm9teSxcbiAgKVxufVxuIl19