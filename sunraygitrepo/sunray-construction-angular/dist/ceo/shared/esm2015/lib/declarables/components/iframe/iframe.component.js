/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';
export class IframeComponent extends BaseComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super();
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.url =
            this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
}
IframeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-iframe',
                template: "<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe [src]=\"url\" allowfullscreen></iframe>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
IframeComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
IframeComponent.propDecorators = {
    url: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IframeComponent.prototype.url;
    /**
     * @type {?}
     * @private
     */
    IframeComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmFibGVzL2NvbXBvbmVudHMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBa0IsMkJBQTJCLENBQUE7QUFFcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBT3RELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7Ozs7SUFJaEQsWUFDVSxTQUF1QjtRQUUvQixLQUFLLEVBQUUsQ0FBQTtRQUZDLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFHakMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRztZQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNELENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsZ0lBQXNDOzthQUV2Qzs7OztZQVJRLFlBQVk7OztrQkFVbEIsS0FBSzs7OztJQUFOLDhCQUNROzs7OztJQUdOLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJ1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VvLXNoYXJlZC1pZnJhbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaWZyYW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWZyYW1lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSWZyYW1lQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHVybDogYW55XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cmwgPVxuICAgICAgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHRoaXMudXJsKVxuICB9XG59XG4iXX0=