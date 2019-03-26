/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { Component, Input, } from '@angular/core';
import { SelectListComponent } from '../select-list/select-list.component';
var CardSelectListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CardSelectListComponent, _super);
    function CardSelectListComponent() {
        return _super.call(this) || this;
    }
    CardSelectListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-shared-declarables-card-select-list',
                    template: "<div class=\"cards-wrapper\">\n  <div class=\"card-wrapper\"\n    *ngFor=\"let card of cards$ | async\"\n    (click)=\"select(card.data)\">\n\n    <shared-declarables-card\n      [card]=\"card\">\n    </shared-declarables-card>\n  </div>\n</div>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardSelectListComponent.ctorParameters = function () { return []; };
    CardSelectListComponent.propDecorators = {
        cards$: [{ type: Input }]
    };
    return CardSelectListComponent;
}(SelectListComponent));
export { CardSelectListComponent };
if (false) {
    /** @type {?} */
    CardSelectListComponent.prototype.cards$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZWxlY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2NhcmQtc2VsZWN0LWxpc3QvY2FyZC1zZWxlY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRWpDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFBO0FBRTFFO0lBSzZDLG1EQUFtQjtJQUk5RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELHFRQUFnRDs7aUJBRWpEOzs7Ozt5QkFFRSxLQUFLOztJQU1SLDhCQUFDO0NBQUEsQUFaRCxDQUs2QyxtQkFBbUIsR0FPL0Q7U0FQWSx1QkFBdUI7OztJQUNsQyx5Q0FDdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgU2VsZWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4uL3NlbGVjdC1saXN0L3NlbGVjdC1saXN0LmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLXNoYXJlZC1kZWNsYXJhYmxlcy1jYXJkLXNlbGVjdC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtc2VsZWN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXNlbGVjdC1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkU2VsZWN0TGlzdENvbXBvbmVudCBleHRlbmRzIFNlbGVjdExpc3RDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjYXJkcyQ6IE9ic2VydmFibGU8YW55PlxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgfVxufVxuIl19