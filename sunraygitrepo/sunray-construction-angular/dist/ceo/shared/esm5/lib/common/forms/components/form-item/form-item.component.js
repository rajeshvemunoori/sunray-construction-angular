/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
import { BaseComponent, } from '../../../../declarables/index';
var FormItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormItemComponent, _super);
    function FormItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classes = {
            valid: 'is-valid',
            invalid: 'is-invalid',
        };
        return _this;
    }
    /**
     * @return {?}
     */
    FormItemComponent.prototype.formGroupClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classes = [];
        /** @type {?} */
        var ngControl = this.item.ngControl;
        if (ngControl.valid) {
            classes.push(this.classes.valid);
        }
        if (ngControl.invalid) {
            classes.push(this.classes.invalid);
        }
        return classes;
    };
    FormItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-forms-form-item',
                    template: "<div class=\"form-group\" [ngClass]=\"formGroupClass()\">\n  <ng-container *ngIf=\"item.label\">\n    <ceo-forms-elements-label\n      [element]=\"item.label\">\n    </ceo-forms-elements-label>\n  </ng-container>\n\n  <ceo-forms-form-control\n    [control]=\"item.control\">\n  </ceo-forms-form-control>\n\n  <ceo-forms-form-item-error\n    [item]=\"item\">\n  </ceo-forms-form-item-error>\n\n</div>\n",
                    styles: [""]
                }] }
    ];
    FormItemComponent.propDecorators = {
        key: [{ type: Input }],
        item: [{ type: Input }]
    };
    return FormItemComponent;
}(BaseComponent));
export { FormItemComponent };
if (false) {
    /** @type {?} */
    FormItemComponent.prototype.key;
    /** @type {?} */
    FormItemComponent.prototype.item;
    /** @type {?} */
    FormItemComponent.prototype.classes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9jb21wb25lbnRzL2Zvcm0taXRlbS9mb3JtLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEdBQ2pCLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFDTCxhQUFhLEdBQ2QsTUFBTSwrQkFBK0IsQ0FBQTtBQU10QztJQUt1Qyw2Q0FBYTtJQUxwRDtRQUFBLHFFQTJCQztRQWxCQyxhQUFPLEdBQVE7WUFDYixLQUFLLEVBQUUsVUFBVTtZQUNqQixPQUFPLEVBQUUsWUFBWTtTQUN0QixDQUFBOztJQWVILENBQUM7Ozs7SUFiQywwQ0FBYzs7O0lBQWQ7O1lBQ00sT0FBTyxHQUFHLEVBQUU7O1lBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztRQUVuQyxJQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ2pDO1FBQ0QsSUFBRyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNuQztRQUVELE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNlpBQXlDOztpQkFFMUM7OztzQkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBb0JSLHdCQUFDO0NBQUEsQUEzQkQsQ0FLdUMsYUFBYSxHQXNCbkQ7U0F0QlksaUJBQWlCOzs7SUFDNUIsZ0NBQW9COztJQUNwQixpQ0FBd0I7O0lBRXhCLG9DQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQmFzZUNvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGb3JtSXRlbSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWZvcm1zLWZvcm0taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtSXRlbUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBrZXk6IHN0cmluZ1xuICBASW5wdXQoKSBpdGVtOiBpRm9ybUl0ZW1cblxuICBjbGFzc2VzOiBhbnkgPSB7XG4gICAgdmFsaWQ6ICdpcy12YWxpZCcsXG4gICAgaW52YWxpZDogJ2lzLWludmFsaWQnLFxuICB9XG5cbiAgZm9ybUdyb3VwQ2xhc3MoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbXVxuICAgIGxldCBuZ0NvbnRyb2wgPSB0aGlzLml0ZW0ubmdDb250cm9sXG5cbiAgICBpZihuZ0NvbnRyb2wudmFsaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNsYXNzZXMudmFsaWQpXG4gICAgfVxuICAgIGlmKG5nQ29udHJvbC5pbnZhbGlkKSB7XG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jbGFzc2VzLmludmFsaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXNcbiAgfVxufVxuIl19