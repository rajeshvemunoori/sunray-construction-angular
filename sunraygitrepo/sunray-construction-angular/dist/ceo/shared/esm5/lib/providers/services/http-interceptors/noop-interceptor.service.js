/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Pass untouched request through to the next request handler.
 */
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor.decorators = [
        { type: Injectable }
    ];
    return NoopInterceptor;
}());
export { NoopInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3JzL25vb3AtaW50ZXJjZXB0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7OztBQVUxQztJQUFBO0lBU0EsQ0FBQzs7Ozs7O0lBUEMsbUNBQVM7Ozs7O0lBQVQsVUFDRSxHQUFxQixFQUNyQixJQUFpQjtRQUdqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekIsQ0FBQzs7Z0JBUkYsVUFBVTs7SUFTWCxzQkFBQztDQUFBLEFBVEQsSUFTQztTQVJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuXG5cbi8qKiBQYXNzIHVudG91Y2hlZCByZXF1ZXN0IHRocm91Z2ggdG8gdGhlIG5leHQgcmVxdWVzdCBoYW5kbGVyLiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vb3BJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGludGVyY2VwdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgfVxufVxuIl19