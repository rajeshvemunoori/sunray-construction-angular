/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, } from '@angular/core';
import { ApiRequestOptionsBuilder as BaseApiRequestOptionsBuilder, } from '@ceo/shared';
var RequestOptionsBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(RequestOptionsBuilder, _super);
    function RequestOptionsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    RequestOptionsBuilder.prototype.filterParams = /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var filter = this.getFilter(ri);
        if (filter) {
            return {
                filter: this.sanitizedParams(filter)
            };
        }
        else {
            return {};
        }
    };
    RequestOptionsBuilder.decorators = [
        { type: Injectable }
    ];
    return RequestOptionsBuilder;
}(BaseApiRequestOptionsBuilder));
export { RequestOptionsBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9zZXJ2aWNlcy9hcGkvcmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNMLHdCQUF3QixJQUFJLDRCQUE0QixHQUV6RCxNQUFNLGFBQWEsQ0FBQTtBQUVwQjtJQUM0QyxpREFBNEI7SUFEeEU7O0lBY0EsQ0FBQzs7Ozs7O0lBWlcsNENBQVk7Ozs7O0lBQXRCLFVBQXVCLEVBQTBCOztZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFFL0IsSUFBRyxNQUFNLEVBQUU7WUFDVCxPQUFPO2dCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxDQUFBO1NBQ0Y7YUFDSTtZQUNILE9BQU8sRUFBRSxDQUFBO1NBQ1Y7SUFDSCxDQUFDOztnQkFiRixVQUFVOztJQWNYLDRCQUFDO0NBQUEsQUFkRCxDQUM0Qyw0QkFBNEIsR0FhdkU7U0FiWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQXBpUmVxdWVzdE9wdGlvbnNCdWlsZGVyIGFzIEJhc2VBcGlSZXF1ZXN0T3B0aW9uc0J1aWxkZXIsXG4gIGlBcGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVxdWVzdE9wdGlvbnNCdWlsZGVyICBleHRlbmRzIEJhc2VBcGlSZXF1ZXN0T3B0aW9uc0J1aWxkZXIge1xuICBwcm90ZWN0ZWQgZmlsdGVyUGFyYW1zKHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKSB7XG4gICAgbGV0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyKHJpKVxuXG4gICAgaWYoZmlsdGVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWx0ZXI6IHRoaXMuc2FuaXRpemVkUGFyYW1zKGZpbHRlcilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gIH1cbn1cbiJdfQ==