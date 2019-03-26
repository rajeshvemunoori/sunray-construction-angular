/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { compose, } from '@ngrx/store';
/** @type {?} */
export var buildRootSelector = function (featureSelector, entitySelector) {
    /** @type {?} */
    var rootSelectorName = _.join([featureSelector.name, entitySelector.name], '.');
    /** @type {?} */
    var rootSelector = compose(entitySelector.selector, featureSelector.selector);
    return {
        name: rootSelectorName,
        selector: rootSelector,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcm9vdC1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLXJvb3Qtc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxPQUFPLEdBQ1IsTUFBTSxhQUFhLENBQUE7O0FBRXBCLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxVQUMvQixlQUFlLEVBQ2YsY0FBYzs7UUFHVixnQkFBZ0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDOztRQUMzRSxZQUFZLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUU3RSxPQUFPO1FBQ0wsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixRQUFRLEVBQUUsWUFBWTtLQUN2QixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBjb21wb3NlLFxufSBmcm9tICdAbmdyeC9zdG9yZSdcblxuZXhwb3J0IGNvbnN0IGJ1aWxkUm9vdFNlbGVjdG9yID0gKFxuICBmZWF0dXJlU2VsZWN0b3IsXG4gIGVudGl0eVNlbGVjdG9yXG4pID0+IHtcblxuICBsZXQgcm9vdFNlbGVjdG9yTmFtZSA9IF8uam9pbihbZmVhdHVyZVNlbGVjdG9yLm5hbWUsIGVudGl0eVNlbGVjdG9yLm5hbWVdLCAnLicpXG4gIGxldCByb290U2VsZWN0b3IgPSBjb21wb3NlKGVudGl0eVNlbGVjdG9yLnNlbGVjdG9yLCBmZWF0dXJlU2VsZWN0b3Iuc2VsZWN0b3IpXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiByb290U2VsZWN0b3JOYW1lLFxuICAgIHNlbGVjdG9yOiByb290U2VsZWN0b3IsXG4gIH1cbn1cbiJdfQ==