/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, } from 'rxjs';
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class BreadcrumbComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemSelected = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemClick(item) {
        /** @type {?} */
        let event = {
            item: item
        };
        this.itemSelected.emit(event);
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-breadcrumb',
                template: "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li *ngFor=\"let item of breadcrumb$ | async\" class=\"breadcrumb-item\">\n      <a [ngClass]=\"{ 'active': item.isActive }\" href=\"#\"\n        (click)=\"onItemClick(item)\" ceoClickStopEventBubble>\n        {{item.displayValue}}\n      </a>\n    </li>\n  </ol>\n</nav>\n",
                styles: [""]
            }] }
];
BreadcrumbComponent.propDecorators = {
    breadcrumb$: [{ type: Input }],
    itemSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumb$;
    /** @type {?} */
    BreadcrumbComponent.prototype.itemSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFBO0FBTXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQU90RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUx0RDs7UUFPWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7SUFRbEQsQ0FBQzs7Ozs7SUFOQyxXQUFXLENBQUMsSUFBSTs7WUFDVixLQUFLLEdBQUc7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNYO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLCtWQUEwQzs7YUFFM0M7OzswQkFFRSxLQUFLOzJCQUNMLE1BQU07Ozs7SUFEUCwwQ0FBNkM7O0lBQzdDLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpQnJlYWRjcnVtYixcbn0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tc2hhcmVkLWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJyZWFkY3J1bWIkOiBPYnNlcnZhYmxlPGlCcmVhZGNydW1iPlxuICBAT3V0cHV0KCkgaXRlbVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBvbkl0ZW1DbGljayhpdGVtKSB7XG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgaXRlbTogaXRlbVxuICAgIH1cbiAgICB0aGlzLml0ZW1TZWxlY3RlZC5lbWl0KGV2ZW50KVxuICB9XG59XG4iXX0=