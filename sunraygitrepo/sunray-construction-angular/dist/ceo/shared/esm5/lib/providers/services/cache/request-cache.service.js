/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var RequestCacheService = /** @class */ (function () {
    function RequestCacheService() {
        this.cacheEntries = [];
    }
    /**
     * @param {?} req
     * @return {?}
     */
    RequestCacheService.prototype.get = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return undefined;
    };
    /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    RequestCacheService.prototype.put = /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    function (req, response) {
        /** @type {?} */
        var cacheKey = 1;
        /** @type {?} */
        var cacheEntry = {
            url: '',
            response: response,
            lastRead: 1,
        };
        this.cacheEntries[cacheKey] = cacheEntry;
    };
    RequestCacheService.decorators = [
        { type: Injectable }
    ];
    return RequestCacheService;
}());
export { RequestCacheService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RequestCacheService.prototype.cacheEntries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1jYWNoZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2NhY2hlL3JlcXVlc3QtY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQWlCMUM7SUFBQTtRQUVVLGlCQUFZLEdBQXlCLEVBQUUsQ0FBQTtJQWVqRCxDQUFDOzs7OztJQWJDLGlDQUFHOzs7O0lBQUgsVUFBSSxHQUFxQjtRQUN2QixPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDOzs7Ozs7SUFFRCxpQ0FBRzs7Ozs7SUFBSCxVQUFJLEdBQXFCLEVBQUUsUUFBMkI7O1lBQ2hELFFBQVEsR0FBRyxDQUFDOztZQUNaLFVBQVUsR0FBRztZQUNmLEdBQUcsRUFBRSxFQUFFO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLENBQUM7U0FDWjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFBO0lBQzFDLENBQUM7O2dCQWhCRixVQUFVOztJQWlCWCwwQkFBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLG1CQUFtQjs7Ozs7O0lBQzlCLDJDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgSHR0cFJlc3BvbnNlLCBIdHRwUmVxdWVzdFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcblxuXG5pbXBvcnQge1xuICBpUmVxdWVzdENhY2hlU2VydmljZSxcbiAgaVJlcXVlc3RDYWNoZUVudHJ5LFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgdHlwZSBDYWNoZUVudHJ5UmVzcG9uc2UgPVxuICBIdHRwUmVzcG9uc2U8YW55PiB8IHVuZGVmaW5lZFxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVxdWVzdENhY2hlU2VydmljZSBpbXBsZW1lbnRzIGlSZXF1ZXN0Q2FjaGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjYWNoZUVudHJpZXM6IGlSZXF1ZXN0Q2FjaGVFbnRyeVtdID0gW11cblxuICBnZXQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogQ2FjaGVFbnRyeVJlc3BvbnNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBwdXQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4pOiB2b2lkIHtcbiAgICBsZXQgY2FjaGVLZXkgPSAxXG4gICAgbGV0IGNhY2hlRW50cnkgPSB7XG4gICAgICB1cmw6ICcnLFxuICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgbGFzdFJlYWQ6IDEsXG4gICAgfVxuICAgIHRoaXMuY2FjaGVFbnRyaWVzW2NhY2hlS2V5XSA9IGNhY2hlRW50cnlcbiAgfVxufVxuIl19