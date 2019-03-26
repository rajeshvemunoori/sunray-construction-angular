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
const typeCache = {};
/**
 * @template T
 * @param {?} label
 * @return {?}
 */
export function type(label) {
    if (typeCache[(/** @type {?} */ (label))]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }
    typeCache[(/** @type {?} */ (label))] = true;
    return (/** @type {?} */ (label));
}
/** @type {?} */
const typeForCache = {};
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
        typeForCache[slice][action] = `[${slice}] ${action}`;
        type(typeForCache[slice][action]);
        return typeForCache[slice][action];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1mb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3N0YXRlLyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvYWN0aW9ucy9zbGljZS90eXBlLWZvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztNQVlNLFNBQVMsR0FBaUMsRUFBRTs7Ozs7O0FBRWxELE1BQU0sVUFBVSxJQUFJLENBQUksS0FBYTtJQUNuQyxJQUFJLFNBQVMsQ0FBQyxtQkFBUSxLQUFLLEVBQUEsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEtBQUssa0JBQWtCLENBQUMsQ0FBQztLQUMxRDtJQUVELFNBQVMsQ0FBQyxtQkFBUSxLQUFLLEVBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUVoQyxPQUFPLG1CQUFHLEtBQUssRUFBQSxDQUFDO0FBQ2xCLENBQUM7O01BRUssWUFBWSxHQUFzRCxFQUFFOzs7Ozs7OztBQUkxRSxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWEsRUFBRSxNQUFjO0lBQ25ELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN0RCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQztTQUNJO1FBQ0gsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb2VyY2VzIGEgc3RyaW5nIGludG8gYSBzdHJpbmcgbGl0ZXJhbCB0eXBlLlxuICogVXNpbmcgdGFnZ2VkIHVuaW9uIHR5cGVzIGluIFR5cGVTY3JpcHQgMi4wLCB0aGlzIGVuYWJsZXNcbiAqIHBvd2VyZnVsIHR5cGVjaGVja2luZyBvZiBvdXIgcmVkdWNlcnMuXG4gKlxuICogU2luY2UgZXZlcnkgYWN0aW9uIGxhYmVsIHBhc3NlcyB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gaXRcbiAqIGlzIGEgZ29vZCBwbGFjZSB0byBlbnN1cmUgYWxsIG9mIG91ciBhY3Rpb24gbGFiZWxzXG4gKiBhcmUgdW5pcXVlLlxuICovXG5cbmNvbnN0IHR5cGVDYWNoZTogeyBbbGFiZWw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZTxUPihsYWJlbDogVCB8ICcnKTogVCB7XG4gIGlmICh0eXBlQ2FjaGVbPHN0cmluZz5sYWJlbF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFjdGlvbiB0eXBlIFwiJHtsYWJlbH1cIiBpcyBub3QgdW5pcXVlXCJgKTtcbiAgfVxuXG4gIHR5cGVDYWNoZVs8c3RyaW5nPmxhYmVsXSA9IHRydWU7XG5cbiAgcmV0dXJuIDxUPmxhYmVsO1xufVxuXG5jb25zdCB0eXBlRm9yQ2FjaGU6IHsgW3NsaWNlOiBzdHJpbmddOiB7IFthY3Rpb246IHN0cmluZ106IHN0cmluZyB9IH0gPSB7fTtcblxuLy8gVGFrZXMgdGhlIHNsaWNlIGtleSArIGFuIGFjdGlvbiBuYW1lXG4vLyBSZXR1cm4gdGhlIFVOSVFVRSBTdHJpbmcgd2hpY2ggZGVmaW5lcyB0aGF0IGFjdGlvbiB0eXBlLlxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGb3Ioc2xpY2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVGb3JDYWNoZVtzbGljZV0gJiYgdHlwZUZvckNhY2hlW3NsaWNlXVthY3Rpb25dKSB7XG4gICAgcmV0dXJuIHR5cGVGb3JDYWNoZVtzbGljZV1bYWN0aW9uXTtcbiAgfVxuICBlbHNlIHtcbiAgICB0eXBlRm9yQ2FjaGVbc2xpY2VdID0gdHlwZUZvckNhY2hlW3NsaWNlXSB8fCB7fTtcbiAgICB0eXBlRm9yQ2FjaGVbc2xpY2VdW2FjdGlvbl0gPSBgWyR7c2xpY2V9XSAke2FjdGlvbn1gO1xuICAgIHR5cGUodHlwZUZvckNhY2hlW3NsaWNlXVthY3Rpb25dKTtcbiAgICByZXR1cm4gdHlwZUZvckNhY2hlW3NsaWNlXVthY3Rpb25dO1xuICB9XG59XG4iXX0=