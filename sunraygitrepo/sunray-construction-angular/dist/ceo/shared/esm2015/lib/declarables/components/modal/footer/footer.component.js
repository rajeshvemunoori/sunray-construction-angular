/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
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
        let event = {
            action: action
        };
        this.actionEmitter.emit(event);
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-modal-footer',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbW9kYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBUXpELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUFObEQ7O1FBUVksa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQVFqRSxDQUFDOzs7OztJQU5DLGVBQWUsQ0FBQyxNQUFNOztZQUNoQixLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtTQUNmO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHVTQUFzQzs7YUFFdkM7OzttQkFHRSxLQUFLOzRCQUNMLE1BQU07Ozs7SUFEUCwrQkFBa0I7O0lBQ2xCLHdDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLW1vZGFsLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnlcbiAgQE91dHB1dCgpIGFjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgb25UcmlnZ2VyQWN0aW9uKGFjdGlvbikge1xuICAgIGxldCBldmVudCA9IHtcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfVxuICAgIHRoaXMuYWN0aW9uRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19