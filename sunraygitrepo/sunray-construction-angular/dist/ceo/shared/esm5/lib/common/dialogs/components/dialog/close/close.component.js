/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../../../../declarables/index';
var CloseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CloseComponent, _super);
    function CloseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.close = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    CloseComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.close.emit();
    };
    CloseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dialog-close',
                    template: "<button type=\"button\"\n  class=\"close modal-close btn btn-lg btn-lg-curved\"\n  aria-label=\"Close\"\n  (click)=\"onClose()\">\n\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n",
                    styles: [""]
                }] }
    ];
    CloseComponent.propDecorators = {
        close: [{ type: Output }]
    };
    return CloseComponent;
}(BaseComponent));
export { CloseComponent };
if (false) {
    /** @type {?} */
    CloseComponent.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RpYWxvZ3MvY29tcG9uZW50cy9kaWFsb2cvY2xvc2UvY2xvc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQTtBQUVoRTtJQUtvQywwQ0FBYTtJQUxqRDtRQUFBLHFFQVdDO1FBTFcsV0FBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBOztJQUt6RCxDQUFDOzs7O0lBSEMsZ0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNuQixDQUFDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIseU1BQXFDOztpQkFFdEM7Ozt3QkFFRSxNQUFNOztJQUtULHFCQUFDO0NBQUEsQUFYRCxDQUtvQyxhQUFhLEdBTWhEO1NBTlksY0FBYzs7O0lBQ3pCLCtCQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kZWNsYXJhYmxlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWRpYWxvZy1jbG9zZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9zZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nsb3NlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2xvc2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KClcbiAgfVxufVxuIl19