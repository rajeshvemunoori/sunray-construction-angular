/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf, } from 'rxjs';
import { RequestCacheService } from '../cache/index';
export class CachingInterceptor {
    /**
     * @param {?} cache
     */
    constructor(cache) {
        this.cache = cache;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (!this.isCachable(req)) {
            return next.handle(req);
        }
        /** @type {?} */
        let cachedResponse = this.cache.get(req);
        //sendRequest(req, next, this.cache)
        return cachedResponse ?
            observableOf(cachedResponse) : next.handle(req);
    }
    /**
     * @private
     * @param {?} req
     * @return {?}
     */
    isCachable(req) {
        return false;
    }
}
CachingInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CachingInterceptor.ctorParameters = () => [
    { type: RequestCacheService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CachingInterceptor.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGluZy1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3JzL2NhY2hpbmctaW50ZXJjZXB0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQU0xQyxPQUFPLEVBRUwsRUFBRSxJQUFJLFlBQVksR0FDbkIsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUdwRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLEtBQTBCO1FBQTFCLFVBQUssR0FBTCxLQUFLLENBQXFCO0lBQUcsQ0FBQzs7Ozs7O0lBRWxELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN4Qjs7WUFFRyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDLG9DQUFvQztRQUNwQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO1lBQ3JCLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsR0FBUTtRQUN6QixPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7OztZQWpCRixVQUFVOzs7O1lBRkYsbUJBQW1COzs7Ozs7O0lBSWQsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IFJlcXVlc3RDYWNoZVNlcnZpY2UgfSBmcm9tICcuLi9jYWNoZS9pbmRleCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhY2hpbmdJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FjaGU6IFJlcXVlc3RDYWNoZVNlcnZpY2UpIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNDYWNoYWJsZShyZXEpKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxuICAgIH1cblxuICAgIGxldCBjYWNoZWRSZXNwb25zZSA9IHRoaXMuY2FjaGUuZ2V0KHJlcSk7XG4gICAgLy9zZW5kUmVxdWVzdChyZXEsIG5leHQsIHRoaXMuY2FjaGUpXG4gICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlID9cbiAgICAgIG9ic2VydmFibGVPZihjYWNoZWRSZXNwb25zZSkgOiBuZXh0LmhhbmRsZShyZXEpXG4gIH1cblxuICBwcml2YXRlIGlzQ2FjaGFibGUocmVxOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl19