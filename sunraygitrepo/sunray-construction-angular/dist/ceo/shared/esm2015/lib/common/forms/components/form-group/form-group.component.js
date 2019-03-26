/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
import { BaseComponent, } from '../../../../declarables/index';
export class FormGroupComponent extends BaseComponent {
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-form-group',
                template: "<ng-container *ngIf=\"model\">\n  <ng-container *ngFor=\"let memberName of model.memberNames\">\n    <ng-container [ngSwitch]=\"model.getMember(memberName).type\">\n\n      <ng-container *ngSwitchCase=\"'form-item'\">\n        <ceo-forms-form-item\n          [key]=\"memberName\"\n          [item]=\"model.getMember(memberName)\">\n        </ceo-forms-form-item>\n      </ng-container>\n\n      <ng-container *ngSwitchCase=\"'form-group'\">\n        <ceo-forms-form-group\n          [key]=\"memberName\"\n          [model]=\"model.getMember(memberName)\">\n        </ceo-forms-form-group>\n      </ng-container>\n\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                styles: [""]
            }] }
];
FormGroupComponent.propDecorators = {
    key: [{ type: Input }],
    model: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.key;
    /** @type {?} */
    FormGroupComponent.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvY29tcG9uZW50cy9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssR0FDakIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLCtCQUErQixDQUFBO0FBZ0J0QyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsYUFBYTs7O1lBTHBELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw0cUJBQTBDOzthQUUzQzs7O2tCQUVFLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLGlDQUFvQjs7SUFDcEIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEJhc2VDb21wb25lbnQsXG59IGZyb20gJy4uLy4uLy4uLy4uL2RlY2xhcmFibGVzL2luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtR3JvdXAsXG59IGZyb20gJy4uLy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGb3JtR3JvdXAsXG4gIGlGb3JtSXRlbSxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWZvcm1zLWZvcm0tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tZ3JvdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkga2V5OiBzdHJpbmdcbiAgQElucHV0KCkgbW9kZWw6IGlGb3JtR3JvdXBcbn1cbiJdfQ==