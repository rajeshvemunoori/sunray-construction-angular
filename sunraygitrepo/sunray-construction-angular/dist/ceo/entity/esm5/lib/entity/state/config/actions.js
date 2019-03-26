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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zdGF0ZS9jb25maWcvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUE7OztJQUd4QyxvQkFBcUIsb0JBQW9COzs7QUFHM0M7SUFBc0MsNENBQWE7SUFFakQsMEJBQW1CLEtBQWEsRUFBUyxPQUFZO1FBQXJELFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFENUMsVUFBSSxHQUFHLHVCQUF1QixDQUFDLGtCQUFrQixDQUFBOztJQUcxRCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBc0MsYUFBYSxHQUtsRDs7OztJQUpDLGdDQUEwRDs7SUFDOUMsaUNBQW9COztJQUFFLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQGNlby9zdGF0ZSdcblxuZXhwb3J0IGVudW0gRW50aXR5Q29uZmlnQWN0aW9uVHlwZXMge1xuICBTRVRfUFJJTUFSWV9FTlRJVFkgPSAnU0VUX1BSSU1BUllfRU5USVRZJyxcbn1cblxuZXhwb3J0IGNsYXNzIFNldFByaW1hcnlFbnRpdHkgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEVudGl0eUNvbmZpZ0FjdGlvblR5cGVzLlNFVF9QUklNQVJZX0VOVElUWVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlKVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVudGl0eUNvbmZpZ0FjdGlvbnNVbmlvbiA9XG4gIFNldFByaW1hcnlFbnRpdHlcbiJdfQ==