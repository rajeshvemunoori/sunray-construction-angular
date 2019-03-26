/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { compose, } from '@ngrx/store';
/** @type {?} */
export const buildRootSelector = (featureSelector, entitySelector) => {
    /** @type {?} */
    let rootSelectorName = _.join([featureSelector.name, entitySelector.name], '.');
    /** @type {?} */
    let rootSelector = compose(entitySelector.selector, featureSelector.selector);
    return {
        name: rootSelectorName,
        selector: rootSelector,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcm9vdC1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL3NlbGVjdG9ycy9idWlsZC1yb290LXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsT0FBTyxHQUNSLE1BQU0sYUFBYSxDQUFBOztBQUVwQixNQUFNLE9BQU8saUJBQWlCLEdBQUcsQ0FDL0IsZUFBZSxFQUNmLGNBQWMsRUFDZCxFQUFFOztRQUVFLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7O1FBQzNFLFlBQVksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDO0lBRTdFLE9BQU87UUFDTCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGNvbXBvc2UsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5leHBvcnQgY29uc3QgYnVpbGRSb290U2VsZWN0b3IgPSAoXG4gIGZlYXR1cmVTZWxlY3RvcixcbiAgZW50aXR5U2VsZWN0b3JcbikgPT4ge1xuXG4gIGxldCByb290U2VsZWN0b3JOYW1lID0gXy5qb2luKFtmZWF0dXJlU2VsZWN0b3IubmFtZSwgZW50aXR5U2VsZWN0b3IubmFtZV0sICcuJylcbiAgbGV0IHJvb3RTZWxlY3RvciA9IGNvbXBvc2UoZW50aXR5U2VsZWN0b3Iuc2VsZWN0b3IsIGZlYXR1cmVTZWxlY3Rvci5zZWxlY3RvcilcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IHJvb3RTZWxlY3Rvck5hbWUsXG4gICAgc2VsZWN0b3I6IHJvb3RTZWxlY3RvcixcbiAgfVxufVxuIl19