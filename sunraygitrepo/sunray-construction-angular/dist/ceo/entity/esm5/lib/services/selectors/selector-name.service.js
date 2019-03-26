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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItbmFtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VsZWN0b3JzL3NlbGVjdG9yLW5hbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQVEsV0FBVyxDQUFBOzs7QUFNcEI7SUFJRSw2QkFDVSxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUMzQyxDQUFDOzs7OztJQUVKLG9EQUFzQjs7OztJQUF0QixVQUF1QixhQUFhO1FBQ2xDLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVELG1EQUFxQjs7OztJQUFyQixVQUFzQixhQUFhO1FBQ2pDLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQTtJQUNoQyxDQUFDOzs7Ozs7SUFFRCxtREFBcUI7Ozs7O0lBQXJCLFVBQXNCLFVBQVUsRUFBRSxZQUFZOztZQUN4QyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7O1lBQy9DLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQzs7WUFDakUsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUVoRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7Ozs7O0lBRUQscURBQXVCOzs7O0lBQXZCLFVBQXdCLEVBQTZCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxvQ0FBb0M7Ozs7OztJQUNwQyw2Q0FBZTs7Ozs7O0lBQWYsVUFBZ0IsRUFBNkI7UUFDM0MsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7OztJQUVPLDJDQUFhOzs7Ozs7SUFBckIsVUFBc0IsS0FBYSxFQUFFLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7O1lBQ2xELFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDOztZQUUxRCxXQUFXLEdBQ2I7WUFDRSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7WUFDeEIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNyQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7WUFDYixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDZjs7WUFFQyxNQUFNLEdBQUcsQ0FBQyxtQkFBSyxJQUFJLENBQUMsaUJBQWlCLEVBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO1FBRXRFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDakMsQ0FBQzs7Ozs7O0lBRU8sbURBQXFCOzs7OztJQUE3QixVQUE4QixZQUFvQjtRQUFsRCxpQkFXQzs7WUFWSyxNQUFNLEdBQUcsUUFBUTtRQUVyQixZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUE7O1lBRXBFLFNBQVMsR0FBRyxVQUFDLEtBQUs7WUFDcEIsT0FBTyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hELENBQUM7O1lBRUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDO1FBQzNELE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7Ozs7OztJQUVPLDhEQUFnQzs7Ozs7SUFBeEMsVUFBeUMsRUFBNkI7O1lBQ2hFLFdBQVcsR0FDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7O1lBRTFDLGVBQWUsR0FBRyxVQUFVOztZQUU1QixTQUFTLEdBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOztZQUU3QyxZQUFZLEdBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDOztZQUUvQyxRQUFRLEdBQUc7WUFDYixXQUFXO1lBQ1gsZUFBZTtZQUNmLFNBQVM7WUFDVCxZQUFZO1NBQ2I7UUFFRCxJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFOztnQkFDakIsU0FBUyxHQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUU1QyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ3pCO1FBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDOztnQkF6RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUQyxpQkFBaUI7Ozs4QkFMbkI7Q0FzR0MsQUExRkQsSUEwRkM7U0F2RlksbUJBQW1COzs7Ozs7SUFFNUIsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBJbmZsZWN0aW9uU2VydmljZSxcbn0gICBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yTmFtZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluZmxlY3Rpb25TZXJ2aWNlOiBJbmZsZWN0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGdldEZlYXR1cmVTZWxlY3Rvck5hbWUoZmVhdHVyZUNvbmZpZykge1xuICAgIHJldHVybiBmZWF0dXJlQ29uZmlnLm5hbWVcbiAgfVxuXG4gIGdldEVudGl0eVNlbGVjdG9yTmFtZShlbnRpdHlBZGFwdGVyKSB7XG4gICAgcmV0dXJuIGVudGl0eUFkYXB0ZXIuc2xpY2VOYW1lXG4gIH1cblxuICBnZXROZXN0ZWRTZWxlY3Rvck5hbWUocGFyZW50TmFtZSwgc2VsZWN0b3JOYW1lKSB7XG4gICAgbGV0IHBhcmVudFNlZ21lbnRzID0gdGhpcy5idWlsZFNlZ21lbnRzKHBhcmVudE5hbWUpXG4gICAgbGV0IHNlbGVjdG9yTmFtZVNlZ21lbnRzID0gdGhpcy5idWlsZFNlZ21lbnRzKHNlbGVjdG9yTmFtZSwgJ3NlbGVjdCcpXG4gICAgbGV0IHNlZ21lbnRzID0gXy5mbGF0dGVuKFtwYXJlbnRTZWdtZW50cywgc2VsZWN0b3JOYW1lU2VnbWVudHNdKVxuXG4gICAgcmV0dXJuIF8uam9pbihzZWdtZW50cywgJy4nKVxuICB9XG5cbiAgZ2V0UmVzb3VyY2VTZWxlY3Rvck5hbWUoc2k6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcklkZW50aWZpZXJUb1NlbGVjdG9yTmFtZShzaSlcbiAgfVxuXG4gIC8vIEFsaWFzIGZvciBnZXRSZXNvdXJjZVNlbGVjdG9yTmFtZVxuICBnZXRTZWxlY3Rvck5hbWUoc2k6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZVNlbGVjdG9yTmFtZShzaSlcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTZWdtZW50cyh2YWx1ZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyA9ICcnKTogc3RyaW5nW10ge1xuICAgIGxldCBjYW1lbENhc2UgPSBfLmJpbmQodGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2UsIHRoaXMpXG5cbiAgICBsZXQgaW5mbGVjdGlvbnMgPSBcbiAgICAgIFtcbiAgICAgICAgWydyZW1vdmVQcmVmaXgnLCBwcmVmaXhdLFxuICAgICAgICBbJ3JlcGxhY2UnLCAvIC9nLCAnJ10sXG4gICAgICAgIFsndHJpbScsICcuJ10sXG4gICAgICAgIFsnc3BsaXQnLCAnLiddLFxuICAgICAgXVxuXG4gICAgbGV0IHJlc3VsdCA9ICg8YW55PnRoaXMuaW5mbGVjdGlvblNlcnZpY2UpLmluZmxlY3QodmFsdWUsIGluZmxlY3Rpb25zKVxuXG4gICAgcmV0dXJuIF8ubWFwKHJlc3VsdCwgY2FtZWxDYXNlKVxuICB9XG5cbiAgcHJpdmF0ZSBzYW5pdGl6ZWRTZWxlY3Rvck5hbWUoc2VsZWN0b3JOYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHByZWZpeCA9ICdzZWxlY3QnXG5cbiAgICBzZWxlY3Rvck5hbWUgPSB0aGlzLmluZmxlY3Rpb25TZXJ2aWNlLnJlbW92ZVByZWZpeChzZWxlY3Rvck5hbWUsIHByZWZpeClcblxuICAgIGxldCBjYW1lbENhc2UgPSAodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmluZmxlY3Rpb25TZXJ2aWNlLmNhbWVsQ2FzZSh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgc2VnbWVudHMgPSBfLm1hcChfLnNwbGl0KHNlbGVjdG9yTmFtZSwgJy4nKSwgY2FtZWxDYXNlKVxuICAgIHJldHVybiBzZWdtZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RvcklkZW50aWZpZXJUb1NlbGVjdG9yTmFtZShzaTogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcikge1xuICAgIGxldCBmZWF0dXJlTmFtZSA9XG4gICAgICB0aGlzLmluZmxlY3Rpb25TZXJ2aWNlLmNhbWVsQ2FzZShzaS5mZWF0dXJlKVxuXG4gICAgbGV0IGZlYXR1cmVFbnRpdGllcyA9ICdlbnRpdGllcydcblxuICAgIGxldCBzbGljZU5hbWUgPVxuICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuZW50aXR5VHlwZSlcblxuICAgIGxldCBzZWxlY3RvclR5cGUgPVxuICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuc2VsZWN0b3JUeXBlKVxuXG4gICAgbGV0IHNlZ21lbnRzID0gW1xuICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICBmZWF0dXJlRW50aXRpZXMsXG4gICAgICBzbGljZU5hbWUsXG4gICAgICBzZWxlY3RvclR5cGUsXG4gICAgXVxuXG4gICAgaWYoXy5oYXMoc2ksICdzY29wZScpKSB7XG4gICAgICBsZXQgc2NvcGVOYW1lID1cbiAgICAgICAgdGhpcy5pbmZsZWN0aW9uU2VydmljZS5jYW1lbENhc2Uoc2kuc2NvcGUpXG5cbiAgICAgIHNlZ21lbnRzLnB1c2goc2NvcGVOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBfLmpvaW4oc2VnbWVudHMsICcuJylcbiAgfVxufVxuIl19