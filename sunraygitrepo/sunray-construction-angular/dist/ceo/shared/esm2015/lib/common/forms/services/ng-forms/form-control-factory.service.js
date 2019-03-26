/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl as NgFormControl, Validators as NgValidators, } from '@angular/forms';
import * as i0 from "@angular/core";
export class FormControlFactory {
    /**
     * @param {?} formControl
     * @return {?}
     */
    build(formControl) {
        return new NgFormControl(formControl.value, NgValidators.compose(formControl.validators));
    }
}
FormControlFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ FormControlFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory(); }, token: FormControlFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9zZXJ2aWNlcy9uZy1mb3Jtcy9mb3JtLWNvbnRyb2wtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFDTCxXQUFXLElBQUksYUFBYSxFQUM1QixVQUFVLElBQUksWUFBWSxHQUMzQixNQUFNLGdCQUFnQixDQUFBOztBQVN2QixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM3QixLQUFLLENBQUMsV0FBeUI7UUFDN0IsT0FBTyxJQUFJLGFBQWEsQ0FDdEIsV0FBVyxDQUFDLEtBQUssRUFDakIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQzdDLENBQUE7SUFDSCxDQUFDOzs7WUFURixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wgYXMgTmdGb3JtQ29udHJvbCxcbiAgVmFsaWRhdG9ycyBhcyBOZ1ZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBpRm9ybUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sRmFjdG9yeSB7XG4gIGJ1aWxkKGZvcm1Db250cm9sOiBpRm9ybUNvbnRyb2wpOiBOZ0Zvcm1Db250cm9sIHtcbiAgICByZXR1cm4gbmV3IE5nRm9ybUNvbnRyb2woXG4gICAgICBmb3JtQ29udHJvbC52YWx1ZSxcbiAgICAgIE5nVmFsaWRhdG9ycy5jb21wb3NlKGZvcm1Db250cm9sLnZhbGlkYXRvcnMpLFxuICAgIClcbiAgfVxufVxuXG4iXX0=