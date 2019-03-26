/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable, Inject, } from '@angular/core';
import { jsonToQueryParamsObject, } from '@ceo/core';
import { API_CONFIG, } from '../../../tokens/index';
export class RequestOptionsBuilder {
    /**
     * @param {?} apiConfig
     */
    constructor(apiConfig) {
        this.apiConfig = apiConfig;
    }
    /**
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    build(method, url, payload) {
        if (this.isBodyRequest(method)) {
            return this.getBody(payload.resourceIdentifier.data);
        }
        else {
            return this.getOptions(url, payload.resourceIdentifier);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getBody(data) {
        /** @type {?} */
        let body = this.sanitizedParams(data);
        body = _.merge({}, body, this.apiConfig.defaultQueryParams);
        return {
            body: body,
            observe: 'response',
        };
    }
    /**
     * @param {?} url
     * @param {?} ri
     * @return {?}
     */
    getOptions(url, ri) {
        return {
            params: this.getParams(ri),
            responseType: this.getResponseType(url),
            observe: 'response',
        };
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    getParams(ri) {
        /** @type {?} */
        let params = _.merge({}, this.apiConfig.defaultQueryParams, this.filterParams(ri));
        return jsonToQueryParamsObject(params);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getResponseType(url) {
        if (this.isTextResponseType(url)) {
            return 'text';
        }
        else {
            return 'json';
        }
    }
    /**
     * @protected
     * @param {?} method
     * @return {?}
     */
    isBodyRequest(method) {
        /** @type {?} */
        let bodyMethods = ['post', 'put'];
        return _.includes(bodyMethods, method);
    }
    /**
     * @protected
     * @param {?} url
     * @return {?}
     */
    isTextResponseType(url) {
        return _.endsWith(url, 'csv');
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    filterParams(ri) {
        /** @type {?} */
        let filter = this.getFilter(ri);
        if (filter) {
            return {
                filter: this.sanitizedParams(filter)
            };
        }
        else {
            return {};
        }
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getFilter(ri) {
        return _.get(ri, 'filter');
    }
    /**
     * @protected
     * @param {?} params
     * @return {?}
     */
    sanitizedParams(params) {
        /** @type {?} */
        let snakeCase = (value, key) => {
            return _.snakeCase(key);
        };
        return _.mapKeys(params, snakeCase);
    }
}
RequestOptionsBuilder.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RequestOptionsBuilder.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    RequestOptionsBuilder.prototype.apiConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1vcHRpb25zLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9zZXJ2aWNlcy9hcGkvYmFzZS9yZXF1ZXN0LW9wdGlvbnMtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQUt0QixPQUFPLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sV0FBVyxDQUFBO0FBY2xCLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSx1QkFBdUIsQ0FBQTtBQUc5QixNQUFNLE9BQU8scUJBQXFCOzs7O0lBQ2hDLFlBQzZCLFNBQVM7UUFBVCxjQUFTLEdBQVQsU0FBUyxDQUFBO0lBQ2xDLENBQUM7Ozs7Ozs7SUFFTCxLQUFLLENBQ0gsTUFBYyxFQUNkLEdBQVcsRUFDWCxPQUEyQjtRQUUzQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyRDthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUN4RDtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVM7O1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBRTNELE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVyxFQUFFLEVBQTBCO1FBQ2hELE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUE7SUFDSCxDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxFQUEwQjs7WUFDOUIsTUFBTSxHQUNSLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RSxPQUFPLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQUc7UUFDakIsSUFBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxNQUFNLENBQUE7U0FDZDthQUNJO1lBQ0gsT0FBTyxNQUFNLENBQUE7U0FDZDtJQUNILENBQUM7Ozs7OztJQUVTLGFBQWEsQ0FBQyxNQUFjOztZQUNoQyxXQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDeEMsQ0FBQzs7Ozs7O0lBRVMsa0JBQWtCLENBQUMsR0FBRztRQUM5QixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQy9CLENBQUM7Ozs7OztJQUVTLFlBQVksQ0FBQyxFQUEwQjs7WUFDM0MsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBRS9CLElBQUcsTUFBTSxFQUFFO1lBQ1QsT0FBTztnQkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7YUFDckMsQ0FBQTtTQUNGO2FBQ0k7WUFDSCxPQUFPLEVBQUUsQ0FBQTtTQUNWO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsU0FBUyxDQUFDLEVBQTBCO1FBQzVDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7Ozs7O0lBRVMsZUFBZSxDQUFDLE1BQU07O1lBQzFCLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM3QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDckMsQ0FBQzs7O1lBckZGLFVBQVU7Ozs7NENBR04sTUFBTSxTQUFDLFVBQVU7Ozs7SUFBbEIsMENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuaW1wb3J0IHsgSHR0cFBhcmFtc09wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cC9zcmMvcGFyYW1zJ1xuXG5pbXBvcnQge1xuICBqc29uVG9RdWVyeVBhcmFtc09iamVjdCxcbn0gZnJvbSAnQGNlby9jb3JlJ1xuXG5cbmltcG9ydCB7XG4gIEFwaVVybCxcbiAgaUFwaUNvbmZpZyxcbiAgaUFwaVF1ZXJ5UGFyYW1zLFxuICBpQXBpUmVxdWVzdFBhcmFtcyxcbiAgaUFwaVJlc291cmNlSWRlbnRpZmllcixcbiAgaUFwaVJlc291cmNlVHlwZUNvbmZpZyxcbiAgaUFwaVJlcXVlc3RPcHRpb25zLFxuICBpQXBpUmVxdWVzdFBheWxvYWQsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEFQSV9DT05GSUcsXG59IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pbmRleCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RPcHRpb25zQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQVBJX0NPTkZJRykgcHVibGljIGFwaUNvbmZpZyxcbiAgKSB7IH1cblxuICBidWlsZChcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IEFwaVVybCxcbiAgICBwYXlsb2FkOiBpQXBpUmVxdWVzdFBheWxvYWRcbiAgKSB7XG4gICAgaWYodGhpcy5pc0JvZHlSZXF1ZXN0KG1ldGhvZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEJvZHkocGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIuZGF0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25zKHVybCwgcGF5bG9hZC5yZXNvdXJjZUlkZW50aWZpZXIpXG4gICAgfVxuICB9XG5cbiAgZ2V0Qm9keShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGxldCBib2R5ID0gdGhpcy5zYW5pdGl6ZWRQYXJhbXMoZGF0YSlcbiAgICBib2R5ID0gXy5tZXJnZSh7fSwgYm9keSwgdGhpcy5hcGlDb25maWcuZGVmYXVsdFF1ZXJ5UGFyYW1zKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvZHk6IGJvZHksXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH1cbiAgfVxuXG4gIGdldE9wdGlvbnModXJsOiBBcGlVcmwsIHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKTogaUFwaVJlcXVlc3RPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB0aGlzLmdldFBhcmFtcyhyaSksXG4gICAgICByZXNwb25zZVR5cGU6IHRoaXMuZ2V0UmVzcG9uc2VUeXBlKHVybCksXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH1cbiAgfVxuICBcblxuICBnZXRQYXJhbXMocmk6IGlBcGlSZXNvdXJjZUlkZW50aWZpZXIpOiBhbnkge1xuICAgIGxldCBwYXJhbXMgPVxuICAgICAgXy5tZXJnZSh7fSwgdGhpcy5hcGlDb25maWcuZGVmYXVsdFF1ZXJ5UGFyYW1zLCB0aGlzLmZpbHRlclBhcmFtcyhyaSkpXG5cbiAgICByZXR1cm4ganNvblRvUXVlcnlQYXJhbXNPYmplY3QocGFyYW1zKVxuICB9XG5cbiAgZ2V0UmVzcG9uc2VUeXBlKHVybCk6IHN0cmluZyB7XG4gICAgaWYodGhpcy5pc1RleHRSZXNwb25zZVR5cGUodXJsKSkge1xuICAgICAgcmV0dXJuICd0ZXh0J1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAnanNvbidcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNCb2R5UmVxdWVzdChtZXRob2Q6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCBib2R5TWV0aG9kcyA9IFsncG9zdCcsICdwdXQnXVxuICAgIHJldHVybiBfLmluY2x1ZGVzKGJvZHlNZXRob2RzLCBtZXRob2QpXG4gIH1cblxuICBwcm90ZWN0ZWQgaXNUZXh0UmVzcG9uc2VUeXBlKHVybCkge1xuICAgIHJldHVybiBfLmVuZHNXaXRoKHVybCwgJ2NzdicpXG4gIH1cblxuICBwcm90ZWN0ZWQgZmlsdGVyUGFyYW1zKHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKSB7XG4gICAgbGV0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyKHJpKVxuXG4gICAgaWYoZmlsdGVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWx0ZXI6IHRoaXMuc2FuaXRpemVkUGFyYW1zKGZpbHRlcilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RmlsdGVyKHJpOiBpQXBpUmVzb3VyY2VJZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIF8uZ2V0KHJpLCAnZmlsdGVyJylcbiAgfVxuXG4gIHByb3RlY3RlZCBzYW5pdGl6ZWRQYXJhbXMocGFyYW1zKSB7XG4gICAgbGV0IHNuYWtlQ2FzZSA9ICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gXy5zbmFrZUNhc2Uoa2V5KVxuICAgIH1cbiAgICByZXR1cm4gXy5tYXBLZXlzKHBhcmFtcywgc25ha2VDYXNlKVxuICB9XG59XG4iXX0=