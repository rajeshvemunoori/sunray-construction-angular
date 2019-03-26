/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Mixin, } from '../../../providers/decorators/index';
import { DataInspector, } from '../../../providers/mixins/index';
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.log();
    }
    /**
     * @return {?}
     */
    BaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?=} isEnabled
     * @return {?}
     */
    BaseComponent.prototype.log = /**
     * @param {?=} isEnabled
     * @return {?}
     */
    function (isEnabled) {
        if (isEnabled === void 0) { isEnabled = false; }
        if (isEnabled) {
            /** @type {?} */
            var date = new Date();
            this.id = date.toISOString();
            /** @type {?} */
            var message = "The id of the " + this.constructor.name + " component is " + this.id;
            console.log(message);
        }
    };
    //Mixin properties
    //Mixin properties
    /**
     * @param {...?} args
     * @return {?}
     */
    BaseComponent.prototype.inspectData = 
    //Mixin properties
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    BaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared-base',
                    template: '',
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BaseComponent.ctorParameters = function () { return []; };
    BaseComponent = tslib_1.__decorate([
        Mixin([DataInspector]),
        tslib_1.__metadata("design:paramtypes", [])
    ], BaseComponent);
    return BaseComponent;
}());
export { BaseComponent };
if (false) {
    /** @type {?} */
    BaseComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFBO0FBRWpELE9BQU8sRUFDTCxLQUFLLEdBQ04sTUFBTSxxQ0FBcUMsQ0FBQTtBQUU1QyxPQUFPLEVBQ0wsYUFBYSxHQUNkLE1BQU0saUNBQWlDLENBQUE7O0lBV3RDO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ1osQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsMkJBQUc7Ozs7SUFBSCxVQUFJLFNBQTBCO1FBQTFCLDBCQUFBLEVBQUEsaUJBQTBCO1FBQzVCLElBQUcsU0FBUyxFQUFFOztnQkFDUixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7O2dCQUN4QixPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNyQjtJQUNILENBQUM7SUFFRCxrQkFBa0I7Ozs7OztJQUNsQixtQ0FBVzs7Ozs7O0lBQVg7UUFBWSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztJQUFHLENBQUM7O2dCQXpCL0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsRUFBRTs7aUJBRWI7Ozs7SUFFWSxhQUFhO1FBRHpCLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztPQUNWLGFBQWEsQ0FvQnpCO0lBQUQsb0JBQUM7Q0FBQSxJQUFBO1NBcEJZLGFBQWE7OztJQUN4QiwyQkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgTWl4aW4sXG59IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9kZWNvcmF0b3JzL2luZGV4J1xuXG5pbXBvcnQge1xuICBEYXRhSW5zcGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvbWl4aW5zL2luZGV4J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtYmFzZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS5jb21wb25lbnQuc2NzcyddXG59KVxuQE1peGluKFtEYXRhSW5zcGVjdG9yXSlcbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWQ6IHN0cmluZztcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9nKClcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBsb2coaXNFbmFibGVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZihpc0VuYWJsZWQpIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgdGhpcy5pZCA9IGRhdGUudG9JU09TdHJpbmcoKVxuICAgICAgbGV0IG1lc3NhZ2UgPSBcIlRoZSBpZCBvZiB0aGUgXCIgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiBjb21wb25lbnQgaXMgXCIgKyB0aGlzLmlkXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIC8vTWl4aW4gcHJvcGVydGllc1xuICBpbnNwZWN0RGF0YSguLi5hcmdzOiBhbnlbXSkge31cbn1cbiJdfQ==