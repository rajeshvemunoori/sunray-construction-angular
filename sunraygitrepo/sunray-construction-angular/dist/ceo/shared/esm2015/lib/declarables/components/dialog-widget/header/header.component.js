/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
export class HeaderComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.actionEmitter = new EventEmitter();
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-widget-header',
                template: "<div class=\"modal-header-inner-wrapper\">\n  <h2 mat-dialog-title class=\"modal-title title\">{{ data.title }}</h2>\n</div>\n",
                styles: [""]
            }] }
];
HeaderComponent.propDecorators = {
    data: [{ type: Input }],
    actionEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.data;
    /** @type {?} */
    HeaderComponent.prototype.actionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvZGlhbG9nLXdpZGdldC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFPekQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUxsRDs7UUFPWSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBQ2pFLENBQUM7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQywwSUFBc0M7O2FBRXZDOzs7bUJBRUUsS0FBSzs0QkFDTCxNQUFNOzs7O0lBRFAsK0JBQWtCOztJQUNsQix3Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kaWFsb2ctd2lkZ2V0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55XG4gIEBPdXRwdXQoKSBhY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxufVxuIl19