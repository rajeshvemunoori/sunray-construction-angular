/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseFormControl } from './base.form-control';
var DropdownFormControl = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownFormControl, _super);
    function DropdownFormControl(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        return _this;
        //eg. [{key: 1, value: "Test1"}]
        //this.options = init['options'] || this.emptyDropdown$()
    }
    return DropdownFormControl;
}(BaseFormControl));
export { DropdownFormControl };
if (false) {
    /** @type {?} */
    DropdownFormControl.prototype.controlType;
    /** @type {?} */
    DropdownFormControl.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZm9ybS1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2NsYXNzZXMvZm9ybS1jb250cm9scy9kcm9wZG93bi5mb3JtLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFRckQ7SUFBeUMsK0NBQWU7SUFPdEQsNkJBQVksSUFBZ0M7UUFBaEMscUJBQUEsRUFBQSxTQUFnQztRQUE1QyxZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUlaO1FBVEQsaUJBQVcsR0FBb0IsVUFBVSxDQUFBO1FBRXpDLGFBQU8sR0FBc0MsRUFBRSxDQUFBOztRQUs3QyxnQ0FBZ0M7UUFDaEMseURBQXlEO0lBQzNELENBQUM7SUFVSCwwQkFBQztBQUFELENBQUMsQUF0QkQsQ0FBeUMsZUFBZSxHQXNCdkQ7Ozs7SUFuQkMsMENBQXlDOztJQUV6QyxzQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgQmFzZUZvcm1Db250cm9sIH0gZnJvbSAnLi9iYXNlLmZvcm0tY29udHJvbCdcblxuaW1wb3J0IHtcbiAgaUZvcm1Db250cm9sLFxuICBpRHJvcGRvd25Gb3JtQ29udHJvbCxcbiAgRm9ybUNvbnRyb2xUeXBlLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Gb3JtQ29udHJvbCBleHRlbmRzIEJhc2VGb3JtQ29udHJvbCBcbiAgaW1wbGVtZW50cyBpRHJvcGRvd25Gb3JtQ29udHJvbCB7XG5cbiAgY29udHJvbFR5cGU6IEZvcm1Db250cm9sVHlwZSA9ICdkcm9wZG93bidcblxuICBvcHRpb25zOiB7IHRleHQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGluaXQ6IFBhcnRpYWw8aUZvcm1Db250cm9sPiA9IHt9KSB7XG4gICAgc3VwZXIoaW5pdClcblxuICAgIC8vZWcuIFt7a2V5OiAxLCB2YWx1ZTogXCJUZXN0MVwifV1cbiAgICAvL3RoaXMub3B0aW9ucyA9IGluaXRbJ29wdGlvbnMnXSB8fCB0aGlzLmVtcHR5RHJvcGRvd24kKClcbiAgfVxuXG4gIC8qXG4gIHByaXZhdGUgZW1wdHlEcm9wZG93biQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KFtdKVxuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKVxuICAgIH0pXG4gIH1cbiAgKi9cbn1cblxuIl19