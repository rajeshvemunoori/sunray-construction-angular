/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseComponent } from '../../../../declarables/index';
export class ModalComponent extends BaseComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.contentElementId = 'modal-content';
    }
    /**
     * @return {?}
     */
    afterClosed() {
        return this.dialogRef.afterClosed();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAction(event) {
        if (event.action.name == 'cancel') {
            this.dialogRef.close(event.action.name);
        }
        else {
            this.data.actions$.next(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
        this.dialogRef.close('close');
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-modal',
                template: "<div id=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RpYWxvZ3MvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFDTCxTQUFTLEVBQVUsTUFBTSxHQUUxQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsWUFBWSxFQUFFLGVBQWUsRUFDOUIsTUFBTSxtQkFBbUIsQ0FBQTtBQVUxQixPQUFPLEVBRUwsYUFBYSxFQUNkLE1BQU0sK0JBQStCLENBQUE7QUFPdEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhOzs7OztJQU0vQyxZQUNTLFNBQXlDLEVBQ2hCLElBQXFDO1FBRXJFLEtBQUssRUFBRSxDQUFBO1FBSEEsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBaUM7UUFMdkUscUJBQWdCLEdBQVcsZUFBZSxDQUFBO0lBUTFDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3JDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3hDO2FBQ0k7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyw4SEFBcUM7O2FBRXRDOzs7O1lBcEJDLFlBQVk7NENBNkJULE1BQU0sU0FBQyxlQUFlOzs7O0lBTHpCLDBDQUEwQzs7SUFDMUMsa0NBQThCOztJQUc1QixtQ0FBZ0Q7O0lBQ2hELDhCQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIElucHV0LFxuICBWaWV3Q2hpbGQsIE9uRGVzdHJveSwgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEFcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnXG5pbXBvcnQge1xuICBjcmVhdGVDdXN0b21FbGVtZW50LCBOZ0VsZW1lbnRcbn0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnXG5cbmltcG9ydCB7XG4gIGlEaWFsb2dDb21wb25lbnRJbnB1dFByb3BlcnRpZXMsXG4gIGlEaWFsb2dDb21wb25lbnQsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgQmFzZUNvbXBvbmVudFxufSBmcm9tICcuLi8uLi8uLi8uLi9kZWNsYXJhYmxlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBpRGlhbG9nQ29tcG9uZW50IHtcblxuICBjb250ZW50RWxlbWVudElkOiBzdHJpbmcgPSAnbW9kYWwtY29udGVudCdcbiAgYWN0aW9ucyQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGlEaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogaURpYWxvZ0NvbXBvbmVudElucHV0UHJvcGVydGllcyxcbiAgKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKVxuICB9XG5cbiAgb25BY3Rpb24oZXZlbnQpIHtcbiAgICBpZihldmVudC5hY3Rpb24ubmFtZSA9PSAnY2FuY2VsJykge1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZXZlbnQuYWN0aW9uLm5hbWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhLmFjdGlvbnMkLm5leHQoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25DbG9zZShldmVudCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCdjbG9zZScpXG4gIH1cbn1cbiJdfQ==