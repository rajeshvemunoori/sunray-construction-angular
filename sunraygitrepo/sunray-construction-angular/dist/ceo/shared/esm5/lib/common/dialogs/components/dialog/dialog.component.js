/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { BaseComponent } from '../../../../declarables/index';
var DialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DialogComponent, _super);
    function DialogComponent(dialogRef, data) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.contentElementId = 'dialog-content';
        return _this;
    }
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.data.actions$.subscribe(function (action) { return _this.onAction(action); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DialogComponent.prototype.onClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dialogRef.close('close');
        this.emitAction(this.buildAction('close'));
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DialogComponent.prototype.onAction = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        //console.log("We have the dialog action " + action.name)
    };
    /**
     * @private
     * @param {?} name
     * @param {?=} payload
     * @return {?}
     */
    DialogComponent.prototype.buildAction = /**
     * @private
     * @param {?} name
     * @param {?=} payload
     * @return {?}
     */
    function (name, payload) {
        if (payload === void 0) { payload = null; }
        return {
            name: name,
            payload: payload
        };
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DialogComponent.prototype.emitAction = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.data.actions$.next(action);
    };
    DialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dialog',
                    template: "<div id=\"dialog-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return DialogComponent;
}(BaseComponent));
export { DialogComponent };
if (false) {
    /** @type {?} */
    DialogComponent.prototype.contentElementId;
    /** @type {?} */
    DialogComponent.prototype.dialogRef;
    /** @type {?} */
    DialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kaWFsb2dzL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQU10QixPQUFPLEVBQ0wsWUFBWSxFQUNaLGVBQWUsR0FDaEIsTUFBTSxtQkFBbUIsQ0FBQTtBQVExQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFFN0Q7SUFLcUMsMkNBQWE7SUFHaEQseUJBQ1MsU0FBeUMsRUFDaEIsSUFBcUM7UUFGdkUsWUFJRSxpQkFBTyxTQUNSO1FBSlEsZUFBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsVUFBSSxHQUFKLElBQUksQ0FBaUM7UUFKdkUsc0JBQWdCLEdBQVcsZ0JBQWdCLENBQUE7O0lBTzNDLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFBQSxpQkFHQztRQUZDLGlCQUFNLFFBQVEsV0FBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQTtJQUMvRCxDQUFDOzs7OztJQUVELGlDQUFPOzs7O0lBQVAsVUFBUSxLQUFLO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7Ozs7SUFHRCxrQ0FBUTs7OztJQUFSLFVBQVMsTUFBcUI7UUFDNUIseURBQXlEO0lBQzNELENBQUM7Ozs7Ozs7SUFFTyxxQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLElBQVksRUFBRSxPQUFtQjtRQUFuQix3QkFBQSxFQUFBLGNBQW1CO1FBQ25ELE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUE7SUFDSCxDQUFDOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxNQUFxQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakMsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsK0hBQXNDOztpQkFFdkM7Ozs7Z0JBaEJDLFlBQVk7Z0RBc0JULE1BQU0sU0FBQyxlQUFlOztJQThCM0Isc0JBQUM7Q0FBQSxBQXhDRCxDQUtxQyxhQUFhLEdBbUNqRDtTQW5DWSxlQUFlOzs7SUFDMUIsMkNBQTJDOztJQUd6QyxvQ0FBZ0Q7O0lBQ2hELCtCQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIE1hdERpYWxvZ1JlZixcbiAgTUFUX0RJQUxPR19EQVRBLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCdcblxuaW1wb3J0IHtcbiAgaURpYWxvZ0FjdGlvbixcbiAgaURpYWxvZ0NvbXBvbmVudElucHV0UHJvcGVydGllcyxcbiAgaURpYWxvZ0NvbXBvbmVudCxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RlY2xhcmFibGVzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb250ZW50RWxlbWVudElkOiBzdHJpbmcgPSAnZGlhbG9nLWNvbnRlbnQnXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGlEaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogaURpYWxvZ0NvbXBvbmVudElucHV0UHJvcGVydGllcyxcbiAgKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKVxuICAgIHRoaXMuZGF0YS5hY3Rpb25zJC5zdWJzY3JpYmUoYWN0aW9uID0+IHRoaXMub25BY3Rpb24oYWN0aW9uKSlcbiAgfVxuXG4gIG9uQ2xvc2UoZXZlbnQpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgnY2xvc2UnKVxuICAgIHRoaXMuZW1pdEFjdGlvbih0aGlzLmJ1aWxkQWN0aW9uKCdjbG9zZScpKVxuICB9XG5cblxuICBvbkFjdGlvbihhY3Rpb246IGlEaWFsb2dBY3Rpb24pIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiV2UgaGF2ZSB0aGUgZGlhbG9nIGFjdGlvbiBcIiArIGFjdGlvbi5uYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFjdGlvbihuYW1lOiBzdHJpbmcsIHBheWxvYWQ6IGFueSA9IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHBheWxvYWQ6IHBheWxvYWRcbiAgICB9XG4gIH1cblxuICBlbWl0QWN0aW9uKGFjdGlvbjogaURpYWxvZ0FjdGlvbikge1xuICAgIHRoaXMuZGF0YS5hY3Rpb25zJC5uZXh0KGFjdGlvbilcbiAgfVxufVxuIl19