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
export class DataService {
    /**
     * @param {?} store
     * @param {?} selectorProvider
     * @param {?} entityRelationshipProvider
     * @param {?} entityCloner
     * @param {?} entityFactory
     */
    constructor(store, selectorProvider, entityRelationshipProvider, entityCloner, entityFactory) {
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
    build$(entityData) {
        return this.entityFactory.build$(entityData).pipe(map(entity => (/** @type {?} */ (this.decoratedData(entity)))));
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    create$(ri, opts = {}) {
        /** @type {?} */
        let actionType = EntityActions.Add;
        return this.executeRequest$(ri, opts, actionType);
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    delete$(ri, opts = {}) {
        /** @type {?} */
        let actionType = EntityActions.Delete;
        return this.executeRequest$(ri, opts, actionType);
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    get$(ri, opts = {}) {
        /** @type {?} */
        let actionType = EntityActions.Load;
        return this.executeRequest$(ri, opts, actionType);
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    update$(ri, opts = {}) {
        /** @type {?} */
        let actionType = EntityActions.Update;
        return this.executeRequest$(ri, opts, actionType);
    }
    /**
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    relationship$(entity, relationshipIdentifier, opts = {}) {
        return this.entityRelationshipProvider.provide$(this, entity, relationshipIdentifier, opts);
    }
    // TODO: deprecate this method
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    get(ri, opts = {}) {
        return this.get$(ri, opts);
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @param {?=} actionType
     * @return {?}
     */
    executeRequest$(ri, opts = {}, actionType) {
        opts = _.defaults(opts, this.defaultOpts);
        if (this.shouldDispatch(ri, opts)) {
            /** @type {?} */
            let sliceName = this.getSliceName(ri);
            /** @type {?} */
            let action = new actionType(sliceName, ri);
            this.store.dispatch(action);
        }
        /** @type {?} */
        let selector = this.getSelector(ri, opts);
        if (selector) {
            return this.storeData$(selector, opts).pipe(map(data => this.decoratedData(data)));
        }
        else {
            return this.noData$();
        }
    }
    /**
     * @private
     * @param {?} selector
     * @param {?=} opts
     * @return {?}
     */
    storeData$(selector, opts = {}) {
        return this.store.select(selector);
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    decoratedData(data) {
        /** @type {?} */
        var buildDecoratedEntity = (entity) => {
            return this.entityCloner.clone(entity, this);
        };
        if (data) {
            if (EntityCollection.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                let clonedEntities = data.map(buildDecoratedEntity);
                /** @type {?} */
                let clonedCollection = new EntityCollection(clonedEntities);
                return (/** @type {?} */ (clonedCollection));
            }
            if (JsonApiEntity.prototype.isPrototypeOf(data)) {
                /** @type {?} */
                let clone = buildDecoratedEntity((/** @type {?} */ (data)));
                return (/** @type {?} */ (clone));
            }
        }
        return data;
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    getSelector(ri, opts = {}) {
        return this.selectorProvider.provide(ri, opts.selectorOpts);
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    shouldDispatch(ri, opts = {}) {
        return opts.syncWithApi;
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getSliceName(ri) {
        return _.join([ri.feature, 'entities', ri.type], '.');
    }
    /**
     * @private
     * @return {?}
     */
    noData$() {
        return of([]);
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: Store },
    { type: EntitySelectorProvider },
    { type: EntityRelationshipProvider },
    { type: EntityCloner },
    { type: EntityFactory }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(i1.Store), i0.inject(i2.SelectorProvider), i0.inject(i3.EntityRelationshipProvider), i0.inject(i4.EntityCloner), i0.inject(i5.EntityFactory)); }, token: DataService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUVyQyxPQUFPLEVBQ0wsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFrQixNQUFNLGFBQWEsQ0FBQTtBQUVuRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBU0wsbUJBQW1CLEdBRXBCLE1BQU0scUJBQXFCLENBQUE7QUFFNUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFvQix5QkFBeUIsQ0FBQTtBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBVSxtQkFBbUIsQ0FBQTtBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0sMEJBQTBCLENBQUE7Ozs7Ozs7QUFLckUsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBUXRCLFlBQ1UsS0FBaUIsRUFDakIsZ0JBQXdDLEVBQ3hDLDBCQUFzRCxFQUN0RCxZQUEwQixFQUMxQixhQUE0QjtRQUo1QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVo5QixnQkFBVyxHQUFx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Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7OztJQUVPLE9BQU87UUFDYixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNmLENBQUM7OztZQTlKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUE1QlEsS0FBSztZQXNCTCxzQkFBc0I7WUFDdEIsMEJBQTBCO1lBRjFCLFlBQVk7WUFHWixhQUFhOzs7Ozs7OztJQU1wQixrQ0FLQzs7Ozs7SUFHQyw0QkFBeUI7Ozs7O0lBQ3pCLHVDQUFnRDs7Ozs7SUFDaEQsaURBQThEOzs7OztJQUM5RCxtQ0FBa0M7Ozs7O0lBQ2xDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIG1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgRW50aXR5QWN0aW9ucyxcbiAgSnNvbkFwaUVudGl0eSxcbiAgRW50aXR5Q29sbGVjdGlvbixcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgRW50aXR5RGF0YSxcbiAgaUVudGl0eSxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgaURhdGFTZXJ2aWNlLFxuICBpRGF0YVNlcnZpY2VPcHRzLFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIsXG4gIEVudGl0eVNlbGVjdG9yVHlwZXMsXG4gIGlFbnRpdHlTZWxlY3RvclR5cGVzLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBFbnRpdHlDbG9uZXIgfSAgICAgICAgICAgICAgIGZyb20gJy4vZW50aXR5LWNsb25lci5zZXJ2aWNlJ1xuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm92aWRlciB9ICAgICBmcm9tICcuL3NlbGVjdG9ycy9pbmRleCdcbmltcG9ydCB7IEVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyIH0gZnJvbSAnLi9lbnRpdHktcmVsYXRpb25zaGlwLXByb3ZpZGVyLnNlcnZpY2UnXG5pbXBvcnQgeyBFbnRpdHlGYWN0b3J5ICAgICAgICAgICAgICB9IGZyb20gJy4vZW50aXR5LWZhY3Rvcnkuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBpRGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRPcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge1xuICAgIHN5bmNXaXRoQXBpOiB0cnVlLFxuICAgIHNlbGVjdG9yT3B0czoge1xuICAgICAgc2VsZWN0b3JUeXBlOiA8a2V5b2YgaUVudGl0eVNlbGVjdG9yVHlwZXM+RW50aXR5U2VsZWN0b3JUeXBlcy5BbGxcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgc2VsZWN0b3JQcm92aWRlcjogRW50aXR5U2VsZWN0b3JQcm92aWRlcixcbiAgICBwcml2YXRlIGVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyOiBFbnRpdHlSZWxhdGlvbnNoaXBQcm92aWRlcixcbiAgICBwcml2YXRlIGVudGl0eUNsb25lcjogRW50aXR5Q2xvbmVyLFxuICAgIHByaXZhdGUgZW50aXR5RmFjdG9yeTogRW50aXR5RmFjdG9yeSxcbiAgKSB7IH1cblxuICBidWlsZCQoXG4gICAgZW50aXR5RGF0YTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHk+IHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHlGYWN0b3J5LmJ1aWxkJChlbnRpdHlEYXRhKS5waXBlKFxuICAgICAgbWFwKGVudGl0eSA9PiB0aGlzLmRlY29yYXRlZERhdGEoZW50aXR5KSBhcyBpRW50aXR5KVxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZSQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgYWN0aW9uVHlwZSA9IEVudGl0eUFjdGlvbnMuQWRkXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlcXVlc3QkKHJpLCBvcHRzLCBhY3Rpb25UeXBlKVxuICB9XG5cbiAgZGVsZXRlJChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgYWN0aW9uVHlwZSA9IEVudGl0eUFjdGlvbnMuRGVsZXRlXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlcXVlc3QkKHJpLCBvcHRzLCBhY3Rpb25UeXBlKVxuICB9XG5cbiAgZ2V0JChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgYWN0aW9uVHlwZSA9IEVudGl0eUFjdGlvbnMuTG9hZFxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVSZXF1ZXN0JChyaSwgb3B0cywgYWN0aW9uVHlwZSlcbiAgfVxuXG4gIHVwZGF0ZSQocmk6IGFueSwgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9KSB7XG4gICAgbGV0IGFjdGlvblR5cGUgPSBFbnRpdHlBY3Rpb25zLlVwZGF0ZVxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVSZXF1ZXN0JChyaSwgb3B0cywgYWN0aW9uVHlwZSlcbiAgfVxuXG4gIHJlbGF0aW9uc2hpcCQoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICAgIHJlbGF0aW9uc2hpcElkZW50aWZpZXI6IEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8RW50aXR5RGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyLnByb3ZpZGUkKFxuICAgICAgdGhpcyxcbiAgICAgIGVudGl0eSxcbiAgICAgIHJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gICAgICBvcHRzLFxuICAgIClcbiAgfVxuXG4gIC8vIFRPRE86IGRlcHJlY2F0ZSB0aGlzIG1ldGhvZFxuICBnZXQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0JChyaSwgb3B0cylcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVJlcXVlc3QkKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fSxcbiAgICBhY3Rpb25UeXBlOiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIG9wdHMgPSBfLmRlZmF1bHRzKG9wdHMsIHRoaXMuZGVmYXVsdE9wdHMpXG5cbiAgICBpZih0aGlzLnNob3VsZERpc3BhdGNoKHJpLCBvcHRzKSkge1xuICAgICAgbGV0IHNsaWNlTmFtZSA9IHRoaXMuZ2V0U2xpY2VOYW1lKHJpKVxuICAgICAgbGV0IGFjdGlvbiA9IG5ldyBhY3Rpb25UeXBlKHNsaWNlTmFtZSwgcmkpXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbilcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yKHJpLCBvcHRzKVxuXG4gICAgaWYoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlRGF0YSQoc2VsZWN0b3IsIG9wdHMpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IHRoaXMuZGVjb3JhdGVkRGF0YShkYXRhKSksXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubm9EYXRhJCgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdG9yZURhdGEkKFxuICAgIHNlbGVjdG9yOiBhbnksXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3IpXG4gIH1cblxuICBwcml2YXRlIGRlY29yYXRlZERhdGEoXG4gICAgZGF0YTogRW50aXR5RGF0YVxuICApOiBFbnRpdHlEYXRhIHtcblxuICAgIHZhciBidWlsZERlY29yYXRlZEVudGl0eSA9IChlbnRpdHk6IGlFbnRpdHkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVudGl0eUNsb25lci5jbG9uZShlbnRpdHksIHRoaXMpXG4gICAgfVxuXG4gICAgaWYoZGF0YSkge1xuICAgICAgaWYoRW50aXR5Q29sbGVjdGlvbi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihkYXRhKSkge1xuICAgICAgICBsZXQgY2xvbmVkRW50aXRpZXMgPSBkYXRhLm1hcChidWlsZERlY29yYXRlZEVudGl0eSlcbiAgICAgICAgbGV0IGNsb25lZENvbGxlY3Rpb24gPSBuZXcgRW50aXR5Q29sbGVjdGlvbihjbG9uZWRFbnRpdGllcylcbiAgICAgICAgcmV0dXJuIDxFbnRpdHlEYXRhPmNsb25lZENvbGxlY3Rpb25cbiAgICAgIH1cbiAgICAgIGlmKEpzb25BcGlFbnRpdHkucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoZGF0YSkpIHtcbiAgICAgICAgbGV0IGNsb25lID0gYnVpbGREZWNvcmF0ZWRFbnRpdHkoPGlFbnRpdHk+ZGF0YSlcbiAgICAgICAgcmV0dXJuIDxFbnRpdHlEYXRhPmNsb25lXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0b3IoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvclByb3ZpZGVyLnByb3ZpZGUocmksIG9wdHMuc2VsZWN0b3JPcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGREaXNwYXRjaChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9wdHMuc3luY1dpdGhBcGlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpY2VOYW1lKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcbiAgICByZXR1cm4gXy5qb2luKFtyaS5mZWF0dXJlLCAnZW50aXRpZXMnLCByaS50eXBlXSwgJy4nKVxuICB9XG5cbiAgcHJpdmF0ZSBub0RhdGEkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG9mKFtdKVxuICB9XG59XG4iXX0=