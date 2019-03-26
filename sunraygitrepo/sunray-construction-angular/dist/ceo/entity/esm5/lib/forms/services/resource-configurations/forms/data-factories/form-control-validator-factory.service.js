/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Validators as NgValidators, } from '@angular/forms';
import * as i0 from "@angular/core";
var FormControlValidatorFactory = /** @class */ (function () {
    function FormControlValidatorFactory() {
    }
    /**
     * @param {?} resolvable
     * @return {?}
     */
    FormControlValidatorFactory.prototype.build = /**
     * @param {?} resolvable
     * @return {?}
     */
    function (resolvable) {
        return {
            type: 'form-item',
            data: {
                control: {
                    validators: [NgValidators.required],
                }
            }
        };
    };
    FormControlValidatorFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FormControlValidatorFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormControlValidatorFactory_Factory() { return new FormControlValidatorFactory(); }, token: FormControlValidatorFactory, providedIn: "root" });
    return FormControlValidatorFactory;
}());
export { FormControlValidatorFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLXZhbGlkYXRvci1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9ucy9mb3Jtcy9kYXRhLWZhY3Rvcmllcy9mb3JtLWNvbnRyb2wtdmFsaWRhdG9yLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQ0wsVUFBVSxJQUFJLFlBQVksR0FDM0IsTUFBTSxnQkFBZ0IsQ0FBQTs7QUFTdkI7SUFBQTtLQWlCQzs7Ozs7SUFiQywyQ0FBSzs7OztJQUFMLFVBQ0UsVUFBbUI7UUFHbkIsT0FBTztZQUNMLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUU7b0JBQ1AsVUFBVSxFQUFFLENBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBRTtpQkFDdEM7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDOztnQkFoQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3NDQW5CRDtDQWtDQyxBQWpCRCxJQWlCQztTQWRZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgT2JzZXJ2YWJsZVxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIFZhbGlkYXRvcnMgYXMgTmdWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHsga2ViYWJDYXNlIH0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxuICBpRW50aXR5Q29sbGVjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZW50aXR5L2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbFZhbGlkYXRvckZhY3Rvcnkge1xuICBidWlsZChcbiAgICByZXNvbHZhYmxlOiBpRW50aXR5LFxuICApOiBhbnkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdmb3JtLWl0ZW0nLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgdmFsaWRhdG9yczogWyBOZ1ZhbGlkYXRvcnMucmVxdWlyZWQgXSAsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==