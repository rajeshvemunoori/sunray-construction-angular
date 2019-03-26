/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckboxFormControl, SelectFormControl, InputFormControl, TextboxFormControl, } from '../classes/index';
import { NgFormControlFactory } from './ng-forms/index';
import * as i0 from "@angular/core";
import * as i1 from "./ng-forms/form-control-factory.service";
var FormControlFactory = /** @class */ (function () {
    function FormControlFactory(ngFormControlFactory) {
        this.ngFormControlFactory = ngFormControlFactory;
    }
    /**
     * @param {?} props
     * @return {?}
     */
    FormControlFactory.prototype.build = /**
     * @param {?} props
     * @return {?}
     */
    function (props) {
        /** @type {?} */
        var formControl = this.buildFormControl(props);
        formControl.ngControl = this.buildNgFormControl(formControl);
        return formControl;
    };
    /**
     * @private
     * @param {?} props
     * @return {?}
     */
    FormControlFactory.prototype.buildFormControl = /**
     * @private
     * @param {?} props
     * @return {?}
     */
    function (props) {
        /** @type {?} */
        var controlConstructor = this.resolveControlConstructor(props);
        return new controlConstructor(props);
    };
    /**
     * @private
     * @param {?} props
     * @return {?}
     */
    FormControlFactory.prototype.resolveControlConstructor = /**
     * @private
     * @param {?} props
     * @return {?}
     */
    function (props) {
        switch (props.controlType) {
            case "input": {
                return InputFormControl;
            }
            case "textbox": {
                return TextboxFormControl;
            }
            case "select": {
                return SelectFormControl;
            }
            case "checkbox": {
                return CheckboxFormControl;
            }
            default: {
                return InputFormControl;
            }
        }
    };
    /**
     * @private
     * @param {?} formControl
     * @return {?}
     */
    FormControlFactory.prototype.buildNgFormControl = /**
     * @private
     * @param {?} formControl
     * @return {?}
     */
    function (formControl) {
        return this.ngFormControlFactory.build(formControl);
    };
    FormControlFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormControlFactory.ctorParameters = function () { return [
        { type: NgFormControlFactory }
    ]; };
    /** @nocollapse */ FormControlFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory(i0.inject(i1.FormControlFactory)); }, token: FormControlFactory, providedIn: "root" });
    return FormControlFactory;
}());
export { FormControlFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormControlFactory.prototype.ngFormControlFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9zZXJ2aWNlcy9mb3JtLWNvbnRyb2wtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBYTFDLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixrQkFBa0IsR0FDbkIsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTs7O0FBRXZEO0lBTUUsNEJBQ1Usb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDaEQsQ0FBQzs7Ozs7SUFFTCxrQ0FBSzs7OztJQUFMLFVBQU0sS0FBd0I7O1lBQ3hCLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQzlDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzVELE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7Ozs7OztJQUVPLDZDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsS0FBd0I7O1lBQzNDLGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7UUFDOUQsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUM7Ozs7OztJQUVPLHNEQUF5Qjs7Ozs7SUFBakMsVUFDRSxLQUF3QjtRQUd4QixRQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxPQUFPLENBQUMsQ0FBQztnQkFDWixPQUFPLGdCQUFnQixDQUFBO2FBQ3hCO1lBQ0QsS0FBSyxTQUFTLENBQUMsQ0FBQztnQkFDZCxPQUFPLGtCQUFrQixDQUFBO2FBQzFCO1lBQ0QsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixPQUFPLGlCQUFpQixDQUFBO2FBQ3pCO1lBQ0QsS0FBSyxVQUFVLENBQUMsQ0FBQztnQkFDZixPQUFPLG1CQUFtQixDQUFBO2FBQzNCO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxnQkFBZ0IsQ0FBQTthQUN4QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sK0NBQWtCOzs7OztJQUExQixVQUEyQixXQUF5QjtRQUNsRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDckQsQ0FBQzs7Z0JBOUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsb0JBQW9COzs7NkJBdEI3QjtDQXVFQyxBQS9DRCxJQStDQztTQTVDWSxrQkFBa0I7Ozs7OztJQUkzQixrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250cm9sIGFzIE5nRm9ybUNvbnRyb2wsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBpRmFjdG9yeSxcbiAgaUZvcm1Db250cm9sLFxuICBpRm9ybUNvbnRyb2xQcm9wcyxcbiAgaUZvcm1Db250cm9sQ29uc3RydWN0b3IsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIENoZWNrYm94Rm9ybUNvbnRyb2wsXG4gIFNlbGVjdEZvcm1Db250cm9sLFxuICBJbnB1dEZvcm1Db250cm9sLFxuICBUZXh0Ym94Rm9ybUNvbnRyb2wsXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7IE5nRm9ybUNvbnRyb2xGYWN0b3J5IH0gZnJvbSAnLi9uZy1mb3Jtcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xGYWN0b3J5XG4gIGltcGxlbWVudHMgaUZhY3Rvcnk8aUZvcm1Db250cm9sLCBhbnk+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nRm9ybUNvbnRyb2xGYWN0b3J5OiBOZ0Zvcm1Db250cm9sRmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZChwcm9wczogaUZvcm1Db250cm9sUHJvcHMpOiBpRm9ybUNvbnRyb2wge1xuICAgIGxldCBmb3JtQ29udHJvbCA9IHRoaXMuYnVpbGRGb3JtQ29udHJvbChwcm9wcylcbiAgICBmb3JtQ29udHJvbC5uZ0NvbnRyb2wgPSB0aGlzLmJ1aWxkTmdGb3JtQ29udHJvbChmb3JtQ29udHJvbClcbiAgICByZXR1cm4gZm9ybUNvbnRyb2xcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtQ29udHJvbChwcm9wczogaUZvcm1Db250cm9sUHJvcHMpOiBpRm9ybUNvbnRyb2wge1xuICAgIGxldCBjb250cm9sQ29uc3RydWN0b3IgPSB0aGlzLnJlc29sdmVDb250cm9sQ29uc3RydWN0b3IocHJvcHMpXG4gICAgcmV0dXJuIG5ldyBjb250cm9sQ29uc3RydWN0b3IocHJvcHMpXG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDb250cm9sQ29uc3RydWN0b3IoXG4gICAgcHJvcHM6IGlGb3JtQ29udHJvbFByb3BzLFxuICApOiBpRm9ybUNvbnRyb2xDb25zdHJ1Y3RvciB7XG5cbiAgICBzd2l0Y2gocHJvcHMuY29udHJvbFR5cGUpIHtcbiAgICAgIGNhc2UgXCJpbnB1dFwiOiB7XG4gICAgICAgIHJldHVybiBJbnB1dEZvcm1Db250cm9sXG4gICAgICB9XG4gICAgICBjYXNlIFwidGV4dGJveFwiOiB7XG4gICAgICAgIHJldHVybiBUZXh0Ym94Rm9ybUNvbnRyb2xcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJzZWxlY3RcIjoge1xuICAgICAgICByZXR1cm4gU2VsZWN0Rm9ybUNvbnRyb2xcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJjaGVja2JveFwiOiB7XG4gICAgICAgIHJldHVybiBDaGVja2JveEZvcm1Db250cm9sXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBJbnB1dEZvcm1Db250cm9sXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE5nRm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IGlGb3JtQ29udHJvbCk6IE5nRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLm5nRm9ybUNvbnRyb2xGYWN0b3J5LmJ1aWxkKGZvcm1Db250cm9sKVxuICB9XG59XG4iXX0=