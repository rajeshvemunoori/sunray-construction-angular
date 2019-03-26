/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiConfig = /** @class */ (function () {
    function ApiConfig(params) {
        this._url = params.url;
        this._defaultQueryParams = params.defaultQueryParams || {};
        this._defaultBodyParams = params.defaultBodyParams || {};
        this._resourceTypes = params.resourceTypes || {};
    }
    Object.defineProperty(ApiConfig.prototype, "url", {
        get: /**
         * @return {?}
         */
        function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiConfig.prototype, "defaultQueryParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultQueryParams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiConfig.prototype, "defaultBodyParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultBodyParams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiConfig.prototype, "resourceTypes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._resourceTypes;
        },
        enumerable: true,
        configurable: true
    });
    return ApiConfig;
}());
export { ApiConfig };
if (false) {
    /** @type {?} */
    ApiConfig.prototype._url;
    /** @type {?} */
    ApiConfig.prototype._defaultBodyParams;
    /** @type {?} */
    ApiConfig.prototype._defaultQueryParams;
    /** @type {?} */
    ApiConfig.prototype._resourceTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9jbGFzc2VzL2FwaS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BO0lBTUUsbUJBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUE7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUE7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsc0JBQUksMEJBQUc7Ozs7UUFBUDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFrQjs7OztRQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFBO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQWlCOzs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtRQUM1QixDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQzs7OztJQTNCQyx5QkFBWTs7SUFDWix1Q0FBdUI7O0lBQ3ZCLHdDQUF3Qjs7SUFDeEIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaUFwaUNvbmZpZyxcbiAgaUFwaVJlcXVlc3RQYXJhbXMsXG4gIGlBcGlSZXNvdXJjZVR5cGVNYXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBBcGlDb25maWcgaW1wbGVtZW50cyBpQXBpQ29uZmlnIHtcbiAgX3VybDogc3RyaW5nXG4gIF9kZWZhdWx0Qm9keVBhcmFtczogYW55XG4gIF9kZWZhdWx0UXVlcnlQYXJhbXM6IGFueVxuICBfcmVzb3VyY2VUeXBlczogYW55XG5cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5fdXJsID0gcGFyYW1zLnVybFxuICAgIHRoaXMuX2RlZmF1bHRRdWVyeVBhcmFtcyA9IHBhcmFtcy5kZWZhdWx0UXVlcnlQYXJhbXMgfHwge31cbiAgICB0aGlzLl9kZWZhdWx0Qm9keVBhcmFtcyA9IHBhcmFtcy5kZWZhdWx0Qm9keVBhcmFtcyB8fCB7fVxuICAgIHRoaXMuX3Jlc291cmNlVHlwZXMgPSBwYXJhbXMucmVzb3VyY2VUeXBlcyB8fCB7fVxuICB9XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91cmxcbiAgfVxuXG4gIGdldCBkZWZhdWx0UXVlcnlQYXJhbXMoKTogaUFwaVJlcXVlc3RQYXJhbXMge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UXVlcnlQYXJhbXNcbiAgfVxuXG4gIGdldCBkZWZhdWx0Qm9keVBhcmFtcygpOiBpQXBpUmVxdWVzdFBhcmFtcyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRCb2R5UGFyYW1zXG4gIH1cblxuICBnZXQgcmVzb3VyY2VUeXBlcygpOiBpQXBpUmVzb3VyY2VUeXBlTWFwIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUeXBlc1xuICB9XG59XG5cbiJdfQ==