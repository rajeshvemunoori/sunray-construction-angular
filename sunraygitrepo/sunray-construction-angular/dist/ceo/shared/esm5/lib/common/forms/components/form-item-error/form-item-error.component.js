/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { BaseComponent, } from '../../../../declarables/index';
var FormItemErrorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormItemErrorComponent, _super);
    function FormItemErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormItemErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-forms-form-item-error',
                    template: "<ng-container *ngIf=\"item.showValidations\">\n  <div class=\"invalid-feedback\">\n    <ng-container *ngFor=\"let errorMessage of item.errorMessages\">\n      <span class=\"invalid-feedback-message\">{{errorMessage.message}}</span>\n    </ng-container>\n  </div>\n</ng-container>\n",
                    styles: [""]
                }] }
    ];
    FormItemErrorComponent.propDecorators = {
        key: [{ type: Input }],
        item: [{ type: Input }]
    };
    return FormItemErrorComponent;
}(BaseComponent));
export { FormItemErrorComponent };
if (false) {
    /** @type {?} */
    FormItemErrorComponent.prototype.key;
    /** @type {?} */
    FormItemErrorComponent.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9jb21wb25lbnRzL2Zvcm0taXRlbS1lcnJvci9mb3JtLWl0ZW0tZXJyb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFaEQsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLCtCQUErQixDQUFBO0FBTXRDO0lBSzRDLGtEQUFhO0lBTHpEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxxU0FBK0M7O2lCQUVoRDs7O3NCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFDUiw2QkFBQztDQUFBLEFBUkQsQ0FLNEMsYUFBYSxHQUd4RDtTQUhZLHNCQUFzQjs7O0lBQ2pDLHFDQUFvQjs7SUFDcEIsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEJhc2VDb21wb25lbnQsXG59IGZyb20gJy4uLy4uLy4uLy4uL2RlY2xhcmFibGVzL2luZGV4J1xuXG5pbXBvcnQge1xuICBpRm9ybUl0ZW0sXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1mb3Jtcy1mb3JtLWl0ZW0tZXJyb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1pdGVtLWVycm9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1pdGVtLWVycm9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUl0ZW1FcnJvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBrZXk6IHN0cmluZ1xuICBASW5wdXQoKSBpdGVtOiBpRm9ybUl0ZW1cbn1cbiJdfQ==