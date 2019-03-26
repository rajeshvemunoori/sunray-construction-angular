/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Mixin, } from '../../../providers/decorators/index';
import { DataInspector, } from '../../../providers/mixins/index';
let BaseComponent = class BaseComponent {
    constructor() {
        this.log();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?=} isEnabled
     * @return {?}
     */
    log(isEnabled = false) {
        if (isEnabled) {
            /** @type {?} */
            let date = new Date();
            this.id = date.toISOString();
            /** @type {?} */
            let message = "The id of the " + this.constructor.name + " component is " + this.id;
            console.log(message);
        }
    }
    //Mixin properties
    /**
     * @param {...?} args
     * @return {?}
     */
    inspectData(...args) { }
};
BaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-base',
                template: '',
                styles: [""]
            }] }
];
/** @nocollapse */
BaseComponent.ctorParameters = () => [];
BaseComponent = tslib_1.__decorate([
    Mixin([DataInspector]),
    tslib_1.__metadata("design:paramtypes", [])
], BaseComponent);
export { BaseComponent };
if (false) {
    /** @type {?} */
    BaseComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFBO0FBRWpELE9BQU8sRUFDTCxLQUFLLEdBQ04sTUFBTSxxQ0FBcUMsQ0FBQTtBQUU1QyxPQUFPLEVBQ0wsYUFBYSxHQUNkLE1BQU0saUNBQWlDLENBQUE7SUFRM0IsYUFBYSxTQUFiLGFBQWE7SUFHeEI7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDWixDQUFDOzs7O0lBRUQsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsR0FBRyxDQUFDLFlBQXFCLEtBQUs7UUFDNUIsSUFBRyxTQUFTLEVBQUU7O2dCQUNSLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTs7Z0JBQ3hCLE9BQU8sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsV0FBVyxDQUFDLEdBQUcsSUFBVyxJQUFHLENBQUM7Q0FDL0IsQ0FBQTs7WUExQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsRUFBRTs7YUFFYjs7OztBQUVZLGFBQWE7SUFEekIsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7O0dBQ1YsYUFBYSxDQW9CekI7U0FwQlksYUFBYTs7O0lBQ3hCLDJCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBNaXhpbixcbn0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2RlY29yYXRvcnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIERhdGFJbnNwZWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9taXhpbnMvaW5kZXgnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1iYXNlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9iYXNlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5ATWl4aW4oW0RhdGFJbnNwZWN0b3JdKVxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpZDogc3RyaW5nO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sb2coKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGxvZyhpc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmKGlzRW5hYmxlZCkge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICB0aGlzLmlkID0gZGF0ZS50b0lTT1N0cmluZygpXG4gICAgICBsZXQgbWVzc2FnZSA9IFwiVGhlIGlkIG9mIHRoZSBcIiArIHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiIGNvbXBvbmVudCBpcyBcIiArIHRoaXMuaWRcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLy9NaXhpbiBwcm9wZXJ0aWVzXG4gIGluc3BlY3REYXRhKC4uLmFyZ3M6IGFueVtdKSB7fVxufVxuIl19