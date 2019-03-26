/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createSelector } from '@ngrx/store';
/** @type {?} */
export const buildFindSelector = (selector, ri, findPropPath = 'id') => {
    /** @type {?} */
    let find = (state) => {
        return state.find(_.get(ri, findPropPath));
    };
    return createSelector(selector, find);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmluZC1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL3NlbGVjdG9ycy9idWlsZC1maW5kLXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQVMsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQTs7QUFRckUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLENBQy9CLFFBQVEsRUFDUixFQUF1QixFQUN2QixlQUF1QixJQUFJLEVBQzNCLEVBQUU7O1FBRUUsSUFBSSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELE9BQU8sY0FBYyxDQUNuQixRQUFRLEVBQ1IsSUFBSSxDQUNMLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IFN0b3JlLCBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5U3RhdGUsXG4gIGlFbnRpdHksXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBidWlsZEZpbmRTZWxlY3RvciA9IChcbiAgc2VsZWN0b3IsXG4gIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICBmaW5kUHJvcFBhdGg6IHN0cmluZyA9ICdpZCdcbikgPT4ge1xuXG4gIGxldCBmaW5kID0gKHN0YXRlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuZmluZChfLmdldChyaSwgZmluZFByb3BQYXRoKSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RvcixcbiAgICBmaW5kLFxuICApXG59XG4iXX0=