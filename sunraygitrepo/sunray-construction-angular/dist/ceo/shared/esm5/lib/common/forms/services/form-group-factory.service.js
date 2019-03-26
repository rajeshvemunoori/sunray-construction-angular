/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroup, FormWrapper, } from '../classes/index';
import { NgFormGroupFactory } from './ng-forms/index';
import * as i0 from "@angular/core";
import * as i1 from "./ng-forms/form-group-factory.service";
var FormGroupFactory = /** @class */ (function () {
    function FormGroupFactory(ngFormGroupFactory) {
        this.ngFormGroupFactory = ngFormGroupFactory;
        this.type = 'form-group';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    FormGroupFactory.prototype.build = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var formGroup = this.buildFormGroup(params);
        formGroup.ngControl = this.buildNgFormGroup(formGroup);
        return formGroup;
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    FormGroupFactory.prototype.buildFormGroup = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var formMemberCtor = this.resolveFormGroupCtor(params);
        return new formMemberCtor((/** @type {?} */ (params.data)));
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    FormGroupFactory.prototype.resolveFormGroupCtor = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        switch (params.type) {
            case "form-group": {
                return FormGroup;
            }
            case "form": {
                return FormWrapper;
            }
            default: {
                return FormGroup;
            }
        }
    };
    /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    FormGroupFactory.prototype.buildNgFormGroup = /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        return this.ngFormGroupFactory.build(formGroup);
    };
    FormGroupFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormGroupFactory.ctorParameters = function () { return [
        { type: NgFormGroupFactory }
    ]; };
    /** @nocollapse */ FormGroupFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory(i0.inject(i1.FormGroupFactory)); }, token: FormGroupFactory, providedIn: "root" });
    return FormGroupFactory;
}());
export { FormGroupFactory };
if (false) {
    /** @type {?} */
    FormGroupFactory.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FormGroupFactory.prototype.ngFormGroupFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvc2VydmljZXMvZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFvQjFDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxHQUNaLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7OztBQUVyRDtJQVFFLDBCQUNVLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSGhELFNBQUksR0FBbUIsWUFBWSxDQUFBO0lBSS9CLENBQUM7Ozs7O0lBRUwsZ0NBQUs7Ozs7SUFBTCxVQUFNLE1BQWdDOztZQUNoQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDM0MsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEQsT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQzs7Ozs7O0lBRU8seUNBQWM7Ozs7O0lBQXRCLFVBQXVCLE1BQWdDOztZQUNqRCxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUN0RCxPQUFPLElBQUksY0FBYyxDQUFDLG1CQUFpQixNQUFNLENBQUMsSUFBSSxFQUFBLENBQUMsQ0FBQTtJQUN6RCxDQUFDOzs7Ozs7SUFFTywrQ0FBb0I7Ozs7O0lBQTVCLFVBQ0UsTUFBZ0M7UUFHaEMsUUFBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssWUFBWSxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sU0FBUyxDQUFBO2FBQ2pCO1lBQ0QsS0FBSyxNQUFNLENBQUMsQ0FBQztnQkFDWCxPQUFPLFdBQVcsQ0FBQTthQUNuQjtZQUNELE9BQU8sQ0FBQyxDQUFDO2dCQUNQLE9BQU8sU0FBUyxDQUFBO2FBQ2pCO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTywyQ0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLFNBQXFCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNqRCxDQUFDOztnQkExQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxrQkFBa0I7OzsyQkF6QjNCO0NBc0VDLEFBM0NELElBMkNDO1NBeENZLGdCQUFnQjs7O0lBRzNCLGdDQUFtQzs7Ozs7SUFHakMsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250cm9sIGFzIE5nRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCBhcyBOZ0Zvcm1Hcm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIEZvcm1NZW1iZXJUeXBlLFxuICBpRmFjdG9yeSxcbiAgaUZvcm1NZW1iZXIsXG4gIGlGb3JtR3JvdXAsXG4gIGlGb3JtR3JvdXBQcm9wcyxcbiAgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBpQ29uc3RydWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBGb3JtV3JhcHBlcixcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHsgTmdGb3JtR3JvdXBGYWN0b3J5IH0gZnJvbSAnLi9uZy1mb3Jtcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwRmFjdG9yeVxuICBpbXBsZW1lbnRzIGlGYWN0b3J5PGlGb3JtR3JvdXAsIGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz4ge1xuXG4gIHR5cGU6IEZvcm1NZW1iZXJUeXBlID0gJ2Zvcm0tZ3JvdXAnXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ0Zvcm1Hcm91cEZhY3Rvcnk6IE5nRm9ybUdyb3VwRmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyk6IGlGb3JtR3JvdXAge1xuICAgIGxldCBmb3JtR3JvdXAgPSB0aGlzLmJ1aWxkRm9ybUdyb3VwKHBhcmFtcylcbiAgICBmb3JtR3JvdXAubmdDb250cm9sID0gdGhpcy5idWlsZE5nRm9ybUdyb3VwKGZvcm1Hcm91cClcbiAgICByZXR1cm4gZm9ybUdyb3VwXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybUdyb3VwKHBhcmFtczogaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zKTogaUZvcm1Hcm91cCB7XG4gICAgbGV0IGZvcm1NZW1iZXJDdG9yID0gdGhpcy5yZXNvbHZlRm9ybUdyb3VwQ3RvcihwYXJhbXMpXG4gICAgcmV0dXJuIG5ldyBmb3JtTWVtYmVyQ3Rvcig8aUZvcm1Hcm91cFByb3BzPnBhcmFtcy5kYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRm9ybUdyb3VwQ3RvcihcbiAgICBwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtc1xuICApOiBpQ29uc3RydWN0b3I8aUZvcm1Hcm91cD4ge1xuXG4gICAgc3dpdGNoKHBhcmFtcy50eXBlKSB7XG4gICAgICBjYXNlIFwiZm9ybS1ncm91cFwiOiB7XG4gICAgICAgIHJldHVybiBGb3JtR3JvdXBcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJmb3JtXCI6IHtcbiAgICAgICAgcmV0dXJuIEZvcm1XcmFwcGVyXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBGb3JtR3JvdXBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkTmdGb3JtR3JvdXAoZm9ybUdyb3VwOiBpRm9ybUdyb3VwKTogTmdGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLm5nRm9ybUdyb3VwRmFjdG9yeS5idWlsZChmb3JtR3JvdXApXG4gIH1cbn1cbiJdfQ==