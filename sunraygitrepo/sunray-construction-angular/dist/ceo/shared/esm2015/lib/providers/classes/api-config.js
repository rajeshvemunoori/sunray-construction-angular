/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ApiConfig {
    /**
     * @param {?} params
     */
    constructor(params) {
        this._url = params.url;
        this._defaultQueryParams = params.defaultQueryParams || {};
        this._defaultBodyParams = params.defaultBodyParams || {};
        this._resourceTypes = params.resourceTypes || {};
    }
    /**
     * @return {?}
     */
    get url() {
        return this._url;
    }
    /**
     * @return {?}
     */
    get defaultQueryParams() {
        return this._defaultQueryParams;
    }
    /**
     * @return {?}
     */
    get defaultBodyParams() {
        return this._defaultBodyParams;
    }
    /**
     * @return {?}
     */
    get resourceTypes() {
        return this._resourceTypes;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9jbGFzc2VzL2FwaS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE1BQU0sT0FBTyxTQUFTOzs7O0lBTXBCLFlBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUE7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUE7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQTtJQUNsRCxDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUE7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM1QixDQUFDO0NBQ0Y7OztJQTNCQyx5QkFBWTs7SUFDWix1Q0FBdUI7O0lBQ3ZCLHdDQUF3Qjs7SUFDeEIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaUFwaUNvbmZpZyxcbiAgaUFwaVJlcXVlc3RQYXJhbXMsXG4gIGlBcGlSZXNvdXJjZVR5cGVNYXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBBcGlDb25maWcgaW1wbGVtZW50cyBpQXBpQ29uZmlnIHtcbiAgX3VybDogc3RyaW5nXG4gIF9kZWZhdWx0Qm9keVBhcmFtczogYW55XG4gIF9kZWZhdWx0UXVlcnlQYXJhbXM6IGFueVxuICBfcmVzb3VyY2VUeXBlczogYW55XG5cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5fdXJsID0gcGFyYW1zLnVybFxuICAgIHRoaXMuX2RlZmF1bHRRdWVyeVBhcmFtcyA9IHBhcmFtcy5kZWZhdWx0UXVlcnlQYXJhbXMgfHwge31cbiAgICB0aGlzLl9kZWZhdWx0Qm9keVBhcmFtcyA9IHBhcmFtcy5kZWZhdWx0Qm9keVBhcmFtcyB8fCB7fVxuICAgIHRoaXMuX3Jlc291cmNlVHlwZXMgPSBwYXJhbXMucmVzb3VyY2VUeXBlcyB8fCB7fVxuICB9XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91cmxcbiAgfVxuXG4gIGdldCBkZWZhdWx0UXVlcnlQYXJhbXMoKTogaUFwaVJlcXVlc3RQYXJhbXMge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UXVlcnlQYXJhbXNcbiAgfVxuXG4gIGdldCBkZWZhdWx0Qm9keVBhcmFtcygpOiBpQXBpUmVxdWVzdFBhcmFtcyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRCb2R5UGFyYW1zXG4gIH1cblxuICBnZXQgcmVzb3VyY2VUeXBlcygpOiBpQXBpUmVzb3VyY2VUeXBlTWFwIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUeXBlc1xuICB9XG59XG5cbiJdfQ==