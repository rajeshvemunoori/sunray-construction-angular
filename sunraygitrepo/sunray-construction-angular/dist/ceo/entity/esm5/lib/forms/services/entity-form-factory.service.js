/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Accepts:
// resourceType 'string'
// formName 'string'
//
// Returns a FormGroup
import * as _ from 'lodash';
import { combineLatest, } from 'rxjs';
import { mergeMap, filter, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DataService, } from '../../entity/index';
import { ResourceConfigurationFormFactory, } from './resource-configurations/index';
import * as i0 from "@angular/core";
import * as i1 from "./resource-configurations/forms/form-factory.service";
import * as i2 from "../../entity/services/data.service";
var EntityFormFactory = /** @class */ (function () {
    function EntityFormFactory(resourceConfigurationFormFactory, dataService) {
        this.resourceConfigurationFormFactory = resourceConfigurationFormFactory;
        this.dataService = dataService;
    }
    /**
     * @param {?} entity
     * @param {?} opts
     * @return {?}
     */
    EntityFormFactory.prototype.build$ = /**
     * @param {?} entity
     * @param {?} opts
     * @return {?}
     */
    function (entity, opts) {
        var _this = this;
        /** @type {?} */
        var data$ = combineLatest(this.resourceConfiguration$(entity), this.form$(entity, opts.formName));
        return (/** @type {?} */ (data$.pipe(mergeMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), rc = _b[0], form = _b[1];
            return _this.resourceConfigurationFormFactory.build$((/** @type {?} */ (rc)), (/** @type {?} */ (form)));
        }))));
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    EntityFormFactory.prototype.form$ = /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    function (entity, formName) {
        /** @type {?} */
        var opts = {
            feature: entity.feature,
            type: 'forms',
            id: formName,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    EntityFormFactory.prototype.resourceConfiguration$ = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var opts = {
            feature: entity.feature,
            type: 'resource-configurations',
            id: entity.type,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    };
    /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    EntityFormFactory.prototype.loadData$ = /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        return this.dataService.get$(opts).pipe(filter(function (entityType) { return !_.isNil(entityType); }));
    };
    EntityFormFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityFormFactory.ctorParameters = function () { return [
        { type: ResourceConfigurationFormFactory },
        { type: DataService }
    ]; };
    /** @nocollapse */ EntityFormFactory.ngInjectableDef = i0.defineInjectable({ factory: function EntityFormFactory_Factory() { return new EntityFormFactory(i0.inject(i1.FormFactory), i0.inject(i2.DataService)); }, token: EntityFormFactory, providedIn: "root" });
    return EntityFormFactory;
}());
export { EntityFormFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityFormFactory.prototype.resourceConfigurationFormFactory;
    /**
     * @type {?}
     * @private
     */
    EntityFormFactory.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZvcm0tZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvZW50aXR5LWZvcm0tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBR0wsYUFBYSxHQUNkLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNBLFFBQVEsRUFDYixNQUFNLEdBQ1AsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBUTFDLE9BQU8sRUFHTCxXQUFXLEdBQ1osTUFBTSxvQkFBb0IsQ0FBQTtBQU8zQixPQUFPLEVBQ0wsZ0NBQWdDLEdBQ2pDLE1BQU0saUNBQWlDLENBQUE7Ozs7QUFFeEM7SUFJRSwyQkFDVSxnQ0FBa0UsRUFDbEUsV0FBd0I7UUFEeEIscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMvQixDQUFDOzs7Ozs7SUFFSixrQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQWUsRUFBRSxJQUE0QjtRQUFwRCxpQkFXQzs7WUFWSyxLQUFLLEdBQUcsYUFBYSxDQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLEVBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDbEM7UUFFRCxPQUFPLG1CQUErQixLQUFLLENBQUMsSUFBSSxDQUM5QyxRQUFRLENBQUMsVUFBQyxFQUFVO2dCQUFWLDBCQUFVLEVBQVQsVUFBRSxFQUFFLFlBQUk7WUFDakIsT0FBTyxLQUFJLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLG1CQUFTLEVBQUUsRUFBQSxFQUFFLG1CQUFhLElBQUksRUFBQSxDQUFDLENBQUE7UUFDckYsQ0FBQyxDQUFDLENBQ0gsRUFBQSxDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGlDQUFLOzs7Ozs7SUFBYixVQUFjLE1BQWUsRUFBRSxRQUFnQjs7WUFDekMsSUFBSSxHQUFHO1lBQ1QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBRSxPQUFPO1lBQ2IsRUFBRSxFQUFFLFFBQVE7U0FDYjtRQUVELE9BQU8sbUJBQXFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUEsQ0FBQTtJQUNsRCxDQUFDOzs7Ozs7SUFFTyxrREFBc0I7Ozs7O0lBQTlCLFVBQStCLE1BQWU7O1lBQ3hDLElBQUksR0FBRztZQUNULE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSTtTQUNoQjtRQUVELE9BQU8sbUJBQXFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUEsQ0FBQTtJQUNsRCxDQUFDOzs7Ozs7SUFFTyxxQ0FBUzs7Ozs7SUFBakIsVUFBa0IsSUFBUztRQUN6QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQzNDLENBQUE7SUFDSCxDQUFDOztnQkE5Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMQyxnQ0FBZ0M7Z0JBVGhDLFdBQVc7Ozs0QkE5QmI7Q0F5RkMsQUEvQ0QsSUErQ0M7U0E1Q1ksaUJBQWlCOzs7Ozs7SUFFMUIsNkRBQTBFOzs7OztJQUMxRSx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY2NlcHRzOlxuLy8gcmVzb3VyY2VUeXBlICdzdHJpbmcnXG4vLyBmb3JtTmFtZSAnc3RyaW5nJ1xuLy9cbi8vIFJldHVybnMgYSBGb3JtR3JvdXBcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWFwLCBtZXJnZU1hcCxcbiAgZmlsdGVyLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIFRleHRib3hGb3JtQ29udHJvbCxcbiAgaUZvcm1Db250cm9sLFxuICBpRm9ybVdyYXBwZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlEYXRhLFxuICBpRW50aXR5LFxuICBEYXRhU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vZW50aXR5L2luZGV4J1xuXG5pbXBvcnQge1xuICBpRm9ybUVudGl0eSxcbiAgaUVudGl0eUZvcm1GYWN0b3J5T3B0cyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgUmVzb3VyY2VDb25maWd1cmF0aW9uRm9ybUZhY3RvcnksXG59IGZyb20gJy4vcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUZvcm1GYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXNvdXJjZUNvbmZpZ3VyYXRpb25Gb3JtRmFjdG9yeTogUmVzb3VyY2VDb25maWd1cmF0aW9uRm9ybUZhY3RvcnksXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICkge31cblxuICBidWlsZCQoZW50aXR5OiBpRW50aXR5LCBvcHRzOiBpRW50aXR5Rm9ybUZhY3RvcnlPcHRzKTogQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj4ge1xuICAgIGxldCBkYXRhJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnJlc291cmNlQ29uZmlndXJhdGlvbiQoZW50aXR5KSxcbiAgICAgIHRoaXMuZm9ybSQoZW50aXR5LCBvcHRzLmZvcm1OYW1lKSxcbiAgICApXG5cbiAgICByZXR1cm4gPEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+PmRhdGEkLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoW3JjLCBmb3JtXSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUNvbmZpZ3VyYXRpb25Gb3JtRmFjdG9yeS5idWlsZCQoPGlFbnRpdHk+cmMsIDxpRm9ybUVudGl0eT5mb3JtKVxuICAgICAgfSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtJChlbnRpdHk6IGlFbnRpdHksIGZvcm1OYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGlFbnRpdHk+IHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIGZlYXR1cmU6IGVudGl0eS5mZWF0dXJlLFxuICAgICAgdHlwZTogJ2Zvcm1zJyxcbiAgICAgIGlkOiBmb3JtTmFtZSxcbiAgICB9XG5cbiAgICByZXR1cm4gPE9ic2VydmFibGU8aUVudGl0eT4+dGhpcy5sb2FkRGF0YSQob3B0cylcbiAgfVxuXG4gIHByaXZhdGUgcmVzb3VyY2VDb25maWd1cmF0aW9uJChlbnRpdHk6IGlFbnRpdHkpOiBPYnNlcnZhYmxlPEVudGl0eURhdGE+IHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIGZlYXR1cmU6IGVudGl0eS5mZWF0dXJlLFxuICAgICAgdHlwZTogJ3Jlc291cmNlLWNvbmZpZ3VyYXRpb25zJyxcbiAgICAgIGlkOiBlbnRpdHkudHlwZSxcbiAgICB9XG5cbiAgICByZXR1cm4gPE9ic2VydmFibGU8aUVudGl0eT4+dGhpcy5sb2FkRGF0YSQob3B0cylcbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEkKG9wdHM6IGFueSk6IE9ic2VydmFibGU8aUVudGl0eT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldCQob3B0cykucGlwZShcbiAgICAgIGZpbHRlcihlbnRpdHlUeXBlID0+ICFfLmlzTmlsKGVudGl0eVR5cGUpKVxuICAgIClcbiAgfVxufVxuIl19