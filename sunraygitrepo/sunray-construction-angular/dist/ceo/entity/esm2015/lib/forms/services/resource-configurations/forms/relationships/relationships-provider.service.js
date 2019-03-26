/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { zip as observableZip, } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { RelationshipProvider } from './relationship-provider.service';
import * as i0 from "@angular/core";
import * as i1 from "./relationship-provider.service";
export class RelationshipsProvider {
    /**
     * @param {?} relationshipProvider
     */
    constructor(relationshipProvider) {
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
    provide$(resourceConfiguration, formFieldEntity) {
        /** @type {?} */
        let provideRelationships$ = _.bind(_.partial(this.provideRelationship$, resourceConfiguration, formFieldEntity), this);
        /** @type {?} */
        let relationships = _.map(this.relationshipTypes, provideRelationships$);
        return observableZip(...relationships).pipe(map(relationshipCollections => {
            return _.flatMap(relationshipCollections, 'entities');
        }));
    }
    /**
     * @private
     * @param {?} collections
     * @return {?}
     */
    flattenedRelationships(collections) {
        return _.flatMap((/** @type {?} */ (_.pick(collections, 'entities'))));
    }
    /**
     * @private
     * @param {?} resourceConfiguration
     * @param {?} formFieldEntity
     * @param {?} relationshipType
     * @return {?}
     */
    provideRelationship$(resourceConfiguration, formFieldEntity, relationshipType) {
        return this.relationshipProvider.provide$(resourceConfiguration, formFieldEntity, relationshipType);
    }
}
RelationshipsProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RelationshipsProvider.ctorParameters = () => [
    { type: RelationshipProvider }
];
/** @nocollapse */ RelationshipsProvider.ngInjectableDef = i0.defineInjectable({ factory: function RelationshipsProvider_Factory() { return new RelationshipsProvider(i0.inject(i1.RelationshipProvider)); }, token: RelationshipsProvider, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpb25zaGlwcy1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvc2VydmljZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbnMvZm9ybXMvcmVsYXRpb25zaGlwcy9yZWxhdGlvbnNoaXBzLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxHQUFHLElBQUksYUFBYSxHQUVyQixNQUFNLE1BQU0sQ0FBQTtBQUViLE9BQU8sRUFBaUIsR0FBRyxFQUFrQixNQUFNLGdCQUFnQixDQUFBO0FBRW5FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFPMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUE7OztBQUt0RSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBT2hDLFlBQ1Usb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFQNUMsc0JBQWlCLEdBQWE7WUFDcEMscUJBQXFCO1lBQ3JCLHVCQUF1QjtZQUN2QixxQkFBcUI7U0FDdEIsQ0FBQTtJQUlFLENBQUM7Ozs7OztJQUVKLFFBQVEsQ0FDTixxQkFBcUIsRUFDckIsZUFBZTs7WUFHWCxxQkFBcUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNoQyxDQUFDLENBQUMsT0FBTyxDQUNQLElBQUksQ0FBQyxvQkFBb0IsRUFDekIscUJBQXFCLEVBQ3JCLGVBQWUsQ0FDaEIsRUFDRCxJQUFJLENBQ0w7O1lBRUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO1FBRXhFLE9BQU8sYUFBYSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDdkQsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLHNCQUFzQixDQUFDLFdBQVc7UUFDeEMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFBLENBQUMsQ0FBQTtJQUN4RCxDQUFDOzs7Ozs7OztJQUVPLG9CQUFvQixDQUMxQixxQkFBcUIsRUFDckIsZUFBZSxFQUNmLGdCQUFnQjtRQUdoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQ3ZDLHFCQUFxQixFQUNyQixlQUFlLEVBQ2YsZ0JBQWdCLENBQ2pCLENBQUE7SUFDSCxDQUFDOzs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsb0JBQW9COzs7Ozs7OztJQU0zQixrREFJQzs7Ozs7SUFHQyxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgemlwIGFzIG9ic2VydmFibGVaaXAsXG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IGZpcnN0LCBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG4gIEVudGl0eURhdGEsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2VudGl0eS9pbmRleCdcblxuaW1wb3J0IHsgUmVsYXRpb25zaGlwUHJvdmlkZXIgfSBmcm9tICcuL3JlbGF0aW9uc2hpcC1wcm92aWRlci5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWxhdGlvbnNoaXBzUHJvdmlkZXIge1xuICBwcml2YXRlIHJlbGF0aW9uc2hpcFR5cGVzOiBzdHJpbmdbXSA9IFtcbiAgICAncmVzb3VyY2UtYXR0cmlidXRlcycsXG4gICAgJ3Jlc291cmNlLWFzc29jaWF0aW9ucycsXG4gICAgJ3Jlc291cmNlLXZhbGlkYXRvcnMnLFxuICBdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWxhdGlvbnNoaXBQcm92aWRlcjogUmVsYXRpb25zaGlwUHJvdmlkZXIsXG4gICkge31cblxuICBwcm92aWRlJChcbiAgICByZXNvdXJjZUNvbmZpZ3VyYXRpb24sXG4gICAgZm9ybUZpZWxkRW50aXR5LFxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHlbXT4ge1xuXG4gICAgbGV0IHByb3ZpZGVSZWxhdGlvbnNoaXBzJCA9IF8uYmluZChcbiAgICAgIF8ucGFydGlhbChcbiAgICAgICAgdGhpcy5wcm92aWRlUmVsYXRpb25zaGlwJCxcbiAgICAgICAgcmVzb3VyY2VDb25maWd1cmF0aW9uLFxuICAgICAgICBmb3JtRmllbGRFbnRpdHlcbiAgICAgICksXG4gICAgICB0aGlzXG4gICAgKVxuXG4gICAgbGV0IHJlbGF0aW9uc2hpcHMgPSBfLm1hcCh0aGlzLnJlbGF0aW9uc2hpcFR5cGVzLCBwcm92aWRlUmVsYXRpb25zaGlwcyQpXG5cbiAgICByZXR1cm4gb2JzZXJ2YWJsZVppcCguLi5yZWxhdGlvbnNoaXBzKS5waXBlKFxuICAgICAgbWFwKHJlbGF0aW9uc2hpcENvbGxlY3Rpb25zID0+IHtcbiAgICAgICAgcmV0dXJuIF8uZmxhdE1hcChyZWxhdGlvbnNoaXBDb2xsZWN0aW9ucywgJ2VudGl0aWVzJylcbiAgICAgIH0pLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZmxhdHRlbmVkUmVsYXRpb25zaGlwcyhjb2xsZWN0aW9ucyk6IGlFbnRpdHlbXSB7XG4gICAgcmV0dXJuIF8uZmxhdE1hcCg8YW55Pl8ucGljayhjb2xsZWN0aW9ucywgJ2VudGl0aWVzJykpXG4gIH1cblxuICBwcml2YXRlIHByb3ZpZGVSZWxhdGlvbnNoaXAkKFxuICAgIHJlc291cmNlQ29uZmlndXJhdGlvbixcbiAgICBmb3JtRmllbGRFbnRpdHksXG4gICAgcmVsYXRpb25zaGlwVHlwZSxcbiAgKTogT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPiB7XG5cbiAgICByZXR1cm4gdGhpcy5yZWxhdGlvbnNoaXBQcm92aWRlci5wcm92aWRlJChcbiAgICAgIHJlc291cmNlQ29uZmlndXJhdGlvbixcbiAgICAgIGZvcm1GaWVsZEVudGl0eSxcbiAgICAgIHJlbGF0aW9uc2hpcFR5cGUsXG4gICAgKVxuICB9XG59XG4iXX0=