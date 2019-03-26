/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { FormItemFactory } from './form-item-factory.service';
import { FormGroupFactory } from './form-group-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-item-factory.service";
import * as i2 from "./form-group-factory.service";
/**
 * @record
 */
function iFormMemberFactory() { }
export class FormMemberFactory {
    /**
     * @param {?} formItemFactory
     * @param {?} formGroupFactory
     */
    constructor(formItemFactory, formGroupFactory) {
        this.formItemFactory = formItemFactory;
        this.formGroupFactory = formGroupFactory;
        this.factories = [
            formItemFactory,
            formGroupFactory
        ];
        this.defaultMemberFactory = formItemFactory;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        /** @type {?} */
        let factory = this.resolveMemberFactory(params);
        return factory.build(params);
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    resolveMemberFactory(params) {
        /** @type {?} */
        let typeFactory = _.find(this.factories, { type: params.type });
        return (/** @type {?} */ (_.defaultTo(typeFactory, this.defaultMemberFactory)));
    }
}
FormMemberFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormMemberFactory.ctorParameters = () => [
    { type: FormItemFactory },
    { type: FormGroupFactory }
];
/** @nocollapse */ FormMemberFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormMemberFactory_Factory() { return new FormMemberFactory(i0.inject(i1.FormItemFactory), i0.inject(i2.FormGroupFactory)); }, token: FormMemberFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.factories;
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.defaultMemberFactory;
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.formItemFactory;
    /**
     * @type {?}
     * @private
     */
    FormMemberFactory.prototype.formGroupFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tZW1iZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL3NlcnZpY2VzL2Zvcm0tbWVtYmVyLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQVExQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQVEsNkJBQTZCLENBQUE7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU8sOEJBQThCLENBQUE7Ozs7Ozs7QUFFaEUsaUNBQXVGO0FBS3ZGLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBTTVCLFlBQ1UsZUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRGxDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixlQUFlO1lBQ2YsZ0JBQWdCO1NBQ2pCLENBQUE7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFBO0lBQzdDLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLE1BQWdDOztZQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQzFCLE1BQWdDOztZQUc1QixXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUvRCxPQUFPLG1CQUFvQixDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBQSxDQUFBO0lBQ2hGLENBQUM7OztZQWhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxlQUFlO1lBQ2YsZ0JBQWdCOzs7Ozs7OztJQVV2QixzQ0FBb0U7Ozs7O0lBQ3BFLGlEQUE2RTs7Ozs7SUFHM0UsNENBQXdDOzs7OztJQUN4Qyw2Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlGYWN0b3J5LFxuICBpRm9ybU1lbWJlcixcbiAgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBGb3JtSXRlbUZhY3RvcnkgfSAgIGZyb20gJy4vZm9ybS1pdGVtLWZhY3Rvcnkuc2VydmljZSdcbmltcG9ydCB7IEZvcm1Hcm91cEZhY3RvcnkgfSAgZnJvbSAnLi9mb3JtLWdyb3VwLWZhY3Rvcnkuc2VydmljZSdcblxuaW50ZXJmYWNlIGlGb3JtTWVtYmVyRmFjdG9yeSBleHRlbmRzIGlGYWN0b3J5PGlGb3JtTWVtYmVyLCBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+IHt9XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1NZW1iZXJGYWN0b3J5XG4gIGltcGxlbWVudHMgaUZhY3Rvcnk8aUZvcm1NZW1iZXIsIGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz4ge1xuXG4gIHByaXZhdGUgZmFjdG9yaWVzOiBpRmFjdG9yeTxpRm9ybU1lbWJlciwgaUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPltdXG4gIHByaXZhdGUgZGVmYXVsdE1lbWJlckZhY3Rvcnk6IGlGYWN0b3J5PGlGb3JtTWVtYmVyLCBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtSXRlbUZhY3Rvcnk6IEZvcm1JdGVtRmFjdG9yeSxcbiAgICBwcml2YXRlIGZvcm1Hcm91cEZhY3Rvcnk6IEZvcm1Hcm91cEZhY3RvcnksXG4gICkge1xuICAgIHRoaXMuZmFjdG9yaWVzID0gW1xuICAgICAgZm9ybUl0ZW1GYWN0b3J5LFxuICAgICAgZm9ybUdyb3VwRmFjdG9yeVxuICAgIF1cbiAgICB0aGlzLmRlZmF1bHRNZW1iZXJGYWN0b3J5ID0gZm9ybUl0ZW1GYWN0b3J5XG4gIH1cblxuICBidWlsZChwYXJhbXM6IGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcyk6IGlGb3JtTWVtYmVyIHtcbiAgICBsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZU1lbWJlckZhY3RvcnkocGFyYW1zKVxuICAgIHJldHVybiBmYWN0b3J5LmJ1aWxkKHBhcmFtcylcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU1lbWJlckZhY3RvcnkoXG4gICAgcGFyYW1zOiBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXNcbiAgKTogaUZhY3Rvcnk8aUZvcm1NZW1iZXIsIGlGb3JtTWVtYmVyRmFjdG9yeVBhcmFtcz4ge1xuXG4gICAgbGV0IHR5cGVGYWN0b3J5ID0gXy5maW5kKHRoaXMuZmFjdG9yaWVzLCB7IHR5cGU6IHBhcmFtcy50eXBlIH0pXG5cbiAgICByZXR1cm4gPGlGb3JtTWVtYmVyRmFjdG9yeT5fLmRlZmF1bHRUbyh0eXBlRmFjdG9yeSwgdGhpcy5kZWZhdWx0TWVtYmVyRmFjdG9yeSlcbiAgfVxufVxuIl19