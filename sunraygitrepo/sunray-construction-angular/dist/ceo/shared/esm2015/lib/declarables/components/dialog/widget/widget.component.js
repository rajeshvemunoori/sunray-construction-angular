/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of as observableOf, } from 'rxjs';
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog.component';
export class WidgetComponent extends DialogComponent {
    // From ModalComponent
    /**
     * @return {?}
     */
    afterClosed() {
        //return this.dialogRef.afterClosed()
        return observableOf(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAction(event) {
        this.data.actions$.next(event);
    }
}
WidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-widget',
                template: "<div class=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n\n  <ceo-dialog-widget-header\n    class=\"modal-header\"\n    *ngIf=\"data.header.show\"\n    (actionEmitter)=\"onAction($event)\"\n    [data]=\"data.header\">\n  </ceo-dialog-widget-header>\n\n  <div class=\"modal-body\">\n    <mat-dialog-content>\n      <div *ngIf=\"data.navigationLinks\" class='navigation-wrapper'>\n        <ceo-navigation\n          [navigationLinks]=\"data.navigationLinks\"\n          [menuClass]=\"'vertical'\">\n        </ceo-navigation>\n      </div>\n\n      <div id=\"dialog-content\" class=\"modal-window\">\n        <ng-template shared-declarables-container>\n        </ng-template>\n      </div>\n\n    </mat-dialog-content>\n  </div>\n\n  <ceo-dialog-widget-footer\n    class=\"modal-footer\"\n    *ngIf=\"data.footer.show\"\n    (actionEmitter)=\"onAction($event)\"\n    [ngClass]=\"data.footer.className\"\n    [data]=\"data.footer\">\n  </ceo-dialog-widget-footer>\n</div>\n",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    WidgetComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvZGlhbG9nL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsRUFBRSxJQUFJLFlBQVksR0FDbkIsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBSXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQU9yRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlOzs7OztJQUlsRCxXQUFXO1FBQ1QscUNBQXFDO1FBQ3JDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix5Z0NBQXNDOzthQUV2Qzs7OztJQUVDLCtCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2cuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZGlhbG9nLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQge1xuICBkYXRhOiBhbnlcblxuICAvLyBGcm9tIE1vZGFsQ29tcG9uZW50XG4gIGFmdGVyQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy9yZXR1cm4gdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKVxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbClcbiAgfVxuXG4gIG9uQWN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5kYXRhLmFjdGlvbnMkLm5leHQoZXZlbnQpXG4gIH1cbn1cbiJdfQ==