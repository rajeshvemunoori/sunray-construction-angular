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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcm9vdC1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLXJvb3Qtc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxPQUFPLEdBQ1IsTUFBTSxhQUFhLENBQUE7O0FBRXBCLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxDQUMvQixlQUFlLEVBQ2YsY0FBYyxFQUNkLEVBQUU7O1FBRUUsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7UUFDM0UsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFFN0UsT0FBTztRQUNMLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgY29tcG9zZSxcbn0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmV4cG9ydCBjb25zdCBidWlsZFJvb3RTZWxlY3RvciA9IChcbiAgZmVhdHVyZVNlbGVjdG9yLFxuICBlbnRpdHlTZWxlY3RvclxuKSA9PiB7XG5cbiAgbGV0IHJvb3RTZWxlY3Rvck5hbWUgPSBfLmpvaW4oW2ZlYXR1cmVTZWxlY3Rvci5uYW1lLCBlbnRpdHlTZWxlY3Rvci5uYW1lXSwgJy4nKVxuICBsZXQgcm9vdFNlbGVjdG9yID0gY29tcG9zZShlbnRpdHlTZWxlY3Rvci5zZWxlY3RvciwgZmVhdHVyZVNlbGVjdG9yLnNlbGVjdG9yKVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcm9vdFNlbGVjdG9yTmFtZSxcbiAgICBzZWxlY3Rvcjogcm9vdFNlbGVjdG9yLFxuICB9XG59XG4iXX0=