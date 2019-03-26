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
export class ApiService {
    /**
     * @param {?} http
     * @param {?} csvToJsonService
     * @param {?} responseParser
     * @param {?} urlBuilder
     * @param {?} optionsBuilder
     */
    constructor(http, csvToJsonService, responseParser, urlBuilder, optionsBuilder) {
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
    post$(payload) {
        return this.handleRequest$('post', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    delete$(payload) {
        return this.handleRequest$('delete', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    get$(payload) {
        return this.handleRequest$('get', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    put$(payload) {
        return this.handleRequest$('put', payload);
    }
    // Aliases
    /**
     * @param {?} payload
     * @return {?}
     */
    update$(payload) {
        return this.put$(payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    create$(payload) {
        return this.post$(payload);
    }
    // Private methods
    /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    handleRequest$(method, payload) {
        return this.executeRequest$(method, payload).pipe(catchError((error) => {
            return this.handleError$(error, payload);
        }), mergeMap((response) => {
            return this.processedResponse$(response, payload.resourceIdentifier);
        }));
    }
    /**
     * @private
     * @param {?} error
     * @param {?} payload
     * @return {?}
     */
    handleError$(error, payload) {
        console.error("Error in API Service: " + error);
        return observableThrowError(error);
    }
    /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    executeRequest$(method, payload) {
        /** @type {?} */
        let url = this.getUrl(payload.resourceIdentifier);
        /** @type {?} */
        let httpOpts = this.getHttpOpts(method, url, payload);
        return this.http[method](url, httpOpts);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getUrl(ri) {
        return this.urlBuilder.build(ri);
    }
    /**
     * @private
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    getHttpOpts(method, url, payload) {
        return this.optionsBuilder.build(method, url, payload);
    }
    /**
     * @private
     * @param {?} apiResponse
     * @param {?} ri
     * @return {?}
     */
    processedResponse$(apiResponse, ri) {
        return this.jsonData$(apiResponse.body).pipe(map(json => this.sanitizedData(json, ri)), map(json => this.buildApiResponse(json, ri)));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    jsonData$(data) {
        if (_.isString(data)) {
            return this.csvToJsonData$(data);
        }
        else {
            return observableOf(data);
        }
    }
    // Remove empty keys and attributes
    /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    sanitizedData(data, ri) {
        /** @type {?} */
        var isSimpleVariable = (value) => {
            return (_.isNumber(value) || _.isString(value));
        };
        /** @type {?} */
        var isPresent = (obj) => {
            return obj !== '' && obj !== null;
        };
        /** @type {?} */
        let sanitize = (object) => {
            // Removed this pickBy call -- null and empty string
            // values are specified by backend and should
            // be preserved; might this cause issues elsewhere?
            // They should be fixed in the consumer.
            //var filteredObject = _.pickBy(object, isPresent)
            /** @type {?} */
            var filteredObject = object;
            /** @type {?} */
            let finalFilter = (obj) => {
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
    }
    /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    buildApiResponse(data, ri) {
        return {
            data: this.responseParser.parse(data),
            resourceIdentifier: ri,
        };
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    csvToJsonData$(data) {
        /** @type {?} */
        let observable = Observable.create((observer) => {
            /** @type {?} */
            var jsonData = [];
            /** @type {?} */
            var jsonApiResponse = {
                data: jsonData,
                included: [],
            };
            /** @type {?} */
            let onNext = (json, index) => {
                /** @type {?} */
                let isValid = (propValue, propName) => {
                    return !_.isNil(propValue);
                };
                /** @type {?} */
                let sanitizedJson = _.pickBy(json, isValid);
                jsonData.push(json);
            };
            /** @type {?} */
            let onError = (error) => error;
            /** @type {?} */
            let onComplete = () => {
                return observer.next(jsonApiResponse);
            };
            /** @type {?} */
            let converter = this.csvToJsonService.csvToJsonFromString(data)
                .subscribe(onNext, onError, onComplete);
        });
        return observable;
    }
}
ApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: CsvToJsonService },
    { type: ResponseParser },
    { type: RequestUrlBuilder },
    { type: RequestOptionsBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvYXBpL2Jhc2UvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsRUFBRSxJQUFJLFlBQVksRUFDbEIsVUFBVSxJQUFJLG9CQUFvQixHQUVuQyxNQUFNLE1BQU0sQ0FBQTtBQUNiLE9BQU8sRUFDTCxHQUFHLEVBQUUsUUFBUSxFQUNiLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFHMUMsT0FBTyxFQUNMLFVBQVUsR0FHWCxNQUFNLHNCQUFzQixDQUFBO0FBVzdCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFjLDJCQUEyQixDQUFBO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFVLCtCQUErQixDQUFBO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBZ0IsMkJBQTJCLENBQUE7QUFHcEUsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7O0lBQ3JCLFlBQ1UsSUFBZ0IsRUFDaEIsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLFVBQTZCLEVBQzdCLGNBQXFDO1FBSnJDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQXVCO0lBQzVDLENBQUM7Ozs7O0lBRUosS0FBSyxDQUFDLE9BQTJCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGNBQWMs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QUFFLENBQUMsS0FBSzs7Z0JBQzFCLFVBQVUsR0FBRyxHQUFHLEVBQUU7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUN2QyxDQUFDOztnQkFFRyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztpQkFDNUQsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBRTNDLENBQUMsQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7OztZQWpMRixVQUFVOzs7O1lBbkJULFVBQVU7WUFjSCxnQkFBZ0I7WUFHaEIsY0FBYztZQUZkLGlCQUFpQjtZQUNqQixxQkFBcUI7Ozs7Ozs7SUFNMUIsMEJBQXdCOzs7OztJQUN4QixzQ0FBMEM7Ozs7O0lBQzFDLG9DQUFzQzs7Ozs7SUFDdEMsZ0NBQXFDOzs7OztJQUNyQyxvQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yLFxuICBwaXBlLFxufSBmcm9tICdyeGpzJ1xuaW1wb3J0IHtcbiAgbWFwLCBtZXJnZU1hcCxcbiAgY2F0Y2hFcnJvcixcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUmVzcG9uc2UgfSAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnXG5cbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsXG4gIEh0dHBIZWFkZXJzLFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuXG5pbXBvcnQge1xuICBBcGlVcmwsXG4gIGlBcGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlBcGlSZXNwb25zZSxcbiAgaUFwaVNlcnZpY2UsXG4gIGlBcGlFcnJvclJlc3BvbnNlLFxuICBpQXBpUmVxdWVzdFBheWxvYWQsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IENzdlRvSnNvblNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4uLy4uL2Nzdi10by1qc29uLnNlcnZpY2UnXG5pbXBvcnQgeyBSZXF1ZXN0VXJsQnVpbGRlciB9ICAgICBmcm9tICcuL3JlcXVlc3QtdXJsLWJ1aWxkZXIuc2VydmljZSdcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQnVpbGRlciB9IGZyb20gJy4vcmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZSdcbmltcG9ydCB7IFJlc3BvbnNlUGFyc2VyIH0gICAgICAgICAgIGZyb20gJy4vcmVzcG9uc2UtcGFyc2VyLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIGltcGxlbWVudHMgaUFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjc3ZUb0pzb25TZXJ2aWNlOiBDc3ZUb0pzb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVzcG9uc2VQYXJzZXI6IFJlc3BvbnNlUGFyc2VyLFxuICAgIHByaXZhdGUgdXJsQnVpbGRlcjogUmVxdWVzdFVybEJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBvcHRpb25zQnVpbGRlcjogUmVxdWVzdE9wdGlvbnNCdWlsZGVyLFxuICApIHt9XG5cbiAgcG9zdCQocGF5bG9hZDogaUFwaVJlcXVlc3RQYXlsb2FkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0JCgncG9zdCcsIHBheWxvYWQpXG4gIH1cblxuICBkZWxldGUkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCQoJ2RlbGV0ZScsIHBheWxvYWQpXG4gIH1cblxuICBnZXQkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCQoJ2dldCcsIHBheWxvYWQpXG4gIH1cblxuICBwdXQkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCQoJ3B1dCcsIHBheWxvYWQpXG4gIH1cblxuICAvLyBBbGlhc2VzXG4gIHVwZGF0ZSQocGF5bG9hZDogaUFwaVJlcXVlc3RQYXlsb2FkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wdXQkKHBheWxvYWQpXG4gIH1cblxuICBjcmVhdGUkKHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCQocGF5bG9hZClcbiAgfVxuXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuICBwcml2YXRlIGhhbmRsZVJlcXVlc3QkKG1ldGhvZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVSZXF1ZXN0JChtZXRob2QsIHBheWxvYWQpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogaUFwaUVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IkKGVycm9yLCBwYXlsb2FkKVxuICAgICAgfSksXG4gICAgICBtZXJnZU1hcCgocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NlZFJlc3BvbnNlJChyZXNwb25zZSwgcGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIpXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yJChcbiAgICBlcnJvcjogaUFwaUVycm9yUmVzcG9uc2UsXG4gICAgcGF5bG9hZDogaUFwaVJlcXVlc3RQYXlsb2FkXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIEFQSSBTZXJ2aWNlOiBcIiArIGVycm9yKVxuICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnJvcilcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVJlcXVlc3QkKFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHBheWxvYWQ6IGlBcGlSZXF1ZXN0UGF5bG9hZFxuICApIHtcbiAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwocGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIpXG4gICAgbGV0IGh0dHBPcHRzID0gdGhpcy5nZXRIdHRwT3B0cyhtZXRob2QsIHVybCwgcGF5bG9hZClcblxuICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kXSh1cmwsIGh0dHBPcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVcmwocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy51cmxCdWlsZGVyLmJ1aWxkKHJpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIdHRwT3B0cyhcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IEFwaVVybCxcbiAgICBwYXlsb2FkOiBpQXBpUmVxdWVzdFBheWxvYWRcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc0J1aWxkZXIuYnVpbGQobWV0aG9kLCB1cmwsIHBheWxvYWQpXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NlZFJlc3BvbnNlJChcbiAgICBhcGlSZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4sXG4gICAgcmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXJcbiAgKSB7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uRGF0YSQoYXBpUmVzcG9uc2UuYm9keSkucGlwZShcbiAgICAgIG1hcChqc29uID0+IHRoaXMuc2FuaXRpemVkRGF0YShqc29uLCByaSkpLFxuICAgICAgbWFwKGpzb24gPT4gdGhpcy5idWlsZEFwaVJlc3BvbnNlKGpzb24sIHJpKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBqc29uRGF0YSQoZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYoXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3N2VG9Kc29uRGF0YSQoZGF0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpXG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGVtcHR5IGtleXMgYW5kIGF0dHJpYnV0ZXNcbiAgcHJpdmF0ZSBzYW5pdGl6ZWREYXRhKGRhdGEsIHJpKSB7XG4gICAgdmFyIGlzU2ltcGxlVmFyaWFibGUgPSAodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiAoXy5pc051bWJlcih2YWx1ZSkgfHwgXy5pc1N0cmluZyh2YWx1ZSkpXG4gICAgfVxuXG4gICAgdmFyIGlzUHJlc2VudCA9IChvYmopID0+IHtcbiAgICAgIHJldHVybiBvYmogIT09ICcnICYmIG9iaiAhPT0gbnVsbFxuICAgIH1cblxuICAgIGxldCBzYW5pdGl6ZSA9IChvYmplY3QpID0+IHtcbiAgICAgIC8vIFJlbW92ZWQgdGhpcyBwaWNrQnkgY2FsbCAtLSBudWxsIGFuZCBlbXB0eSBzdHJpbmdcbiAgICAgIC8vIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGJ5IGJhY2tlbmQgYW5kIHNob3VsZFxuICAgICAgLy8gYmUgcHJlc2VydmVkOyBtaWdodCB0aGlzIGNhdXNlIGlzc3VlcyBlbHNld2hlcmU/XG4gICAgICAvLyBUaGV5IHNob3VsZCBiZSBmaXhlZCBpbiB0aGUgY29uc3VtZXIuXG4gICAgICAvL3ZhciBmaWx0ZXJlZE9iamVjdCA9IF8ucGlja0J5KG9iamVjdCwgaXNQcmVzZW50KVxuICAgICAgdmFyIGZpbHRlcmVkT2JqZWN0ID0gb2JqZWN0XG5cbiAgICAgIGxldCBmaW5hbEZpbHRlciA9IChvYmopID0+IHtcbiAgICAgICAgaWYob2JqICE9PSBmaWx0ZXJlZE9iamVjdCAmJiBfLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgICAgIHJldHVybiBzYW5pdGl6ZShvYmopXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihfLmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIGlmKF8uaXNFbXB0eShvYmopIHx8IGlzU2ltcGxlVmFyaWFibGUob2JqWzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gXy5yZWplY3QoXy5tYXAob2JqLCBzYW5pdGl6ZSksIF8uaXNFbXB0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF8uY2xvbmVEZWVwV2l0aChmaWx0ZXJlZE9iamVjdCwgZmluYWxGaWx0ZXIpXG4gICAgfVxuXG4gICAgdmFyIHNhbml0aXplZERhdGFcbiAgICBpZihfLmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHNhbml0aXplZERhdGEgPSBfLm1hcChkYXRhLCBzYW5pdGl6ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzYW5pdGl6ZWREYXRhID0gc2FuaXRpemUoZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIHNhbml0aXplZERhdGFcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBcGlSZXNwb25zZShkYXRhLCByaTogaUFwaVJlc291cmNlSWRlbnRpZmllcik6IGlBcGlSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHRoaXMucmVzcG9uc2VQYXJzZXIucGFyc2UoZGF0YSksXG4gICAgICByZXNvdXJjZUlkZW50aWZpZXI6IHJpLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3N2VG9Kc29uRGF0YSQoZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IG9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHZhciBqc29uRGF0YSA9IFtdXG4gICAgICB2YXIganNvbkFwaVJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiBqc29uRGF0YSxcbiAgICAgICAgaW5jbHVkZWQ6IFtdLFxuICAgICAgfVxuXG4gICAgICBsZXQgb25OZXh0ID0gKGpzb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gKHByb3BWYWx1ZSwgcHJvcE5hbWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gIV8uaXNOaWwocHJvcFZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzYW5pdGl6ZWRKc29uID0gXy5waWNrQnkoanNvbiwgaXNWYWxpZClcblxuXG4gICAgICAgIGpzb25EYXRhLnB1c2goanNvbilcbiAgICAgIH1cbiAgICAgIGxldCBvbkVycm9yID0gKGVycm9yKSA9PiBlcnJvclxuICAgICAgbGV0IG9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0KGpzb25BcGlSZXNwb25zZSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbnZlcnRlciA9IHRoaXMuY3N2VG9Kc29uU2VydmljZS5jc3ZUb0pzb25Gcm9tU3RyaW5nKGRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlKVxuXG4gICAgfSlcblxuICAgIHJldHVybiBvYnNlcnZhYmxlXG4gIH1cbn1cblxuIl19