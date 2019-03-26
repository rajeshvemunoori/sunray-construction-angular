/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 * @type {?}
 */
var typeCache = {};
/**
 * @template T
 * @param {?} label
 * @return {?}
 */
export function type(label) {
    if (typeCache[(/** @type {?} */ (label))]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[(/** @type {?} */ (label))] = true;
    return (/** @type {?} */ (label));
}
/** @type {?} */
var typeForCache = {};
// Takes the slice key + an action name
// Return the UNIQUE String which defines that action type.
/**
 * @param {?} slice
 * @param {?} action
 * @return {?}
 */
export function typeFor(slice, action) {
    if (typeForCache[slice] && typeForCache[slice][action]) {
        return typeForCache[slice][action];
    }
    else {
        typeForCache[slice] = typeForCache[slice] || {};
        typeForCache[slice][action] = "[" + slice + "] " + action;
        type(typeForCache[slice][action]);
        return typeForCache[slice][action];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1mb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3N0YXRlLyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvYWN0aW9ucy9zbGljZS90eXBlLWZvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQVlNLFNBQVMsR0FBaUMsRUFBRTs7Ozs7O0FBRWxELE1BQU0sVUFBVSxJQUFJLENBQUksS0FBYTtJQUNuQyxJQUFJLFNBQVMsQ0FBQyxtQkFBUSxLQUFLLEVBQUEsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQWdCLEtBQUssdUJBQWtCLENBQUMsQ0FBQztLQUMxRDtJQUVELFNBQVMsQ0FBQyxtQkFBUSxLQUFLLEVBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUVoQyxPQUFPLG1CQUFHLEtBQUssRUFBQSxDQUFDO0FBQ2xCLENBQUM7O0lBRUssWUFBWSxHQUFzRCxFQUFFOzs7Ozs7OztBQUkxRSxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWEsRUFBRSxNQUFjO0lBQ25ELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN0RCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQztTQUNJO1FBQ0gsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQUksS0FBSyxVQUFLLE1BQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29lcmNlcyBhIHN0cmluZyBpbnRvIGEgc3RyaW5nIGxpdGVyYWwgdHlwZS5cbiAqIFVzaW5nIHRhZ2dlZCB1bmlvbiB0eXBlcyBpbiBUeXBlU2NyaXB0IDIuMCwgdGhpcyBlbmFibGVzXG4gKiBwb3dlcmZ1bCB0eXBlY2hlY2tpbmcgb2Ygb3VyIHJlZHVjZXJzLlxuICpcbiAqIFNpbmNlIGV2ZXJ5IGFjdGlvbiBsYWJlbCBwYXNzZXMgdGhyb3VnaCB0aGlzIGZ1bmN0aW9uIGl0XG4gKiBpcyBhIGdvb2QgcGxhY2UgdG8gZW5zdXJlIGFsbCBvZiBvdXIgYWN0aW9uIGxhYmVsc1xuICogYXJlIHVuaXF1ZS5cbiAqL1xuXG5jb25zdCB0eXBlQ2FjaGU6IHsgW2xhYmVsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGU8VD4obGFiZWw6IFQgfCAnJyk6IFQge1xuICBpZiAodHlwZUNhY2hlWzxzdHJpbmc+bGFiZWxdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBY3Rpb24gdHlwZSBcIiR7bGFiZWx9XCIgaXMgbm90IHVuaXF1ZVwiYCk7XG4gIH1cblxuICB0eXBlQ2FjaGVbPHN0cmluZz5sYWJlbF0gPSB0cnVlO1xuXG4gIHJldHVybiA8VD5sYWJlbDtcbn1cblxuY29uc3QgdHlwZUZvckNhY2hlOiB7IFtzbGljZTogc3RyaW5nXTogeyBbYWN0aW9uOiBzdHJpbmddOiBzdHJpbmcgfSB9ID0ge307XG5cbi8vIFRha2VzIHRoZSBzbGljZSBrZXkgKyBhbiBhY3Rpb24gbmFtZVxuLy8gUmV0dXJuIHRoZSBVTklRVUUgU3RyaW5nIHdoaWNoIGRlZmluZXMgdGhhdCBhY3Rpb24gdHlwZS5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRm9yKHNsaWNlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSB7XG4gIGlmICh0eXBlRm9yQ2FjaGVbc2xpY2VdICYmIHR5cGVGb3JDYWNoZVtzbGljZV1bYWN0aW9uXSkge1xuICAgIHJldHVybiB0eXBlRm9yQ2FjaGVbc2xpY2VdW2FjdGlvbl07XG4gIH1cbiAgZWxzZSB7XG4gICAgdHlwZUZvckNhY2hlW3NsaWNlXSA9IHR5cGVGb3JDYWNoZVtzbGljZV0gfHwge307XG4gICAgdHlwZUZvckNhY2hlW3NsaWNlXVthY3Rpb25dID0gYFske3NsaWNlfV0gJHthY3Rpb259YDtcbiAgICB0eXBlKHR5cGVGb3JDYWNoZVtzbGljZV1bYWN0aW9uXSk7XG4gICAgcmV0dXJuIHR5cGVGb3JDYWNoZVtzbGljZV1bYWN0aW9uXTtcbiAgfVxufVxuIl19