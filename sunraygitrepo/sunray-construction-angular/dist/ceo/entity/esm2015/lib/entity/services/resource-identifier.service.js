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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtaWRlbnRpZmllci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL3Jlc291cmNlLWlkZW50aWZpZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQVEsV0FBVyxDQUFBOzs7QUFTcEIsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUNwQyxZQUNVLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzNDLENBQUM7Ozs7O0lBRUosT0FBTyxDQUFDLEVBQXVCO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsRUFBdUI7UUFDN0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUNsQyxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQ1osS0FBMEIsRUFDMUIsS0FBMEI7UUFFMUIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUF1Qjs7WUFDM0IsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbkQsQ0FBQzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRDLGlCQUFpQjs7Ozs7Ozs7SUFZZixzREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEluZmxlY3Rpb25TZXJ2aWNlLFxufSAgIGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VJZGVudGlmaWVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5mbGVjdGlvblNlcnZpY2U6IEluZmxlY3Rpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgaXNWYWxpZChyaTogaVJlc291cmNlSWRlbnRpZmllcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ2ZlYXR1cmUnKSAmJiBfLmhhcyhyaSwgJ3R5cGUnKVxuICB9XG5cbiAgaXNTY29wZShyaTogaVJlc291cmNlSWRlbnRpZmllcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ2ZpbHRlci5zY29wZScpXG4gIH1cblxuICBpc1NhbWVSZXNvdXJjZShcbiAgICByaU9uZTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICByaVR3bzogaVJlc291cmNlSWRlbnRpZmllcixcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaXNFcXVhbChyaU9uZSwgcmlUd28pXG4gIH1cblxuICBzY29wZU5hbWUocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpOiBzdHJpbmcge1xuICAgIGxldCBzY29wZUtleSA9IF8uZ2V0KHJpLCAnZmlsdGVyLnNjb3BlJylcbiAgICByZXR1cm4gdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2NvcGVLZXkpXG4gIH1cbn1cbiJdfQ==