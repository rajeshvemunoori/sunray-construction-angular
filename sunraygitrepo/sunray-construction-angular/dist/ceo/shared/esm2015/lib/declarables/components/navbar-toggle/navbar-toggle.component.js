/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export class NavbarToggleComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.animationClass = "hamburger--slider";
        this.activeClass = "is-active";
        this.ngClass = "";
        this.state = 'inactive';
        this.isActive = false;
        this.toggleEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngClass = this.getNgClass();
        this.setState();
    }
    /**
     * @private
     * @return {?}
     */
    setState() {
        this.state = this.isActive ? 'active' : 'inactive';
    }
    /**
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        let oldState = this.state;
        this.isActive = !this.isActive;
        this.setState();
        this.emitNewState(oldState);
        if (this.animation) {
            this.animationClass = `hamburger--${this.animation}`;
        }
    }
    /**
     * @private
     * @param {?} oldState
     * @return {?}
     */
    emitNewState(oldState) {
        /** @type {?} */
        let event = {
            fromState: oldState,
            toState: this.state
        };
        this.toggleEmitter.emit(event);
    }
    /**
     * @return {?}
     */
    getNgClass() {
        /** @type {?} */
        let ngClasses = [this.animationClass];
        if (this.isActive) {
            ngClasses.push(this.activeClass);
        }
        return _.join(ngClasses, " ");
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL25hdmJhci10b2dnbGUvbmF2YmFyLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBT3RELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBTHhEOztRQU1VLG1CQUFjLEdBQVcsbUJBQW1CLENBQUE7UUFDNUMsZ0JBQVcsR0FBVyxXQUFXLENBQUE7UUFDakMsWUFBTyxHQUFXLEVBQUUsQ0FBQTtRQUNwQixVQUFLLEdBQVcsVUFBVSxDQUFBO1FBTWxDLGFBQVEsR0FBWSxLQUFLLENBQUE7UUFHekIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQXVDdkQsQ0FBQzs7OztJQXJDQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7Ozs7O0lBRU8sUUFBUTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUE7SUFDcEQsQ0FBQzs7OztJQUVELE1BQU07O1lBQ0EsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFM0IsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsUUFBUTs7WUFDdkIsS0FBSyxHQUFHO1lBQ1YsU0FBUyxFQUFFLFFBQVE7WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7OztJQUVELFVBQVU7O1lBQ0osU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVyQyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDakM7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsME5BQTZDOzthQUU5Qzs7O3dCQU9FLEtBQUs7dUJBR0wsS0FBSzs0QkFHTCxNQUFNOzs7Ozs7O0lBWFAsK0NBQW9EOzs7OztJQUNwRCw0Q0FBeUM7Ozs7O0lBQ3pDLHdDQUE0Qjs7Ozs7SUFDNUIsc0NBQWtDOztJQUVsQywwQ0FDaUI7O0lBRWpCLHlDQUN5Qjs7SUFFekIsOENBQ3FEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdW5yYXktc2hhcmVkLW5hdmJhci10b2dnbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdmJhci10b2dnbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBhbmltYXRpb25DbGFzczogc3RyaW5nID0gXCJoYW1idXJnZXItLXNsaWRlclwiXG4gIHByaXZhdGUgYWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwiaXMtYWN0aXZlXCJcbiAgcHJpdmF0ZSBuZ0NsYXNzOiBzdHJpbmcgPSBcIlwiXG4gIHByaXZhdGUgc3RhdGU6IHN0cmluZyA9ICdpbmFjdGl2ZSdcblxuICBASW5wdXQoKVxuICBhbmltYXRpb246IHN0cmluZ1xuXG4gIEBJbnB1dCgpXG4gIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2VcblxuICBAT3V0cHV0KClcbiAgdG9nZ2xlRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nQ2xhc3MgPSB0aGlzLmdldE5nQ2xhc3MoKVxuICAgIHRoaXMuc2V0U3RhdGUoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGF0ZSgpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pc0FjdGl2ZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmVcbiAgICB0aGlzLnNldFN0YXRlKClcbiAgICB0aGlzLmVtaXROZXdTdGF0ZShvbGRTdGF0ZSlcblxuICAgIGlmKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkNsYXNzID0gYGhhbWJ1cmdlci0tJHt0aGlzLmFuaW1hdGlvbn1gXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0TmV3U3RhdGUob2xkU3RhdGUpIHtcbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICBmcm9tU3RhdGU6IG9sZFN0YXRlLFxuICAgICAgdG9TdGF0ZTogdGhpcy5zdGF0ZVxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUVtaXR0ZXIuZW1pdChldmVudClcbiAgfVxuXG4gIGdldE5nQ2xhc3MoKSB7XG4gICAgbGV0IG5nQ2xhc3NlcyA9IFt0aGlzLmFuaW1hdGlvbkNsYXNzXVxuXG4gICAgaWYodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgbmdDbGFzc2VzLnB1c2godGhpcy5hY3RpdmVDbGFzcylcbiAgICB9XG5cbiAgICByZXR1cm4gXy5qb2luKG5nQ2xhc3NlcywgXCIgXCIpXG4gIH1cbn1cbiJdfQ==