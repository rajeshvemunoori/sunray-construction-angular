/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Component, Input, ViewChild, ComponentFactoryResolver, forwardRef, } from '@angular/core';
import { ContainerDirective } from '../../directives/index';
import { BaseComponent } from '../base/base.component';
var PaneComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PaneComponent, _super);
    function PaneComponent(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    /**
     * @return {?}
     */
    PaneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.launch();
    };
    /**
     * @private
     * @return {?}
     */
    PaneComponent.prototype.launch = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.pane$.subscribe(function (pane) {
            _this.loadComponent(pane);
        });
    };
    /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    PaneComponent.prototype.loadComponent = /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    function (pane) {
        /** @type {?} */
        var component = this.createComponent(pane.componentFactory);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    PaneComponent.prototype.resolveComponentFactory = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.componentFactoryResolver
            .resolveComponentFactory(component);
    };
    /**
     * @private
     * @param {?} componentFactory
     * @return {?}
     */
    PaneComponent.prototype.createComponent = /**
     * @private
     * @param {?} componentFactory
     * @return {?}
     */
    function (componentFactory) {
        /** @type {?} */
        var viewContainerRef = this.containerDirective.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.setInputs();
        return this.componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    PaneComponent.prototype.setInputs = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.inputs) {
            /** @type {?} */
            var setInput = function (value, prop) {
                _this.componentRef.instance[prop] = value;
            };
            _.forEach(this.inputs, setInput);
        }
    };
    PaneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ceo-shared-declarables-pane',
                    template: "<ng-template shared-declarables-container>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PaneComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    PaneComponent.propDecorators = {
        containerDirective: [{ type: ViewChild, args: [forwardRef(function () { return ContainerDirective; }),] }],
        pane$: [{ type: Input }],
        inputs: [{ type: Input }]
    };
    return PaneComponent;
}(BaseComponent));
export { PaneComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaneComponent.prototype.containerDirective;
    /** @type {?} */
    PaneComponent.prototype.componentRef;
    /** @type {?} */
    PaneComponent.prototype.pane$;
    /** @type {?} */
    PaneComponent.prototype.inputs;
    /**
     * @type {?}
     * @private
     */
    PaneComponent.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL3BhbmUvcGFuZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRWpDLE9BQU8sRUFDTCxTQUFTLEVBQVUsS0FBSyxFQUN4QixTQUFTLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxHQUNoRCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUczRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFdEQ7SUFLbUMseUNBQWE7SUFVOUMsdUJBQ1Usd0JBQWtEO1FBRDVELFlBR0UsaUJBQU8sU0FDUjtRQUhTLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7O0lBRzVELENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDZixDQUFDOzs7OztJQUVPLDhCQUFNOzs7O0lBQWQ7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN2QixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7O0lBRU8scUNBQWE7Ozs7O0lBQXJCLFVBQXNCLElBQVc7O1lBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTywrQ0FBdUI7Ozs7O0lBQS9CLFVBQWdDLFNBQVM7UUFDdkMsT0FBTyxJQUFJLENBQUMsd0JBQXdCO2FBQ2pDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7OztJQUVPLHVDQUFlOzs7OztJQUF2QixVQUF3QixnQkFBZ0I7O1lBQ2xDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0I7UUFDL0QsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7Ozs7O0lBRU8saUNBQVM7Ozs7SUFBakI7UUFBQSxpQkFPQztRQU5DLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQzs7Z0JBQ1QsUUFBUSxHQUFHLFVBQUMsS0FBSyxFQUFFLElBQUk7Z0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFJLEtBQUssQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBdkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyx3RUFBb0M7O2lCQUVyQzs7OztnQkFaWSx3QkFBd0I7OztxQ0FjbEMsU0FBUyxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7d0JBRzlDLEtBQUs7eUJBR0wsS0FBSzs7SUE0Q1Isb0JBQUM7Q0FBQSxBQXhERCxDQUttQyxhQUFhLEdBbUQvQztTQW5EWSxhQUFhOzs7Ozs7SUFDeEIsMkNBQzhDOztJQUM5QyxxQ0FBaUI7O0lBQ2pCLDhCQUN3Qjs7SUFFeEIsK0JBQ2M7Ozs7O0lBR1osaURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsXG4gIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2luZGV4J1xuaW1wb3J0IHsgaVBhbmUgfSAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZW8tc2hhcmVkLWRlY2xhcmFibGVzLXBhbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFuZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBDb250YWluZXJEaXJlY3RpdmUpKVxuICBwcml2YXRlIGNvbnRhaW5lckRpcmVjdGl2ZTogQ29udGFpbmVyRGlyZWN0aXZlXG4gIGNvbXBvbmVudFJlZjogYW55XG4gIEBJbnB1dCgpXG4gIHBhbmUkOiBPYnNlcnZhYmxlPGlQYW5lPlxuXG4gIEBJbnB1dCgpXG4gIGlucHV0cz86IGFueVtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXVuY2goKVxuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2goKSB7XG4gICAgdGhpcy5wYW5lJC5zdWJzY3JpYmUocGFuZSA9PiB7XG4gICAgICB0aGlzLmxvYWRDb21wb25lbnQocGFuZSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50KHBhbmU6IGlQYW5lKTogdm9pZCB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KHBhbmUuY29tcG9uZW50RmFjdG9yeSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSkge1xuICAgIGxldCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5jb250YWluZXJEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZlxuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKVxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSlcbiAgICB0aGlzLnNldElucHV0cygpXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50UmVmXG4gIH1cblxuICBwcml2YXRlIHNldElucHV0cygpIHtcbiAgICBpZih0aGlzLmlucHV0cyl7XG4gICAgICBsZXQgc2V0SW5wdXQgPSAodmFsdWUsIHByb3ApID0+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2VbcHJvcF0gID0gdmFsdWVcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLmlucHV0cywgc2V0SW5wdXQpXG4gICAgfVxuICB9XG59XG4iXX0=