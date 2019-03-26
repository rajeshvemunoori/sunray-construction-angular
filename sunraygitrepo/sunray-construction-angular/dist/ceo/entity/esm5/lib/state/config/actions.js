/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PayloadAction } from '@ceo/state';
/** @enum {string} */
var EntityConfigActionTypes = {
    SET_PRIMARY_ENTITY: 'SET_PRIMARY_ENTITY',
};
export { EntityConfigActionTypes };
var SetPrimaryEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SetPrimaryEntity, _super);
    function SetPrimaryEntity(slice, payload) {
        var _this = _super.call(this, slice) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.type = EntityConfigActionTypes.SET_PRIMARY_ENTITY;
        return _this;
    }
    return SetPrimaryEntity;
}(PayloadAction));
export { SetPrimaryEntity };
if (false) {
    /** @type {?} */
    SetPrimaryEntity.prototype.type;
    /** @type {?} */
    SetPrimaryEntity.prototype.slice;
    /** @type {?} */
    SetPrimaryEntity.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2NvbmZpZy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQTs7O0lBR3hDLG9CQUFxQixvQkFBb0I7OztBQUczQztJQUFzQyw0Q0FBYTtJQUVqRCwwQkFBbUIsS0FBYSxFQUFTLE9BQVk7UUFBckQsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQUZrQixXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQ1QyxVQUFJLEdBQUcsdUJBQXVCLENBQUMsa0JBQWtCLENBQUE7O0lBRzFELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUFzQyxhQUFhLEdBS2xEOzs7O0lBSkMsZ0NBQTBEOztJQUM5QyxpQ0FBb0I7O0lBQUUsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAY2VvL3N0YXRlJ1xuXG5leHBvcnQgZW51bSBFbnRpdHlDb25maWdBY3Rpb25UeXBlcyB7XG4gIFNFVF9QUklNQVJZX0VOVElUWSA9ICdTRVRfUFJJTUFSWV9FTlRJVFknLFxufVxuXG5leHBvcnQgY2xhc3MgU2V0UHJpbWFyeUVudGl0eSBleHRlbmRzIFBheWxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRW50aXR5Q29uZmlnQWN0aW9uVHlwZXMuU0VUX1BSSU1BUllfRU5USVRZXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogc3RyaW5nLCBwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UpXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW50aXR5Q29uZmlnQWN0aW9uc1VuaW9uID1cbiAgU2V0UHJpbWFyeUVudGl0eVxuIl19