/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
import { BaseComponent, } from '../../../../declarables/index';
export class FormItemComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.classes = {
            valid: 'is-valid',
            invalid: 'is-invalid',
        };
    }
    /**
     * @return {?}
     */
    formGroupClass() {
        /** @type {?} */
        let classes = [];
        /** @type {?} */
        let ngControl = this.item.ngControl;
        if (ngControl.valid) {
            classes.push(this.classes.valid);
        }
        if (ngControl.invalid) {
            classes.push(this.classes.invalid);
        }
        return classes;
    }
}
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
if (false) {
    /** @type {?} */
    FormItemComponent.prototype.key;
    /** @type {?} */
    FormItemComponent.prototype.item;
    /** @type {?} */
    FormItemComponent.prototype.classes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9jb21wb25lbnRzL2Zvcm0taXRlbS9mb3JtLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssR0FDakIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLCtCQUErQixDQUFBO0FBV3RDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhO0lBTHBEOztRQVNFLFlBQU8sR0FBUTtZQUNiLEtBQUssRUFBRSxVQUFVO1lBQ2pCLE9BQU8sRUFBRSxZQUFZO1NBQ3RCLENBQUE7SUFlSCxDQUFDOzs7O0lBYkMsY0FBYzs7WUFDUixPQUFPLEdBQUcsRUFBRTs7WUFDWixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1FBRW5DLElBQUcsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDakM7UUFDRCxJQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ25DO1FBRUQsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw2WkFBeUM7O2FBRTFDOzs7a0JBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sZ0NBQW9COztJQUNwQixpQ0FBd0I7O0lBRXhCLG9DQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQmFzZUNvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGb3JtSXRlbSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWZvcm1zLWZvcm0taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtSXRlbUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBrZXk6IHN0cmluZ1xuICBASW5wdXQoKSBpdGVtOiBpRm9ybUl0ZW1cblxuICBjbGFzc2VzOiBhbnkgPSB7XG4gICAgdmFsaWQ6ICdpcy12YWxpZCcsXG4gICAgaW52YWxpZDogJ2lzLWludmFsaWQnLFxuICB9XG5cbiAgZm9ybUdyb3VwQ2xhc3MoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbXVxuICAgIGxldCBuZ0NvbnRyb2wgPSB0aGlzLml0ZW0ubmdDb250cm9sXG5cbiAgICBpZihuZ0NvbnRyb2wudmFsaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNsYXNzZXMudmFsaWQpXG4gICAgfVxuICAgIGlmKG5nQ29udHJvbC5pbnZhbGlkKSB7XG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jbGFzc2VzLmludmFsaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXNcbiAgfVxufVxuIl19