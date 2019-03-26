/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PayloadAction, } from '@ceo/state';
import { ActionTypes } from './action-types';
var AddFeature = /** @class */ (function (_super) {
    tslib_1.__extends(AddFeature, _super);
    function AddFeature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.ADD_FEATURE;
        return _this;
    }
    return AddFeature;
}(PayloadAction));
export { AddFeature };
if (false) {
    /** @type {?} */
    AddFeature.prototype.type;
}
var LoadPrimaryEntity = /** @class */ (function (_super) {
    tslib_1.__extends(LoadPrimaryEntity, _super);
    function LoadPrimaryEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.LOAD_PRIMARY_ENTITY;
        return _this;
    }
    return LoadPrimaryEntity;
}(PayloadAction));
export { LoadPrimaryEntity };
if (false) {
    /** @type {?} */
    LoadPrimaryEntity.prototype.type;
}
var RegisterFeature = /** @class */ (function (_super) {
    tslib_1.__extends(RegisterFeature, _super);
    function RegisterFeature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.REGISTER_FEATURE;
        return _this;
    }
    return RegisterFeature;
}(PayloadAction));
export { RegisterFeature };
if (false) {
    /** @type {?} */
    RegisterFeature.prototype.type;
}
var SelectPrimaryEntity = /** @class */ (function () {
    function SelectPrimaryEntity() {
        this.type = ActionTypes.SELECT_PRIMARY_ENTITY;
    }
    return SelectPrimaryEntity;
}());
export { SelectPrimaryEntity };
if (false) {
    /** @type {?} */
    SelectPrimaryEntity.prototype.type;
}
var SetPrimaryEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SetPrimaryEntity, _super);
    function SetPrimaryEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.SET_PRIMARY_ENTITY;
        return _this;
    }
    return SetPrimaryEntity;
}(PayloadAction));
export { SetPrimaryEntity };
if (false) {
    /** @type {?} */
    SetPrimaryEntity.prototype.type;
}
var SetPrimaryEntityIdentifier = /** @class */ (function (_super) {
    tslib_1.__extends(SetPrimaryEntityIdentifier, _super);
    function SetPrimaryEntityIdentifier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ActionTypes.SET_PRIMARY_ENTITY_IDENTIFIER;
        return _this;
    }
    return SetPrimaryEntityIdentifier;
}(PayloadAction));
export { SetPrimaryEntityIdentifier };
if (false) {
    /** @type {?} */
    SetPrimaryEntityIdentifier.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2ZlYXR1cmUvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLFlBQVksQ0FBQTtBQUVuQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFNUM7SUFBZ0Msc0NBQWE7SUFBN0M7UUFBQSxxRUFFQztRQURVLFVBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFBOztJQUN6QyxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBZ0MsYUFBYSxHQUU1Qzs7OztJQURDLDBCQUF1Qzs7QUFHekM7SUFBdUMsNkNBQWE7SUFBcEQ7UUFBQSxxRUFFQztRQURVLFVBQUksR0FBRyxXQUFXLENBQUMsbUJBQW1CLENBQUE7O0lBQ2pELENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFGRCxDQUF1QyxhQUFhLEdBRW5EOzs7O0lBREMsaUNBQStDOztBQUdqRDtJQUFxQywyQ0FBYTtJQUFsRDtRQUFBLHFFQUVDO1FBRFUsVUFBSSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQTs7SUFDOUMsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUZELENBQXFDLGFBQWEsR0FFakQ7Ozs7SUFEQywrQkFBNEM7O0FBRzlDO0lBQUE7UUFDVyxTQUFJLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixDQUFBO0lBQ25ELENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsbUNBQWlEOztBQUduRDtJQUFzQyw0Q0FBYTtJQUFuRDtRQUFBLHFFQUVDO1FBRFUsVUFBSSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQTs7SUFDaEQsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUZELENBQXNDLGFBQWEsR0FFbEQ7Ozs7SUFEQyxnQ0FBOEM7O0FBR2hEO0lBQWdELHNEQUFhO0lBQTdEO1FBQUEscUVBRUM7UUFEVSxVQUFJLEdBQUcsV0FBVyxDQUFDLDZCQUE2QixDQUFBOztJQUMzRCxDQUFDO0lBQUQsaUNBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBZ0QsYUFBYSxHQUU1RDs7OztJQURDLDBDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQge1xuICBQYXlsb2FkQWN0aW9uLFxufSBmcm9tICdAY2VvL3N0YXRlJ1xuXG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uLXR5cGVzJ1xuXG5leHBvcnQgY2xhc3MgQWRkRmVhdHVyZSBleHRlbmRzIFBheWxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQWN0aW9uVHlwZXMuQUREX0ZFQVRVUkVcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcmltYXJ5RW50aXR5IGV4dGVuZHMgUGF5bG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBY3Rpb25UeXBlcy5MT0FEX1BSSU1BUllfRU5USVRZXG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlckZlYXR1cmUgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFjdGlvblR5cGVzLlJFR0lTVEVSX0ZFQVRVUkVcbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdFByaW1hcnlFbnRpdHkgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQWN0aW9uVHlwZXMuU0VMRUNUX1BSSU1BUllfRU5USVRZXG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQcmltYXJ5RW50aXR5IGV4dGVuZHMgUGF5bG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBY3Rpb25UeXBlcy5TRVRfUFJJTUFSWV9FTlRJVFlcbn1cblxuZXhwb3J0IGNsYXNzIFNldFByaW1hcnlFbnRpdHlJZGVudGlmaWVyIGV4dGVuZHMgUGF5bG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBY3Rpb25UeXBlcy5TRVRfUFJJTUFSWV9FTlRJVFlfSURFTlRJRklFUlxufVxuIl19