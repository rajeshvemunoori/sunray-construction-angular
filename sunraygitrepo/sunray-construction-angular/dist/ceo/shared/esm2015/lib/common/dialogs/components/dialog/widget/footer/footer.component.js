/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../../../../../declarables/index';
export class FooterComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.actionEmitter = new EventEmitter();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    onTriggerAction(action) {
        /** @type {?} */
        let dialogAction = {
            name: action.name,
            payload: null
        };
        this.actionEmitter.emit(dialogAction);
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-widget-footer',
                template: "<mat-dialog-actions>\n  <a *ngFor=\"let action of data.actions\"\n    href=\"{{action.url}}\"\n    class=\"{{action.className}}\"\n    ceoClickStopEventBubble\n    (click)=\"onTriggerAction(action)\"\n    href=\"{{action.url}}\">\n    {{action.text}}\n  </a>\n</mat-dialog-actions>\n",
                styles: [""]
            }] }
];
FooterComponent.propDecorators = {
    data: [{ type: Input }],
    actionEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FooterComponent.prototype.data;
    /** @type {?} */
    FooterComponent.prototype.actionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kaWFsb2dzL2NvbXBvbmVudHMvZGlhbG9nL3dpZGdldC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUE7QUFPbkUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUxsRDs7UUFPWSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBVWpFLENBQUM7Ozs7O0lBUEMsZUFBZSxDQUFDLE1BQU07O1lBQ2hCLFlBQVksR0FBRztZQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsT0FBTyxFQUFFLElBQUk7U0FDZDtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsdVNBQXNDOzthQUV2Qzs7O21CQUVFLEtBQUs7NEJBQ0wsTUFBTTs7OztJQURQLCtCQUFrQjs7SUFDbEIsd0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9kZWNsYXJhYmxlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWRpYWxvZy13aWRnZXQtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnlcbiAgQE91dHB1dCgpIGFjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cblxuICBvblRyaWdnZXJBY3Rpb24oYWN0aW9uKSB7XG4gICAgbGV0IGRpYWxvZ0FjdGlvbiA9IHtcbiAgICAgIG5hbWU6IGFjdGlvbi5uYW1lLFxuICAgICAgcGF5bG9hZDogbnVsbFxuICAgIH1cbiAgICB0aGlzLmFjdGlvbkVtaXR0ZXIuZW1pdChkaWFsb2dBY3Rpb24pXG4gIH1cbn1cbiJdfQ==