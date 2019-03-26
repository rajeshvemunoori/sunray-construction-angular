/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormMember } from './form-member';
export class FormItem extends FormMember {
    /**
     * @param {?=} props
     */
    constructor(props = {}) {
        super(props);
        this.type = 'form-item';
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this.control.ngControl;
    }
    /**
     * @param {?} ngControl
     * @return {?}
     */
    set ngControl(ngControl) {
        this.control.ngControl = ngControl;
    }
    /**
     * @return {?}
     */
    get showValidations() {
        return this.control.showValidations;
    }
    /**
     * @return {?}
     */
    get errorMessages() {
        return this.control.errorMessages;
    }
}
if (false) {
    /** @type {?} */
    FormItem.prototype.type;
    /** @type {?} */
    FormItem.prototype.control;
    /** @type {?} */
    FormItem.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2NsYXNzZXMvZm9ybS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFZQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7OztJQU10QyxZQUFZLFFBQTRCLEVBQUU7UUFDeEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBTmQsU0FBSSxHQUFtQixXQUFXLENBQUE7SUFPbEMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUE7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLFNBQVMsQ0FBQyxTQUE0QjtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7SUFDcEMsQ0FBQzs7OztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFBO0lBQ3JDLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFBO0lBQ25DLENBQUM7Q0FDRjs7O0lBeEJDLHdCQUFrQzs7SUFFbEMsMkJBQXFCOztJQUNyQix5QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wgYXMgTmdBYnN0cmFjdENvbnRyb2wsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBGb3JtTWVtYmVyVHlwZSxcbiAgaUZvcm1Db250cm9sLFxuICBpRm9ybUl0ZW0sXG4gIGlGb3JtTWVtYmVyRXJyb3IsXG4gIGlMYWJlbEVsZW1lbnQsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEZvcm1NZW1iZXIgfSBmcm9tICcuL2Zvcm0tbWVtYmVyJ1xuXG5leHBvcnQgY2xhc3MgRm9ybUl0ZW0gZXh0ZW5kcyBGb3JtTWVtYmVyIGltcGxlbWVudHMgaUZvcm1JdGVtIHtcbiAgdHlwZTogRm9ybU1lbWJlclR5cGUgPSAnZm9ybS1pdGVtJ1xuXG4gIGNvbnRyb2w6IGlGb3JtQ29udHJvbFxuICBsYWJlbDogaUxhYmVsRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQYXJ0aWFsPGlGb3JtSXRlbT4gPSB7fSkge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgZ2V0IG5nQ29udHJvbCgpOiBOZ0Fic3RyYWN0Q29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5uZ0NvbnRyb2xcbiAgfVxuXG4gIHNldCBuZ0NvbnRyb2wobmdDb250cm9sOiBOZ0Fic3RyYWN0Q29udHJvbCkge1xuICAgIHRoaXMuY29udHJvbC5uZ0NvbnRyb2wgPSBuZ0NvbnRyb2xcbiAgfVxuXG4gIGdldCBzaG93VmFsaWRhdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5zaG93VmFsaWRhdGlvbnNcbiAgfVxuXG4gIGdldCBlcnJvck1lc3NhZ2VzKCk6IGlGb3JtTWVtYmVyRXJyb3JbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5lcnJvck1lc3NhZ2VzXG4gIH1cbn1cbiJdfQ==