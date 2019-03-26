/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable, Inject, } from '@angular/core';
import { API_CONFIG, } from '../../../tokens/index';
var RequestUrlBuilder = /** @class */ (function () {
    function RequestUrlBuilder(apiConfig) {
        this.apiConfig = apiConfig;
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    RequestUrlBuilder.prototype.build = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return this.getResourceTypeUrl(ri);
    };
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    RequestUrlBuilder.prototype.getResourceTypeUrl = /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var fragments = [
            this.apiConfig.url,
            this.getResourceTypeUrlFragment(ri),
        ];
        if (this.isSingleResourceRequest(ri)) {
            /** @type {?} */
            var singleRequestFragment = this.singleResourceRequestFragment(ri);
            fragments.push(singleRequestFragment);
        }
        return _.join(fragments, '/');
    };
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    RequestUrlBuilder.prototype.getResourceTypeUrlFragment = /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var resourceType = this.getResourceType(ri);
        /** @type {?} */
        var resourceConfig = resourceType.config;
        return resourceConfig.urlFragment(ri);
    };
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    RequestUrlBuilder.prototype.getResourceType = /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var ofType = function (resourceType) {
            return resourceType.config.hasResourceType(ri);
        };
        return _.find(this.apiConfig.resourceTypes, ofType);
    };
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    RequestUrlBuilder.prototype.isSingleResourceRequest = /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return !_.isNil(ri.id);
    };
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    RequestUrlBuilder.prototype.singleResourceRequestFragment = /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return ri.id;
    };
    RequestUrlBuilder.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RequestUrlBuilder.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG,] }] }
    ]; };
    return RequestUrlBuilder;
}());
export { RequestUrlBuilder };
if (false) {
    /** @type {?} */
    RequestUrlBuilder.prototype.apiConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11cmwtYnVpbGRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2FwaS9iYXNlL3JlcXVlc3QtdXJsLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLFVBQVUsRUFBRSxNQUFNLEdBQ25CLE1BQU0sZUFBZSxDQUFBO0FBV3RCLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSx1QkFBdUIsQ0FBQTtBQUU5QjtJQUVFLDJCQUM2QixTQUFTO1FBQVQsY0FBUyxHQUFULFNBQVMsQ0FBQTtJQUNsQyxDQUFDOzs7OztJQUVMLGlDQUFLOzs7O0lBQUwsVUFBTSxFQUEwQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNwQyxDQUFDOzs7Ozs7SUFFUyw4Q0FBa0I7Ozs7O0lBQTVCLFVBQTZCLEVBQTBCOztZQUNqRCxTQUFTLEdBQUc7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxFQUFFOztnQkFDL0IscUJBQXFCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEVBQUUsQ0FBQztZQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7U0FDdEM7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7Ozs7OztJQUVTLHNEQUEwQjs7Ozs7SUFBcEMsVUFBcUMsRUFBMEI7O1lBQ3pELFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQzs7WUFDdkMsY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNO1FBQ3hDLE9BQU8sY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7Ozs7SUFFUywyQ0FBZTs7Ozs7SUFBekIsVUFDRSxFQUEwQjs7WUFHdEIsTUFBTSxHQUFHLFVBQUMsWUFBb0M7WUFDaEQsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNoRCxDQUFDO1FBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3JELENBQUM7Ozs7OztJQUVTLG1EQUF1Qjs7Ozs7SUFBakMsVUFBa0MsRUFBMEI7UUFDMUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3hCLENBQUM7Ozs7OztJQUVTLHlEQUE2Qjs7Ozs7SUFBdkMsVUFBd0MsRUFBMEI7UUFDaEUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFBO0lBQ2QsQ0FBQzs7Z0JBL0NGLFVBQVU7Ozs7Z0RBR04sTUFBTSxTQUFDLFVBQVU7O0lBNkN0Qix3QkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLGlCQUFpQjs7O0lBRTFCLHNDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBJbmplY3RhYmxlLCBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEFwaVVybCxcbiAgaUFwaUNvbmZpZyxcbiAgaUFwaVVybFByb3ZpZGVyLFxuICBpQXBpUXVlcnlQYXJhbXMsXG4gIGlBcGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlBcGlSZXNvdXJjZVR5cGVDb25maWcsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEFQSV9DT05GSUcsXG59IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pbmRleCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RVcmxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChBUElfQ09ORklHKSBwdWJsaWMgYXBpQ29uZmlnLFxuICApIHsgfVxuXG4gIGJ1aWxkKHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKTogQXBpVXJsIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZVR5cGVVcmwocmkpXG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UmVzb3VyY2VUeXBlVXJsKHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKTogQXBpVXJsIHtcbiAgICBsZXQgZnJhZ21lbnRzID0gW1xuICAgICAgdGhpcy5hcGlDb25maWcudXJsLFxuICAgICAgdGhpcy5nZXRSZXNvdXJjZVR5cGVVcmxGcmFnbWVudChyaSksXG4gICAgXVxuXG4gICAgaWYodGhpcy5pc1NpbmdsZVJlc291cmNlUmVxdWVzdChyaSkpIHtcbiAgICAgIGxldCBzaW5nbGVSZXF1ZXN0RnJhZ21lbnQgPSB0aGlzLnNpbmdsZVJlc291cmNlUmVxdWVzdEZyYWdtZW50KHJpKVxuICAgICAgZnJhZ21lbnRzLnB1c2goc2luZ2xlUmVxdWVzdEZyYWdtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBfLmpvaW4oZnJhZ21lbnRzLCAnLycpXG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UmVzb3VyY2VUeXBlVXJsRnJhZ21lbnQocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpOiBhbnkge1xuICAgIGxldCByZXNvdXJjZVR5cGUgPSB0aGlzLmdldFJlc291cmNlVHlwZShyaSlcbiAgICBsZXQgcmVzb3VyY2VDb25maWcgPSByZXNvdXJjZVR5cGUuY29uZmlnXG4gICAgcmV0dXJuIHJlc291cmNlQ29uZmlnLnVybEZyYWdtZW50KHJpKVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFJlc291cmNlVHlwZShcbiAgICByaTogaUFwaVJlc291cmNlSWRlbnRpZmllcixcbiAgKTogaUFwaVJlc291cmNlVHlwZUNvbmZpZyB7XG5cbiAgICBsZXQgb2ZUeXBlID0gKHJlc291cmNlVHlwZTogaUFwaVJlc291cmNlVHlwZUNvbmZpZykgPT4ge1xuICAgICAgcmV0dXJuIHJlc291cmNlVHlwZS5jb25maWcuaGFzUmVzb3VyY2VUeXBlKHJpKVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5hcGlDb25maWcucmVzb3VyY2VUeXBlcywgb2ZUeXBlKVxuICB9XG5cbiAgcHJvdGVjdGVkIGlzU2luZ2xlUmVzb3VyY2VSZXF1ZXN0KHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFfLmlzTmlsKHJpLmlkKVxuICB9XG5cbiAgcHJvdGVjdGVkIHNpbmdsZVJlc291cmNlUmVxdWVzdEZyYWdtZW50KHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmkuaWRcbiAgfVxufVxuIl19