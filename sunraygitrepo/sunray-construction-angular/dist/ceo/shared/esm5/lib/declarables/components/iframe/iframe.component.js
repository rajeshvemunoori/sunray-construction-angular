/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';
var IframeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IframeComponent, _super);
    function IframeComponent(sanitizer) {
        var _this = _super.call(this) || this;
        _this.sanitizer = sanitizer;
        return _this;
    }
    /**
     * @return {?}
     */
    IframeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.url =
            this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    IframeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-shared-iframe',
                    template: "<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe [src]=\"url\" allowfullscreen></iframe>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    IframeComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    IframeComponent.propDecorators = {
        url: [{ type: Input }]
    };
    return IframeComponent;
}(BaseComponent));
export { IframeComponent };
if (false) {
    /** @type {?} */
    IframeComponent.prototype.url;
    /**
     * @type {?}
     * @private
     */
    IframeComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQWtCLDJCQUEyQixDQUFBO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUV0RDtJQUtxQywyQ0FBYTtJQUloRCx5QkFDVSxTQUF1QjtRQURqQyxZQUdFLGlCQUFPLFNBQ1I7UUFIUyxlQUFTLEdBQVQsU0FBUyxDQUFjOztJQUdqQyxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUc7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMzRCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGdJQUFzQzs7aUJBRXZDOzs7O2dCQVJRLFlBQVk7OztzQkFVbEIsS0FBSzs7SUFhUixzQkFBQztDQUFBLEFBbkJELENBS3FDLGFBQWEsR0FjakQ7U0FkWSxlQUFlOzs7SUFDMUIsOEJBQ1E7Ozs7O0lBR04sb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IERvbVNhbml0aXplciB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tc2hhcmVkLWlmcmFtZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pZnJhbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pZnJhbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJZnJhbWVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgdXJsOiBhbnlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICApIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVybCA9XG4gICAgICB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy51cmwpXG4gIH1cbn1cbiJdfQ==