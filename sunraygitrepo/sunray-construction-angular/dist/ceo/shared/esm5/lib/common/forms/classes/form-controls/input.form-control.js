/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Similar implementation to:
// https://angular.io/guide/dynamic-form
import * as _ from 'lodash';
import { BaseFormControl, } from './base.form-control';
/** @type {?} */
var inputFormControlDefaults = {
    key: '',
    label: '',
    placeholder: '',
    row: null,
    value: null,
    inputType: (/** @type {?} */ ('text')),
    required: false,
    options: [],
};
var InputFormControl = /** @class */ (function (_super) {
    tslib_1.__extends(InputFormControl, _super);
    function InputFormControl(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.defaults = inputFormControlDefaults;
        _this.controlType = 'input';
        _this.options = [];
        init = _.defaults(init, _this.defaults);
        Object.assign(_this, init);
        return _this;
    }
    return InputFormControl;
}(BaseFormControl));
export { InputFormControl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZm9ybS1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2NsYXNzZXMvZm9ybS1jb250cm9scy9pbnB1dC5mb3JtLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxlQUFlLEdBQ2hCLE1BQU0scUJBQXFCLENBQUE7O0lBUXhCLHdCQUF3QixHQUFHO0lBQzdCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsS0FBSyxFQUFFLEVBQUU7SUFDVCxXQUFXLEVBQUUsRUFBRTtJQUNmLEdBQUcsRUFBRSxJQUFJO0lBQ1QsS0FBSyxFQUFFLElBQUk7SUFDWCxTQUFTLEVBQUUsbUJBQUEsTUFBTSxFQUFzQjtJQUN2QyxRQUFRLEVBQUUsS0FBSztJQUNmLE9BQU8sRUFBRSxFQUFFO0NBQ1o7QUFFRDtJQUFzQyw0Q0FBZTtJQVVuRCwwQkFBWSxJQUFxQztRQUFyQyxxQkFBQSxFQUFBLFNBQXFDO1FBQWpELFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBSVo7UUFaTyxjQUFRLEdBQStCLHdCQUF3QixDQUFBO1FBQ3ZFLGlCQUFXLEdBQW9CLE9BQU8sQ0FBQTtRQUl0QyxhQUFPLEdBQXNDLEVBQUUsQ0FBQTtRQUs3QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUMzQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBaEJELENBQXNDLGVBQWUsR0FnQnBEOzs7Ozs7O0lBYkMsb0NBQXVFOztJQUN2RSx1Q0FBc0M7O0lBRXRDLHFDQUE2Qjs7SUFDN0Isb0NBQWlCOztJQUNqQixtQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW1pbGFyIGltcGxlbWVudGF0aW9uIHRvOlxuLy8gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2R5bmFtaWMtZm9ybVxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQmFzZUZvcm1Db250cm9sLFxufSBmcm9tICcuL2Jhc2UuZm9ybS1jb250cm9sJ1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbFR5cGUsXG4gIElucHV0VHlwZUF0dHJpYnV0ZSxcbiAgaUlucHV0Rm9ybUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmxldCBpbnB1dEZvcm1Db250cm9sRGVmYXVsdHMgPSB7XG4gIGtleTogJycsXG4gIGxhYmVsOiAnJyxcbiAgcGxhY2Vob2xkZXI6ICcnLFxuICByb3c6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICBpbnB1dFR5cGU6ICd0ZXh0JyBhcyBJbnB1dFR5cGVBdHRyaWJ1dGUsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgb3B0aW9uczogW10sXG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1Db250cm9sIGV4dGVuZHMgQmFzZUZvcm1Db250cm9sXG4gIGltcGxlbWVudHMgaUlucHV0Rm9ybUNvbnRyb2wge1xuXG4gIHByaXZhdGUgZGVmYXVsdHM6IFBhcnRpYWw8aUlucHV0Rm9ybUNvbnRyb2w+ID0gaW5wdXRGb3JtQ29udHJvbERlZmF1bHRzXG4gIGNvbnRyb2xUeXBlOiBGb3JtQ29udHJvbFR5cGUgPSAnaW5wdXQnXG5cbiAgaW5wdXRUeXBlOiBJbnB1dFR5cGVBdHRyaWJ1dGVcbiAgcmVxdWlyZWQ6IGJvb2xlYW5cbiAgb3B0aW9uczogeyB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdID0gW11cblxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPGlJbnB1dEZvcm1Db250cm9sPiA9IHt9KSB7XG4gICAgc3VwZXIoaW5pdClcblxuICAgIGluaXQgPSBfLmRlZmF1bHRzKGluaXQsIHRoaXMuZGVmYXVsdHMpXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KVxuICB9XG59XG4iXX0=