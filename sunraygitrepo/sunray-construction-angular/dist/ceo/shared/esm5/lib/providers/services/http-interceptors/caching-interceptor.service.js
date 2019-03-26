/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf, } from 'rxjs';
import { RequestCacheService } from '../cache/index';
var CachingInterceptor = /** @class */ (function () {
    function CachingInterceptor(cache) {
        this.cache = cache;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    CachingInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (!this.isCachable(req)) {
            return next.handle(req);
        }
        /** @type {?} */
        var cachedResponse = this.cache.get(req);
        //sendRequest(req, next, this.cache)
        return cachedResponse ?
            observableOf(cachedResponse) : next.handle(req);
    };
    /**
     * @private
     * @param {?} req
     * @return {?}
     */
    CachingInterceptor.prototype.isCachable = /**
     * @private
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return false;
    };
    CachingInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CachingInterceptor.ctorParameters = function () { return [
        { type: RequestCacheService }
    ]; };
    return CachingInterceptor;
}());
export { CachingInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CachingInterceptor.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGluZy1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3JzL2NhY2hpbmctaW50ZXJjZXB0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQU0xQyxPQUFPLEVBRUwsRUFBRSxJQUFJLFlBQVksR0FDbkIsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUVwRDtJQUVFLDRCQUFvQixLQUEwQjtRQUExQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtJQUFHLENBQUM7Ozs7OztJQUVsRCxzQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3hCOztZQUVHLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDeEMsb0NBQW9DO1FBQ3BDLE9BQU8sY0FBYyxDQUFDLENBQUM7WUFDckIsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ25ELENBQUM7Ozs7OztJQUVPLHVDQUFVOzs7OztJQUFsQixVQUFtQixHQUFRO1FBQ3pCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQzs7Z0JBakJGLFVBQVU7Ozs7Z0JBRkYsbUJBQW1COztJQW9CNUIseUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxrQkFBa0I7Ozs7OztJQUNqQixtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgUmVxdWVzdENhY2hlU2VydmljZSB9IGZyb20gJy4uL2NhY2hlL2luZGV4J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FjaGluZ0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYWNoZTogUmVxdWVzdENhY2hlU2VydmljZSkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xuICAgIGlmICghdGhpcy5pc0NhY2hhYmxlKHJlcSkpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgfVxuXG4gICAgbGV0IGNhY2hlZFJlc3BvbnNlID0gdGhpcy5jYWNoZS5nZXQocmVxKTtcbiAgICAvL3NlbmRSZXF1ZXN0KHJlcSwgbmV4dCwgdGhpcy5jYWNoZSlcbiAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2UgP1xuICAgICAgb2JzZXJ2YWJsZU9mKGNhY2hlZFJlc3BvbnNlKSA6IG5leHQuaGFuZGxlKHJlcSlcbiAgfVxuXG4gIHByaXZhdGUgaXNDYWNoYWJsZShyZXE6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG4iXX0=