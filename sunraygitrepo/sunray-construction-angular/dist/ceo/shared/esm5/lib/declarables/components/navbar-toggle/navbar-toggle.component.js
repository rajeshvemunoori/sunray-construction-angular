/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
var NavbarToggleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavbarToggleComponent, _super);
    function NavbarToggleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animationClass = "hamburger--slider";
        _this.activeClass = "is-active";
        _this.ngClass = "";
        _this.state = 'inactive';
        _this.isActive = false;
        _this.toggleEmitter = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NavbarToggleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngClass = this.getNgClass();
        this.setState();
    };
    /**
     * @private
     * @return {?}
     */
    NavbarToggleComponent.prototype.setState = /**
     * @private
     * @return {?}
     */
    function () {
        this.state = this.isActive ? 'active' : 'inactive';
    };
    /**
     * @return {?}
     */
    NavbarToggleComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldState = this.state;
        this.isActive = !this.isActive;
        this.setState();
        this.emitNewState(oldState);
        if (this.animation) {
            this.animationClass = "hamburger--" + this.animation;
        }
    };
    /**
     * @private
     * @param {?} oldState
     * @return {?}
     */
    NavbarToggleComponent.prototype.emitNewState = /**
     * @private
     * @param {?} oldState
     * @return {?}
     */
    function (oldState) {
        /** @type {?} */
        var event = {
            fromState: oldState,
            toState: this.state
        };
        this.toggleEmitter.emit(event);
    };
    /**
     * @return {?}
     */
    NavbarToggleComponent.prototype.getNgClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ngClasses = [this.animationClass];
        if (this.isActive) {
            ngClasses.push(this.activeClass);
        }
        return _.join(ngClasses, " ");
    };
    NavbarToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sunray-shared-navbar-toggle',
                    template: "<button class=\"hamburger\"\n  [ngClass]=\"getNgClass()\"\n  (click)=\"toggle()\"\n  type=\"button\">\n\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                    styles: [""]
                }] }
    ];
    NavbarToggleComponent.propDecorators = {
        animation: [{ type: Input }],
        isActive: [{ type: Input }],
        toggleEmitter: [{ type: Output }]
    };
    return NavbarToggleComponent;
}(BaseComponent));
export { NavbarToggleComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavbarToggleComponent.prototype.animationClass;
    /**
     * @type {?}
     * @private
     */
    NavbarToggleComponent.prototype.activeClass;
    /**
     * @type {?}
     * @private
     */
    NavbarToggleComponent.prototype.ngClass;
    /**
     * @type {?}
     * @private
     */
    NavbarToggleComponent.prototype.state;
    /** @type {?} */
    NavbarToggleComponent.prototype.animation;
    /** @type {?} */
    NavbarToggleComponent.prototype.isActive;
    /** @type {?} */
    NavbarToggleComponent.prototype.toggleEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL25hdmJhci10b2dnbGUvbmF2YmFyLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUV0RDtJQUsyQyxpREFBYTtJQUx4RDtRQUFBLHFFQXlEQztRQW5EUyxvQkFBYyxHQUFXLG1CQUFtQixDQUFBO1FBQzVDLGlCQUFXLEdBQVcsV0FBVyxDQUFBO1FBQ2pDLGFBQU8sR0FBVyxFQUFFLENBQUE7UUFDcEIsV0FBSyxHQUFXLFVBQVUsQ0FBQTtRQU1sQyxjQUFRLEdBQVksS0FBSyxDQUFBO1FBR3pCLG1CQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7O0lBdUN2RCxDQUFDOzs7O0lBckNDLHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNqQixDQUFDOzs7OztJQUVPLHdDQUFROzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQTtJQUNwRCxDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOOztZQUNNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRTNCLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFjLElBQUksQ0FBQyxTQUFXLENBQUE7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyw0Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsUUFBUTs7WUFDdkIsS0FBSyxHQUFHO1lBQ1YsU0FBUyxFQUFFLFFBQVE7WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjs7WUFDTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRXJDLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUNqQztRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QywwTkFBNkM7O2lCQUU5Qzs7OzRCQU9FLEtBQUs7MkJBR0wsS0FBSztnQ0FHTCxNQUFNOztJQXdDVCw0QkFBQztDQUFBLEFBekRELENBSzJDLGFBQWEsR0FvRHZEO1NBcERZLHFCQUFxQjs7Ozs7O0lBQ2hDLCtDQUFvRDs7Ozs7SUFDcEQsNENBQXlDOzs7OztJQUN6Qyx3Q0FBNEI7Ozs7O0lBQzVCLHNDQUFrQzs7SUFFbEMsMENBQ2lCOztJQUVqQix5Q0FDeUI7O0lBRXpCLDhDQUNxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VucmF5LXNoYXJlZC1uYXZiYXItdG9nZ2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci10b2dnbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXItdG9nZ2xlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyVG9nZ2xlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgYW5pbWF0aW9uQ2xhc3M6IHN0cmluZyA9IFwiaGFtYnVyZ2VyLS1zbGlkZXJcIlxuICBwcml2YXRlIGFjdGl2ZUNsYXNzOiBzdHJpbmcgPSBcImlzLWFjdGl2ZVwiXG4gIHByaXZhdGUgbmdDbGFzczogc3RyaW5nID0gXCJcIlxuICBwcml2YXRlIHN0YXRlOiBzdHJpbmcgPSAnaW5hY3RpdmUnXG5cbiAgQElucHV0KClcbiAgYW5pbWF0aW9uOiBzdHJpbmdcblxuICBASW5wdXQoKVxuICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgQE91dHB1dCgpXG4gIHRvZ2dsZUVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ0NsYXNzID0gdGhpcy5nZXROZ0NsYXNzKClcbiAgICB0aGlzLnNldFN0YXRlKClcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSdcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBsZXQgb2xkU3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5pc0FjdGl2ZSA9ICF0aGlzLmlzQWN0aXZlXG4gICAgdGhpcy5zZXRTdGF0ZSgpXG4gICAgdGhpcy5lbWl0TmV3U3RhdGUob2xkU3RhdGUpXG5cbiAgICBpZih0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb25DbGFzcyA9IGBoYW1idXJnZXItLSR7dGhpcy5hbmltYXRpb259YFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdE5ld1N0YXRlKG9sZFN0YXRlKSB7XG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgZnJvbVN0YXRlOiBvbGRTdGF0ZSxcbiAgICAgIHRvU3RhdGU6IHRoaXMuc3RhdGVcbiAgICB9XG4gICAgdGhpcy50b2dnbGVFbWl0dGVyLmVtaXQoZXZlbnQpXG4gIH1cblxuICBnZXROZ0NsYXNzKCkge1xuICAgIGxldCBuZ0NsYXNzZXMgPSBbdGhpcy5hbmltYXRpb25DbGFzc11cblxuICAgIGlmKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIG5nQ2xhc3Nlcy5wdXNoKHRoaXMuYWN0aXZlQ2xhc3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uam9pbihuZ0NsYXNzZXMsIFwiIFwiKVxuICB9XG59XG4iXX0=