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
    let createInitialStateForEntityType = (name) => {
        /** @type {?} */
        let prop = {};
        /** @type {?} */
        let initialState = createEntityAdapter().getInitialState();
        /** @type {?} */
        let customInitialState = {
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
    let sliceName = entityType.sliceName;
    return createInitialStateForEntityType(sliceName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LWluaXRpYWwtc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2J1aWxkZXJzL2VudGl0eS9idWlsZC1lbnRpdHktaW5pdGlhbC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU8sY0FBYyxDQUFDOzs7OztBQUlwRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsVUFBVTs7UUFDNUMsK0JBQStCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7WUFDekMsSUFBSSxHQUFHLEVBQUU7O1lBQ1QsWUFBWSxHQUFHLG1CQUFtQixFQUFXLENBQUMsZUFBZSxFQUFFOztZQUMvRCxrQkFBa0IsR0FBRztZQUN2QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsVUFBVTthQUN2QjtZQUNELE1BQU0sRUFBRSxFQUNQO1NBQ0Y7UUFDRCxZQUFZO1lBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FDWCxFQUFFLEVBQ0YsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FDL0IsQ0FBQTtRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUE7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztRQUVHLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUztJQUNwQyxPQUFPLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyIH0gIGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IGlFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbnRpdHlJbml0aWFsU3RhdGUoZW50aXR5VHlwZSk6IGFueSB7XG4gIGxldCBjcmVhdGVJbml0aWFsU3RhdGVGb3JFbnRpdHlUeXBlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvcCA9IHt9O1xuICAgIGxldCBpbml0aWFsU3RhdGUgPSBjcmVhdGVFbnRpdHlBZGFwdGVyPGlFbnRpdHk+KCkuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgbGV0IGN1c3RvbUluaXRpYWxTdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkRW50aXR5SWQ6IG51bGwsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZW50aXR5VHlwZTogZW50aXR5VHlwZVxuICAgICAgfSxcbiAgICAgIHNjb3Blczoge1xuICAgICAgfSxcbiAgICB9XG4gICAgaW5pdGlhbFN0YXRlID1cbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgIGN1c3RvbUluaXRpYWxTdGF0ZSxcbiAgICAgICAgZW50aXR5VHlwZS5jb25maWcuaW5pdGlhbFN0YXRlXG4gICAgICApXG4gICAgcHJvcFtuYW1lXSA9IGluaXRpYWxTdGF0ZVxuICAgIHJldHVybiBwcm9wO1xuICB9XG5cbiAgbGV0IHNsaWNlTmFtZSA9IGVudGl0eVR5cGUuc2xpY2VOYW1lO1xuICByZXR1cm4gY3JlYXRlSW5pdGlhbFN0YXRlRm9yRW50aXR5VHlwZShzbGljZU5hbWUpO1xufVxuIl19