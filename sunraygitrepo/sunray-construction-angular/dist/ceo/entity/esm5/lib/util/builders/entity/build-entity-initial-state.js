/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createEntityAdapter } from '@ngrx/entity';
/**
 * @param {?} entityType
 * @return {?}
 */
export function buildEntityInitialState(entityType) {
    /** @type {?} */
    var createInitialStateForEntityType = function (name) {
        /** @type {?} */
        var prop = {};
        /** @type {?} */
        var initialState = createEntityAdapter().getInitialState();
        /** @type {?} */
        var customInitialState = {
            selectedEntityId: null,
            config: {
                entityType: entityType
            },
            scopes: {},
        };
        initialState =
            Object.assign({}, initialState, customInitialState, entityType.config.initialState);
        prop[name] = initialState;
        return prop;
    };
    /** @type {?} */
    var sliceName = entityType.sliceName;
    return createInitialStateForEntityType(sliceName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LWluaXRpYWwtc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2J1aWxkZXJzL2VudGl0eS9idWlsZC1lbnRpdHktaW5pdGlhbC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU8sY0FBYyxDQUFDOzs7OztBQUlwRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsVUFBVTs7UUFDNUMsK0JBQStCLEdBQUcsVUFBQyxJQUFJOztZQUNyQyxJQUFJLEdBQUcsRUFBRTs7WUFDVCxZQUFZLEdBQUcsbUJBQW1CLEVBQVcsQ0FBQyxlQUFlLEVBQUU7O1lBQy9ELGtCQUFrQixHQUFHO1lBQ3ZCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsTUFBTSxFQUFFO2dCQUNOLFVBQVUsRUFBRSxVQUFVO2FBQ3ZCO1lBQ0QsTUFBTSxFQUFFLEVBQ1A7U0FDRjtRQUNELFlBQVk7WUFDVixNQUFNLENBQUMsTUFBTSxDQUNYLEVBQUUsRUFDRixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUMvQixDQUFBO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQTtRQUN6QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O1FBRUcsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTO0lBQ3BDLE9BQU8sK0JBQStCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVudGl0eUFkYXB0ZXIgfSAgZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgaUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVudGl0eUluaXRpYWxTdGF0ZShlbnRpdHlUeXBlKTogYW55IHtcbiAgbGV0IGNyZWF0ZUluaXRpYWxTdGF0ZUZvckVudGl0eVR5cGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwcm9wID0ge307XG4gICAgbGV0IGluaXRpYWxTdGF0ZSA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8aUVudGl0eT4oKS5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICBsZXQgY3VzdG9tSW5pdGlhbFN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRFbnRpdHlJZDogbnVsbCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBlbnRpdHlUeXBlOiBlbnRpdHlUeXBlXG4gICAgICB9LFxuICAgICAgc2NvcGVzOiB7XG4gICAgICB9LFxuICAgIH1cbiAgICBpbml0aWFsU3RhdGUgPVxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgY3VzdG9tSW5pdGlhbFN0YXRlLFxuICAgICAgICBlbnRpdHlUeXBlLmNvbmZpZy5pbml0aWFsU3RhdGVcbiAgICAgIClcbiAgICBwcm9wW25hbWVdID0gaW5pdGlhbFN0YXRlXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cblxuICBsZXQgc2xpY2VOYW1lID0gZW50aXR5VHlwZS5zbGljZU5hbWU7XG4gIHJldHVybiBjcmVhdGVJbml0aWFsU3RhdGVGb3JFbnRpdHlUeXBlKHNsaWNlTmFtZSk7XG59XG4iXX0=