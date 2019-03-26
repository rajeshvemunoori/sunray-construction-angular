/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9kaWFsb2cvY2xvc2UvY2xvc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBT3pELE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUxqRDs7UUFNWSxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7SUFLekQsQ0FBQzs7OztJQUhDLE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25CLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix5TUFBcUM7O2FBRXRDOzs7b0JBRUUsTUFBTTs7OztJQUFQLCtCQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZGlhbG9nLWNsb3NlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb3NlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvc2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKVxuICB9XG59XG4iXX0=