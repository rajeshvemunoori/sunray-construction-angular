/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class SelectListComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEmitter = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelectedItem(item) {
        return (this.selectedItem == item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        this.selectedItem = item;
        this.emit();
    }
    /**
     * @return {?}
     */
    emit() {
        /** @type {?} */
        let event = {
            item: this.selectedItem
        };
        this.itemEmitter.emit(event);
    }
}
SelectListComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-select-list',
                template: "<p>\n  select-list works!\n</p>\n",
                styles: [""]
            }] }
];
SelectListComponent.propDecorators = {
    items$: [{ type: Input }],
    selectedItem: [{ type: Input }],
    itemEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectListComponent.prototype.items$;
    /** @type {?} */
    SelectListComponent.prototype.selectedItem;
    /** @type {?} */
    SelectListComponent.prototype.itemEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9zZWxlY3QtbGlzdC9zZWxlY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFFakMsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFPdEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGFBQWE7SUFMdEQ7O1FBYUUsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWlCdEQsQ0FBQzs7Ozs7SUFmQyxjQUFjLENBQUMsSUFBSTtRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUk7O1lBQ0UsS0FBSyxHQUFHO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyw2Q0FBMkM7O2FBRTVDOzs7cUJBRUUsS0FBSzsyQkFHTCxLQUFLOzBCQUdMLE1BQU07Ozs7SUFOUCxxQ0FDd0I7O0lBRXhCLDJDQUNrQjs7SUFFbEIsMENBQ29EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLXNlbGVjdC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RMaXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkSXRlbTogYW55O1xuXG4gIEBPdXRwdXQoKVxuICBpdGVtRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNTZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiAodGhpcy5zZWxlY3RlZEl0ZW0gPT0gaXRlbSk7XG4gIH1cblxuICBzZWxlY3QoaXRlbSkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLmVtaXQoKTtcbiAgfVxuXG4gIGVtaXQoKSB7XG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgaXRlbTogdGhpcy5zZWxlY3RlZEl0ZW1cbiAgICB9XG4gICAgdGhpcy5pdGVtRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19