/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { InputControlService, } from '../../../providers/index';
import { BaseComponent } from '../base/base.component';
export class FormComponent extends BaseComponent {
    /**
     * @param {?} inputControlService
     */
    constructor(inputControlService) {
        super();
        this.inputControlService = inputControlService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.handleActions();
        this.inputGroup$
            .subscribe(inputGroup => {
            this.inputGroup = inputGroup;
            this._formGroup = this.inputControlService.toFormGroup(inputGroup);
        });
    }
    /**
     * @return {?}
     */
    handleActions() {
        if (this.dataService && this.entity) {
            this.dataService.handleDialogActions(this);
        }
    }
    /**
     * @return {?}
     */
    get formGroup() {
        return this._formGroup;
    }
    /**
     * @return {?}
     */
    payload() {
        /** @type {?} */
        let payload = this.formGroup.value;
        if (this.defaultParams) {
            return _.merge(payload, this.defaultParams);
        }
        else {
            return payload;
        }
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-form',
                template: "<div *ngIf=\"formGroup\">\n  <form [formGroup]=\"formGroup\">\n\n    <ceo-shared-form-group\n      [inputGroup]=\"inputGroup\"\n      [formGroup]=\"formGroup\">\n    </ceo-shared-form-group>\n\n  </form>\n</div>\n",
                providers: [InputControlService],
                styles: [""]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: InputControlService }
];
FormComponent.propDecorators = {
    inputGroup$: [{ type: Input }],
    dataService: [{ type: Input }],
    entity: [{ type: Input }],
    defaultParams: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxVQUFVLEVBQ1gsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFFakIsTUFBTSxlQUFlLENBQUE7QUFJdEIsT0FBTyxFQUdMLG1CQUFtQixHQUNwQixNQUFNLDBCQUEwQixDQUFBO0FBRWpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQVF0RCxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7Ozs7SUFnQjlDLFlBQ1UsbUJBQXdDO1FBRWhELEtBQUssRUFBRSxDQUFBO1FBRkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUdsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUVwQixJQUFJLENBQUMsV0FBVzthQUNiLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDM0M7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7Ozs7SUFFRCxPQUFPOztZQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7UUFDbEMsSUFBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzVDO2FBQ0k7WUFDSCxPQUFPLE9BQU8sQ0FBQTtTQUNmO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxpT0FBb0M7Z0JBRXBDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzthQUNqQzs7OztZQVZDLG1CQUFtQjs7OzBCQVlsQixLQUFLOzBCQUdMLEtBQUs7cUJBR0wsS0FBSzs0QkFHTCxLQUFLOzs7O0lBVE4sb0NBQ29DOztJQUVwQyxvQ0FDZ0I7O0lBRWhCLCtCQUNXOztJQUVYLHNDQUNrQjs7SUFFbEIsbUNBQXVCOztJQUN2QixtQ0FBcUI7Ozs7O0lBR25CLDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3Rcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBJbnB1dFR5cGUsXG4gIGlJbnB1dEdyb3VwLFxuICBJbnB1dENvbnRyb2xTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW5kZXgnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVjbGFyYWJsZXMtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtJbnB1dENvbnRyb2xTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGlucHV0R3JvdXAkOiBPYnNlcnZhYmxlPGlJbnB1dEdyb3VwPlxuXG4gIEBJbnB1dCgpXG4gIGRhdGFTZXJ2aWNlOiBhbnlcblxuICBASW5wdXQoKVxuICBlbnRpdHk6IGFueSBcblxuICBASW5wdXQoKVxuICBkZWZhdWx0UGFyYW1zOiBhbnkgXG5cbiAgaW5wdXRHcm91cDogaUlucHV0R3JvdXBcbiAgX2Zvcm1Hcm91cDogRm9ybUdyb3VwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnB1dENvbnRyb2xTZXJ2aWNlOiBJbnB1dENvbnRyb2xTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaGFuZGxlQWN0aW9ucygpXG5cbiAgICB0aGlzLmlucHV0R3JvdXAkXG4gICAgICAuc3Vic2NyaWJlKGlucHV0R3JvdXAgPT4ge1xuICAgICAgICB0aGlzLmlucHV0R3JvdXAgPSBpbnB1dEdyb3VwXG4gICAgICAgIHRoaXMuX2Zvcm1Hcm91cCA9IHRoaXMuaW5wdXRDb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChpbnB1dEdyb3VwKVxuICAgICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFjdGlvbnMoKSB7XG4gICAgaWYodGhpcy5kYXRhU2VydmljZSAmJiB0aGlzLmVudGl0eSkge1xuICAgICAgdGhpcy5kYXRhU2VydmljZS5oYW5kbGVEaWFsb2dBY3Rpb25zKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGZvcm1Hcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybUdyb3VwXG4gIH1cblxuICBwYXlsb2FkKCkge1xuICAgIGxldCBwYXlsb2FkID0gdGhpcy5mb3JtR3JvdXAudmFsdWVcbiAgICBpZih0aGlzLmRlZmF1bHRQYXJhbXMpIHtcbiAgICAgIHJldHVybiBfLm1lcmdlKHBheWxvYWQsIHRoaXMuZGVmYXVsdFBhcmFtcylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gcGF5bG9hZFxuICAgIH1cbiAgfVxufVxuIl19