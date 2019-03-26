/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import * as csv_ from "csvtojson";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @type {?} */
var csvToJson = csv_;
var CsvToJsonService = /** @class */ (function () {
    function CsvToJsonService() {
    }
    /**
     * @param {?=} csvString
     * @param {?=} opts
     * @return {?}
     */
    CsvToJsonService.prototype.csvToJsonFromString = /**
     * @param {?=} csvString
     * @param {?=} opts
     * @return {?}
     */
    function (csvString, opts) {
        if (csvString === void 0) { csvString = ''; }
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var defaults = {
            noheader: false,
        };
        opts = _.extend(opts, defaults);
        return csvToJson(opts).fromString(csvString);
    };
    /**
     * @param {?=} filePath
     * @return {?}
     */
    CsvToJsonService.prototype.csvToJsonFromFilePath = /**
     * @param {?=} filePath
     * @return {?}
     */
    function (filePath) {
        if (filePath === void 0) { filePath = ''; }
        return csvToJson().fromFile(filePath);
    };
    CsvToJsonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CsvToJsonService.ctorParameters = function () { return []; };
    /** @nocollapse */ CsvToJsonService.ngInjectableDef = i0.defineInjectable({ factory: function CsvToJsonService_Factory() { return new CsvToJsonService(); }, token: CsvToJsonService, providedIn: "root" });
    return CsvToJsonService;
}());
export { CsvToJsonService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LXRvLWpzb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9zZXJ2aWNlcy9jc3YtdG8tanNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEtBQUssSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFFckMsU0FBUyxHQUFHLElBQUk7QUFFdEI7SUFJRTtJQUFnQixDQUFDOzs7Ozs7SUFFakIsOENBQW1COzs7OztJQUFuQixVQUFvQixTQUFzQixFQUFFLElBQWM7UUFBdEMsMEJBQUEsRUFBQSxjQUFzQjtRQUFFLHFCQUFBLEVBQUEsU0FBYzs7WUFDcEQsUUFBUSxHQUFHO1lBQ2IsUUFBUSxFQUFFLEtBQUs7U0FDaEI7UUFDRCxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDL0IsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7Ozs7O0lBRUQsZ0RBQXFCOzs7O0lBQXJCLFVBQXNCLFFBQXFCO1FBQXJCLHlCQUFBLEVBQUEsYUFBcUI7UUFDekMsT0FBTyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzJCQVZEO0NBeUJDLEFBakJELElBaUJDO1NBZFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCAqIGFzIGNzdl8gZnJvbSBcImNzdnRvanNvblwiO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IGNzdlRvSnNvbiA9IGNzdl87XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENzdlRvSnNvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGNzdlRvSnNvbkZyb21TdHJpbmcoY3N2U3RyaW5nOiBzdHJpbmcgPSAnJywgb3B0czogYW55ID0ge30pOiBhbnkge1xuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIG5vaGVhZGVyOiBmYWxzZSxcbiAgICB9XG4gICAgb3B0cyA9IF8uZXh0ZW5kKG9wdHMsIGRlZmF1bHRzKVxuICAgIHJldHVybiBjc3ZUb0pzb24ob3B0cykuZnJvbVN0cmluZyhjc3ZTdHJpbmcpXG4gIH1cblxuICBjc3ZUb0pzb25Gcm9tRmlsZVBhdGgoZmlsZVBhdGg6IHN0cmluZyA9ICcnKTogYW55e1xuICAgIHJldHVybiBjc3ZUb0pzb24oKS5mcm9tRmlsZShmaWxlUGF0aClcbiAgfVxufVxuIl19