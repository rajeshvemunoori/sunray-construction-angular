/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable, Inject, } from '@angular/core';
import { jsonToQueryParamsObject, } from '@ceo/core';
import { API_CONFIG, } from '../../../tokens/index';
var RequestOptionsBuilder = /** @class */ (function () {
    function RequestOptionsBuilder(apiConfig) {
        this.apiConfig = apiConfig;
    }
    /**
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    RequestOptionsBuilder.prototype.build = /**
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    function (method, url, payload) {
        if (this.isBodyRequest(method)) {
            return this.getBody(payload.resourceIdentifier.data);
        }
        else {
            return this.getOptions(url, payload.resourceIdentifier);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RequestOptionsBuilder.prototype.getBody = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var body = this.sanitizedParams(data);
        body = _.merge({}, body, this.apiConfig.defaultQueryParams);
        return {
            body: body,
            observe: 'response',
        };
    };
    /**
     * @param {?} url
     * @param {?} ri
     * @return {?}
     */
    RequestOptionsBuilder.prototype.getOptions = /**
     * @param {?} url
     * @param {?} ri
     * @return {?}
     */
    function (url, ri) {
        return {
            params: this.getParams(ri),
            responseType: this.getResponseType(url),
            observe: 'response',
        };
    };
    /**
     * @param {?} ri
     * @return {?}
     */
    RequestOptionsBuilder.prototype.getParams = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var params = _.merge({}, this.apiConfig.defaultQueryParams, this.filterParams(ri));
        return jsonToQueryParamsObject(params);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    RequestOptionsBuilder.prototype.getResponseType = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.isTextResponseType(url)) {
            return 'text';
        }
        else {
            return 'json';
        }
    };
    /**
     * @protected
     * @param {?} method
     * @return {?}
     */
    RequestOptionsBuilder.prototype.isBodyRequest = /**
     * @protected
     * @param {?} method
     * @return {?}
     */
    function (method) {
        /** @type {?} */
        var bodyMethods = ['post', 'put'];
        return _.includes(bodyMethods, method);
    };
    /**
     * @protected
     * @param {?} url
     * @return {?}
     */
    RequestOptionsBuilder.prototype.isTextResponseType = /**
     * @protected
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return _.endsWith(url, 'csv');
    };
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
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    RequestOptionsBuilder.prototype.getFilter = /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.get(ri, 'filter');
    };
    /**
     * @protected
     * @param {?} params
     * @return {?}
     */
    RequestOptionsBuilder.prototype.sanitizedParams = /**
     * @protected
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var snakeCase = function (value, key) {
            return _.snakeCase(key);
        };
        return _.mapKeys(params, snakeCase);
    };
    RequestOptionsBuilder.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RequestOptionsBuilder.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG,] }] }
    ]; };
    return RequestOptionsBuilder;
}());
export { RequestOptionsBuilder };
if (false) {
    /** @type {?} */
    RequestOptionsBuilder.prototype.apiConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9zZXJ2aWNlcy9hcGkvYmFzZS9yZXF1ZXN0LW9wdGlvbnMtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQUt0QixPQUFPLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sV0FBVyxDQUFBO0FBY2xCLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSx1QkFBdUIsQ0FBQTtBQUU5QjtJQUVFLCtCQUM2QixTQUFTO1FBQVQsY0FBUyxHQUFULFNBQVMsQ0FBQTtJQUNsQyxDQUFDOzs7Ozs7O0lBRUwscUNBQUs7Ozs7OztJQUFMLFVBQ0UsTUFBYyxFQUNkLEdBQVcsRUFDWCxPQUEyQjtRQUUzQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyRDthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUN4RDtJQUNILENBQUM7Ozs7O0lBRUQsdUNBQU87Ozs7SUFBUCxVQUFRLElBQVM7O1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBRTNELE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFRCwwQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxFQUEwQjtRQUNoRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzFCLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUN2QyxPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFHRCx5Q0FBUzs7OztJQUFULFVBQVUsRUFBMEI7O1lBQzlCLE1BQU0sR0FDUixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdkUsT0FBTyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QyxDQUFDOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBRztRQUNqQixJQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixPQUFPLE1BQU0sQ0FBQTtTQUNkO2FBQ0k7WUFDSCxPQUFPLE1BQU0sQ0FBQTtTQUNkO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsNkNBQWE7Ozs7O0lBQXZCLFVBQXdCLE1BQWM7O1lBQ2hDLFdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN4QyxDQUFDOzs7Ozs7SUFFUyxrREFBa0I7Ozs7O0lBQTVCLFVBQTZCLEdBQUc7UUFDOUIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMvQixDQUFDOzs7Ozs7SUFFUyw0Q0FBWTs7Ozs7SUFBdEIsVUFBdUIsRUFBMEI7O1lBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUUvQixJQUFHLE1BQU0sRUFBRTtZQUNULE9BQU87Z0JBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2FBQ3JDLENBQUE7U0FDRjthQUNJO1lBQ0gsT0FBTyxFQUFFLENBQUE7U0FDVjtJQUNILENBQUM7Ozs7OztJQUVTLHlDQUFTOzs7OztJQUFuQixVQUFvQixFQUEwQjtRQUM1QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzVCLENBQUM7Ozs7OztJQUVTLCtDQUFlOzs7OztJQUF6QixVQUEwQixNQUFNOztZQUMxQixTQUFTLEdBQUcsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUN6QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDckMsQ0FBQzs7Z0JBckZGLFVBQVU7Ozs7Z0RBR04sTUFBTSxTQUFDLFVBQVU7O0lBbUZ0Qiw0QkFBQztDQUFBLEFBdEZELElBc0ZDO1NBckZZLHFCQUFxQjs7O0lBRTlCLDBDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IEh0dHBQYXJhbXNPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAvc3JjL3BhcmFtcydcblxuaW1wb3J0IHtcbiAganNvblRvUXVlcnlQYXJhbXNPYmplY3QsXG59IGZyb20gJ0BjZW8vY29yZSdcblxuXG5pbXBvcnQge1xuICBBcGlVcmwsXG4gIGlBcGlDb25maWcsXG4gIGlBcGlRdWVyeVBhcmFtcyxcbiAgaUFwaVJlcXVlc3RQYXJhbXMsXG4gIGlBcGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlBcGlSZXNvdXJjZVR5cGVDb25maWcsXG4gIGlBcGlSZXF1ZXN0T3B0aW9ucyxcbiAgaUFwaVJlcXVlc3RQYXlsb2FkLFxufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBBUElfQ09ORklHLFxufSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0T3B0aW9uc0J1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFQSV9DT05GSUcpIHB1YmxpYyBhcGlDb25maWcsXG4gICkgeyB9XG5cbiAgYnVpbGQoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBBcGlVcmwsXG4gICAgcGF5bG9hZDogaUFwaVJlcXVlc3RQYXlsb2FkXG4gICkge1xuICAgIGlmKHRoaXMuaXNCb2R5UmVxdWVzdChtZXRob2QpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRCb2R5KHBheWxvYWQucmVzb3VyY2VJZGVudGlmaWVyLmRhdGEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9ucyh1cmwsIHBheWxvYWQucmVzb3VyY2VJZGVudGlmaWVyKVxuICAgIH1cbiAgfVxuXG4gIGdldEJvZHkoZGF0YTogYW55KTogYW55IHtcbiAgICBsZXQgYm9keSA9IHRoaXMuc2FuaXRpemVkUGFyYW1zKGRhdGEpXG4gICAgYm9keSA9IF8ubWVyZ2Uoe30sIGJvZHksIHRoaXMuYXBpQ29uZmlnLmRlZmF1bHRRdWVyeVBhcmFtcylcblxuICAgIHJldHVybiB7XG4gICAgICBib2R5OiBib2R5LFxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9XG4gIH1cblxuICBnZXRPcHRpb25zKHVybDogQXBpVXJsLCByaTogaUFwaVJlc291cmNlSWRlbnRpZmllcik6IGlBcGlSZXF1ZXN0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogdGhpcy5nZXRQYXJhbXMocmkpLFxuICAgICAgcmVzcG9uc2VUeXBlOiB0aGlzLmdldFJlc3BvbnNlVHlwZSh1cmwpLFxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9XG4gIH1cbiAgXG5cbiAgZ2V0UGFyYW1zKHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKTogYW55IHtcbiAgICBsZXQgcGFyYW1zID1cbiAgICAgIF8ubWVyZ2Uoe30sIHRoaXMuYXBpQ29uZmlnLmRlZmF1bHRRdWVyeVBhcmFtcywgdGhpcy5maWx0ZXJQYXJhbXMocmkpKVxuXG4gICAgcmV0dXJuIGpzb25Ub1F1ZXJ5UGFyYW1zT2JqZWN0KHBhcmFtcylcbiAgfVxuXG4gIGdldFJlc3BvbnNlVHlwZSh1cmwpOiBzdHJpbmcge1xuICAgIGlmKHRoaXMuaXNUZXh0UmVzcG9uc2VUeXBlKHVybCkpIHtcbiAgICAgIHJldHVybiAndGV4dCdcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJ2pzb24nXG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGlzQm9keVJlcXVlc3QobWV0aG9kOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgYm9keU1ldGhvZHMgPSBbJ3Bvc3QnLCAncHV0J11cbiAgICByZXR1cm4gXy5pbmNsdWRlcyhib2R5TWV0aG9kcywgbWV0aG9kKVxuICB9XG5cbiAgcHJvdGVjdGVkIGlzVGV4dFJlc3BvbnNlVHlwZSh1cmwpIHtcbiAgICByZXR1cm4gXy5lbmRzV2l0aCh1cmwsICdjc3YnKVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpbHRlclBhcmFtcyhyaTogaUFwaVJlc291cmNlSWRlbnRpZmllcikge1xuICAgIGxldCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcihyaSlcblxuICAgIGlmKGZpbHRlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsdGVyOiB0aGlzLnNhbml0aXplZFBhcmFtcyhmaWx0ZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZpbHRlcihyaTogaUFwaVJlc291cmNlSWRlbnRpZmllcikge1xuICAgIHJldHVybiBfLmdldChyaSwgJ2ZpbHRlcicpXG4gIH1cblxuICBwcm90ZWN0ZWQgc2FuaXRpemVkUGFyYW1zKHBhcmFtcykge1xuICAgIGxldCBzbmFrZUNhc2UgPSAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIF8uc25ha2VDYXNlKGtleSlcbiAgICB9XG4gICAgcmV0dXJuIF8ubWFwS2V5cyhwYXJhbXMsIHNuYWtlQ2FzZSlcbiAgfVxufVxuIl19