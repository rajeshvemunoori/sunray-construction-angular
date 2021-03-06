/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createSelector } from '@ngrx/store';
/** @type {?} */
export var buildFindSelector = function (selector, ri, findPropPath) {
    if (findPropPath === void 0) { findPropPath = 'id'; }
    /** @type {?} */
    var find = function (state) {
        return state.find(_.get(ri, findPropPath));
    };
    return createSelector(selector, find);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmluZC1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL3NlbGVjdG9ycy9idWlsZC1maW5kLXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQVMsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQTs7QUFRckUsTUFBTSxLQUFPLGlCQUFpQixHQUFHLFVBQy9CLFFBQVEsRUFDUixFQUF1QixFQUN2QixZQUEyQjtJQUEzQiw2QkFBQSxFQUFBLG1CQUEyQjs7UUFHdkIsSUFBSSxHQUFHLFVBQUMsS0FBVTtRQUNwQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsT0FBTyxjQUFjLENBQ25CLFFBQVEsRUFDUixJQUFJLENBQ0wsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgU3RvcmUsIGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTdGF0ZSxcbiAgaUVudGl0eSxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNvbnN0IGJ1aWxkRmluZFNlbGVjdG9yID0gKFxuICBzZWxlY3RvcixcbiAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGZpbmRQcm9wUGF0aDogc3RyaW5nID0gJ2lkJ1xuKSA9PiB7XG5cbiAgbGV0IGZpbmQgPSAoc3RhdGU6IGFueSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5maW5kKF8uZ2V0KHJpLCBmaW5kUHJvcFBhdGgpKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdG9yLFxuICAgIGZpbmQsXG4gIClcbn1cbiJdfQ==