/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroupFactory } from './form-group-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-group-factory.service";
export class FormFactory {
    /**
     * @param {?} formGroupFactory
     */
    constructor(formGroupFactory) {
        this.formGroupFactory = formGroupFactory;
    }
    /**
     * @param {?} members
     * @return {?}
     */
    build(members) {
        /** @type {?} */
        let data = {
            members: members
        };
        /** @type {?} */
        let params = {
            type: (/** @type {?} */ ('form')),
            data: (/** @type {?} */ (data))
        };
        return this.formGroupFactory.build(params);
    }
}
FormFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormFactory.ctorParameters = () => [
    { type: FormGroupFactory }
];
/** @nocollapse */ FormFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory(i0.inject(i1.FormGroupFactory)); }, token: FormFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormFactory.prototype.formGroupFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvc2VydmljZXMvZm9ybS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFrQjFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFBOzs7QUFLL0QsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN4QyxDQUFDOzs7OztJQUVMLEtBQUssQ0FBQyxPQUF1Qjs7WUFDdkIsSUFBSSxHQUFHO1lBQ1QsT0FBTyxFQUFFLE9BQU87U0FDakI7O1lBQ0csTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLG1CQUFBLE1BQU0sRUFBa0I7WUFDOUIsSUFBSSxFQUFFLG1CQUFBLElBQUksRUFBbUI7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGdCQUFnQjs7Ozs7Ozs7SUFPckIsdUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCBhcyBOZ0Zvcm1Db250cm9sLFxuICBGb3JtR3JvdXAgYXMgTmdGb3JtR3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBGb3JtTWVtYmVyVHlwZSxcbiAgaUZvcm1XcmFwcGVyLFxuICBpRm9ybU1lbWJlck1hcCxcbiAgaUZvcm1Hcm91cFByb3BzLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtV3JhcHBlcixcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHsgRm9ybUdyb3VwRmFjdG9yeSB9IGZyb20gJy4vZm9ybS1ncm91cC1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtR3JvdXBGYWN0b3J5OiBGb3JtR3JvdXBGYWN0b3J5XG4gICkgeyB9XG5cbiAgYnVpbGQobWVtYmVyczogaUZvcm1NZW1iZXJNYXApOiBpRm9ybVdyYXBwZXIge1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgbWVtYmVyczogbWVtYmVyc1xuICAgIH1cbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgdHlwZTogJ2Zvcm0nIGFzIEZvcm1NZW1iZXJUeXBlLFxuICAgICAgZGF0YTogZGF0YSBhcyBpRm9ybUdyb3VwUHJvcHNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwRmFjdG9yeS5idWlsZChwYXJhbXMpXG4gIH1cbn1cbiJdfQ==