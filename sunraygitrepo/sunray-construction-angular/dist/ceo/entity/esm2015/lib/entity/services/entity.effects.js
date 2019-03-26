/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Observable, } from 'rxjs';
import { switchMap, map, mergeMap, filter, } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
// @ngrx imports
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { typeFor, applicationConfigSelectors, ApplicationConfigActions, } from '@ceo/state';
import { EntityService } from './entity.service';
import { FeatureActions, } from '../state/index';
import { EntityActions, EntityActionsMap, } from '../classes/index';
import { FEATURE_CONFIG, } from '../util/tokens';
import { ResourceIdentifierService } from './resource-identifier.service';
export class EntityEffects {
    /**
     * @param {?} store
     * @param {?} actions$
     * @param {?} entityService
     * @param {?} featureConfig
     * @param {?} resourceIdentifierService
     */
    constructor(store, actions$, entityService, featureConfig, resourceIdentifierService) {
        this.store = store;
        this.actions$ = actions$;
        this.entityService = entityService;
        this.featureConfig = featureConfig;
        this.resourceIdentifierService = resourceIdentifierService;
        this.featureName = 'Feature';
        this.init$ = this.actions$
            .pipe(ofType(this.featureAction("INIT")), switchMap((action) => {
            /** @type {?} */
            let registerFeatureAction = new FeatureActions.RegisterFeature(this.featureConfig);
            /** @type {?} */
            let loadSeedAction = new EntityActions.LoadSeedData(this.featureName, this.featureConfig);
            return [registerFeatureAction, loadSeedAction];
        }));
        this.seed$ = this.actions$
            .pipe(ofType(this.featureAction("LOAD_SEED_DATA")), switchMap((action) => {
            /** @type {?} */
            var feature = action.payload;
            /** @type {?} */
            let seeds = action.payload.seedEntities;
            /** @type {?} */
            let buildLoadAction = (ri) => {
                /** @type {?} */
                let sliceName = this.getFeatureEntitySlice(feature.name, ri.type);
                return new EntityActions.Load(sliceName, ri);
            };
            return _.map(seeds, buildLoadAction);
        }));
        this.load$ = this.actions$
            .pipe(ofType(...this.sliceActions("LOAD")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.get$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.AsyncSuccess(this.featureName, payload);
        }));
        this.add$ = this.actions$
            .pipe(ofType(...this.sliceActions("ADD")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.create$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.AsyncSuccess(this.featureName, payload);
        }));
        this.update$ = this.actions$
            .pipe(ofType(...this.sliceActions("UPDATE")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.update$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.AsyncSuccess(this.featureName, payload);
        }));
        this.asyncSuccess$ = this.actions$
            .pipe(ofType(this.featureAction("ASYNC_SUCCESS")), map((action) => {
            return {
                resourceIdentifier: action.payload.resourceIdentifier,
                data: this.groupedEntities(action.payload),
            };
        }), switchMap((payload) => {
            return this.buildAddToStoreActions(payload);
        }));
        this.delete$ = this.actions$
            .pipe(ofType(...this.sliceActions("DELETE")), mergeMap((action) => {
            /** @type {?} */
            let resourceOpts = this.buildResourceOpts(action);
            return this.entityService.delete$(resourceOpts);
        }), map((payload) => {
            return new EntityActions.DeleteSuccess(this.getEntitySlice(payload.resourceIdentifier.type), payload.data);
        }));
        this.loadApplicationResource$ = this.actions$
            .pipe(ofType('[ApplicationConfig] LOAD_RESOURCE_BY_ID'), mergeMap(() => {
            return this.store.select(applicationConfigSelectors.resourceById);
        }), filter((payload) => this.isValidPayload(payload)), mergeMap((payload) => {
            return this.entityService.get$(payload);
        }), filter((payload) => this.isValidResource(payload)), map((payload) => {
            return new ApplicationConfigActions.SetPrimaryEntity(payload);
        }));
        this.featureName = featureConfig.name;
    }
    /**
     * @return {?}
     */
    ngrxOnIdentifyEffects() {
        return this.featureName;
    }
    /**
     * @return {?}
     */
    ngrxOnInitEffects() {
        /** @type {?} */
        let initFeatureAction = new EntityActions.Init(this.featureName, this.featureConfig);
        return initFeatureAction;
    }
    // Private methods
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddToStoreActions(payload) {
        /** @type {?} */
        let actions = [];
        /** @type {?} */
        let addActions = _.map(payload.data, _.bind(this.buildAddEntitiesAction, this));
        actions = actions.concat(addActions);
        if (this.resourceIdentifierService.isScope(payload.resourceIdentifier)) {
            /** @type {?} */
            let scopeAction = this.buildAddScopeEntitiesAction(payload);
            actions = actions.concat([scopeAction]);
        }
        return _.flatten(actions);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddEntitiesAction(payload) {
        return new EntityActions.AddStoreEntities(this.getEntitySlice(payload.sliceName), payload.entities);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    buildAddScopeEntitiesAction(payload) {
        /** @type {?} */
        let ri = payload.resourceIdentifier;
        /** @type {?} */
        let scopeName = this.resourceIdentifierService.scopeName(ri);
        /** @type {?} */
        var sliceName = ri.type;
        /** @type {?} */
        let hasEntityType = (payload) => {
            return payload.sliceName == sliceName;
        };
        /** @type {?} */
        let sliceNamePayload = _.find(payload.data, hasEntityType);
        /** @type {?} */
        let entities = sliceNamePayload.entities;
        /** @type {?} */
        let actionPayload = {
            scope: scopeName,
            entities: entities
        };
        return new EntityActions.SetScopeEntities(this.getEntitySlice(sliceName), actionPayload);
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    groupedEntities(payload) {
        /** @type {?} */
        let entities = payload.data;
        /** @type {?} */
        let groupedBySlice = (entityTypeMap, entity) => {
            /** @type {?} */
            let sliceName = entity.constructor.sliceName;
            /** @type {?} */
            var entities = [];
            if (entityTypeMap[sliceName]) {
                entities = entityTypeMap[sliceName].entities;
            }
            entities.push(entity);
            entityTypeMap[sliceName] = {
                sliceName: sliceName,
                entities: entities
            };
            return entityTypeMap;
        };
        return _.values(_.reduce(entities, groupedBySlice, {}));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isValidPayload(payload) {
        //TODO: @Deepak  - it should ensure the payload is for THIS feature
        return _.has(payload, 'feature') &&
            _.has(payload, 'type') &&
            _.has(payload, 'id');
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isValidResource(payload) {
        return payload;
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    buildResourceOpts(action) {
        /** @type {?} */
        let ri = {
            type: _.last(_.split(action.slice, "."))
        };
        ri = _.merge({}, ri, action.payload);
        return {
            payload: action.payload,
            type: _.last(_.split(action.slice, ".")),
            data: action.payload.data,
            resourceIdentifier: ri,
        };
    }
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    featureAction(actionName) {
        /** @type {?} */
        let featureName = this.featureConfig.name;
        return typeFor(featureName, EntityActionsMap[actionName]);
    }
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    sliceActions(actionName) {
        /** @type {?} */
        let buildActionType = (sliceName) => {
            return typeFor(sliceName, EntityActionsMap[actionName]);
        };
        /** @type {?} */
        let sliceActions = _.map(this.featureConfig.sliceNames, buildActionType);
        return sliceActions;
    }
    /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    getSliceName(resourceOpts) {
        return _.join([resourceOpts.feature, 'entities', resourceOpts.type], '.');
    }
    /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    getEntitySlice(sliceName) {
        return this.getFeatureEntitySlice(this.featureName, sliceName);
    }
    /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    getFeatureEntitySlice(featureName, sliceName) {
        return _.join([featureName, 'entities', sliceName], '.');
    }
}
EntityEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityEffects.ctorParameters = () => [
    { type: Store },
    { type: Actions },
    { type: EntityService },
    { type: undefined, decorators: [{ type: Inject, args: [FEATURE_CONFIG,] }] },
    { type: ResourceIdentifierService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "init$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "seed$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "load$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "add$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "update$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "asyncSuccess$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "delete$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], EntityEffects.prototype, "loadApplicationResource$", void 0);
if (false) {
    /** @type {?} */
    EntityEffects.prototype.featureName;
    /** @type {?} */
    EntityEffects.prototype.init$;
    /** @type {?} */
    EntityEffects.prototype.seed$;
    /** @type {?} */
    EntityEffects.prototype.load$;
    /** @type {?} */
    EntityEffects.prototype.add$;
    /** @type {?} */
    EntityEffects.prototype.update$;
    /** @type {?} */
    EntityEffects.prototype.asyncSuccess$;
    /** @type {?} */
    EntityEffects.prototype.delete$;
    /** @type {?} */
    EntityEffects.prototype.loadApplicationResource$;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.actions$;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.entityService;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.featureConfig;
    /**
     * @type {?}
     * @protected
     */
    EntityEffects.prototype.resourceIdentifierService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvc2VydmljZXMvZW50aXR5LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsVUFBVSxHQUlYLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNMLFNBQVMsRUFDRyxHQUFHLEVBQUUsUUFBUSxFQUNoQixNQUFNLEdBRWhCLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBR2xELE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBZ0IsYUFBYSxDQUFBO0FBQ3JELE9BQU8sRUFDTCxPQUFPLEVBQUUsTUFBTSxFQUNmLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsT0FBTyxFQUNQLDBCQUEwQixFQUFFLHdCQUF3QixHQUVyRCxNQUFNLFlBQVksQ0FBQTtBQUVuQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQTRCLGtCQUFrQixDQUFBO0FBRXRFLE9BQU8sRUFDTCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLGtCQUFrQixDQUFBO0FBZXpCLE9BQU8sRUFDTCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUd6RSxNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7SUFLeEIsWUFDWSxLQUFpQixFQUNqQixRQUFzQixFQUN0QixhQUE0QixFQUNKLGFBQWEsRUFDckMseUJBQW9EO1FBSnBELFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBYztR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OztJQVkvQiw4QkFVSzs7SUFFTCw4QkFnQks7O0lBRUwsOEJBWUk7O0lBRUosNkJBWUs7O0lBRUwsZ0NBWUs7O0lBRUwsc0NBY0s7O0lBRUwsZ0NBZUs7O0lBRUwsaURBZ0JLOzs7OztJQWxJSCw4QkFBMkI7Ozs7O0lBQzNCLGlDQUFnQzs7Ozs7SUFDaEMsc0NBQXNDOzs7OztJQUN0QyxzQ0FBK0M7Ozs7O0lBQy9DLGtEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG4gIGRlZmVyLFxuICBjb21iaW5lTGF0ZXN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBzd2l0Y2hNYXAsXG4gIGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsXG4gIGZsYXRNYXAsIGZpbHRlciwgdGFwLFxuICBleGhhdXN0TWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuLy8gQG5ncnggaW1wb3J0c1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9ICAgICAgICAgICBmcm9tICdAbmdyeC9zdG9yZSdcbmltcG9ydCB7XG4gIEFjdGlvbnMsIEVmZmVjdCxcbiAgb2ZUeXBlLCBPbklkZW50aWZ5RWZmZWN0cyxcbiAgT25Jbml0RWZmZWN0cywgT25SdW5FZmZlY3RzLFxuICBFZmZlY3ROb3RpZmljYXRpb24sXG59IGZyb20gJ0BuZ3J4L2VmZmVjdHMnXG5cbmltcG9ydCB7XG4gIHR5cGVGb3IsIFBheWxvYWRBY3Rpb24sXG4gIGFwcGxpY2F0aW9uQ29uZmlnU2VsZWN0b3JzLCBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvbnMsXG4gIHN5c3RlbUNvbXBvbmVudHNTZWxlY3RvcnMsIFN5c3RlbUNvbXBvbmVudHNBY3Rpb25zLFxufSBmcm9tICdAY2VvL3N0YXRlJ1xuXG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vZW50aXR5LnNlcnZpY2UnXG5cbmltcG9ydCB7XG4gIEZlYXR1cmVBY3Rpb25zLFxufSBmcm9tICcuLi9zdGF0ZS9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5QWN0aW9ucyxcbiAgRW50aXR5QWN0aW9uc01hcCxcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5Q29uZmlnQWN0aW9ucyxcbn0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaUFwaVJlc3BvbnNlLFxuICBpRW50aXR5U2xpY2VOYW1lUGF5bG9hZCxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG4gIGlFbnRpdHlNYXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZFQVRVUkVfQ09ORklHLFxufSBmcm9tICcuLi91dGlsL3Rva2VucydcblxuaW1wb3J0IHsgUmVzb3VyY2VJZGVudGlmaWVyU2VydmljZSB9IGZyb20gJy4vcmVzb3VyY2UtaWRlbnRpZmllci5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5RWZmZWN0c1xuICBpbXBsZW1lbnRzIE9uSWRlbnRpZnlFZmZlY3RzLCBPbkluaXRFZmZlY3RzIHtcblxuICBmZWF0dXJlTmFtZTogc3RyaW5nID0gJ0ZlYXR1cmUnXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9uczxhbnk+LFxuICAgIHByb3RlY3RlZCBlbnRpdHlTZXJ2aWNlOiBFbnRpdHlTZXJ2aWNlLFxuICAgIEBJbmplY3QoRkVBVFVSRV9DT05GSUcpIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnLFxuICAgIHByb3RlY3RlZCByZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlOiBSZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZmVhdHVyZU5hbWUgPSBmZWF0dXJlQ29uZmlnLm5hbWVcbiAgfVxuXG4gIEBFZmZlY3QoKVxuICBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKHRoaXMuZmVhdHVyZUFjdGlvbihcIklOSVRcIikpLFxuICAgICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByZWdpc3RlckZlYXR1cmVBY3Rpb24gPSBuZXcgRmVhdHVyZUFjdGlvbnMuUmVnaXN0ZXJGZWF0dXJlKHRoaXMuZmVhdHVyZUNvbmZpZylcbiAgICAgICAgICBsZXQgbG9hZFNlZWRBY3Rpb24gPSBuZXcgRW50aXR5QWN0aW9ucy5Mb2FkU2VlZERhdGEodGhpcy5mZWF0dXJlTmFtZSwgdGhpcy5mZWF0dXJlQ29uZmlnKVxuICAgICAgICAgIHJldHVybiBbcmVnaXN0ZXJGZWF0dXJlQWN0aW9uLCBsb2FkU2VlZEFjdGlvbl1cbiAgICAgICAgfSksXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIHNlZWQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUodGhpcy5mZWF0dXJlQWN0aW9uKFwiTE9BRF9TRUVEX0RBVEFcIikpLFxuICAgICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIHZhciBmZWF0dXJlID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICBsZXQgc2VlZHMgPSBhY3Rpb24ucGF5bG9hZC5zZWVkRW50aXRpZXNcblxuICAgICAgICAgIGxldCBidWlsZExvYWRBY3Rpb24gPSAocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBzbGljZU5hbWUgPSB0aGlzLmdldEZlYXR1cmVFbnRpdHlTbGljZShmZWF0dXJlLm5hbWUsIHJpLnR5cGUpXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuTG9hZChzbGljZU5hbWUsIHJpKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfLm1hcChzZWVkcywgYnVpbGRMb2FkQWN0aW9uKVxuICAgICAgICB9KSxcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgbG9hZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAucGlwZShcbiAgICAgICBvZlR5cGUoLi4udGhpcy5zbGljZUFjdGlvbnMoXCJMT0FEXCIpKSxcbiAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICBsZXQgcmVzb3VyY2VPcHRzID0gdGhpcy5idWlsZFJlc291cmNlT3B0cyhhY3Rpb24pXG4gICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZXJ2aWNlLmdldCQocmVzb3VyY2VPcHRzKVxuICAgICAgIH0pLFxuICAgICAgIG1hcCgocGF5bG9hZDogaUFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuQXN5bmNTdWNjZXNzKHRoaXMuZmVhdHVyZU5hbWUsIHBheWxvYWQpXG4gICAgICAgfSlcbiAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBhZGQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoLi4udGhpcy5zbGljZUFjdGlvbnMoXCJBRERcIikpLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc291cmNlT3B0cyA9IHRoaXMuYnVpbGRSZXNvdXJjZU9wdHMoYWN0aW9uKVxuICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlcnZpY2UuY3JlYXRlJChyZXNvdXJjZU9wdHMpXG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHBheWxvYWQ6IGlBcGlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5Bc3luY1N1Y2Nlc3ModGhpcy5mZWF0dXJlTmFtZSwgcGF5bG9hZClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgdXBkYXRlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKC4uLnRoaXMuc2xpY2VBY3Rpb25zKFwiVVBEQVRFXCIpKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByZXNvdXJjZU9wdHMgPSB0aGlzLmJ1aWxkUmVzb3VyY2VPcHRzKGFjdGlvbilcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZXJ2aWNlLnVwZGF0ZSQocmVzb3VyY2VPcHRzKVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBpQXBpUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuQXN5bmNTdWNjZXNzKHRoaXMuZmVhdHVyZU5hbWUsIHBheWxvYWQpXG4gICAgICAgIH0pLFxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBhc3luY1N1Y2Nlc3MkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUodGhpcy5mZWF0dXJlQWN0aW9uKFwiQVNZTkNfU1VDQ0VTU1wiKSksXG4gICAgICAgIG1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc291cmNlSWRlbnRpZmllcjogYWN0aW9uLnBheWxvYWQucmVzb3VyY2VJZGVudGlmaWVyLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5ncm91cGVkRW50aXRpZXMoYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcCgocGF5bG9hZDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBZGRUb1N0b3JlQWN0aW9ucyhwYXlsb2FkKVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBkZWxldGUkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoLi4udGhpcy5zbGljZUFjdGlvbnMoXCJERUxFVEVcIikpLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc291cmNlT3B0cyA9IHRoaXMuYnVpbGRSZXNvdXJjZU9wdHMoYWN0aW9uKVxuICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlcnZpY2UuZGVsZXRlJChyZXNvdXJjZU9wdHMpXG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHBheWxvYWQ6IGlBcGlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5EZWxldGVTdWNjZXNzKFxuICAgICAgICAgICAgdGhpcy5nZXRFbnRpdHlTbGljZShwYXlsb2FkLnJlc291cmNlSWRlbnRpZmllci50eXBlKSxcbiAgICAgICAgICAgIHBheWxvYWQuZGF0YVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgbG9hZEFwcGxpY2F0aW9uUmVzb3VyY2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoJ1tBcHBsaWNhdGlvbkNvbmZpZ10gTE9BRF9SRVNPVVJDRV9CWV9JRCcpLFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGFwcGxpY2F0aW9uQ29uZmlnU2VsZWN0b3JzLnJlc291cmNlQnlJZClcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigocGF5bG9hZCkgPT4gdGhpcy5pc1ZhbGlkUGF5bG9hZChwYXlsb2FkKSksXG4gICAgICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VydmljZS5nZXQkKHBheWxvYWQpXG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKHBheWxvYWQpID0+IHRoaXMuaXNWYWxpZFJlc291cmNlKHBheWxvYWQpKSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9ucy5TZXRQcmltYXJ5RW50aXR5KHBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICApXG5cblxuICBuZ3J4T25JZGVudGlmeUVmZmVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZU5hbWVcbiAgfVxuXG4gIG5ncnhPbkluaXRFZmZlY3RzKCk6IEFjdGlvbiB7XG4gICAgbGV0IGluaXRGZWF0dXJlQWN0aW9uID0gbmV3IEVudGl0eUFjdGlvbnMuSW5pdCh0aGlzLmZlYXR1cmVOYW1lLCB0aGlzLmZlYXR1cmVDb25maWcpXG4gICAgcmV0dXJuIGluaXRGZWF0dXJlQWN0aW9uXG4gIH1cblxuICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICBwcml2YXRlIGJ1aWxkQWRkVG9TdG9yZUFjdGlvbnMocGF5bG9hZCkge1xuICAgIGxldCBhY3Rpb25zID0gW11cbiAgICBsZXQgYWRkQWN0aW9ucyA9IF8ubWFwKHBheWxvYWQuZGF0YSwgXy5iaW5kKHRoaXMuYnVpbGRBZGRFbnRpdGllc0FjdGlvbiwgdGhpcykpXG4gICAgYWN0aW9ucyA9IGFjdGlvbnMuY29uY2F0KGFkZEFjdGlvbnMpXG5cbiAgICBpZih0aGlzLnJlc291cmNlSWRlbnRpZmllclNlcnZpY2UuaXNTY29wZShwYXlsb2FkLnJlc291cmNlSWRlbnRpZmllcikpIHtcbiAgICAgIGxldCBzY29wZUFjdGlvbiA9IHRoaXMuYnVpbGRBZGRTY29wZUVudGl0aWVzQWN0aW9uKHBheWxvYWQpXG4gICAgICBhY3Rpb25zID0gYWN0aW9ucy5jb25jYXQoW3Njb3BlQWN0aW9uXSlcbiAgICB9XG5cbiAgICByZXR1cm4gXy5mbGF0dGVuKGFjdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRkRW50aXRpZXNBY3Rpb24ocGF5bG9hZDogaUVudGl0eVNsaWNlTmFtZVBheWxvYWQpIHtcbiAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuQWRkU3RvcmVFbnRpdGllcyhcbiAgICAgIHRoaXMuZ2V0RW50aXR5U2xpY2UocGF5bG9hZC5zbGljZU5hbWUpLFxuICAgICAgcGF5bG9hZC5lbnRpdGllcyxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRkU2NvcGVFbnRpdGllc0FjdGlvbihwYXlsb2FkOiBhbnkpIHtcbiAgICBsZXQgcmkgPSBwYXlsb2FkLnJlc291cmNlSWRlbnRpZmllclxuICAgIGxldCBzY29wZU5hbWUgPSB0aGlzLnJlc291cmNlSWRlbnRpZmllclNlcnZpY2Uuc2NvcGVOYW1lKHJpKVxuXG4gICAgdmFyIHNsaWNlTmFtZSA9IHJpLnR5cGVcbiAgICBsZXQgaGFzRW50aXR5VHlwZSA9IChwYXlsb2FkOiBpRW50aXR5U2xpY2VOYW1lUGF5bG9hZCk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIHBheWxvYWQuc2xpY2VOYW1lID09IHNsaWNlTmFtZVxuICAgIH1cblxuICAgIGxldCBzbGljZU5hbWVQYXlsb2FkID0gXy5maW5kKHBheWxvYWQuZGF0YSwgaGFzRW50aXR5VHlwZSlcbiAgICBsZXQgZW50aXRpZXMgPSBzbGljZU5hbWVQYXlsb2FkLmVudGl0aWVzXG5cbiAgICBsZXQgYWN0aW9uUGF5bG9hZCA9IHtcbiAgICAgIHNjb3BlOiBzY29wZU5hbWUsXG4gICAgICBlbnRpdGllczogZW50aXRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuU2V0U2NvcGVFbnRpdGllcyhcbiAgICAgIHRoaXMuZ2V0RW50aXR5U2xpY2Uoc2xpY2VOYW1lKSxcbiAgICAgIGFjdGlvblBheWxvYWQsXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBncm91cGVkRW50aXRpZXMocGF5bG9hZDogaUFwaVJlc3BvbnNlKTogaUVudGl0eVNsaWNlTmFtZVBheWxvYWRbXSB7XG4gICAgbGV0IGVudGl0aWVzID0gcGF5bG9hZC5kYXRhXG5cbiAgICBsZXQgZ3JvdXBlZEJ5U2xpY2UgPSAoZW50aXR5VHlwZU1hcCwgZW50aXR5KSA9PiB7XG4gICAgICBsZXQgc2xpY2VOYW1lID0gZW50aXR5LmNvbnN0cnVjdG9yLnNsaWNlTmFtZVxuICAgICAgdmFyIGVudGl0aWVzID0gW11cbiAgICAgIGlmKGVudGl0eVR5cGVNYXBbc2xpY2VOYW1lXSkge1xuICAgICAgICBlbnRpdGllcyA9IGVudGl0eVR5cGVNYXBbc2xpY2VOYW1lXS5lbnRpdGllc1xuICAgICAgfVxuICAgICAgZW50aXRpZXMucHVzaChlbnRpdHkpXG4gICAgICBlbnRpdHlUeXBlTWFwW3NsaWNlTmFtZV0gPSB7XG4gICAgICAgIHNsaWNlTmFtZTogc2xpY2VOYW1lLFxuICAgICAgICBlbnRpdGllczogZW50aXRpZXNcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVudGl0eVR5cGVNYXBcbiAgICB9XG5cbiAgICByZXR1cm4gIF8udmFsdWVzKF8ucmVkdWNlKGVudGl0aWVzLCBncm91cGVkQnlTbGljZSwge30pKVxuICB9XG5cblxuICBwcml2YXRlIGlzVmFsaWRQYXlsb2FkKHBheWxvYWQpIHtcbiAgICAvL1RPRE86IEBEZWVwYWsgIC0gaXQgc2hvdWxkIGVuc3VyZSB0aGUgcGF5bG9hZCBpcyBmb3IgVEhJUyBmZWF0dXJlXG4gICAgcmV0dXJuIF8uaGFzKHBheWxvYWQsICdmZWF0dXJlJykgJiZcbiAgICBfLmhhcyhwYXlsb2FkLCAndHlwZScpICYmXG4gICAgXy5oYXMocGF5bG9hZCwgJ2lkJylcbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZFJlc291cmNlKHBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJlc291cmNlT3B0cyhhY3Rpb24pIHtcbiAgICBsZXQgcmkgPSB7XG4gICAgICB0eXBlOiBfLmxhc3QoXy5zcGxpdChhY3Rpb24uc2xpY2UsIFwiLlwiKSlcbiAgICB9XG4gICAgcmkgPSBfLm1lcmdlKHt9LCByaSwgYWN0aW9uLnBheWxvYWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF5bG9hZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB0eXBlOiBfLmxhc3QoXy5zcGxpdChhY3Rpb24uc2xpY2UsIFwiLlwiKSksXG4gICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgcmVzb3VyY2VJZGVudGlmaWVyOiByaSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZlYXR1cmVBY3Rpb24oYWN0aW9uTmFtZSkge1xuICAgIGxldCBmZWF0dXJlTmFtZSA9IHRoaXMuZmVhdHVyZUNvbmZpZy5uYW1lXG4gICAgcmV0dXJuIHR5cGVGb3IoZmVhdHVyZU5hbWUsIEVudGl0eUFjdGlvbnNNYXBbYWN0aW9uTmFtZV0pXG4gIH1cblxuICBwcml2YXRlIHNsaWNlQWN0aW9ucyhhY3Rpb25OYW1lKSB7XG4gICAgbGV0IGJ1aWxkQWN0aW9uVHlwZSA9IChzbGljZU5hbWUpID0+IHtcbiAgICAgIHJldHVybiB0eXBlRm9yKHNsaWNlTmFtZSwgRW50aXR5QWN0aW9uc01hcFthY3Rpb25OYW1lXSlcbiAgICB9XG4gICAgbGV0IHNsaWNlQWN0aW9ucyA9IF8ubWFwKHRoaXMuZmVhdHVyZUNvbmZpZy5zbGljZU5hbWVzLCBidWlsZEFjdGlvblR5cGUpXG4gICAgcmV0dXJuIHNsaWNlQWN0aW9uc1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTbGljZU5hbWUocmVzb3VyY2VPcHRzKSB7XG4gICAgcmV0dXJuIF8uam9pbihbcmVzb3VyY2VPcHRzLmZlYXR1cmUsICdlbnRpdGllcycsIHJlc291cmNlT3B0cy50eXBlXSwgJy4nKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRpdHlTbGljZShzbGljZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGZWF0dXJlRW50aXR5U2xpY2UodGhpcy5mZWF0dXJlTmFtZSwgc2xpY2VOYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlRW50aXR5U2xpY2UoZmVhdHVyZU5hbWUsIHNsaWNlTmFtZSkge1xuICAgIHJldHVybiBfLmpvaW4oW2ZlYXR1cmVOYW1lLCdlbnRpdGllcycsIHNsaWNlTmFtZV0sICcuJylcbiAgfVxufVxuIl19