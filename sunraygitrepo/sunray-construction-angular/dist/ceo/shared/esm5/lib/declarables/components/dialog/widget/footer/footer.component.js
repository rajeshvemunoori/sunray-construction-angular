/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
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
                    selector: 'ceo-dialog-widget-footer',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvZGlhbG9nL3dpZGdldC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBRTVEO0lBS3FDLDJDQUFhO0lBTGxEO1FBQUEscUVBZ0JDO1FBVFcsbUJBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTs7SUFTakUsQ0FBQzs7Ozs7SUFOQyx5Q0FBZTs7OztJQUFmLFVBQWdCLE1BQU07O1lBQ2hCLEtBQUssR0FBRztZQUNWLE1BQU0sRUFBRSxNQUFNO1NBQ2Y7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsdVNBQXNDOztpQkFFdkM7Ozt1QkFFRSxLQUFLO2dDQUNMLE1BQU07O0lBU1Qsc0JBQUM7Q0FBQSxBQWhCRCxDQUtxQyxhQUFhLEdBV2pEO1NBWFksZUFBZTs7O0lBQzFCLCtCQUFrQjs7SUFDbEIsd0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZGlhbG9nLXdpZGdldC1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9vdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueVxuICBAT3V0cHV0KCkgYWN0aW9uRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuXG4gIG9uVHJpZ2dlckFjdGlvbihhY3Rpb24pIHtcbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICBhY3Rpb246IGFjdGlvblxuICAgIH1cbiAgICB0aGlzLmFjdGlvbkVtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==