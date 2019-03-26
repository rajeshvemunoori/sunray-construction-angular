/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
var NavLinkComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavLinkComponent, _super);
    function NavLinkComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-navigation-nav-link',
                    template: "<a class=\"nav-link\" href=\"{{item.url}}\" ceoRouteTransformer>\n  {{ item.displayValue }}\n</a>\n",
                    styles: [""]
                }] }
    ];
    NavLinkComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return NavLinkComponent;
}(BaseComponent));
export { NavLinkComponent };
if (false) {
    /** @type {?} */
    NavLinkComponent.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdi1saW5rL25hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxHQUNqQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFNekQ7SUFLc0MsNENBQWE7SUFMbkQ7O0lBUUEsQ0FBQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLCtHQUF3Qzs7aUJBRXpDOzs7dUJBRUUsS0FBSzs7SUFFUix1QkFBQztDQUFBLEFBUkQsQ0FLc0MsYUFBYSxHQUdsRDtTQUhZLGdCQUFnQjs7O0lBQzNCLGdDQUN5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuaW1wb3J0IHtcbiAgaU5hdmlnYXRpb25NZW51SXRlbSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvdmlkZXJzL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1uYXZpZ2F0aW9uLW5hdi1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LWxpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZMaW5rQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGl0ZW06IGlOYXZpZ2F0aW9uTWVudUl0ZW1cbn1cbiJdfQ==