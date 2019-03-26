/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PayloadAction } from '../payload/index';
import { typeFor } from './type-for';
/** @type {?} */
export var sliceActions = {
    INIT: 'INIT',
    INITIALIZED: 'INITIALIZED',
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    PATCH: 'PATCH',
    UPDATE: 'UPDATE',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS'
};
var SliceAction = /** @class */ (function (_super) {
    tslib_1.__extends(SliceAction, _super);
    function SliceAction(slice, payload) {
        var _this = _super.call(this, payload) || this;
        _this.slice = slice;
        _this.payload = payload;
        _this.actionName = '';
        return _this;
    }
    Object.defineProperty(SliceAction.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return typeFor(this.slice, this.actionName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceAction.prototype, "verb", {
        get: /**
         * @return {?}
         */
        function () {
            return this.actionName;
        },
        enumerable: true,
        configurable: true
    });
    return SliceAction;
}(PayloadAction));
export { SliceAction };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SliceAction.prototype.actionName;
    /** @type {?} */
    SliceAction.prototype.slice;
    /** @type {?} */
    SliceAction.prototype.payload;
}
var Init = /** @class */ (function (_super) {
    tslib_1.__extends(Init, _super);
    function Init() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.INIT;
        return _this;
    }
    return Init;
}(SliceAction));
export { Init };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Init.prototype.actionName;
}
var Initialized = /** @class */ (function (_super) {
    tslib_1.__extends(Initialized, _super);
    function Initialized() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.INITIALIZED;
        return _this;
    }
    return Initialized;
}(SliceAction));
export { Initialized };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Initialized.prototype.actionName;
}
var LoadFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadFail, _super);
    function LoadFail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.LOAD_FAIL;
        return _this;
    }
    return LoadFail;
}(SliceAction));
export { LoadFail };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadFail.prototype.actionName;
}
var LoadSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadSuccess, _super);
    function LoadSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = sliceActions.LOAD_SUCCESS;
        return _this;
    }
    return LoadSuccess;
}(SliceAction));
export { LoadSuccess };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadSuccess.prototype.actionName;
}
var Patch = /** @class */ (function (_super) {
    tslib_1.__extends(Patch, _super);
    function Patch(slice, path, val) {
        var _this = _super.call(this, slice, { path: path, val: val }) || this;
        _this.slice = slice;
        _this.actionName = sliceActions.PATCH;
        return _this;
    }
    return Patch;
}(SliceAction));
export { Patch };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Patch.prototype.actionName;
    /** @type {?} */
    Patch.prototype.slice;
}
var Update = /** @class */ (function (_super) {
    tslib_1.__extends(Update, _super);
    function Update(slice, path, val) {
        var _this = _super.call(this, slice, { path: path, val: val }) || this;
        _this.slice = slice;
        _this.actionName = sliceActions.UPDATE;
        return _this;
    }
    return Update;
}(SliceAction));
export { Update };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Update.prototype.actionName;
    /** @type {?} */
    Update.prototype.slice;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9hY3Rpb25zL3NsaWNlL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQTs7QUFFcEMsTUFBTSxLQUFPLFlBQVksR0FBRztJQUMxQixJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0lBQzFCLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFLFdBQVc7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixjQUFjLEVBQUUsZ0JBQWdCO0NBQ2pDO0FBRUQ7SUFBaUMsdUNBQWE7SUFHNUMscUJBQW1CLEtBQWEsRUFBUyxPQUFhO1FBQXRELFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBQ2Y7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGFBQU8sR0FBUCxPQUFPLENBQU07UUFGNUMsZ0JBQVUsR0FBRyxFQUFFLENBQUM7O0lBSTFCLENBQUM7SUFFRCxzQkFBSSw2QkFBSTs7OztRQUFSO1lBQ0UsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBaUMsYUFBYSxHQWM3Qzs7Ozs7OztJQWJDLGlDQUEwQjs7SUFFZCw0QkFBb0I7O0lBQUUsOEJBQW9COztBQWF4RDtJQUEwQixnQ0FBVztJQUFyQztRQUFBLHFFQUVDO1FBRFcsZ0JBQVUsR0FBVyxZQUFZLENBQUMsSUFBSSxDQUFDOztJQUNuRCxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFGRCxDQUEwQixXQUFXLEdBRXBDOzs7Ozs7O0lBREMsMEJBQWlEOztBQUduRDtJQUFpQyx1Q0FBVztJQUE1QztRQUFBLHFFQUVDO1FBRFcsZ0JBQVUsR0FBVyxZQUFZLENBQUMsV0FBVyxDQUFDOztJQUMxRCxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBaUMsV0FBVyxHQUUzQzs7Ozs7OztJQURDLGlDQUF3RDs7QUFHMUQ7SUFBOEIsb0NBQVc7SUFBekM7UUFBQSxxRUFFQztRQURXLGdCQUFVLEdBQVcsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7SUFDeEQsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBOEIsV0FBVyxHQUV4Qzs7Ozs7OztJQURDLDhCQUFzRDs7QUFHeEQ7SUFBaUMsdUNBQVc7SUFBNUM7UUFBQSxxRUFFQztRQURXLGdCQUFVLEdBQVcsWUFBWSxDQUFDLFlBQVksQ0FBQzs7SUFDM0QsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUZELENBQWlDLFdBQVcsR0FFM0M7Ozs7Ozs7SUFEQyxpQ0FBeUQ7O0FBRzNEO0lBQTJCLGlDQUFXO0lBR3BDLGVBQW1CLEtBQVUsRUFBRSxJQUFjLEVBQUUsR0FBUTtRQUF2RCxZQUNFLGtCQUFNLEtBQUssRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsU0FDNUI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBSztRQUZuQixnQkFBVSxHQUFXLFlBQVksQ0FBQyxLQUFLLENBQUM7O0lBSWxELENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTJCLFdBQVcsR0FNckM7Ozs7Ozs7SUFMQywyQkFBa0Q7O0lBRXRDLHNCQUFpQjs7QUFLL0I7SUFBNEIsa0NBQVc7SUFHckMsZ0JBQW1CLEtBQVUsRUFBRSxJQUFjLEVBQUUsR0FBUTtRQUF2RCxZQUNFLGtCQUFNLEtBQUssRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsU0FDNUI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBSztRQUZuQixnQkFBVSxHQUFXLFlBQVksQ0FBQyxNQUFNLENBQUM7O0lBSW5ELENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTRCLFdBQVcsR0FNdEM7Ozs7Ozs7SUFMQyw0QkFBbUQ7O0lBRXZDLHVCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJy4uL3BheWxvYWQvaW5kZXgnXG5cbmltcG9ydCB7IHR5cGVGb3IgfSBmcm9tICcuL3R5cGUtZm9yJ1xuXG5leHBvcnQgY29uc3Qgc2xpY2VBY3Rpb25zID0ge1xuICBJTklUOiAnSU5JVCcsXG4gIElOSVRJQUxJWkVEOiAnSU5JVElBTElaRUQnLFxuICBMT0FEOiAnTE9BRCcsXG4gIExPQURfRkFJTDogJ0xPQURfRkFJTCcsXG4gIExPQURfU1VDQ0VTUzogJ0xPQURfU1VDQ0VTUycsXG4gIFBBVENIOiAnUEFUQ0gnLFxuICBVUERBVEU6ICdVUERBVEUnLFxuICBVUERBVEVfU1VDQ0VTUzogJ1VQREFURV9TVUNDRVNTJ1xufTtcblxuZXhwb3J0IGNsYXNzIFNsaWNlQWN0aW9uIGV4dGVuZHMgUGF5bG9hZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkPzogYW55KSB7XG4gICAgc3VwZXIocGF5bG9hZCk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdHlwZUZvcih0aGlzLnNsaWNlLCB0aGlzLmFjdGlvbk5hbWUpO1xuICB9XG5cbiAgZ2V0IHZlcmIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uTmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5pdCBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IHNsaWNlQWN0aW9ucy5JTklUO1xufVxuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZWQgZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBzbGljZUFjdGlvbnMuSU5JVElBTElaRUQ7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkRmFpbCBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IHNsaWNlQWN0aW9ucy5MT0FEX0ZBSUw7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VjY2VzcyBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IHNsaWNlQWN0aW9ucy5MT0FEX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaCBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IHNsaWNlQWN0aW9ucy5QQVRDSDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IGFueSwgcGF0aDogc3RyaW5nW10sIHZhbDogYW55KSB7XG4gICAgc3VwZXIoc2xpY2UsIHsgcGF0aCwgdmFsIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGUgZXh0ZW5kcyBTbGljZUFjdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb25OYW1lOiBzdHJpbmcgPSBzbGljZUFjdGlvbnMuVVBEQVRFO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXRoOiBzdHJpbmdbXSwgdmFsOiBhbnkpIHtcbiAgICBzdXBlcihzbGljZSwgeyBwYXRoLCB2YWwgfSk7XG4gIH1cbn1cbiJdfQ==