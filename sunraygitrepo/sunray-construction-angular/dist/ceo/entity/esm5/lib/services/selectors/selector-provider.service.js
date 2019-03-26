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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NlbGVjdG9ycy9zZWxlY3Rvci1wcm92aWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUkzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQWtCLE1BQU0sYUFBYSxDQUFBO0FBSW5ELE9BQU8sRUFRTCxtQkFBbUIsR0FDcEIsTUFBTSx3QkFBd0IsQ0FBQTtBQU0vQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLHFDQUFxQyxDQUFBO0FBRTVDLE9BQU8sRUFDTCxzQkFBc0IsR0FDdkIsTUFBTSwrQkFBK0IsQ0FBQTtBQUd0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFHcEQ7SUFTRSwwQkFDVSxlQUFnQyxFQUNoQyxLQUFpQjtRQURqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQU5uQixnQkFBVyxHQUFRO1lBQ3pCLFlBQVksRUFBRSxtQkFBNEIsbUJBQW1CLENBQUMsR0FBRyxFQUFBO1NBQ2xFLENBQUE7UUFNQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtJQUM1QixDQUFDOzs7Ozs7SUFFRCxrQ0FBTzs7Ozs7SUFBUCxVQUNFLEVBQXVCLEVBQ3ZCLElBQTJCO1FBQTNCLHFCQUFBLEVBQUEsU0FBMkI7UUFFM0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTs7WUFFckMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztZQUMxQyxJ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YixXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFBO1NBQzNEO1FBRUQsT0FBTyxXQUFXLENBQUE7SUFDcEIsQ0FBQzs7Z0JBak1GLFVBQVU7Ozs7Z0JBSEYsZUFBZTtnQkE3QmYsS0FBSzs7SUFrT2QsdUJBQUM7Q0FBQSxBQWxNRCxJQWtNQztTQWpNWSxnQkFBZ0I7OztJQUMzQixxQ0FBa0M7O0lBQ2xDLG9DQUFxQjs7Ozs7SUFFckIsdUNBRUM7Ozs7O0lBR0MsMkNBQXdDOzs7OztJQUN4QyxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgZnJvbSAncnhqcydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQgeyBJbmZsZWN0aW9uU2VydmljZSB9IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaUN1c3RvbVNlbGVjdG9yLFxuICBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyLFxuICBpRW50aXR5U2VsZWN0b3JUeXBlcyxcbiAgaUZlYXR1cmUsXG4gIGlGZWF0dXJlTWFwLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICBpRGF0YVNlcnZpY2VPcHRzLFxuICBFbnRpdHlTZWxlY3RvclR5cGVzLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBKc29uQXBpRW50aXR5LFxufSBmcm9tICcuLi8uLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBidWlsZEZpbHRlclNlbGVjdG9yLFxuICBidWlsZEZpbmRTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vdXRpbC9idWlsZGVycy9zZWxlY3RvcnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGVudGl0eUZlYXR1cmVTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uL3N0YXRlL2ZlYXR1cmUvc2VsZWN0b3JzJ1xuXG5cbmltcG9ydCB7IFNlbGVjdG9yU2VydmljZSB9IGZyb20gJy4vc2VsZWN0b3Iuc2VydmljZSdcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JQcm92aWRlciB7XG4gIGZlYXR1cmVzJDogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD5cbiAgZmVhdHVyZXM6IGlGZWF0dXJlTWFwXG5cbiAgcHJpdmF0ZSBkZWZhdWx0T3B0czogYW55ID0ge1xuICAgIHNlbGVjdG9yVHlwZTogPGtleW9mIGlFbnRpdHlTZWxlY3RvclR5cGVzPkVudGl0eVNlbGVjdG9yVHlwZXMuQWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlbGVjdG9yU2VydmljZTogU2VsZWN0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaWJlVG9GZWF0dXJlcygpXG4gIH1cblxuICBwcm92aWRlKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdHMgPSBfLmRlZmF1bHRzKG9wdHMsIHRoaXMuZGVmYXVsdE9wdHMpXG5cbiAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmN1c3RvbVNlbGVjdG9yKHJpLCBvcHRzKSB8fFxuICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0b3IocmksIG9wdHMpXG5cbiAgICByZXR1cm4gc2VsZWN0b3JcbiAgfVxuXG4gIHByaXZhdGUgY3VzdG9tU2VsZWN0b3IoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgZmVhdHVyZSA9IHRoaXMuZmVhdHVyZXNbcmkuZmVhdHVyZV1cblxuICAgIGlmKGZlYXR1cmUpIHtcbiAgICAgIGxldCBzZWxlY3RvcklzVmFsaWQgPSAoc2VsZWN0b3IpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmlzVmFsaWQocmkpXG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0b3IgPSBfLmZpbmQoZmVhdHVyZS5zZWxlY3RvcnMsIHNlbGVjdG9ySXNWYWxpZClcblxuICAgICAgaWYoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIDxhbnk+c2VsZWN0b3Iuc2VsZWN0b3IodGhpcy5zZWxlY3RvclNlcnZpY2UsIHJpKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdFNlbGVjdG9yKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgaWYodGhpcy5pc1JlbGF0aW9uc2hpcFJlc291cmNlUmVxdWVzdChyaSkpIHtcbiAgICAgIHJpID0ge1xuICAgICAgICBmZWF0dXJlOiByaS5mZWF0dXJlLFxuICAgICAgICB0eXBlOiByaS5yZWxhdGlvbnNoaXAudHlwZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzaSA9IHRoaXMuc2VsZWN0b3JJZGVudGlmaWVyKHJpLCBvcHRzKVxuICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0QmFzZVNlbGVjdG9yKHNpKVxuXG4gICAgaWYodGhpcy5pc0ZpbmRSZXF1ZXN0KHJpKSkge1xuICAgICAgc2VsZWN0b3IgPSB0aGlzLmZpbmRTZWxlY3RvcihzZWxlY3RvciwgcmkpXG4gICAgfVxuXG4gICAgaWYodGhpcy5pc0ZpbHRlcmVkUmVzb3VyY2VSZXF1ZXN0KHJpKSkge1xuICAgICAgc2VsZWN0b3IgPSB0aGlzLmZpbHRlclNlbGVjdG9yKHNlbGVjdG9yLCByaSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3JcbiAgfVxuXG4gIHByaXZhdGUgaXNSZWxhdGlvbnNoaXBSZXNvdXJjZVJlcXVlc3QoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ3JlbGF0aW9uc2hpcCcpXG4gIH1cblxuICBwcml2YXRlIHNlbGVjdG9ySWRlbnRpZmllcihcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllciB7XG5cbiAgICBsZXQgaXNTY29wZWQgPSB0aGlzLmlzU2NvcGVkUmVzb3VyY2VJZGVudGlmaWVyKHJpKVxuICAgIHZhciBzZWxlY3RvclR5cGUgPSBpc1Njb3BlZCA/ICdzY29wZScgOiBvcHRzLnNlbGVjdG9yVHlwZVxuICAgIFxuICAgIGxldCBzaSA9IHtcbiAgICAgIGZlYXR1cmU6IHJpLmZlYXR1cmUsXG4gICAgICBlbnRpdHlUeXBlOiByaS50eXBlLFxuICAgICAgc2VsZWN0b3JUeXBlOiA8a2V5b2YgaUVudGl0eVNlbGVjdG9yVHlwZXM+IHNlbGVjdG9yVHlwZVxuICAgIH1cblxuICAgIGlmKGlzU2NvcGVkKSB7XG4gICAgICBzaSA9IF8ubWVyZ2Uoc2ksIHtzY29wZTogcmkuZmlsdGVyLnNjb3BlfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2lcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmFzZVNlbGVjdG9yKFxuICAgIHNlbGVjdG9ySWRlbnRpZmllcjogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JTZXJ2aWNlXG4gICAgICAuc2VsZWN0b3JGcm9tU2VsZWN0b3JJZGVudGlmaWVyKHNlbGVjdG9ySWRlbnRpZmllcilcbiAgfVxuXG4gIHByaXZhdGUgaXNGaW5kUmVxdWVzdChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgKSB7XG4gICAgcmV0dXJuICFfLmlzRW1wdHkodGhpcy5maW5kUHJvcFBhdGgocmkpKVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUHJvcFBhdGgoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuXG4gICAgbGV0IHByaW1hcnlLZXlzID0gdGhpcy5nZXRQcmltYXJ5S2V5cyhyaSlcblxuICAgIC8vIFNpbXBsZSBjYXNlIHdoZW4gcHJpbWFyeSBrZXkgaXMgJ2lkJ1xuICAgIGlmKF8uaGFzKHJpLCAnaWQnKSAmJiBfLmluY2x1ZGVzKHByaW1hcnlLZXlzLCAnaWQnKSkge1xuICAgICAgcmV0dXJuICdpZCdcbiAgICB9XG5cblxuICAgIC8vIEFsdGVybmF0ZSBzY2VuYXJpbzogd2hlbiB0aGUgcHJpbWFyeSBrZXkgaXNcbiAgICAvLyBtaXhlZCBpbiB3aXRoIHRoZSBmaWx0ZXIgcGFyYW1zXG4gICAgbGV0IGZpbHRlcktleXMgPSBfLmtleXModGhpcy5nZXRGaWx0ZXJQYXJhbXMocmkpKVxuICAgIGxldCBwcmltYXJ5S2V5ID0gXy5oZWFkKF8uaW50ZXJzZWN0aW9uKHByaW1hcnlLZXlzLCBmaWx0ZXJLZXlzKSlcbiAgICBpZihwcmltYXJ5S2V5KSB7XG4gICAgICByZXR1cm4gYGZpbHRlci4ke3ByaW1hcnlLZXl9YFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2VsZWN0b3IoXG4gICAgc2VsZWN0b3I6IGFueSxcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgKTogYW55IHtcbiAgICByZXR1cm4gYnVpbGRGaW5kU2VsZWN0b3Ioc2VsZWN0b3IsIHJpLCB0aGlzLmZpbmRQcm9wUGF0aChyaSkpXG4gIH1cblxuICBwcml2YXRlIGlzRmlsdGVyZWRSZXNvdXJjZVJlcXVlc3QoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ2ZpbHRlcicpXG4gIH1cblxuICBwcml2YXRlIGZpbHRlclNlbGVjdG9yKFxuICAgIHNlbGVjdG9yOiBhbnksXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuXG4gICAgbGV0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyUGFyYW1zKHJpKVxuICAgIHJldHVybiBidWlsZEZpbHRlclNlbGVjdG9yKHNlbGVjdG9yLCBmaWx0ZXIpXG4gIH1cblxuICBwcml2YXRlIGlzU2NvcGVkUmVzb3VyY2VJZGVudGlmaWVyKHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLCkge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ2ZpbHRlci5zY29wZScpXG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvRmVhdHVyZXMoKSB7XG4gICAgdGhpcy5mZWF0dXJlcyQgPSBcbiAgICAgIDxPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPj50aGlzLnN0b3JlLnNlbGVjdChlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLmZlYXR1cmVzKVxuICAgIHRoaXMuZmVhdHVyZXMkXG4gICAgICAuc3Vic2NyaWJlKGZlYXR1cmVzID0+IHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlcylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZShyaTogaVJlc291cmNlSWRlbnRpZmllcikge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzW3JpLmZlYXR1cmVdXG4gIH1cblxuICBwcml2YXRlIGdldEZpbHRlclBhcmFtcyhyaTogaVJlc291cmNlSWRlbnRpZmllcikge1xuICAgIHJldHVybiBfLm9taXQocmkuZmlsdGVyLCAnc2NvcGUnKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmltYXJ5S2V5cyhyaTogaVJlc291cmNlSWRlbnRpZmllcik6IHN0cmluZ1tdIHtcbiAgICB2YXIgcHJpbWFyeUtleXMgPSBbJ2lkJ11cbiAgICBsZXQgZmVhdHVyZSA9IHRoaXMuZ2V0RmVhdHVyZShyaSlcbiAgICBsZXQgZW50aXR5VHlwZSA9IGZlYXR1cmUuZW50aXR5VHlwZShyaS50eXBlKVxuXG4gICAgaWYoZW50aXR5VHlwZSkge1xuICAgICAgcHJpbWFyeUtleXMgPSBlbnRpdHlUeXBlLmNvbmZpZy5wcmltYXJ5S2V5cyB8fCBwcmltYXJ5S2V5c1xuICAgIH1cblxuICAgIHJldHVybiBwcmltYXJ5S2V5c1xuICB9XG59XG4iXX0=