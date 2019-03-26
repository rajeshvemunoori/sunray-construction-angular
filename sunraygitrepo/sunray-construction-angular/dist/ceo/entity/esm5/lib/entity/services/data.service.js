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
import { EntityFactory } from './entity-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./selectors/selector-provider.service";
import * as i3 from "./entity-relationship-provider.service";
import * as i4 from "./entity-cloner.service";
import * as i5 from "./entity-factory.service";
var DataService = /** @class */ (function () {
    function DataService(store, selectorProvider, entityRelationshipProvider, entityCloner, entityFactory) {
        this.store = store;
        this.selectorProvider = selectorProvider;
        this.entityRelationshipProvider = entityRelationshipProvider;
        this.entityCloner = entityCloner;
        this.entityFactory = entityFactory;
        this.defaultOpts = {
            syncWithApi: true,
            selectorOpts: {
                selectorType: (/** @type {?} */ (EntitySelectorTypes.All))
            }
        };
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    DataService.prototype.build$ = /**
     * @param {?} entityData
     * @return {?}
     */
    function (entityData) {
        var _this = this;
        return this.entityFactory.build$(entityData).pipe(map(function (entity) { return (/** @type {?} */ (_this.decoratedData(entity))); }));
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
            return this.noData$();
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
        var buildDecoratedEntity = function (entity) {
            return _this.entityCloner.clone(entity, _this);
        };
        if (data) {
            if (EntityCollection.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                var clonedEntities = data.map(buildDecoratedEntity);
                /** @type {?} */
                var clonedCollection = new EntityCollection(clonedEntities);
                return (/** @type {?} */ (clonedCollection));
            }
            if (JsonApiEntity.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                var clone = buildDecoratedEntity((/** @type {?} */ (data)));
                return (/** @type {?} */ (clone));
            }
        }
        return data;
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
     * @return {?}
     */
    DataService.prototype.noData$ = /**
     * @private
     * @return {?}
     */
    function () {
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
        { type: EntityCloner },
        { type: EntityFactory }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(i1.Store), i0.inject(i2.SelectorProvider), i0.inject(i3.EntityRelationshipProvider), i0.inject(i4.EntityCloner), i0.inject(i5.EntityFactory)); }, token: DataService, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.entityFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUVyQyxPQUFPLEVBQ0wsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFrQixNQUFNLGFBQWEsQ0FBQTtBQUVuRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBU0wsbUJBQW1CLEdBRXBCLE1BQU0scUJBQXFCLENBQUE7QUFFNUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFvQix5QkFBeUIsQ0FBQTtBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBVSxtQkFBbUIsQ0FBQTtBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0sMEJBQTBCLENBQUE7Ozs7Ozs7QUFFckU7SUFXRSxxQkFDVSxLQUFpQixFQUNqQixnQkFBd0MsRUFDeEMsMEJBQXNELEVBQ3RELFlBQTBCLEVBQzFCLGFBQTRCO1FBSjVCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWjlCLGdCQUFXLEdBQXFCO1lBQ3RDLFdBQVcsRUFBRSxJQUFJ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TyxJQUFJLENBQUE7SUFDYixDQUFDOzs7Ozs7O0lBRU8saUNBQVc7Ozs7OztJQUFuQixVQUNFLEVBQXVCLEVBQ3ZCLElBQTJCO1FBQTNCLHFCQUFBLEVBQUEsU0FBMkI7UUFHM0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0QsQ0FBQzs7Ozs7OztJQUVPLG9DQUFjOzs7Ozs7SUFBdEIsVUFDRSxFQUF1QixFQUN2QixJQUEyQjtRQUEzQixxQkFBQSxFQUFBLFNBQTJCO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN6QixDQUFDOzs7Ozs7SUFFTyxrQ0FBWTs7Ozs7SUFBcEIsVUFDRSxFQUF1QjtRQUV2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Ozs7SUFFTyw2QkFBTzs7OztJQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDZixDQUFDOztnQkE5SkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkE1QlEsS0FBSztnQkFzQkwsc0JBQXNCO2dCQUN0QiwwQkFBMEI7Z0JBRjFCLFlBQVk7Z0JBR1osYUFBYTs7O3NCQWxDdEI7Q0FtTUMsQUEvSkQsSUErSkM7U0E1SlksV0FBVzs7Ozs7O0lBQ3RCLGtDQUtDOzs7OztJQUdDLDRCQUF5Qjs7Ozs7SUFDekIsdUNBQWdEOzs7OztJQUNoRCxpREFBOEQ7Ozs7O0lBQzlELG1DQUFrQzs7Ozs7SUFDbEMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlBY3Rpb25zLFxuICBKc29uQXBpRW50aXR5LFxuICBFbnRpdHlDb2xsZWN0aW9uLFxufSBmcm9tICcuLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICBFbnRpdHlEYXRhLFxuICBpRW50aXR5LFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICBpRGF0YVNlcnZpY2UsXG4gIGlEYXRhU2VydmljZU9wdHMsXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbiAgRW50aXR5U2VsZWN0b3JUeXBlcyxcbiAgaUVudGl0eVNlbGVjdG9yVHlwZXMsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEVudGl0eUNsb25lciB9ICAgICAgICAgICAgICAgZnJvbSAnLi9lbnRpdHktY2xvbmVyLnNlcnZpY2UnXG5pbXBvcnQgeyBFbnRpdHlTZWxlY3RvclByb3ZpZGVyIH0gICAgIGZyb20gJy4vc2VsZWN0b3JzL2luZGV4J1xuaW1wb3J0IHsgRW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIgfSBmcm9tICcuL2VudGl0eS1yZWxhdGlvbnNoaXAtcHJvdmlkZXIuc2VydmljZSdcbmltcG9ydCB7IEVudGl0eUZhY3RvcnkgICAgICAgICAgICAgIH0gZnJvbSAnLi9lbnRpdHktZmFjdG9yeS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSBpbXBsZW1lbnRzIGlEYXRhU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdE9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7XG4gICAgc3luY1dpdGhBcGk6IHRydWUsXG4gICAgc2VsZWN0b3JPcHRzOiB7XG4gICAgICBzZWxlY3RvclR5cGU6IDxrZXlvZiBpRW50aXR5U2VsZWN0b3JUeXBlcz5FbnRpdHlTZWxlY3RvclR5cGVzLkFsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBzZWxlY3RvclByb3ZpZGVyOiBFbnRpdHlTZWxlY3RvclByb3ZpZGVyLFxuICAgIHByaXZhdGUgZW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXI6IEVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyLFxuICAgIHByaXZhdGUgZW50aXR5Q2xvbmVyOiBFbnRpdHlDbG9uZXIsXG4gICAgcHJpdmF0ZSBlbnRpdHlGYWN0b3J5OiBFbnRpdHlGYWN0b3J5LFxuICApIHsgfVxuXG4gIGJ1aWxkJChcbiAgICBlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gICk6IE9ic2VydmFibGU8aUVudGl0eT4ge1xuICAgIHJldHVybiB0aGlzLmVudGl0eUZhY3RvcnkuYnVpbGQkKGVudGl0eURhdGEpLnBpcGUoXG4gICAgICBtYXAoZW50aXR5ID0+IHRoaXMuZGVjb3JhdGVkRGF0YShlbnRpdHkpIGFzIGlFbnRpdHkpXG4gICAgKVxuICB9XG5cbiAgY3JlYXRlJChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGxldCBhY3Rpb25UeXBlID0gRW50aXR5QWN0aW9ucy5BZGRcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlUmVxdWVzdCQocmksIG9wdHMsIGFjdGlvblR5cGUpXG4gIH1cblxuICBkZWxldGUkKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBhY3Rpb25UeXBlID0gRW50aXR5QWN0aW9ucy5EZWxldGVcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlUmVxdWVzdCQocmksIG9wdHMsIGFjdGlvblR5cGUpXG4gIH1cblxuICBnZXQkKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBhY3Rpb25UeXBlID0gRW50aXR5QWN0aW9ucy5Mb2FkXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlcXVlc3QkKHJpLCBvcHRzLCBhY3Rpb25UeXBlKVxuICB9XG5cbiAgdXBkYXRlJChyaTogYW55LCBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge30pIHtcbiAgICBsZXQgYWN0aW9uVHlwZSA9IEVudGl0eUFjdGlvbnMuVXBkYXRlXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlcXVlc3QkKHJpLCBvcHRzLCBhY3Rpb25UeXBlKVxuICB9XG5cbiAgcmVsYXRpb25zaGlwJChcbiAgICBlbnRpdHk6IGlFbnRpdHksXG4gICAgcmVsYXRpb25zaGlwSWRlbnRpZmllcjogRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIucHJvdmlkZSQoXG4gICAgICB0aGlzLFxuICAgICAgZW50aXR5LFxuICAgICAgcmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgICAgIG9wdHMsXG4gICAgKVxuICB9XG5cbiAgLy8gVE9ETzogZGVwcmVjYXRlIHRoaXMgbWV0aG9kXG4gIGdldChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQkKHJpLCBvcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlUmVxdWVzdCQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9LFxuICAgIGFjdGlvblR5cGU6IGFueVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgb3B0cyA9IF8uZGVmYXVsdHMob3B0cywgdGhpcy5kZWZhdWx0T3B0cylcblxuICAgIGlmKHRoaXMuc2hvdWxkRGlzcGF0Y2gocmksIG9wdHMpKSB7XG4gICAgICBsZXQgc2xpY2VOYW1lID0gdGhpcy5nZXRTbGljZU5hbWUocmkpXG4gICAgICBsZXQgYWN0aW9uID0gbmV3IGFjdGlvblR5cGUoc2xpY2VOYW1lLCByaSlcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKVxuICAgIH1cblxuICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3IocmksIG9wdHMpXG5cbiAgICBpZihzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVEYXRhJChzZWxlY3Rvciwgb3B0cykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gdGhpcy5kZWNvcmF0ZWREYXRhKGRhdGEpKSxcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5ub0RhdGEkKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0b3JlRGF0YSQoXG4gICAgc2VsZWN0b3I6IGFueSxcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcilcbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGVkRGF0YShcbiAgICBkYXRhOiBFbnRpdHlEYXRhXG4gICk6IEVudGl0eURhdGEge1xuXG4gICAgdmFyIGJ1aWxkRGVjb3JhdGVkRW50aXR5ID0gKGVudGl0eTogaUVudGl0eSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZW50aXR5Q2xvbmVyLmNsb25lKGVudGl0eSwgdGhpcylcbiAgICB9XG5cbiAgICBpZihkYXRhKSB7XG4gICAgICBpZihFbnRpdHlDb2xsZWN0aW9uLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGRhdGEpKSB7XG4gICAgICAgIGxldCBjbG9uZWRFbnRpdGllcyA9IGRhdGEubWFwKGJ1aWxkRGVjb3JhdGVkRW50aXR5KVxuICAgICAgICBsZXQgY2xvbmVkQ29sbGVjdGlvbiA9IG5ldyBFbnRpdHlDb2xsZWN0aW9uKGNsb25lZEVudGl0aWVzKVxuICAgICAgICByZXR1cm4gPEVudGl0eURhdGE+Y2xvbmVkQ29sbGVjdGlvblxuICAgICAgfVxuICAgICAgaWYoSnNvbkFwaUVudGl0eS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihkYXRhKSkge1xuICAgICAgICBsZXQgY2xvbmUgPSBidWlsZERlY29yYXRlZEVudGl0eSg8aUVudGl0eT5kYXRhKVxuICAgICAgICByZXR1cm4gPEVudGl0eURhdGE+Y2xvbmVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RvcihcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yUHJvdmlkZXIucHJvdmlkZShyaSwgb3B0cy5zZWxlY3Rvck9wdHMpXG4gIH1cblxuICBwcml2YXRlIHNob3VsZERpc3BhdGNoKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0cy5zeW5jV2l0aEFwaVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTbGljZU5hbWUoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiBfLmpvaW4oW3JpLmZlYXR1cmUsICdlbnRpdGllcycsIHJpLnR5cGVdLCAnLicpXG4gIH1cblxuICBwcml2YXRlIG5vRGF0YSQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2YoW10pXG4gIH1cbn1cbiJdfQ==