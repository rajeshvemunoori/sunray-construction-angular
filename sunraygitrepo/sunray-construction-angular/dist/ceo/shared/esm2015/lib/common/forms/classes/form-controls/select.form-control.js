/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseFormControl } from './base.form-control';
export class SelectFormControl extends BaseFormControl {
    /**
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.controlType = 'select';
        this.options = [];
        //eg. [{key: 1, value: "Test1"}]
        //this.options = init['options'] || this.emptyDropdown$()
    }
}
if (false) {
    /** @type {?} */
    SelectFormControl.prototype.controlType;
    /** @type {?} */
    SelectFormControl.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmZvcm0tY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9jbGFzc2VzL2Zvcm0tY29udHJvbHMvc2VsZWN0LmZvcm0tY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBUXJELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlOzs7O0lBT3BELFlBQVksT0FBOEIsRUFBRTtRQUMxQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFMYixnQkFBVyxHQUFvQixRQUFRLENBQUE7UUFFdkMsWUFBTyxHQUFzQyxFQUFFLENBQUE7UUFLN0MsZ0NBQWdDO1FBQ2hDLHlEQUF5RDtJQUMzRCxDQUFDO0NBVUY7OztJQW5CQyx3Q0FBdUM7O0lBRXZDLG9DQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBCYXNlRm9ybUNvbnRyb2wgfSBmcm9tICcuL2Jhc2UuZm9ybS1jb250cm9sJ1xuXG5pbXBvcnQge1xuICBpRm9ybUNvbnRyb2wsXG4gIGlTZWxlY3RGb3JtQ29udHJvbCxcbiAgRm9ybUNvbnRyb2xUeXBlLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0Rm9ybUNvbnRyb2wgZXh0ZW5kcyBCYXNlRm9ybUNvbnRyb2wgXG4gIGltcGxlbWVudHMgaVNlbGVjdEZvcm1Db250cm9sIHtcblxuICBjb250cm9sVHlwZTogRm9ybUNvbnRyb2xUeXBlID0gJ3NlbGVjdCdcblxuICBvcHRpb25zOiB7IHRleHQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGluaXQ6IFBhcnRpYWw8aUZvcm1Db250cm9sPiA9IHt9KSB7XG4gICAgc3VwZXIoaW5pdClcblxuICAgIC8vZWcuIFt7a2V5OiAxLCB2YWx1ZTogXCJUZXN0MVwifV1cbiAgICAvL3RoaXMub3B0aW9ucyA9IGluaXRbJ29wdGlvbnMnXSB8fCB0aGlzLmVtcHR5RHJvcGRvd24kKClcbiAgfVxuXG4gIC8qXG4gIHByaXZhdGUgZW1wdHlEcm9wZG93biQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KFtdKVxuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKVxuICAgIH0pXG4gIH1cbiAgKi9cbn1cblxuIl19