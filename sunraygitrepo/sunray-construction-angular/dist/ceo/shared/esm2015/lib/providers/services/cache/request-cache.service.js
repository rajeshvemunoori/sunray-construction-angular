/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class RequestCacheService {
    constructor() {
        this.cacheEntries = [];
    }
    /**
     * @param {?} req
     * @return {?}
     */
    get(req) {
        return undefined;
    }
    /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    put(req, response) {
        /** @type {?} */
        let cacheKey = 1;
        /** @type {?} */
        let cacheEntry = {
            url: '',
            response: response,
            lastRead: 1,
        };
        this.cacheEntries[cacheKey] = cacheEntry;
    }
}
RequestCacheService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RequestCacheService.prototype.cacheEntries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1jYWNoZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2NhY2hlL3JlcXVlc3QtY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQWtCMUMsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVVLGlCQUFZLEdBQXlCLEVBQUUsQ0FBQTtJQWVqRCxDQUFDOzs7OztJQWJDLEdBQUcsQ0FBQyxHQUFxQjtRQUN2QixPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBcUIsRUFBRSxRQUEyQjs7WUFDaEQsUUFBUSxHQUFHLENBQUM7O1lBQ1osVUFBVSxHQUFHO1lBQ2YsR0FBRyxFQUFFLEVBQUU7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUE7SUFDMUMsQ0FBQzs7O1lBaEJGLFVBQVU7Ozs7Ozs7SUFFVCwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIEh0dHBSZXNwb25zZSwgSHR0cFJlcXVlc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5cblxuaW1wb3J0IHtcbiAgaVJlcXVlc3RDYWNoZVNlcnZpY2UsXG4gIGlSZXF1ZXN0Q2FjaGVFbnRyeSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IHR5cGUgQ2FjaGVFbnRyeVJlc3BvbnNlID1cbiAgSHR0cFJlc3BvbnNlPGFueT4gfCB1bmRlZmluZWRcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBpUmVxdWVzdENhY2hlU2VydmljZSB7XG4gIHByaXZhdGUgY2FjaGVFbnRyaWVzOiBpUmVxdWVzdENhY2hlRW50cnlbXSA9IFtdXG5cbiAgZ2V0KHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IENhY2hlRW50cnlSZXNwb25zZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcHV0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KTogdm9pZCB7XG4gICAgbGV0IGNhY2hlS2V5ID0gMVxuICAgIGxldCBjYWNoZUVudHJ5ID0ge1xuICAgICAgdXJsOiAnJyxcbiAgICAgIHJlc3BvbnNlOiByZXNwb25zZSxcbiAgICAgIGxhc3RSZWFkOiAxLFxuICAgIH1cbiAgICB0aGlzLmNhY2hlRW50cmllc1tjYWNoZUtleV0gPSBjYWNoZUVudHJ5XG4gIH1cbn1cbiJdfQ==