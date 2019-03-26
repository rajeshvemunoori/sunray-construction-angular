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
    /**
     * @return {?}
     */
    onClose() {
        /** @type {?} */
        let action = {
            name: 'close',
        };
        /** @type {?} */
        let event = {
            action: action
        };
        this.actionEmitter.emit(event);
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-modal-header',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbW9kYWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBUXpELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUFObEQ7O1FBUVksa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQVdqRSxDQUFDOzs7O0lBVEMsT0FBTzs7WUFDRCxNQUFNLEdBQUc7WUFDWCxJQUFJLEVBQUUsT0FBTztTQUNkOztZQUNHLEtBQUssR0FBRztZQUNWLE1BQU0sRUFBRSxNQUFNO1NBQ2Y7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBJQUFzQzs7YUFFdkM7OzttQkFHRSxLQUFLOzRCQUNMLE1BQU07Ozs7SUFEUCwrQkFBa0I7O0lBQ2xCLHdDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLW1vZGFsLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnlcbiAgQE91dHB1dCgpIGFjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgb25DbG9zZSgpIHtcbiAgICBsZXQgYWN0aW9uID0ge1xuICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICB9XG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9XG4gICAgdGhpcy5hY3Rpb25FbWl0dGVyLmVtaXQoZXZlbnQpXG4gIH1cbn1cbiJdfQ==