/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
export class CustomContentComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRouteEvent(event) {
        event.item = this.item;
        this.itemEvent.emit(event);
    }
}
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
if (false) {
    /** @type {?} */
    CustomContentComponent.prototype.item;
    /** @type {?} */
    CustomContentComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9kcm9wZG93bi9jdXN0b20tY29udGVudC9jdXN0b20tY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNoQixZQUFZLEVBQ1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQVd6RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUx6RDs7UUFVRSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7SUFNeEQsQ0FBQzs7Ozs7SUFKQyxZQUFZLENBQUMsS0FBVTtRQUNyQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLHNJQUE4Qzs7YUFFL0M7OzttQkFFRSxLQUFLO3dCQUdMLE1BQU07Ozs7SUFIUCxzQ0FDeUI7O0lBRXpCLDJDQUNzRCIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyICQ6IGFueVxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlOYXZpZ2F0aW9uTWVudUl0ZW0sXG59IGZyb20gJy4uLy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZHJvcGRvd24tY3VzdG9tLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUNvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgaXRlbTogaU5hdmlnYXRpb25NZW51SXRlbVxuXG4gIEBPdXRwdXQoKVxuICBpdGVtRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBvblJvdXRlRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50Lml0ZW0gPSB0aGlzLml0ZW1cbiAgICB0aGlzLml0ZW1FdmVudC5lbWl0KGV2ZW50KVxuICB9XG59XG4iXX0=