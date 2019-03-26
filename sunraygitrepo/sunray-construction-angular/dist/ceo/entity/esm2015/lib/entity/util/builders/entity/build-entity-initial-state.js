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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZW50aXR5LWluaXRpYWwtc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvdXRpbC9idWlsZGVycy9lbnRpdHkvYnVpbGQtZW50aXR5LWluaXRpYWwtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFPLGNBQWMsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLFVBQVU7O1FBQzVDLCtCQUErQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7O1lBQ3pDLElBQUksR0FBRyxFQUFFOztZQUNULFlBQVksR0FBRyxtQkFBbUIsRUFBVyxDQUFDLGVBQWUsRUFBRTs7WUFDL0Qsa0JBQWtCLEdBQUc7WUFDdkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLFVBQVU7YUFDdkI7WUFDRCxNQUFNLEVBQUUsRUFDUDtTQUNGO1FBQ0QsWUFBWTtZQUNWLE1BQU0sQ0FBQyxNQUFNLENBQ1gsRUFBRSxFQUNGLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQy9CLENBQUE7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFBO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7UUFFRyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVM7SUFDcEMsT0FBTywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRW50aXR5QWRhcHRlciB9ICBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbnRpdHlJbml0aWFsU3RhdGUoZW50aXR5VHlwZSk6IGFueSB7XG4gIGxldCBjcmVhdGVJbml0aWFsU3RhdGVGb3JFbnRpdHlUeXBlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvcCA9IHt9O1xuICAgIGxldCBpbml0aWFsU3RhdGUgPSBjcmVhdGVFbnRpdHlBZGFwdGVyPGlFbnRpdHk+KCkuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgbGV0IGN1c3RvbUluaXRpYWxTdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkRW50aXR5SWQ6IG51bGwsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZW50aXR5VHlwZTogZW50aXR5VHlwZVxuICAgICAgfSxcbiAgICAgIHNjb3Blczoge1xuICAgICAgfSxcbiAgICB9XG4gICAgaW5pdGlhbFN0YXRlID1cbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgIGN1c3RvbUluaXRpYWxTdGF0ZSxcbiAgICAgICAgZW50aXR5VHlwZS5jb25maWcuaW5pdGlhbFN0YXRlXG4gICAgICApXG4gICAgcHJvcFtuYW1lXSA9IGluaXRpYWxTdGF0ZVxuICAgIHJldHVybiBwcm9wO1xuICB9XG5cbiAgbGV0IHNsaWNlTmFtZSA9IGVudGl0eVR5cGUuc2xpY2VOYW1lO1xuICByZXR1cm4gY3JlYXRlSW5pdGlhbFN0YXRlRm9yRW50aXR5VHlwZShzbGljZU5hbWUpO1xufVxuIl19