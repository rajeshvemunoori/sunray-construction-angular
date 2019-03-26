/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckboxFormControl, SelectFormControl, InputFormControl, TextboxFormControl, } from '../classes/index';
import { NgFormControlFactory } from './ng-forms/index';
import * as i0 from "@angular/core";
import * as i1 from "./ng-forms/form-control-factory.service";
export class FormControlFactory {
    /**
     * @param {?} ngFormControlFactory
     */
    constructor(ngFormControlFactory) {
        this.ngFormControlFactory = ngFormControlFactory;
    }
    /**
     * @param {?} props
     * @return {?}
     */
    build(props) {
        /** @type {?} */
        let formControl = this.buildFormControl(props);
        formControl.ngControl = this.buildNgFormControl(formControl);
        return formControl;
    }
    /**
     * @private
     * @param {?} props
     * @return {?}
     */
    buildFormControl(props) {
        /** @type {?} */
        let controlConstructor = this.resolveControlConstructor(props);
        return new controlConstructor(props);
    }
    /**
     * @private
     * @param {?} props
     * @return {?}
     */
    resolveControlConstructor(props) {
        switch (props.controlType) {
            case "input": {
                return InputFormControl;
            }
            case "textbox": {
                return TextboxFormControl;
            }
            case "select": {
                return SelectFormControl;
            }
            case "checkbox": {
                return CheckboxFormControl;
            }
            default: {
                return InputFormControl;
            }
        }
    }
    /**
     * @private
     * @param {?} formControl
     * @return {?}
     */
    buildNgFormControl(formControl) {
        return this.ngFormControlFactory.build(formControl);
    }
}
FormControlFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormControlFactory.ctorParameters = () => [
    { type: NgFormControlFactory }
];
/** @nocollapse */ FormControlFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory(i0.inject(i1.FormControlFactory)); }, token: FormControlFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormControlFactory.prototype.ngFormControlFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9zZXJ2aWNlcy9mb3JtLWNvbnRyb2wtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBYTFDLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixrQkFBa0IsR0FDbkIsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTs7O0FBS3ZELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFHN0IsWUFDVSxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNoRCxDQUFDOzs7OztJQUVMLEtBQUssQ0FBQyxLQUF3Qjs7WUFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDOUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDNUQsT0FBTyxXQUFXLENBQUE7SUFDcEIsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsS0FBd0I7O1lBQzNDLGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7UUFDOUQsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUM7Ozs7OztJQUVPLHlCQUF5QixDQUMvQixLQUF3QjtRQUd4QixRQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxPQUFPLENBQUMsQ0FBQztnQkFDWixPQUFPLGdCQUFnQixDQUFBO2FBQ3hCO1lBQ0QsS0FBSyxTQUFTLENBQUMsQ0FBQztnQkFDZCxPQUFPLGtCQUFrQixDQUFBO2FBQzFCO1lBQ0QsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixPQUFPLGlCQUFpQixDQUFBO2FBQ3pCO1lBQ0QsS0FBSyxVQUFVLENBQUMsQ0FBQztnQkFDZixPQUFPLG1CQUFtQixDQUFBO2FBQzNCO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxnQkFBZ0IsQ0FBQTthQUN4QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsV0FBeUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JELENBQUM7OztZQTlDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxvQkFBb0I7Ozs7Ozs7O0lBU3pCLGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wgYXMgTmdGb3JtQ29udHJvbCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIGlGYWN0b3J5LFxuICBpRm9ybUNvbnRyb2wsXG4gIGlGb3JtQ29udHJvbFByb3BzLFxuICBpRm9ybUNvbnRyb2xDb25zdHJ1Y3Rvcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgQ2hlY2tib3hGb3JtQ29udHJvbCxcbiAgU2VsZWN0Rm9ybUNvbnRyb2wsXG4gIElucHV0Rm9ybUNvbnRyb2wsXG4gIFRleHRib3hGb3JtQ29udHJvbCxcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHsgTmdGb3JtQ29udHJvbEZhY3RvcnkgfSBmcm9tICcuL25nLWZvcm1zL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbEZhY3RvcnlcbiAgaW1wbGVtZW50cyBpRmFjdG9yeTxpRm9ybUNvbnRyb2wsIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdGb3JtQ29udHJvbEZhY3Rvcnk6IE5nRm9ybUNvbnRyb2xGYWN0b3J5LFxuICApIHsgfVxuXG4gIGJ1aWxkKHByb3BzOiBpRm9ybUNvbnRyb2xQcm9wcyk6IGlGb3JtQ29udHJvbCB7XG4gICAgbGV0IGZvcm1Db250cm9sID0gdGhpcy5idWlsZEZvcm1Db250cm9sKHByb3BzKVxuICAgIGZvcm1Db250cm9sLm5nQ29udHJvbCA9IHRoaXMuYnVpbGROZ0Zvcm1Db250cm9sKGZvcm1Db250cm9sKVxuICAgIHJldHVybiBmb3JtQ29udHJvbFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm1Db250cm9sKHByb3BzOiBpRm9ybUNvbnRyb2xQcm9wcyk6IGlGb3JtQ29udHJvbCB7XG4gICAgbGV0IGNvbnRyb2xDb25zdHJ1Y3RvciA9IHRoaXMucmVzb2x2ZUNvbnRyb2xDb25zdHJ1Y3Rvcihwcm9wcylcbiAgICByZXR1cm4gbmV3IGNvbnRyb2xDb25zdHJ1Y3Rvcihwcm9wcylcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNvbnRyb2xDb25zdHJ1Y3RvcihcbiAgICBwcm9wczogaUZvcm1Db250cm9sUHJvcHMsXG4gICk6IGlGb3JtQ29udHJvbENvbnN0cnVjdG9yIHtcblxuICAgIHN3aXRjaChwcm9wcy5jb250cm9sVHlwZSkge1xuICAgICAgY2FzZSBcImlucHV0XCI6IHtcbiAgICAgICAgcmV0dXJuIElucHV0Rm9ybUNvbnRyb2xcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJ0ZXh0Ym94XCI6IHtcbiAgICAgICAgcmV0dXJuIFRleHRib3hGb3JtQ29udHJvbFxuICAgICAgfVxuICAgICAgY2FzZSBcInNlbGVjdFwiOiB7XG4gICAgICAgIHJldHVybiBTZWxlY3RGb3JtQ29udHJvbFxuICAgICAgfVxuICAgICAgY2FzZSBcImNoZWNrYm94XCI6IHtcbiAgICAgICAgcmV0dXJuIENoZWNrYm94Rm9ybUNvbnRyb2xcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIElucHV0Rm9ybUNvbnRyb2xcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkTmdGb3JtQ29udHJvbChmb3JtQ29udHJvbDogaUZvcm1Db250cm9sKTogTmdGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMubmdGb3JtQ29udHJvbEZhY3RvcnkuYnVpbGQoZm9ybUNvbnRyb2wpXG4gIH1cbn1cbiJdfQ==