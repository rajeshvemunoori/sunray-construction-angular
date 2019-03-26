/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable, Inject, } from '@angular/core';
import { API_CONFIG, } from '../../../tokens/index';
export class RequestUrlBuilder {
    /**
     * @param {?} apiConfig
     */
    constructor(apiConfig) {
        this.apiConfig = apiConfig;
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    build(ri) {
        return this.getResourceTypeUrl(ri);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getResourceTypeUrl(ri) {
        /** @type {?} */
        let fragments = [
            this.apiConfig.url,
            this.getResourceTypeUrlFragment(ri),
        ];
        if (this.isSingleResourceRequest(ri)) {
            /** @type {?} */
            let singleRequestFragment = this.singleResourceRequestFragment(ri);
            fragments.push(singleRequestFragment);
        }
        return _.join(fragments, '/');
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getResourceTypeUrlFragment(ri) {
        /** @type {?} */
        let resourceType = this.getResourceType(ri);
        /** @type {?} */
        let resourceConfig = resourceType.config;
        return resourceConfig.urlFragment(ri);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getResourceType(ri) {
        /** @type {?} */
        let ofType = (resourceType) => {
            return resourceType.config.hasResourceType(ri);
        };
        return _.find(this.apiConfig.resourceTypes, ofType);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    isSingleResourceRequest(ri) {
        return !_.isNil(ri.id);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    singleResourceRequestFragment(ri) {
        return ri.id;
    }
}
RequestUrlBuilder.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RequestUrlBuilder.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    RequestUrlBuilder.prototype.apiConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11cmwtYnVpbGRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2FwaS9iYXNlL3JlcXVlc3QtdXJsLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLFVBQVUsRUFBRSxNQUFNLEdBQ25CLE1BQU0sZUFBZSxDQUFBO0FBV3RCLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSx1QkFBdUIsQ0FBQTtBQUc5QixNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQzZCLFNBQVM7UUFBVCxjQUFTLEdBQVQsU0FBUyxDQUFBO0lBQ2xDLENBQUM7Ozs7O0lBRUwsS0FBSyxDQUFDLEVBQTBCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Ozs7OztJQUVTLGtCQUFrQixDQUFDLEVBQTBCOztZQUNqRCxTQUFTLEdBQUc7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxFQUFFOztnQkFDL0IscUJBQXFCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEVBQUUsQ0FBQztZQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7U0FDdEM7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7Ozs7OztJQUVTLDBCQUEwQixDQUFDLEVBQTBCOztZQUN6RCxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7O1lBQ3ZDLGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTTtRQUN4QyxPQUFPLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7O0lBRVMsZUFBZSxDQUN2QixFQUEwQjs7WUFHdEIsTUFBTSxHQUFHLENBQUMsWUFBb0MsRUFBRSxFQUFFO1lBQ3BELE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDaEQsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzs7Ozs7SUFFUyx1QkFBdUIsQ0FBQyxFQUEwQjtRQUMxRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Ozs7O0lBRVMsNkJBQTZCLENBQUMsRUFBMEI7UUFDaEUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFBO0lBQ2QsQ0FBQzs7O1lBL0NGLFVBQVU7Ozs7NENBR04sTUFBTSxTQUFDLFVBQVU7Ozs7SUFBbEIsc0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIEluamVjdGFibGUsIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQXBpVXJsLFxuICBpQXBpQ29uZmlnLFxuICBpQXBpVXJsUHJvdmlkZXIsXG4gIGlBcGlRdWVyeVBhcmFtcyxcbiAgaUFwaVJlc291cmNlSWRlbnRpZmllcixcbiAgaUFwaVJlc291cmNlVHlwZUNvbmZpZyxcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgQVBJX0NPTkZJRyxcbn0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2luZGV4J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVxdWVzdFVybEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFQSV9DT05GSUcpIHB1YmxpYyBhcGlDb25maWcsXG4gICkgeyB9XG5cbiAgYnVpbGQocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpOiBBcGlVcmwge1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlVHlwZVVybChyaSlcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRSZXNvdXJjZVR5cGVVcmwocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpOiBBcGlVcmwge1xuICAgIGxldCBmcmFnbWVudHMgPSBbXG4gICAgICB0aGlzLmFwaUNvbmZpZy51cmwsXG4gICAgICB0aGlzLmdldFJlc291cmNlVHlwZVVybEZyYWdtZW50KHJpKSxcbiAgICBdXG5cbiAgICBpZih0aGlzLmlzU2luZ2xlUmVzb3VyY2VSZXF1ZXN0KHJpKSkge1xuICAgICAgbGV0IHNpbmdsZVJlcXVlc3RGcmFnbWVudCA9IHRoaXMuc2luZ2xlUmVzb3VyY2VSZXF1ZXN0RnJhZ21lbnQocmkpXG4gICAgICBmcmFnbWVudHMucHVzaChzaW5nbGVSZXF1ZXN0RnJhZ21lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uam9pbihmcmFnbWVudHMsICcvJylcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRSZXNvdXJjZVR5cGVVcmxGcmFnbWVudChyaTogaUFwaVJlc291cmNlSWRlbnRpZmllcik6IGFueSB7XG4gICAgbGV0IHJlc291cmNlVHlwZSA9IHRoaXMuZ2V0UmVzb3VyY2VUeXBlKHJpKVxuICAgIGxldCByZXNvdXJjZUNvbmZpZyA9IHJlc291cmNlVHlwZS5jb25maWdcbiAgICByZXR1cm4gcmVzb3VyY2VDb25maWcudXJsRnJhZ21lbnQocmkpXG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UmVzb3VyY2VUeXBlKFxuICAgIHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApOiBpQXBpUmVzb3VyY2VUeXBlQ29uZmlnIHtcblxuICAgIGxldCBvZlR5cGUgPSAocmVzb3VyY2VUeXBlOiBpQXBpUmVzb3VyY2VUeXBlQ29uZmlnKSA9PiB7XG4gICAgICByZXR1cm4gcmVzb3VyY2VUeXBlLmNvbmZpZy5oYXNSZXNvdXJjZVR5cGUocmkpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLmFwaUNvbmZpZy5yZXNvdXJjZVR5cGVzLCBvZlR5cGUpXG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTaW5nbGVSZXNvdXJjZVJlcXVlc3Qocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIV8uaXNOaWwocmkuaWQpXG4gIH1cblxuICBwcm90ZWN0ZWQgc2luZ2xlUmVzb3VyY2VSZXF1ZXN0RnJhZ21lbnQocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiByaS5pZFxuICB9XG59XG4iXX0=