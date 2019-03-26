/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base//base.component';
export class InputComponent extends BaseComponent {
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-elements-form-controls-input',
                template: "<ng-container [ngSwitch]=\"element.inputType\">\n\n  <ceo-datepicker\n    *ngSwitchCase=\"'date'\"\n    [control]=\"element.ngControl\">\n  </ceo-datepicker>\n\n  <ceo-forms-elements-form-controls-input-checkbox\n    *ngSwitchCase=\"'checkbox'\"\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-checkbox>\n\n  <ceo-forms-elements-form-controls-input-radio\n    *ngSwitchCase=\"'radio'\"\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-radio>\n\n  <ceo-forms-elements-form-controls-input-base\n    *ngSwitchDefault\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-base>\n\n</ng-container>\n",
                styles: [""]
            }] }
];
InputComponent.propDecorators = {
    element: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2NvbXBvbmVudHMvZWxlbWVudHMvZm9ybS1jb250cm9scy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQVd2RCxNQUFNLE9BQU8sY0FBZSxTQUFRLGFBQWE7OztZQUxoRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsK3BCQUFxQzs7YUFFdEM7OztzQkFFRSxLQUFLOzs7O0lBQU4saUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLy9iYXNlLmNvbXBvbmVudCdcblxuaW1wb3J0IHtcbiAgaUlucHV0Rm9ybUNvbnRyb2wsXG59IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1mb3Jtcy1lbGVtZW50cy1mb3JtLWNvbnRyb2xzLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBlbGVtZW50OiBpSW5wdXRGb3JtQ29udHJvbFxufVxuIl19