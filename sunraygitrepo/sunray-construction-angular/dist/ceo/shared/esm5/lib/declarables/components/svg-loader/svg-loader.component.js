/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, TemplateRef, ViewContainerRef, ViewChild, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var SvgLoaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SvgLoaderComponent, _super);
    function SvgLoaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SvgLoaderComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var view = this._template.createEmbeddedView({ fromContext: 'John' });
        this.vc.insert(view);
    };
    SvgLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-declarables-svg-loader',
                    template: "<ng-template #template let-name='fromContext'>{{name}}</ng-template>\n<ng-container #vc></ng-container>\n",
                    styles: [""]
                }] }
    ];
    SvgLoaderComponent.propDecorators = {
        _template: [{ type: ViewChild, args: ['template', { read: TemplateRef },] }],
        vc: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }]
    };
    return SvgLoaderComponent;
}(BaseComponent));
export { SvgLoaderComponent };
if (false) {
    /** @type {?} */
    SvgLoaderComponent.prototype._template;
    /** @type {?} */
    SvgLoaderComponent.prototype.vc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL3N2Zy1sb2FkZXIvc3ZnLWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUV0RDtJQUt3Qyw4Q0FBYTtJQUxyRDs7SUFhQSxDQUFDOzs7O0lBSkMsK0NBQWtCOzs7SUFBbEI7O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLHFIQUEwQzs7aUJBRTNDOzs7NEJBRUUsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7cUJBQzNDLFNBQVMsU0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7O0lBTTNDLHlCQUFDO0NBQUEsQUFiRCxDQUt3QyxhQUFhLEdBUXBEO1NBUlksa0JBQWtCOzs7SUFDN0IsdUNBQTBFOztJQUMxRSxnQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRlY2xhcmFibGVzLXN2Zy1sb2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnLWxvYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Zy1sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdMb2FkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3ZjJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSB2YzogVmlld0NvbnRhaW5lclJlZjtcblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuX3RlbXBsYXRlLmNyZWF0ZUVtYmVkZGVkVmlldyh7ZnJvbUNvbnRleHQ6ICdKb2huJ30pO1xuICAgIHRoaXMudmMuaW5zZXJ0KHZpZXcpO1xuICB9XG59XG4iXX0=