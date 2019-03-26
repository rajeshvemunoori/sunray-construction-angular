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
var SelectorProvider = /** @class */ (function () {
    function SelectorProvider(selectorService, store) {
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
    SelectorProvider.prototype.provide = /**
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        opts = _.defaults(opts, this.defaultOpts);
        /** @type {?} */
        var selector = this.customSelector(ri, opts) ||
            this.defaultSelector(ri, opts);
        return selector;
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    SelectorProvider.prototype.customSelector = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var feature = this.features[ri.feature];
        if (feature) {
            /** @type {?} */
            var selectorIsValid = function (selector) {
                return selector.isValid(ri);
            };
            /** @type {?} */
            var selector = _.find(feature.selectors, selectorIsValid);
            if (selector) {
                return (/** @type {?} */ (selector.selector(this.selectorService, ri)));
            }
            else {
                return null;
            }
        }
        return null;
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    SelectorProvider.prototype.defaultSelector = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        if (this.isRelationshipResourceRequest(ri)) {
            ri = {
                feature: ri.feature,
                type: ri.relationship.type
            };
        }
        /** @type {?} */
        var si = this.selectorIdentifier(ri, opts);
        /** @type {?} */
        var selector = this.getBaseSelector(si);
        if (this.isFindRequest(ri)) {
            selector = this.findSelector(selector, ri);
        }
        if (this.isFilteredResourceRequest(ri)) {
            selector = this.filterSelector(selector, ri);
        }
        return selector;
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isRelationshipResourceRequest = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.has(ri, 'relationship');
    };
    /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    SelectorProvider.prototype.selectorIdentifier = /**
     * @private
     * @param {?} ri
     * @param {?=} opts
     * @return {?}
     */
    function (ri, opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var isScoped = this.isScopedResourceIdentifier(ri);
        /** @type {?} */
        var selectorType = isScoped ? 'scope' : opts.selectorType;
        /** @type {?} */
        var si = {
            feature: ri.feature,
            entityType: ri.type,
            selectorType: (/** @type {?} */ (selectorType))
        };
        if (isScoped) {
            si = _.merge(si, { scope: ri.filter.scope });
        }
        return si;
    };
    /**
     * @private
     * @param {?} selectorIdentifier
     * @return {?}
     */
    SelectorProvider.prototype.getBaseSelector = /**
     * @private
     * @param {?} selectorIdentifier
     * @return {?}
     */
    function (selectorIdentifier) {
        return this.selectorService
            .selectorFromSelectorIdentifier(selectorIdentifier);
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isFindRequest = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return !_.isEmpty(this.findPropPath(ri));
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.findPropPath = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var primaryKeys = this.getPrimaryKeys(ri)
        // Simple case when primary key is 'id'
        ;
        // Simple case when primary key is 'id'
        if (_.has(ri, 'id') && _.includes(primaryKeys, 'id')) {
            return 'id';
        }
        // Alternate scenario: when the primary key is
        // mixed in with the filter params
        /** @type {?} */
        var filterKeys = _.keys(this.getFilterParams(ri));
        /** @type {?} */
        var primaryKey = _.head(_.intersection(primaryKeys, filterKeys));
        if (primaryKey) {
            return "filter." + primaryKey;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.findSelector = /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    function (selector, ri) {
        return buildFindSelector(selector, ri, this.findPropPath(ri));
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isFilteredResourceRequest = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.has(ri, 'filter');
    };
    /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.filterSelector = /**
     * @private
     * @param {?} selector
     * @param {?} ri
     * @return {?}
     */
    function (selector, ri) {
        /** @type {?} */
        var filter = this.getFilterParams(ri);
        return buildFilterSelector(selector, filter);
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.isScopedResourceIdentifier = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.has(ri, 'filter.scope');
    };
    /**
     * @private
     * @return {?}
     */
    SelectorProvider.prototype.subscribeToFeatures = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.features$ =
            (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
        this.features$
            .subscribe(function (features) { return _this.features = features; });
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.getFeature = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return this.features[ri.feature];
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.getFilterParams = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.omit(ri.filter, 'scope');
    };
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    SelectorProvider.prototype.getPrimaryKeys = /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var primaryKeys = ['id'];
        /** @type {?} */
        var feature = this.getFeature(ri);
        /** @type {?} */
        var entityType = feature.entityType(ri.type);
        if (entityType) {
            primaryKeys = entityType.config.primaryKeys || primaryKeys;
        }
        return primaryKeys;
    };
    SelectorProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectorProvider.ctorParameters = function () { return [
        { type: SelectorService },
        { type: Store }
    ]; };
    return SelectorProvider;
}());
export { SelectorProvider };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9zZWxlY3RvcnMvc2VsZWN0b3ItcHJvdmlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFJM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFrQixNQUFNLGFBQWEsQ0FBQTtBQUluRCxPQUFPLEVBUUwsbUJBQW1CLEdBQ3BCLE1BQU0sd0JBQXdCLENBQUE7QUFNL0IsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixpQkFBaUIsR0FDbEIsTUFBTSxxQ0FBcUMsQ0FBQTtBQUU1QyxPQUFPLEVBQ0wsc0JBQXNCLEdBQ3ZCLE1BQU0sK0JBQStCLENBQUE7QUFHdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBR3BEO0lBU0UsMEJBQ1UsZUFBZ0MsRUFDaEMsS0FBaUI7UUFEakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFObkIsZ0JBQVcsR0FBUTtZQUN6QixZQUFZLEVBQUUsbUJBQTRCLG1CQUFtQixDQUFDLEdBQUcsRUFBQTtTQUNsRSxDQUFBO1FBTUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsa0NBQU87Ozs7O0lBQVAsVUFDRSxFQUF1QixFQUN2QixJQUEyQjtRQUEzQixxQkFBQSxFQUFBLFNBQTJCO1FBRTNCLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7O1lBRXJDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7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QUFFO1lBQ2IsV0FBVyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQTtTQUMzRDtRQUVELE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7O2dCQWpNRixVQUFVOzs7O2dCQUhGLGVBQWU7Z0JBN0JmLEtBQUs7O0lBa09kLHVCQUFDO0NBQUEsQUFsTUQsSUFrTUM7U0FqTVksZ0JBQWdCOzs7SUFDM0IscUNBQWtDOztJQUNsQyxvQ0FBcUI7Ozs7O0lBRXJCLHVDQUVDOzs7OztJQUdDLDJDQUF3Qzs7Ozs7SUFDeEMsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSAgIGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHsgSW5mbGVjdGlvblNlcnZpY2UgfSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlDdXN0b21TZWxlY3RvcixcbiAgaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbiAgaUVudGl0eVNlbGVjdG9yVHlwZXMsXG4gIGlGZWF0dXJlLFxuICBpRmVhdHVyZU1hcCxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgaURhdGFTZXJ2aWNlT3B0cyxcbiAgRW50aXR5U2VsZWN0b3JUeXBlcyxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgSnNvbkFwaUVudGl0eSxcbn0gZnJvbSAnLi4vLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgYnVpbGRGaWx0ZXJTZWxlY3RvcixcbiAgYnVpbGRGaW5kU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2luZGV4J1xuXG5pbXBvcnQge1xuICBlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9mZWF0dXJlL3NlbGVjdG9ycydcblxuXG5pbXBvcnQgeyBTZWxlY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdG9yLnNlcnZpY2UnXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yUHJvdmlkZXIge1xuICBmZWF0dXJlcyQ6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+XG4gIGZlYXR1cmVzOiBpRmVhdHVyZU1hcFxuXG4gIHByaXZhdGUgZGVmYXVsdE9wdHM6IGFueSA9IHtcbiAgICBzZWxlY3RvclR5cGU6IDxrZXlvZiBpRW50aXR5U2VsZWN0b3JUeXBlcz5FbnRpdHlTZWxlY3RvclR5cGVzLkFsbFxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZWxlY3RvclNlcnZpY2U6IFNlbGVjdG9yU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICApIHtcbiAgICB0aGlzLnN1YnNjcmliZVRvRmVhdHVyZXMoKVxuICB9XG5cbiAgcHJvdmlkZShcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRzID0gXy5kZWZhdWx0cyhvcHRzLCB0aGlzLmRlZmF1bHRPcHRzKVxuXG4gICAgbGV0IHNlbGVjdG9yID0gdGhpcy5jdXN0b21TZWxlY3RvcihyaSwgb3B0cykgfHxcbiAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdG9yKHJpLCBvcHRzKVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yXG4gIH1cblxuICBwcml2YXRlIGN1c3RvbVNlbGVjdG9yKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgbGV0IGZlYXR1cmUgPSB0aGlzLmZlYXR1cmVzW3JpLmZlYXR1cmVdXG5cbiAgICBpZihmZWF0dXJlKSB7XG4gICAgICBsZXQgc2VsZWN0b3JJc1ZhbGlkID0gKHNlbGVjdG9yKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5pc1ZhbGlkKHJpKVxuICAgICAgfVxuICAgICAgbGV0IHNlbGVjdG9yID0gXy5maW5kKGZlYXR1cmUuc2VsZWN0b3JzLCBzZWxlY3RvcklzVmFsaWQpXG5cbiAgICAgIGlmKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiA8YW55PnNlbGVjdG9yLnNlbGVjdG9yKHRoaXMuc2VsZWN0b3JTZXJ2aWNlLCByaSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRTZWxlY3RvcihcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGlmKHRoaXMuaXNSZWxhdGlvbnNoaXBSZXNvdXJjZVJlcXVlc3QocmkpKSB7XG4gICAgICByaSA9IHtcbiAgICAgICAgZmVhdHVyZTogcmkuZmVhdHVyZSxcbiAgICAgICAgdHlwZTogcmkucmVsYXRpb25zaGlwLnR5cGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2kgPSB0aGlzLnNlbGVjdG9ySWRlbnRpZmllcihyaSwgb3B0cylcbiAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEJhc2VTZWxlY3RvcihzaSlcblxuICAgIGlmKHRoaXMuaXNGaW5kUmVxdWVzdChyaSkpIHtcbiAgICAgIHNlbGVjdG9yID0gdGhpcy5maW5kU2VsZWN0b3Ioc2VsZWN0b3IsIHJpKVxuICAgIH1cblxuICAgIGlmKHRoaXMuaXNGaWx0ZXJlZFJlc291cmNlUmVxdWVzdChyaSkpIHtcbiAgICAgIHNlbGVjdG9yID0gdGhpcy5maWx0ZXJTZWxlY3RvcihzZWxlY3RvciwgcmkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yXG4gIH1cblxuICBwcml2YXRlIGlzUmVsYXRpb25zaGlwUmVzb3VyY2VSZXF1ZXN0KFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdyZWxhdGlvbnNoaXAnKVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RvcklkZW50aWZpZXIoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIge1xuXG4gICAgbGV0IGlzU2NvcGVkID0gdGhpcy5pc1Njb3BlZFJlc291cmNlSWRlbnRpZmllcihyaSlcbiAgICB2YXIgc2VsZWN0b3JUeXBlID0gaXNTY29wZWQgPyAnc2NvcGUnIDogb3B0cy5zZWxlY3RvclR5cGVcbiAgICBcbiAgICBsZXQgc2kgPSB7XG4gICAgICBmZWF0dXJlOiByaS5mZWF0dXJlLFxuICAgICAgZW50aXR5VHlwZTogcmkudHlwZSxcbiAgICAgIHNlbGVjdG9yVHlwZTogPGtleW9mIGlFbnRpdHlTZWxlY3RvclR5cGVzPiBzZWxlY3RvclR5cGVcbiAgICB9XG5cbiAgICBpZihpc1Njb3BlZCkge1xuICAgICAgc2kgPSBfLm1lcmdlKHNpLCB7c2NvcGU6IHJpLmZpbHRlci5zY29wZX0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpXG4gIH1cblxuICBwcml2YXRlIGdldEJhc2VTZWxlY3RvcihcbiAgICBzZWxlY3RvcklkZW50aWZpZXI6IGlFbnRpdHlTZWxlY3RvcklkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yU2VydmljZVxuICAgICAgLnNlbGVjdG9yRnJvbVNlbGVjdG9ySWRlbnRpZmllcihzZWxlY3RvcklkZW50aWZpZXIpXG4gIH1cblxuICBwcml2YXRlIGlzRmluZFJlcXVlc3QoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiAhXy5pc0VtcHR5KHRoaXMuZmluZFByb3BQYXRoKHJpKSlcbiAgfVxuXG4gIHByaXZhdGUgZmluZFByb3BQYXRoKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcblxuICAgIGxldCBwcmltYXJ5S2V5cyA9IHRoaXMuZ2V0UHJpbWFyeUtleXMocmkpXG5cbiAgICAvLyBTaW1wbGUgY2FzZSB3aGVuIHByaW1hcnkga2V5IGlzICdpZCdcbiAgICBpZihfLmhhcyhyaSwgJ2lkJykgJiYgXy5pbmNsdWRlcyhwcmltYXJ5S2V5cywgJ2lkJykpIHtcbiAgICAgIHJldHVybiAnaWQnXG4gICAgfVxuXG5cbiAgICAvLyBBbHRlcm5hdGUgc2NlbmFyaW86IHdoZW4gdGhlIHByaW1hcnkga2V5IGlzXG4gICAgLy8gbWl4ZWQgaW4gd2l0aCB0aGUgZmlsdGVyIHBhcmFtc1xuICAgIGxldCBmaWx0ZXJLZXlzID0gXy5rZXlzKHRoaXMuZ2V0RmlsdGVyUGFyYW1zKHJpKSlcbiAgICBsZXQgcHJpbWFyeUtleSA9IF8uaGVhZChfLmludGVyc2VjdGlvbihwcmltYXJ5S2V5cywgZmlsdGVyS2V5cykpXG4gICAgaWYocHJpbWFyeUtleSkge1xuICAgICAgcmV0dXJuIGBmaWx0ZXIuJHtwcmltYXJ5S2V5fWBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFNlbGVjdG9yKFxuICAgIHNlbGVjdG9yOiBhbnksXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICk6IGFueSB7XG4gICAgcmV0dXJuIGJ1aWxkRmluZFNlbGVjdG9yKHNlbGVjdG9yLCByaSwgdGhpcy5maW5kUHJvcFBhdGgocmkpKVxuICB9XG5cbiAgcHJpdmF0ZSBpc0ZpbHRlcmVkUmVzb3VyY2VSZXF1ZXN0KFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdmaWx0ZXInKVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJTZWxlY3RvcihcbiAgICBzZWxlY3RvcjogYW55LFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICApIHtcblxuICAgIGxldCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlclBhcmFtcyhyaSlcbiAgICByZXR1cm4gYnVpbGRGaWx0ZXJTZWxlY3RvcihzZWxlY3RvciwgZmlsdGVyKVxuICB9XG5cbiAgcHJpdmF0ZSBpc1Njb3BlZFJlc291cmNlSWRlbnRpZmllcihyaTogaVJlc291cmNlSWRlbnRpZmllciwpIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdmaWx0ZXIuc2NvcGUnKVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0ZlYXR1cmVzKCkge1xuICAgIHRoaXMuZmVhdHVyZXMkID0gXG4gICAgICA8T2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4+dGhpcy5zdG9yZS5zZWxlY3QoZW50aXR5RmVhdHVyZVNlbGVjdG9ycy5mZWF0dXJlcylcbiAgICB0aGlzLmZlYXR1cmVzJFxuICAgICAgLnN1YnNjcmliZShmZWF0dXJlcyA9PiB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZXMpXG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmUocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlc1tyaS5mZWF0dXJlXVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWx0ZXJQYXJhbXMocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gXy5vbWl0KHJpLmZpbHRlciwgJ3Njb3BlJylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJpbWFyeUtleXMocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpOiBzdHJpbmdbXSB7XG4gICAgdmFyIHByaW1hcnlLZXlzID0gWydpZCddXG4gICAgbGV0IGZlYXR1cmUgPSB0aGlzLmdldEZlYXR1cmUocmkpXG4gICAgbGV0IGVudGl0eVR5cGUgPSBmZWF0dXJlLmVudGl0eVR5cGUocmkudHlwZSlcblxuICAgIGlmKGVudGl0eVR5cGUpIHtcbiAgICAgIHByaW1hcnlLZXlzID0gZW50aXR5VHlwZS5jb25maWcucHJpbWFyeUtleXMgfHwgcHJpbWFyeUtleXNcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpbWFyeUtleXNcbiAgfVxufVxuIl19