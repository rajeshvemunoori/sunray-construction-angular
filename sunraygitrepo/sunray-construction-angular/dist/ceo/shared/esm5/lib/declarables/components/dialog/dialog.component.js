/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseComponent } from '../base/base.component';
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
     * @param {?} event
     * @return {?}
     */
    DialogComponent.prototype.onClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dialogRef.close('close');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsWUFBWSxFQUFFLGVBQWUsRUFDOUIsTUFBTSxtQkFBbUIsQ0FBQTtBQU8xQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFdEQ7SUFLcUMsMkNBQWE7SUFHaEQseUJBQ1MsU0FBeUMsRUFDaEIsSUFBcUM7UUFGdkUsWUFJRSxpQkFBTyxTQUNSO1FBSlEsZUFBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsVUFBSSxHQUFKLElBQUksQ0FBaUM7UUFKdkUsc0JBQWdCLEdBQVcsZ0JBQWdCLENBQUE7O0lBTzNDLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLEtBQUs7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwrSEFBc0M7O2lCQUV2Qzs7OztnQkFkQyxZQUFZO2dEQW9CVCxNQUFNLFNBQUMsZUFBZTs7SUFRM0Isc0JBQUM7Q0FBQSxBQWxCRCxDQUtxQyxhQUFhLEdBYWpEO1NBYlksZUFBZTs7O0lBQzFCLDJDQUEyQzs7SUFHekMsb0NBQWdEOztJQUNoRCwrQkFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEFcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnXG5cbmltcG9ydCB7XG4gIGlEaWFsb2dDb21wb25lbnRJbnB1dFByb3BlcnRpZXMsXG4gIGlEaWFsb2dDb21wb25lbnQsXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29udGVudEVsZW1lbnRJZDogc3RyaW5nID0gJ2RpYWxvZy1jb250ZW50J1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxpRGlhbG9nQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGlEaWFsb2dDb21wb25lbnRJbnB1dFByb3BlcnRpZXMsXG4gICkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIG9uQ2xvc2UoZXZlbnQpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgnY2xvc2UnKVxuICB9XG59XG4iXX0=