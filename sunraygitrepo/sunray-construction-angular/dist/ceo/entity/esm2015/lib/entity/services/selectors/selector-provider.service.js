/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntitySelectorTypes, } from '../../interfaces/index';
import { buildFilterSelector, buildFindSelector, } from '../../util/builders/selectors/index';
import { entityFeatureSelectors, } from '../../state/feature/selectors';
import { SelectorService } from './selector.service';
export class SelectorProvider {
    /**
     * @param {?} selectorService
     * @param {?} store
     */
    constructor(selectorService, store) {
        this.selectorService = selectorService;
        this.store = store;
        this.defaultOpts = {
            selectorType: (/** @type {?} */ (EntitySelectorTypes.All))
        };
        this.subscribeToFeatures();
    }
    /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    provide(ri, opts = {}) {
        opts = _.defaults(opts, this.defaultOpts);
        /** @type {?} */
        let selector = this.customSelector(ri, opts) ||
            this.defaultSelector(ri, opts);
        return selector;
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    customSelector(ri, opts = {}) {
        /** @type {?} */
        let feature = this.features[ri.feature];
        if (feature) {
            /** @type {?} */
            let selectorIsValid = (selector) => {
                return selector.isValid(ri);
            };
            /** @type {?} */
            let selector = _.find(feature.selectors, selectorIsValid);
            if (selector) {
                return (/** @type {?} */ (selector.selector(this.selectorService, ri)));
            }
            else {
                return null;
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    defaultSelector(ri, opts = {}) {
        if (this.isRelationshipResourceRequest(ri)) {
            ri = {
                feature: ri.feature,
                type: ri.relationship.type
            };
        }
        /** @type {?} */
        let si = this.selectorIdentifier(ri, opts);
        /** @type {?} */
        let selector = this.getBaseSelector(si);
        if (this.isFindRequest(ri)) {
            selector = this.findSelector(selector, ri);
        }
        if (this.isFilteredResourceRequest(ri)) {
            selector = this.filterSelector(selector, ri);
        }
        return selector;
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isRelationshipResourceRequest(ri) {
        return _.has(ri, 'relationship');
    }
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    selectorIdentifier(ri, opts = {}) {
        /** @type {?} */
        let isScoped = this.isScopedResourceIdentifier(ri);
        /** @type {?} */
        var selectorType = isScoped ? 'scope' : opts.selectorType;
        /** @type {?} */
        let si = {
            feature: ri.feature,
            entityType: ri.type,
            selectorType: (/** @type {?} */ (selectorType))
        };
        if (isScoped) {
            si = _.merge(si, { scope: ri.filter.scope });
        }
        return si;
    }
    /**
     * @private
     * @param {?} selectorIdentifier
     * @return {?}
     */
    getBaseSelector(selectorIdentifier) {
        return this.selectorService
            .selectorFromSelectorIdentifier(selectorIdentifier);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isFindRequest(ri) {
        return !_.isEmpty(this.findPropPath(ri));
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    findPropPath(ri) {
        /** @type {?} */
        let primaryKeys = this.getPrimaryKeys(ri)
        // Simple case when primary key is 'id'
        ;
        // Simple case when primary key is 'id'
        if (_.has(ri, 'id') && _.includes(primaryKeys, 'id')) {
            return 'id';
        }
        // Alternate scenario: when the primary key is
        // mixed in with the filter params
        /** @type {?} */
        let filterKeys = _.keys(this.getFilterParams(ri));
        /** @type {?} */
        let primaryKey = _.head(_.intersection(primaryKeys, filterKeys));
        if (primaryKey) {
            return `filter.${primaryKey}`;
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    findSelector(selector, ri) {
        return buildFindSelector(selector, ri, this.findPropPath(ri));
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isFilteredResourceRequest(ri) {
        return _.has(ri, 'filter');
    }
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    filterSelector(selector, ri) {
        /** @type {?} */
        let filter = this.getFilterParams(ri);
        return buildFilterSelector(selector, filter);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    isScopedResourceIdentifier(ri) {
        return _.has(ri, 'filter.scope');
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToFeatures() {
        this.features$ =
            (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
        this.features$
            .subscribe(features => this.features = features);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getFeature(ri) {
        return this.features[ri.feature];
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getFilterParams(ri) {
        return _.omit(ri.filter, 'scope');
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getPrimaryKeys(ri) {
        /** @type {?} */
        var primaryKeys = ['id'];
        /** @type {?} */
        let feature = this.getFeature(ri);
        /** @type {?} */
        let entityType = feature.entityType(ri.type);
        if (entityType) {
            primaryKeys = entityType.config.primaryKeys || primaryKeys;
        }
        return primaryKeys;
    }
}
SelectorProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectorProvider.ctorParameters = () => [
    { type: SelectorService },
    { type: Store }
];
if (false) {
    /** @type {?} */
    SelectorProvider.prototype.features$;
    /** @type {?} */
    SelectorProvider.prototype.features;
    /**
     * @type {?}
     * @private
     */
    SelectorProvider.prototype.defaultOpts;
    /**
     * @type {?}
     * @private
     */
    SelectorProvider.prototype.selectorService;
    /**
     * @type {?}
     * @private
     */
    SelectorProvider.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9zZWxlY3RvcnMvc2VsZWN0b3ItcHJvdmlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFJM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFrQixNQUFNLGFBQWEsQ0FBQTtBQUluRCxPQUFPLEVBUUwsbUJBQW1CLEdBQ3BCLE1BQU0sd0JBQXdCLENBQUE7QUFNL0IsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixpQkFBaUIsR0FDbEIsTUFBTSxxQ0FBcUMsQ0FBQTtBQUU1QyxPQUFPLEVBQ0wsc0JBQXNCLEdBQ3ZCLE1BQU0sK0JBQStCLENBQUE7QUFHdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBSXBELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBUTNCLFlBQ1UsZUFBZ0MsRUFDaEMsS0FBaUI7UUFEakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFObkIsZ0JBQVcsR0FBUTtZQUN6QixZQUFZLEVBQUUsbUJBQTRCLG1CQUFtQixDQUFDLEdBQUcsRUFBQTtTQUNsRSxDQUFBO1FBTUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUNMLEVBQXVCLEVBQ3ZCLE9BQXlCLEVBQUU7UUFFM0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTs7WUFFckMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztZQUMxQyxJ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bnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSAgIGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHsgSW5mbGVjdGlvblNlcnZpY2UgfSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlDdXN0b21TZWxlY3RvcixcbiAgaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbiAgaUVudGl0eVNlbGVjdG9yVHlwZXMsXG4gIGlGZWF0dXJlLFxuICBpRmVhdHVyZU1hcCxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgaURhdGFTZXJ2aWNlT3B0cyxcbiAgRW50aXR5U2VsZWN0b3JUeXBlcyxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgSnNvbkFwaUVudGl0eSxcbn0gZnJvbSAnLi4vLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgYnVpbGRGaWx0ZXJTZWxlY3RvcixcbiAgYnVpbGRGaW5kU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2luZGV4J1xuXG5pbXBvcnQge1xuICBlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9mZWF0dXJlL3NlbGVjdG9ycydcblxuXG5pbXBvcnQgeyBTZWxlY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdG9yLnNlcnZpY2UnXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yUHJvdmlkZXIge1xuICBmZWF0dXJlcyQ6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+XG4gIGZlYXR1cmVzOiBpRmVhdHVyZU1hcFxuXG4gIHByaXZhdGUgZGVmYXVsdE9wdHM6IGFueSA9IHtcbiAgICBzZWxlY3RvclR5cGU6IDxrZXlvZiBpRW50aXR5U2VsZWN0b3JUeXBlcz5FbnRpdHlTZWxlY3RvclR5cGVzLkFsbFxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZWxlY3RvclNlcnZpY2U6IFNlbGVjdG9yU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICApIHtcbiAgICB0aGlzLnN1YnNjcmliZVRvRmVhdHVyZXMoKVxuICB9XG5cbiAgcHJvdmlkZShcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRzID0gXy5kZWZhdWx0cyhvcHRzLCB0aGlzLmRlZmF1bHRPcHRzKVxuXG4gICAgbGV0IHNlbGVjdG9yID0gdGhpcy5jdXN0b21TZWxlY3RvcihyaSwgb3B0cykgfHxcbiAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdG9yKHJpLCBvcHRzKVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yXG4gIH1cblxuICBwcml2YXRlIGN1c3RvbVNlbGVjdG9yKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgbGV0IGZlYXR1cmUgPSB0aGlzLmZlYXR1cmVzW3JpLmZlYXR1cmVdXG5cbiAgICBpZihmZWF0dXJlKSB7XG4gICAgICBsZXQgc2VsZWN0b3JJc1ZhbGlkID0gKHNlbGVjdG9yKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5pc1ZhbGlkKHJpKVxuICAgICAgfVxuICAgICAgbGV0IHNlbGVjdG9yID0gXy5maW5kKGZlYXR1cmUuc2VsZWN0b3JzLCBzZWxlY3RvcklzVmFsaWQpXG5cbiAgICAgIGlmKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiA8YW55PnNlbGVjdG9yLnNlbGVjdG9yKHRoaXMuc2VsZWN0b3JTZXJ2aWNlLCByaSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRTZWxlY3RvcihcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGlmKHRoaXMuaXNSZWxhdGlvbnNoaXBSZXNvdXJjZVJlcXVlc3QocmkpKSB7XG4gICAgICByaSA9IHtcbiAgICAgICAgZmVhdHVyZTogcmkuZmVhdHVyZSxcbiAgICAgICAgdHlwZTogcmkucmVsYXRpb25zaGlwLnR5cGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2kgPSB0aGlzLnNlbGVjdG9ySWRlbnRpZmllcihyaSwgb3B0cylcbiAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEJhc2VTZWxlY3RvcihzaSlcblxuICAgIGlmKHRoaXMuaXNGaW5kUmVxdWVzdChyaSkpIHtcbiAgICAgIHNlbGVjdG9yID0gdGhpcy5maW5kU2VsZWN0b3Ioc2VsZWN0b3IsIHJpKVxuICAgIH1cblxuICAgIGlmKHRoaXMuaXNGaWx0ZXJlZFJlc291cmNlUmVxdWVzdChyaSkpIHtcbiAgICAgIHNlbGVjdG9yID0gdGhpcy5maWx0ZXJTZWxlY3RvcihzZWxlY3RvciwgcmkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yXG4gIH1cblxuICBwcml2YXRlIGlzUmVsYXRpb25zaGlwUmVzb3VyY2VSZXF1ZXN0KFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdyZWxhdGlvbnNoaXAnKVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RvcklkZW50aWZpZXIoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIge1xuXG4gICAgbGV0IGlzU2NvcGVkID0gdGhpcy5pc1Njb3BlZFJlc291cmNlSWRlbnRpZmllcihyaSlcbiAgICB2YXIgc2VsZWN0b3JUeXBlID0gaXNTY29wZWQgPyAnc2NvcGUnIDogb3B0cy5zZWxlY3RvclR5cGVcbiAgICBcbiAgICBsZXQgc2kgPSB7XG4gICAgICBmZWF0dXJlOiByaS5mZWF0dXJlLFxuICAgICAgZW50aXR5VHlwZTogcmkudHlwZSxcbiAgICAgIHNlbGVjdG9yVHlwZTogPGtleW9mIGlFbnRpdHlTZWxlY3RvclR5cGVzPiBzZWxlY3RvclR5cGVcbiAgICB9XG5cbiAgICBpZihpc1Njb3BlZCkge1xuICAgICAgc2kgPSBfLm1lcmdlKHNpLCB7c2NvcGU6IHJpLmZpbHRlci5zY29wZX0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpXG4gIH1cblxuICBwcml2YXRlIGdldEJhc2VTZWxlY3RvcihcbiAgICBzZWxlY3RvcklkZW50aWZpZXI6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yU2VydmljZVxuICAgICAgLnNlbGVjdG9yRnJvbVNlbGVjdG9ySWRlbnRpZmllcihzZWxlY3RvcklkZW50aWZpZXIpXG4gIH1cblxuICBwcml2YXRlIGlzRmluZFJlcXVlc3QoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiAhXy5pc0VtcHR5KHRoaXMuZmluZFByb3BQYXRoKHJpKSlcbiAgfVxuXG4gIHByaXZhdGUgZmluZFByb3BQYXRoKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcblxuICAgIGxldCBwcmltYXJ5S2V5cyA9IHRoaXMuZ2V0UHJpbWFyeUtleXMocmkpXG5cbiAgICAvLyBTaW1wbGUgY2FzZSB3aGVuIHByaW1hcnkga2V5IGlzICdpZCdcbiAgICBpZihfLmhhcyhyaSwgJ2lkJykgJiYgXy5pbmNsdWRlcyhwcmltYXJ5S2V5cywgJ2lkJykpIHtcbiAgICAgIHJldHVybiAnaWQnXG4gICAgfVxuXG5cbiAgICAvLyBBbHRlcm5hdGUgc2NlbmFyaW86IHdoZW4gdGhlIHByaW1hcnkga2V5IGlzXG4gICAgLy8gbWl4ZWQgaW4gd2l0aCB0aGUgZmlsdGVyIHBhcmFtc1xuICAgIGxldCBmaWx0ZXJLZXlzID0gXy5rZXlzKHRoaXMuZ2V0RmlsdGVyUGFyYW1zKHJpKSlcbiAgICBsZXQgcHJpbWFyeUtleSA9IF8uaGVhZChfLmludGVyc2VjdGlvbihwcmltYXJ5S2V5cywgZmlsdGVyS2V5cykpXG4gICAgaWYocHJpbWFyeUtleSkge1xuICAgICAgcmV0dXJuIGBmaWx0ZXIuJHtwcmltYXJ5S2V5fWBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFNlbGVjdG9yKFxuICAgIHNlbGVjdG9yOiBhbnksXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICk6IGFueSB7XG4gICAgcmV0dXJuIGJ1aWxkRmluZFNlbGVjdG9yKHNlbGVjdG9yLCByaSwgdGhpcy5maW5kUHJvcFBhdGgocmkpKVxuICB9XG5cbiAgcHJpdmF0ZSBpc0ZpbHRlcmVkUmVzb3VyY2VSZXF1ZXN0KFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdmaWx0ZXInKVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJTZWxlY3RvcihcbiAgICBzZWxlY3RvcjogYW55LFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcblxuICAgIGxldCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlclBhcmFtcyhyaSlcbiAgICByZXR1cm4gYnVpbGRGaWx0ZXJTZWxlY3RvcihzZWxlY3RvciwgZmlsdGVyKVxuICB9XG5cbiAgcHJpdmF0ZSBpc1Njb3BlZFJlc291cmNlSWRlbnRpZmllcihyaTogaVJlc291cmNlSWRlbnRpZmllciwpIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdmaWx0ZXIuc2NvcGUnKVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0ZlYXR1cmVzKCkge1xuICAgIHRoaXMuZmVhdHVyZXMkID0gXG4gICAgICA8T2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4+dGhpcy5zdG9yZS5zZWxlY3QoZW50aXR5RmVhdHVyZVNlbGVjdG9ycy5mZWF0dXJlcylcbiAgICB0aGlzLmZlYXR1cmVzJFxuICAgICAgLnN1YnNjcmliZShmZWF0dXJlcyA9PiB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZXMpXG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmUocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlc1tyaS5mZWF0dXJlXVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWx0ZXJQYXJhbXMocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gXy5vbWl0KHJpLmZpbHRlciwgJ3Njb3BlJylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJpbWFyeUtleXMocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpOiBzdHJpbmdbXSB7XG4gICAgdmFyIHByaW1hcnlLZXlzID0gWydpZCddXG4gICAgbGV0IGZlYXR1cmUgPSB0aGlzLmdldEZlYXR1cmUocmkpXG4gICAgbGV0IGVudGl0eVR5cGUgPSBmZWF0dXJlLmVudGl0eVR5cGUocmkudHlwZSlcblxuICAgIGlmKGVudGl0eVR5cGUpIHtcbiAgICAgIHByaW1hcnlLZXlzID0gZW50aXR5VHlwZS5jb25maWcucHJpbWFyeUtleXMgfHwgcHJpbWFyeUtleXNcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpbWFyeUtleXNcbiAgfVxufVxuIl19