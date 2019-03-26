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
    /**
     * @return {?}
     */
    HeaderComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var action = {
            name: 'close',
        };
        /** @type {?} */
        var event = {
            action: action
        };
        this.actionEmitter.emit(event);
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-modal-header',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvbW9kYWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUV6RDtJQU1xQywyQ0FBYTtJQU5sRDtRQUFBLHFFQW1CQztRQVhXLG1CQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7O0lBV2pFLENBQUM7Ozs7SUFUQyxpQ0FBTzs7O0lBQVA7O1lBQ00sTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLE9BQU87U0FDZDs7WUFDRyxLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtTQUNmO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QiwwSUFBc0M7O2lCQUV2Qzs7O3VCQUdFLEtBQUs7Z0NBQ0wsTUFBTTs7SUFXVCxzQkFBQztDQUFBLEFBbkJELENBTXFDLGFBQWEsR0FhakQ7U0FiWSxlQUFlOzs7SUFDMUIsK0JBQWtCOztJQUNsQix3Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nlby1tb2RhbC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55XG4gIEBPdXRwdXQoKSBhY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgbGV0IGFjdGlvbiA9IHtcbiAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgfVxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfVxuICAgIHRoaXMuYWN0aW9uRW1pdHRlci5lbWl0KGV2ZW50KVxuICB9XG59XG4iXX0=