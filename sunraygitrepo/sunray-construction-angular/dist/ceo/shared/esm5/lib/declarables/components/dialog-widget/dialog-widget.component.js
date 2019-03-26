/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of as observableOf, } from 'rxjs';
import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var DialogWidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DialogWidgetComponent, _super);
    function DialogWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // From ModalComponent
    // From ModalComponent
    /**
     * @return {?}
     */
    DialogWidgetComponent.prototype.afterClosed = 
    // From ModalComponent
    /**
     * @return {?}
     */
    function () {
        //return this.dialogRef.afterClosed()
        return observableOf(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DialogWidgetComponent.prototype.onAction = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        //this.data.actions$.next(event)
    };
    /**
     * @return {?}
     */
    DialogWidgetComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        //this.dialogRef.close('close')
    };
    DialogWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dialog-widget',
                    template: "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <button type=\"button\"\n      class=\"close modal-close btn btn-lg btn-lg-curved\"\n      aria-label=\"Close\"\n      (click)=\"onClose()\">\n\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n\n    <ceo-modal-header\n      *ngIf=\"data.header.show\"\n      (actionEmitter)=\"onAction($event)\"\n      [data]=\"data.header\">\n    </ceo-modal-header>\n  </div>\n\n  <div class=\"modal-body\">\n    <mat-dialog-content>\n      <div *ngIf=\"data.navigationLinks\" class='navigation-wrapper'>\n        <ceo-navigation\n          [navigationLinks]=\"data.navigationLinks\"\n          [menuClass]=\"'vertical'\">\n        </ceo-navigation>\n      </div>\n\n      <div id=\"modal-content\" class=\"modal-window\">\n        <ng-template shared-declarables-container>\n        </ng-template>\n      </div>\n\n    </mat-dialog-content>\n  </div>\n\n  <div *ngIf=\"data.footer.show\" class=\"modal-footer\">\n    <ceo-modal-footer\n      (actionEmitter)=\"onAction($event)\"\n      [ngClass]=\"data.footer.className\"\n      [data]=\"data.footer\">\n    </ceo-modal-footer>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return DialogWidgetComponent;
}(BaseComponent));
export { DialogWidgetComponent };
if (false) {
    /** @type {?} */
    DialogWidgetComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2RpYWxvZy13aWRnZXQvZGlhbG9nLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBR0wsRUFBRSxJQUFJLFlBQVksR0FDbkIsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFBO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUV0RDtJQUsyQyxpREFBYTtJQUx4RDs7SUFxQkEsQ0FBQztJQWJDLHNCQUFzQjs7Ozs7SUFDdEIsMkNBQVc7Ozs7O0lBQVg7UUFDRSxxQ0FBcUM7UUFDckMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBUTs7OztJQUFSLFVBQVMsS0FBSztRQUNaLGdDQUFnQztJQUNsQyxDQUFDOzs7O0lBRUQsdUNBQU87OztJQUFQO1FBQ0UsK0JBQStCO0lBQ2pDLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMHBDQUE2Qzs7aUJBRTlDOztJQWlCRCw0QkFBQztDQUFBLEFBckJELENBSzJDLGFBQWEsR0FnQnZEO1NBaEJZLHFCQUFxQjs7O0lBQ2hDLHFDQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kaWFsb2ctd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGRhdGE6IGFueVxuXG4gIC8vIEZyb20gTW9kYWxDb21wb25lbnRcbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvL3JldHVybiB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZihudWxsKVxuICB9XG5cbiAgb25BY3Rpb24oZXZlbnQpIHtcbiAgICAvL3RoaXMuZGF0YS5hY3Rpb25zJC5uZXh0KGV2ZW50KVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICAvL3RoaXMuZGlhbG9nUmVmLmNsb3NlKCdjbG9zZScpXG4gIH1cbn1cbiJdfQ==