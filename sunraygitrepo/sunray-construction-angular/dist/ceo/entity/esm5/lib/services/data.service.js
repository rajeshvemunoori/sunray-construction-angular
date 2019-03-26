/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { of } from 'rxjs';
import { map, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityActions, JsonApiEntity, EntityCollection, } from '../classes/index';
import { EntitySelectorTypes, } from '../interfaces/index';
import { EntityCloner } from './entity-cloner.service';
import { EntitySelectorProvider } from './selectors/index';
import { EntityRelationshipProvider } from './entity-relationship-provider.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./selectors/selector-provider.service";
import * as i3 from "./entity-relationship-provider.service";
import * as i4 from "./entity-cloner.service";
var DataService = /** @class */ (function () {
    function DataService(store, selectorProvider, entityRelationshipProvider, entityCloner) {
        this.store = store;
        this.selectorProvider = selectorProvider;
        this.entityRelationshipProvider = entityRelationshipProvider;
        this.entityCloner = entityCloner;
        this.defaultOpts = {
            syncWithApi: true,
            selectorOpts: {
                selectorType: (/** @type {?} */ (EntitySelectorTypes.All))
            }
        };
    }
    /**
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.relationship$ = /**
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    function (entity, relationshipIdentifier, opts) {
        if (opts === void 0) { opts = {}; }
        return this.entityRelationshipProvider.provide$(this, entity, relationshipIdentifier, opts);
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.create$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType = EntityActions.Add;
        return this.executeRequest$(ri, opts, actionType);
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.delete$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType = EntityActions.Delete;
        return this.executeRequest$(ri, opts, actionType);
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.get$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType = EntityActions.Load;
        return this.executeRequest$(ri, opts, actionType);
    };
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.update$ = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var actionType = EntityActions.Update;
        return this.executeRequest$(ri, opts, actionType);
    };
    // TODO: deprecate this method
    // TODO: deprecate this method
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.get = 
    // TODO: deprecate this method
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        return this.get$(ri, opts);
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @param {?=} actionType
     * @return {?}
     */
    DataService.prototype.executeRequest$ = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @param {?=} actionType
     * @return {?}
     */
    function (ri, opts, actionType) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        opts = _.defaults(opts, this.defaultOpts);
        if (this.shouldDispatch(ri, opts)) {
            /** @type {?} */
            var sliceName = this.getSliceName(ri);
            /** @type {?} */
            var action = new actionType(sliceName, ri);
            this.store.dispatch(action);
        }
        /** @type {?} */
        var selector = this.getSelector(ri, opts);
        if (selector) {
            return this.storeData$(selector, opts).pipe(map(function (data) { return _this.decoratedData(data); }));
        }
        else {
            return this.noData$(ri, opts);
        }
    };
    /**
     * @private
     * @param {?} selector
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.storeData$ = /**
     * @private
     * @param {?} selector
     * @param {?=} opts
     * @return {?}
     */
    function (selector, opts) {
        if (opts === void 0) { opts = {}; }
        return this.store.select(selector);
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    DataService.prototype.decoratedData = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var dataService = this;
        /** @type {?} */
        var decorateEntity = function (entity) {
            console.log("hi data");
            return _this.entityCloner.clone(entity, _this);
        };
        if (data) {
            if (EntityCollection.prototype.isPrototypeOf(data)) {
                data.map(decorateEntity);
            }
            if (JsonApiEntity.prototype.isPrototypeOf(data)) {
                decorateEntity((/** @type {?} */ (data)));
            }
        }
        return (/** @type {?} */ (data));
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.getSelector = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        return this.selectorProvider.provide(ri, opts.selectorOpts);
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.shouldDispatch = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        return opts.syncWithApi;
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    DataService.prototype.getSliceName = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.join([ri.feature, 'entities', ri.type], '.');
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    DataService.prototype.noData$ = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        return of([]);
    };
    DataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: Store },
        { type: EntitySelectorProvider },
        { type: EntityRelationshipProvider },
        { type: EntityCloner }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(i1.Store), i0.inject(i2.SelectorProvider), i0.inject(i3.EntityRelationshipProvider), i0.inject(i4.EntityCloner)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
export { DataService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.defaultOpts;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.selectorProvider;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.entityRelationshipProvider;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.entityCloner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRXJDLE9BQU8sRUFDTCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQWtCLE1BQU0sYUFBYSxDQUFBO0FBRW5ELE9BQU8sRUFDTCxhQUFhLEVBQ2IsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLGtCQUFrQixDQUFBO0FBRXpCLE9BQU8sRUFRTCxtQkFBbUIsR0FFcEIsTUFBTSxxQkFBcUIsQ0FBQTtBQUU1QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQW9CLHlCQUF5QixDQUFBO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFVLG1CQUFtQixDQUFBO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFBOzs7Ozs7QUFFbkY7SUFXRSxxQkFDVSxLQUFpQixFQUNqQixnQkFBd0MsRUFDeEMsMEJBQXNELEVBQ3RELFlBQTBCO1FBSDFCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBWDVCLGdCQUFXLEdBQXFCO1lBQ3RDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFlBQVksRUFBRTtnQkFDWixZQUFZLEVBQUUsbUJBQTRCLG1CQUFtQixDQUFDLEdBQUcsRUFBQTthQUNsRTtTQUNGLENBQUE7SUFPRyxDQUFDOzs7Ozs7O0lBRUwsbUNBQWE7Ozs7OztJQUFiLFVBQ0UsTUFBZSxFQUNmLHNCQUFvRCxFQUNwRCxJQUEyQjtRQUEzQixxQkFBQSxFQUFBLFNBQTJCO1FBRTNCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FDN0MsSUFBSSxFQUNKLE1BQU0sRUFDTixzQkFBc0IsRUFDdEIsSUFBSSxDQUNMLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFRCw2QkFBTzs7Ozs7SUFBUCxVQUNFLEVBQXVCLEVBQ3ZCLElBQTJCO1FBQTNCLHFCQUFBLEVBQUEsU0FBMkI7O1lBR3ZCLFVBQVUsR0FBRyxhQUFhLENBQUMsR0FBRztRQUNsQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUVuRCxDQUFDOzs7Ozs7SUFFRCw2QkFBTzs7Ozs7SUFBUCxVQUNFLEVBQXVCLEVBQ3ZCLElBQTJCO1FBQTNCLHFCQUFBLEVBQUEsU0FBMkI7O1lBRXZCLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTTtRQUNyQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7Ozs7SUFFRCwwQkFBSTs7Ozs7SUFBSixVQUNFLEVBQXVCLEVBQ3ZCLElBQTJCO1FBQTNCLHFCQUFBLEVBQUEsU0FBMkI7O1lBRXZCLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSTtRQUNuQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7Ozs7SUFFRCw2QkFBTzs7Ozs7SUFBUCxVQUFRLEVBQU8sRUFBRSxJQUEyQjtRQUEzQixxQkFBQSxFQUFBLFNBQTJCOztZQUN0QyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU07UUFDckMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELDhCQUE4Qjs7Ozs7OztJQUM5Qix5QkFBRzs7Ozs7OztJQUFILFVBQ0UsRUFBdUIsRUFDdkIsSUFBMkI7UUFBM0IscUJBQUEsRUFBQSxTQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVCLENBQUM7Ozs7Ozs7O0lBRU8scUNBQWU7Ozs7Ozs7SUFBdkIsVUFDRSxFQUF1QixFQUN2QixJQUEyQixFQUMzQixVQUFlO1FBSGpCLGlCQXdCQztRQXRCQyxxQkFBQSxFQUFBLFNBQTJCO1FBSTNCLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFekMsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTs7Z0JBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQzs7Z0JBQ2pDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzVCOztZQUVHLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7UUFFekMsSUFBRyxRQUFRLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUN0QyxDQUFBO1NBQ0Y7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sZ0NBQVU7Ozs7OztJQUFsQixVQUNFLFFBQWEsRUFDYixJQUEyQjtRQUEzQixxQkFBQSxFQUFBLFNBQTJCO1FBRzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDcEMsQ0FBQzs7Ozs7O0lBRU8sbUNBQWE7Ozs7O0lBQXJCLFVBQ0UsSUFBZ0I7UUFEbEIsaUJBb0JDOztZQWhCSyxXQUFXLEdBQUcsSUFBSTs7WUFDbEIsY0FBYyxHQUFHLFVBQUMsTUFBZTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3RCLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxDQUFBO1FBQzlDLENBQUM7UUFFRCxJQUFHLElBQUksRUFBRTtZQUNQLElBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTthQUN6QjtZQUNELElBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlDLGNBQWMsQ0FBQyxtQkFBUyxJQUFJLEVBQUEsQ0FBQyxDQUFBO2FBQzlCO1NBQ0Y7UUFFRCxPQUFPLG1CQUFZLElBQUksRUFBQSxDQUFBO0lBQ3pCLENBQUM7Ozs7Ozs7SUFFTyxpQ0FBVzs7Ozs7O0lBQW5CLFVBQ0UsRUFBdUIsRUFDdkIsSUFBMkI7UUFBM0IscUJBQUEsRUFBQSxTQUEyQjtRQUczQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3RCxDQUFDOzs7Ozs7O0lBRU8sb0NBQWM7Ozs7OztJQUF0QixVQUNFLEVBQXVCLEVBQ3ZCLElBQTJCO1FBQTNCLHFCQUFBLEVBQUEsU0FBMkI7UUFFM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Ozs7OztJQUVPLGtDQUFZOzs7OztJQUFwQixVQUNFLEVBQXVCO1FBRXZCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7O0lBRU8sNkJBQU87Ozs7OztJQUFmLFVBQ0UsRUFBdUIsRUFDdkIsSUFBMkI7UUFBM0IscUJBQUEsRUFBQSxTQUEyQjtRQUUzQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNmLENBQUM7O2dCQXhKRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQTFCUSxLQUFLO2dCQXFCTCxzQkFBc0I7Z0JBQ3RCLDBCQUEwQjtnQkFGMUIsWUFBWTs7O3NCQTlCckI7Q0EyTEMsQUF6SkQsSUF5SkM7U0F0SlksV0FBVzs7Ozs7O0lBQ3RCLGtDQUtDOzs7OztJQUdDLDRCQUF5Qjs7Ozs7SUFDekIsdUNBQWdEOzs7OztJQUNoRCxpREFBOEQ7Ozs7O0lBQzlELG1DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIG1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgRW50aXR5QWN0aW9ucyxcbiAgSnNvbkFwaUVudGl0eSxcbiAgRW50aXR5Q29sbGVjdGlvbixcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgRW50aXR5RGF0YSxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgaURhdGFTZXJ2aWNlLFxuICBpRGF0YVNlcnZpY2VPcHRzLFxuICBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyLFxuICBpRW50aXR5LFxuICBFbnRpdHlTZWxlY3RvclR5cGVzLFxuICBpRW50aXR5U2VsZWN0b3JUeXBlcyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgRW50aXR5Q2xvbmVyIH0gICAgICAgICAgICAgICBmcm9tICcuL2VudGl0eS1jbG9uZXIuc2VydmljZSdcbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvdmlkZXIgfSAgICAgZnJvbSAnLi9zZWxlY3RvcnMvaW5kZXgnXG5pbXBvcnQgeyBFbnRpdHlSZWxhdGlvbnNoaXBQcm92aWRlciB9IGZyb20gJy4vZW50aXR5LXJlbGF0aW9uc2hpcC1wcm92aWRlci5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSBpbXBsZW1lbnRzIGlEYXRhU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdE9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7XG4gICAgc3luY1dpdGhBcGk6IHRydWUsXG4gICAgc2VsZWN0b3JPcHRzOiB7XG4gICAgICBzZWxlY3RvclR5cGU6IDxrZXlvZiBpRW50aXR5U2VsZWN0b3JUeXBlcz5FbnRpdHlTZWxlY3RvclR5cGVzLkFsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBzZWxlY3RvclByb3ZpZGVyOiBFbnRpdHlTZWxlY3RvclByb3ZpZGVyLFxuICAgIHByaXZhdGUgZW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXI6IEVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyLFxuICAgIHByaXZhdGUgZW50aXR5Q2xvbmVyOiBFbnRpdHlDbG9uZXIsXG4gICkgeyB9XG5cbiAgcmVsYXRpb25zaGlwJChcbiAgICBlbnRpdHk6IGlFbnRpdHksXG4gICAgcmVsYXRpb25zaGlwSWRlbnRpZmllcjogRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIucHJvdmlkZSQoXG4gICAgICB0aGlzLFxuICAgICAgZW50aXR5LFxuICAgICAgcmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgICAgIG9wdHMsXG4gICAgKVxuICB9XG5cbiAgY3JlYXRlJChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGxldCBhY3Rpb25UeXBlID0gRW50aXR5QWN0aW9ucy5BZGRcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlUmVxdWVzdCQocmksIG9wdHMsIGFjdGlvblR5cGUpXG5cbiAgfVxuXG4gIGRlbGV0ZSQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGFjdGlvblR5cGUgPSBFbnRpdHlBY3Rpb25zLkRlbGV0ZVxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVSZXF1ZXN0JChyaSwgb3B0cywgYWN0aW9uVHlwZSlcbiAgfVxuXG4gIGdldCQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGFjdGlvblR5cGUgPSBFbnRpdHlBY3Rpb25zLkxvYWRcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlUmVxdWVzdCQocmksIG9wdHMsIGFjdGlvblR5cGUpXG4gIH1cblxuICB1cGRhdGUkKHJpOiBhbnksIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fSkge1xuICAgIGxldCBhY3Rpb25UeXBlID0gRW50aXR5QWN0aW9ucy5VcGRhdGVcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlUmVxdWVzdCQocmksIG9wdHMsIGFjdGlvblR5cGUpXG4gIH1cblxuICAvLyBUT0RPOiBkZXByZWNhdGUgdGhpcyBtZXRob2RcbiAgZ2V0KFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldCQocmksIG9wdHMpXG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVSZXF1ZXN0JChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge30sXG4gICAgYWN0aW9uVHlwZTogYW55XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBvcHRzID0gXy5kZWZhdWx0cyhvcHRzLCB0aGlzLmRlZmF1bHRPcHRzKVxuXG4gICAgaWYodGhpcy5zaG91bGREaXNwYXRjaChyaSwgb3B0cykpIHtcbiAgICAgIGxldCBzbGljZU5hbWUgPSB0aGlzLmdldFNsaWNlTmFtZShyaSlcbiAgICAgIGxldCBhY3Rpb24gPSBuZXcgYWN0aW9uVHlwZShzbGljZU5hbWUsIHJpKVxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pXG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yID0gdGhpcy5nZXRTZWxlY3RvcihyaSwgb3B0cylcblxuICAgIGlmKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZURhdGEkKHNlbGVjdG9yLCBvcHRzKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiB0aGlzLmRlY29yYXRlZERhdGEoZGF0YSkpLFxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5vRGF0YSQocmksIG9wdHMpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdG9yZURhdGEkKFxuICAgIHNlbGVjdG9yOiBhbnksXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3IpXG4gIH1cblxuICBwcml2YXRlIGRlY29yYXRlZERhdGEoXG4gICAgZGF0YTogRW50aXR5RGF0YVxuICApOiBFbnRpdHlEYXRhIHtcblxuICAgIHZhciBkYXRhU2VydmljZSA9IHRoaXNcbiAgICB2YXIgZGVjb3JhdGVFbnRpdHkgPSAoZW50aXR5OiBpRW50aXR5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImhpIGRhdGFcIilcbiAgICAgIHJldHVybiB0aGlzLmVudGl0eUNsb25lci5jbG9uZShlbnRpdHksIHRoaXMpXG4gICAgfVxuXG4gICAgaWYoZGF0YSkge1xuICAgICAgaWYoRW50aXR5Q29sbGVjdGlvbi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihkYXRhKSkge1xuICAgICAgICBkYXRhLm1hcChkZWNvcmF0ZUVudGl0eSlcbiAgICAgIH1cbiAgICAgIGlmKEpzb25BcGlFbnRpdHkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoZGF0YSkpIHtcbiAgICAgICAgZGVjb3JhdGVFbnRpdHkoPGlFbnRpdHk+ZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gPEVudGl0eURhdGE+ZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RvcihcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yUHJvdmlkZXIucHJvdmlkZShyaSwgb3B0cy5zZWxlY3Rvck9wdHMpXG4gIH1cblxuICBwcml2YXRlIHNob3VsZERpc3BhdGNoKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0cy5zeW5jV2l0aEFwaVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTbGljZU5hbWUoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiBfLmpvaW4oW3JpLmZlYXR1cmUsICdlbnRpdGllcycsIHJpLnR5cGVdLCAnLicpXG4gIH1cblxuICBwcml2YXRlIG5vRGF0YSQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG9mKFtdKVxuICB9XG59XG4iXX0=