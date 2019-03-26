/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
export class NavComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation-nav',
                template: "<ul class=\"navbar-nav\">\n  <ceo-navigation-nav-item\n    *ngFor=\"let item of navigationMenu.items.sortedItems\"\n    [item]=\"item\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-navigation-nav-item>\n</ul>\n",
                styles: [""]
            }] }
];
NavComponent.propDecorators = {
    navigationMenu: [{ type: Input }],
    itemEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NavComponent.prototype.navigationMenu;
    /** @type {?} */
    NavComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXYvbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQ2hCLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBWXpELE1BQU0sT0FBTyxZQUFhLFNBQVEsYUFBYTtJQUwvQzs7UUFVRSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7SUFLeEQsQ0FBQzs7Ozs7SUFIQyxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixvT0FBbUM7O2FBRXBDOzs7NkJBRUUsS0FBSzt3QkFHTCxNQUFNOzs7O0lBSFAsc0NBQytCOztJQUUvQixpQ0FDc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5pbXBvcnQge1xuICBpTmF2aWdhdGlvbk1lbnVJdGVtLFxuICBpTmF2aWdhdGlvbk1lbnUsXG59IGZyb20gJy4uLy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tbmF2aWdhdGlvbi1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG5hdmlnYXRpb25NZW51OiBpTmF2aWdhdGlvbk1lbnVcblxuICBAT3V0cHV0KClcbiAgaXRlbUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG5cbiAgb25JdGVtRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLml0ZW1FdmVudC5lbWl0KGV2ZW50KVxuICB9XG59XG4iXX0=