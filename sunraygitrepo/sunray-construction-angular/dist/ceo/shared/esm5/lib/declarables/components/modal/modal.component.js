/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseComponent } from '../base/base.component';
var ModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalComponent, _super);
    function ModalComponent(dialogRef, data) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.contentElementId = 'modal-content';
        return _this;
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.afterClosed = /**
     * @return {?}
     */
    function () {
        return this.dialogRef.afterClosed();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalComponent.prototype.onAction = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.data.actions$.next(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalComponent.prototype.onClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dialogRef.close('close');
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-declarables-modal',
                    template: "<div id=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ModalComponent;
}(BaseComponent));
export { ModalComponent };
if (false) {
    /** @type {?} */
    ModalComponent.prototype.contentElementId;
    /** @type {?} */
    ModalComponent.prototype.actions$;
    /** @type {?} */
    ModalComponent.prototype.dialogRef;
    /** @type {?} */
    ModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLE1BQU0sR0FFMUIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNMLFlBQVksRUFBRSxlQUFlLEVBQzlCLE1BQU0sbUJBQW1CLENBQUE7QUFhMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRXREO0lBS29DLDBDQUFhO0lBTS9DLHdCQUNTLFNBQXlDLEVBQ2hCLElBQXFDO1FBRnZFLFlBSUUsaUJBQU8sU0FDUjtRQUpRLGVBQVMsR0FBVCxTQUFTLENBQWdDO1FBQ2hCLFVBQUksR0FBSixJQUFJLENBQWlDO1FBTHZFLHNCQUFnQixHQUFXLGVBQWUsQ0FBQTs7SUFRMUMsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNyQyxDQUFDOzs7OztJQUVELGlDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLEtBQUs7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLDhIQUFxQzs7aUJBRXRDOzs7O2dCQXBCQyxZQUFZO2dEQTZCVCxNQUFNLFNBQUMsZUFBZTs7SUFnQjNCLHFCQUFDO0NBQUEsQUE3QkQsQ0FLb0MsYUFBYSxHQXdCaEQ7U0F4QlksY0FBYzs7O0lBR3pCLDBDQUEwQzs7SUFDMUMsa0NBQThCOztJQUc1QixtQ0FBZ0Q7O0lBQ2hELDhCQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIElucHV0LFxuICBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEFcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnXG5pbXBvcnQge1xuICBjcmVhdGVDdXN0b21FbGVtZW50LCBOZ0VsZW1lbnRcbn0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnXG5cbmltcG9ydCB7IENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlEaWFsb2dDb21wb25lbnRJbnB1dFByb3BlcnRpZXMsXG4gIGlEaWFsb2dDb250ZW50Q29tcG9uZW50LFxuICBpRGlhbG9nQ29tcG9uZW50LFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1kZWNsYXJhYmxlcy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgaURpYWxvZ0NvbXBvbmVudCB7XG5cbiAgY29udGVudEVsZW1lbnRJZDogc3RyaW5nID0gJ21vZGFsLWNvbnRlbnQnXG4gIGFjdGlvbnMkOiBCZWhhdmlvclN1YmplY3Q8YW55PlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxpRGlhbG9nQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGlEaWFsb2dDb21wb25lbnRJbnB1dFByb3BlcnRpZXMsXG4gICkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIGFmdGVyQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKClcbiAgfVxuXG4gIG9uQWN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5kYXRhLmFjdGlvbnMkLm5leHQoZXZlbnQpXG4gIH1cblxuICBvbkNsb3NlKGV2ZW50KSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoJ2Nsb3NlJylcbiAgfVxufVxuIl19