/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { InflectionService, } from '@ceo/core';
import * as i0 from "@angular/core";
import * as i1 from "@ceo/core";
export class SelectorNameService {
    /**
     * @param {?} inflectionService
     */
    constructor(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} featureConfig
     * @return {?}
     */
    getFeatureSelectorName(featureConfig) {
        return featureConfig.name;
    }
    /**
     * @param {?} entityAdapter
     * @return {?}
     */
    getEntitySelectorName(entityAdapter) {
        return entityAdapter.sliceName;
    }
    /**
     * @param {?} parentName
     * @param {?} selectorName
     * @return {?}
     */
    getNestedSelectorName(parentName, selectorName) {
        /** @type {?} */
        let parentSegments = this.buildSegments(parentName);
        /** @type {?} */
        let selectorNameSegments = this.buildSegments(selectorName, 'select');
        /** @type {?} */
        let segments = _.flatten([parentSegments, selectorNameSegments]);
        return _.join(segments, '.');
    }
    /**
     * @param {?} si
     * @return {?}
     */
    getResourceSelectorName(si) {
        return this.selectorIdentifierToSelectorName(si);
    }
    // Alias for getResourceSelectorName
    /**
     * @param {?} si
     * @return {?}
     */
    getSelectorName(si) {
        return this.getResourceSelectorName(si);
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    buildSegments(value, prefix = '') {
        /** @type {?} */
        let camelCase = _.bind(this.inflectionService.camelCase, this);
        /** @type {?} */
        let inflections = [
            ['removePrefix', prefix],
            ['replace', / /g, ''],
            ['trim', '.'],
            ['split', '.'],
        ];
        /** @type {?} */
        let result = ((/** @type {?} */ (this.inflectionService))).inflect(value, inflections);
        return _.map(result, camelCase);
    }
    /**
     * @private
     * @param {?} selectorName
     * @return {?}
     */
    sanitizedSelectorName(selectorName) {
        /** @type {?} */
        let prefix = 'select';
        selectorName = this.inflectionService.removePrefix(selectorName, prefix);
        /** @type {?} */
        let camelCase = (value) => {
            return this.inflectionService.camelCase(value);
        };
        /** @type {?} */
        let segments = _.map(_.split(selectorName, '.'), camelCase);
        return segments;
    }
    /**
     * @private
     * @param {?} si
     * @return {?}
     */
    selectorIdentifierToSelectorName(si) {
        /** @type {?} */
        let featureName = this.inflectionService.camelCase(si.feature);
        /** @type {?} */
        let featureEntities = 'entities';
        /** @type {?} */
        let sliceName = this.inflectionService.camelCase(si.entityType);
        /** @type {?} */
        let selectorType = this.inflectionService.camelCase(si.selectorType);
        /** @type {?} */
        let segments = [
            featureName,
            featureEntities,
            sliceName,
            selectorType,
        ];
        if (_.has(si, 'scope')) {
            /** @type {?} */
            let scopeName = this.inflectionService.camelCase(si.scope);
            segments.push(scopeName);
        }
        return _.join(segments, '.');
    }
}
SelectorNameService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SelectorNameService.ctorParameters = () => [
    { type: InflectionService }
];
/** @nocollapse */ SelectorNameService.ngInjectableDef = i0.defineInjectable({ factory: function SelectorNameService_Factory() { return new SelectorNameService(i0.inject(i1.InflectionService)); }, token: SelectorNameService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectorNameService.prototype.inflectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItbmFtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL3NlbGVjdG9ycy9zZWxlY3Rvci1uYW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLGlCQUFpQixHQUNsQixNQUFRLFdBQVcsQ0FBQTs7O0FBU3BCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsWUFDVSxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUMzQyxDQUFDOzs7OztJQUVKLHNCQUFzQixDQUFDLGFBQWE7UUFDbEMsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFBO0lBQzNCLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsYUFBYTtRQUNqQyxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUE7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQscUJBQXFCLENBQUMsVUFBVSxFQUFFLFlBQVk7O1lBQ3hDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzs7WUFDL0Msb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDOztZQUNqRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRWhFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxFQUE2QjtRQUNuRCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNsRCxDQUFDOzs7Ozs7SUFHRCxlQUFlLENBQUMsRUFBNkI7UUFDM0MsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxLQUFhLEVBQUUsU0FBaUIsRUFBRTs7WUFDbEQsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7O1lBRTFELFdBQVcsR0FDYjtZQUNFLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztZQUN4QixDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztZQUNiLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztTQUNmOztZQUVDLE1BQU0sR0FBRyxDQUFDLG1CQUFLLElBQUksQ0FBQyxpQkFBaUIsRUFBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7UUFFdEUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUNqQyxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxZQUFvQjs7WUFDNUMsTUFBTSxHQUFHLFFBQVE7UUFFckIsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFBOztZQUVwRSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsQ0FBQzs7WUFFRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDM0QsT0FBTyxRQUFRLENBQUE7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sZ0NBQWdDLENBQUMsRUFBNkI7O1lBQ2hFLFdBQVcsR0FDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7O1lBRTFDLGVBQWUsR0FBRyxVQUFVOztZQUU1QixTQUFTLEdBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOztZQUU3QyxZQUFZLEdBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDOztZQUUvQyxRQUFRLEdBQUc7WUFDYixXQUFXO1lBQ1gsZUFBZTtZQUNmLFNBQVM7WUFDVCxZQUFZO1NBQ2I7UUFFRCxJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFOztnQkFDakIsU0FBUyxHQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUU1QyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ3pCO1FBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDOzs7WUF6RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVEMsaUJBQWlCOzs7Ozs7OztJQVlmLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgSW5mbGVjdGlvblNlcnZpY2UsXG59ICAgZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3Rvck5hbWVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmZsZWN0aW9uU2VydmljZTogSW5mbGVjdGlvblNlcnZpY2UsXG4gICkge31cblxuICBnZXRGZWF0dXJlU2VsZWN0b3JOYW1lKGZlYXR1cmVDb25maWcpIHtcbiAgICByZXR1cm4gZmVhdHVyZUNvbmZpZy5uYW1lXG4gIH1cblxuICBnZXRFbnRpdHlTZWxlY3Rvck5hbWUoZW50aXR5QWRhcHRlcikge1xuICAgIHJldHVybiBlbnRpdHlBZGFwdGVyLnNsaWNlTmFtZVxuICB9XG5cbiAgZ2V0TmVzdGVkU2VsZWN0b3JOYW1lKHBhcmVudE5hbWUsIHNlbGVjdG9yTmFtZSkge1xuICAgIGxldCBwYXJlbnRTZWdtZW50cyA9IHRoaXMuYnVpbGRTZWdtZW50cyhwYXJlbnROYW1lKVxuICAgIGxldCBzZWxlY3Rvck5hbWVTZWdtZW50cyA9IHRoaXMuYnVpbGRTZWdtZW50cyhzZWxlY3Rvck5hbWUsICdzZWxlY3QnKVxuICAgIGxldCBzZWdtZW50cyA9IF8uZmxhdHRlbihbcGFyZW50U2VnbWVudHMsIHNlbGVjdG9yTmFtZVNlZ21lbnRzXSlcblxuICAgIHJldHVybiBfLmpvaW4oc2VnbWVudHMsICcuJylcbiAgfVxuXG4gIGdldFJlc291cmNlU2VsZWN0b3JOYW1lKHNpOiBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JJZGVudGlmaWVyVG9TZWxlY3Rvck5hbWUoc2kpXG4gIH1cblxuICAvLyBBbGlhcyBmb3IgZ2V0UmVzb3VyY2VTZWxlY3Rvck5hbWVcbiAgZ2V0U2VsZWN0b3JOYW1lKHNpOiBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2VTZWxlY3Rvck5hbWUoc2kpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU2VnbWVudHModmFsdWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcgPSAnJyk6IHN0cmluZ1tdIHtcbiAgICBsZXQgY2FtZWxDYXNlID0gXy5iaW5kKHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlLCB0aGlzKVxuXG4gICAgbGV0IGluZmxlY3Rpb25zID0gXG4gICAgICBbXG4gICAgICAgIFsncmVtb3ZlUHJlZml4JywgcHJlZml4XSxcbiAgICAgICAgWydyZXBsYWNlJywgLyAvZywgJyddLFxuICAgICAgICBbJ3RyaW0nLCAnLiddLFxuICAgICAgICBbJ3NwbGl0JywgJy4nXSxcbiAgICAgIF1cblxuICAgIGxldCByZXN1bHQgPSAoPGFueT50aGlzLmluZmxlY3Rpb25TZXJ2aWNlKS5pbmZsZWN0KHZhbHVlLCBpbmZsZWN0aW9ucylcblxuICAgIHJldHVybiBfLm1hcChyZXN1bHQsIGNhbWVsQ2FzZSlcbiAgfVxuXG4gIHByaXZhdGUgc2FuaXRpemVkU2VsZWN0b3JOYW1lKHNlbGVjdG9yTmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGxldCBwcmVmaXggPSAnc2VsZWN0J1xuXG4gICAgc2VsZWN0b3JOYW1lID0gdGhpcy5pbmZsZWN0aW9uU2VydmljZS5yZW1vdmVQcmVmaXgoc2VsZWN0b3JOYW1lLCBwcmVmaXgpXG5cbiAgICBsZXQgY2FtZWxDYXNlID0gKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2UodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHNlZ21lbnRzID0gXy5tYXAoXy5zcGxpdChzZWxlY3Rvck5hbWUsICcuJyksIGNhbWVsQ2FzZSlcbiAgICByZXR1cm4gc2VnbWVudHNcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0b3JJZGVudGlmaWVyVG9TZWxlY3Rvck5hbWUoc2k6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIpIHtcbiAgICBsZXQgZmVhdHVyZU5hbWUgPVxuICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuZmVhdHVyZSlcblxuICAgIGxldCBmZWF0dXJlRW50aXRpZXMgPSAnZW50aXRpZXMnXG5cbiAgICBsZXQgc2xpY2VOYW1lID1cbiAgICAgIHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlKHNpLmVudGl0eVR5cGUpXG5cbiAgICBsZXQgc2VsZWN0b3JUeXBlID1cbiAgICAgIHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlKHNpLnNlbGVjdG9yVHlwZSlcblxuICAgIGxldCBzZWdtZW50cyA9IFtcbiAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgZmVhdHVyZUVudGl0aWVzLFxuICAgICAgc2xpY2VOYW1lLFxuICAgICAgc2VsZWN0b3JUeXBlLFxuICAgIF1cblxuICAgIGlmKF8uaGFzKHNpLCAnc2NvcGUnKSkge1xuICAgICAgbGV0IHNjb3BlTmFtZSA9XG4gICAgICAgIHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlKHNpLnNjb3BlKVxuXG4gICAgICBzZWdtZW50cy5wdXNoKHNjb3BlTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gXy5qb2luKHNlZ21lbnRzLCAnLicpXG4gIH1cbn1cbiJdfQ==