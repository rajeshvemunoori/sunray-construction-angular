/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, } from 'rxjs';
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var BreadcrumbComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbComponent, _super);
    function BreadcrumbComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemSelected = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    BreadcrumbComponent.prototype.onItemClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var event = {
            item: item
        };
        this.itemSelected.emit(event);
    };
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
    return BreadcrumbComponent;
}(BaseComponent));
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumb$;
    /** @type {?} */
    BreadcrumbComponent.prototype.itemSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxHQUNYLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQTtBQU10QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFdEQ7SUFLeUMsK0NBQWE7SUFMdEQ7UUFBQSxxRUFlQztRQVJXLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTs7SUFRbEQsQ0FBQzs7Ozs7SUFOQyx5Q0FBVzs7OztJQUFYLFVBQVksSUFBSTs7WUFDVixLQUFLLEdBQUc7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNYO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLCtWQUEwQzs7aUJBRTNDOzs7OEJBRUUsS0FBSzsrQkFDTCxNQUFNOztJQVFULDBCQUFDO0NBQUEsQUFmRCxDQUt5QyxhQUFhLEdBVXJEO1NBVlksbUJBQW1COzs7SUFDOUIsMENBQTZDOztJQUM3QywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgaUJyZWFkY3J1bWIsXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLXNoYXJlZC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKSBicmVhZGNydW1iJDogT2JzZXJ2YWJsZTxpQnJlYWRjcnVtYj5cbiAgQE91dHB1dCgpIGl0ZW1TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG5cbiAgb25JdGVtQ2xpY2soaXRlbSkge1xuICAgIGxldCBldmVudCA9IHtcbiAgICAgIGl0ZW06IGl0ZW1cbiAgICB9XG4gICAgdGhpcy5pdGVtU2VsZWN0ZWQuZW1pdChldmVudClcbiAgfVxufVxuIl19