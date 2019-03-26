/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PayloadAction } from '../../classes';
/** @enum {string} */
var ApplicationConfigActionTypes = {
    ROUTER_NAVIGATION: 'ROUTER_NAVIGATION',
    LAUNCH: '[ApplicationConfig] LAUNCH',
    LOAD_RESOURCE_BY_ID: '[ApplicationConfig] LOAD_RESOURCE_BY_ID',
    SET_PRIMARY_ENTITY: '[ApplicationConfig] SET_PRIMARY_ENTITY',
    SET_RESOURCE_TYPE: '[ApplicationConfig] SET_RESOURCE_TYPE',
};
export { ApplicationConfigActionTypes };
var RouterNavigation = /** @class */ (function () {
    function RouterNavigation() {
        this.type = ApplicationConfigActionTypes.ROUTER_NAVIGATION;
    }
    return RouterNavigation;
}());
export { RouterNavigation };
if (false) {
    /** @type {?} */
    RouterNavigation.prototype.type;
    /** @type {?} */
    RouterNavigation.prototype.payload;
}
var Launch = /** @class */ (function () {
    function Launch() {
        this.type = ApplicationConfigActionTypes.LAUNCH;
    }
    return Launch;
}());
export { Launch };
if (false) {
    /** @type {?} */
    Launch.prototype.type;
}
var LoadResourceById = /** @class */ (function () {
    function LoadResourceById() {
        this.type = ApplicationConfigActionTypes.LOAD_RESOURCE_BY_ID;
    }
    return LoadResourceById;
}());
export { LoadResourceById };
if (false) {
    /** @type {?} */
    LoadResourceById.prototype.type;
}
var SetPrimaryEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SetPrimaryEntity, _super);
    function SetPrimaryEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ApplicationConfigActionTypes.SET_PRIMARY_ENTITY;
        return _this;
    }
    return SetPrimaryEntity;
}(PayloadAction));
export { SetPrimaryEntity };
if (false) {
    /** @type {?} */
    SetPrimaryEntity.prototype.type;
}
var SetResourceType = /** @class */ (function (_super) {
    tslib_1.__extends(SetResourceType, _super);
    function SetResourceType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ApplicationConfigActionTypes.SET_RESOURCE_TYPE;
        return _this;
    }
    return SetResourceType;
}(PayloadAction));
export { SetResourceType };
if (false) {
    /** @type {?} */
    SetResourceType.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBRzVDLG1CQUFvQixtQkFBbUI7SUFDdkMsUUFBUyw0QkFBNEI7SUFDckMscUJBQXNCLHlDQUF5QztJQUMvRCxvQkFBcUIsd0NBQXdDO0lBQzdELG1CQUFtQix1Q0FBdUM7OztBQUc1RDtJQUFBO1FBQ1csU0FBSSxHQUFHLDRCQUE0QixDQUFDLGlCQUFpQixDQUFDO0lBRWpFLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsZ0NBQStEOztJQUMvRCxtQ0FBYTs7QUFHZjtJQUFBO1FBQ1csU0FBSSxHQUFHLDRCQUE0QixDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsc0JBQW9EOztBQUd0RDtJQUFBO1FBQ1csU0FBSSxHQUFHLDRCQUE0QixDQUFDLG1CQUFtQixDQUFDO0lBQ25FLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsZ0NBQWlFOztBQUduRTtJQUFzQyw0Q0FBYTtJQUFuRDtRQUFBLHFFQUVDO1FBRFUsVUFBSSxHQUFHLDRCQUE0QixDQUFDLGtCQUFrQixDQUFDOztJQUNsRSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBc0MsYUFBYSxHQUVsRDs7OztJQURDLGdDQUFnRTs7QUFHbEU7SUFBcUMsMkNBQWE7SUFBbEQ7UUFBQSxxRUFFQztRQURVLFVBQUksR0FBRyw0QkFBNEIsQ0FBQyxpQkFBaUIsQ0FBQzs7SUFDakUsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUZELENBQXFDLGFBQWEsR0FFakQ7Ozs7SUFEQywrQkFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICcuLi8uLi9jbGFzc2VzJztcblxuZXhwb3J0IGVudW0gQXBwbGljYXRpb25Db25maWdBY3Rpb25UeXBlcyB7XG4gIFJPVVRFUl9OQVZJR0FUSU9OID0gJ1JPVVRFUl9OQVZJR0FUSU9OJyxcbiAgTEFVTkNIID0gJ1tBcHBsaWNhdGlvbkNvbmZpZ10gTEFVTkNIJyxcbiAgTE9BRF9SRVNPVVJDRV9CWV9JRCA9ICdbQXBwbGljYXRpb25Db25maWddIExPQURfUkVTT1VSQ0VfQllfSUQnLFxuICBTRVRfUFJJTUFSWV9FTlRJVFkgPSAnW0FwcGxpY2F0aW9uQ29uZmlnXSBTRVRfUFJJTUFSWV9FTlRJVFknLFxuICBTRVRfUkVTT1VSQ0VfVFlQRT0gJ1tBcHBsaWNhdGlvbkNvbmZpZ10gU0VUX1JFU09VUkNFX1RZUEUnLFxufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyTmF2aWdhdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvblR5cGVzLlJPVVRFUl9OQVZJR0FUSU9OO1xuICBwYXlsb2FkOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2ggaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQXBwbGljYXRpb25Db25maWdBY3Rpb25UeXBlcy5MQVVOQ0g7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVzb3VyY2VCeUlkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9uVHlwZXMuTE9BRF9SRVNPVVJDRV9CWV9JRDtcbn1cblxuZXhwb3J0IGNsYXNzIFNldFByaW1hcnlFbnRpdHkgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9uVHlwZXMuU0VUX1BSSU1BUllfRU5USVRZO1xufVxuXG5leHBvcnQgY2xhc3MgU2V0UmVzb3VyY2VUeXBlIGV4dGVuZHMgUGF5bG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvblR5cGVzLlNFVF9SRVNPVVJDRV9UWVBFO1xufVxuXG5leHBvcnQgdHlwZSBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvbnNVbmlvbiA9XG4gIExhdW5jaCB8XG4gIExvYWRSZXNvdXJjZUJ5SWQgfFxuICBSb3V0ZXJOYXZpZ2F0aW9uIHxcbiAgU2V0UHJpbWFyeUVudGl0eSB8XG4gIFNldFJlc291cmNlVHlwZTtcbiJdfQ==