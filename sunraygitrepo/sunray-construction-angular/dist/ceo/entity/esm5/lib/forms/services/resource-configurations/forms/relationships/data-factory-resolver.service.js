/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroupDataFactory, FormItemDataFactory, } from '../data-factories/index';
import * as i0 from "@angular/core";
import * as i1 from "../data-factories/form-group-data-factory.service";
import * as i2 from "../data-factories/form-item-data-factory.service";
var DataFactoryResolver = /** @class */ (function () {
    function DataFactoryResolver(formGroupDataFactory, formItemDataFactory) {
        this.formGroupDataFactory = formGroupDataFactory;
        this.formItemDataFactory = formItemDataFactory;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    DataFactoryResolver.prototype.resolve = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        switch (entity.type) {
            case "resource-associations": {
                return this.formGroupDataFactory;
            }
            case "resource-attributes": {
                return this.formItemDataFactory;
            }
            case "resource-validators": {
                return this.formItemDataFactory;
            }
            default: {
                return this.formItemDataFactory;
            }
        }
    };
    DataFactoryResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataFactoryResolver.ctorParameters = function () { return [
        { type: FormGroupDataFactory },
        { type: FormItemDataFactory }
    ]; };
    /** @nocollapse */ DataFactoryResolver.ngInjectableDef = i0.defineInjectable({ factory: function DataFactoryResolver_Factory() { return new DataFactoryResolver(i0.inject(i1.FormGroupDataFactory), i0.inject(i2.FormItemDataFactory)); }, token: DataFactoryResolver, providedIn: "root" });
    return DataFactoryResolver;
}());
export { DataFactoryResolver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataFactoryResolver.prototype.formGroupDataFactory;
    /**
     * @type {?}
     * @private
     */
    DataFactoryResolver.prototype.formItemDataFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1mYWN0b3J5LXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9ucy9mb3Jtcy9yZWxhdGlvbnNoaXBzL2RhdGEtZmFjdG9yeS1yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBTTFDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsbUJBQW1CLEdBQ3BCLE1BQU0seUJBQXlCLENBQUE7Ozs7QUFFaEM7SUFJRSw2QkFDVSxvQkFBMEMsRUFDMUMsbUJBQXdDO1FBRHhDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDOzs7OztJQUVKLHFDQUFPOzs7O0lBQVAsVUFDRSxNQUFlO1FBRWYsUUFBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssdUJBQXVCLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUE7YUFDakM7WUFDRCxLQUFLLHFCQUFxQixDQUFDLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFBO2FBQ2hDO1lBQ0QsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTthQUNoQztZQUNELE9BQU8sQ0FBQyxDQUFDO2dCQUNQLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFBO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOQyxvQkFBb0I7Z0JBQ3BCLG1CQUFtQjs7OzhCQWhCckI7Q0E4Q0MsQUEzQkQsSUEyQkM7U0F4QlksbUJBQW1COzs7Ozs7SUFFNUIsbURBQWtEOzs7OztJQUNsRCxrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1Hcm91cERhdGFGYWN0b3J5LFxuICBGb3JtSXRlbURhdGFGYWN0b3J5LFxufSBmcm9tICcuLi9kYXRhLWZhY3Rvcmllcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUZhY3RvcnlSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUdyb3VwRGF0YUZhY3Rvcnk6IEZvcm1Hcm91cERhdGFGYWN0b3J5LFxuICAgIHByaXZhdGUgZm9ybUl0ZW1EYXRhRmFjdG9yeTogRm9ybUl0ZW1EYXRhRmFjdG9yeSxcbiAgKSB7fVxuXG4gIHJlc29sdmUoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICApIHtcbiAgICBzd2l0Y2goZW50aXR5LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXNvdXJjZS1hc3NvY2lhdGlvbnNcIjoge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXBEYXRhRmFjdG9yeVxuICAgICAgfVxuICAgICAgY2FzZSBcInJlc291cmNlLWF0dHJpYnV0ZXNcIjoge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtSXRlbURhdGFGYWN0b3J5XG4gICAgICB9XG4gICAgICBjYXNlIFwicmVzb3VyY2UtdmFsaWRhdG9yc1wiOiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1JdGVtRGF0YUZhY3RvcnlcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUl0ZW1EYXRhRmFjdG9yeVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19