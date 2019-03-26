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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBYyxRQUFRLENBQUE7QUFFbkMsT0FBTyxFQUlMLGFBQWEsR0FDZCxNQUFNLE1BQU0sQ0FBQTtBQUViLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsVUFBVSxHQUNYLE1BQU0sYUFBYSxDQUFBO0FBWXBCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUduRSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBQ3hCLFlBQ1MsYUFBNEIsRUFDNUIsVUFBc0IsRUFDdEIsZ0JBQXdDO1FBRnhDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtJQUM5QyxDQUFDOzs7OztJQUVKLE9BQU8sQ0FBQyxHQUFHLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxHQUFHLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNqRCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxHQUFHLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNoRCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxHQUFHLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNuRCxDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsTUFBYyxFQUFFLEdBQUcsSUFBSTtRQUMvQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxtQkFBSyxJQUFJLENBQUMsVUFBVSxFQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbEUsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLFFBQWtDO1FBQ3BELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQzVELENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FDdEIsV0FBeUI7UUFFekIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDMUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsT0FBTztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxrQkFBa0IsRUFBRSxXQUFXLENBQUMsa0JBQWtCO2FBQ25ELENBQUE7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFdBQXlCOztZQUMxQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsa0JBQWtCOztZQUNuRCxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUk7O1lBQzFCLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPOztZQUV4QyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDOztZQUN0RSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO1FBQzlDLE9BQU8sYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Ozs7Ozs7SUFFTyxZQUFZLENBQ2xCLFdBQThCLEVBQzlCLFVBQW9DOztZQUVoQyxXQUFXLEdBQUc7WUFDaEIsT0FBTyxFQUFFLFdBQVc7U0FDckI7UUFDRCxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTs7WUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEMsQ0FBQzs7O1lBdkVGLFVBQVU7Ozs7WUFIRixhQUFhO1lBYnBCLFVBQVU7WUFjSCxzQkFBc0I7Ozs7SUFLM0Isc0NBQW1DOztJQUNuQyxtQ0FBNkI7O0lBQzdCLHlDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gICAgICAgICBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgcGlwZSxcbiAgY29tYmluZUxhdGVzdCxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtcbiAgQXBpU2VydmljZSxcbn0gZnJvbSAnQGNlby9zaGFyZWQnXG5cblxuaW1wb3J0IHtcbiAgRmVhdHVyZUlkZW50aWZpZXIsXG4gIGlBcGlSZXNwb25zZSxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICBpRW50aXR5U2VydmljZSxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vZW50aXR5LWZhY3Rvcnkuc2VydmljZSdcbmltcG9ydCB7IEVudGl0eUF0dHJpYnV0ZUJ1aWxkZXIgfSBmcm9tICcuL2F0dHJpYnV0ZS1idWlsZGVycy9pbmRleCdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eVNlcnZpY2UgaW1wbGVtZW50cyBpRW50aXR5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbnRpdHlGYWN0b3J5OiBFbnRpdHlGYWN0b3J5LFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIHB1YmxpYyBhdHRyaWJ1dGVCdWlsZGVyOiBFbnRpdHlBdHRyaWJ1dGVCdWlsZGVyLFxuICApIHt9XG5cbiAgY3JlYXRlJCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpRW50aXR5UmVxdWVzdCQoJ2NyZWF0ZSQnLCAuLi5hcmdzKVxuICB9XG5cbiAgcG9zdCQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFwaUVudGl0eVJlcXVlc3QkKCdwb3N0JCcsIC4uLmFyZ3MpXG4gIH1cblxuICBkZWxldGUkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5hcGlFbnRpdHlSZXF1ZXN0JCgnZGVsZXRlJCcsIC4uLmFyZ3MpXG4gIH1cblxuICBnZXQkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5hcGlFbnRpdHlSZXF1ZXN0JCgnZ2V0JCcsIC4uLmFyZ3MpXG4gIH1cblxuICB1cGRhdGUkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5hcGlFbnRpdHlSZXF1ZXN0JCgndXBkYXRlJCcsIC4uLmFyZ3MpXG4gIH1cblxuICBwcml2YXRlIGFwaUVudGl0eVJlcXVlc3QkKGFjdGlvbjogc3RyaW5nLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5RGF0YSQoKDxhbnk+dGhpcy5hcGlTZXJ2aWNlKVthY3Rpb25dKC4uLmFyZ3MpKVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRpdHlEYXRhJChhcGlEYXRhJDogT2JzZXJ2YWJsZTxpQXBpUmVzcG9uc2U+KSB7XG4gICAgcmV0dXJuIGFwaURhdGEkLnBpcGUoXG4gICAgICBtZXJnZU1hcChhcGlSZXNwb25zZSA9PiB0aGlzLmJ1aWxkRW50aXR5RGF0YSQoYXBpUmVzcG9uc2UpKSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5RGF0YSQoXG4gICAgYXBpUmVzcG9uc2U6IGlBcGlSZXNwb25zZVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkRW50aXRpZXMkKGFwaVJlc3BvbnNlKS5waXBlKFxuICAgICAgbWFwKGVudGl0aWVzID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiBlbnRpdGllcyxcbiAgICAgICAgICByZXNvdXJjZUlkZW50aWZpZXI6IGFwaVJlc3BvbnNlLnJlc291cmNlSWRlbnRpZmllcixcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXRpZXMkKGFwaVJlc3BvbnNlOiBpQXBpUmVzcG9uc2UpOiBPYnNlcnZhYmxlPGlFbnRpdHlbXT4ge1xuICAgIHZhciByZXNvdXJjZUlkZW50aWZpZXIgPSBhcGlSZXNwb25zZS5yZXNvdXJjZUlkZW50aWZpZXJcbiAgICB2YXIgYXBpRGF0YSA9IGFwaVJlc3BvbnNlLmRhdGFcbiAgICB2YXIgZmVhdHVyZU5hbWUgPSByZXNvdXJjZUlkZW50aWZpZXIuZmVhdHVyZVxuXG4gICAgbGV0IGJ1aWxkRW50aXR5JCA9IF8uYmluZChfLnBhcnRpYWwodGhpcy5idWlsZEVudGl0eSQsIGZlYXR1cmVOYW1lKSwgdGhpcylcbiAgICBsZXQgb2JzZXJ2YWJsZXMgPSBfLm1hcChhcGlEYXRhLCBidWlsZEVudGl0eSQpXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRW50aXR5JChcbiAgICBmZWF0dXJlTmFtZTogRmVhdHVyZUlkZW50aWZpZXIsXG4gICAgZW50aXR5RGF0YTogaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHk+IHtcbiAgICBsZXQgZmVhdHVyZURhdGEgPSB7XG4gICAgICBmZWF0dXJlOiBmZWF0dXJlTmFtZVxuICAgIH1cbiAgICBfLmRlZmF1bHRzKGVudGl0eURhdGEsIGZlYXR1cmVEYXRhKVxuICAgIGxldCBkYXRhID0gdGhpcy5hdHRyaWJ1dGVCdWlsZGVyLmJ1aWxkKGVudGl0eURhdGEpXG4gICAgcmV0dXJuIHRoaXMuZW50aXR5RmFjdG9yeS5idWlsZCQoZGF0YSlcbiAgfVxufVxuIl19