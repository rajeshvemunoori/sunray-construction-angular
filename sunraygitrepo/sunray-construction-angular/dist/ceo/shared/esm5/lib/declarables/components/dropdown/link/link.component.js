/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
var LinkComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LinkComponent, _super);
    function LinkComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dropdown-link',
                    template: "<a class=\"dropdown-link\" href=\"{{item.url}}\" ceoRouteTransformer>\n  {{ item.displayValue }}\n</a>\n",
                    styles: [""]
                }] }
    ];
    LinkComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return LinkComponent;
}(BaseComponent));
export { LinkComponent };
if (false) {
    /** @type {?} */
    LinkComponent.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL2xpbmsvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssR0FDakIsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBTXpEO0lBS21DLHlDQUFhO0lBTGhEOztJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixvSEFBb0M7O2lCQUVyQzs7O3VCQUVFLEtBQUs7O0lBRVIsb0JBQUM7Q0FBQSxBQVJELENBS21DLGFBQWEsR0FHL0M7U0FIWSxhQUFhOzs7SUFDeEIsNkJBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbmltcG9ydCB7XG4gIGlOYXZpZ2F0aW9uTWVudUl0ZW0sXG59IGZyb20gJy4uLy4uLy4uLy4uL3Byb3ZpZGVycy9pbnRlcmZhY2VzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZHJvcGRvd24tbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgaXRlbTogaU5hdmlnYXRpb25NZW51SXRlbVxufVxuIl19