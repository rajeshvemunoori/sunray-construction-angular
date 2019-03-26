/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Component, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
export class InputComponent extends BaseComponent {
    /**
     * @return {?}
     */
    get isValid() {
        return this.formGroup.controls[this.field.key].valid;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selected(option) {
        return (this.field.value == option.key);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    checked(values) {
        return _.includes(values, this.field.value);
    }
}
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
if (false) {
    /** @type {?} */
    InputComponent.prototype.formGroup;
    /** @type {?} */
    InputComponent.prototype.field;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBYSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhOzs7O0lBSS9DLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBTTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBTTtRQUNaLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QyxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGd6Q0FBcUM7O2FBRXRDOzs7d0JBRUUsS0FBSztvQkFDTCxLQUFLOzs7O0lBRE4sbUNBQTZCOztJQUM3QiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Hcm91cCB9ICAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVjbGFyYWJsZXMtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwIFxuICBASW5wdXQoKSBmaWVsZDogYW55XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQua2V5XS52YWxpZDtcbiAgfVxuXG4gIHNlbGVjdGVkKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5maWVsZC52YWx1ZSA9PSBvcHRpb24ua2V5KVxuICB9XG5cbiAgY2hlY2tlZCh2YWx1ZXMpIHtcbiAgICByZXR1cm4gXy5pbmNsdWRlcyh2YWx1ZXMsIHRoaXMuZmllbGQudmFsdWUpXG4gIH1cbn1cbiJdfQ==