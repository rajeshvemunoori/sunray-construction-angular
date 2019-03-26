/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Component, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
var InputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputComponent, _super);
    function InputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formGroup.controls[this.field.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @return {?}
     */
    InputComponent.prototype.selected = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return (this.field.value == option.key);
    };
    /**
     * @param {?} values
     * @return {?}
     */
    InputComponent.prototype.checked = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        return _.includes(values, this.field.value);
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-declarables-input',
                    template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"field.controlType\">\n\n    <input *ngSwitchCase=\"'textbox'\"\n      class=\"form-control\"\n      [formControlName]=\"field.key\"\n      [id]=\"field.key\"\n      [type]=\"field.controlType\"\n      [placeholder]=\"field.placeholder\">\n\n    <select *ngSwitchCase=\"'dropdown'\"\n      class=\"form-control\"\n      [id]=\"field.key\" \n      [formControlName]=\"field.key\">\n\n      <option *ngFor=\"let opt of field.options | async\"\n        [value]=\"opt.key\"\n        [selected]=\"selected(opt)\">\n      \n        {{opt.value}}\n\n      </option>\n    </select>\n\n    <div *ngSwitchCase=\"'radio'\">\n      <label *ngFor=\"let opt of field.options\">\n        {{opt.key}}\n        <input [formControlName]=\"field.key\"\n          [type]=\"field.controlType\"\n          [name]=\"field.key\"\n          [value]=\"opt.value\"\n          [checked]=\"checked(opt.values)\">\n      </label>\n    </div>\n\n    <input *ngSwitchCase=\"'checkbox'\"\n      class=\"form-control\"\n      [formControlName]=\"field.key\"\n      [id]=\"field.key\"\n      [type]=\"field.controlType\"\n      [name]=\"field.key\"\n      [checked]=\"checked([true, 1, 'yes', 'Yes'])\">\n\n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{field.label}} is required</div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    InputComponent.propDecorators = {
        formGroup: [{ type: Input }],
        field: [{ type: Input }]
    };
    return InputComponent;
}(BaseComponent));
export { InputComponent };
if (false) {
    /** @type {?} */
    InputComponent.prototype.formGroup;
    /** @type {?} */
    InputComponent.prototype.field;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQWEsZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRXREO0lBS29DLDBDQUFhO0lBTGpEOztJQW9CQSxDQUFDO0lBWEMsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLE1BQU07UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0MsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxnekNBQXFDOztpQkFFdEM7Ozs0QkFFRSxLQUFLO3dCQUNMLEtBQUs7O0lBYVIscUJBQUM7Q0FBQSxBQXBCRCxDQUtvQyxhQUFhLEdBZWhEO1NBZlksY0FBYzs7O0lBQ3pCLG1DQUE2Qjs7SUFDN0IsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSAgICAgICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cCBcbiAgQElucHV0KCkgZmllbGQ6IGFueVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmtleV0udmFsaWQ7XG4gIH1cblxuICBzZWxlY3RlZChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuZmllbGQudmFsdWUgPT0gb3B0aW9uLmtleSlcbiAgfVxuXG4gIGNoZWNrZWQodmFsdWVzKSB7XG4gICAgcmV0dXJuIF8uaW5jbHVkZXModmFsdWVzLCB0aGlzLmZpZWxkLnZhbHVlKVxuICB9XG59XG4iXX0=