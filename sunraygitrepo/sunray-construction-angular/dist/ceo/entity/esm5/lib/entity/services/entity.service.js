/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { combineLatest, } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiService, } from '@ceo/shared';
import { EntityFactory } from './entity-factory.service';
import { EntityAttributeBuilder } from './attribute-builders/index';
var EntityService = /** @class */ (function () {
    function EntityService(entityFactory, apiService, attributeBuilder) {
        this.entityFactory = entityFactory;
        this.apiService = apiService;
        this.attributeBuilder = attributeBuilder;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.create$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, tslib_1.__spread(['create$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.post$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, tslib_1.__spread(['post$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.delete$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, tslib_1.__spread(['delete$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.get$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, tslib_1.__spread(['get$'], args));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.update$ = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.apiEntityRequest$.apply(this, tslib_1.__spread(['update$'], args));
    };
    /**
     * @private
     * @param {?} action
     * @param {...?} args
     * @return {?}
     */
    EntityService.prototype.apiEntityRequest$ = /**
     * @private
     * @param {?} action
     * @param {...?} args
     * @return {?}
     */
    function (action) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        return this.entityData$((_a = ((/** @type {?} */ (this.apiService))))[action].apply(_a, tslib_1.__spread(args)));
    };
    /**
     * @private
     * @param {?} apiData$
     * @return {?}
     */
    EntityService.prototype.entityData$ = /**
     * @private
     * @param {?} apiData$
     * @return {?}
     */
    function (apiData$) {
        var _this = this;
        return apiData$.pipe(mergeMap(function (apiResponse) { return _this.buildEntityData$(apiResponse); }));
    };
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    EntityService.prototype.buildEntityData$ = /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    function (apiResponse) {
        return this.buildEntities$(apiResponse).pipe(map(function (entities) {
            return {
                data: entities,
                resourceIdentifier: apiResponse.resourceIdentifier,
            };
        }));
    };
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    EntityService.prototype.buildEntities$ = /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    function (apiResponse) {
        /** @type {?} */
        var resourceIdentifier = apiResponse.resourceIdentifier;
        /** @type {?} */
        var apiData = apiResponse.data;
        /** @type {?} */
        var featureName = resourceIdentifier.feature;
        /** @type {?} */
        var buildEntity$ = _.bind(_.partial(this.buildEntity$, featureName), this);
        /** @type {?} */
        var observables = _.map(apiData, buildEntity$);
        return combineLatest(observables);
    };
    /**
     * @private
     * @param {?} featureName
     * @param {?} entityData
     * @return {?}
     */
    EntityService.prototype.buildEntity$ = /**
     * @private
     * @param {?} featureName
     * @param {?} entityData
     * @return {?}
     */
    function (featureName, entityData) {
        /** @type {?} */
        var featureData = {
            feature: featureName
        };
        _.defaults(entityData, featureData);
        /** @type {?} */
        var data = this.attributeBuilder.build(entityData);
        return this.entityFactory.build$(data);
    };
    EntityService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EntityService.ctorParameters = function () { return [
        { type: EntityFactory },
        { type: ApiService },
        { type: EntityAttributeBuilder }
    ]; };
    return EntityService;
}());
export { EntityService };
if (false) {
    /** @type {?} */
    EntityService.prototype.entityFactory;
    /** @type {?} */
    EntityService.prototype.apiService;
    /** @type {?} */
    EntityService.prototype.attributeBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvc2VydmljZXMvZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFjLFFBQVEsQ0FBQTtBQUVuQyxPQUFPLEVBSUwsYUFBYSxHQUNkLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSxhQUFhLENBQUE7QUFZcEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBRW5FO0lBRUUsdUJBQ1MsYUFBNEIsRUFDNUIsVUFBc0IsRUFDdEIsZ0JBQXdDO1FBRnhDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtJQUM5QyxDQUFDOzs7OztJQUVKLCtCQUFPOzs7O0lBQVA7UUFBUSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUNiLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixPQUF0QixJQUFJLG9CQUFtQixTQUFTLEdBQUssSUFBSSxHQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsNkJBQUs7Ozs7SUFBTDtRQUFNLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQ1gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLE9BQXRCLElBQUksb0JBQW1CLE9BQU8sR0FBSyxJQUFJLEdBQUM7SUFDakQsQ0FBQzs7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QUV0QixzQ0FBbUM7O0lBQ25DLG1DQUE2Qjs7SUFDN0IseUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyAgICAgICAgIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBwaXBlLFxuICBjb21iaW5lTGF0ZXN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlLFxufSBmcm9tICdAY2VvL3NoYXJlZCdcblxuXG5pbXBvcnQge1xuICBGZWF0dXJlSWRlbnRpZmllcixcbiAgaUFwaVJlc3BvbnNlLFxuICBpRW50aXR5LFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHlTZXJ2aWNlLFxuICBpUmVzb3VyY2VJZGVudGlmaWVyLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBFbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi9lbnRpdHktZmFjdG9yeS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRW50aXR5QXR0cmlidXRlQnVpbGRlciB9IGZyb20gJy4vYXR0cmlidXRlLWJ1aWxkZXJzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5U2VydmljZSBpbXBsZW1lbnRzIGlFbnRpdHlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVudGl0eUZhY3Rvcnk6IEVudGl0eUZhY3RvcnksXG4gICAgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXG4gICAgcHVibGljIGF0dHJpYnV0ZUJ1aWxkZXI6IEVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIsXG4gICkge31cblxuICBjcmVhdGUkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5hcGlFbnRpdHlSZXF1ZXN0JCgnY3JlYXRlJCcsIC4uLmFyZ3MpXG4gIH1cblxuICBwb3N0JCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ3Bvc3QkJywgLi4uYXJncylcbiAgfVxuXG4gIGRlbGV0ZSQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFwaUVudGl0eVJlcXVlc3QkKCdkZWxldGUkJywgLi4uYXJncylcbiAgfVxuXG4gIGdldCQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFwaUVudGl0eVJlcXVlc3QkKCdnZXQkJywgLi4uYXJncylcbiAgfVxuXG4gIHVwZGF0ZSQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFwaUVudGl0eVJlcXVlc3QkKCd1cGRhdGUkJywgLi4uYXJncylcbiAgfVxuXG4gIHByaXZhdGUgYXBpRW50aXR5UmVxdWVzdCQoYWN0aW9uOiBzdHJpbmcsIC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHlEYXRhJCgoPGFueT50aGlzLmFwaVNlcnZpY2UpW2FjdGlvbl0oLi4uYXJncykpXG4gIH1cblxuICBwcml2YXRlIGVudGl0eURhdGEkKGFwaURhdGEkOiBPYnNlcnZhYmxlPGlBcGlSZXNwb25zZT4pIHtcbiAgICByZXR1cm4gYXBpRGF0YSQucGlwZShcbiAgICAgIG1lcmdlTWFwKGFwaVJlc3BvbnNlID0+IHRoaXMuYnVpbGRFbnRpdHlEYXRhJChhcGlSZXNwb25zZSkpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdHlEYXRhJChcbiAgICBhcGlSZXNwb25zZTogaUFwaVJlc3BvbnNlXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRFbnRpdGllcyQoYXBpUmVzcG9uc2UpLnBpcGUoXG4gICAgICBtYXAoZW50aXRpZXMgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IGVudGl0aWVzLFxuICAgICAgICAgIHJlc291cmNlSWRlbnRpZmllcjogYXBpUmVzcG9uc2UucmVzb3VyY2VJZGVudGlmaWVyLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFbnRpdGllcyQoYXBpUmVzcG9uc2U6IGlBcGlSZXNwb25zZSk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICB2YXIgcmVzb3VyY2VJZGVudGlmaWVyID0gYXBpUmVzcG9uc2UucmVzb3VyY2VJZGVudGlmaWVyXG4gICAgdmFyIGFwaURhdGEgPSBhcGlSZXNwb25zZS5kYXRhXG4gICAgdmFyIGZlYXR1cmVOYW1lID0gcmVzb3VyY2VJZGVudGlmaWVyLmZlYXR1cmVcblxuICAgIGxldCBidWlsZEVudGl0eSQgPSBfLmJpbmQoXy5wYXJ0aWFsKHRoaXMuYnVpbGRFbnRpdHkkLCBmZWF0dXJlTmFtZSksIHRoaXMpXG4gICAgbGV0IG9ic2VydmFibGVzID0gXy5tYXAoYXBpRGF0YSwgYnVpbGRFbnRpdHkkKVxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KG9ic2VydmFibGVzKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eSQoXG4gICAgZmVhdHVyZU5hbWU6IEZlYXR1cmVJZGVudGlmaWVyLFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5PiB7XG4gICAgbGV0IGZlYXR1cmVEYXRhID0ge1xuICAgICAgZmVhdHVyZTogZmVhdHVyZU5hbWVcbiAgICB9XG4gICAgXy5kZWZhdWx0cyhlbnRpdHlEYXRhLCBmZWF0dXJlRGF0YSlcbiAgICBsZXQgZGF0YSA9IHRoaXMuYXR0cmlidXRlQnVpbGRlci5idWlsZChlbnRpdHlEYXRhKVxuICAgIHJldHVybiB0aGlzLmVudGl0eUZhY3RvcnkuYnVpbGQkKGRhdGEpXG4gIH1cbn1cbiJdfQ==