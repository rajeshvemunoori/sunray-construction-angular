/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
/** @type {?} */
export var buildFilterSelector = function (selector, filter) {
    /** @type {?} */
    var filterState = function (state) {
        if (state && state.where) {
            return state.where(filter);
        }
        else {
            return state;
        }
    };
    return createSelector(selector, filterState);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmlsdGVyLXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLWZpbHRlci1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFTLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUE7O0FBUXJFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxVQUFDLFFBQVEsRUFBRSxNQUFNOztRQUU5QyxXQUFXLEdBQUcsVUFBQyxLQUFVO1FBQzNCLElBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzNCO2FBQ0k7WUFDSCxPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQztJQUVELE9BQU8sY0FBYyxDQUNuQixRQUFRLEVBQ1IsV0FBVyxDQUNaLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IFN0b3JlLCBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5U3RhdGUsXG4gIGlFbnRpdHksXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cblxuZXhwb3J0IGNvbnN0IGJ1aWxkRmlsdGVyU2VsZWN0b3IgPSAoc2VsZWN0b3IsIGZpbHRlcikgPT4ge1xuXG4gIGxldCBmaWx0ZXJTdGF0ZSA9IChzdGF0ZTogYW55KSA9PiB7XG4gICAgaWYoc3RhdGUgJiYgc3RhdGUud2hlcmUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS53aGVyZShmaWx0ZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdG9yLFxuICAgIGZpbHRlclN0YXRlLFxuICApXG59XG4iXX0=