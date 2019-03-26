/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../../../../declarables/index';
export class CloseComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClose() {
        this.close.emit();
    }
}
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
if (false) {
    /** @type {?} */
    CloseComponent.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RpYWxvZ3MvY29tcG9uZW50cy9kaWFsb2cvY2xvc2UvY2xvc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFBO0FBT2hFLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUxqRDs7UUFNWSxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7SUFLekQsQ0FBQzs7OztJQUhDLE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25CLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix5TUFBcUM7O2FBRXRDOzs7b0JBRUUsTUFBTTs7OztJQUFQLCtCQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kZWNsYXJhYmxlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWRpYWxvZy1jbG9zZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9zZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nsb3NlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2xvc2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KClcbiAgfVxufVxuIl19