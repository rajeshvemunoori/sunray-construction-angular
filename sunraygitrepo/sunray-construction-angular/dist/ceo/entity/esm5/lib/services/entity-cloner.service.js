/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
var EntityCloner = /** @class */ (function () {
    function EntityCloner() {
    }
    /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    EntityCloner.prototype.clone = /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    function (entity, dataService) {
        if (dataService === void 0) { dataService = null; }
        /** @type {?} */
        var entityCtor = entity.constructor;
        return new entityCtor(this.constructorParams(entity), dataService);
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    EntityCloner.prototype.constructorParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var paramNames = [
            'id',
            'feature',
            'type',
            'attributes',
            'relationships',
        ];
        return (/** @type {?} */ (_.pick(entity, paramNames)));
    };
    EntityCloner.decorators = [
        { type: Injectable }
    ];
    return EntityCloner;
}());
export { EntityCloner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNsb25lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZW50aXR5LWNsb25lci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBUTFDO0lBQUE7SUF3QkEsQ0FBQzs7Ozs7O0lBdEJDLDRCQUFLOzs7OztJQUFMLFVBQ0UsTUFBZSxFQUNmLFdBQWdDO1FBQWhDLDRCQUFBLEVBQUEsa0JBQWdDOztZQUU1QixVQUFVLEdBQVMsTUFBTSxDQUFDLFdBQVc7UUFDekMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDcEUsQ0FBQzs7Ozs7O0lBRU8sd0NBQWlCOzs7OztJQUF6QixVQUNFLE1BQWU7O1lBR1gsVUFBVSxHQUFHO1lBQ2YsSUFBSTtZQUNKLFNBQVM7WUFDVCxNQUFNO1lBQ04sWUFBWTtZQUNaLGVBQWU7U0FDaEI7UUFDRCxPQUFPLG1CQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBQSxDQUFBO0lBRTdELENBQUM7O2dCQXZCRixVQUFVOztJQXdCWCxtQkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlEYXRhU2VydmljZSxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5Q2xvbmVyIHtcbiAgY2xvbmUoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICAgIGRhdGFTZXJ2aWNlOiBpRGF0YVNlcnZpY2UgPSBudWxsLFxuICApOiBpRW50aXR5IHtcbiAgICBsZXQgZW50aXR5Q3RvciA6IGFueSA9IGVudGl0eS5jb25zdHJ1Y3RvclxuICAgIHJldHVybiBuZXcgZW50aXR5Q3Rvcih0aGlzLmNvbnN0cnVjdG9yUGFyYW1zKGVudGl0eSksIGRhdGFTZXJ2aWNlKVxuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvclBhcmFtcyhcbiAgICBlbnRpdHk6IGlFbnRpdHksXG4gICk6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyB7XG5cbiAgICBsZXQgcGFyYW1OYW1lcyA9IFtcbiAgICAgICdpZCcsXG4gICAgICAnZmVhdHVyZScsXG4gICAgICAndHlwZScsXG4gICAgICAnYXR0cmlidXRlcycsXG4gICAgICAncmVsYXRpb25zaGlwcycsXG4gICAgXVxuICAgIHJldHVybiA8aUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zPl8ucGljayhlbnRpdHksIHBhcmFtTmFtZXMpXG5cbiAgfVxufVxuIl19