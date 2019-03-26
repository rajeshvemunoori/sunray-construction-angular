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
export class RouteEntityTypeProvider {
    /**
     * @param {?} store
     * @param {?} dataService
     * @param {?} inflectionService
     */
    constructor(store, dataService, inflectionService) {
        this.store = store;
        this.dataService = dataService;
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    handleRouterNavigation$(routerState) {
        return this.features$.pipe(mergeMap(features => this.featureRoutableEntities$(features)), map(collection => {
            return this.resourceIdentifierFromRouterState(collection, routerState);
        }));
    }
    /**
     * @private
     * @param {?} collection
     * @param {?} routerState
     * @return {?}
     */
    resourceIdentifierFromRouterState(collection, routerState) {
        /** @type {?} */
        let entityTypeSlug = this.entityTypeSlugFromRouterState(routerState);
        if (entityTypeSlug) {
            /** @type {?} */
            let entity = collection.findByAttr('urlSlug', entityTypeSlug);
            if (entity) {
                /** @type {?} */
                let routerStateOpts = this.resourceIdentifierOptsFromRouterState(entity, routerState);
                return _.merge({}, entity.resourceIdentifier, routerStateOpts);
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} entity
     * @param {?} routerState
     * @return {?}
     */
    resourceIdentifierOptsFromRouterState(entity, routerState) {
        /** @type {?} */
        let params = routerState.params;
        /** @type {?} */
        let ri = (/** @type {?} */ ({}));
        /** @type {?} */
        let isPrimaryKey = (value, prop) => {
            return _.includes(entity.primaryKeys, prop);
        };
        /** @type {?} */
        let idKey = _.pickBy(params, isPrimaryKey);
        if (idKey) {
            ri.id = _.head(_.values(idKey));
        }
        /** @type {?} */
        let filter = _.omit(params, _.keys(idKey));
        if (!_.isEmpty(filter)) {
            ri.filter = filter;
        }
        return ri;
    }
    /**
     * @private
     * @param {?} routerState
     * @return {?}
     */
    entityTypeSlugFromRouterState(routerState) {
        /** @type {?} */
        let segments = _.map(routerState.segments, 'path');
        if (_.head(segments) == 'app') {
            segments = _.drop(segments);
        }
        /** @type {?} */
        let params = _.values(routerState.params);
        /** @type {?} */
        let segmentsWithoutParam = (segments, param) => {
            if (_.last(segments) == param) {
                return _.dropRight(segments);
            }
            else {
                return segments;
            }
        };
        /** @type {?} */
        let finalSegments = _.reduce(params, segmentsWithoutParam, segments);
        return finalSegments[0];
    }
    /**
     * @private
     * @param {?} features
     * @return {?}
     */
    featureRoutableEntities$(features) {
        /** @type {?} */
        let getRoutableEntities = _.bind(this.getRoutableEntities, this);
        /** @type {?} */
        let routableEntities = _.map(features, getRoutableEntities);
        return combineLatest(routableEntities).pipe(map(routableEntityCollections => {
            /** @type {?} */
            let entities = _.flatten(_.map(routableEntityCollections, 'entities'));
            return new EntityCollection(entities);
        }));
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} featureName
     * @return {?}
     */
    getRoutableEntities(feature, featureName) {
        return this.resourceConfigurations$(feature).pipe(map(collection => this.routableResourceConfigurations(collection)), map(collection => this.buildResourceIdentifiers(feature, collection)));
    }
    /**
     * @private
     * @param {?} collection
     * @return {?}
     */
    routableResourceConfigurations(collection) {
        return collection.where({ isRoutable: true });
    }
    /**
     * @private
     * @param {?} feature
     * @return {?}
     */
    resourceConfigurations$(feature) {
        /** @type {?} */
        let ri = {
            feature: feature.name,
            type: 'resource-configurations',
        };
        /** @type {?} */
        let dataOpts = {
            syncWithApi: false,
        };
        return this.dataService.get$(ri, dataOpts);
    }
    /**
     * @private
     * @param {?} feature
     * @param {?} collection
     * @return {?}
     */
    buildResourceIdentifiers(feature, collection) {
        /** @type {?} */
        let buildResourceIdentifier = (entity) => {
            /** @type {?} */
            let ri = {
                feature: feature.name,
                type: entity.resourceType,
            };
            /** @type {?} */
            let attributes = {
                resourceIdentifier: ri,
                urlSlug: entity.displaySlug,
                primaryKeys: entity.primaryKeys
            };
            /** @type {?} */
            let data = {
                id: entity.id,
                type: 'resource-identifiers',
                attributes: attributes,
            };
            return new JsonApiEntity(data);
        };
        /** @type {?} */
        let entities = _.map(collection.entities, buildResourceIdentifier);
        return new EntityCollection(entities);
    }
    /**
     * @private
     * @return {?}
     */
    get features$() {
        if (!this._features$) {
            this._features$ = this.getFeatures$();
        }
        return this._features$;
    }
    /**
     * @private
     * @return {?}
     */
    getFeatures$() {
        return (/** @type {?} */ (this.store.select(entityFeatureSelectors.features)));
    }
}
RouteEntityTypeProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RouteEntityTypeProvider.ctorParameters = () => [
    { type: Store },
    { type: DataService },
    { type: InflectionService }
];
/** @nocollapse */ RouteEntityTypeProvider.ngInjectableDef = i0.defineInjectable({ factory: function RouteEntityTypeProvider_Factory() { return new RouteEntityTypeProvider(i0.inject(i1.Store), i0.inject(i2.DataService), i0.inject(i3.InflectionService)); }, token: RouteEntityTypeProvider, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtZW50aXR5LXR5cGUtcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zZXJ2aWNlcy9yb3V0ZS1lbnRpdHktdHlwZS1wcm92aWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBR0wsYUFBYSxHQUNkLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNMLFFBQVEsRUFDUixHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFFbkMsT0FBTyxFQUNMLGlCQUFpQixHQUNsQixNQUFNLFdBQVcsQ0FBQTtBQVVsQixPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLGtCQUFrQixDQUFBO0FBRXpCLE9BQU8sRUFDTCxzQkFBc0IsR0FDdkIsTUFBTSw0QkFBNEIsQ0FBQTtBQVVuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7Ozs7O0FBSzVDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUdsQyxZQUNZLEtBQWlCLEVBQ2pCLFdBQXdCLEVBQ3hCLGlCQUFvQztRQUZwQyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQzs7Ozs7SUFFSix1QkFBdUIsQ0FDckIsV0FBNEI7UUFHNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQzdELEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUN4RSxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGlDQUFpQyxDQUN2QyxVQUFlLEVBQ2YsV0FBNEI7O1lBR3hCLGNBQWMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsV0FBVyxDQUFDO1FBQ3BFLElBQUcsY0FBYyxFQUFFOztnQkFFYixNQUFNLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO1lBQzdELElBQUcsTUFBTSxFQUFFOztvQkFFTCxlQUFlLEdBQ2pCLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDO2dCQUVqRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQTthQUMvRDtpQkFDSTtnQkFDSCxPQUFPLElBQUksQ0FBQTthQUNaO1NBQ0Y7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDOzs7Ozs7O0lBRU8scUNBQXFDLENBQUMsTUFBTSxFQUFFLFdBQVc7O1lBQzNELE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTTs7WUFDM0IsRUFBRSxHQUFHLG1CQUFxQixFQUFFLEVBQUE7O1lBRTVCLFlBQVksR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNqQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxDQUFDOztZQUVHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7UUFDMUMsSUFBRyxLQUFLLEVBQUU7WUFDUixFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ2hDOztZQUVHLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1NBQ25CO1FBRUQsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDOzs7Ozs7SUFFTyw2QkFBNkIsQ0FDbkMsV0FBNEI7O1lBRXhCLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO1FBRWxELElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDNUIsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDNUI7O1lBRUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzs7WUFHckMsb0JBQW9CLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0MsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRTtnQkFDNUIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQzdCO2lCQUNJO2dCQUNILE9BQU8sUUFBUSxDQUFBO2FBQ2hCO1FBRUgsQ0FBQzs7WUFDRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxDQUFDO1FBRXBFLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Ozs7OztJQUVPLHdCQUF3QixDQUFDLFFBQVE7O1lBQ25DLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQzs7WUFDNUQsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7UUFFM0QsT0FBTyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQ3pDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFOztnQkFDMUIsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0RSxPQUFPLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBVztRQUM5QyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQy9DLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNsRSxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQ3RFLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyw4QkFBOEIsQ0FDcEMsVUFBNkI7UUFFN0IsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQzs7Ozs7O0lBRU8sdUJBQXVCLENBQUMsT0FBTzs7WUFDakMsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLElBQUksRUFBRSx5QkFBeUI7U0FDaEM7O1lBQ0csUUFBUSxHQUFHO1lBQ2IsV0FBVyxFQUFFLEtBQUs7U0FDbkI7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUM1QyxDQUFDOzs7Ozs7O0lBRU8sd0JBQXdCLENBQUMsT0FBTyxFQUFFLFVBQVU7O1lBQzlDLHVCQUF1QixHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7O2dCQUNuQyxFQUFFLEdBQUc7Z0JBQ1AsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dCQUNyQixJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVk7YUFDMUI7O2dCQUVHLFVBQVUsR0FBRztnQkFDZixrQkFBa0IsRUFBRSxFQUFFO2dCQUN0QixPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQzNCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVzthQUNoQzs7Z0JBRUcsSUFBSSxHQUFHO2dCQUNULEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDYixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixVQUFVLEVBQUUsVUFBVTthQUN2QjtZQUNELE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEMsQ0FBQzs7WUFDRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDO1FBQ2xFLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7OztJQUVELElBQVksU0FBUztRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUN0QztRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsT0FBTyxtQkFBeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEVBQUEsQ0FBQTtJQUNwRixDQUFDOzs7WUF2S0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbkNRLEtBQUs7WUErQkwsV0FBVztZQTVCbEIsaUJBQWlCOzs7Ozs7OztJQWtDakIsNkNBQTJDOzs7OztJQUd6Qyx3Q0FBMkI7Ozs7O0lBQzNCLDhDQUFrQzs7Ozs7SUFDbEMsb0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgY29tYmluZUxhdGVzdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgbWVyZ2VNYXAsXG4gIG1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBJbmZsZWN0aW9uU2VydmljZSxcbn0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBpUm91dGVyU3RhdGVVcmwsXG59IGZyb20gJ0BjZW8vc3RhdGUnXG5cbmltcG9ydCB7XG4gIFVybFNsdWcsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBKc29uQXBpRW50aXR5LFxuICBFbnRpdHlDb2xsZWN0aW9uLFxufSBmcm9tICcuLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQge1xuICBlbnRpdHlGZWF0dXJlU2VsZWN0b3JzLFxufSBmcm9tICcuLi9zdGF0ZS9mZWF0dXJlL3NlbGVjdG9ycydcblxuXG5pbXBvcnQge1xuICBpRW50aXR5Q29sbGVjdGlvbixcbiAgaUZlYXR1cmUsXG4gIGlGZWF0dXJlTWFwLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vZGF0YS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZUVudGl0eVR5cGVQcm92aWRlciB7XG4gIHByaXZhdGUgX2ZlYXR1cmVzJDogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5mbGVjdGlvblNlcnZpY2U6IEluZmxlY3Rpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgaGFuZGxlUm91dGVyTmF2aWdhdGlvbiQoXG4gICAgcm91dGVyU3RhdGU6IGlSb3V0ZXJTdGF0ZVVybFxuICApOiBPYnNlcnZhYmxlPGlSZXNvdXJjZUlkZW50aWZpZXI+IHtcblxuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzJC5waXBlKFxuICAgICAgbWVyZ2VNYXAoZmVhdHVyZXMgPT4gdGhpcy5mZWF0dXJlUm91dGFibGVFbnRpdGllcyQoZmVhdHVyZXMpKSxcbiAgICAgIG1hcChjb2xsZWN0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VJZGVudGlmaWVyRnJvbVJvdXRlclN0YXRlKGNvbGxlY3Rpb24sIHJvdXRlclN0YXRlKVxuICAgICAgfSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvdXJjZUlkZW50aWZpZXJGcm9tUm91dGVyU3RhdGUoXG4gICAgY29sbGVjdGlvbjogYW55LFxuICAgIHJvdXRlclN0YXRlOiBpUm91dGVyU3RhdGVVcmxcbiAgKTogaVJlc291cmNlSWRlbnRpZmllciB7XG5cbiAgICBsZXQgZW50aXR5VHlwZVNsdWcgPSB0aGlzLmVudGl0eVR5cGVTbHVnRnJvbVJvdXRlclN0YXRlKHJvdXRlclN0YXRlKVxuICAgIGlmKGVudGl0eVR5cGVTbHVnKSB7XG5cbiAgICAgIGxldCBlbnRpdHkgPSBjb2xsZWN0aW9uLmZpbmRCeUF0dHIoJ3VybFNsdWcnLCBlbnRpdHlUeXBlU2x1ZylcbiAgICAgIGlmKGVudGl0eSkge1xuXG4gICAgICAgIGxldCByb3V0ZXJTdGF0ZU9wdHMgPVxuICAgICAgICAgIHRoaXMucmVzb3VyY2VJZGVudGlmaWVyT3B0c0Zyb21Sb3V0ZXJTdGF0ZShlbnRpdHksIHJvdXRlclN0YXRlKVxuXG4gICAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBlbnRpdHkucmVzb3VyY2VJZGVudGlmaWVyLCByb3V0ZXJTdGF0ZU9wdHMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzb3VyY2VJZGVudGlmaWVyT3B0c0Zyb21Sb3V0ZXJTdGF0ZShlbnRpdHksIHJvdXRlclN0YXRlKSB7XG4gICAgbGV0IHBhcmFtcyA9IHJvdXRlclN0YXRlLnBhcmFtc1xuICAgIGxldCByaSA9IDxpUmVzb3VyY2VJZGVudGlmaWVyPnt9XG5cbiAgICBsZXQgaXNQcmltYXJ5S2V5ID0gKHZhbHVlLCBwcm9wKSA9PiB7XG4gICAgICByZXR1cm4gXy5pbmNsdWRlcyhlbnRpdHkucHJpbWFyeUtleXMsIHByb3ApXG4gICAgfVxuXG4gICAgbGV0IGlkS2V5ID0gXy5waWNrQnkocGFyYW1zLCBpc1ByaW1hcnlLZXkpIFxuICAgIGlmKGlkS2V5KSB7XG4gICAgICByaS5pZCA9IF8uaGVhZChfLnZhbHVlcyhpZEtleSkpXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlciA9IF8ub21pdChwYXJhbXMsIF8ua2V5cyhpZEtleSkpXG4gICAgaWYoIV8uaXNFbXB0eShmaWx0ZXIpKSB7XG4gICAgICByaS5maWx0ZXIgPSBmaWx0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gcmlcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5VHlwZVNsdWdGcm9tUm91dGVyU3RhdGUoXG4gICAgcm91dGVyU3RhdGU6IGlSb3V0ZXJTdGF0ZVVybFxuICApOiBVcmxTbHVnIHtcbiAgICBsZXQgc2VnbWVudHMgPSBfLm1hcChyb3V0ZXJTdGF0ZS5zZWdtZW50cywgJ3BhdGgnKVxuXG4gICAgaWYoXy5oZWFkKHNlZ21lbnRzKSA9PSAnYXBwJykge1xuICAgICAgc2VnbWVudHMgPSBfLmRyb3Aoc2VnbWVudHMpXG4gICAgfVxuXG4gICAgbGV0IHBhcmFtcyA9IF8udmFsdWVzKHJvdXRlclN0YXRlLnBhcmFtcylcblxuXG4gICAgbGV0IHNlZ21lbnRzV2l0aG91dFBhcmFtID0gKHNlZ21lbnRzLCBwYXJhbSkgPT4ge1xuICAgICAgaWYoXy5sYXN0KHNlZ21lbnRzKSA9PSBwYXJhbSkge1xuICAgICAgICByZXR1cm4gXy5kcm9wUmlnaHQoc2VnbWVudHMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlZ21lbnRzXG4gICAgICB9XG5cbiAgICB9XG4gICAgbGV0IGZpbmFsU2VnbWVudHMgPSBfLnJlZHVjZShwYXJhbXMsIHNlZ21lbnRzV2l0aG91dFBhcmFtLCBzZWdtZW50cylcblxuICAgIHJldHVybiBmaW5hbFNlZ21lbnRzWzBdXG4gIH1cblxuICBwcml2YXRlIGZlYXR1cmVSb3V0YWJsZUVudGl0aWVzJChmZWF0dXJlcykge1xuICAgIGxldCBnZXRSb3V0YWJsZUVudGl0aWVzID0gXy5iaW5kKHRoaXMuZ2V0Um91dGFibGVFbnRpdGllcywgdGhpcylcbiAgICBsZXQgcm91dGFibGVFbnRpdGllcyA9IF8ubWFwKGZlYXR1cmVzLCBnZXRSb3V0YWJsZUVudGl0aWVzKVxuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qocm91dGFibGVFbnRpdGllcykucGlwZShcbiAgICAgIG1hcChyb3V0YWJsZUVudGl0eUNvbGxlY3Rpb25zID0+IHtcbiAgICAgICAgbGV0IGVudGl0aWVzID0gXy5mbGF0dGVuKF8ubWFwKHJvdXRhYmxlRW50aXR5Q29sbGVjdGlvbnMsICdlbnRpdGllcycpKVxuICAgICAgICByZXR1cm4gbmV3IEVudGl0eUNvbGxlY3Rpb24oZW50aXRpZXMpXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRhYmxlRW50aXRpZXMoZmVhdHVyZSwgZmVhdHVyZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUNvbmZpZ3VyYXRpb25zJChmZWF0dXJlKS5waXBlKFxuICAgICAgbWFwKGNvbGxlY3Rpb24gPT4gdGhpcy5yb3V0YWJsZVJlc291cmNlQ29uZmlndXJhdGlvbnMoY29sbGVjdGlvbikpLFxuICAgICAgbWFwKGNvbGxlY3Rpb24gPT4gdGhpcy5idWlsZFJlc291cmNlSWRlbnRpZmllcnMoZmVhdHVyZSwgY29sbGVjdGlvbikpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgcm91dGFibGVSZXNvdXJjZUNvbmZpZ3VyYXRpb25zKFxuICAgIGNvbGxlY3Rpb246IGlFbnRpdHlDb2xsZWN0aW9uXG4gICk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi53aGVyZSh7aXNSb3V0YWJsZTogdHJ1ZX0pXG4gIH1cblxuICBwcml2YXRlIHJlc291cmNlQ29uZmlndXJhdGlvbnMkKGZlYXR1cmUpIHtcbiAgICBsZXQgcmkgPSB7XG4gICAgICBmZWF0dXJlOiBmZWF0dXJlLm5hbWUsXG4gICAgICB0eXBlOiAncmVzb3VyY2UtY29uZmlndXJhdGlvbnMnLFxuICAgIH1cbiAgICBsZXQgZGF0YU9wdHMgPSB7XG4gICAgICBzeW5jV2l0aEFwaTogZmFsc2UsXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0JChyaSwgZGF0YU9wdHMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVzb3VyY2VJZGVudGlmaWVycyhmZWF0dXJlLCBjb2xsZWN0aW9uKSB7XG4gICAgbGV0IGJ1aWxkUmVzb3VyY2VJZGVudGlmaWVyID0gKGVudGl0eSkgPT4ge1xuICAgICAgbGV0IHJpID0ge1xuICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLm5hbWUsXG4gICAgICAgIHR5cGU6IGVudGl0eS5yZXNvdXJjZVR5cGUsXG4gICAgICB9XG5cbiAgICAgIGxldCBhdHRyaWJ1dGVzID0ge1xuICAgICAgICByZXNvdXJjZUlkZW50aWZpZXI6IHJpLFxuICAgICAgICB1cmxTbHVnOiBlbnRpdHkuZGlzcGxheVNsdWcsXG4gICAgICAgIHByaW1hcnlLZXlzOiBlbnRpdHkucHJpbWFyeUtleXNcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGlkOiBlbnRpdHkuaWQsXG4gICAgICAgIHR5cGU6ICdyZXNvdXJjZS1pZGVudGlmaWVycycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEpzb25BcGlFbnRpdHkoZGF0YSlcbiAgICB9XG4gICAgbGV0IGVudGl0aWVzID0gXy5tYXAoY29sbGVjdGlvbi5lbnRpdGllcywgYnVpbGRSZXNvdXJjZUlkZW50aWZpZXIpXG4gICAgcmV0dXJuIG5ldyBFbnRpdHlDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZmVhdHVyZXMkKCk6IE9ic2VydmFibGU8aUZlYXR1cmVNYXA+IHtcbiAgICBpZighdGhpcy5fZmVhdHVyZXMkKSB7XG4gICAgICB0aGlzLl9mZWF0dXJlcyQgPSB0aGlzLmdldEZlYXR1cmVzJCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVzJFxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlcyQoKTogT2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4ge1xuICAgIHJldHVybiA8T2JzZXJ2YWJsZTxpRmVhdHVyZU1hcD4+dGhpcy5zdG9yZS5zZWxlY3QoZW50aXR5RmVhdHVyZVNlbGVjdG9ycy5mZWF0dXJlcylcbiAgfVxuXG5cbn1cbiJdfQ==