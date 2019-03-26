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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtcm9vdC1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL3NlbGVjdG9ycy9idWlsZC1yb290LXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsT0FBTyxHQUNSLE1BQU0sYUFBYSxDQUFBOztBQUVwQixNQUFNLEtBQU8saUJBQWlCLEdBQUcsVUFDL0IsZUFBZSxFQUNmLGNBQWM7O1FBR1YsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7UUFDM0UsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFFN0UsT0FBTztRQUNMLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgY29tcG9zZSxcbn0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmV4cG9ydCBjb25zdCBidWlsZFJvb3RTZWxlY3RvciA9IChcbiAgZmVhdHVyZVNlbGVjdG9yLFxuICBlbnRpdHlTZWxlY3RvclxuKSA9PiB7XG5cbiAgbGV0IHJvb3RTZWxlY3Rvck5hbWUgPSBfLmpvaW4oW2ZlYXR1cmVTZWxlY3Rvci5uYW1lLCBlbnRpdHlTZWxlY3Rvci5uYW1lXSwgJy4nKVxuICBsZXQgcm9vdFNlbGVjdG9yID0gY29tcG9zZShlbnRpdHlTZWxlY3Rvci5zZWxlY3RvciwgZmVhdHVyZVNlbGVjdG9yLnNlbGVjdG9yKVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcm9vdFNlbGVjdG9yTmFtZSxcbiAgICBzZWxlY3Rvcjogcm9vdFNlbGVjdG9yLFxuICB9XG59XG4iXX0=