/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseComponent } from '../base/base.component';
export class DialogComponent extends BaseComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.contentElementId = 'dialog-content';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
        this.dialogRef.close('close');
    }
}
DialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog',
                template: "<div id=\"dialog-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    DialogComponent.prototype.contentElementId;
    /** @type {?} */
    DialogComponent.prototype.dialogRef;
    /** @type {?} */
    DialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFDTCxZQUFZLEVBQUUsZUFBZSxFQUM5QixNQUFNLG1CQUFtQixDQUFBO0FBTzFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQU90RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhOzs7OztJQUdoRCxZQUNTLFNBQXlDLEVBQ2hCLElBQXFDO1FBRXJFLEtBQUssRUFBRSxDQUFBO1FBSEEsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBaUM7UUFKdkUscUJBQWdCLEdBQVcsZ0JBQWdCLENBQUE7SUFPM0MsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLCtIQUFzQzs7YUFFdkM7Ozs7WUFkQyxZQUFZOzRDQW9CVCxNQUFNLFNBQUMsZUFBZTs7OztJQUp6QiwyQ0FBMkM7O0lBR3pDLG9DQUFnRDs7SUFDaEQsK0JBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJ1xuXG5pbXBvcnQge1xuICBpRGlhbG9nQ29tcG9uZW50SW5wdXRQcm9wZXJ0aWVzLFxuICBpRGlhbG9nQ29tcG9uZW50LFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnRlbnRFbGVtZW50SWQ6IHN0cmluZyA9ICdkaWFsb2ctY29udGVudCdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8aURpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBpRGlhbG9nQ29tcG9uZW50SW5wdXRQcm9wZXJ0aWVzLFxuICApIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBvbkNsb3NlKGV2ZW50KSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoJ2Nsb3NlJylcbiAgfVxufVxuIl19