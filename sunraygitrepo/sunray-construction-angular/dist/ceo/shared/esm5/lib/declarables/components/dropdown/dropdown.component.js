/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var DropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownComponent, _super);
    function DropdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemEvent = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DropdownComponent.prototype.className = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var classes = [item.className];
        if (item.hasSubmenu()) {
            classes.push('dropdown-column');
        }
        return _.join(classes, ' ');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropdownComponent.prototype.onItemEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.itemEvent.emit(event);
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dropdown',
                    template: "<div class=\"dropdown-menu animated fadeIn\">\n  <ceo-dropdown-item\n    *ngFor=\"let item of navigationMenu.items.sortedItems\"\n    [item]=\"item\"\n    [ngClass]=\"className(item)\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown-item>\n</div>\n",
                    styles: [""]
                }] }
    ];
    DropdownComponent.propDecorators = {
        navigationMenu: [{ type: Input }],
        itemEvent: [{ type: Output }]
    };
    return DropdownComponent;
}(BaseComponent));
export { DropdownComponent };
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.navigationMenu;
    /** @type {?} */
    DropdownComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFDaEIsWUFBWSxFQUNaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFNdEQ7SUFLdUMsNkNBQWE7SUFMcEQ7UUFBQSxxRUF5QkM7UUFmQyxlQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7O0lBZXhELENBQUM7Ozs7O0lBYkMscUNBQVM7Ozs7SUFBVCxVQUFVLElBQUk7O1lBQ1IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUU5QixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDaEM7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixnUkFBd0M7O2lCQUV6Qzs7O2lDQUVFLEtBQUs7NEJBR0wsTUFBTTs7SUFnQlQsd0JBQUM7Q0FBQSxBQXpCRCxDQUt1QyxhQUFhLEdBb0JuRDtTQXBCWSxpQkFBaUI7OztJQUM1QiwyQ0FDK0I7O0lBRS9CLHNDQUNzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlOYXZpZ2F0aW9uTWVudSxcbn0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2ludGVyZmFjZXMnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbmF2aWdhdGlvbk1lbnU6IGlOYXZpZ2F0aW9uTWVudVxuXG4gIEBPdXRwdXQoKVxuICBpdGVtRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBjbGFzc05hbWUoaXRlbSkge1xuICAgIGxldCBjbGFzc2VzID0gW2l0ZW0uY2xhc3NOYW1lXVxuXG4gICAgaWYoaXRlbS5oYXNTdWJtZW51KCkpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnZHJvcGRvd24tY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gXy5qb2luKGNsYXNzZXMsICcgJylcbiAgfVxuXG4gIG9uSXRlbUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5pdGVtRXZlbnQuZW1pdChldmVudClcbiAgfVxufVxuIl19