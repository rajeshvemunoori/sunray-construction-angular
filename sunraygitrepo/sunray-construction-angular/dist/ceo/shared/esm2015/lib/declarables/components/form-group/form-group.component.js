/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
export class FormGroupComponent extends BaseComponent {
    /**
     * @param {?} input
     * @return {?}
     */
    isInputGroup(input) {
        return (input.constructor.name == 'InputGroup');
    }
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-form-group',
                template: "<div *ngFor=\"let input of inputGroup\">\n  <div *ngIf=\"isInputGroup(input); then inputGroupTemplate else fieldTemplate\">\n  </div>\n\n  <ng-template #inputGroupTemplate>\n    <div><b>{{input.name}}</b></div>\n\n    <ceo-shared-form-group\n      [inputGroup]=\"input\"\n      [formGroup]=\"formGroup.get(input.key)\">\n    </ceo-shared-form-group>\n\n  </ng-template>\n\n  <ng-template #fieldTemplate>\n\n    <shared-declarables-field\n      [field]=\"input\"\n      [formGroup]=\"formGroup\">\n    </shared-declarables-field>\n\n  </ng-template>\n</div>\n\n",
                styles: [""]
            }] }
];
FormGroupComponent.propDecorators = {
    inputGroup: [{ type: Input }],
    formGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.inputGroup;
    /** @type {?} */
    FormGroupComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBYSxnQkFBZ0IsQ0FBQTtBQU1qRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7Ozs7O0lBT25ELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsQ0FBQTtJQUNqRCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsNGpCQUEwQzs7YUFFM0M7Ozt5QkFFRSxLQUFLO3dCQUdMLEtBQUs7Ozs7SUFITix3Q0FDdUI7O0lBRXZCLHVDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBpSW5wdXRHcm91cCxcbn0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2luZGV4J1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLXNoYXJlZC1mb3JtLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWdyb3VwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGlucHV0R3JvdXA6IGlJbnB1dEdyb3VwXG5cbiAgQElucHV0KClcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXBcblxuICBpc0lucHV0R3JvdXAoaW5wdXQpIHtcbiAgICByZXR1cm4gKGlucHV0LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ0lucHV0R3JvdXAnKVxuICB9XG59XG4iXX0=