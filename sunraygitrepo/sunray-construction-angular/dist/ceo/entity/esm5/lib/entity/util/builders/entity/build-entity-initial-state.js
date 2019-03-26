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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LWluaXRpYWwtc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvdXRpbC9idWlsZGVycy9lbnRpdHkvYnVpbGQtZW50aXR5LWluaXRpYWwtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFPLGNBQWMsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLFVBQVU7O1FBQzVDLCtCQUErQixHQUFHLFVBQUMsSUFBSTs7WUFDckMsSUFBSSxHQUFHLEVBQUU7O1lBQ1QsWUFBWSxHQUFHLG1CQUFtQixFQUFXLENBQUMsZUFBZSxFQUFFOztZQUMvRCxrQkFBa0IsR0FBRztZQUN2QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsVUFBVTthQUN2QjtZQUNELE1BQU0sRUFBRSxFQUNQO1NBQ0Y7UUFDRCxZQUFZO1lBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FDWCxFQUFFLEVBQ0YsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FDL0IsQ0FBQTtRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUE7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztRQUVHLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUztJQUNwQyxPQUFPLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyIH0gIGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7XG4gIGlFbnRpdHksXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVudGl0eUluaXRpYWxTdGF0ZShlbnRpdHlUeXBlKTogYW55IHtcbiAgbGV0IGNyZWF0ZUluaXRpYWxTdGF0ZUZvckVudGl0eVR5cGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwcm9wID0ge307XG4gICAgbGV0IGluaXRpYWxTdGF0ZSA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8aUVudGl0eT4oKS5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICBsZXQgY3VzdG9tSW5pdGlhbFN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRFbnRpdHlJZDogbnVsbCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBlbnRpdHlUeXBlOiBlbnRpdHlUeXBlXG4gICAgICB9LFxuICAgICAgc2NvcGVzOiB7XG4gICAgICB9LFxuICAgIH1cbiAgICBpbml0aWFsU3RhdGUgPVxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgY3VzdG9tSW5pdGlhbFN0YXRlLFxuICAgICAgICBlbnRpdHlUeXBlLmNvbmZpZy5pbml0aWFsU3RhdGVcbiAgICAgIClcbiAgICBwcm9wW25hbWVdID0gaW5pdGlhbFN0YXRlXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cblxuICBsZXQgc2xpY2VOYW1lID0gZW50aXR5VHlwZS5zbGljZU5hbWU7XG4gIHJldHVybiBjcmVhdGVJbml0aWFsU3RhdGVGb3JFbnRpdHlUeXBlKHNsaWNlTmFtZSk7XG59XG4iXX0=