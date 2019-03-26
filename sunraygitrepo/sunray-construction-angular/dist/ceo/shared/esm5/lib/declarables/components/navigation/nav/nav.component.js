/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
var NavComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavComponent, _super);
    function NavComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemEvent = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NavComponent.prototype.onItemEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.itemEvent.emit(event);
    };
    NavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-navigation-nav',
                    template: "<ul class=\"navbar-nav\">\n  <ceo-navigation-nav-item\n    *ngFor=\"let item of navigationMenu.items.sortedItems\"\n    [item]=\"item\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-navigation-nav-item>\n</ul>\n",
                    styles: [""]
                }] }
    ];
    NavComponent.propDecorators = {
        navigationMenu: [{ type: Input }],
        itemEvent: [{ type: Output }]
    };
    return NavComponent;
}(BaseComponent));
export { NavComponent };
if (false) {
    /** @type {?} */
    NavComponent.prototype.navigationMenu;
    /** @type {?} */
    NavComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXYvbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNoQixZQUFZLEVBQ1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQU96RDtJQUtrQyx3Q0FBYTtJQUwvQztRQUFBLHFFQWVDO1FBTEMsZUFBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFBOztJQUt4RCxDQUFDOzs7OztJQUhDLGtDQUFXOzs7O0lBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG9PQUFtQzs7aUJBRXBDOzs7aUNBRUUsS0FBSzs0QkFHTCxNQUFNOztJQU1ULG1CQUFDO0NBQUEsQUFmRCxDQUtrQyxhQUFhLEdBVTlDO1NBVlksWUFBWTs7O0lBQ3ZCLHNDQUMrQjs7SUFFL0IsaUNBQ3NEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuaW1wb3J0IHtcbiAgaU5hdmlnYXRpb25NZW51SXRlbSxcbiAgaU5hdmlnYXRpb25NZW51LFxufSBmcm9tICcuLi8uLi8uLi8uLi9wcm92aWRlcnMvaW50ZXJmYWNlcy9pbmRleCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLW5hdmlnYXRpb24tbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBuYXZpZ2F0aW9uTWVudTogaU5hdmlnYXRpb25NZW51XG5cbiAgQE91dHB1dCgpXG4gIGl0ZW1FdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG4gIG9uSXRlbUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5pdGVtRXZlbnQuZW1pdChldmVudClcbiAgfVxufVxuIl19