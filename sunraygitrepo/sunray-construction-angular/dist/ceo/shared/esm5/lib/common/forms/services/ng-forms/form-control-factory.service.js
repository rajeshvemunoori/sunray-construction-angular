/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl as NgFormControl, Validators as NgValidators, } from '@angular/forms';
import * as i0 from "@angular/core";
var FormControlFactory = /** @class */ (function () {
    function FormControlFactory() {
    }
    /**
     * @param {?} formControl
     * @return {?}
     */
    FormControlFactory.prototype.build = /**
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        return new NgFormControl(formControl.value, NgValidators.compose(formControl.validators));
    };
    FormControlFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FormControlFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory(); }, token: FormControlFactory, providedIn: "root" });
    return FormControlFactory;
}());
export { FormControlFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9zZXJ2aWNlcy9uZy1mb3Jtcy9mb3JtLWNvbnRyb2wtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFDTCxXQUFXLElBQUksYUFBYSxFQUM1QixVQUFVLElBQUksWUFBWSxHQUMzQixNQUFNLGdCQUFnQixDQUFBOztBQU12QjtJQUFBO0tBVUM7Ozs7O0lBTkMsa0NBQUs7Ozs7SUFBTCxVQUFNLFdBQXlCO1FBQzdCLE9BQU8sSUFBSSxhQUFhLENBQ3RCLFdBQVcsQ0FBQyxLQUFLLEVBQ2pCLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUM3QyxDQUFBO0lBQ0gsQ0FBQzs7Z0JBVEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzZCQWJEO0NBcUJDLEFBVkQsSUFVQztTQVBZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCBhcyBOZ0Zvcm1Db250cm9sLFxuICBWYWxpZGF0b3JzIGFzIE5nVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIGlGb3JtQ29udHJvbCxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xGYWN0b3J5IHtcbiAgYnVpbGQoZm9ybUNvbnRyb2w6IGlGb3JtQ29udHJvbCk6IE5nRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiBuZXcgTmdGb3JtQ29udHJvbChcbiAgICAgIGZvcm1Db250cm9sLnZhbHVlLFxuICAgICAgTmdWYWxpZGF0b3JzLmNvbXBvc2UoZm9ybUNvbnRyb2wudmFsaWRhdG9ycyksXG4gICAgKVxuICB9XG59XG5cbiJdfQ==