/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
var EntityCloner = /** @class */ (function () {
    function EntityCloner() {
    }
    /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    EntityCloner.prototype.clone = /**
     * @param {?} entity
     * @param {?=} dataService
     * @return {?}
     */
    function (entity, dataService) {
        if (dataService === void 0) { dataService = null; }
        /** @type {?} */
        var entityCtor = entity.constructor;
        return new entityCtor(this.constructorParams(entity), dataService);
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    EntityCloner.prototype.constructorParams = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var paramNames = [
            'id',
            'feature',
            'type',
            'attributes',
            'relationships',
        ];
        return (/** @type {?} */ (_.pick(entity, paramNames)));
    };
    EntityCloner.decorators = [
        { type: Injectable }
    ];
    return EntityCloner;
}());
export { EntityCloner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNsb25lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL2VudGl0eS1jbG9uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQVExQztJQUFBO0lBd0JBLENBQUM7Ozs7OztJQXRCQyw0QkFBSzs7Ozs7SUFBTCxVQUNFLE1BQWUsRUFDZixXQUFnQztRQUFoQyw0QkFBQSxFQUFBLGtCQUFnQzs7WUFFNUIsVUFBVSxHQUFTLE1BQU0sQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7Ozs7OztJQUVPLHdDQUFpQjs7Ozs7SUFBekIsVUFDRSxNQUFlOztZQUdYLFVBQVUsR0FBRztZQUNmLElBQUk7WUFDSixTQUFTO1lBQ1QsTUFBTTtZQUNOLFlBQVk7WUFDWixlQUFlO1NBQ2hCO1FBQ0QsT0FBTyxtQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUEsQ0FBQTtJQUU3RCxDQUFDOztnQkF2QkYsVUFBVTs7SUF3QlgsbUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRGF0YVNlcnZpY2UsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eUNsb25lciB7XG4gIGNsb25lKFxuICAgIGVudGl0eTogaUVudGl0eSxcbiAgICBkYXRhU2VydmljZTogaURhdGFTZXJ2aWNlID0gbnVsbCxcbiAgKTogaUVudGl0eSB7XG4gICAgbGV0IGVudGl0eUN0b3IgOiBhbnkgPSBlbnRpdHkuY29uc3RydWN0b3JcbiAgICByZXR1cm4gbmV3IGVudGl0eUN0b3IodGhpcy5jb25zdHJ1Y3RvclBhcmFtcyhlbnRpdHkpLCBkYXRhU2VydmljZSlcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3JQYXJhbXMoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICApOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMge1xuXG4gICAgbGV0IHBhcmFtTmFtZXMgPSBbXG4gICAgICAnaWQnLFxuICAgICAgJ2ZlYXR1cmUnLFxuICAgICAgJ3R5cGUnLFxuICAgICAgJ2F0dHJpYnV0ZXMnLFxuICAgICAgJ3JlbGF0aW9uc2hpcHMnLFxuICAgIF1cbiAgICByZXR1cm4gPGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcz5fLnBpY2soZW50aXR5LCBwYXJhbU5hbWVzKVxuXG4gIH1cbn1cbiJdfQ==