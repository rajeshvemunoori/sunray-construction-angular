/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
var HeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderComponent, _super);
    function HeaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionEmitter = new EventEmitter();
        return _this;
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-dialog-widget-header',
                    template: "<div class=\"modal-header-inner-wrapper\">\n  <h2 mat-dialog-title class=\"modal-title title\">{{ data.title }}</h2>\n</div>\n",
                    styles: [""]
                }] }
    ];
    HeaderComponent.propDecorators = {
        data: [{ type: Input }],
        actionEmitter: [{ type: Output }]
    };
    return HeaderComponent;
}(BaseComponent));
export { HeaderComponent };
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.data;
    /** @type {?} */
    HeaderComponent.prototype.actionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvZGlhbG9nLXdpZGdldC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBRXpEO0lBS3FDLDJDQUFhO0lBTGxEO1FBQUEscUVBUUM7UUFEVyxtQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBOztJQUNqRSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsMElBQXNDOztpQkFFdkM7Ozt1QkFFRSxLQUFLO2dDQUNMLE1BQU07O0lBQ1Qsc0JBQUM7Q0FBQSxBQVJELENBS3FDLGFBQWEsR0FHakQ7U0FIWSxlQUFlOzs7SUFDMUIsK0JBQWtCOztJQUNsQix3Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1kaWFsb2ctd2lkZ2V0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55XG4gIEBPdXRwdXQoKSBhY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxufVxuIl19