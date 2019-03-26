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
export class DataService {
    /**
     * @param {?} store
     * @param {?} selectorProvider
     * @param {?} entityRelationshipProvider
     * @param {?} entityCloner
     */
    constructor(store, selectorProvider, entityRelationshipProvider, entityCloner) {
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
    relationship$(entity, relationshipIdentifier, opts = {}) {
        return this.entityRelationshipProvider.provide$(this, entity, relationshipIdentifier, opts);
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
            return this.noData$(ri, opts);
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
        var dataService = this;
        /** @type {?} */
        var decorateEntity = (entity) => {
            console.log("hi data");
            return this.entityCloner.clone(entity, this);
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
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    noData$(ri, opts = {}) {
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
    { type: EntityCloner }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(i1.Store), i0.inject(i2.SelectorProvider), i0.inject(i3.EntityRelationshipProvider), i0.inject(i4.EntityCloner)); }, token: DataService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRXJDLE9BQU8sRUFDTCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQWtCLE1BQU0sYUFBYSxDQUFBO0FBRW5ELE9BQU8sRUFDTCxhQUFhLEVBQ2IsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLGtCQUFrQixDQUFBO0FBRXpCLE9BQU8sRUFRTCxtQkFBbUIsR0FFcEIsTUFBTSxxQkFBcUIsQ0FBQTtBQUU1QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQW9CLHlCQUF5QixDQUFBO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFVLG1CQUFtQixDQUFBO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFBOzs7Ozs7QUFLbkYsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFRdEIsWUFDVSxLQUFpQixFQUNqQixnQkFBd0MsRUFDeEMsMEJBQXNELEVBQ3RELFlBQTBCO1FBSDFCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBWDVCLGdCQUFXLEdBQXFCO1lBQ3RDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFlBQVksRUFBRTtnQkFDWixZQUFZLEVBQUUsbUJBQTRCLG1CQUFtQixDQUFDLEdBQUcsRUFBQTthQUNsRTtT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Qyw0QkFBeUI7Ozs7O0lBQ3pCLHVDQUFnRDs7Ozs7SUFDaEQsaURBQThEOzs7OztJQUM5RCxtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBtYXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgU3RvcmUsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIEVudGl0eUFjdGlvbnMsXG4gIEpzb25BcGlFbnRpdHksXG4gIEVudGl0eUNvbGxlY3Rpb24sXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gIEVudGl0eURhdGEsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIGlEYXRhU2VydmljZSxcbiAgaURhdGFTZXJ2aWNlT3B0cyxcbiAgaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbiAgaUVudGl0eSxcbiAgRW50aXR5U2VsZWN0b3JUeXBlcyxcbiAgaUVudGl0eVNlbGVjdG9yVHlwZXMsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEVudGl0eUNsb25lciB9ICAgICAgICAgICAgICAgZnJvbSAnLi9lbnRpdHktY2xvbmVyLnNlcnZpY2UnXG5pbXBvcnQgeyBFbnRpdHlTZWxlY3RvclByb3ZpZGVyIH0gICAgIGZyb20gJy4vc2VsZWN0b3JzL2luZGV4J1xuaW1wb3J0IHsgRW50aXR5UmVsYXRpb25zaGlwUHJvdmlkZXIgfSBmcm9tICcuL2VudGl0eS1yZWxhdGlvbnNoaXAtcHJvdmlkZXIuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBpRGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRPcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge1xuICAgIHN5bmNXaXRoQXBpOiB0cnVlLFxuICAgIHNlbGVjdG9yT3B0czoge1xuICAgICAgc2VsZWN0b3JUeXBlOiA8a2V5b2YgaUVudGl0eVNlbGVjdG9yVHlwZXM+RW50aXR5U2VsZWN0b3JUeXBlcy5BbGxcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgc2VsZWN0b3JQcm92aWRlcjogRW50aXR5U2VsZWN0b3JQcm92aWRlcixcbiAgICBwcml2YXRlIGVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyOiBFbnRpdHlSZWxhdGlvbnNoaXBQcm92aWRlcixcbiAgICBwcml2YXRlIGVudGl0eUNsb25lcjogRW50aXR5Q2xvbmVyLFxuICApIHsgfVxuXG4gIHJlbGF0aW9uc2hpcCQoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICAgIHJlbGF0aW9uc2hpcElkZW50aWZpZXI6IEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8RW50aXR5RGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmVudGl0eVJlbGF0aW9uc2hpcFByb3ZpZGVyLnByb3ZpZGUkKFxuICAgICAgdGhpcyxcbiAgICAgIGVudGl0eSxcbiAgICAgIHJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gICAgICBvcHRzLFxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZSQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgYWN0aW9uVHlwZSA9IEVudGl0eUFjdGlvbnMuQWRkXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlcXVlc3QkKHJpLCBvcHRzLCBhY3Rpb25UeXBlKVxuXG4gIH1cblxuICBkZWxldGUkKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBhY3Rpb25UeXBlID0gRW50aXR5QWN0aW9ucy5EZWxldGVcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlUmVxdWVzdCQocmksIG9wdHMsIGFjdGlvblR5cGUpXG4gIH1cblxuICBnZXQkKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBhY3Rpb25UeXBlID0gRW50aXR5QWN0aW9ucy5Mb2FkXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlcXVlc3QkKHJpLCBvcHRzLCBhY3Rpb25UeXBlKVxuICB9XG5cbiAgdXBkYXRlJChyaTogYW55LCBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge30pIHtcbiAgICBsZXQgYWN0aW9uVHlwZSA9IEVudGl0eUFjdGlvbnMuVXBkYXRlXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVJlcXVlc3QkKHJpLCBvcHRzLCBhY3Rpb25UeXBlKVxuICB9XG5cbiAgLy8gVE9ETzogZGVwcmVjYXRlIHRoaXMgbWV0aG9kXG4gIGdldChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQkKHJpLCBvcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlUmVxdWVzdCQoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9LFxuICAgIGFjdGlvblR5cGU6IGFueVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgb3B0cyA9IF8uZGVmYXVsdHMob3B0cywgdGhpcy5kZWZhdWx0T3B0cylcblxuICAgIGlmKHRoaXMuc2hvdWxkRGlzcGF0Y2gocmksIG9wdHMpKSB7XG4gICAgICBsZXQgc2xpY2VOYW1lID0gdGhpcy5nZXRTbGljZU5hbWUocmkpXG4gICAgICBsZXQgYWN0aW9uID0gbmV3IGFjdGlvblR5cGUoc2xpY2VOYW1lLCByaSlcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKVxuICAgIH1cblxuICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3IocmksIG9wdHMpXG5cbiAgICBpZihzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVEYXRhJChzZWxlY3Rvciwgb3B0cykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gdGhpcy5kZWNvcmF0ZWREYXRhKGRhdGEpKSxcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5ub0RhdGEkKHJpLCBvcHRzKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RvcmVEYXRhJChcbiAgICBzZWxlY3RvcjogYW55LFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9yKVxuICB9XG5cbiAgcHJpdmF0ZSBkZWNvcmF0ZWREYXRhKFxuICAgIGRhdGE6IEVudGl0eURhdGFcbiAgKTogRW50aXR5RGF0YSB7XG5cbiAgICB2YXIgZGF0YVNlcnZpY2UgPSB0aGlzXG4gICAgdmFyIGRlY29yYXRlRW50aXR5ID0gKGVudGl0eTogaUVudGl0eSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJoaSBkYXRhXCIpXG4gICAgICByZXR1cm4gdGhpcy5lbnRpdHlDbG9uZXIuY2xvbmUoZW50aXR5LCB0aGlzKVxuICAgIH1cblxuICAgIGlmKGRhdGEpIHtcbiAgICAgIGlmKEVudGl0eUNvbGxlY3Rpb24ucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoZGF0YSkpIHtcbiAgICAgICAgZGF0YS5tYXAoZGVjb3JhdGVFbnRpdHkpXG4gICAgICB9XG4gICAgICBpZihKc29uQXBpRW50aXR5LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGRhdGEpKSB7XG4gICAgICAgIGRlY29yYXRlRW50aXR5KDxpRW50aXR5PmRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDxFbnRpdHlEYXRhPmRhdGFcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0b3IoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvclByb3ZpZGVyLnByb3ZpZGUocmksIG9wdHMuc2VsZWN0b3JPcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGREaXNwYXRjaChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9wdHMuc3luY1dpdGhBcGlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpY2VOYW1lKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcbiAgICByZXR1cm4gXy5qb2luKFtyaS5mZWF0dXJlLCAnZW50aXRpZXMnLCByaS50eXBlXSwgJy4nKVxuICB9XG5cbiAgcHJpdmF0ZSBub0RhdGEkKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvZihbXSlcbiAgfVxufVxuIl19