/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BaseComponent } from '../base//base.component';
export class InputComponent extends BaseComponent {
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-form-element-input',
                template: "<ng-container [ngSwitch]=\"element.inputType\">\n\n  <ceo-datepicker\n    *ngSwitchCase=\"'date'\"\n    [control]=\"element.control\">\n  </ceo-datepicker>\n\n  <input\n    *ngSwitchDefault\n    class=\"form-control\"\n    [formControl]=\"element.control\"\n    [type]=\"element.inputType\"\n    [attr.id]=\"element.elementId\"\n    [attr.placeholder]=\"element.placeholder\">\n\n</ng-container>\n",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    InputComponent.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2NvbXBvbmVudHMvZm9ybS1lbGVtZW50L2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQTtBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFPdkQsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhOzs7WUFMaEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHlaQUFxQzs7YUFFdEM7Ozs7SUFFQywrQkFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZm9ybS1lbGVtZW50LWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBtb2RlbDogYW55XG59XG4iXX0=