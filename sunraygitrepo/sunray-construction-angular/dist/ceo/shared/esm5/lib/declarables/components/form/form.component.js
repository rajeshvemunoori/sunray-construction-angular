/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { InputControlService, } from '../../../providers/index';
import { BaseComponent } from '../base/base.component';
var FormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormComponent, _super);
    function FormComponent(inputControlService) {
        var _this = _super.call(this) || this;
        _this.inputControlService = inputControlService;
        return _this;
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handleActions();
        this.inputGroup$
            .subscribe(function (inputGroup) {
            _this.inputGroup = inputGroup;
            _this._formGroup = _this.inputControlService.toFormGroup(inputGroup);
        });
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.handleActions = /**
     * @return {?}
     */
    function () {
        if (this.dataService && this.entity) {
            this.dataService.handleDialogActions(this);
        }
    };
    Object.defineProperty(FormComponent.prototype, "formGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formGroup;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormComponent.prototype.payload = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var payload = this.formGroup.value;
        if (this.defaultParams) {
            return _.merge(payload, this.defaultParams);
        }
        else {
            return payload;
        }
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-declarables-form',
                    template: "<div *ngIf=\"formGroup\">\n  <form [formGroup]=\"formGroup\">\n\n    <ceo-shared-form-group\n      [inputGroup]=\"inputGroup\"\n      [formGroup]=\"formGroup\">\n    </ceo-shared-form-group>\n\n  </form>\n</div>\n",
                    providers: [InputControlService],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: InputControlService }
    ]; };
    FormComponent.propDecorators = {
        inputGroup$: [{ type: Input }],
        dataService: [{ type: Input }],
        entity: [{ type: Input }],
        defaultParams: [{ type: Input }]
    };
    return FormComponent;
}(BaseComponent));
export { FormComponent };
if (false) {
    /** @type {?} */
    FormComponent.prototype.inputGroup$;
    /** @type {?} */
    FormComponent.prototype.dataService;
    /** @type {?} */
    FormComponent.prototype.entity;
    /** @type {?} */
    FormComponent.prototype.defaultParams;
    /** @type {?} */
    FormComponent.prototype.inputGroup;
    /** @type {?} */
    FormComponent.prototype._formGroup;
    /**
     * @type {?}
     * @private
     */
    FormComponent.prototype.inputControlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsVUFBVSxFQUNYLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBRWpCLE1BQU0sZUFBZSxDQUFBO0FBSXRCLE9BQU8sRUFHTCxtQkFBbUIsR0FDcEIsTUFBTSwwQkFBMEIsQ0FBQTtBQUVqQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFdEQ7SUFNbUMseUNBQWE7SUFnQjlDLHVCQUNVLG1CQUF3QztRQURsRCxZQUdFLGlCQUFPLFNBQ1I7UUFIUyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOztJQUdsRCxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFFcEIsSUFBSSxDQUFDLFdBQVc7YUFDYixTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ25CLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNwRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFFRCxxQ0FBYTs7O0lBQWI7UUFDRSxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzNDO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG9DQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7O1lBQ00sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztRQUNsQyxJQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDNUM7YUFDSTtZQUNILE9BQU8sT0FBTyxDQUFBO1NBQ2Y7SUFDSCxDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLGlPQUFvQztvQkFFcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7O2lCQUNqQzs7OztnQkFWQyxtQkFBbUI7Ozs4QkFZbEIsS0FBSzs4QkFHTCxLQUFLO3lCQUdMLEtBQUs7Z0NBR0wsS0FBSzs7SUF5Q1Isb0JBQUM7Q0FBQSxBQXpERCxDQU1tQyxhQUFhLEdBbUQvQztTQW5EWSxhQUFhOzs7SUFDeEIsb0NBQ29DOztJQUVwQyxvQ0FDZ0I7O0lBRWhCLCtCQUNXOztJQUVYLHNDQUNrQjs7SUFFbEIsbUNBQXVCOztJQUN2QixtQ0FBcUI7Ozs7O0lBR25CLDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3Rcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBJbnB1dFR5cGUsXG4gIGlJbnB1dEdyb3VwLFxuICBJbnB1dENvbnRyb2xTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW5kZXgnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVjbGFyYWJsZXMtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtJbnB1dENvbnRyb2xTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGlucHV0R3JvdXAkOiBPYnNlcnZhYmxlPGlJbnB1dEdyb3VwPlxuXG4gIEBJbnB1dCgpXG4gIGRhdGFTZXJ2aWNlOiBhbnlcblxuICBASW5wdXQoKVxuICBlbnRpdHk6IGFueSBcblxuICBASW5wdXQoKVxuICBkZWZhdWx0UGFyYW1zOiBhbnkgXG5cbiAgaW5wdXRHcm91cDogaUlucHV0R3JvdXBcbiAgX2Zvcm1Hcm91cDogRm9ybUdyb3VwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnB1dENvbnRyb2xTZXJ2aWNlOiBJbnB1dENvbnRyb2xTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaGFuZGxlQWN0aW9ucygpXG5cbiAgICB0aGlzLmlucHV0R3JvdXAkXG4gICAgICAuc3Vic2NyaWJlKGlucHV0R3JvdXAgPT4ge1xuICAgICAgICB0aGlzLmlucHV0R3JvdXAgPSBpbnB1dEdyb3VwXG4gICAgICAgIHRoaXMuX2Zvcm1Hcm91cCA9IHRoaXMuaW5wdXRDb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChpbnB1dEdyb3VwKVxuICAgICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFjdGlvbnMoKSB7XG4gICAgaWYodGhpcy5kYXRhU2VydmljZSAmJiB0aGlzLmVudGl0eSkge1xuICAgICAgdGhpcy5kYXRhU2VydmljZS5oYW5kbGVEaWFsb2dBY3Rpb25zKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGZvcm1Hcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybUdyb3VwXG4gIH1cblxuICBwYXlsb2FkKCkge1xuICAgIGxldCBwYXlsb2FkID0gdGhpcy5mb3JtR3JvdXAudmFsdWVcbiAgICBpZih0aGlzLmRlZmF1bHRQYXJhbXMpIHtcbiAgICAgIHJldHVybiBfLm1lcmdlKHBheWxvYWQsIHRoaXMuZGVmYXVsdFBhcmFtcylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gcGF5bG9hZFxuICAgIH1cbiAgfVxufVxuIl19