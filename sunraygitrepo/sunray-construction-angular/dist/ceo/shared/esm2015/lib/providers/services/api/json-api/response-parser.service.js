/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ResponseParser {
    /**
     * @param {?} payload
     * @return {?}
     */
    parse(payload) {
        return _.castArray(payload.data).
            concat(this.loadIncluded(payload));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    loadIncluded(data) {
        /** @type {?} */
        let buildIncluded = (payloadData) => {
            return payloadData;
        };
        return _.map(data.included, buildIncluded);
    }
}
ResponseParser.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ResponseParser.ngInjectableDef = i0.defineInjectable({ factory: function ResponseParser_Factory() { return new ResponseParser(); }, token: ResponseParser, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtcGFyc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvYXBpL2pzb24tYXBpL3Jlc3BvbnNlLXBhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQU8xQyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDekIsS0FBSyxDQUFDLE9BQVk7UUFDaEIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsSUFBSTs7WUFDbkIsYUFBYSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxXQUFXLENBQUE7UUFDcEIsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQzVDLENBQUM7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgaVJlc3BvbnNlUGFyc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VQYXJzZXIgaW1wbGVtZW50cyBpUmVzcG9uc2VQYXJzZXIgeyBcbiAgcGFyc2UocGF5bG9hZDogYW55KTogYW55IHtcbiAgICByZXR1cm4gXy5jYXN0QXJyYXkocGF5bG9hZC5kYXRhKS5cbiAgICAgIGNvbmNhdCh0aGlzLmxvYWRJbmNsdWRlZChwYXlsb2FkKSlcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEluY2x1ZGVkKGRhdGEpIHtcbiAgICBsZXQgYnVpbGRJbmNsdWRlZCA9IChwYXlsb2FkRGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHBheWxvYWREYXRhXG4gICAgfVxuXG4gICAgcmV0dXJuIF8ubWFwKGRhdGEuaW5jbHVkZWQsIGJ1aWxkSW5jbHVkZWQpXG4gIH1cbn1cblxuIl19