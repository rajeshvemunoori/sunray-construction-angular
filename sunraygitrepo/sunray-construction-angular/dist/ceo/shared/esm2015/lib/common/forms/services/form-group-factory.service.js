/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroup, FormWrapper, } from '../classes/index';
import { NgFormGroupFactory } from './ng-forms/index';
import * as i0 from "@angular/core";
import * as i1 from "./ng-forms/form-group-factory.service";
export class FormGroupFactory {
    /**
     * @param {?} ngFormGroupFactory
     */
    constructor(ngFormGroupFactory) {
        this.ngFormGroupFactory = ngFormGroupFactory;
        this.type = 'form-group';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        /** @type {?} */
        let formGroup = this.buildFormGroup(params);
        formGroup.ngControl = this.buildNgFormGroup(formGroup);
        return formGroup;
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    buildFormGroup(params) {
        /** @type {?} */
        let formMemberCtor = this.resolveFormGroupCtor(params);
        return new formMemberCtor((/** @type {?} */ (params.data)));
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    resolveFormGroupCtor(params) {
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
    }
    /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    buildNgFormGroup(formGroup) {
        return this.ngFormGroupFactory.build(formGroup);
    }
}
FormGroupFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormGroupFactory.ctorParameters = () => [
    { type: NgFormGroupFactory }
];
/** @nocollapse */ FormGroupFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory(i0.inject(i1.FormGroupFactory)); }, token: FormGroupFactory, providedIn: "root" });
if (false) {
    /** @type {?} */
    FormGroupFactory.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FormGroupFactory.prototype.ngFormGroupFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvc2VydmljZXMvZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFvQjFDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxHQUNaLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7OztBQUtyRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBSzNCLFlBQ1Usa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFIaEQsU0FBSSxHQUFtQixZQUFZLENBQUE7SUFJL0IsQ0FBQzs7Ozs7SUFFTCxLQUFLLENBQUMsTUFBZ0M7O1lBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUMzQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0RCxPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsTUFBZ0M7O1lBQ2pELGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBQ3RELE9BQU8sSUFBSSxjQUFjLENBQUMsbUJBQWlCLE1BQU0sQ0FBQyxJQUFJLEVBQUEsQ0FBQyxDQUFBO0lBQ3pELENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUMxQixNQUFnQztRQUdoQyxRQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxZQUFZLENBQUMsQ0FBQztnQkFDakIsT0FBTyxTQUFTLENBQUE7YUFDakI7WUFDRCxLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUNYLE9BQU8sV0FBVyxDQUFBO2FBQ25CO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxTQUFTLENBQUE7YUFDakI7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLFNBQXFCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNqRCxDQUFDOzs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsa0JBQWtCOzs7OztJQVF6QixnQ0FBbUM7Ozs7O0lBR2pDLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCBhcyBOZ0Zvcm1Db250cm9sLFxuICBGb3JtR3JvdXAgYXMgTmdGb3JtR3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBGb3JtTWVtYmVyVHlwZSxcbiAgaUZhY3RvcnksXG4gIGlGb3JtTWVtYmVyLFxuICBpRm9ybUdyb3VwLFxuICBpRm9ybUdyb3VwUHJvcHMsXG4gIGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgaUNvbnN0cnVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1Hcm91cCxcbiAgRm9ybVdyYXBwZXIsXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7IE5nRm9ybUdyb3VwRmFjdG9yeSB9IGZyb20gJy4vbmctZm9ybXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cEZhY3RvcnlcbiAgaW1wbGVtZW50cyBpRmFjdG9yeTxpRm9ybUdyb3VwLCBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+IHtcblxuICB0eXBlOiBGb3JtTWVtYmVyVHlwZSA9ICdmb3JtLWdyb3VwJ1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdGb3JtR3JvdXBGYWN0b3J5OiBOZ0Zvcm1Hcm91cEZhY3RvcnksXG4gICkgeyB9XG5cbiAgYnVpbGQocGFyYW1zOiBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMpOiBpRm9ybUdyb3VwIHtcbiAgICBsZXQgZm9ybUdyb3VwID0gdGhpcy5idWlsZEZvcm1Hcm91cChwYXJhbXMpXG4gICAgZm9ybUdyb3VwLm5nQ29udHJvbCA9IHRoaXMuYnVpbGROZ0Zvcm1Hcm91cChmb3JtR3JvdXApXG4gICAgcmV0dXJuIGZvcm1Hcm91cFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm1Hcm91cChwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyk6IGlGb3JtR3JvdXAge1xuICAgIGxldCBmb3JtTWVtYmVyQ3RvciA9IHRoaXMucmVzb2x2ZUZvcm1Hcm91cEN0b3IocGFyYW1zKVxuICAgIHJldHVybiBuZXcgZm9ybU1lbWJlckN0b3IoPGlGb3JtR3JvdXBQcm9wcz5wYXJhbXMuZGF0YSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUZvcm1Hcm91cEN0b3IoXG4gICAgcGFyYW1zOiBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXNcbiAgKTogaUNvbnN0cnVjdG9yPGlGb3JtR3JvdXA+IHtcblxuICAgIHN3aXRjaChwYXJhbXMudHlwZSkge1xuICAgICAgY2FzZSBcImZvcm0tZ3JvdXBcIjoge1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwXG4gICAgICB9XG4gICAgICBjYXNlIFwiZm9ybVwiOiB7XG4gICAgICAgIHJldHVybiBGb3JtV3JhcHBlclxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5nRm9ybUdyb3VwKGZvcm1Hcm91cDogaUZvcm1Hcm91cCk6IE5nRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5uZ0Zvcm1Hcm91cEZhY3RvcnkuYnVpbGQoZm9ybUdyb3VwKVxuICB9XG59XG4iXX0=