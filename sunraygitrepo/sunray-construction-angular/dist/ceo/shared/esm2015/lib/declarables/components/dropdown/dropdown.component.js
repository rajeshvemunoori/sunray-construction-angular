/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class DropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    className(item) {
        /** @type {?} */
        let classes = [item.className];
        if (item.hasSubmenu()) {
            classes.push('dropdown-column');
        }
        return _.join(classes, ' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
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
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.navigationMenu;
    /** @type {?} */
    DropdownComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNoQixZQUFZLEVBQ1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQVd0RCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsYUFBYTtJQUxwRDs7UUFVRSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7SUFleEQsQ0FBQzs7Ozs7SUFiQyxTQUFTLENBQUMsSUFBSTs7WUFDUixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTlCLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtTQUNoQztRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGdSQUF3Qzs7YUFFekM7Ozs2QkFFRSxLQUFLO3dCQUdMLE1BQU07Ozs7SUFIUCwyQ0FDK0I7O0lBRS9CLHNDQUNzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlOYXZpZ2F0aW9uTWVudSxcbn0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2ludGVyZmFjZXMnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbmF2aWdhdGlvbk1lbnU6IGlOYXZpZ2F0aW9uTWVudVxuXG4gIEBPdXRwdXQoKVxuICBpdGVtRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBjbGFzc05hbWUoaXRlbSkge1xuICAgIGxldCBjbGFzc2VzID0gW2l0ZW0uY2xhc3NOYW1lXVxuXG4gICAgaWYoaXRlbS5oYXNTdWJtZW51KCkpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnZHJvcGRvd24tY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gXy5qb2luKGNsYXNzZXMsICcgJylcbiAgfVxuXG4gIG9uSXRlbUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5pdGVtRXZlbnQuZW1pdChldmVudClcbiAgfVxufVxuIl19