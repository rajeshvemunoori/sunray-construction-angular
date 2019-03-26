/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @DEEPAK @JEETHU
// For some reason, the angular console which watches
// the files won't properly re-compile when files
// are changed instead, for the time being,
// let's keep all the interface definitions in the main index file.
/**
 * @record
 */
export function iResponseParser() { }
if (false) {
    /**
     * @param {?} data
     * @return {?}
     */
    iResponseParser.prototype.parse = function (data) { };
}
/**
 * @record
 */
export function iPane() { }
if (false) {
    /** @type {?} */
    iPane.prototype.name;
    /** @type {?|undefined} */
    iPane.prototype.componentClass;
    /** @type {?|undefined} */
    iPane.prototype.componentFactory;
    /** @type {?} */
    iPane.prototype.active;
    /** @type {?} */
    iPane.prototype.directive;
}
/**
 * @record
 */
export function iPaneProvider() { }
if (false) {
    /** @type {?} */
    iPaneProvider.prototype.panes$;
}
/**
 * @record
 */
export function iPaneFactory() { }
if (false) {
    /**
     * @return {?}
     */
    iPaneFactory.prototype.build$ = function () { };
}
/**
 * @record
 */
export function iPaneManager() { }
if (false) {
    /**
     * @return {?}
     */
    iPaneManager.prototype.activePane$ = function () { };
    /**
     * @param {?} pane
     * @return {?}
     */
    iPaneManager.prototype.deactivatePane$ = function (pane) { };
}
/**
 * @record
 */
export function iCard() { }
if (false) {
    /** @type {?} */
    iCard.prototype.data;
    /** @type {?} */
    iCard.prototype.title;
    /** @type {?|undefined} */
    iCard.prototype.iconName;
}
/**
 * @record
 * @template T
 */
export function iMap() { }
/**
 * @record
 * @template T
 */
export function iConstructor() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBV0EscUNBRUM7Ozs7OztJQURDLHNEQUFzQjs7Ozs7QUFHeEIsMkJBTUM7OztJQUxDLHFCQUFZOztJQUNaLCtCQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0Qix1QkFBZTs7SUFDZiwwQkFBaUI7Ozs7O0FBR25CLG1DQUVDOzs7SUFEQywrQkFBMkI7Ozs7O0FBRzdCLGtDQUVDOzs7OztJQURDLGdEQUE2Qjs7Ozs7QUFHL0Isa0NBR0M7Ozs7O0lBRkMscURBQWdDOzs7OztJQUNoQyw2REFBNkM7Ozs7O0FBRy9DLDJCQUlDOzs7SUFIQyxxQkFBUzs7SUFDVCxzQkFBYTs7SUFDYix5QkFBaUI7Ozs7OztBQUduQiwwQkFFQzs7Ozs7QUFFRCxrQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBERUVQQUsgQEpFRVRIVVxuLy8gRm9yIHNvbWUgcmVhc29uLCB0aGUgYW5ndWxhciBjb25zb2xlIHdoaWNoIHdhdGNoZXNcbi8vIHRoZSBmaWxlcyB3b24ndCBwcm9wZXJseSByZS1jb21waWxlIHdoZW4gZmlsZXNcbi8vIGFyZSBjaGFuZ2VkIGluc3RlYWQsIGZvciB0aGUgdGltZSBiZWluZyxcbi8vIGxldCdzIGtlZXAgYWxsIHRoZSBpbnRlcmZhY2UgZGVmaW5pdGlvbnMgaW4gdGhlIG1haW4gaW5kZXggZmlsZS5cblxuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIGlSZXNwb25zZVBhcnNlciB7XG4gIHBhcnNlKGRhdGE6IGFueSk6IGFueSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpUGFuZSB7XG4gIG5hbWU6IHN0cmluZ1xuICBjb21wb25lbnRDbGFzcz86IGFueVxuICBjb21wb25lbnRGYWN0b3J5PzogYW55XG4gIGFjdGl2ZTogYm9vbGVhblxuICBkaXJlY3RpdmU6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlQYW5lUHJvdmlkZXIge1xuICBwYW5lcyQ6IE9ic2VydmFibGU8aVBhbmVbXT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBpUGFuZUZhY3Rvcnkge1xuICBidWlsZCQoKTogT2JzZXJ2YWJsZTxpUGFuZVtdPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlQYW5lTWFuYWdlciB7XG4gIGFjdGl2ZVBhbmUkKCk6IE9ic2VydmFibGU8aVBhbmU+XG4gIGRlYWN0aXZhdGVQYW5lJChwYW5lOiBpUGFuZSk6IE9ic2VydmFibGU8YW55PlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlDYXJkIHtcbiAgZGF0YTogYW55XG4gIHRpdGxlOiBzdHJpbmdcbiAgaWNvbk5hbWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBpTWFwPFQ+IHtcbiAgW2tleTogc3RyaW5nXTogVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlDb25zdHJ1Y3RvcjxUPiB7XG4gIG5ldyguLi5hcmdzKTogVCBcbn1cblxuIl19