/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { zip as observableZip, } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { RelationshipProvider } from './relationship-provider.service';
import * as i0 from "@angular/core";
import * as i1 from "./relationship-provider.service";
var RelationshipsProvider = /** @class */ (function () {
    function RelationshipsProvider(relationshipProvider) {
        this.relationshipProvider = relationshipProvider;
        this.relationshipTypes = [
            'resource-attributes',
            'resource-associations',
            'resource-validators',
        ];
    }
    /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    RelationshipsProvider.prototype.provide$ = /**
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity) {
        /** @type {?} */
        var provideRelationships$ = _.bind(_.partial(this.provideRelationship$, resourceConfiguration, formFieldEntity), this);
        /** @type {?} */
        var relationships = _.map(this.relationshipTypes, provideRelationships$);
        return observableZip.apply(void 0, tslib_1.__spread(relationships)).pipe(map(function (relationshipCollections) {
            return _.flatMap(relationshipCollections, 'entities');
        }));
    };
    /**
     * @private
     * @param {?} collections
     * @return {?}
     */
    RelationshipsProvider.prototype.flattenedRelationships = /**
     * @private
     * @param {?} collections
     * @return {?}
     */
    function (collections) {
        return _.flatMap((/** @type {?} */ (_.pick(collections, 'entities'))));
    };
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipType
     * @return {?}
     */
    RelationshipsProvider.prototype.provideRelationship$ = /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipType
     * @return {?}
     */
    function (resourceConfiguration, formFieldEntity, relationshipType) {
        return this.relationshipProvider.provide$(resourceConfiguration, formFieldEntity, relationshipType);
    };
    RelationshipsProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RelationshipsProvider.ctorParameters = function () { return [
        { type: RelationshipProvider }
    ]; };
    /** @nocollapse */ RelationshipsProvider.ngInjectableDef = i0.defineInjectable({ factory: function RelationshipsProvider_Factory() { return new RelationshipsProvider(i0.inject(i1.RelationshipProvider)); }, token: RelationshipsProvider, providedIn: "root" });
    return RelationshipsProvider;
}());
export { RelationshipsProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RelationshipsProvider.prototype.relationshipTypes;
    /**
     * @type {?}
     * @private
     */
    RelationshipsProvider.prototype.relationshipProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpb25zaGlwcy1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvcmVsYXRpb25zaGlwcy9yZWxhdGlvbnNoaXBzLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsR0FBRyxJQUFJLGFBQWEsR0FFckIsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQWlCLEdBQUcsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQTtBQUVuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBTzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFBOzs7QUFFdEU7SUFVRSwrQkFDVSxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVA1QyxzQkFBaUIsR0FBYTtZQUNwQyxxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtTQUN0QixDQUFBO0lBSUUsQ0FBQzs7Ozs7O0lBRUosd0NBQVE7Ozs7O0lBQVIsVUFDRSxxQkFBcUIsRUFDckIsZUFBZTs7WUFHWCxxQkFBcUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNoQyxDQUFDLENBQUMsT0FBTyxDQUNQLElBQUksQ0FBQyxvQkFBb0IsRUFDekIscUJBQXFCLEVBQ3JCLGVBQWUsQ0FDaEIsRUFDRCxJQUFJLENBQ0w7O1lBRUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO1FBRXhFLE9BQU8sYUFBYSxnQ0FBSSxhQUFhLEdBQUUsSUFBSSxDQUN6QyxHQUFHLENBQUMsVUFBQSx1QkFBdUI7WUFDekIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZELENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxzREFBc0I7Ozs7O0lBQTlCLFVBQStCLFdBQVc7UUFDeEMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFBLENBQUMsQ0FBQTtJQUN4RCxDQUFDOzs7Ozs7OztJQUVPLG9EQUFvQjs7Ozs7OztJQUE1QixVQUNFLHFCQUFxQixFQUNyQixlQUFlLEVBQ2YsZ0JBQWdCO1FBR2hCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FDdkMscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixnQkFBZ0IsQ0FDakIsQ0FBQTtJQUNILENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLG9CQUFvQjs7O2dDQWhCN0I7Q0F1RUMsQUFyREQsSUFxREM7U0FsRFkscUJBQXFCOzs7Ozs7SUFDaEMsa0RBSUM7Ozs7O0lBR0MscURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIHppcCBhcyBvYnNlcnZhYmxlWmlwLFxuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxuICBFbnRpdHlEYXRhLFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7IFJlbGF0aW9uc2hpcFByb3ZpZGVyIH0gZnJvbSAnLi9yZWxhdGlvbnNoaXAtcHJvdmlkZXIuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVsYXRpb25zaGlwc1Byb3ZpZGVyIHtcbiAgcHJpdmF0ZSByZWxhdGlvbnNoaXBUeXBlczogc3RyaW5nW10gPSBbXG4gICAgJ3Jlc291cmNlLWF0dHJpYnV0ZXMnLFxuICAgICdyZXNvdXJjZS1hc3NvY2lhdGlvbnMnLFxuICAgICdyZXNvdXJjZS12YWxpZGF0b3JzJyxcbiAgXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVsYXRpb25zaGlwUHJvdmlkZXI6IFJlbGF0aW9uc2hpcFByb3ZpZGVyLFxuICApIHt9XG5cbiAgcHJvdmlkZSQoXG4gICAgcmVzb3VyY2VDb25maWd1cmF0aW9uLFxuICAgIGZvcm1GaWVsZEVudGl0eSxcbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5W10+IHtcblxuICAgIGxldCBwcm92aWRlUmVsYXRpb25zaGlwcyQgPSBfLmJpbmQoXG4gICAgICBfLnBhcnRpYWwoXG4gICAgICAgIHRoaXMucHJvdmlkZVJlbGF0aW9uc2hpcCQsXG4gICAgICAgIHJlc291cmNlQ29uZmlndXJhdGlvbixcbiAgICAgICAgZm9ybUZpZWxkRW50aXR5XG4gICAgICApLFxuICAgICAgdGhpc1xuICAgIClcblxuICAgIGxldCByZWxhdGlvbnNoaXBzID0gXy5tYXAodGhpcy5yZWxhdGlvbnNoaXBUeXBlcywgcHJvdmlkZVJlbGF0aW9uc2hpcHMkKVxuXG4gICAgcmV0dXJuIG9ic2VydmFibGVaaXAoLi4ucmVsYXRpb25zaGlwcykucGlwZShcbiAgICAgIG1hcChyZWxhdGlvbnNoaXBDb2xsZWN0aW9ucyA9PiB7XG4gICAgICAgIHJldHVybiBfLmZsYXRNYXAocmVsYXRpb25zaGlwQ29sbGVjdGlvbnMsICdlbnRpdGllcycpXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGZsYXR0ZW5lZFJlbGF0aW9uc2hpcHMoY29sbGVjdGlvbnMpOiBpRW50aXR5W10ge1xuICAgIHJldHVybiBfLmZsYXRNYXAoPGFueT5fLnBpY2soY29sbGVjdGlvbnMsICdlbnRpdGllcycpKVxuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUmVsYXRpb25zaGlwJChcbiAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb24sXG4gICAgZm9ybUZpZWxkRW50aXR5LFxuICAgIHJlbGF0aW9uc2hpcFR5cGUsXG4gICk6IE9ic2VydmFibGU8RW50aXR5RGF0YT4ge1xuXG4gICAgcmV0dXJuIHRoaXMucmVsYXRpb25zaGlwUHJvdmlkZXIucHJvdmlkZSQoXG4gICAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb24sXG4gICAgICBmb3JtRmllbGRFbnRpdHksXG4gICAgICByZWxhdGlvbnNoaXBUeXBlLFxuICAgIClcbiAgfVxufVxuIl19