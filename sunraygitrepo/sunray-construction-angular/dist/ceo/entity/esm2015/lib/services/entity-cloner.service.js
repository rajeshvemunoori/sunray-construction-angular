/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
export class EntityCloner {
    /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    clone(entity, dataService = null) {
        /** @type {?} */
        let entityCtor = entity.constructor;
        return new entityCtor(this.constructorParams(entity), dataService);
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    constructorParams(entity) {
        /** @type {?} */
        let paramNames = [
            'id',
            'feature',
            'type',
            'attributes',
            'relationships',
        ];
        return (/** @type {?} */ (_.pick(entity, paramNames)));
    }
}
EntityCloner.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNsb25lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZW50aXR5LWNsb25lci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBUzFDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFDdkIsS0FBSyxDQUNILE1BQWUsRUFDZixjQUE0QixJQUFJOztZQUU1QixVQUFVLEdBQVMsTUFBTSxDQUFDLFdBQVc7UUFDekMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDcEUsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQ3ZCLE1BQWU7O1lBR1gsVUFBVSxHQUFHO1lBQ2YsSUFBSTtZQUNKLFNBQVM7WUFDVCxNQUFNO1lBQ04sWUFBWTtZQUNaLGVBQWU7U0FDaEI7UUFDRCxPQUFPLG1CQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBQSxDQUFBO0lBRTdELENBQUM7OztZQXZCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRGF0YVNlcnZpY2UsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eUNsb25lciB7XG4gIGNsb25lKFxuICAgIGVudGl0eTogaUVudGl0eSxcbiAgICBkYXRhU2VydmljZTogaURhdGFTZXJ2aWNlID0gbnVsbCxcbiAgKTogaUVudGl0eSB7XG4gICAgbGV0IGVudGl0eUN0b3IgOiBhbnkgPSBlbnRpdHkuY29uc3RydWN0b3JcbiAgICByZXR1cm4gbmV3IGVudGl0eUN0b3IodGhpcy5jb25zdHJ1Y3RvclBhcmFtcyhlbnRpdHkpLCBkYXRhU2VydmljZSlcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3JQYXJhbXMoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICApOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMge1xuXG4gICAgbGV0IHBhcmFtTmFtZXMgPSBbXG4gICAgICAnaWQnLFxuICAgICAgJ2ZlYXR1cmUnLFxuICAgICAgJ3R5cGUnLFxuICAgICAgJ2F0dHJpYnV0ZXMnLFxuICAgICAgJ3JlbGF0aW9uc2hpcHMnLFxuICAgIF1cbiAgICByZXR1cm4gPGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcz5fLnBpY2soZW50aXR5LCBwYXJhbU5hbWVzKVxuXG4gIH1cbn1cbiJdfQ==