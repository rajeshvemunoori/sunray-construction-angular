/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var SelectListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectListComponent, _super);
    function SelectListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemEmitter = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SelectListComponent.prototype.isSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return (this.selectedItem == item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectListComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selectedItem = item;
        this.emit();
    };
    /**
     * @return {?}
     */
    SelectListComponent.prototype.emit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = {
            item: this.selectedItem
        };
        this.itemEmitter.emit(event);
    };
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
    return SelectListComponent;
}(BaseComponent));
export { SelectListComponent };
if (false) {
    /** @type {?} */
    SelectListComponent.prototype.items$;
    /** @type {?} */
    SelectListComponent.prototype.selectedItem;
    /** @type {?} */
    SelectListComponent.prototype.itemEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9zZWxlY3QtbGlzdC9zZWxlY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRWpDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBRXREO0lBS3lDLCtDQUFhO0lBTHREO1FBQUEscUVBOEJDO1FBakJDLGlCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBaUJ0RCxDQUFDOzs7OztJQWZDLDRDQUFjOzs7O0lBQWQsVUFBZSxJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsb0NBQU07Ozs7SUFBTixVQUFPLElBQUk7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsa0NBQUk7OztJQUFKOztZQUNNLEtBQUssR0FBRztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUN4QjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsNkNBQTJDOztpQkFFNUM7Ozt5QkFFRSxLQUFLOytCQUdMLEtBQUs7OEJBR0wsTUFBTTs7SUFrQlQsMEJBQUM7Q0FBQSxBQTlCRCxDQUt5QyxhQUFhLEdBeUJyRDtTQXpCWSxtQkFBbUI7OztJQUM5QixxQ0FDd0I7O0lBRXhCLDJDQUNrQjs7SUFFbEIsMENBQ29EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLXNlbGVjdC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RMaXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkSXRlbTogYW55O1xuXG4gIEBPdXRwdXQoKVxuICBpdGVtRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNTZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiAodGhpcy5zZWxlY3RlZEl0ZW0gPT0gaXRlbSk7XG4gIH1cblxuICBzZWxlY3QoaXRlbSkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLmVtaXQoKTtcbiAgfVxuXG4gIGVtaXQoKSB7XG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgaXRlbTogdGhpcy5zZWxlY3RlZEl0ZW1cbiAgICB9XG4gICAgdGhpcy5pdGVtRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19