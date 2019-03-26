/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var CardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CardComponent, _super);
    function CardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-declarables-card',
                    template: "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"icon-wrapper\"\n      [ngClass]=\"card.iconThemeColor\">\n\n      <mat-icon class=\"svg-wrapper\" svgIcon=\"{{card.iconName}}\">\n      </mat-icon>\n\n    </div>\n    <h5 class=\"card-title\">{{card.title}}</h5>\n    <p class=\"card-text\">{{card.body}}</p>\n  </div>\n  <div *ngIf=\"card.footer\" class=\"card-footer\">\n    <a class=\"btn btn-primary btn-lg-curved\"\n    (click)=\"card.action()\" href=\"#\">\n      {{card.actionText}}\n    </a>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    CardComponent.propDecorators = {
        card: [{ type: Input }]
    };
    return CardComponent;
}(BaseComponent));
export { CardComponent };
if (false) {
    /** @type {?} */
    CardComponent.prototype.card;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFdEQ7SUFLbUMseUNBQWE7SUFMaEQ7O0lBUUEsQ0FBQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG9pQkFBb0M7O2lCQUVyQzs7O3VCQUVFLEtBQUs7O0lBRVIsb0JBQUM7Q0FBQSxBQVJELENBS21DLGFBQWEsR0FHL0M7U0FIWSxhQUFhOzs7SUFDeEIsNkJBQ1UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1kZWNsYXJhYmxlcy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjYXJkOiBhbnk7XG59XG4iXX0=