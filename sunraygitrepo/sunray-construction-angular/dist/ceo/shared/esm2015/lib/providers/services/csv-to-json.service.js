/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import * as csv_ from "csvtojson";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @type {?} */
const csvToJson = csv_;
export class CsvToJsonService {
    constructor() { }
    /**
     * @param {?=} csvString
     * @param {?=} opts
     * @return {?}
     */
    csvToJsonFromString(csvString = '', opts = {}) {
        /** @type {?} */
        let defaults = {
            noheader: false,
        };
        opts = _.extend(opts, defaults);
        return csvToJson(opts).fromString(csvString);
    }
    /**
     * @param {?=} filePath
     * @return {?}
     */
    csvToJsonFromFilePath(filePath = '') {
        return csvToJson().fromFile(filePath);
    }
}
CsvToJsonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CsvToJsonService.ctorParameters = () => [];
/** @nocollapse */ CsvToJsonService.ngInjectableDef = i0.defineInjectable({ factory: function CsvToJsonService_Factory() { return new CsvToJsonService(); }, token: CsvToJsonService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LXRvLWpzb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9zZXJ2aWNlcy9jc3YtdG8tanNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEtBQUssSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7TUFFckMsU0FBUyxHQUFHLElBQUk7QUFLdEIsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixnQkFBZ0IsQ0FBQzs7Ozs7O0lBRWpCLG1CQUFtQixDQUFDLFlBQW9CLEVBQUUsRUFBRSxPQUFZLEVBQUU7O1lBQ3BELFFBQVEsR0FBRztZQUNiLFFBQVEsRUFBRSxLQUFLO1NBQ2hCO1FBQ0QsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5QyxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFdBQW1CLEVBQUU7UUFDekMsT0FBTyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgKiBhcyBjc3ZfIGZyb20gXCJjc3Z0b2pzb25cIjtcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBjc3ZUb0pzb24gPSBjc3ZfO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDc3ZUb0pzb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjc3ZUb0pzb25Gcm9tU3RyaW5nKGNzdlN0cmluZzogc3RyaW5nID0gJycsIG9wdHM6IGFueSA9IHt9KTogYW55IHtcbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICBub2hlYWRlcjogZmFsc2UsXG4gICAgfVxuICAgIG9wdHMgPSBfLmV4dGVuZChvcHRzLCBkZWZhdWx0cylcbiAgICByZXR1cm4gY3N2VG9Kc29uKG9wdHMpLmZyb21TdHJpbmcoY3N2U3RyaW5nKVxuICB9XG5cbiAgY3N2VG9Kc29uRnJvbUZpbGVQYXRoKGZpbGVQYXRoOiBzdHJpbmcgPSAnJyk6IGFueXtcbiAgICByZXR1cm4gY3N2VG9Kc29uKCkuZnJvbUZpbGUoZmlsZVBhdGgpXG4gIH1cbn1cbiJdfQ==