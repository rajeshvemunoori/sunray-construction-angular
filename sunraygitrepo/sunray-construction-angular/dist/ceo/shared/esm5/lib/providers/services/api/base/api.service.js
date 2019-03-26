/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Observable, of as observableOf, throwError as observableThrowError, } from 'rxjs';
import { map, mergeMap, catchError, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { CsvToJsonService } from '../../csv-to-json.service';
import { RequestUrlBuilder } from './request-url-builder.service';
import { RequestOptionsBuilder } from './request-options-builder.service';
import { ResponseParser } from './response-parser.service';
var ApiService = /** @class */ (function () {
    function ApiService(http, csvToJsonService, responseParser, urlBuilder, optionsBuilder) {
        this.http = http;
        this.csvToJsonService = csvToJsonService;
        this.responseParser = responseParser;
        this.urlBuilder = urlBuilder;
        this.optionsBuilder = optionsBuilder;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.post$ = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.handleRequest$('post', payload);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.delete$ = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.handleRequest$('delete', payload);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.get$ = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.handleRequest$('get', payload);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.put$ = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.handleRequest$('put', payload);
    };
    // Aliases
    // Aliases
    /**
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.update$ = 
    // Aliases
    /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.put$(payload);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.create$ = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.post$(payload);
    };
    // Private methods
    // Private methods
    /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.handleRequest$ = 
    // Private methods
    /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    function (method, payload) {
        var _this = this;
        return this.executeRequest$(method, payload).pipe(catchError(function (error) {
            return _this.handleError$(error, payload);
        }), mergeMap(function (response) {
            return _this.processedResponse$(response, payload.resourceIdentifier);
        }));
    };
    /**
     * @private
     * @param {?} error
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.handleError$ = /**
     * @private
     * @param {?} error
     * @param {?} payload
     * @return {?}
     */
    function (error, payload) {
        console.error("Error in API Service: " + error);
        return observableThrowError(error);
    };
    /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.executeRequest$ = /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    function (method, payload) {
        /** @type {?} */
        var url = this.getUrl(payload.resourceIdentifier);
        /** @type {?} */
        var httpOpts = this.getHttpOpts(method, url, payload);
        return this.http[method](url, httpOpts);
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    ApiService.prototype.getUrl = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return this.urlBuilder.build(ri);
    };
    /**
     * @private
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    ApiService.prototype.getHttpOpts = /**
     * @private
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    function (method, url, payload) {
        return this.optionsBuilder.build(method, url, payload);
    };
    /**
     * @private
     * @param {?} apiResponse
     * @param {?} ri
     * @return {?}
     */
    ApiService.prototype.processedResponse$ = /**
     * @private
     * @param {?} apiResponse
     * @param {?} ri
     * @return {?}
     */
    function (apiResponse, ri) {
        var _this = this;
        return this.jsonData$(apiResponse.body).pipe(map(function (json) { return _this.sanitizedData(json, ri); }), map(function (json) { return _this.buildApiResponse(json, ri); }));
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    ApiService.prototype.jsonData$ = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (_.isString(data)) {
            return this.csvToJsonData$(data);
        }
        else {
            return observableOf(data);
        }
    };
    // Remove empty keys and attributes
    // Remove empty keys and attributes
    /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    ApiService.prototype.sanitizedData = 
    // Remove empty keys and attributes
    /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    function (data, ri) {
        /** @type {?} */
        var isSimpleVariable = function (value) {
            return (_.isNumber(value) || _.isString(value));
        };
        /** @type {?} */
        var isPresent = function (obj) {
            return obj !== '' && obj !== null;
        };
        /** @type {?} */
        var sanitize = function (object) {
            // Removed this pickBy call -- null and empty string
            // values are specified by backend and should
            // be preserved; might this cause issues elsewhere?
            // They should be fixed in the consumer.
            //var filteredObject = _.pickBy(object, isPresent)
            /** @type {?} */
            var filteredObject = object;
            /** @type {?} */
            var finalFilter = function (obj) {
                if (obj !== filteredObject && _.isPlainObject(obj)) {
                    return sanitize(obj);
                }
                else if (_.isArray(obj)) {
                    if (_.isEmpty(obj) || isSimpleVariable(obj[0])) {
                        return obj;
                    }
                    return _.reject(_.map(obj, sanitize), _.isEmpty);
                }
                return undefined;
            };
            return _.cloneDeepWith(filteredObject, finalFilter);
        };
        /** @type {?} */
        var sanitizedData;
        if (_.isArray(data)) {
            sanitizedData = _.map(data, sanitize);
        }
        else {
            sanitizedData = sanitize(data);
        }
        return sanitizedData;
    };
    /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    ApiService.prototype.buildApiResponse = /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    function (data, ri) {
        return {
            data: this.responseParser.parse(data),
            resourceIdentifier: ri,
        };
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    ApiService.prototype.csvToJsonData$ = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var observable = Observable.create(function (observer) {
            /** @type {?} */
            var jsonData = [];
            /** @type {?} */
            var jsonApiResponse = {
                data: jsonData,
                included: [],
            };
            /** @type {?} */
            var onNext = function (json, index) {
                /** @type {?} */
                var isValid = function (propValue, propName) {
                    return !_.isNil(propValue);
                };
                /** @type {?} */
                var sanitizedJson = _.pickBy(json, isValid);
                jsonData.push(json);
            };
            /** @type {?} */
            var onError = function (error) { return error; };
            /** @type {?} */
            var onComplete = function () {
                return observer.next(jsonApiResponse);
            };
            /** @type {?} */
            var converter = _this.csvToJsonService.csvToJsonFromString(data)
                .subscribe(onNext, onError, onComplete);
        });
        return observable;
    };
    ApiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CsvToJsonService },
        { type: ResponseParser },
        { type: RequestUrlBuilder },
        { type: RequestOptionsBuilder }
    ]; };
    return ApiService;
}());
export { ApiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.csvToJsonService;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.responseParser;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.urlBuilder;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.optionsBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvYXBpL2Jhc2UvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsRUFBRSxJQUFJLFlBQVksRUFDbEIsVUFBVSxJQUFJLG9CQUFvQixHQUVuQyxNQUFNLE1BQU0sQ0FBQTtBQUNiLE9BQU8sRUFDTCxHQUFHLEVBQUUsUUFBUSxFQUNiLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFHMUMsT0FBTyxFQUNMLFVBQVUsR0FHWCxNQUFNLHNCQUFzQixDQUFBO0FBVzdCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFjLDJCQUEyQixDQUFBO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFVLCtCQUErQixDQUFBO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBZ0IsMkJBQTJCLENBQUE7QUFFcEU7SUFFRSxvQkFDVSxJQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsVUFBNkIsRUFDN0IsY0FBcUM7UUFKckMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFDNUMsQ0FBQzs7Ozs7SUFFSiwwQkFBSzs7OztJQUFMLFVBQU0sT0FBMkI7UUFDL0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFB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QUE7Z0JBQzVCLENBQUM7O29CQUNHLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBRzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckIsQ0FBQzs7Z0JBQ0csT0FBTyxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUs7O2dCQUMxQixVQUFVLEdBQUc7Z0JBQ2YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQ3ZDLENBQUM7O2dCQUVHLFNBQVMsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2lCQUM1RCxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFFM0MsQ0FBQyxDQUFDO1FBRUYsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQzs7Z0JBakxGLFVBQVU7Ozs7Z0JBbkJULFVBQVU7Z0JBY0gsZ0JBQWdCO2dCQUdoQixjQUFjO2dCQUZkLGlCQUFpQjtnQkFDakIscUJBQXFCOztJQXFMOUIsaUJBQUM7Q0FBQSxBQWxMRCxJQWtMQztTQWpMWSxVQUFVOzs7Ozs7SUFFbkIsMEJBQXdCOzs7OztJQUN4QixzQ0FBMEM7Ozs7O0lBQzFDLG9DQUFzQzs7Ozs7SUFDdEMsZ0NBQXFDOzs7OztJQUNyQyxvQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yLFxuICBwaXBlLFxufSBmcm9tICdyeGpzJ1xuaW1wb3J0IHtcbiAgbWFwLCBtZXJnZU1hcCxcbiAgY2F0Y2hFcnJvcixcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUmVzcG9uc2UgfSAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnXG5cbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsXG4gIEh0dHBIZWFkZXJzLFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuXG5pbXBvcnQge1xuICBBcGlVcmwsXG4gIGlBcGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlBcGlSZXNwb25zZSxcbiAgaUFwaVNlcnZpY2UsXG4gIGlBcGlFcnJvclJlc3BvbnNlLFxuICBpQXBpUmVxdWVzdFBheWxvYWQsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IENzdlRvSnNvblNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4uLy4uL2Nzdi10by1qc29uLnNlcnZpY2UnXG5pbXBvcnQgeyBSZXF1ZXN0VXJsQnVpbGRlciB9ICAgICBmcm9tICcuL3JlcXVlc3QtdXJsLWJ1aWxkZXIuc2VydmljZSdcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQnVpbGRlciB9IGZyb20gJy4vcmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZSdcbmltcG9ydCB7IFJlc3BvbnNlUGFyc2VyIH0gICAgICAgICAgIGZyb20gJy4vcmVzcG9uc2UtcGFyc2VyLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIGltcGxlbWVudHMgaUFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjc3ZUb0pzb25TZXJ2aWNlOiBDc3ZUb0pzb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVzcG9uc2VQYXJzZXI6IFJlc3BvbnNlUGFyc2VyLFxuICAgIHByaXZhdGUgdXJsQnVpbGRlcjogUmVxdWVzdFVybEJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBvcHRpb25zQnVpbGRlcjogUmVxdWVzdE9wdGlvbnNCdWlsZGVyLFxuICApIHt9XG5cbiAgcG9zdCQocGF5bG9hZDogaUFwaVJlcXVlc3RQYXlsb2FkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0JCgncG9zdCcsIHBheWxvYWQpXG4gIH1cblxuICBkZWxldGUkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCQoJ2RlbGV0ZScsIHBheWxvYWQpXG4gIH1cblxuICBnZXQkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCQoJ2dldCcsIHBheWxvYWQpXG4gIH1cblxuICBwdXQkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCQoJ3B1dCcsIHBheWxvYWQpXG4gIH1cblxuICAvLyBBbGlhc2VzXG4gIHVwZGF0ZSQocGF5bG9hZDogaUFwaVJlcXVlc3RQYXlsb2FkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wdXQkKHBheWxvYWQpXG4gIH1cblxuICBjcmVhdGUkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCQocGF5bG9hZClcbiAgfVxuXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuICBwcml2YXRlIGhhbmRsZVJlcXVlc3QkKG1ldGhvZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVSZXF1ZXN0JChtZXRob2QsIHBheWxvYWQpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogaUFwaUVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IkKGVycm9yLCBwYXlsb2FkKVxuICAgICAgfSksXG4gICAgICBtZXJnZU1hcCgocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NlZFJlc3BvbnNlJChyZXNwb25zZSwgcGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIpXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yJChcbiAgICBlcnJvcjogaUFwaUVycm9yUmVzcG9uc2UsXG4gICAgcGF5bG9hZDogaUFwaVJlcXVlc3RQYXlsb2FkXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIEFQSSBTZXJ2aWNlOiBcIiArIGVycm9yKVxuICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnJvcilcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVJlcXVlc3QkKFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZFxuICApIHtcbiAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwocGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIpXG4gICAgbGV0IGh0dHBPcHRzID0gdGhpcy5nZXRIdHRwT3B0cyhtZXRob2QsIHVybCwgcGF5bG9hZClcblxuICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kXSh1cmwsIGh0dHBPcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVcmwocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy51cmxCdWlsZGVyLmJ1aWxkKHJpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIdHRwT3B0cyhcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IEFwaVVybCxcbiAgICBwYXlsb2FkOiBpQXBpUmVxdWVzdFBheWxvYWRcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc0J1aWxkZXIuYnVpbGQobWV0aG9kLCB1cmwsIHBheWxvYWQpXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NlZFJlc3BvbnNlJChcbiAgICBhcGlSZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4sXG4gICAgcmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXJcbiAgKSB7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uRGF0YSQoYXBpUmVzcG9uc2UuYm9keSkucGlwZShcbiAgICAgIG1hcChqc29uID0+IHRoaXMuc2FuaXRpemVkRGF0YShqc29uLCByaSkpLFxuICAgICAgbWFwKGpzb24gPT4gdGhpcy5idWlsZEFwaVJlc3BvbnNlKGpzb24sIHJpKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBqc29uRGF0YSQoZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYoXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3N2VG9Kc29uRGF0YSQoZGF0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpXG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGVtcHR5IGtleXMgYW5kIGF0dHJpYnV0ZXNcbiAgcHJpdmF0ZSBzYW5pdGl6ZWREYXRhKGRhdGEsIHJpKSB7XG4gICAgdmFyIGlzU2ltcGxlVmFyaWFibGUgPSAodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiAoXy5pc051bWJlcih2YWx1ZSkgfHwgXy5pc1N0cmluZyh2YWx1ZSkpXG4gICAgfVxuXG4gICAgdmFyIGlzUHJlc2VudCA9IChvYmopID0+IHtcbiAgICAgIHJldHVybiBvYmogIT09ICcnICYmIG9iaiAhPT0gbnVsbFxuICAgIH1cblxuICAgIGxldCBzYW5pdGl6ZSA9IChvYmplY3QpID0+IHtcbiAgICAgIC8vIFJlbW92ZWQgdGhpcyBwaWNrQnkgY2FsbCAtLSBudWxsIGFuZCBlbXB0eSBzdHJpbmdcbiAgICAgIC8vIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGJ5IGJhY2tlbmQgYW5kIHNob3VsZFxuICAgICAgLy8gYmUgcHJlc2VydmVkOyBtaWdodCB0aGlzIGNhdXNlIGlzc3VlcyBlbHNld2hlcmU/XG4gICAgICAvLyBUaGV5IHNob3VsZCBiZSBmaXhlZCBpbiB0aGUgY29uc3VtZXIuXG4gICAgICAvL3ZhciBmaWx0ZXJlZE9iamVjdCA9IF8ucGlja0J5KG9iamVjdCwgaXNQcmVzZW50KVxuICAgICAgdmFyIGZpbHRlcmVkT2JqZWN0ID0gb2JqZWN0XG5cbiAgICAgIGxldCBmaW5hbEZpbHRlciA9IChvYmopID0+IHtcbiAgICAgICAgaWYob2JqICE9PSBmaWx0ZXJlZE9iamVjdCAmJiBfLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgICAgIHJldHVybiBzYW5pdGl6ZShvYmopXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihfLmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIGlmKF8uaXNFbXB0eShvYmopIHx8IGlzU2ltcGxlVmFyaWFibGUob2JqWzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gXy5yZWplY3QoXy5tYXAob2JqLCBzYW5pdGl6ZSksIF8uaXNFbXB0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF8uY2xvbmVEZWVwV2l0aChmaWx0ZXJlZE9iamVjdCwgZmluYWxGaWx0ZXIpXG4gICAgfVxuXG4gICAgdmFyIHNhbml0aXplZERhdGFcbiAgICBpZihfLmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHNhbml0aXplZERhdGEgPSBfLm1hcChkYXRhLCBzYW5pdGl6ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzYW5pdGl6ZWREYXRhID0gc2FuaXRpemUoZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIHNhbml0aXplZERhdGFcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBcGlSZXNwb25zZShkYXRhLCByaTogaUFwaVJlc291cmNlSWRlbnRpZmllcik6IGlBcGlSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHRoaXMucmVzcG9uc2VQYXJzZXIucGFyc2UoZGF0YSksXG4gICAgICByZXNvdXJjZUlkZW50aWZpZXI6IHJpLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3N2VG9Kc29uRGF0YSQoZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IG9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHZhciBqc29uRGF0YSA9IFtdXG4gICAgICB2YXIganNvbkFwaVJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiBqc29uRGF0YSxcbiAgICAgICAgaW5jbHVkZWQ6IFtdLFxuICAgICAgfVxuXG4gICAgICBsZXQgb25OZXh0ID0gKGpzb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gKHByb3BWYWx1ZSwgcHJvcE5hbWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gIV8uaXNOaWwocHJvcFZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzYW5pdGl6ZWRKc29uID0gXy5waWNrQnkoanNvbiwgaXNWYWxpZClcblxuXG4gICAgICAgIGpzb25EYXRhLnB1c2goanNvbilcbiAgICAgIH1cbiAgICAgIGxldCBvbkVycm9yID0gKGVycm9yKSA9PiBlcnJvclxuICAgICAgbGV0IG9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0KGpzb25BcGlSZXNwb25zZSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbnZlcnRlciA9IHRoaXMuY3N2VG9Kc29uU2VydmljZS5jc3ZUb0pzb25Gcm9tU3RyaW5nKGRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlKVxuXG4gICAgfSlcblxuICAgIHJldHVybiBvYnNlcnZhYmxlXG4gIH1cbn1cblxuIl19