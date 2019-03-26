/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseComponent } from '../../../../declarables/index';
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
        if (event.action.name == 'cancel') {
            this.dialogRef.close(event.action.name);
        }
        else {
            this.data.actions$.next(event);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RpYWxvZ3MvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLE1BQU0sR0FFMUIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNMLFlBQVksRUFBRSxlQUFlLEVBQzlCLE1BQU0sbUJBQW1CLENBQUE7QUFVMUIsT0FBTyxFQUVMLGFBQWEsRUFDZCxNQUFNLCtCQUErQixDQUFBO0FBRXRDO0lBS29DLDBDQUFhO0lBTS9DLHdCQUNTLFNBQXlDLEVBQ2hCLElBQXFDO1FBRnZFLFlBSUUsaUJBQU8sU0FDUjtRQUpRLGVBQVMsR0FBVCxTQUFTLENBQWdDO1FBQ2hCLFVBQUksR0FBSixJQUFJLENBQWlDO1FBTHZFLHNCQUFnQixHQUFXLGVBQWUsQ0FBQTs7SUFRMUMsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNyQyxDQUFDOzs7OztJQUVELGlDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1osSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN4QzthQUNJO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsS0FBSztRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsOEhBQXFDOztpQkFFdEM7Ozs7Z0JBcEJDLFlBQVk7Z0RBNkJULE1BQU0sU0FBQyxlQUFlOztJQXFCM0IscUJBQUM7Q0FBQSxBQWxDRCxDQUtvQyxhQUFhLEdBNkJoRDtTQTdCWSxjQUFjOzs7SUFHekIsMENBQTBDOztJQUMxQyxrQ0FBOEI7O0lBRzVCLG1DQUFnRDs7SUFDaEQsOEJBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIEJlaGF2aW9yU3ViamVjdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQsXG4gIFZpZXdDaGlsZCwgT25EZXN0cm95LCBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCdcbmltcG9ydCB7XG4gIGNyZWF0ZUN1c3RvbUVsZW1lbnQsIE5nRWxlbWVudFxufSBmcm9tICdAYW5ndWxhci9lbGVtZW50cydcblxuaW1wb3J0IHtcbiAgaURpYWxvZ0NvbXBvbmVudElucHV0UHJvcGVydGllcyxcbiAgaURpYWxvZ0NvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgQ29udGFpbmVyRGlyZWN0aXZlLFxuICBCYXNlQ29tcG9uZW50XG59IGZyb20gJy4uLy4uLy4uLy4uL2RlY2xhcmFibGVzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVjbGFyYWJsZXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIGlEaWFsb2dDb21wb25lbnQge1xuXG4gIGNvbnRlbnRFbGVtZW50SWQ6IHN0cmluZyA9ICdtb2RhbC1jb250ZW50J1xuICBhY3Rpb25zJDogQmVoYXZpb3JTdWJqZWN0PGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8aURpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBpRGlhbG9nQ29tcG9uZW50SW5wdXRQcm9wZXJ0aWVzLFxuICApIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpXG4gIH1cblxuICBvbkFjdGlvbihldmVudCkge1xuICAgIGlmKGV2ZW50LmFjdGlvbi5uYW1lID09ICdjYW5jZWwnKSB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShldmVudC5hY3Rpb24ubmFtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRhdGEuYWN0aW9ucyQubmV4dChldmVudClcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKGV2ZW50KSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoJ2Nsb3NlJylcbiAgfVxufVxuIl19