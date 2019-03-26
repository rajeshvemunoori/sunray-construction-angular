/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
import { BaseComponent, } from '../../../../declarables/index';
var FormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormComponent, _super);
    function FormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-forms-form',
                    template: "<div *ngIf=\"formWrapper\" class=\"form-wrap\">\n  <form [formGroup]=\"formWrapper.ngControl\">\n    <div class=\"form-inner\">\n      <ceo-forms-form-group\n        [model]=\"formWrapper\">\n      </ceo-forms-form-group>\n    </div>\n  </form>\n</div>\n",
                    styles: [""]
                }] }
    ];
    FormComponent.propDecorators = {
        formWrapper: [{ type: Input }]
    };
    return FormComponent;
}(BaseComponent));
export { FormComponent };
if (false) {
    /** @type {?} */
    FormComponent.prototype.formWrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZm9ybXMvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEdBRWpCLE1BQU0sZUFBZSxDQUFBO0FBT3RCLE9BQU8sRUFDTCxhQUFhLEdBQ2QsTUFBTSwrQkFBK0IsQ0FBQTtBQU10QztJQUttQyx5Q0FBYTtJQUxoRDs7SUFPQSxDQUFDOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMFFBQW9DOztpQkFFckM7Ozs4QkFFRSxLQUFLOztJQUNSLG9CQUFDO0NBQUEsQUFQRCxDQUttQyxhQUFhLEdBRS9DO1NBRlksYUFBYTs7O0lBQ3hCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbiAgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEZvcm1Hcm91cCxcbiAgQWJzdHJhY3RDb250cm9sLFxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHtcbiAgQmFzZUNvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlGb3JtV3JhcHBlcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWZvcm1zLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBmb3JtV3JhcHBlcjogaUZvcm1XcmFwcGVyXG59XG4iXX0=