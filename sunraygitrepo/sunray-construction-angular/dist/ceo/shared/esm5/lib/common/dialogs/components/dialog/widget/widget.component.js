/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog.component';
var WidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(WidgetComponent, _super);
    function WidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dialog-widget',
                    template: "<div class=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n\n  <ceo-dialog-widget-header\n    class=\"modal-header\"\n    *ngIf=\"data.header.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [data]=\"data.header\">\n  </ceo-dialog-widget-header>\n\n  <div class=\"modal-body\">\n    <mat-dialog-content>\n      <div *ngIf=\"data.navigationLinks\" class='navigation-wrapper'>\n        <ceo-navigation\n          [navigationLinks]=\"data.navigationLinks\"\n          [menuClass]=\"'vertical'\">\n        </ceo-navigation>\n      </div>\n\n      <div id=\"dialog-content\" class=\"modal-window\">\n        <ng-template shared-declarables-container>\n        </ng-template>\n      </div>\n\n    </mat-dialog-content>\n  </div>\n\n  <ceo-dialog-widget-footer\n    class=\"modal-footer\"\n    *ngIf=\"data.footer.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [ngClass]=\"data.footer.className\"\n    [data]=\"data.footer\">\n  </ceo-dialog-widget-footer>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return WidgetComponent;
}(DialogComponent));
export { WidgetComponent };
if (false) {
    /** @type {?} */
    WidgetComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kaWFsb2dzL2NvbXBvbmVudHMvZGlhbG9nL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUl6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFFckQ7SUFLcUMsMkNBQWU7SUFMcEQ7O0lBT0EsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDZnQ0FBc0M7O2lCQUV2Qzs7SUFHRCxzQkFBQztDQUFBLEFBUEQsQ0FLcUMsZUFBZSxHQUVuRDtTQUZZLGVBQWU7OztJQUMxQiwrQkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2RpYWxvZy5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kaWFsb2ctd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudCB7XG4gIGRhdGE6IGFueVxufVxuIl19