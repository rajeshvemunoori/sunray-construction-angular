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
export class FormItemDataFactory {
    /**
     * @param {?} formControlDataFactory
     * @param {?} formControlValidatorFactory
     */
    constructor(formControlDataFactory, formControlValidatorFactory) {
        this.formControlDataFactory = formControlDataFactory;
        this.formControlValidatorFactory = formControlValidatorFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    build(entity) {
        /** @type {?} */
        let factory = this.resolveParamsFactory(entity);
        return factory.build(entity);
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    resolveParamsFactory(entity) {
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
    }
}
FormItemDataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormItemDataFactory.ctorParameters = () => [
    { type: FormControlDataFactory },
    { type: FormControlValidatorFactory }
];
/** @nocollapse */ FormItemDataFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormItemDataFactory_Factory() { return new FormItemDataFactory(i0.inject(i1.FormControlDataFactory), i0.inject(i2.FormControlValidatorFactory)); }, token: FormItemDataFactory, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLWRhdGEtZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvZGF0YS1mYWN0b3JpZXMvZm9ybS1pdGVtLWRhdGEtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBTTFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFBO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFBOzs7O0FBS3RGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBQzlCLFlBQ1Usc0JBQThDLEVBQzlDLDJCQUF3RDtRQUR4RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDOUQsQ0FBQzs7Ozs7SUFFTCxLQUFLLENBQ0gsTUFBZTs7WUFFWCxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsTUFBZTtRQUMxQyxRQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQTthQUNuQztZQUNELEtBQUsscUJBQXFCLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUE7YUFDeEM7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDUCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQTthQUNuQztTQUNGO0lBQ0gsQ0FBQzs7O1lBNUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLHNCQUFzQjtZQUN0QiwyQkFBMkI7Ozs7Ozs7O0lBT2hDLHFEQUFzRDs7Ozs7SUFDdEQsMERBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2VudGl0eS9pbmRleCdcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2xEYXRhRmFjdG9yeSB9IGZyb20gJy4vZm9ybS1jb250cm9sLWRhdGEtZmFjdG9yeS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLWNvbnRyb2wtdmFsaWRhdG9yLWZhY3Rvcnkuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUl0ZW1EYXRhRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUNvbnRyb2xEYXRhRmFjdG9yeTogRm9ybUNvbnRyb2xEYXRhRmFjdG9yeSxcbiAgICBwcml2YXRlIGZvcm1Db250cm9sVmFsaWRhdG9yRmFjdG9yeTogRm9ybUNvbnRyb2xWYWxpZGF0b3JGYWN0b3J5LFxuICApIHsgfVxuXG4gIGJ1aWxkKFxuICAgIGVudGl0eTogaUVudGl0eVxuICApOiBhbnkge1xuICAgIGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlUGFyYW1zRmFjdG9yeShlbnRpdHkpXG4gICAgcmV0dXJuIGZhY3RvcnkuYnVpbGQoZW50aXR5KVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlUGFyYW1zRmFjdG9yeShlbnRpdHk6IGlFbnRpdHkpIHtcbiAgICBzd2l0Y2goZW50aXR5LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXNvdXJjZS1hdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xEYXRhRmFjdG9yeVxuICAgICAgfVxuICAgICAgY2FzZSBcInJlc291cmNlLXZhbGlkYXRvcnNcIjoge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbFZhbGlkYXRvckZhY3RvcnlcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xEYXRhRmFjdG9yeVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19