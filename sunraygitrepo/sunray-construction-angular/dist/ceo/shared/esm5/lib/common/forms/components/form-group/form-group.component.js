/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
import { BaseComponent, } from '../../../../declarables/index';
var FormGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormGroupComponent, _super);
    function FormGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return FormGroupComponent;
}(BaseComponent));
export { FormGroupComponent };
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.key;
    /** @type {?} */
    FormGroupComponent.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvY29tcG9uZW50cy9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEdBQ2pCLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFDTCxhQUFhLEdBQ2QsTUFBTSwrQkFBK0IsQ0FBQTtBQVd0QztJQUt3Qyw4Q0FBYTtJQUxyRDs7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsNHFCQUEwQzs7aUJBRTNDOzs7c0JBRUUsS0FBSzt3QkFDTCxLQUFLOztJQUNSLHlCQUFDO0NBQUEsQUFSRCxDQUt3QyxhQUFhLEdBR3BEO1NBSFksa0JBQWtCOzs7SUFDN0IsaUNBQW9COztJQUNwQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQmFzZUNvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1Hcm91cCxcbn0gZnJvbSAnLi4vLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgaUZvcm1Hcm91cCxcbiAgaUZvcm1JdGVtLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZm9ybXMtZm9ybS1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1ncm91cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBrZXk6IHN0cmluZ1xuICBASW5wdXQoKSBtb2RlbDogaUZvcm1Hcm91cFxufVxuIl19