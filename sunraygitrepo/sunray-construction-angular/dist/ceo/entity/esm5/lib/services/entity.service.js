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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQWMsUUFBUSxDQUFBO0FBRW5DLE9BQU8sRUFJTCxhQUFhLEdBQ2QsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRTlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLFVBQVUsR0FDWCxNQUFNLGFBQWEsQ0FBQTtBQVlwQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFFbkU7SUFFRSx1QkFDUyxhQUE0QixFQUM1QixVQUFzQixFQUN0QixnQkFBd0M7UUFGeEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO0lBQzlDLENBQUM7Ozs7O0lBRUosK0JBQU87Ozs7SUFBUDtRQUFRLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQ2IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLE9BQXRCLElBQUksb0JBQW1CLFNBQVMsR0FBSyxJQUFJLEdBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMO1FBQU0sY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsT0FBdEIsSUFBSSxvQkFBbUIsT0FBTyxHQUFLLElBQUksR0FBQztJQUNqRCxDQUFDOzs7OztJQUVE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QUFtQzs7SUFDbkMsbUNBQTZCOztJQUM3Qix5Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfICAgICAgICAgZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG4gIHBpcGUsXG4gIGNvbWJpbmVMYXRlc3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEFwaVNlcnZpY2UsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5cbmltcG9ydCB7XG4gIEZlYXR1cmVJZGVudGlmaWVyLFxuICBpQXBpUmVzcG9uc2UsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUVudGl0eVNlcnZpY2UsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2VudGl0eS1mYWN0b3J5LnNlcnZpY2UnXG5pbXBvcnQgeyBFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyIH0gZnJvbSAnLi9hdHRyaWJ1dGUtYnVpbGRlcnMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlIGltcGxlbWVudHMgaUVudGl0eVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZW50aXR5RmFjdG9yeTogRW50aXR5RmFjdG9yeSxcbiAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICBwdWJsaWMgYXR0cmlidXRlQnVpbGRlcjogRW50aXR5QXR0cmlidXRlQnVpbGRlcixcbiAgKSB7fVxuXG4gIGNyZWF0ZSQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFwaUVudGl0eVJlcXVlc3QkKCdjcmVhdGUkJywgLi4uYXJncylcbiAgfVxuXG4gIHBvc3QkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5hcGlFbnRpdHlSZXF1ZXN0JCgncG9zdCQnLCAuLi5hcmdzKVxuICB9XG5cbiAgZGVsZXRlJCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ2RlbGV0ZSQnLCAuLi5hcmdzKVxuICB9XG5cbiAgZ2V0JCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ2dldCQnLCAuLi5hcmdzKVxuICB9XG5cbiAgdXBkYXRlJCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ3VwZGF0ZSQnLCAuLi5hcmdzKVxuICB9XG5cbiAgcHJpdmF0ZSBhcGlFbnRpdHlSZXF1ZXN0JChhY3Rpb246IHN0cmluZywgLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmVudGl0eURhdGEkKCg8YW55PnRoaXMuYXBpU2VydmljZSlbYWN0aW9uXSguLi5hcmdzKSlcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5RGF0YSQoYXBpRGF0YSQ6IE9ic2VydmFibGU8aUFwaVJlc3BvbnNlPikge1xuICAgIHJldHVybiBhcGlEYXRhJC5waXBlKFxuICAgICAgbWVyZ2VNYXAoYXBpUmVzcG9uc2UgPT4gdGhpcy5idWlsZEVudGl0eURhdGEkKGFwaVJlc3BvbnNlKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eURhdGEkKFxuICAgIGFwaVJlc3BvbnNlOiBpQXBpUmVzcG9uc2VcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5idWlsZEVudGl0aWVzJChhcGlSZXNwb25zZSkucGlwZShcbiAgICAgIG1hcChlbnRpdGllcyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogZW50aXRpZXMsXG4gICAgICAgICAgcmVzb3VyY2VJZGVudGlmaWVyOiBhcGlSZXNwb25zZS5yZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0aWVzJChhcGlSZXNwb25zZTogaUFwaVJlc3BvbnNlKTogT2JzZXJ2YWJsZTxpRW50aXR5W10+IHtcbiAgICB2YXIgcmVzb3VyY2VJZGVudGlmaWVyID0gYXBpUmVzcG9uc2UucmVzb3VyY2VJZGVudGlmaWVyXG4gICAgdmFyIGFwaURhdGEgPSBhcGlSZXNwb25zZS5kYXRhXG4gICAgdmFyIGZlYXR1cmVOYW1lID0gcmVzb3VyY2VJZGVudGlmaWVyLmZlYXR1cmVcblxuICAgIGxldCBidWlsZEVudGl0eSQgPSBfLmJpbmQoXy5wYXJ0aWFsKHRoaXMuYnVpbGRFbnRpdHkkLCBmZWF0dXJlTmFtZSksIHRoaXMpXG4gICAgbGV0IG9ic2VydmFibGVzID0gXy5tYXAoYXBpRGF0YSwgYnVpbGRFbnRpdHkkKVxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KG9ic2VydmFibGVzKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eSQoXG4gICAgZmVhdHVyZU5hbWU6IEZlYXR1cmVJZGVudGlmaWVyLFxuICAgIGVudGl0eURhdGE6IGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5PiB7XG4gICAgbGV0IGZlYXR1cmVEYXRhID0ge1xuICAgICAgZmVhdHVyZTogZmVhdHVyZU5hbWVcbiAgICB9XG4gICAgXy5kZWZhdWx0cyhlbnRpdHlEYXRhLCBmZWF0dXJlRGF0YSlcbiAgICBsZXQgZGF0YSA9IHRoaXMuYXR0cmlidXRlQnVpbGRlci5idWlsZChlbnRpdHlEYXRhKVxuICAgIHJldHVybiB0aGlzLmVudGl0eUZhY3RvcnkuYnVpbGQkKGRhdGEpXG4gIH1cbn1cbiJdfQ==