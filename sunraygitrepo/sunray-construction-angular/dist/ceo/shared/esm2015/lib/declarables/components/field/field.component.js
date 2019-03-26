/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
export class FieldComponent extends BaseComponent {
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-field',
                template: "<div class=\"form-group\">\n  <label [attr.for]=\"field.key\">{{field.label}}</label>\n\n  <shared-declarables-input\n    [field]=\"field\"\n    [formGroup]=\"formGroup\">\n  </shared-declarables-input>\n</div>\n",
                styles: [""]
            }] }
];
FieldComponent.propDecorators = {
    field: [{ type: Input }],
    formGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FieldComponent.prototype.field;
    /** @type {?} */
    FieldComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9maWVsZC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsS0FBSyxFQUN6QixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQWEsZ0JBQWdCLENBQUE7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBT3RELE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTs7O1lBTGhELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxnT0FBcUM7O2FBRXRDOzs7b0JBRUUsS0FBSzt3QkFHTCxLQUFLOzs7O0lBSE4sK0JBQ1U7O0lBRVYsbUNBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEZvcm1Hcm91cCB9ICAgICAgICBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1kZWNsYXJhYmxlcy1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZmllbGQ6IGFueVxuXG4gIEBJbnB1dCgpXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwXG59XG4iXX0=