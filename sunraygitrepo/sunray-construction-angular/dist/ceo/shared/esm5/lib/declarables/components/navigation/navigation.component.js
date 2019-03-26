/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var NavigationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigationComponent, _super);
    function NavigationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menuClass = 'horizontal';
        _this.itemEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NavigationComponent.prototype.getMenuClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classNames = ['menu', this.menuClass];
        return _.join(classNames, ' ');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationComponent.prototype.onItemEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.itemEvent.emit(event);
    };
    NavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-navigation',
                    template: "<nav class=\"navbar navbar-expand-sm\">\n  <div class=\"collapse navbar-collapse\">\n    <ceo-navigation-nav\n      [navigationMenu]=\"navigationMenu\"\n      (itemEvent)=\"onItemEvent($event)\">\n    </ceo-navigation-nav>\n  </div>\n</nav>\n",
                    styles: [".menu{display:flex}.horizontal{flex-direction:row;justify-content:space-evenly}.horizontal .pane{flex-direction:column;width:150px;border-radius:.3rem}.horizontal .pane img{width:30px}.vertical{flex-direction:column}"]
                }] }
    ];
    NavigationComponent.propDecorators = {
        navigationMenu: [{ type: Input }],
        navigationLinks: [{ type: Input }],
        menuClass: [{ type: Input }],
        itemEvent: [{ type: Output }]
    };
    return NavigationComponent;
}(BaseComponent));
export { NavigationComponent };
if (false) {
    /** @type {?} */
    NavigationComponent.prototype.navigationMenu;
    /** @type {?} */
    NavigationComponent.prototype.navigationLinks;
    /** @type {?} */
    NavigationComponent.prototype.menuClass;
    /** @type {?} */
    NavigationComponent.prototype.itemEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsU0FBUyxFQUFVLEtBQUssRUFDeEIsWUFBWSxFQUNaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFNdEQ7SUFLeUMsK0NBQWE7SUFMdEQ7UUFBQSxxRUEyQkM7UUFkQyxlQUFTLEdBQVcsWUFBWSxDQUFBO1FBR2hDLGVBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTs7SUFXeEQsQ0FBQzs7OztJQVRDLDBDQUFZOzs7SUFBWjs7WUFDTSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBR0QseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDhQQUEwQzs7aUJBRTNDOzs7aUNBRUUsS0FBSztrQ0FHTCxLQUFLOzRCQUdMLEtBQUs7NEJBR0wsTUFBTTs7SUFZVCwwQkFBQztDQUFBLEFBM0JELENBS3lDLGFBQWEsR0FzQnJEO1NBdEJZLG1CQUFtQjs7O0lBQzlCLDZDQUMrQjs7SUFFL0IsOENBQ3NCOztJQUV0Qix3Q0FDZ0M7O0lBRWhDLHdDQUNzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuaW1wb3J0IHtcbiAgaU5hdmlnYXRpb25NZW51LFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvaW50ZXJmYWNlcydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG5hdmlnYXRpb25NZW51OiBpTmF2aWdhdGlvbk1lbnVcblxuICBASW5wdXQoKVxuICBuYXZpZ2F0aW9uTGlua3M6IGFueVtdXG5cbiAgQElucHV0KClcbiAgbWVudUNsYXNzOiBzdHJpbmcgPSAnaG9yaXpvbnRhbCdcblxuICBAT3V0cHV0KClcbiAgaXRlbUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG5cbiAgZ2V0TWVudUNsYXNzKCl7XG4gICAgbGV0IGNsYXNzTmFtZXMgPSBbJ21lbnUnLCB0aGlzLm1lbnVDbGFzc11cbiAgICByZXR1cm4gXy5qb2luKGNsYXNzTmFtZXMsICcgJylcbiAgfVxuXG5cbiAgb25JdGVtRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLml0ZW1FdmVudC5lbWl0KGV2ZW50KVxuICB9XG59XG4iXX0=