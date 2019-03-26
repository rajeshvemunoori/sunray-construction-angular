/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class EntityFormFactory {
    /**
     * @param {?} resourceConfigurationFormFactory
     * @param {?} dataService
     */
    constructor(resourceConfigurationFormFactory, dataService) {
        this.resourceConfigurationFormFactory = resourceConfigurationFormFactory;
        this.dataService = dataService;
    }
    /**
     * @param {?} entity
     * @param {?} opts
     * @return {?}
     */
    build$(entity, opts) {
        /** @type {?} */
        let data$ = combineLatest(this.resourceConfiguration$(entity), this.form$(entity, opts.formName));
        return (/** @type {?} */ (data$.pipe(mergeMap(([rc, form]) => {
            return this.resourceConfigurationFormFactory.build$((/** @type {?} */ (rc)), (/** @type {?} */ (form)));
        }))));
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} formName
     * @return {?}
     */
    form$(entity, formName) {
        /** @type {?} */
        let opts = {
            feature: entity.feature,
            type: 'forms',
            id: formName,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    resourceConfiguration$(entity) {
        /** @type {?} */
        let opts = {
            feature: entity.feature,
            type: 'resource-configurations',
            id: entity.type,
        };
        return (/** @type {?} */ (this.loadData$(opts)));
    }
    /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    loadData$(opts) {
        return this.dataService.get$(opts).pipe(filter(entityType => !_.isNil(entityType)));
    }
}
EntityFormFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityFormFactory.ctorParameters = () => [
    { type: ResourceConfigurationFormFactory },
    { type: DataService }
];
/** @nocollapse */ EntityFormFactory.ngInjectableDef = i0.defineInjectable({ factory: function EntityFormFactory_Factory() { return new EntityFormFactory(i0.inject(i1.FormFactory), i0.inject(i2.DataService)); }, token: EntityFormFactory, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZvcm0tZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvZW50aXR5LWZvcm0tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFHTCxhQUFhLEdBQ2QsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQ0EsUUFBUSxFQUNiLE1BQU0sR0FDUCxNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFRMUMsT0FBTyxFQUdMLFdBQVcsR0FDWixNQUFNLG9CQUFvQixDQUFBO0FBTzNCLE9BQU8sRUFDTCxnQ0FBZ0MsR0FDakMsTUFBTSxpQ0FBaUMsQ0FBQTs7OztBQUt4QyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUM1QixZQUNVLGdDQUFrRSxFQUNsRSxXQUF3QjtRQUR4QixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQy9CLENBQUM7Ozs7OztJQUVKLE1BQU0sQ0FBQyxNQUFlLEVBQUUsSUFBNEI7O1lBQzlDLEtBQUssR0FBRyxhQUFhLENBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsRUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUNsQztRQUVELE9BQU8sbUJBQStCLEtBQUssQ0FBQyxJQUFJLENBQzlDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLG1CQUFTLEVBQUUsRUFBQSxFQUFFLG1CQUFhLElBQUksRUFBQSxDQUFDLENBQUE7UUFDckYsQ0FBQyxDQUFDLENBQ0gsRUFBQSxDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLEtBQUssQ0FBQyxNQUFlLEVBQUUsUUFBZ0I7O1lBQ3pDLElBQUksR0FBRztZQUNULE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixJQUFJLEVBQUUsT0FBTztZQUNiLEVBQUUsRUFBRSxRQUFRO1NBQ2I7UUFFRCxPQUFPLG1CQUFxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFBLENBQUE7SUFDbEQsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsTUFBZTs7WUFDeEMsSUFBSSxHQUFHO1lBQ1QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBRSx5QkFBeUI7WUFDL0IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1NBQ2hCO1FBRUQsT0FBTyxtQkFBcUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQSxDQUFBO0lBQ2xELENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFTO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNyQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDM0MsQ0FBQTtJQUNILENBQUM7OztZQTlDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMQyxnQ0FBZ0M7WUFUaEMsV0FBVzs7Ozs7Ozs7SUFpQlQsNkRBQTBFOzs7OztJQUMxRSx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY2NlcHRzOlxuLy8gcmVzb3VyY2VUeXBlICdzdHJpbmcnXG4vLyBmb3JtTmFtZSAnc3RyaW5nJ1xuLy9cbi8vIFJldHVybnMgYSBGb3JtR3JvdXBcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWFwLCBtZXJnZU1hcCxcbiAgZmlsdGVyLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIFRleHRib3hGb3JtQ29udHJvbCxcbiAgaUZvcm1Db250cm9sLFxuICBpRm9ybVdyYXBwZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlEYXRhLFxuICBpRW50aXR5LFxuICBEYXRhU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vZW50aXR5L2luZGV4J1xuXG5pbXBvcnQge1xuICBpRm9ybUVudGl0eSxcbiAgaUVudGl0eUZvcm1GYWN0b3J5T3B0cyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgUmVzb3VyY2VDb25maWd1cmF0aW9uRm9ybUZhY3RvcnksXG59IGZyb20gJy4vcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUZvcm1GYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXNvdXJjZUNvbmZpZ3VyYXRpb25Gb3JtRmFjdG9yeTogUmVzb3VyY2VDb25maWd1cmF0aW9uRm9ybUZhY3RvcnksXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICkge31cblxuICBidWlsZCQoZW50aXR5OiBpRW50aXR5LCBvcHRzOiBpRW50aXR5Rm9ybUZhY3RvcnlPcHRzKTogQmVoYXZpb3JTdWJqZWN0PGlGb3JtV3JhcHBlcj4ge1xuICAgIGxldCBkYXRhJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnJlc291cmNlQ29uZmlndXJhdGlvbiQoZW50aXR5KSxcbiAgICAgIHRoaXMuZm9ybSQoZW50aXR5LCBvcHRzLmZvcm1OYW1lKSxcbiAgICApXG5cbiAgICByZXR1cm4gPEJlaGF2aW9yU3ViamVjdDxpRm9ybVdyYXBwZXI+PmRhdGEkLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoW3JjLCBmb3JtXSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUNvbmZpZ3VyYXRpb25Gb3JtRmFjdG9yeS5idWlsZCQoPGlFbnRpdHk+cmMsIDxpRm9ybUVudGl0eT5mb3JtKVxuICAgICAgfSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtJChlbnRpdHk6IGlFbnRpdHksIGZvcm1OYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGlFbnRpdHk+IHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIGZlYXR1cmU6IGVudGl0eS5mZWF0dXJlLFxuICAgICAgdHlwZTogJ2Zvcm1zJyxcbiAgICAgIGlkOiBmb3JtTmFtZSxcbiAgICB9XG5cbiAgICByZXR1cm4gPE9ic2VydmFibGU8aUVudGl0eT4+dGhpcy5sb2FkRGF0YSQob3B0cylcbiAgfVxuXG4gIHByaXZhdGUgcmVzb3VyY2VDb25maWd1cmF0aW9uJChlbnRpdHk6IGlFbnRpdHkpOiBPYnNlcnZhYmxlPEVudGl0eURhdGE+IHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIGZlYXR1cmU6IGVudGl0eS5mZWF0dXJlLFxuICAgICAgdHlwZTogJ3Jlc291cmNlLWNvbmZpZ3VyYXRpb25zJyxcbiAgICAgIGlkOiBlbnRpdHkudHlwZSxcbiAgICB9XG5cbiAgICByZXR1cm4gPE9ic2VydmFibGU8aUVudGl0eT4+dGhpcy5sb2FkRGF0YSQob3B0cylcbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEkKG9wdHM6IGFueSk6IE9ic2VydmFibGU8aUVudGl0eT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldCQob3B0cykucGlwZShcbiAgICAgIGZpbHRlcihlbnRpdHlUeXBlID0+ICFfLmlzTmlsKGVudGl0eVR5cGUpKVxuICAgIClcbiAgfVxufVxuIl19