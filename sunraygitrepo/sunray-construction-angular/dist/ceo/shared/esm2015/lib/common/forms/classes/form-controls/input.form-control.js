/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Similar implementation to:
// https://angular.io/guide/dynamic-form
import * as _ from 'lodash';
import { BaseFormControl, } from './base.form-control';
/** @type {?} */
let inputFormControlDefaults = {
    key: '',
    label: '',
    placeholder: '',
    row: null,
    value: null,
    inputType: (/** @type {?} */ ('text')),
    required: false,
    options: [],
};
export class InputFormControl extends BaseFormControl {
    /**
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.defaults = inputFormControlDefaults;
        this.controlType = 'input';
        this.options = [];
        init = _.defaults(init, this.defaults);
        Object.assign(this, init);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InputFormControl.prototype.defaults;
    /** @type {?} */
    InputFormControl.prototype.controlType;
    /** @type {?} */
    InputFormControl.prototype.inputType;
    /** @type {?} */
    InputFormControl.prototype.required;
    /** @type {?} */
    InputFormControl.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZm9ybS1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2NsYXNzZXMvZm9ybS1jb250cm9scy9pbnB1dC5mb3JtLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLGVBQWUsR0FDaEIsTUFBTSxxQkFBcUIsQ0FBQTs7SUFReEIsd0JBQXdCLEdBQUc7SUFDN0IsR0FBRyxFQUFFLEVBQUU7SUFDUCxLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxFQUFFO0lBQ2YsR0FBRyxFQUFFLElBQUk7SUFDVCxLQUFLLEVBQUUsSUFBSTtJQUNYLFNBQVMsRUFBRSxtQkFBQSxNQUFNLEVBQXNCO0lBQ3ZDLFFBQVEsRUFBRSxLQUFLO0lBQ2YsT0FBTyxFQUFFLEVBQUU7Q0FDWjtBQUVELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxlQUFlOzs7O0lBVW5ELFlBQVksT0FBbUMsRUFBRTtRQUMvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFSTCxhQUFRLEdBQStCLHdCQUF3QixDQUFBO1FBQ3ZFLGdCQUFXLEdBQW9CLE9BQU8sQ0FBQTtRQUl0QyxZQUFPLEdBQXNDLEVBQUUsQ0FBQTtRQUs3QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDRjs7Ozs7O0lBYkMsb0NBQXVFOztJQUN2RSx1Q0FBc0M7O0lBRXRDLHFDQUE2Qjs7SUFDN0Isb0NBQWlCOztJQUNqQixtQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW1pbGFyIGltcGxlbWVudGF0aW9uIHRvOlxuLy8gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2R5bmFtaWMtZm9ybVxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQmFzZUZvcm1Db250cm9sLFxufSBmcm9tICcuL2Jhc2UuZm9ybS1jb250cm9sJ1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbFR5cGUsXG4gIElucHV0VHlwZUF0dHJpYnV0ZSxcbiAgaUlucHV0Rm9ybUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmxldCBpbnB1dEZvcm1Db250cm9sRGVmYXVsdHMgPSB7XG4gIGtleTogJycsXG4gIGxhYmVsOiAnJyxcbiAgcGxhY2Vob2xkZXI6ICcnLFxuICByb3c6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICBpbnB1dFR5cGU6ICd0ZXh0JyBhcyBJbnB1dFR5cGVBdHRyaWJ1dGUsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgb3B0aW9uczogW10sXG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1Db250cm9sIGV4dGVuZHMgQmFzZUZvcm1Db250cm9sXG4gIGltcGxlbWVudHMgaUlucHV0Rm9ybUNvbnRyb2wge1xuXG4gIHByaXZhdGUgZGVmYXVsdHM6IFBhcnRpYWw8aUlucHV0Rm9ybUNvbnRyb2w+ID0gaW5wdXRGb3JtQ29udHJvbERlZmF1bHRzXG4gIGNvbnRyb2xUeXBlOiBGb3JtQ29udHJvbFR5cGUgPSAnaW5wdXQnXG5cbiAgaW5wdXRUeXBlOiBJbnB1dFR5cGVBdHRyaWJ1dGVcbiAgcmVxdWlyZWQ6IGJvb2xlYW5cbiAgb3B0aW9uczogeyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdID0gW11cblxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPGlJbnB1dEZvcm1Db250cm9sPiA9IHt9KSB7XG4gICAgc3VwZXIoaW5pdClcblxuICAgIGluaXQgPSBfLmRlZmF1bHRzKGluaXQsIHRoaXMuZGVmYXVsdHMpXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KVxuICB9XG59XG4iXX0=