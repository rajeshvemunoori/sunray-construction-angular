/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ResponseParser = /** @class */ (function () {
    function ResponseParser() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ResponseParser.prototype.parse = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return _.castArray(payload.data).
            concat(this.loadIncluded(payload));
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    ResponseParser.prototype.loadIncluded = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var buildIncluded = function (payloadData) {
            return payloadData;
        };
        return _.map(data.included, buildIncluded);
    };
    ResponseParser.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ResponseParser.ngInjectableDef = i0.defineInjectable({ factory: function ResponseParser_Factory() { return new ResponseParser(); }, token: ResponseParser, providedIn: "root" });
    return ResponseParser;
}());
export { ResponseParser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtcGFyc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvYXBpL2pzb24tYXBpL3Jlc3BvbnNlLXBhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQUkxQztJQUFBO0tBZ0JDOzs7OztJQVpDLDhCQUFLOzs7O0lBQUwsVUFBTSxPQUFZO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8scUNBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQUk7O1lBQ25CLGFBQWEsR0FBRyxVQUFDLFdBQVc7WUFDOUIsT0FBTyxXQUFXLENBQUE7UUFDcEIsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQzVDLENBQUM7O2dCQWZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt5QkFSRDtDQXNCQyxBQWhCRCxJQWdCQztTQWJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IGlSZXNwb25zZVBhcnNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlUGFyc2VyIGltcGxlbWVudHMgaVJlc3BvbnNlUGFyc2VyIHsgXG4gIHBhcnNlKHBheWxvYWQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIF8uY2FzdEFycmF5KHBheWxvYWQuZGF0YSkuXG4gICAgICBjb25jYXQodGhpcy5sb2FkSW5jbHVkZWQocGF5bG9hZCkpXG4gIH1cblxuICBwcml2YXRlIGxvYWRJbmNsdWRlZChkYXRhKSB7XG4gICAgbGV0IGJ1aWxkSW5jbHVkZWQgPSAocGF5bG9hZERhdGEpID0+IHtcbiAgICAgIHJldHVybiBwYXlsb2FkRGF0YVxuICAgIH1cblxuICAgIHJldHVybiBfLm1hcChkYXRhLmluY2x1ZGVkLCBidWlsZEluY2x1ZGVkKVxuICB9XG59XG5cbiJdfQ==