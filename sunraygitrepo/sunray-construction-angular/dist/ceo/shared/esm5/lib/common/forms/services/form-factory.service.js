/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroupFactory } from './form-group-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-group-factory.service";
var FormFactory = /** @class */ (function () {
    function FormFactory(formGroupFactory) {
        this.formGroupFactory = formGroupFactory;
    }
    /**
     * @param {?} members
     * @return {?}
     */
    FormFactory.prototype.build = /**
     * @param {?} members
     * @return {?}
     */
    function (members) {
        /** @type {?} */
        var data = {
            members: members
        };
        /** @type {?} */
        var params = {
            type: (/** @type {?} */ ('form')),
            data: (/** @type {?} */ (data))
        };
        return this.formGroupFactory.build(params);
    };
    FormFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormFactory.ctorParameters = function () { return [
        { type: FormGroupFactory }
    ]; };
    /** @nocollapse */ FormFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory(i0.inject(i1.FormGroupFactory)); }, token: FormFactory, providedIn: "root" });
    return FormFactory;
}());
export { FormFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormFactory.prototype.formGroupFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvc2VydmljZXMvZm9ybS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFrQjFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFBOzs7QUFFL0Q7SUFJRSxxQkFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN4QyxDQUFDOzs7OztJQUVMLDJCQUFLOzs7O0lBQUwsVUFBTSxPQUF1Qjs7WUFDdkIsSUFBSSxHQUFHO1lBQ1QsT0FBTyxFQUFFLE9BQU87U0FDakI7O1lBQ0csTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLG1CQUFBLE1BQU0sRUFBa0I7WUFDOUIsSUFBSSxFQUFFLG1CQUFBLElBQUksRUFBbUI7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7Z0JBakJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsZ0JBQWdCOzs7c0JBcEJ6QjtDQXdDQyxBQWxCRCxJQWtCQztTQWZZLFdBQVc7Ozs7OztJQUVwQix1Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250cm9sIGFzIE5nRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCBhcyBOZ0Zvcm1Hcm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIEZvcm1NZW1iZXJUeXBlLFxuICBpRm9ybVdyYXBwZXIsXG4gIGlGb3JtTWVtYmVyTWFwLFxuICBpRm9ybUdyb3VwUHJvcHMsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1XcmFwcGVyLFxufSBmcm9tICcuLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQgeyBGb3JtR3JvdXBGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLWdyb3VwLWZhY3Rvcnkuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Hcm91cEZhY3Rvcnk6IEZvcm1Hcm91cEZhY3RvcnlcbiAgKSB7IH1cblxuICBidWlsZChtZW1iZXJzOiBpRm9ybU1lbWJlck1hcCk6IGlGb3JtV3JhcHBlciB7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBtZW1iZXJzOiBtZW1iZXJzXG4gICAgfVxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICB0eXBlOiAnZm9ybScgYXMgRm9ybU1lbWJlclR5cGUsXG4gICAgICBkYXRhOiBkYXRhIGFzIGlGb3JtR3JvdXBQcm9wc1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXBGYWN0b3J5LmJ1aWxkKHBhcmFtcylcbiAgfVxufVxuIl19