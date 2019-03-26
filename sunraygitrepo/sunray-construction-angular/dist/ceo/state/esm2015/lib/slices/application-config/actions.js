/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PayloadAction } from '../../classes';
/** @enum {string} */
const ApplicationConfigActionTypes = {
    ROUTER_NAVIGATION: 'ROUTER_NAVIGATION',
    LAUNCH: '[ApplicationConfig] LAUNCH',
    LOAD_RESOURCE_BY_ID: '[ApplicationConfig] LOAD_RESOURCE_BY_ID',
    SET_PRIMARY_ENTITY: '[ApplicationConfig] SET_PRIMARY_ENTITY',
    SET_RESOURCE_TYPE: '[ApplicationConfig] SET_RESOURCE_TYPE',
};
export { ApplicationConfigActionTypes };
export class RouterNavigation {
    constructor() {
        this.type = ApplicationConfigActionTypes.ROUTER_NAVIGATION;
    }
}
if (false) {
    /** @type {?} */
    RouterNavigation.prototype.type;
    /** @type {?} */
    RouterNavigation.prototype.payload;
}
export class Launch {
    constructor() {
        this.type = ApplicationConfigActionTypes.LAUNCH;
    }
}
if (false) {
    /** @type {?} */
    Launch.prototype.type;
}
export class LoadResourceById {
    constructor() {
        this.type = ApplicationConfigActionTypes.LOAD_RESOURCE_BY_ID;
    }
}
if (false) {
    /** @type {?} */
    LoadResourceById.prototype.type;
}
export class SetPrimaryEntity extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ApplicationConfigActionTypes.SET_PRIMARY_ENTITY;
    }
}
if (false) {
    /** @type {?} */
    SetPrimaryEntity.prototype.type;
}
export class SetResourceType extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ApplicationConfigActionTypes.SET_RESOURCE_TYPE;
    }
}
if (false) {
    /** @type {?} */
    SetResourceType.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFHNUMsbUJBQW9CLG1CQUFtQjtJQUN2QyxRQUFTLDRCQUE0QjtJQUNyQyxxQkFBc0IseUNBQXlDO0lBQy9ELG9CQUFxQix3Q0FBd0M7SUFDN0QsbUJBQW1CLHVDQUF1Qzs7O0FBRzVELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDVyxTQUFJLEdBQUcsNEJBQTRCLENBQUMsaUJBQWlCLENBQUM7SUFFakUsQ0FBQztDQUFBOzs7SUFGQyxnQ0FBK0Q7O0lBQy9ELG1DQUFhOztBQUdmLE1BQU0sT0FBTyxNQUFNO0lBQW5CO1FBQ1csU0FBSSxHQUFHLDRCQUE0QixDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0NBQUE7OztJQURDLHNCQUFvRDs7QUFHdEQsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNXLFNBQUksR0FBRyw0QkFBNEIsQ0FBQyxtQkFBbUIsQ0FBQztJQUNuRSxDQUFDO0NBQUE7OztJQURDLGdDQUFpRTs7QUFHbkUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGFBQWE7SUFBbkQ7O1FBQ1csU0FBSSxHQUFHLDRCQUE0QixDQUFDLGtCQUFrQixDQUFDO0lBQ2xFLENBQUM7Q0FBQTs7O0lBREMsZ0NBQWdFOztBQUdsRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBQWxEOztRQUNXLFNBQUksR0FBRyw0QkFBNEIsQ0FBQyxpQkFBaUIsQ0FBQztJQUNqRSxDQUFDO0NBQUE7OztJQURDLCtCQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJy4uLy4uL2NsYXNzZXMnO1xuXG5leHBvcnQgZW51bSBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvblR5cGVzIHtcbiAgUk9VVEVSX05BVklHQVRJT04gPSAnUk9VVEVSX05BVklHQVRJT04nLFxuICBMQVVOQ0ggPSAnW0FwcGxpY2F0aW9uQ29uZmlnXSBMQVVOQ0gnLFxuICBMT0FEX1JFU09VUkNFX0JZX0lEID0gJ1tBcHBsaWNhdGlvbkNvbmZpZ10gTE9BRF9SRVNPVVJDRV9CWV9JRCcsXG4gIFNFVF9QUklNQVJZX0VOVElUWSA9ICdbQXBwbGljYXRpb25Db25maWddIFNFVF9QUklNQVJZX0VOVElUWScsXG4gIFNFVF9SRVNPVVJDRV9UWVBFPSAnW0FwcGxpY2F0aW9uQ29uZmlnXSBTRVRfUkVTT1VSQ0VfVFlQRScsXG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJOYXZpZ2F0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9uVHlwZXMuUk9VVEVSX05BVklHQVRJT047XG4gIHBheWxvYWQ6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBcHBsaWNhdGlvbkNvbmZpZ0FjdGlvblR5cGVzLkxBVU5DSDtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZXNvdXJjZUJ5SWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQXBwbGljYXRpb25Db25maWdBY3Rpb25UeXBlcy5MT0FEX1JFU09VUkNFX0JZX0lEO1xufVxuXG5leHBvcnQgY2xhc3MgU2V0UHJpbWFyeUVudGl0eSBleHRlbmRzIFBheWxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQXBwbGljYXRpb25Db25maWdBY3Rpb25UeXBlcy5TRVRfUFJJTUFSWV9FTlRJVFk7XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRSZXNvdXJjZVR5cGUgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9uVHlwZXMuU0VUX1JFU09VUkNFX1RZUEU7XG59XG5cbmV4cG9ydCB0eXBlIEFwcGxpY2F0aW9uQ29uZmlnQWN0aW9uc1VuaW9uID1cbiAgTGF1bmNoIHxcbiAgTG9hZFJlc291cmNlQnlJZCB8XG4gIFJvdXRlck5hdmlnYXRpb24gfFxuICBTZXRQcmltYXJ5RW50aXR5IHxcbiAgU2V0UmVzb3VyY2VUeXBlO1xuIl19