/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
var ItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ItemComponent, _super);
    function ItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ItemComponent.prototype.displayType = /**
     * @return {?}
     */
    function () {
        return this.item.displayType;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemComponent.prototype.className = /**
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
    ItemComponent.prototype.onItemEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.itemEvent.emit(event);
    };
    ItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dropdown-item',
                    template: "<div class=\"dropdown-item\"\n   [ngSwitch]=\"item.displayType\">\n\n  <ceo-dropdown-link\n    *ngSwitchCase=\"'link'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\">\n  </ceo-dropdown-link>\n\n  <ceo-dropdown-text\n    *ngSwitchCase=\"'text'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\">\n  </ceo-dropdown-text>\n\n  <ceo-dropdown-custom-content\n    *ngSwitchCase=\"'custom'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown-custom-content>\n\n  <div *ngIf=\"item.hasSubmenu()\" class=\"dropdown-submenu\">\n\n    <ceo-dropdown-item\n      *ngFor=\"let submenuItem of item.submenu.items.sortedItems\"\n      [item]=\"submenuItem\"\n      [ngClass]=\"className(submenuItem)\"\n      (itemEvent)=\"onItemEvent($event)\">\n    </ceo-dropdown-item>\n\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    ItemComponent.propDecorators = {
        item: [{ type: Input }],
        itemEvent: [{ type: Output }]
    };
    return ItemComponent;
}(BaseComponent));
export { ItemComponent };
if (false) {
    /** @type {?} */
    ItemComponent.prototype.item;
    /** @type {?} */
    ItemComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFDaEIsWUFBWSxFQUNaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFNekQ7SUFLbUMseUNBQWE7SUFMaEQ7UUFBQSxxRUE2QkM7UUFuQkMsZUFBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFBOztJQW1CeEQsQ0FBQzs7OztJQWpCQyxtQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQzlCLENBQUM7Ozs7O0lBRUQsaUNBQVM7Ozs7SUFBVCxVQUFVLElBQUk7O1lBQ1IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUU5QixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDaEM7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHUyQkFBb0M7O2lCQUVyQzs7O3VCQUVFLEtBQUs7NEJBR0wsTUFBTTs7SUFvQlQsb0JBQUM7Q0FBQSxBQTdCRCxDQUttQyxhQUFhLEdBd0IvQztTQXhCWSxhQUFhOzs7SUFDeEIsNkJBQ3lCOztJQUV6QixrQ0FDc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5pbXBvcnQge1xuICBpTmF2aWdhdGlvbk1lbnVJdGVtLFxufSBmcm9tICcuLi8uLi8uLi8uLi9wcm92aWRlcnMvaW50ZXJmYWNlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLWRyb3Bkb3duLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGl0ZW06IGlOYXZpZ2F0aW9uTWVudUl0ZW1cblxuICBAT3V0cHV0KClcbiAgaXRlbUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG5cbiAgZGlzcGxheVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS5kaXNwbGF5VHlwZVxuICB9XG5cbiAgY2xhc3NOYW1lKGl0ZW0pIHtcbiAgICBsZXQgY2xhc3NlcyA9IFtpdGVtLmNsYXNzTmFtZV1cblxuICAgIGlmKGl0ZW0uaGFzU3VibWVudSgpKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2Ryb3Bkb3duLWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uam9pbihjbGFzc2VzLCAnICcpXG4gIH1cblxuICBvbkl0ZW1FdmVudChldmVudCkge1xuICAgIHRoaXMuaXRlbUV2ZW50LmVtaXQoZXZlbnQpXG4gIH1cbn1cbiJdfQ==