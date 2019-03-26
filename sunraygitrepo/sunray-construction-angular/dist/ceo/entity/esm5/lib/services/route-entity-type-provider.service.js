/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { combineLatest, } from 'rxjs';
import { mergeMap, map, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InflectionService, } from '@ceo/core';
import { JsonApiEntity, EntityCollection, } from '../classes/index';
import { entityFeatureSelectors, } from '../state/feature/selectors';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./data.service";
import * as i3 from "@ceo/core";
var RouteEntityTypeProvider = /** @class */ (function () {
    function RouteEntityTypeProvider(store, dataService, inflectionService) {
        this.store = store;
        this.dataService = dataService;
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.handleRouterNavigation$ = /**
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        var _this = this;
        return this.features$.pipe(mergeMap(function (features) { return _this.featureRoutableEntities$(features); }), map(function (collection) {
            return _this.resourceIdentifierFromRouterState(collection, routerState);
        }));
    };
    /**
     * @private
     * @param {?} collection
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.resourceIdentifierFromRouterState = /**
     * @private
     * @param {?} collection
     * @param {?} routerState
     * @return {?}
     */
    function (collection, routerState) {
        /** @type {?} */
        var entityTypeSlug = this.entityTypeSlugFromRouterState(routerState);
        if (entityTypeSlug) {
            /** @type {?} */
            var entity = collection.findByAttr('urlSlug', entityTypeSlug);
            if (entity) {
                /** @type {?} */
                var routerStateOpts = this.resourceIdentifierOptsFromRouterState(entity, routerState);
                return _.merge({}, entity.resourceIdentifier, routerStateOpts);
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} entity
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.resourceIdentifierOptsFromRouterState = /**
     * @private
     * @param {?} entity
     * @param {?} routerState
     * @return {?}
     */
    function (entity, routerState) {
        /** @type {?} */
        var params = routerState.params;
        /** @type {?} */
        var ri = (/** @type {?} */ ({}));
        /** @type {?} */
        var isPrimaryKey = function (value, prop) {
            return _.includes(entity.primaryKeys, prop);
        };
        /** @type {?} */
        var idKey = _.pickBy(params, isPrimaryKey);
        if (idKey) {
            ri.id = _.head(_.values(idKey));
        }
        /** @type {?} */
        var filter = _.omit(params, _.keys(idKey));
        if (!_.isEmpty(filter)) {
            ri.filter = filter;
        }
        return ri;
    };
    /**
     * @private
     * @param {?} routerState
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.entityTypeSlugFromRouterState = /**
     * @private
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        /** @type {?} */
        var segments = _.map(routerState.segments, 'path');
        if (_.head(segments) == 'app') {
            segments = _.drop(segments);
        }
        /** @type {?} */
        var params = _.values(routerState.params);
        /** @type {?} */
        var segmentsWithoutParam = function (segments, param) {
            if (_.last(segments) == param) {
                return _.dropRight(segments);
            }
            else {
                return segments;
            }
        };
        /** @type {?} */
        var finalSegments = _.reduce(params, segmentsWithoutParam, segments);
        return finalSegments[0];
    };
    /**
     * @private
     * @param {?} features
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.featureRoutableEntities$ = /**
     * @private
     * @param {?} features
     * @return {?}
     */
    function (features) {
        /** @type {?} */
        var getRoutableEntities = _.bind(this.getRoutableEntities, this);
        /** @type {?} */
        var routableEntities = _.map(features, getRoutableEntities);
        return combineLatest(routableEntities).pipe(map(function (routableEntityCollections) {
            /** @type {?} */
            var entities = _.flatten(_.map(routableEntityCollections, 'entities'));
            return new EntityCollection(entities);
        }));
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} featureName
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.getRoutableEntities = /**
     * @private
     * @param {?} feature
     * @param {?} featureName
     * @return {?}
     */
    function (feature, featureName) {
        var _this = this;
        return this.resourceConfigurations$(feature).pipe(map(function (collection) { return _this.routableResourceConfigurations(collection); }), map(function (collection) { return _this.buildResourceIdentifiers(feature, collection); }));
    };
    /**
     * @private
     * @param {?} collection
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.routableResourceConfigurations = /**
     * @private
     * @param {?} collection
     * @return {?}
     */
    function (collection) {
        return collection.where({ isRoutable: true });
    };
    /**
     * @private
     * @param {?} feature
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.resourceConfigurations$ = /**
     * @private
     * @param {?} feature
     * @return {?}
     */
    function (feature) {
        /** @type {?} */
        var ri = {
            feature: feature.name,
            type: 'resource-configurations',
        };
        /** @type {?} */
        var dataOpts = {
            syncWithApi: false,
        };
        return this.dataService.get$(ri, dataOpts);
    };
    /**
     * @private
     * @param {?} feature
     * @param {?} collection
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.buildResourceIdentifiers = /**
     * @private
     * @param {?} feature
     * @param {?} collection
     * @return {?}
     */
    function (feature, collection) {
        /** @type {?} */
        var buildResourceIdentifier = function (entity) {
            /** @type {?} */
            var ri = {
                feature: feature.name,
                type: entity.resourceType,
            };
            /** @type {?} */
            var attributes = {
                resourceIdentifier: ri,
                urlSlug: entity.displaySlug,
                primaryKeys: entity.primaryKeys
            };
            /** @type {?} */
            var data = {
                id: entity.id,
                type: 'resource-identifiers',
                attributes: attributes,
            };
            return new JsonApiEntity(data);
        };
        /** @type {?} */
        var entities = _.map(collection.entities, buildResourceIdentifier);
        return new EntityCollection(entities);
    };
    Object.defineProperty(RouteEntityTypeProvider.prototype, "features$", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this._features$) {
                this._features$ = this.getFeatures$();
            }
            return this._features$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    RouteEntityTypeProvider.prototype.getFeatures$ = /**
     * @private
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
    };
    RouteEntityTypeProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RouteEntityTypeProvider.ctorParameters = function () { return [
        { type: Store },
        { type: DataService },
        { type: InflectionService }
    ]; };
    /** @nocollapse */ RouteEntityTypeProvider.ngInjectableDef = i0.defineInjectable({ factory: function RouteEntityTypeProvider_Factory() { return new RouteEntityTypeProvider(i0.inject(i1.Store), i0.inject(i2.DataService), i0.inject(i3.InflectionService)); }, token: RouteEntityTypeProvider, providedIn: "root" });
    return RouteEntityTypeProvider;
}());
export { RouteEntityTypeProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouteEntityTypeProvider.prototype._features$;
    /**
     * @type {?}
     * @protected
     */
    RouteEntityTypeProvider.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    RouteEntityTypeProvider.prototype.dataService;
    /**
     * @type {?}
     * @protected
     */
    RouteEntityTypeProvider.prototype.inflectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JvdXRlLWVudGl0eS10eXBlLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFHTCxhQUFhLEdBQ2QsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQ0wsUUFBUSxFQUNSLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFBO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUVuQyxPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sV0FBVyxDQUFBO0FBVWxCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEdBQ2pCLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsT0FBTyxFQUNMLHNCQUFzQixHQUN2QixNQUFNLDRCQUE0QixDQUFBO0FBVW5DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7Ozs7QUFFNUM7SUFNRSxpQ0FDWSxLQUFpQixFQUNqQixXQUF3QixFQUN4QixpQkFBb0M7UUFGcEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7Ozs7O0lBRUoseURBQXVCOzs7O0lBQXZCLFVBQ0UsV0FBNEI7UUFEOUIsaUJBVUM7UUFOQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN4QixRQUFRLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLEVBQXZDLENBQXVDLENBQUMs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QSxDQUFBO0lBQ3BGLENBQUM7O2dCQXZLRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQW5DUSxLQUFLO2dCQStCTCxXQUFXO2dCQTVCbEIsaUJBQWlCOzs7a0NBbEJuQjtDQTBOQyxBQTFLRCxJQTBLQztTQXZLWSx1QkFBdUI7Ozs7OztJQUNsQyw2Q0FBMkM7Ozs7O0lBR3pDLHdDQUEyQjs7Ozs7SUFDM0IsOENBQWtDOzs7OztJQUNsQyxvREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBjb21iaW5lTGF0ZXN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBtZXJnZU1hcCxcbiAgbWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIEluZmxlY3Rpb25TZXJ2aWNlLFxufSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlSb3V0ZXJTdGF0ZVVybCxcbn0gZnJvbSAnQGNlby9zdGF0ZSdcblxuaW1wb3J0IHtcbiAgVXJsU2x1Zyxcbn0gZnJvbSAnQGNlby9zaGFyZWQnXG5cbmltcG9ydCB7XG4gIEpzb25BcGlFbnRpdHksXG4gIEVudGl0eUNvbGxlY3Rpb24sXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGVudGl0eUZlYXR1cmVTZWxlY3RvcnMsXG59IGZyb20gJy4uL3N0YXRlL2ZlYXR1cmUvc2VsZWN0b3JzJ1xuXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb2xsZWN0aW9uLFxuICBpRmVhdHVyZSxcbiAgaUZlYXR1cmVNYXAsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlRW50aXR5VHlwZVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBfZmVhdHVyZXMkOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmZsZWN0aW9uU2VydmljZTogSW5mbGVjdGlvblNlcnZpY2UsXG4gICkge31cblxuICBoYW5kbGVSb3V0ZXJOYXZpZ2F0aW9uJChcbiAgICByb3V0ZXJTdGF0ZTogaVJvdXRlclN0YXRlVXJsXG4gICk6IE9ic2VydmFibGU8aVJlc291cmNlSWRlbnRpZmllcj4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMkLnBpcGUoXG4gICAgICBtZXJnZU1hcChmZWF0dXJlcyA9PiB0aGlzLmZlYXR1cmVSb3V0YWJsZUVudGl0aWVzJChmZWF0dXJlcykpLFxuICAgICAgbWFwKGNvbGxlY3Rpb24gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUlkZW50aWZpZXJGcm9tUm91dGVyU3RhdGUoY29sbGVjdGlvbiwgcm91dGVyU3RhdGUpXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHJlc291cmNlSWRlbnRpZmllckZyb21Sb3V0ZXJTdGF0ZShcbiAgICBjb2xsZWN0aW9uOiBhbnksXG4gICAgcm91dGVyU3RhdGU6IGlSb3V0ZXJTdGF0ZVVybFxuICApOiBpUmVzb3VyY2VJZGVudGlmaWVyIHtcblxuICAgIGxldCBlbnRpdHlUeXBlU2x1ZyA9IHRoaXMuZW50aXR5VHlwZVNsdWdGcm9tUm91dGVyU3RhdGUocm91dGVyU3RhdGUpXG4gICAgaWYoZW50aXR5VHlwZVNsdWcpIHtcblxuICAgICAgbGV0IGVudGl0eSA9IGNvbGxlY3Rpb24uZmluZEJ5QXR0cigndXJsU2x1ZycsIGVudGl0eVR5cGVTbHVnKVxuICAgICAgaWYoZW50aXR5KSB7XG5cbiAgICAgICAgbGV0IHJvdXRlclN0YXRlT3B0cyA9XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZUlkZW50aWZpZXJPcHRzRnJvbVJvdXRlclN0YXRlKGVudGl0eSwgcm91dGVyU3RhdGUpXG5cbiAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIGVudGl0eS5yZXNvdXJjZUlkZW50aWZpZXIsIHJvdXRlclN0YXRlT3B0cylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvdXJjZUlkZW50aWZpZXJPcHRzRnJvbVJvdXRlclN0YXRlKGVudGl0eSwgcm91dGVyU3RhdGUpIHtcbiAgICBsZXQgcGFyYW1zID0gcm91dGVyU3RhdGUucGFyYW1zXG4gICAgbGV0IHJpID0gPGlSZXNvdXJjZUlkZW50aWZpZXI+e31cblxuICAgIGxldCBpc1ByaW1hcnlLZXkgPSAodmFsdWUsIHByb3ApID0+IHtcbiAgICAgIHJldHVybiBfLmluY2x1ZGVzKGVudGl0eS5wcmltYXJ5S2V5cywgcHJvcClcbiAgICB9XG5cbiAgICBsZXQgaWRLZXkgPSBfLnBpY2tCeShwYXJhbXMsIGlzUHJpbWFyeUtleSkgXG4gICAgaWYoaWRLZXkpIHtcbiAgICAgIHJpLmlkID0gXy5oZWFkKF8udmFsdWVzKGlkS2V5KSlcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVyID0gXy5vbWl0KHBhcmFtcywgXy5rZXlzKGlkS2V5KSlcbiAgICBpZighXy5pc0VtcHR5KGZpbHRlcikpIHtcbiAgICAgIHJpLmZpbHRlciA9IGZpbHRlclxuICAgIH1cblxuICAgIHJldHVybiByaVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlUeXBlU2x1Z0Zyb21Sb3V0ZXJTdGF0ZShcbiAgICByb3V0ZXJTdGF0ZTogaVJvdXRlclN0YXRlVXJsXG4gICk6IFVybFNsdWcge1xuICAgIGxldCBzZWdtZW50cyA9IF8ubWFwKHJvdXRlclN0YXRlLnNlZ21lbnRzLCAncGF0aCcpXG5cbiAgICBpZihfLmhlYWQoc2VnbWVudHMpID09ICdhcHAnKSB7XG4gICAgICBzZWdtZW50cyA9IF8uZHJvcChzZWdtZW50cylcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zID0gXy52YWx1ZXMocm91dGVyU3RhdGUucGFyYW1zKVxuXG5cbiAgICBsZXQgc2VnbWVudHNXaXRob3V0UGFyYW0gPSAoc2VnbWVudHMsIHBhcmFtKSA9PiB7XG4gICAgICBpZihfLmxhc3Qoc2VnbWVudHMpID09IHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBfLmRyb3BSaWdodChzZWdtZW50cylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VnbWVudHNcbiAgICAgIH1cblxuICAgIH1cbiAgICBsZXQgZmluYWxTZWdtZW50cyA9IF8ucmVkdWNlKHBhcmFtcywgc2VnbWVudHNXaXRob3V0UGFyYW0sIHNlZ21lbnRzKVxuXG4gICAgcmV0dXJuIGZpbmFsU2VnbWVudHNbMF1cbiAgfVxuXG4gIHByaXZhdGUgZmVhdHVyZVJvdXRhYmxlRW50aXRpZXMkKGZlYXR1cmVzKSB7XG4gICAgbGV0IGdldFJvdXRhYmxlRW50aXRpZXMgPSBfLmJpbmQodGhpcy5nZXRSb3V0YWJsZUVudGl0aWVzLCB0aGlzKVxuICAgIGxldCByb3V0YWJsZUVudGl0aWVzID0gXy5tYXAoZmVhdHVyZXMsIGdldFJvdXRhYmxlRW50aXRpZXMpXG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChyb3V0YWJsZUVudGl0aWVzKS5waXBlKFxuICAgICAgbWFwKHJvdXRhYmxlRW50aXR5Q29sbGVjdGlvbnMgPT4ge1xuICAgICAgICBsZXQgZW50aXRpZXMgPSBfLmZsYXR0ZW4oXy5tYXAocm91dGFibGVFbnRpdHlDb2xsZWN0aW9ucywgJ2VudGl0aWVzJykpXG4gICAgICAgIHJldHVybiBuZXcgRW50aXR5Q29sbGVjdGlvbihlbnRpdGllcylcbiAgICAgIH0pLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGFibGVFbnRpdGllcyhmZWF0dXJlLCBmZWF0dXJlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlQ29uZmlndXJhdGlvbnMkKGZlYXR1cmUpLnBpcGUoXG4gICAgICBtYXAoY29sbGVjdGlvbiA9PiB0aGlzLnJvdXRhYmxlUmVzb3VyY2VDb25maWd1cmF0aW9ucyhjb2xsZWN0aW9uKSksXG4gICAgICBtYXAoY29sbGVjdGlvbiA9PiB0aGlzLmJ1aWxkUmVzb3VyY2VJZGVudGlmaWVycyhmZWF0dXJlLCBjb2xsZWN0aW9uKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSByb3V0YWJsZVJlc291cmNlQ29uZmlndXJhdGlvbnMoXG4gICAgY29sbGVjdGlvbjogaUVudGl0eUNvbGxlY3Rpb25cbiAgKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHJldHVybiBjb2xsZWN0aW9uLndoZXJlKHtpc1JvdXRhYmxlOiB0cnVlfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzb3VyY2VDb25maWd1cmF0aW9ucyQoZmVhdHVyZSkge1xuICAgIGxldCByaSA9IHtcbiAgICAgIGZlYXR1cmU6IGZlYXR1cmUubmFtZSxcbiAgICAgIHR5cGU6ICdyZXNvdXJjZS1jb25maWd1cmF0aW9ucycsXG4gICAgfVxuICAgIGxldCBkYXRhT3B0cyA9IHtcbiAgICAgIHN5bmNXaXRoQXBpOiBmYWxzZSxcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5nZXQkKHJpLCBkYXRhT3B0cylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZXNvdXJjZUlkZW50aWZpZXJzKGZlYXR1cmUsIGNvbGxlY3Rpb24pIHtcbiAgICBsZXQgYnVpbGRSZXNvdXJjZUlkZW50aWZpZXIgPSAoZW50aXR5KSA9PiB7XG4gICAgICBsZXQgcmkgPSB7XG4gICAgICAgIGZlYXR1cmU6IGZlYXR1cmUubmFtZSxcbiAgICAgICAgdHlwZTogZW50aXR5LnJlc291cmNlVHlwZSxcbiAgICAgIH1cblxuICAgICAgbGV0IGF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHJlc291cmNlSWRlbnRpZmllcjogcmksXG4gICAgICAgIHVybFNsdWc6IGVudGl0eS5kaXNwbGF5U2x1ZyxcbiAgICAgICAgcHJpbWFyeUtleXM6IGVudGl0eS5wcmltYXJ5S2V5c1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgaWQ6IGVudGl0eS5pZCxcbiAgICAgICAgdHlwZTogJ3Jlc291cmNlLWlkZW50aWZpZXJzJyxcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgSnNvbkFwaUVudGl0eShkYXRhKVxuICAgIH1cbiAgICBsZXQgZW50aXRpZXMgPSBfLm1hcChjb2xsZWN0aW9uLmVudGl0aWVzLCBidWlsZFJlc291cmNlSWRlbnRpZmllcilcbiAgICByZXR1cm4gbmV3IEVudGl0eUNvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBwcml2YXRlIGdldCBmZWF0dXJlcyQoKTogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4ge1xuICAgIGlmKCF0aGlzLl9mZWF0dXJlcyQpIHtcbiAgICAgIHRoaXMuX2ZlYXR1cmVzJCA9IHRoaXMuZ2V0RmVhdHVyZXMkKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZXMkXG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVzJCgpOiBPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPiB7XG4gICAgcmV0dXJuIDxPYnNlcnZhYmxlPGlGZWF0dXJlTWFwPj50aGlzLnN0b3JlLnNlbGVjdChlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLmZlYXR1cmVzKVxuICB9XG5cblxufVxuIl19