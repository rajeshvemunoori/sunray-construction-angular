/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControlDataFactory } from './form-control-data-factory.service';
import { FormControlValidatorFactory } from './form-control-validator-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-control-data-factory.service";
import * as i2 from "./form-control-validator-factory.service";
var FormItemDataFactory = /** @class */ (function () {
    function FormItemDataFactory(formControlDataFactory, formControlValidatorFactory) {
        this.formControlDataFactory = formControlDataFactory;
        this.formControlValidatorFactory = formControlValidatorFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    FormItemDataFactory.prototype.build = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var factory = this.resolveParamsFactory(entity);
        return factory.build(entity);
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    FormItemDataFactory.prototype.resolveParamsFactory = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        switch (entity.type) {
            case "resource-attributes": {
                return this.formControlDataFactory;
            }
            case "resource-validators": {
                return this.formControlValidatorFactory;
            }
            default: {
                return this.formControlDataFactory;
            }
        }
    };
    FormItemDataFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormItemDataFactory.ctorParameters = function () { return [
        { type: FormControlDataFactory },
        { type: FormControlValidatorFactory }
    ]; };
    /** @nocollapse */ FormItemDataFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormItemDataFactory_Factory() { return new FormItemDataFactory(i0.inject(i1.FormControlDataFactory), i0.inject(i2.FormControlValidatorFactory)); }, token: FormItemDataFactory, providedIn: "root" });
    return FormItemDataFactory;
}());
export { FormItemDataFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormItemDataFactory.prototype.formControlDataFactory;
    /**
     * @type {?}
     * @private
     */
    FormItemDataFactory.prototype.formControlValidatorFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLWRhdGEtZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvZGF0YS1mYWN0b3JpZXMvZm9ybS1pdGVtLWRhdGEtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBTTFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFBO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFBOzs7O0FBRXRGO0lBSUUsNkJBQ1Usc0JBQThDLEVBQzlDLDJCQUF3RDtRQUR4RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDOUQsQ0FBQzs7Ozs7SUFFTCxtQ0FBSzs7OztJQUFMLFVBQ0UsTUFBZTs7WUFFWCxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sa0RBQW9COzs7OztJQUE1QixVQUE2QixNQUFlO1FBQzFDLFFBQU8sTUFBTSxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLHFCQUFxQixDQUFDLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFBO2FBQ25DO1lBQ0QsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQTthQUN4QztZQUNELE9BQU8sQ0FBQyxDQUFDO2dCQUNQLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFBO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDOztnQkE1QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxzQkFBc0I7Z0JBQ3RCLDJCQUEyQjs7OzhCQVBwQztDQXNDQyxBQTdCRCxJQTZCQztTQTFCWSxtQkFBbUI7Ozs7OztJQUU1QixxREFBc0Q7Ozs7O0lBQ3RELDBEQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7IEZvcm1Db250cm9sRGF0YUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0tY29udHJvbC1kYXRhLWZhY3Rvcnkuc2VydmljZSdcbmltcG9ydCB7IEZvcm1Db250cm9sVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vZm9ybS1jb250cm9sLXZhbGlkYXRvci1mYWN0b3J5LnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1JdGVtRGF0YUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Db250cm9sRGF0YUZhY3Rvcnk6IEZvcm1Db250cm9sRGF0YUZhY3RvcnksXG4gICAgcHJpdmF0ZSBmb3JtQ29udHJvbFZhbGlkYXRvckZhY3Rvcnk6IEZvcm1Db250cm9sVmFsaWRhdG9yRmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChcbiAgICBlbnRpdHk6IGlFbnRpdHlcbiAgKTogYW55IHtcbiAgICBsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZVBhcmFtc0ZhY3RvcnkoZW50aXR5KVxuICAgIHJldHVybiBmYWN0b3J5LmJ1aWxkKGVudGl0eSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVBhcmFtc0ZhY3RvcnkoZW50aXR5OiBpRW50aXR5KSB7XG4gICAgc3dpdGNoKGVudGl0eS50eXBlKSB7XG4gICAgICBjYXNlIFwicmVzb3VyY2UtYXR0cmlidXRlc1wiOiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sRGF0YUZhY3RvcnlcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJyZXNvdXJjZS12YWxpZGF0b3JzXCI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xWYWxpZGF0b3JGYWN0b3J5XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sRGF0YUZhY3RvcnlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==