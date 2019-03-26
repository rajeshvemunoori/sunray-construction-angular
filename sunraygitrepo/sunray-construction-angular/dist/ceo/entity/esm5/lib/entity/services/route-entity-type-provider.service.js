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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9yb3V0ZS1lbnRpdHktdHlwZS1wcm92aWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBR0wsYUFBYSxHQUNkLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNMLFFBQVEsRUFDUixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFFbkMsT0FBTyxFQUNMLGlCQUFpQixHQUNsQixNQUFNLFdBQVcsQ0FBQTtBQVVsQixPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLGtCQUFrQixDQUFBO0FBRXpCLE9BQU8sRUFDTCxzQkFBc0IsR0FDdkIsTUFBTSw0QkFBNEIsQ0FBQTtBQVVuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7Ozs7O0FBRTVDO0lBTUUsaUNBQ1ksS0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDOzs7OztJQUVKLHlEQUF1Qjs7OztJQUF2QixVQUNFLFdBQTRCO1FBRDlCLGlCQVVDO1FBTkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsUUFBUSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLEVBQzdELEdBQUcsQ0FBQyxVQUFBLFVBQVU7WUFDWixPQUFPLEtBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDeEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7SUFFTyxtRUFBaUM7Ozs7OztJQUF6QyxVQUNFLFVBQWUsRUFDZixXQUE0Qjs7WUFHeEIsY0FBYyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxXQUFXLENBQUM7UUFDcEUsSUFBRyxjQUFjLEVBQUU7O2dCQUViLE1BQU0sR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7WUFDN0QsSUFBRyxNQUFNLEVBQUU7O29CQUVMLGVBQWUsR0FDakIsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7Z0JBRWpFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFBO2FBQy9EO2lCQUNJO2dCQUNILE9BQU8sSUFBSSxDQUFBO2FBQ1o7U0FDRjthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUE7U0FDWjtJQUNILENBQUM7Ozs7Ozs7SUFFTyx1RUFBcUM7Ozs7OztJQUE3QyxVQUE4QyxNQUFNLEVBQUUsV0FBVzs7WUFDM0QsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNOztZQUMzQixFQUFFLEdBQUcsbUJBQXFCLEVBQUUsRUFBQTs7WUFFNUIsWUFBWSxHQUFHLFVBQUMsS0FBSyxFQUFFLElBQUk7WUFDN0IsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDN0MsQ0FBQzs7WUFFRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO1FBQzFDLElBQUcsS0FBSyxFQUFFO1lBQ1IsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUNoQzs7WUFFRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtTQUNuQjtRQUVELE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQzs7Ozs7O0lBRU8sK0RBQTZCOzs7OztJQUFyQyxVQUNFLFdBQTRCOztZQUV4QixRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUVsRCxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQzVCLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzVCOztZQUVHLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7O1lBR3JDLG9CQUFvQixHQUFHLFVBQUMsUUFBUSxFQUFFLEtBQUs7WUFDekMsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRTtnQkFDNUIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQzdCO2lCQUNJO2dCQUNILE9BQU8sUUFBUSxDQUFBO2FBQ2hCO1FBRUgsQ0FBQzs7WUFDRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxDQUFDO1FBRXBFLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Ozs7OztJQUVPLDBEQUF3Qjs7Ozs7SUFBaEMsVUFBaUMsUUFBUTs7WUFDbkMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDOztZQUM1RCxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztRQUUzRCxPQUFPLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLFVBQUEseUJBQXlCOztnQkFDdkIsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0RSxPQUFPLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7SUFFTyxxREFBbUI7Ozs7OztJQUEzQixVQUE0QixPQUFPLEVBQUUsV0FBVztRQUFoRCxpQkFLQztRQUpDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDL0MsR0FBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLEVBQ2xFLEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FDdEUsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLGdFQUE4Qjs7Ozs7SUFBdEMsVUFDRSxVQUE2QjtRQUU3QixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDOzs7Ozs7SUFFTyx5REFBdUI7Ozs7O0lBQS9CLFVBQWdDLE9BQU87O1lBQ2pDLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixJQUFJLEVBQUUseUJBQXlCO1NBQ2hDOztZQUNHLFFBQVEsR0FBRztZQUNiLFdBQVcsRUFBRSxLQUFLO1NBQ25CO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7Ozs7OztJQUVPLDBEQUF3Qjs7Ozs7O0lBQWhDLFVBQWlDLE9BQU8sRUFBRSxVQUFVOztZQUM5Qyx1QkFBdUIsR0FBRyxVQUFDLE1BQU07O2dCQUMvQixFQUFFLEdBQUc7Z0JBQ1AsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dCQUNyQixJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVk7YUFDMUI7O2dCQUVHLFVBQVUsR0FBRztnQkFDZixrQkFBa0IsRUFBRSxFQUFFO2dCQUN0QixPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQzNCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVzthQUNoQzs7Z0JBRUcsSUFBSSxHQUFHO2dCQUNULEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDYixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixVQUFVLEVBQUUsVUFBVTthQUN2QjtZQUNELE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEMsQ0FBQzs7WUFDRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDO1FBQ2xFLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsc0JBQVksOENBQVM7Ozs7O1FBQXJCO1lBQ0UsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO2FBQ3RDO1lBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hCLENBQUM7OztPQUFBOzs7OztJQUVPLDhDQUFZOzs7O0lBQXBCO1FBQ0UsT0FBTyxtQkFBeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEVBQUEsQ0FBQTtJQUNwRixDQUFDOztnQkF2S0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFuQ1EsS0FBSztnQkErQkwsV0FBVztnQkE1QmxCLGlCQUFpQjs7O2tDQWxCbkI7Q0EwTkMsQUExS0QsSUEwS0M7U0F2S1ksdUJBQXVCOzs7Ozs7SUFDbEMsNkNBQTJDOzs7OztJQUd6Qyx3Q0FBMkI7Ozs7O0lBQzNCLDhDQUFrQzs7Ozs7SUFDbEMsb0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgY29tYmluZUxhdGVzdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWVyZ2VNYXAsXG4gIG1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBJbmZsZWN0aW9uU2VydmljZSxcbn0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpUm91dGVyU3RhdGVVcmwsXG59IGZyb20gJ0BjZW8vc3RhdGUnXG5cbmltcG9ydCB7XG4gIFVybFNsdWcsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBKc29uQXBpRW50aXR5LFxuICBFbnRpdHlDb2xsZWN0aW9uLFxufSBmcm9tICcuLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLFxufSBmcm9tICcuLi9zdGF0ZS9mZWF0dXJlL3NlbGVjdG9ycydcblxuXG5pbXBvcnQge1xuICBpRW50aXR5Q29sbGVjdGlvbixcbiAgaUZlYXR1cmUsXG4gIGlGZWF0dXJlTWFwLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vZGF0YS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZUVudGl0eVR5cGVQcm92aWRlciB7XG4gIHByaXZhdGUgX2ZlYXR1cmVzJDogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5mbGVjdGlvblNlcnZpY2U6IEluZmxlY3Rpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgaGFuZGxlUm91dGVyTmF2aWdhdGlvbiQoXG4gICAgcm91dGVyU3RhdGU6IGlSb3V0ZXJTdGF0ZVVybFxuICApOiBPYnNlcnZhYmxlPGlSZXNvdXJjZUlkZW50aWZpZXI+IHtcblxuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzJC5waXBlKFxuICAgICAgbWVyZ2VNYXAoZmVhdHVyZXMgPT4gdGhpcy5mZWF0dXJlUm91dGFibGVFbnRpdGllcyQoZmVhdHVyZXMpKSxcbiAgICAgIG1hcChjb2xsZWN0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VJZGVudGlmaWVyRnJvbVJvdXRlclN0YXRlKGNvbGxlY3Rpb24sIHJvdXRlclN0YXRlKVxuICAgICAgfSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvdXJjZUlkZW50aWZpZXJGcm9tUm91dGVyU3RhdGUoXG4gICAgY29sbGVjdGlvbjogYW55LFxuICAgIHJvdXRlclN0YXRlOiBpUm91dGVyU3RhdGVVcmxcbiAgKTogaVJlc291cmNlSWRlbnRpZmllciB7XG5cbiAgICBsZXQgZW50aXR5VHlwZVNsdWcgPSB0aGlzLmVudGl0eVR5cGVTbHVnRnJvbVJvdXRlclN0YXRlKHJvdXRlclN0YXRlKVxuICAgIGlmKGVudGl0eVR5cGVTbHVnKSB7XG5cbiAgICAgIGxldCBlbnRpdHkgPSBjb2xsZWN0aW9uLmZpbmRCeUF0dHIoJ3VybFNsdWcnLCBlbnRpdHlUeXBlU2x1ZylcbiAgICAgIGlmKGVudGl0eSkge1xuXG4gICAgICAgIGxldCByb3V0ZXJTdGF0ZU9wdHMgPVxuICAgICAgICAgIHRoaXMucmVzb3VyY2VJZGVudGlmaWVyT3B0c0Zyb21Sb3V0ZXJTdGF0ZShlbnRpdHksIHJvdXRlclN0YXRlKVxuXG4gICAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBlbnRpdHkucmVzb3VyY2VJZGVudGlmaWVyLCByb3V0ZXJTdGF0ZU9wdHMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzb3VyY2VJZGVudGlmaWVyT3B0c0Zyb21Sb3V0ZXJTdGF0ZShlbnRpdHksIHJvdXRlclN0YXRlKSB7XG4gICAgbGV0IHBhcmFtcyA9IHJvdXRlclN0YXRlLnBhcmFtc1xuICAgIGxldCByaSA9IDxpUmVzb3VyY2VJZGVudGlmaWVyPnt9XG5cbiAgICBsZXQgaXNQcmltYXJ5S2V5ID0gKHZhbHVlLCBwcm9wKSA9PiB7XG4gICAgICByZXR1cm4gXy5pbmNsdWRlcyhlbnRpdHkucHJpbWFyeUtleXMsIHByb3ApXG4gICAgfVxuXG4gICAgbGV0IGlkS2V5ID0gXy5waWNrQnkocGFyYW1zLCBpc1ByaW1hcnlLZXkpIFxuICAgIGlmKGlkS2V5KSB7XG4gICAgICByaS5pZCA9IF8uaGVhZChfLnZhbHVlcyhpZEtleSkpXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlciA9IF8ub21pdChwYXJhbXMsIF8ua2V5cyhpZEtleSkpXG4gICAgaWYoIV8uaXNFbXB0eShmaWx0ZXIpKSB7XG4gICAgICByaS5maWx0ZXIgPSBmaWx0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gcmlcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5VHlwZVNsdWdGcm9tUm91dGVyU3RhdGUoXG4gICAgcm91dGVyU3RhdGU6IGlSb3V0ZXJTdGF0ZVVybFxuICApOiBVcmxTbHVnIHtcbiAgICBsZXQgc2VnbWVudHMgPSBfLm1hcChyb3V0ZXJTdGF0ZS5zZWdtZW50cywgJ3BhdGgnKVxuXG4gICAgaWYoXy5oZWFkKHNlZ21lbnRzKSA9PSAnYXBwJykge1xuICAgICAgc2VnbWVudHMgPSBfLmRyb3Aoc2VnbWVudHMpXG4gICAgfVxuXG4gICAgbGV0IHBhcmFtcyA9IF8udmFsdWVzKHJvdXRlclN0YXRlLnBhcmFtcylcblxuXG4gICAgbGV0IHNlZ21lbnRzV2l0aG91dFBhcmFtID0gKHNlZ21lbnRzLCBwYXJhbSkgPT4ge1xuICAgICAgaWYoXy5sYXN0KHNlZ21lbnRzKSA9PSBwYXJhbSkge1xuICAgICAgICByZXR1cm4gXy5kcm9wUmlnaHQoc2VnbWVudHMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlZ21lbnRzXG4gICAgICB9XG5cbiAgICB9XG4gICAgbGV0IGZpbmFsU2VnbWVudHMgPSBfLnJlZHVjZShwYXJhbXMsIHNlZ21lbnRzV2l0aG91dFBhcmFtLCBzZWdtZW50cylcblxuICAgIHJldHVybiBmaW5hbFNlZ21lbnRzWzBdXG4gIH1cblxuICBwcml2YXRlIGZlYXR1cmVSb3V0YWJsZUVudGl0aWVzJChmZWF0dXJlcykge1xuICAgIGxldCBnZXRSb3V0YWJsZUVudGl0aWVzID0gXy5iaW5kKHRoaXMuZ2V0Um91dGFibGVFbnRpdGllcywgdGhpcylcbiAgICBsZXQgcm91dGFibGVFbnRpdGllcyA9IF8ubWFwKGZlYXR1cmVzLCBnZXRSb3V0YWJsZUVudGl0aWVzKVxuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qocm91dGFibGVFbnRpdGllcykucGlwZShcbiAgICAgIG1hcChyb3V0YWJsZUVudGl0eUNvbGxlY3Rpb25zID0+IHtcbiAgICAgICAgbGV0IGVudGl0aWVzID0gXy5mbGF0dGVuKF8ubWFwKHJvdXRhYmxlRW50aXR5Q29sbGVjdGlvbnMsICdlbnRpdGllcycpKVxuICAgICAgICByZXR1cm4gbmV3IEVudGl0eUNvbGxlY3Rpb24oZW50aXRpZXMpXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRhYmxlRW50aXRpZXMoZmVhdHVyZSwgZmVhdHVyZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUNvbmZpZ3VyYXRpb25zJChmZWF0dXJlKS5waXBlKFxuICAgICAgbWFwKGNvbGxlY3Rpb24gPT4gdGhpcy5yb3V0YWJsZVJlc291cmNlQ29uZmlndXJhdGlvbnMoY29sbGVjdGlvbikpLFxuICAgICAgbWFwKGNvbGxlY3Rpb24gPT4gdGhpcy5idWlsZFJlc291cmNlSWRlbnRpZmllcnMoZmVhdHVyZSwgY29sbGVjdGlvbikpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgcm91dGFibGVSZXNvdXJjZUNvbmZpZ3VyYXRpb25zKFxuICAgIGNvbGxlY3Rpb246IGlFbnRpdHlDb2xsZWN0aW9uXG4gICk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi53aGVyZSh7aXNSb3V0YWJsZTogdHJ1ZX0pXG4gIH1cblxuICBwcml2YXRlIHJlc291cmNlQ29uZmlndXJhdGlvbnMkKGZlYXR1cmUpIHtcbiAgICBsZXQgcmkgPSB7XG4gICAgICBmZWF0dXJlOiBmZWF0dXJlLm5hbWUsXG4gICAgICB0eXBlOiAncmVzb3VyY2UtY29uZmlndXJhdGlvbnMnLFxuICAgIH1cbiAgICBsZXQgZGF0YU9wdHMgPSB7XG4gICAgICBzeW5jV2l0aEFwaTogZmFsc2UsXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0JChyaSwgZGF0YU9wdHMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVzb3VyY2VJZGVudGlmaWVycyhmZWF0dXJlLCBjb2xsZWN0aW9uKSB7XG4gICAgbGV0IGJ1aWxkUmVzb3VyY2VJZGVudGlmaWVyID0gKGVudGl0eSkgPT4ge1xuICAgICAgbGV0IHJpID0ge1xuICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLm5hbWUsXG4gICAgICAgIHR5cGU6IGVudGl0eS5yZXNvdXJjZVR5cGUsXG4gICAgICB9XG5cbiAgICAgIGxldCBhdHRyaWJ1dGVzID0ge1xuICAgICAgICByZXNvdXJjZUlkZW50aWZpZXI6IHJpLFxuICAgICAgICB1cmxTbHVnOiBlbnRpdHkuZGlzcGxheVNsdWcsXG4gICAgICAgIHByaW1hcnlLZXlzOiBlbnRpdHkucHJpbWFyeUtleXNcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGlkOiBlbnRpdHkuaWQsXG4gICAgICAgIHR5cGU6ICdyZXNvdXJjZS1pZGVudGlmaWVycycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEpzb25BcGlFbnRpdHkoZGF0YSlcbiAgICB9XG4gICAgbGV0IGVudGl0aWVzID0gXy5tYXAoY29sbGVjdGlvbi5lbnRpdGllcywgYnVpbGRSZXNvdXJjZUlkZW50aWZpZXIpXG4gICAgcmV0dXJuIG5ldyBFbnRpdHlDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZmVhdHVyZXMkKCk6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+IHtcbiAgICBpZighdGhpcy5fZmVhdHVyZXMkKSB7XG4gICAgICB0aGlzLl9mZWF0dXJlcyQgPSB0aGlzLmdldEZlYXR1cmVzJCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVzJFxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlcyQoKTogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4ge1xuICAgIHJldHVybiA8T2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4+dGhpcy5zdG9yZS5zZWxlY3QoZW50aXR5RmVhdHVyZVNlbGVjdG9ycy5mZWF0dXJlcylcbiAgfVxuXG5cbn1cbiJdfQ==