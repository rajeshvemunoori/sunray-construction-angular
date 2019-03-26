/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { BaseComponent } from '../../../../../../declarables/index';
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
                    template: "<div class=\"modal-header-inner-wrapper\">\n\n  <h2 mat-dialog-title class=\"modal-title title\">{{ data.title }}</h2>\n\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kaWFsb2dzL2NvbXBvbmVudHMvZGlhbG9nL3dpZGdldC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFBO0FBRW5FO0lBS3FDLDJDQUFhO0lBTGxEO1FBQUEscUVBUUM7UUFEVyxtQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBOztJQUNqRSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsOElBQXNDOztpQkFFdkM7Ozt1QkFFRSxLQUFLO2dDQUNMLE1BQU07O0lBQ1Qsc0JBQUM7Q0FBQSxBQVJELENBS3FDLGFBQWEsR0FHakQ7U0FIWSxlQUFlOzs7SUFDMUIsK0JBQWtCOztJQUNsQix3Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2RlY2xhcmFibGVzL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tZGlhbG9nLXdpZGdldC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueVxuICBAT3V0cHV0KCkgYWN0aW9uRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbn1cbiJdfQ==