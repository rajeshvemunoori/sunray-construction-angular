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
var EntityEffects = /** @class */ (function () {
    function EntityEffects(store, actions$, entityService, featureConfig, resourceIdentifierService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.entityService = entityService;
        this.featureConfig = featureConfig;
        this.resourceIdentifierService = resourceIdentifierService;
        this.featureName = 'Feature';
        this.init$ = this.actions$
            .pipe(ofType(this.featureAction("INIT")), switchMap(function (action) {
            /** @type {?} */
            var registerFeatureAction = new FeatureActions.RegisterFeature(_this.featureConfig);
            /** @type {?} */
            var loadSeedAction = new EntityActions.LoadSeedData(_this.featureName, _this.featureConfig);
            return [registerFeatureAction, loadSeedAction];
        }));
        this.seed$ = this.actions$
            .pipe(ofType(this.featureAction("LOAD_SEED_DATA")), switchMap(function (action) {
            /** @type {?} */
            var feature = action.payload;
            /** @type {?} */
            var seeds = action.payload.seedEntities;
            /** @type {?} */
            var buildLoadAction = function (ri) {
                /** @type {?} */
                var sliceName = _this.getFeatureEntitySlice(feature.name, ri.type);
                return new EntityActions.Load(sliceName, ri);
            };
            return _.map(seeds, buildLoadAction);
        }));
        this.load$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("LOAD"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.get$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.AsyncSuccess(_this.featureName, payload);
        }));
        this.add$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("ADD"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.create$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.AsyncSuccess(_this.featureName, payload);
        }));
        this.update$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("UPDATE"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.update$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.AsyncSuccess(_this.featureName, payload);
        }));
        this.asyncSuccess$ = this.actions$
            .pipe(ofType(this.featureAction("ASYNC_SUCCESS")), map(function (action) {
            return {
                resourceIdentifier: action.payload.resourceIdentifier,
                data: _this.groupedEntities(action.payload),
            };
        }), switchMap(function (payload) {
            return _this.buildAddToStoreActions(payload);
        }));
        this.delete$ = this.actions$
            .pipe(ofType.apply(void 0, tslib_1.__spread(this.sliceActions("DELETE"))), mergeMap(function (action) {
            /** @type {?} */
            var resourceOpts = _this.buildResourceOpts(action);
            return _this.entityService.delete$(resourceOpts);
        }), map(function (payload) {
            return new EntityActions.DeleteSuccess(_this.getEntitySlice(payload.resourceIdentifier.type), payload.data);
        }));
        this.loadApplicationResource$ = this.actions$
            .pipe(ofType('[ApplicationConfig] LOAD_RESOURCE_BY_ID'), mergeMap(function () {
            return _this.store.select(applicationConfigSelectors.resourceById);
        }), filter(function (payload) { return _this.isValidPayload(payload); }), mergeMap(function (payload) {
            return _this.entityService.get$(payload);
        }), filter(function (payload) { return _this.isValidResource(payload); }), map(function (payload) {
            return new ApplicationConfigActions.SetPrimaryEntity(payload);
        }));
        this.featureName = featureConfig.name;
    }
    /**
     * @return {?}
     */
    EntityEffects.prototype.ngrxOnIdentifyEffects = /**
     * @return {?}
     */
    function () {
        return this.featureName;
    };
    /**
     * @return {?}
     */
    EntityEffects.prototype.ngrxOnInitEffects = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var initFeatureAction = new EntityActions.Init(this.featureName, this.featureConfig);
        return initFeatureAction;
    };
    // Private methods
    // Private methods
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddToStoreActions = 
    // Private methods
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var actions = [];
        /** @type {?} */
        var addActions = _.map(payload.data, _.bind(this.buildAddEntitiesAction, this));
        actions = actions.concat(addActions);
        if (this.resourceIdentifierService.isScope(payload.resourceIdentifier)) {
            /** @type {?} */
            var scopeAction = this.buildAddScopeEntitiesAction(payload);
            actions = actions.concat([scopeAction]);
        }
        return _.flatten(actions);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddEntitiesAction = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return new EntityActions.AddStoreEntities(this.getEntitySlice(payload.sliceName), payload.entities);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.buildAddScopeEntitiesAction = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var ri = payload.resourceIdentifier;
        /** @type {?} */
        var scopeName = this.resourceIdentifierService.scopeName(ri);
        /** @type {?} */
        var sliceName = ri.type;
        /** @type {?} */
        var hasEntityType = function (payload) {
            return payload.sliceName == sliceName;
        };
        /** @type {?} */
        var sliceNamePayload = _.find(payload.data, hasEntityType);
        /** @type {?} */
        var entities = sliceNamePayload.entities;
        /** @type {?} */
        var actionPayload = {
            scope: scopeName,
            entities: entities
        };
        return new EntityActions.SetScopeEntities(this.getEntitySlice(sliceName), actionPayload);
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.groupedEntities = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var entities = payload.data;
        /** @type {?} */
        var groupedBySlice = function (entityTypeMap, entity) {
            /** @type {?} */
            var sliceName = entity.constructor.sliceName;
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
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.isValidPayload = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        //TODO: @Deepak  - it should ensure the payload is for THIS feature
        return _.has(payload, 'feature') &&
            _.has(payload, 'type') &&
            _.has(payload, 'id');
    };
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    EntityEffects.prototype.isValidResource = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return payload;
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    EntityEffects.prototype.buildResourceOpts = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        /** @type {?} */
        var ri = {
            type: _.last(_.split(action.slice, "."))
        };
        ri = _.merge({}, ri, action.payload);
        return {
            payload: action.payload,
            type: _.last(_.split(action.slice, ".")),
            data: action.payload.data,
            resourceIdentifier: ri,
        };
    };
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    EntityEffects.prototype.featureAction = /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    function (actionName) {
        /** @type {?} */
        var featureName = this.featureConfig.name;
        return typeFor(featureName, EntityActionsMap[actionName]);
    };
    /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    EntityEffects.prototype.sliceActions = /**
     * @private
     * @param {?} actionName
     * @return {?}
     */
    function (actionName) {
        /** @type {?} */
        var buildActionType = function (sliceName) {
            return typeFor(sliceName, EntityActionsMap[actionName]);
        };
        /** @type {?} */
        var sliceActions = _.map(this.featureConfig.sliceNames, buildActionType);
        return sliceActions;
    };
    /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    EntityEffects.prototype.getSliceName = /**
     * @private
     * @param {?} resourceOpts
     * @return {?}
     */
    function (resourceOpts) {
        return _.join([resourceOpts.feature, 'entities', resourceOpts.type], '.');
    };
    /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    EntityEffects.prototype.getEntitySlice = /**
     * @private
     * @param {?} sliceName
     * @return {?}
     */
    function (sliceName) {
        return this.getFeatureEntitySlice(this.featureName, sliceName);
    };
    /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    EntityEffects.prototype.getFeatureEntitySlice = /**
     * @private
     * @param {?} featureName
     * @param {?} sliceName
     * @return {?}
     */
    function (featureName, sliceName) {
        return _.join([featureName, 'entities', sliceName], '.');
    };
    EntityEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityEffects.ctorParameters = function () { return [
        { type: Store },
        { type: Actions },
        { type: EntityService },
        { type: undefined, decorators: [{ type: Inject, args: [FEATURE_CONFIG,] }] },
        { type: ResourceIdentifierService }
    ]; };
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
    return EntityEffects;
}());
export { EntityEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvc2VydmljZXMvZW50aXR5LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsVUFBVSxHQUlYLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUNMLFNBQVMsRUFDRyxHQUFHLEVBQUUsUUFBUSxFQUNoQixNQUFNLEdBRWhCLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBR2xELE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBZ0IsYUFBYSxDQUFBO0FBQ3JELE9BQU8sRUFDTCxPQUFPLEVBQUUsTUFBTSxFQUNmLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsT0FBTyxFQUNQLDBCQUEwQixFQUFFLHdCQUF3QixHQUVyRCxNQUFNLFlBQVksQ0FBQTtBQUVuQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQTRCLGtCQUFrQixDQUFBO0FBRXRFLE9BQU8sRUFDTCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLGtCQUFrQixDQUFBO0FBZXpCLE9BQU8sRUFDTCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUV6RTtJQU1FLHVCQUNZLEtBQWlCLEVBQ2pCLFFBQXNCLEVBQ3RCLGFBQTRCLEVBQ0osYUFBYSxFQUNyQyx5QkFBb0Q7UUFMaEUsaUJBUUM7UUFQVyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFDdEIsa0JBQWEs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Szs7SUFFTCw4QkFnQks7O0lBRUwsOEJBWUk7O0lBRUosNkJBWUs7O0lBRUwsZ0NBWUs7O0lBRUwsc0NBY0s7O0lBRUwsZ0NBZUs7O0lBRUwsaURBZ0JLOzs7OztJQWxJSCw4QkFBMkI7Ozs7O0lBQzNCLGlDQUFnQzs7Ozs7SUFDaEMsc0NBQXNDOzs7OztJQUN0QyxzQ0FBK0M7Ozs7O0lBQy9DLGtEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG4gIGRlZmVyLFxuICBjb21iaW5lTGF0ZXN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBzd2l0Y2hNYXAsXG4gIGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsXG4gIGZsYXRNYXAsIGZpbHRlciwgdGFwLFxuICBleGhhdXN0TWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuLy8gQG5ncnggaW1wb3J0c1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9ICAgICAgICAgICBmcm9tICdAbmdyeC9zdG9yZSdcbmltcG9ydCB7XG4gIEFjdGlvbnMsIEVmZmVjdCxcbiAgb2ZUeXBlLCBPbklkZW50aWZ5RWZmZWN0cyxcbiAgT25Jbml0RWZmZWN0cywgT25SdW5FZmZlY3RzLFxuICBFZmZlY3ROb3RpZmljYXRpb24sXG59IGZyb20gJ0BuZ3J4L2VmZmVjdHMnXG5cbmltcG9ydCB7XG4gIHR5cGVGb3IsIFBheWxvYWRBY3Rpb24sXG4gIGFwcGxpY2F0aW9uQ29uZmlnU2VsZWN0b3JzLCBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvbnMsXG4gIHN5c3RlbUNvbXBvbmVudHNTZWxlY3RvcnMsIFN5c3RlbUNvbXBvbmVudHNBY3Rpb25zLFxufSBmcm9tICdAY2VvL3N0YXRlJ1xuXG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vZW50aXR5LnNlcnZpY2UnXG5cbmltcG9ydCB7XG4gIEZlYXR1cmVBY3Rpb25zLFxufSBmcm9tICcuLi9zdGF0ZS9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5QWN0aW9ucyxcbiAgRW50aXR5QWN0aW9uc01hcCxcbn0gZnJvbSAnLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgRW50aXR5Q29uZmlnQWN0aW9ucyxcbn0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb25zdHJ1Y3RvcixcbiAgaUFwaVJlc3BvbnNlLFxuICBpRW50aXR5U2xpY2VOYW1lUGF5bG9hZCxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG4gIGlFbnRpdHlNYXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEZFQVRVUkVfQ09ORklHLFxufSBmcm9tICcuLi91dGlsL3Rva2VucydcblxuaW1wb3J0IHsgUmVzb3VyY2VJZGVudGlmaWVyU2VydmljZSB9IGZyb20gJy4vcmVzb3VyY2UtaWRlbnRpZmllci5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5RWZmZWN0c1xuICBpbXBsZW1lbnRzIE9uSWRlbnRpZnlFZmZlY3RzLCBPbkluaXRFZmZlY3RzIHtcblxuICBmZWF0dXJlTmFtZTogc3RyaW5nID0gJ0ZlYXR1cmUnXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9uczxhbnk+LFxuICAgIHByb3RlY3RlZCBlbnRpdHlTZXJ2aWNlOiBFbnRpdHlTZXJ2aWNlLFxuICAgIEBJbmplY3QoRkVBVFVSRV9DT05GSUcpIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnLFxuICAgIHByb3RlY3RlZCByZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlOiBSZXNvdXJjZUlkZW50aWZpZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZmVhdHVyZU5hbWUgPSBmZWF0dXJlQ29uZmlnLm5hbWVcbiAgfVxuXG4gIEBFZmZlY3QoKVxuICBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKHRoaXMuZmVhdHVyZUFjdGlvbihcIklOSVRcIikpLFxuICAgICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByZWdpc3RlckZlYXR1cmVBY3Rpb24gPSBuZXcgRmVhdHVyZUFjdGlvbnMuUmVnaXN0ZXJGZWF0dXJlKHRoaXMuZmVhdHVyZUNvbmZpZylcbiAgICAgICAgICBsZXQgbG9hZFNlZWRBY3Rpb24gPSBuZXcgRW50aXR5QWN0aW9ucy5Mb2FkU2VlZERhdGEodGhpcy5mZWF0dXJlTmFtZSwgdGhpcy5mZWF0dXJlQ29uZmlnKVxuICAgICAgICAgIHJldHVybiBbcmVnaXN0ZXJGZWF0dXJlQWN0aW9uLCBsb2FkU2VlZEFjdGlvbl1cbiAgICAgICAgfSksXG4gICAgICApXG5cbiAgQEVmZmVjdCgpXG4gIHNlZWQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUodGhpcy5mZWF0dXJlQWN0aW9uKFwiTE9BRF9TRUVEX0RBVEFcIikpLFxuICAgICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIHZhciBmZWF0dXJlID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICBsZXQgc2VlZHMgPSBhY3Rpb24ucGF5bG9hZC5zZWVkRW50aXRpZXNcblxuICAgICAgICAgIGxldCBidWlsZExvYWRBY3Rpb24gPSAocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBzbGljZU5hbWUgPSB0aGlzLmdldEZlYXR1cmVFbnRpdHlTbGljZShmZWF0dXJlLm5hbWUsIHJpLnR5cGUpXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuTG9hZChzbGljZU5hbWUsIHJpKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfLm1hcChzZWVkcywgYnVpbGRMb2FkQWN0aW9uKVxuICAgICAgICB9KSxcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgbG9hZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9XG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAucGlwZShcbiAgICAgICBvZlR5cGUoLi4udGhpcy5zbGljZUFjdGlvbnMoXCJMT0FEXCIpKSxcbiAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICBsZXQgcmVzb3VyY2VPcHRzID0gdGhpcy5idWlsZFJlc291cmNlT3B0cyhhY3Rpb24pXG4gICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZXJ2aWNlLmdldCQocmVzb3VyY2VPcHRzKVxuICAgICAgIH0pLFxuICAgICAgIG1hcCgocGF5bG9hZDogaUFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuQXN5bmNTdWNjZXNzKHRoaXMuZmVhdHVyZU5hbWUsIHBheWxvYWQpXG4gICAgICAgfSlcbiAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBhZGQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoLi4udGhpcy5zbGljZUFjdGlvbnMoXCJBRERcIikpLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc291cmNlT3B0cyA9IHRoaXMuYnVpbGRSZXNvdXJjZU9wdHMoYWN0aW9uKVxuICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlcnZpY2UuY3JlYXRlJChyZXNvdXJjZU9wdHMpXG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHBheWxvYWQ6IGlBcGlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5Bc3luY1N1Y2Nlc3ModGhpcy5mZWF0dXJlTmFtZSwgcGF5bG9hZClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgdXBkYXRlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID1cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKC4uLnRoaXMuc2xpY2VBY3Rpb25zKFwiVVBEQVRFXCIpKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbjogUGF5bG9hZEFjdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByZXNvdXJjZU9wdHMgPSB0aGlzLmJ1aWxkUmVzb3VyY2VPcHRzKGFjdGlvbilcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZXJ2aWNlLnVwZGF0ZSQocmVzb3VyY2VPcHRzKVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBpQXBpUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuQXN5bmNTdWNjZXNzKHRoaXMuZmVhdHVyZU5hbWUsIHBheWxvYWQpXG4gICAgICAgIH0pLFxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBhc3luY1N1Y2Nlc3MkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUodGhpcy5mZWF0dXJlQWN0aW9uKFwiQVNZTkNfU1VDQ0VTU1wiKSksXG4gICAgICAgIG1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc291cmNlSWRlbnRpZmllcjogYWN0aW9uLnBheWxvYWQucmVzb3VyY2VJZGVudGlmaWVyLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5ncm91cGVkRW50aXRpZXMoYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcCgocGF5bG9hZDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBZGRUb1N0b3JlQWN0aW9ucyhwYXlsb2FkKVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gIEBFZmZlY3QoKVxuICBkZWxldGUkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoLi4udGhpcy5zbGljZUFjdGlvbnMoXCJERUxFVEVcIikpLFxuICAgICAgICBtZXJnZU1hcCgoYWN0aW9uOiBQYXlsb2FkQWN0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc291cmNlT3B0cyA9IHRoaXMuYnVpbGRSZXNvdXJjZU9wdHMoYWN0aW9uKVxuICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlcnZpY2UuZGVsZXRlJChyZXNvdXJjZU9wdHMpXG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHBheWxvYWQ6IGlBcGlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5QWN0aW9ucy5EZWxldGVTdWNjZXNzKFxuICAgICAgICAgICAgdGhpcy5nZXRFbnRpdHlTbGljZShwYXlsb2FkLnJlc291cmNlSWRlbnRpZmllci50eXBlKSxcbiAgICAgICAgICAgIHBheWxvYWQuZGF0YVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcblxuICBARWZmZWN0KClcbiAgbG9hZEFwcGxpY2F0aW9uUmVzb3VyY2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPVxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoJ1tBcHBsaWNhdGlvbkNvbmZpZ10gTE9BRF9SRVNPVVJDRV9CWV9JRCcpLFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGFwcGxpY2F0aW9uQ29uZmlnU2VsZWN0b3JzLnJlc291cmNlQnlJZClcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigocGF5bG9hZCkgPT4gdGhpcy5pc1ZhbGlkUGF5bG9hZChwYXlsb2FkKSksXG4gICAgICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VydmljZS5nZXQkKHBheWxvYWQpXG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKHBheWxvYWQpID0+IHRoaXMuaXNWYWxpZFJlc291cmNlKHBheWxvYWQpKSxcbiAgICAgICAgbWFwKChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9ucy5TZXRQcmltYXJ5RW50aXR5KHBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICApXG5cblxuICBuZ3J4T25JZGVudGlmeUVmZmVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZU5hbWVcbiAgfVxuXG4gIG5ncnhPbkluaXRFZmZlY3RzKCk6IEFjdGlvbiB7XG4gICAgbGV0IGluaXRGZWF0dXJlQWN0aW9uID0gbmV3IEVudGl0eUFjdGlvbnMuSW5pdCh0aGlzLmZlYXR1cmVOYW1lLCB0aGlzLmZlYXR1cmVDb25maWcpXG4gICAgcmV0dXJuIGluaXRGZWF0dXJlQWN0aW9uXG4gIH1cblxuICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICBwcml2YXRlIGJ1aWxkQWRkVG9TdG9yZUFjdGlvbnMocGF5bG9hZCkge1xuICAgIGxldCBhY3Rpb25zID0gW11cbiAgICBsZXQgYWRkQWN0aW9ucyA9IF8ubWFwKHBheWxvYWQuZGF0YSwgXy5iaW5kKHRoaXMuYnVpbGRBZGRFbnRpdGllc0FjdGlvbiwgdGhpcykpXG4gICAgYWN0aW9ucyA9IGFjdGlvbnMuY29uY2F0KGFkZEFjdGlvbnMpXG5cbiAgICBpZih0aGlzLnJlc291cmNlSWRlbnRpZmllclNlcnZpY2UuaXNTY29wZShwYXlsb2FkLnJlc291cmNlSWRlbnRpZmllcikpIHtcbiAgICAgIGxldCBzY29wZUFjdGlvbiA9IHRoaXMuYnVpbGRBZGRTY29wZUVudGl0aWVzQWN0aW9uKHBheWxvYWQpXG4gICAgICBhY3Rpb25zID0gYWN0aW9ucy5jb25jYXQoW3Njb3BlQWN0aW9uXSlcbiAgICB9XG5cbiAgICByZXR1cm4gXy5mbGF0dGVuKGFjdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRkRW50aXRpZXNBY3Rpb24ocGF5bG9hZDogaUVudGl0eVNsaWNlTmFtZVBheWxvYWQpIHtcbiAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuQWRkU3RvcmVFbnRpdGllcyhcbiAgICAgIHRoaXMuZ2V0RW50aXR5U2xpY2UocGF5bG9hZC5zbGljZU5hbWUpLFxuICAgICAgcGF5bG9hZC5lbnRpdGllcyxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWRkU2NvcGVFbnRpdGllc0FjdGlvbihwYXlsb2FkOiBhbnkpIHtcbiAgICBsZXQgcmkgPSBwYXlsb2FkLnJlc291cmNlSWRlbnRpZmllclxuICAgIGxldCBzY29wZU5hbWUgPSB0aGlzLnJlc291cmNlSWRlbnRpZmllclNlcnZpY2Uuc2NvcGVOYW1lKHJpKVxuXG4gICAgdmFyIHNsaWNlTmFtZSA9IHJpLnR5cGVcbiAgICBsZXQgaGFzRW50aXR5VHlwZSA9IChwYXlsb2FkOiBpRW50aXR5U2xpY2VOYW1lUGF5bG9hZCk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIHBheWxvYWQuc2xpY2VOYW1lID09IHNsaWNlTmFtZVxuICAgIH1cblxuICAgIGxldCBzbGljZU5hbWVQYXlsb2FkID0gXy5maW5kKHBheWxvYWQuZGF0YSwgaGFzRW50aXR5VHlwZSlcbiAgICBsZXQgZW50aXRpZXMgPSBzbGljZU5hbWVQYXlsb2FkLmVudGl0aWVzXG5cbiAgICBsZXQgYWN0aW9uUGF5bG9hZCA9IHtcbiAgICAgIHNjb3BlOiBzY29wZU5hbWUsXG4gICAgICBlbnRpdGllczogZW50aXRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVudGl0eUFjdGlvbnMuU2V0U2NvcGVFbnRpdGllcyhcbiAgICAgIHRoaXMuZ2V0RW50aXR5U2xpY2Uoc2xpY2VOYW1lKSxcbiAgICAgIGFjdGlvblBheWxvYWQsXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBncm91cGVkRW50aXRpZXMocGF5bG9hZDogaUFwaVJlc3BvbnNlKTogaUVudGl0eVNsaWNlTmFtZVBheWxvYWRbXSB7XG4gICAgbGV0IGVudGl0aWVzID0gcGF5bG9hZC5kYXRhXG5cbiAgICBsZXQgZ3JvdXBlZEJ5U2xpY2UgPSAoZW50aXR5VHlwZU1hcCwgZW50aXR5KSA9PiB7XG4gICAgICBsZXQgc2xpY2VOYW1lID0gZW50aXR5LmNvbnN0cnVjdG9yLnNsaWNlTmFtZVxuICAgICAgdmFyIGVudGl0aWVzID0gW11cbiAgICAgIGlmKGVudGl0eVR5cGVNYXBbc2xpY2VOYW1lXSkge1xuICAgICAgICBlbnRpdGllcyA9IGVudGl0eVR5cGVNYXBbc2xpY2VOYW1lXS5lbnRpdGllc1xuICAgICAgfVxuICAgICAgZW50aXRpZXMucHVzaChlbnRpdHkpXG4gICAgICBlbnRpdHlUeXBlTWFwW3NsaWNlTmFtZV0gPSB7XG4gICAgICAgIHNsaWNlTmFtZTogc2xpY2VOYW1lLFxuICAgICAgICBlbnRpdGllczogZW50aXRpZXNcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVudGl0eVR5cGVNYXBcbiAgICB9XG5cbiAgICByZXR1cm4gIF8udmFsdWVzKF8ucmVkdWNlKGVudGl0aWVzLCBncm91cGVkQnlTbGljZSwge30pKVxuICB9XG5cblxuICBwcml2YXRlIGlzVmFsaWRQYXlsb2FkKHBheWxvYWQpIHtcbiAgICAvL1RPRE86IEBEZWVwYWsgIC0gaXQgc2hvdWxkIGVuc3VyZSB0aGUgcGF5bG9hZCBpcyBmb3IgVEhJUyBmZWF0dXJlXG4gICAgcmV0dXJuIF8uaGFzKHBheWxvYWQsICdmZWF0dXJlJykgJiZcbiAgICBfLmhhcyhwYXlsb2FkLCAndHlwZScpICYmXG4gICAgXy5oYXMocGF5bG9hZCwgJ2lkJylcbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZFJlc291cmNlKHBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJlc291cmNlT3B0cyhhY3Rpb24pIHtcbiAgICBsZXQgcmkgPSB7XG4gICAgICB0eXBlOiBfLmxhc3QoXy5zcGxpdChhY3Rpb24uc2xpY2UsIFwiLlwiKSlcbiAgICB9XG4gICAgcmkgPSBfLm1lcmdlKHt9LCByaSwgYWN0aW9uLnBheWxvYWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF5bG9hZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB0eXBlOiBfLmxhc3QoXy5zcGxpdChhY3Rpb24uc2xpY2UsIFwiLlwiKSksXG4gICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgcmVzb3VyY2VJZGVudGlmaWVyOiByaSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZlYXR1cmVBY3Rpb24oYWN0aW9uTmFtZSkge1xuICAgIGxldCBmZWF0dXJlTmFtZSA9IHRoaXMuZmVhdHVyZUNvbmZpZy5uYW1lXG4gICAgcmV0dXJuIHR5cGVGb3IoZmVhdHVyZU5hbWUsIEVudGl0eUFjdGlvbnNNYXBbYWN0aW9uTmFtZV0pXG4gIH1cblxuICBwcml2YXRlIHNsaWNlQWN0aW9ucyhhY3Rpb25OYW1lKSB7XG4gICAgbGV0IGJ1aWxkQWN0aW9uVHlwZSA9IChzbGljZU5hbWUpID0+IHtcbiAgICAgIHJldHVybiB0eXBlRm9yKHNsaWNlTmFtZSwgRW50aXR5QWN0aW9uc01hcFthY3Rpb25OYW1lXSlcbiAgICB9XG4gICAgbGV0IHNsaWNlQWN0aW9ucyA9IF8ubWFwKHRoaXMuZmVhdHVyZUNvbmZpZy5zbGljZU5hbWVzLCBidWlsZEFjdGlvblR5cGUpXG4gICAgcmV0dXJuIHNsaWNlQWN0aW9uc1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTbGljZU5hbWUocmVzb3VyY2VPcHRzKSB7XG4gICAgcmV0dXJuIF8uam9pbihbcmVzb3VyY2VPcHRzLmZlYXR1cmUsICdlbnRpdGllcycsIHJlc291cmNlT3B0cy50eXBlXSwgJy4nKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbnRpdHlTbGljZShzbGljZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGZWF0dXJlRW50aXR5U2xpY2UodGhpcy5mZWF0dXJlTmFtZSwgc2xpY2VOYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlRW50aXR5U2xpY2UoZmVhdHVyZU5hbWUsIHNsaWNlTmFtZSkge1xuICAgIHJldHVybiBfLmpvaW4oW2ZlYXR1cmVOYW1lLCdlbnRpdGllcycsIHNsaWNlTmFtZV0sICcuJylcbiAgfVxufVxuIl19