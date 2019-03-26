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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItbmFtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VsZWN0b3JzL3NlbGVjdG9yLW5hbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQVEsV0FBVyxDQUFBOzs7QUFTcEIsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixZQUNVLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzNDLENBQUM7Ozs7O0lBRUosc0JBQXNCLENBQUMsYUFBYTtRQUNsQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUE7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxhQUFhO1FBQ2pDLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQTtJQUNoQyxDQUFDOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsWUFBWTs7WUFDeEMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDOztZQUMvQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7O1lBQ2pFLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFaEUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLEVBQTZCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2xELENBQUM7Ozs7OztJQUdELGVBQWUsQ0FBQyxFQUE2QjtRQUMzQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN6QyxDQUFDOzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEtBQWEsRUFBRSxTQUFpQixFQUFFOztZQUNsRCxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzs7WUFFMUQsV0FBVyxHQUNiO1lBQ0UsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO1lBQ3hCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7WUFDckIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQ2IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1NBQ2Y7O1lBRUMsTUFBTSxHQUFHLENBQUMsbUJBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUV0RSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLFlBQW9COztZQUM1QyxNQUFNLEdBQUcsUUFBUTtRQUVyQixZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUE7O1lBRXBFLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxDQUFDOztZQUVHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQztRQUMzRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDOzs7Ozs7SUFFTyxnQ0FBZ0MsQ0FBQyxFQUE2Qjs7WUFDaEUsV0FBVyxHQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs7WUFFMUMsZUFBZSxHQUFHLFVBQVU7O1lBRTVCLFNBQVMsR0FDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7O1lBRTdDLFlBQVksR0FDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7O1lBRS9DLFFBQVEsR0FBRztZQUNiLFdBQVc7WUFDWCxlQUFlO1lBQ2YsU0FBUztZQUNULFlBQVk7U0FDYjtRQUVELElBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7O2dCQUNqQixTQUFTLEdBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBRTVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDekI7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7OztZQXpGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUQyxpQkFBaUI7Ozs7Ozs7O0lBWWYsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBJbmZsZWN0aW9uU2VydmljZSxcbn0gICBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yTmFtZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluZmxlY3Rpb25TZXJ2aWNlOiBJbmZsZWN0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGdldEZlYXR1cmVTZWxlY3Rvck5hbWUoZmVhdHVyZUNvbmZpZykge1xuICAgIHJldHVybiBmZWF0dXJlQ29uZmlnLm5hbWVcbiAgfVxuXG4gIGdldEVudGl0eVNlbGVjdG9yTmFtZShlbnRpdHlBZGFwdGVyKSB7XG4gICAgcmV0dXJuIGVudGl0eUFkYXB0ZXIuc2xpY2VOYW1lXG4gIH1cblxuICBnZXROZXN0ZWRTZWxlY3Rvck5hbWUocGFyZW50TmFtZSwgc2VsZWN0b3JOYW1lKSB7XG4gICAgbGV0IHBhcmVudFNlZ21lbnRzID0gdGhpcy5idWlsZFNlZ21lbnRzKHBhcmVudE5hbWUpXG4gICAgbGV0IHNlbGVjdG9yTmFtZVNlZ21lbnRzID0gdGhpcy5idWlsZFNlZ21lbnRzKHNlbGVjdG9yTmFtZSwgJ3NlbGVjdCcpXG4gICAgbGV0IHNlZ21lbnRzID0gXy5mbGF0dGVuKFtwYXJlbnRTZWdtZW50cywgc2VsZWN0b3JOYW1lU2VnbWVudHNdKVxuXG4gICAgcmV0dXJuIF8uam9pbihzZWdtZW50cywgJy4nKVxuICB9XG5cbiAgZ2V0UmVzb3VyY2VTZWxlY3Rvck5hbWUoc2k6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcklkZW50aWZpZXJUb1NlbGVjdG9yTmFtZShzaSlcbiAgfVxuXG4gIC8vIEFsaWFzIGZvciBnZXRSZXNvdXJjZVNlbGVjdG9yTmFtZVxuICBnZXRTZWxlY3Rvck5hbWUoc2k6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZVNlbGVjdG9yTmFtZShzaSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTZWdtZW50cyh2YWx1ZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyA9ICcnKTogc3RyaW5nW10ge1xuICAgIGxldCBjYW1lbENhc2UgPSBfLmJpbmQodGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2UsIHRoaXMpXG5cbiAgICBsZXQgaW5mbGVjdGlvbnMgPSBcbiAgICAgIFtcbiAgICAgICAgWydyZW1vdmVQcmVmaXgnLCBwcmVmaXhdLFxuICAgICAgICBbJ3JlcGxhY2UnLCAvIC9nLCAnJ10sXG4gICAgICAgIFsndHJpbScsICcuJ10sXG4gICAgICAgIFsnc3BsaXQnLCAnLiddLFxuICAgICAgXVxuXG4gICAgbGV0IHJlc3VsdCA9ICg8YW55PnRoaXMuaW5mbGVjdGlvblNlcnZpY2UpLmluZmxlY3QodmFsdWUsIGluZmxlY3Rpb25zKVxuXG4gICAgcmV0dXJuIF8ubWFwKHJlc3VsdCwgY2FtZWxDYXNlKVxuICB9XG5cbiAgcHJpdmF0ZSBzYW5pdGl6ZWRTZWxlY3Rvck5hbWUoc2VsZWN0b3JOYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHByZWZpeCA9ICdzZWxlY3QnXG5cbiAgICBzZWxlY3Rvck5hbWUgPSB0aGlzLmluZmxlY3Rpb25TZXJ2aWNlLnJlbW92ZVByZWZpeChzZWxlY3Rvck5hbWUsIHByZWZpeClcblxuICAgIGxldCBjYW1lbENhc2UgPSAodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmluZmxlY3Rpb25TZXJ2aWNlLmNhbWVsQ2FzZSh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgc2VnbWVudHMgPSBfLm1hcChfLnNwbGl0KHNlbGVjdG9yTmFtZSwgJy4nKSwgY2FtZWxDYXNlKVxuICAgIHJldHVybiBzZWdtZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RvcklkZW50aWZpZXJUb1NlbGVjdG9yTmFtZShzaTogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcikge1xuICAgIGxldCBmZWF0dXJlTmFtZSA9XG4gICAgICB0aGlzLmluZmxlY3Rpb25TZXJ2aWNlLmNhbWVsQ2FzZShzaS5mZWF0dXJlKVxuXG4gICAgbGV0IGZlYXR1cmVFbnRpdGllcyA9ICdlbnRpdGllcydcblxuICAgIGxldCBzbGljZU5hbWUgPVxuICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuZW50aXR5VHlwZSlcblxuICAgIGxldCBzZWxlY3RvclR5cGUgPVxuICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuc2VsZWN0b3JUeXBlKVxuXG4gICAgbGV0IHNlZ21lbnRzID0gW1xuICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICBmZWF0dXJlRW50aXRpZXMsXG4gICAgICBzbGljZU5hbWUsXG4gICAgICBzZWxlY3RvclR5cGUsXG4gICAgXVxuXG4gICAgaWYoXy5oYXMoc2ksICdzY29wZScpKSB7XG4gICAgICBsZXQgc2NvcGVOYW1lID1cbiAgICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuc2NvcGUpXG5cbiAgICAgIHNlZ21lbnRzLnB1c2goc2NvcGVOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBfLmpvaW4oc2VnbWVudHMsICcuJylcbiAgfVxufVxuIl19