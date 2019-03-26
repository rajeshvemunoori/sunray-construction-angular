/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
export class NavItemComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    className() {
        /** @type {?} */
        let classes = [this.item.className];
        if (this.item.hasSubmenu()) {
            classes.push('dropdown');
            classes.push('has-submenu');
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
NavItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation-nav-item',
                template: "<li class=\"nav-item\"\n [ngClass]=\"className()\">\n\n  <ceo-navigation-nav-link\n    *ngIf=\"!item.disableLink\"\n    [ngClass]=\"className()\"\n    [item]=\"item\">\n  </ceo-navigation-nav-link>\n\n  <ceo-navigation-nav-text\n    *ngIf=\"item.disableLink\"\n    [ngClass]=\"className()\"\n    [item]=\"item\">\n  </ceo-navigation-nav-text>\n\n  <ceo-dropdown\n    *ngIf=\"item.hasSubmenu()\"\n    [navigationMenu]=\"item.submenu\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown>\n\n</li>\n",
                styles: [""]
            }] }
];
NavItemComponent.propDecorators = {
    item: [{ type: Input }],
    itemEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NavItemComponent.prototype.item;
    /** @type {?} */
    NavItemComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQ2hCLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBV3pELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhO0lBTG5EOztRQVVFLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTtJQWdCeEQsQ0FBQzs7OztJQWRDLFNBQVM7O1lBQ0gsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFbkMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUM1QjtRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMscWdCQUF3Qzs7YUFFekM7OzttQkFFRSxLQUFLO3dCQUdMLE1BQU07Ozs7SUFIUCxnQ0FDeUI7O0lBRXpCLHFDQUNzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlOYXZpZ2F0aW9uTWVudUl0ZW0sXG59IGZyb20gJy4uLy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tbmF2aWdhdGlvbi1uYXYtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2SXRlbUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBpdGVtOiBpTmF2aWdhdGlvbk1lbnVJdGVtXG5cbiAgQE91dHB1dCgpXG4gIGl0ZW1FdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG4gIGNsYXNzTmFtZSgpIHtcbiAgICBsZXQgY2xhc3NlcyA9IFt0aGlzLml0ZW0uY2xhc3NOYW1lXVxuXG4gICAgaWYodGhpcy5pdGVtLmhhc1N1Ym1lbnUoKSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdkcm9wZG93bicpXG4gICAgICBjbGFzc2VzLnB1c2goJ2hhcy1zdWJtZW51JylcbiAgICB9XG5cbiAgICByZXR1cm4gXy5qb2luKGNsYXNzZXMsICcgJylcbiAgfVxuXG4gIG9uSXRlbUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5pdGVtRXZlbnQuZW1pdChldmVudClcbiAgfVxufVxuIl19