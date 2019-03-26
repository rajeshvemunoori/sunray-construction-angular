/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog.component';
export class WidgetComponent extends DialogComponent {
}
WidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-widget',
                template: "<div class=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n\n  <ceo-dialog-widget-header\n    class=\"modal-header\"\n    *ngIf=\"data.header.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [data]=\"data.header\">\n  </ceo-dialog-widget-header>\n\n  <div class=\"modal-body\">\n    <mat-dialog-content>\n      <div *ngIf=\"data.navigationLinks\" class='navigation-wrapper'>\n        <ceo-navigation\n          [navigationLinks]=\"data.navigationLinks\"\n          [menuClass]=\"'vertical'\">\n        </ceo-navigation>\n      </div>\n\n      <div id=\"dialog-content\" class=\"modal-window\">\n        <ng-template shared-declarables-container>\n        </ng-template>\n      </div>\n\n    </mat-dialog-content>\n  </div>\n\n  <ceo-dialog-widget-footer\n    class=\"modal-footer\"\n    *ngIf=\"data.footer.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [ngClass]=\"data.footer.className\"\n    [data]=\"data.footer\">\n  </ceo-dialog-widget-footer>\n</div>\n",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    WidgetComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kaWFsb2dzL2NvbXBvbmVudHMvZGlhbG9nL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBSXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQU9yRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlOzs7WUFMbkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDZnQ0FBc0M7O2FBRXZDOzs7O0lBRUMsK0JBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBCZWhhdmlvclN1YmplY3QsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2RlY2xhcmFibGVzL2luZGV4J1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2cuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZGlhbG9nLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQge1xuICBkYXRhOiBhbnlcbn1cbiJdfQ==