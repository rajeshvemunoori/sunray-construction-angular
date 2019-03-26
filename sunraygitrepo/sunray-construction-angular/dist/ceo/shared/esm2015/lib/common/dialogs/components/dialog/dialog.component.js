/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { BaseComponent } from '../../../../declarables/index';
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
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.data.actions$.subscribe(action => this.onAction(action));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
        this.dialogRef.close('close');
        this.emitAction(this.buildAction('close'));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    onAction(action) {
        //console.log("We have the dialog action " + action.name)
    }
    /**
     * @private
     * @param {?} name
     * @param {?=} payload
     * @return {?}
     */
    buildAction(name, payload = null) {
        return {
            name: name,
            payload: payload
        };
    }
    /**
     * @param {?} action
     * @return {?}
     */
    emitAction(action) {
        this.data.actions$.next(action);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kaWFsb2dzL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFBO0FBTXRCLE9BQU8sRUFDTCxZQUFZLEVBQ1osZUFBZSxHQUNoQixNQUFNLG1CQUFtQixDQUFBO0FBUTFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQU83RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhOzs7OztJQUdoRCxZQUNTLFNBQXlDLEVBQ2hCLElBQXFDO1FBRXJFLEtBQUssRUFBRSxDQUFBO1FBSEEsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBaUM7UUFKdkUscUJBQWdCLEdBQVcsZ0JBQWdCLENBQUE7SUFPM0MsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQy9ELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxNQUFxQjtRQUM1Qix5REFBeUQ7SUFDM0QsQ0FBQzs7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFZLEVBQUUsVUFBZSxJQUFJO1FBQ25ELE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUE7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFxQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakMsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsK0hBQXNDOzthQUV2Qzs7OztZQWhCQyxZQUFZOzRDQXNCVCxNQUFNLFNBQUMsZUFBZTs7OztJQUp6QiwyQ0FBMkM7O0lBR3pDLG9DQUFnRDs7SUFDaEQsK0JBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgTWF0RGlhbG9nUmVmLFxuICBNQVRfRElBTE9HX0RBVEEsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJ1xuXG5pbXBvcnQge1xuICBpRGlhbG9nQWN0aW9uLFxuICBpRGlhbG9nQ29tcG9uZW50SW5wdXRQcm9wZXJ0aWVzLFxuICBpRGlhbG9nQ29tcG9uZW50LFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnRlbnRFbGVtZW50SWQ6IHN0cmluZyA9ICdkaWFsb2ctY29udGVudCdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8aURpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBpRGlhbG9nQ29tcG9uZW50SW5wdXRQcm9wZXJ0aWVzLFxuICApIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpXG4gICAgdGhpcy5kYXRhLmFjdGlvbnMkLnN1YnNjcmliZShhY3Rpb24gPT4gdGhpcy5vbkFjdGlvbihhY3Rpb24pKVxuICB9XG5cbiAgb25DbG9zZShldmVudCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCdjbG9zZScpXG4gICAgdGhpcy5lbWl0QWN0aW9uKHRoaXMuYnVpbGRBY3Rpb24oJ2Nsb3NlJykpXG4gIH1cblxuXG4gIG9uQWN0aW9uKGFjdGlvbjogaURpYWxvZ0FjdGlvbikge1xuICAgIC8vY29uc29sZS5sb2coXCJXZSBoYXZlIHRoZSBkaWFsb2cgYWN0aW9uIFwiICsgYWN0aW9uLm5hbWUpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWN0aW9uKG5hbWU6IHN0cmluZywgcGF5bG9hZDogYW55ID0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcGF5bG9hZDogcGF5bG9hZFxuICAgIH1cbiAgfVxuXG4gIGVtaXRBY3Rpb24oYWN0aW9uOiBpRGlhbG9nQWN0aW9uKSB7XG4gICAgdGhpcy5kYXRhLmFjdGlvbnMkLm5leHQoYWN0aW9uKVxuICB9XG59XG4iXX0=