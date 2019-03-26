/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { InflectionService, } from '@ceo/core';
import * as i0 from "@angular/core";
import * as i1 from "@ceo/core";
export class ResourceIdentifierService {
    /**
     * @param {?} inflectionService
     */
    constructor(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    isValid(ri) {
        return _.has(ri, 'feature') && _.has(ri, 'type');
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    isScope(ri) {
        return _.has(ri, 'filter.scope');
    }
    /**
     * @param {?} riOne
     * @param {?} riTwo
     * @return {?}
     */
    isSameResource(riOne, riTwo) {
        return _.isEqual(riOne, riTwo);
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    scopeName(ri) {
        /** @type {?} */
        let scopeKey = _.get(ri, 'filter.scope');
        return this.inflectionService.camelCase(scopeKey);
    }
}
ResourceIdentifierService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ResourceIdentifierService.ctorParameters = () => [
    { type: InflectionService }
];
/** @nocollapse */ ResourceIdentifierService.ngInjectableDef = i0.defineInjectable({ factory: function ResourceIdentifierService_Factory() { return new ResourceIdentifierService(i0.inject(i1.InflectionService)); }, token: ResourceIdentifierService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResourceIdentifierService.prototype.inflectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtaWRlbnRpZmllci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcmVzb3VyY2UtaWRlbnRpZmllci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFDTCxpQkFBaUIsR0FDbEIsTUFBUSxXQUFXLENBQUE7OztBQVNwQixNQUFNLE9BQU8seUJBQXlCOzs7O0lBQ3BDLFlBQ1UsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDM0MsQ0FBQzs7Ozs7SUFFSixPQUFPLENBQUMsRUFBdUI7UUFDN0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNsRCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxFQUF1QjtRQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FDWixLQUEwQixFQUMxQixLQUEwQjtRQUUxQixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQXVCOztZQUMzQixRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7WUExQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVEMsaUJBQWlCOzs7Ozs7OztJQVlmLHNEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgSW5mbGVjdGlvblNlcnZpY2UsXG59ICAgZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmZsZWN0aW9uU2VydmljZTogSW5mbGVjdGlvblNlcnZpY2UsXG4gICkge31cblxuICBpc1ZhbGlkKHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaGFzKHJpLCAnZmVhdHVyZScpICYmIF8uaGFzKHJpLCAndHlwZScpXG4gIH1cblxuICBpc1Njb3BlKHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaGFzKHJpLCAnZmlsdGVyLnNjb3BlJylcbiAgfVxuXG4gIGlzU2FtZVJlc291cmNlKFxuICAgIHJpT25lOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIHJpVHdvOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5pc0VxdWFsKHJpT25lLCByaVR3bylcbiAgfVxuXG4gIHNjb3BlTmFtZShyaTogaVJlc291cmNlSWRlbnRpZmllcik6IHN0cmluZyB7XG4gICAgbGV0IHNjb3BlS2V5ID0gXy5nZXQocmksICdmaWx0ZXIuc2NvcGUnKVxuICAgIHJldHVybiB0aGlzLmluZmxlY3Rpb25TZXJ2aWNlLmNhbWVsQ2FzZShzY29wZUtleSlcbiAgfVxufVxuIl19