/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { combineLatest, } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiService, } from '@ceo/shared';
import { EntityFactory } from './entity-factory.service';
import { EntityAttributeBuilder } from './attribute-builders/index';
export class EntityService {
    /**
     * @param {?} entityFactory
     * @param {?} apiService
     * @param {?} attributeBuilder
     */
    constructor(entityFactory, apiService, attributeBuilder) {
        this.entityFactory = entityFactory;
        this.apiService = apiService;
        this.attributeBuilder = attributeBuilder;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    create$(...args) {
        return this.apiEntityRequest$('create$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    post$(...args) {
        return this.apiEntityRequest$('post$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    delete$(...args) {
        return this.apiEntityRequest$('delete$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    get$(...args) {
        return this.apiEntityRequest$('get$', ...args);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    update$(...args) {
        return this.apiEntityRequest$('update$', ...args);
    }
    /**
     * @private
     * @param {?} action
     * @param {...?} args
     * @return {?}
     */
    apiEntityRequest$(action, ...args) {
        return this.entityData$(((/** @type {?} */ (this.apiService)))[action](...args));
    }
    /**
     * @private
     * @param {?} apiData$
     * @return {?}
     */
    entityData$(apiData$) {
        return apiData$.pipe(mergeMap(apiResponse => this.buildEntityData$(apiResponse)));
    }
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    buildEntityData$(apiResponse) {
        return this.buildEntities$(apiResponse).pipe(map(entities => {
            return {
                data: entities,
                resourceIdentifier: apiResponse.resourceIdentifier,
            };
        }));
    }
    /**
     * @private
     * @param {?} apiResponse
     * @return {?}
     */
    buildEntities$(apiResponse) {
        /** @type {?} */
        var resourceIdentifier = apiResponse.resourceIdentifier;
        /** @type {?} */
        var apiData = apiResponse.data;
        /** @type {?} */
        var featureName = resourceIdentifier.feature;
        /** @type {?} */
        let buildEntity$ = _.bind(_.partial(this.buildEntity$, featureName), this);
        /** @type {?} */
        let observables = _.map(apiData, buildEntity$);
        return combineLatest(observables);
    }
    /**
     * @private
     * @param {?} featureName
     * @param {?} entityData
     * @return {?}
     */
    buildEntity$(featureName, entityData) {
        /** @type {?} */
        let featureData = {
            feature: featureName
        };
        _.defaults(entityData, featureData);
        /** @type {?} */
        let data = this.attributeBuilder.build(entityData);
        return this.entityFactory.build$(data);
    }
}
EntityService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityService.ctorParameters = () => [
    { type: EntityFactory },
    { type: ApiService },
    { type: EntityAttributeBuilder }
];
if (false) {
    /** @type {?} */
    EntityService.prototype.entityFactory;
    /** @type {?} */
    EntityService.prototype.apiService;
    /** @type {?} */
    EntityService.prototype.attributeBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvc2VydmljZXMvZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQWMsUUFBUSxDQUFBO0FBRW5DLE9BQU8sRUFJTCxhQUFhLEdBQ2QsTUFBTSxNQUFNLENBQUE7QUFFYixPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRTlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsT0FBTyxFQUNMLFVBQVUsR0FDWCxNQUFNLGFBQWEsQ0FBQTtBQVlwQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFHbkUsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUN4QixZQUNTLGFBQTRCLEVBQzVCLFVBQXNCLEVBQ3RCLGdCQUF3QztRQUZ4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7SUFDOUMsQ0FBQzs7Ozs7SUFFSixPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBRyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDakQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ1YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDbkQsQ0FBQzs7Ozs7OztJQUVPLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxHQUFHLElBQUk7UUFDL0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsbUJBQUssSUFBSSxDQUFDLFVBQVUsRUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxRQUFrQztRQUNwRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUM1RCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQ3RCLFdBQXlCO1FBRXpCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNiLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2Qsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLGtCQUFrQjthQUNuRCxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxXQUF5Qjs7WUFDMUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQjs7WUFDbkQsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJOztZQUMxQixXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTzs7WUFFeEMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQzs7WUFDdEUsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUM5QyxPQUFPLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzs7Ozs7O0lBRU8sWUFBWSxDQUNsQixXQUE4QixFQUM5QixVQUFvQzs7WUFFaEMsV0FBVyxHQUFHO1lBQ2hCLE9BQU8sRUFBRSxXQUFXO1NBQ3JCO1FBQ0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7O1lBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLENBQUM7OztZQXZFRixVQUFVOzs7O1lBSEYsYUFBYTtZQWJwQixVQUFVO1lBY0gsc0JBQXNCOzs7O0lBSzNCLHNDQUFtQzs7SUFDbkMsbUNBQTZCOztJQUM3Qix5Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfICAgICAgICAgZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG4gIHBpcGUsXG4gIGNvbWJpbmVMYXRlc3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIEFwaVNlcnZpY2UsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5cbmltcG9ydCB7XG4gIEZlYXR1cmVJZGVudGlmaWVyLFxuICBpQXBpUmVzcG9uc2UsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb25zdHJ1Y3RvclBhcmFtcyxcbiAgaUVudGl0eVNlcnZpY2UsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2VudGl0eS1mYWN0b3J5LnNlcnZpY2UnXG5pbXBvcnQgeyBFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyIH0gZnJvbSAnLi9hdHRyaWJ1dGUtYnVpbGRlcnMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlIGltcGxlbWVudHMgaUVudGl0eVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZW50aXR5RmFjdG9yeTogRW50aXR5RmFjdG9yeSxcbiAgICBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICBwdWJsaWMgYXR0cmlidXRlQnVpbGRlcjogRW50aXR5QXR0cmlidXRlQnVpbGRlcixcbiAgKSB7fVxuXG4gIGNyZWF0ZSQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFwaUVudGl0eVJlcXVlc3QkKCdjcmVhdGUkJywgLi4uYXJncylcbiAgfVxuXG4gIHBvc3QkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5hcGlFbnRpdHlSZXF1ZXN0JCgncG9zdCQnLCAuLi5hcmdzKVxuICB9XG5cbiAgZGVsZXRlJCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ2RlbGV0ZSQnLCAuLi5hcmdzKVxuICB9XG5cbiAgZ2V0JCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ2dldCQnLCAuLi5hcmdzKVxuICB9XG5cbiAgdXBkYXRlJCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ3VwZGF0ZSQnLCAuLi5hcmdzKVxuICB9XG5cbiAgcHJpdmF0ZSBhcGlFbnRpdHlSZXF1ZXN0JChhY3Rpb246IHN0cmluZywgLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmVudGl0eURhdGEkKCg8YW55PnRoaXMuYXBpU2VydmljZSlbYWN0aW9uXSguLi5hcmdzKSlcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5RGF0YSQoYXBpRGF0YSQ6IE9ic2VydmFibGU8aUFwaVJlc3BvbnNlPikge1xuICAgIHJldHVybiBhcGlEYXRhJC5waXBlKFxuICAgICAgbWVyZ2VNYXAoYXBpUmVzcG9uc2UgPT4gdGhpcy5idWlsZEVudGl0eURhdGEkKGFwaVJlc3BvbnNlKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0eURhdGEkKFxuICAgIGFwaVJlc3BvbnNlOiBpQXBpUmVzcG9uc2VcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5idWlsZEVudGl0aWVzJChhcGlSZXNwb25zZSkucGlwZShcbiAgICAgIG1hcChlbnRpdGllcyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogZW50aXRpZXMsXG4gICAgICAgICAgcmVzb3VyY2VJZGVudGlmaWVyOiBhcGlSZXNwb25zZS5yZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEVudGl0aWVzJChhcGlSZXNwb25zZTogaUFwaVJlc3BvbnNlKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHZhciByZXNvdXJjZUlkZW50aWZpZXIgPSBhcGlSZXNwb25zZS5yZXNvdXJjZUlkZW50aWZpZXJcbiAgICB2YXIgYXBpRGF0YSA9IGFwaVJlc3BvbnNlLmRhdGFcbiAgICB2YXIgZmVhdHVyZU5hbWUgPSByZXNvdXJjZUlkZW50aWZpZXIuZmVhdHVyZVxuXG4gICAgbGV0IGJ1aWxkRW50aXR5JCA9IF8uYmluZChfLnBhcnRpYWwodGhpcy5idWlsZEVudGl0eSQsIGZlYXR1cmVOYW1lKSwgdGhpcylcbiAgICBsZXQgb2JzZXJ2YWJsZXMgPSBfLm1hcChhcGlEYXRhLCBidWlsZEVudGl0eSQpXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5JChcbiAgICBmZWF0dXJlTmFtZTogRmVhdHVyZUlkZW50aWZpZXIsXG4gICAgZW50aXR5RGF0YTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHk+IHtcbiAgICBsZXQgZmVhdHVyZURhdGEgPSB7XG4gICAgICBmZWF0dXJlOiBmZWF0dXJlTmFtZVxuICAgIH1cbiAgICBfLmRlZmF1bHRzKGVudGl0eURhdGEsIGZlYXR1cmVEYXRhKVxuICAgIGxldCBkYXRhID0gdGhpcy5hdHRyaWJ1dGVCdWlsZGVyLmJ1aWxkKGVudGl0eURhdGEpXG4gICAgcmV0dXJuIHRoaXMuZW50aXR5RmFjdG9yeS5idWlsZCQoZGF0YSlcbiAgfVxufVxuIl19