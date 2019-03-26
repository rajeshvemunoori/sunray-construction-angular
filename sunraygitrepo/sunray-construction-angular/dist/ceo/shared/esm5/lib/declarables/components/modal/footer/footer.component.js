/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
var FooterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FooterComponent, _super);
    function FooterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionEmitter = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    FooterComponent.prototype.onTriggerAction = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        /** @type {?} */
        var event = {
            action: action
        };
        this.actionEmitter.emit(event);
    };
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
    return FooterComponent;
}(BaseComponent));
export { FooterComponent };
if (false) {
    /** @type {?} */
    FooterComponent.prototype.data;
    /** @type {?} */
    FooterComponent.prototype.actionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbW9kYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUV6RDtJQU1xQywyQ0FBYTtJQU5sRDtRQUFBLHFFQWdCQztRQVJXLG1CQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7O0lBUWpFLENBQUM7Ozs7O0lBTkMseUNBQWU7Ozs7SUFBZixVQUFnQixNQUFNOztZQUNoQixLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtTQUNmO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHVTQUFzQzs7aUJBRXZDOzs7dUJBR0UsS0FBSztnQ0FDTCxNQUFNOztJQVFULHNCQUFDO0NBQUEsQUFoQkQsQ0FNcUMsYUFBYSxHQVVqRDtTQVZZLGVBQWU7OztJQUMxQiwrQkFBa0I7O0lBQ2xCLHdDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLW1vZGFsLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnlcbiAgQE91dHB1dCgpIGFjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgb25UcmlnZ2VyQWN0aW9uKGFjdGlvbikge1xuICAgIGxldCBldmVudCA9IHtcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfVxuICAgIHRoaXMuYWN0aW9uRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19