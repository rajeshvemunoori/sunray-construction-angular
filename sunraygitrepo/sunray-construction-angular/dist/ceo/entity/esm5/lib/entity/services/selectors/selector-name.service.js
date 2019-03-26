/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { InflectionService, } from '@ceo/core';
import * as i0 from "@angular/core";
import * as i1 from "@ceo/core";
var SelectorNameService = /** @class */ (function () {
    function SelectorNameService(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} featureConfig
     * @return {?}
     */
    SelectorNameService.prototype.getFeatureSelectorName = /**
     * @param {?} featureConfig
     * @return {?}
     */
    function (featureConfig) {
        return featureConfig.name;
    };
    /**
     * @param {?} entityAdapter
     * @return {?}
     */
    SelectorNameService.prototype.getEntitySelectorName = /**
     * @param {?} entityAdapter
     * @return {?}
     */
    function (entityAdapter) {
        return entityAdapter.sliceName;
    };
    /**
     * @param {?} parentName
     * @param {?} selectorName
     * @return {?}
     */
    SelectorNameService.prototype.getNestedSelectorName = /**
     * @param {?} parentName
     * @param {?} selectorName
     * @return {?}
     */
    function (parentName, selectorName) {
        /** @type {?} */
        var parentSegments = this.buildSegments(parentName);
        /** @type {?} */
        var selectorNameSegments = this.buildSegments(selectorName, 'select');
        /** @type {?} */
        var segments = _.flatten([parentSegments, selectorNameSegments]);
        return _.join(segments, '.');
    };
    /**
     * @param {?} si
     * @return {?}
     */
    SelectorNameService.prototype.getResourceSelectorName = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return this.selectorIdentifierToSelectorName(si);
    };
    // Alias for getResourceSelectorName
    // Alias for getResourceSelectorName
    /**
     * @param {?} si
     * @return {?}
     */
    SelectorNameService.prototype.getSelectorName = 
    // Alias for getResourceSelectorName
    /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return this.getResourceSelectorName(si);
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    SelectorNameService.prototype.buildSegments = /**
     * @private
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    function (value, prefix) {
        if (prefix === void 0) { prefix = ''; }
        /** @type {?} */
        var camelCase = _.bind(this.inflectionService.camelCase, this);
        /** @type {?} */
        var inflections = [
            ['removePrefix', prefix],
            ['replace', / /g, ''],
            ['trim', '.'],
            ['split', '.'],
        ];
        /** @type {?} */
        var result = ((/** @type {?} */ (this.inflectionService))).inflect(value, inflections);
        return _.map(result, camelCase);
    };
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    SelectorNameService.prototype.sanitizedSelectorName = /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    function (selectorName) {
        var _this = this;
        /** @type {?} */
        var prefix = 'select';
        selectorName = this.inflectionService.removePrefix(selectorName, prefix);
        /** @type {?} */
        var camelCase = function (value) {
            return _this.inflectionService.camelCase(value);
        };
        /** @type {?} */
        var segments = _.map(_.split(selectorName, '.'), camelCase);
        return segments;
    };
    /**
     * @private
     * @param {?} si
     * @return {?}
     */
    SelectorNameService.prototype.selectorIdentifierToSelectorName = /**
     * @private
     * @param {?} si
     * @return {?}
     */
    function (si) {
        /** @type {?} */
        var featureName = this.inflectionService.camelCase(si.feature);
        /** @type {?} */
        var featureEntities = 'entities';
        /** @type {?} */
        var sliceName = this.inflectionService.camelCase(si.entityType);
        /** @type {?} */
        var selectorType = this.inflectionService.camelCase(si.selectorType);
        /** @type {?} */
        var segments = [
            featureName,
            featureEntities,
            sliceName,
            selectorType,
        ];
        if (_.has(si, 'scope')) {
            /** @type {?} */
            var scopeName = this.inflectionService.camelCase(si.scope);
            segments.push(scopeName);
        }
        return _.join(segments, '.');
    };
    SelectorNameService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SelectorNameService.ctorParameters = function () { return [
        { type: InflectionService }
    ]; };
    /** @nocollapse */ SelectorNameService.ngInjectableDef = i0.defineInjectable({ factory: function SelectorNameService_Factory() { return new SelectorNameService(i0.inject(i1.InflectionService)); }, token: SelectorNameService, providedIn: "root" });
    return SelectorNameService;
}());
export { SelectorNameService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectorNameService.prototype.inflectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItbmFtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL3NlbGVjdG9ycy9zZWxlY3Rvci1uYW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLGlCQUFpQixHQUNsQixNQUFRLFdBQVcsQ0FBQTs7O0FBTXBCO0lBSUUsNkJBQ1UsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDM0MsQ0FBQzs7Ozs7SUFFSixvREFBc0I7Ozs7SUFBdEIsVUFBdUIsYUFBYTtRQUNsQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUE7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxtREFBcUI7Ozs7SUFBckIsVUFBc0IsYUFBYTtRQUNqQyxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUE7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsbURBQXFCOzs7OztJQUFyQixVQUFzQixVQUFVLEVBQUUsWUFBWTs7WUFDeEMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDOztZQUMvQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7O1lBQ2pFLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFaEUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDOzs7OztJQUVELHFEQUF1Qjs7OztJQUF2QixVQUF3QixFQUE2QjtRQUNuRCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsb0NBQW9DOzs7Ozs7SUFDcEMsNkNBQWU7Ozs7OztJQUFmLFVBQWdCLEVBQTZCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFTywyQ0FBYTs7Ozs7O0lBQXJCLFVBQXNCLEtBQWEsRUFBRSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1COztZQUNsRCxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzs7WUFFMUQsV0FBVyxHQUNiO1lBQ0UsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO1lBQ3hCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7WUFDckIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQ2IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1NBQ2Y7O1lBRUMsTUFBTSxHQUFHLENBQUMsbUJBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUV0RSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7Ozs7OztJQUVPLG1EQUFxQjs7Ozs7SUFBN0IsVUFBOEIsWUFBb0I7UUFBbEQsaUJBV0M7O1lBVkssTUFBTSxHQUFHLFFBQVE7UUFFckIsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFBOztZQUVwRSxTQUFTLEdBQUcsVUFBQyxLQUFLO1lBQ3BCLE9BQU8sS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxDQUFDOztZQUVHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQztRQUMzRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDOzs7Ozs7SUFFTyw4REFBZ0M7Ozs7O0lBQXhDLFVBQXlDLEVBQTZCOztZQUNoRSxXQUFXLEdBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOztZQUUxQyxlQUFlLEdBQUcsVUFBVTs7WUFFNUIsU0FBUyxHQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzs7WUFFN0MsWUFBWSxHQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQzs7WUFFL0MsUUFBUSxHQUFHO1lBQ2IsV0FBVztZQUNYLGVBQWU7WUFDZixTQUFTO1lBQ1QsWUFBWTtTQUNiO1FBRUQsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTs7Z0JBQ2pCLFNBQVMsR0FDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFFNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUN6QjtRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Z0JBekZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVEMsaUJBQWlCOzs7OEJBTG5CO0NBc0dDLEFBMUZELElBMEZDO1NBdkZZLG1CQUFtQjs7Ozs7O0lBRTVCLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgSW5mbGVjdGlvblNlcnZpY2UsXG59ICAgZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3Rvck5hbWVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmZsZWN0aW9uU2VydmljZTogSW5mbGVjdGlvblNlcnZpY2UsXG4gICkge31cblxuICBnZXRGZWF0dXJlU2VsZWN0b3JOYW1lKGZlYXR1cmVDb25maWcpIHtcbiAgICByZXR1cm4gZmVhdHVyZUNvbmZpZy5uYW1lXG4gIH1cblxuICBnZXRFbnRpdHlTZWxlY3Rvck5hbWUoZW50aXR5QWRhcHRlcikge1xuICAgIHJldHVybiBlbnRpdHlBZGFwdGVyLnNsaWNlTmFtZVxuICB9XG5cbiAgZ2V0TmVzdGVkU2VsZWN0b3JOYW1lKHBhcmVudE5hbWUsIHNlbGVjdG9yTmFtZSkge1xuICAgIGxldCBwYXJlbnRTZWdtZW50cyA9IHRoaXMuYnVpbGRTZWdtZW50cyhwYXJlbnROYW1lKVxuICAgIGxldCBzZWxlY3Rvck5hbWVTZWdtZW50cyA9IHRoaXMuYnVpbGRTZWdtZW50cyhzZWxlY3Rvck5hbWUsICdzZWxlY3QnKVxuICAgIGxldCBzZWdtZW50cyA9IF8uZmxhdHRlbihbcGFyZW50U2VnbWVudHMsIHNlbGVjdG9yTmFtZVNlZ21lbnRzXSlcblxuICAgIHJldHVybiBfLmpvaW4oc2VnbWVudHMsICcuJylcbiAgfVxuXG4gIGdldFJlc291cmNlU2VsZWN0b3JOYW1lKHNpOiBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JJZGVudGlmaWVyVG9TZWxlY3Rvck5hbWUoc2kpXG4gIH1cblxuICAvLyBBbGlhcyBmb3IgZ2V0UmVzb3VyY2VTZWxlY3Rvck5hbWVcbiAgZ2V0U2VsZWN0b3JOYW1lKHNpOiBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2VTZWxlY3Rvck5hbWUoc2kpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2VnbWVudHModmFsdWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcgPSAnJyk6IHN0cmluZ1tdIHtcbiAgICBsZXQgY2FtZWxDYXNlID0gXy5iaW5kKHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlLCB0aGlzKVxuXG4gICAgbGV0IGluZmxlY3Rpb25zID0gXG4gICAgICBbXG4gICAgICAgIFsncmVtb3ZlUHJlZml4JywgcHJlZml4XSxcbiAgICAgICAgWydyZXBsYWNlJywgLyAvZywgJyddLFxuICAgICAgICBbJ3RyaW0nLCAnLiddLFxuICAgICAgICBbJ3NwbGl0JywgJy4nXSxcbiAgICAgIF1cblxuICAgIGxldCByZXN1bHQgPSAoPGFueT50aGlzLmluZmxlY3Rpb25TZXJ2aWNlKS5pbmZsZWN0KHZhbHVlLCBpbmZsZWN0aW9ucylcblxuICAgIHJldHVybiBfLm1hcChyZXN1bHQsIGNhbWVsQ2FzZSlcbiAgfVxuXG4gIHByaXZhdGUgc2FuaXRpemVkU2VsZWN0b3JOYW1lKHNlbGVjdG9yTmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGxldCBwcmVmaXggPSAnc2VsZWN0J1xuXG4gICAgc2VsZWN0b3JOYW1lID0gdGhpcy5pbmZsZWN0aW9uU2VydmljZS5yZW1vdmVQcmVmaXgoc2VsZWN0b3JOYW1lLCBwcmVmaXgpXG5cbiAgICBsZXQgY2FtZWxDYXNlID0gKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2UodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHNlZ21lbnRzID0gXy5tYXAoXy5zcGxpdChzZWxlY3Rvck5hbWUsICcuJyksIGNhbWVsQ2FzZSlcbiAgICByZXR1cm4gc2VnbWVudHNcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0b3JJZGVudGlmaWVyVG9TZWxlY3Rvck5hbWUoc2k6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIpIHtcbiAgICBsZXQgZmVhdHVyZU5hbWUgPVxuICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuZmVhdHVyZSlcblxuICAgIGxldCBmZWF0dXJlRW50aXRpZXMgPSAnZW50aXRpZXMnXG5cbiAgICBsZXQgc2xpY2VOYW1lID1cbiAgICAgIHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlKHNpLmVudGl0eVR5cGUpXG5cbiAgICBsZXQgc2VsZWN0b3JUeXBlID1cbiAgICAgIHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlKHNpLnNlbGVjdG9yVHlwZSlcblxuICAgIGxldCBzZWdtZW50cyA9IFtcbiAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgZmVhdHVyZUVudGl0aWVzLFxuICAgICAgc2xpY2VOYW1lLFxuICAgICAgc2VsZWN0b3JUeXBlLFxuICAgIF1cblxuICAgIGlmKF8uaGFzKHNpLCAnc2NvcGUnKSkge1xuICAgICAgbGV0IHNjb3BlTmFtZSA9XG4gICAgICAgIHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlKHNpLnNjb3BlKVxuXG4gICAgICBzZWdtZW50cy5wdXNoKHNjb3BlTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gXy5qb2luKHNlZ21lbnRzLCAnLicpXG4gIH1cbn1cbiJdfQ==