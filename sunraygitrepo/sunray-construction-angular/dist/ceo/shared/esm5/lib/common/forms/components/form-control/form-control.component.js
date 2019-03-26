/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { BaseComponent, } from '../../../../declarables/index';
var FormControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormControlComponent, _super);
    function FormControlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-forms-form-control',
                    template: "<ng-container [ngSwitch]=\"control.controlType\">\n  <ng-container *ngSwitchCase=\"'input'\">\n    <ceo-forms-elements-form-controls-input\n      [element]=\"control\">\n    </ceo-forms-elements-form-controls-input>\n  </ng-container>\n</ng-container>\n",
                    styles: [""]
                }] }
    ];
    FormControlComponent.propDecorators = {
        control: [{ type: Input }]
    };
    return FormControlComponent;
}(BaseComponent));
export { FormControlComponent };
if (false) {
    /** @type {?} */
    FormControlComponent.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9jb21wb25lbnRzL2Zvcm0tY29udHJvbC9mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFaEQsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLCtCQUErQixDQUFBO0FBTXRDO0lBSzBDLGdEQUFhO0lBTHZEOztJQU9BLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx5UUFBNEM7O2lCQUU3Qzs7OzBCQUVFLEtBQUs7O0lBQ1IsMkJBQUM7Q0FBQSxBQVBELENBSzBDLGFBQWEsR0FFdEQ7U0FGWSxvQkFBb0I7OztJQUMvQix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQmFzZUNvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGb3JtQ29udHJvbCxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWZvcm1zLWZvcm0tY29udHJvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sOiBpRm9ybUNvbnRyb2xcbn1cbiJdfQ==