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
 */
/** @type {?} */
var typeCache = {};
/**
 * @template T
 * @param {?} label
 * @return {?}
 */
export function type(label) {
    if (typeCache[(/** @type {?} */ (label))]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[(/** @type {?} */ (label))] = true;
    return (/** @type {?} */ (label));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBVUksU0FBUyxHQUFpQyxFQUFFOzs7Ozs7QUFDaEQsTUFBTSxVQUFVLElBQUksQ0FBSSxLQUFhO0lBQ25DLElBQUksU0FBUyxDQUFDLG1CQUFRLEtBQUssRUFBQSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBZ0IsS0FBSyx1QkFBa0IsQ0FBQyxDQUFDO0tBQzFEO0lBRUQsU0FBUyxDQUFDLG1CQUFRLEtBQUssRUFBQSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRWhDLE9BQU8sbUJBQUcsS0FBSyxFQUFBLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb2VyY2VzIGEgc3RyaW5nIGludG8gYSBzdHJpbmcgbGl0ZXJhbCB0eXBlLlxuICogVXNpbmcgdGFnZ2VkIHVuaW9uIHR5cGVzIGluIFR5cGVTY3JpcHQgMi4wLCB0aGlzIGVuYWJsZXNcbiAqIHBvd2VyZnVsIHR5cGVjaGVja2luZyBvZiBvdXIgcmVkdWNlcnMuXG4gKiBcbiAqIFNpbmNlIGV2ZXJ5IGFjdGlvbiBsYWJlbCBwYXNzZXMgdGhyb3VnaCB0aGlzIGZ1bmN0aW9uIGl0XG4gKiBpcyBhIGdvb2QgcGxhY2UgdG8gZW5zdXJlIGFsbCBvZiBvdXIgYWN0aW9uIGxhYmVsc1xuICogYXJlIHVuaXF1ZS5cbiAqL1xuXG5sZXQgdHlwZUNhY2hlOiB7IFtsYWJlbDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5leHBvcnQgZnVuY3Rpb24gdHlwZTxUPihsYWJlbDogVCB8ICcnKTogVCB7XG4gIGlmICh0eXBlQ2FjaGVbPHN0cmluZz5sYWJlbF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFjdGlvbiB0eXBlIFwiJHtsYWJlbH1cIiBpcyBub3QgdW5xaXVlXCJgKTtcbiAgfVxuXG4gIHR5cGVDYWNoZVs8c3RyaW5nPmxhYmVsXSA9IHRydWU7XG5cbiAgcmV0dXJuIDxUPmxhYmVsO1xufVxuIl19