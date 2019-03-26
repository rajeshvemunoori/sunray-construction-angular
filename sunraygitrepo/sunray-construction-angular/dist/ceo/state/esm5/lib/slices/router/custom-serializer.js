/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
// https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#navigation-actions
// https://ngrx.io/guide/router-store/configuration
var RouterCustomSerializer = /** @class */ (function () {
    function RouterCustomSerializer() {
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    RouterCustomSerializer.prototype.serialize = /**
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        /** @type {?} */
        var route = routerState.root;
        /** @type {?} */
        var params = {};
        while (route.firstChild) {
            Object.assign(params, route.params);
            route = route.firstChild;
        }
        Object.assign(params, route.params);
        /** @type {?} */
        var segments = (/** @type {?} */ (_.get(routerState, 'root.children[0]._urlSegment.segments')));
        var url = routerState.url, queryParams = routerState.root.queryParams;
        return { url: url, params: params, segments: segments, queryParams: queryParams };
    };
    RouterCustomSerializer.decorators = [
        { type: Injectable }
    ];
    return RouterCustomSerializer;
}());
export { RouterCustomSerializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3N0YXRlLyIsInNvdXJjZXMiOlsibGliL3NsaWNlcy9yb3V0ZXIvY3VzdG9tLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBdUIsZUFBZSxDQUFBOzs7QUFlM0Q7SUFBQTtJQXVCQSxDQUFDOzs7OztJQW5CQywwQ0FBUzs7OztJQUFULFVBQVUsV0FBZ0M7O1lBQ3BDLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSTs7WUFFeEIsTUFBTSxHQUFHLEVBQUU7UUFDZixPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25DLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO1NBQ3pCO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztZQUUvQixRQUFRLEdBQUcsbUJBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsdUNBQXVDLENBQUMsRUFBQTtRQUc3RSxJQUFBLHFCQUFHLEVBQ0ssMENBQVc7UUFHckIsT0FBTyxFQUFFLEdBQUcsS0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUE7SUFDL0MsQ0FBQzs7Z0JBdEJGLFVBQVU7O0lBdUJYLDZCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cbmltcG9ydCB7IFN0b3JlTW9kdWxlLCBBY3Rpb25SZWR1Y2VyTWFwIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIFJvdXRlclN0YXRlU2VyaWFsaXplcixcbn0gZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJ1xuXG5pbXBvcnQgeyBpUm91dGVyU3RhdGVVcmwgfSBmcm9tICcuL3N0YXRlJ1xuXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3J4L3BsYXRmb3JtL2Jsb2IvbWFzdGVyL2RvY3Mvcm91dGVyLXN0b3JlL2FwaS5tZCNuYXZpZ2F0aW9uLWFjdGlvbnNcbi8vIGh0dHBzOi8vbmdyeC5pby9ndWlkZS9yb3V0ZXItc3RvcmUvY29uZmlndXJhdGlvblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyQ3VzdG9tU2VyaWFsaXplclxuICBpbXBsZW1lbnRzIFJvdXRlclN0YXRlU2VyaWFsaXplcjxpUm91dGVyU3RhdGVVcmw+IHtcblxuICBzZXJpYWxpemUocm91dGVyU3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBpUm91dGVyU3RhdGVVcmwge1xuICAgIGxldCByb3V0ZSA9IHJvdXRlclN0YXRlLnJvb3RcblxuICAgIGxldCBwYXJhbXMgPSB7fVxuICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywgcm91dGUucGFyYW1zKVxuICAgICAgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkXG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCByb3V0ZS5wYXJhbXMpXG5cbiAgICBsZXQgc2VnbWVudHMgPSA8YW55Pl8uZ2V0KHJvdXRlclN0YXRlLCAncm9vdC5jaGlsZHJlblswXS5fdXJsU2VnbWVudC5zZWdtZW50cycpXG5cbiAgICBjb25zdCB7XG4gICAgICB1cmwsXG4gICAgICByb290OiB7IHF1ZXJ5UGFyYW1zIH0sXG4gICAgfSA9IHJvdXRlclN0YXRlXG5cbiAgICByZXR1cm4geyB1cmwsIHBhcmFtcywgc2VnbWVudHMsIHF1ZXJ5UGFyYW1zIH1cbiAgfVxufVxuXG4iXX0=