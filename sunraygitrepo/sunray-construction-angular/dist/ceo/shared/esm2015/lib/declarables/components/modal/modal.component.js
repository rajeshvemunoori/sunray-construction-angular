/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseComponent } from '../base/base.component';
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
        this.data.actions$.next(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFDTCxTQUFTLEVBQVUsTUFBTSxHQUUxQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsWUFBWSxFQUFFLGVBQWUsRUFDOUIsTUFBTSxtQkFBbUIsQ0FBQTtBQWExQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhOzs7OztJQU0vQyxZQUNTLFNBQXlDLEVBQ2hCLElBQXFDO1FBRXJFLEtBQUssRUFBRSxDQUFBO1FBSEEsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBaUM7UUFMdkUscUJBQWdCLEdBQVcsZUFBZSxDQUFBO0lBUTFDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3JDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsOEhBQXFDOzthQUV0Qzs7OztZQXBCQyxZQUFZOzRDQTZCVCxNQUFNLFNBQUMsZUFBZTs7OztJQUx6QiwwQ0FBMEM7O0lBQzFDLGtDQUE4Qjs7SUFHNUIsbUNBQWdEOztJQUNoRCw4QkFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCxcbiAgVmlld0NoaWxkLCBPbkRlc3Ryb3ksIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQ3VzdG9tRWxlbWVudCwgTmdFbGVtZW50XG59IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJ1xuXG5pbXBvcnQgeyBDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2luZGV4J1xuXG5pbXBvcnQge1xuICBpRGlhbG9nQ29tcG9uZW50SW5wdXRQcm9wZXJ0aWVzLFxuICBpRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgaURpYWxvZ0NvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVjbGFyYWJsZXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIGlEaWFsb2dDb21wb25lbnQge1xuXG4gIGNvbnRlbnRFbGVtZW50SWQ6IHN0cmluZyA9ICdtb2RhbC1jb250ZW50J1xuICBhY3Rpb25zJDogQmVoYXZpb3JTdWJqZWN0PGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8aURpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBpRGlhbG9nQ29tcG9uZW50SW5wdXRQcm9wZXJ0aWVzLFxuICApIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpXG4gIH1cblxuICBvbkFjdGlvbihldmVudCkge1xuICAgIHRoaXMuZGF0YS5hY3Rpb25zJC5uZXh0KGV2ZW50KVxuICB9XG5cbiAgb25DbG9zZShldmVudCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCdjbG9zZScpXG4gIH1cbn1cbiJdfQ==