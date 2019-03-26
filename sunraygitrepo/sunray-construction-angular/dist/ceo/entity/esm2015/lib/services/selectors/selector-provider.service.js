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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3ItcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NlbGVjdG9ycy9zZWxlY3Rvci1wcm92aWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUkzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQWtCLE1BQU0sYUFBYSxDQUFBO0FBSW5ELE9BQU8sRUFRTCxtQkFBbUIsR0FDcEIsTUFBTSx3QkFBd0IsQ0FBQTtBQU0vQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLHFDQUFxQyxDQUFBO0FBRTVDLE9BQU8sRUFDTCxzQkFBc0IsR0FDdkIsTUFBTSwrQkFBK0IsQ0FBQTtBQUd0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFJcEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFRM0IsWUFDVSxlQUFnQyxFQUNoQyxLQUFpQjtRQURqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQU5uQixnQkFBVyxHQUFRO1lBQ3pCLFlBQVksRUFBRSxtQkFBNEIsbUJBQW1CLENBQUMsR0FBRyxFQUFBO1NBQ2xFLENBQUE7UUFNQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtJQUM1QixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQ0wsRUFBdUIsRUFDdkIsT0FBeUIsRUFBRTtRQUUzQixJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztZQUVyQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1lBQzFDLElBQUksQ0FB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bXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgZnJvbSAncnhqcydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQgeyBJbmZsZWN0aW9uU2VydmljZSB9IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaUN1c3RvbVNlbGVjdG9yLFxuICBpRW50aXR5U2VsZWN0b3JJZGVudGlmaWVyLFxuICBpRW50aXR5U2VsZWN0b3JUeXBlcyxcbiAgaUZlYXR1cmUsXG4gIGlGZWF0dXJlTWFwLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICBpRGF0YVNlcnZpY2VPcHRzLFxuICBFbnRpdHlTZWxlY3RvclR5cGVzLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBKc29uQXBpRW50aXR5LFxufSBmcm9tICcuLi8uLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBidWlsZEZpbHRlclNlbGVjdG9yLFxuICBidWlsZEZpbmRTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vdXRpbC9idWlsZGVycy9zZWxlY3RvcnMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGVudGl0eUZlYXR1cmVTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uL3N0YXRlL2ZlYXR1cmUvc2VsZWN0b3JzJ1xuXG5cbmltcG9ydCB7IFNlbGVjdG9yU2VydmljZSB9IGZyb20gJy4vc2VsZWN0b3Iuc2VydmljZSdcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JQcm92aWRlciB7XG4gIGZlYXR1cmVzJDogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD5cbiAgZmVhdHVyZXM6IGlGZWF0dXJlTWFwXG5cbiAgcHJpdmF0ZSBkZWZhdWx0T3B0czogYW55ID0ge1xuICAgIHNlbGVjdG9yVHlwZTogPGtleW9mIGlFbnRpdHlTZWxlY3RvclR5cGVzPkVudGl0eVNlbGVjdG9yVHlwZXMuQWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlbGVjdG9yU2VydmljZTogU2VsZWN0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaWJlVG9GZWF0dXJlcygpXG4gIH1cblxuICBwcm92aWRlKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdHMgPSBfLmRlZmF1bHRzKG9wdHMsIHRoaXMuZGVmYXVsdE9wdHMpXG5cbiAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmN1c3RvbVNlbGVjdG9yKHJpLCBvcHRzKSB8fFxuICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0b3IocmksIG9wdHMpXG5cbiAgICByZXR1cm4gc2VsZWN0b3JcbiAgfVxuXG4gIHByaXZhdGUgY3VzdG9tU2VsZWN0b3IoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgZmVhdHVyZSA9IHRoaXMuZmVhdHVyZXNbcmkuZmVhdHVyZV1cblxuICAgIGlmKGZlYXR1cmUpIHtcbiAgICAgIGxldCBzZWxlY3RvcklzVmFsaWQgPSAoc2VsZWN0b3IpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmlzVmFsaWQocmkpXG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0b3IgPSBfLmZpbmQoZmVhdHVyZS5zZWxlY3RvcnMsIHNlbGVjdG9ySXNWYWxpZClcblxuICAgICAgaWYoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIDxhbnk+c2VsZWN0b3Iuc2VsZWN0b3IodGhpcy5zZWxlY3RvclNlcnZpY2UsIHJpKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdFNlbGVjdG9yKFxuICAgIHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgaWYodGhpcy5pc1JlbGF0aW9uc2hpcFJlc291cmNlUmVxdWVzdChyaSkpIHtcbiAgICAgIHJpID0ge1xuICAgICAgICBmZWF0dXJlOiByaS5mZWF0dXJlLFxuICAgICAgICB0eXBlOiByaS5yZWxhdGlvbnNoaXAudHlwZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzaSA9IHRoaXMuc2VsZWN0b3JJZGVudGlmaWVyKHJpLCBvcHRzKVxuICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0QmFzZVNlbGVjdG9yKHNpKVxuXG4gICAgaWYodGhpcy5pc0ZpbmRSZXF1ZXN0KHJpKSkge1xuICAgICAgc2VsZWN0b3IgPSB0aGlzLmZpbmRTZWxlY3RvcihzZWxlY3RvciwgcmkpXG4gICAgfVxuXG4gICAgaWYodGhpcy5pc0ZpbHRlcmVkUmVzb3VyY2VSZXF1ZXN0KHJpKSkge1xuICAgICAgc2VsZWN0b3IgPSB0aGlzLmZpbHRlclNlbGVjdG9yKHNlbGVjdG9yLCByaSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3JcbiAgfVxuXG4gIHByaXZhdGUgaXNSZWxhdGlvbnNoaXBSZXNvdXJjZVJlcXVlc3QoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ3JlbGF0aW9uc2hpcCcpXG4gIH1cblxuICBwcml2YXRlIHNlbGVjdG9ySWRlbnRpZmllcihcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllciB7XG5cbiAgICBsZXQgaXNTY29wZWQgPSB0aGlzLmlzU2NvcGVkUmVzb3VyY2VJZGVudGlmaWVyKHJpKVxuICAgIHZhciBzZWxlY3RvclR5cGUgPSBpc1Njb3BlZCA/ICdzY29wZScgOiBvcHRzLnNlbGVjdG9yVHlwZVxuICAgIFxuICAgIGxldCBzaSA9IHtcbiAgICAgIGZlYXR1cmU6IHJpLmZlYXR1cmUsXG4gICAgICBlbnRpdHlUeXBlOiByaS50eXBlLFxuICAgICAgc2VsZWN0b3JUeXBlOiA8a2V5b2YgaUVudGl0eVNlbGVjdG9yVHlwZXM+IHNlbGVjdG9yVHlwZVxuICAgIH1cblxuICAgIGlmKGlzU2NvcGVkKSB7XG4gICAgICBzaSA9IF8ubWVyZ2Uoc2ksIHtzY29wZTogcmkuZmlsdGVyLnNjb3BlfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2lcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmFzZVNlbGVjdG9yKFxuICAgIHNlbGVjdG9ySWRlbnRpZmllcjogaUVudGl0eVNlbGVjdG9ySWRlbnRpZmllcixcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JTZXJ2aWNlXG4gICAgICAuc2VsZWN0b3JGcm9tU2VsZWN0b3JJZGVudGlmaWVyKHNlbGVjdG9ySWRlbnRpZmllcilcbiAgfVxuXG4gIHByaXZhdGUgaXNGaW5kUmVxdWVzdChcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgKSB7XG4gICAgcmV0dXJuICFfLmlzRW1wdHkodGhpcy5maW5kUHJvcFBhdGgocmkpKVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUHJvcFBhdGgoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuXG4gICAgbGV0IHByaW1hcnlLZXlzID0gdGhpcy5nZXRQcmltYXJ5S2V5cyhyaSlcblxuICAgIC8vIFNpbXBsZSBjYXNlIHdoZW4gcHJpbWFyeSBrZXkgaXMgJ2lkJ1xuICAgIGlmKF8uaGFzKHJpLCAnaWQnKSAmJiBfLmluY2x1ZGVzKHByaW1hcnlLZXlzLCAnaWQnKSkge1xuICAgICAgcmV0dXJuICdpZCdcbiAgICB9XG5cblxuICAgIC8vIEFsdGVybmF0ZSBzY2VuYXJpbzogd2hlbiB0aGUgcHJpbWFyeSBrZXkgaXNcbiAgICAvLyBtaXhlZCBpbiB3aXRoIHRoZSBmaWx0ZXIgcGFyYW1zXG4gICAgbGV0IGZpbHRlcktleXMgPSBfLmtleXModGhpcy5nZXRGaWx0ZXJQYXJhbXMocmkpKVxuICAgIGxldCBwcmltYXJ5S2V5ID0gXy5oZWFkKF8uaW50ZXJzZWN0aW9uKHByaW1hcnlLZXlzLCBmaWx0ZXJLZXlzKSlcbiAgICBpZihwcmltYXJ5S2V5KSB7XG4gICAgICByZXR1cm4gYGZpbHRlci4ke3ByaW1hcnlLZXl9YFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2VsZWN0b3IoXG4gICAgc2VsZWN0b3I6IGFueSxcbiAgICByaTogaVJlc291cmNlSWRlbnRpZmllcixcbiAgKTogYW55IHtcbiAgICByZXR1cm4gYnVpbGRGaW5kU2VsZWN0b3Ioc2VsZWN0b3IsIHJpLCB0aGlzLmZpbmRQcm9wUGF0aChyaSkpXG4gIH1cblxuICBwcml2YXRlIGlzRmlsdGVyZWRSZXNvdXJjZVJlcXVlc3QoXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ2ZpbHRlcicpXG4gIH1cblxuICBwcml2YXRlIGZpbHRlclNlbGVjdG9yKFxuICAgIHNlbGVjdG9yOiBhbnksXG4gICAgcmk6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICkge1xuXG4gICAgbGV0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyUGFyYW1zKHJpKVxuICAgIHJldHVybiBidWlsZEZpbHRlclNlbGVjdG9yKHNlbGVjdG9yLCBmaWx0ZXIpXG4gIH1cblxuICBwcml2YXRlIGlzU2NvcGVkUmVzb3VyY2VJZGVudGlmaWVyKHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyLCkge1xuICAgIHJldHVybiBfLmhhcyhyaSwgJ2ZpbHRlci5zY29wZScpXG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvRmVhdHVyZXMoKSB7XG4gICAgdGhpcy5mZWF0dXJlcyQgPSBcbiAgICAgIDxPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPj50aGlzLnN0b3JlLnNlbGVjdChlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLmZlYXR1cmVzKVxuICAgIHRoaXMuZmVhdHVyZXMkXG4gICAgICAuc3Vic2NyaWJlKGZlYXR1cmVzID0+IHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlcylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZShyaTogaVJlc291cmNlSWRlbnRpZmllcikge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzW3JpLmZlYXR1cmVdXG4gIH1cblxuICBwcml2YXRlIGdldEZpbHRlclBhcmFtcyhyaTogaVJlc291cmNlSWRlbnRpZmllcikge1xuICAgIHJldHVybiBfLm9taXQocmkuZmlsdGVyLCAnc2NvcGUnKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmltYXJ5S2V5cyhyaTogaVJlc291cmNlSWRlbnRpZmllcik6IHN0cmluZ1tdIHtcbiAgICB2YXIgcHJpbWFyeUtleXMgPSBbJ2lkJ11cbiAgICBsZXQgZmVhdHVyZSA9IHRoaXMuZ2V0RmVhdHVyZShyaSlcbiAgICBsZXQgZW50aXR5VHlwZSA9IGZlYXR1cmUuZW50aXR5VHlwZShyaS50eXBlKVxuXG4gICAgaWYoZW50aXR5VHlwZSkge1xuICAgICAgcHJpbWFyeUtleXMgPSBlbnRpdHlUeXBlLmNvbmZpZy5wcmltYXJ5S2V5cyB8fCBwcmltYXJ5S2V5c1xuICAgIH1cblxuICAgIHJldHVybiBwcmltYXJ5S2V5c1xuICB9XG59XG4iXX0=