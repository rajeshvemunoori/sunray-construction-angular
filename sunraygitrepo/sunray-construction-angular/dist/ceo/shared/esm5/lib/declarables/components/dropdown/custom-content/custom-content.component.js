/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
var CustomContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomContentComponent, _super);
    function CustomContentComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemEvent = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CustomContentComponent.prototype.onRouteEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.item = this.item;
        this.itemEvent.emit(event);
    };
    CustomContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dropdown-custom-content',
                    template: "<div [innerHtml]=\"item.customContent | safeHtml\" ceoRouteTransformer\n  (routeEvent)=\"onRouteEvent($event)\">\n</div>\n",
                    styles: [""]
                }] }
    ];
    CustomContentComponent.propDecorators = {
        item: [{ type: Input }],
        itemEvent: [{ type: Output }]
    };
    return CustomContentComponent;
}(BaseComponent));
export { CustomContentComponent };
if (false) {
    /** @type {?} */
    CustomContentComponent.prototype.item;
    /** @type {?} */
    CustomContentComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9kcm9wZG93bi9jdXN0b20tY29udGVudC9jdXN0b20tY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFDaEIsWUFBWSxFQUNaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFNekQ7SUFLNEMsa0RBQWE7SUFMekQ7UUFBQSxxRUFnQkM7UUFOQyxlQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7O0lBTXhELENBQUM7Ozs7O0lBSkMsNkNBQVk7Ozs7SUFBWixVQUFhLEtBQVU7UUFDckIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxzSUFBOEM7O2lCQUUvQzs7O3VCQUVFLEtBQUs7NEJBR0wsTUFBTTs7SUFPVCw2QkFBQztDQUFBLEFBaEJELENBSzRDLGFBQWEsR0FXeEQ7U0FYWSxzQkFBc0I7OztJQUNqQyxzQ0FDeUI7O0lBRXpCLDJDQUNzRCIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyICQ6IGFueVxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlOYXZpZ2F0aW9uTWVudUl0ZW0sXG59IGZyb20gJy4uLy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZHJvcGRvd24tY3VzdG9tLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUNvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgaXRlbTogaU5hdmlnYXRpb25NZW51SXRlbVxuXG4gIEBPdXRwdXQoKVxuICBpdGVtRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBvblJvdXRlRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50Lml0ZW0gPSB0aGlzLml0ZW1cbiAgICB0aGlzLml0ZW1FdmVudC5lbWl0KGV2ZW50KVxuICB9XG59XG4iXX0=