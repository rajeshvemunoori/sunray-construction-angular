/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PayloadAction } from '../payload/index';
import { typeFor } from './type-for';
/** @type {?} */
export const sliceActions = {
    INIT: 'INIT',
    INITIALIZED: 'INITIALIZED',
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    PATCH: 'PATCH',
    UPDATE: 'UPDATE',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS'
};
export class SliceAction extends PayloadAction {
    /**
     * @param {?} slice
     * @param {?=} payload
     */
    constructor(slice, payload) {
        super(payload);
        this.slice = slice;
        this.payload = payload;
        this.actionName = '';
    }
    /**
     * @return {?}
     */
    get type() {
        return typeFor(this.slice, this.actionName);
    }
    /**
     * @return {?}
     */
    get verb() {
        return this.actionName;
    }
}
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
export class Init extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.INIT;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Init.prototype.actionName;
}
export class Initialized extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.INITIALIZED;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Initialized.prototype.actionName;
}
export class LoadFail extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.LOAD_FAIL;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadFail.prototype.actionName;
}
export class LoadSuccess extends SliceAction {
    constructor() {
        super(...arguments);
        this.actionName = sliceActions.LOAD_SUCCESS;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LoadSuccess.prototype.actionName;
}
export class Patch extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} path
     * @param {?} val
     */
    constructor(slice, path, val) {
        super(slice, { path, val });
        this.slice = slice;
        this.actionName = sliceActions.PATCH;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Patch.prototype.actionName;
    /** @type {?} */
    Patch.prototype.slice;
}
export class Update extends SliceAction {
    /**
     * @param {?} slice
     * @param {?} path
     * @param {?} val
     */
    constructor(slice, path, val) {
        super(slice, { path, val });
        this.slice = slice;
        this.actionName = sliceActions.UPDATE;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Update.prototype.actionName;
    /** @type {?} */
    Update.prototype.slice;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9hY3Rpb25zL3NsaWNlL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUVoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFBOztBQUVwQyxNQUFNLE9BQU8sWUFBWSxHQUFHO0lBQzFCLElBQUksRUFBRSxNQUFNO0lBQ1osV0FBVyxFQUFFLGFBQWE7SUFDMUIsSUFBSSxFQUFFLE1BQU07SUFDWixTQUFTLEVBQUUsV0FBVztJQUN0QixZQUFZLEVBQUUsY0FBYztJQUM1QixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGNBQWMsRUFBRSxnQkFBZ0I7Q0FDakM7QUFFRCxNQUFNLE9BQU8sV0FBWSxTQUFRLGFBQWE7Ozs7O0lBRzVDLFlBQW1CLEtBQWEsRUFBUyxPQUFhO1FBQ3BELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURFLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFNO1FBRjVDLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFJMUIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7Ozs7SUFiQyxpQ0FBMEI7O0lBRWQsNEJBQW9COztJQUFFLDhCQUFvQjs7QUFheEQsTUFBTSxPQUFPLElBQUssU0FBUSxXQUFXO0lBQXJDOztRQUNZLGVBQVUsR0FBVyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7Q0FBQTs7Ozs7O0lBREMsMEJBQWlEOztBQUduRCxNQUFNLE9BQU8sV0FBWSxTQUFRLFdBQVc7SUFBNUM7O1FBQ1ksZUFBVSxHQUFXLFlBQVksQ0FBQyxXQUFXLENBQUM7SUFDMUQsQ0FBQztDQUFBOzs7Ozs7SUFEQyxpQ0FBd0Q7O0FBRzFELE1BQU0sT0FBTyxRQUFTLFNBQVEsV0FBVztJQUF6Qzs7UUFDWSxlQUFVLEdBQVcsWUFBWSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0NBQUE7Ozs7OztJQURDLDhCQUFzRDs7QUFHeEQsTUFBTSxPQUFPLFdBQVksU0FBUSxXQUFXO0lBQTVDOztRQUNZLGVBQVUsR0FBVyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQzNELENBQUM7Q0FBQTs7Ozs7O0lBREMsaUNBQXlEOztBQUczRCxNQUFNLE9BQU8sS0FBTSxTQUFRLFdBQVc7Ozs7OztJQUdwQyxZQUFtQixLQUFVLEVBQUUsSUFBYyxFQUFFLEdBQVE7UUFDckQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRFgsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUZuQixlQUFVLEdBQVcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUlsRCxDQUFDO0NBQ0Y7Ozs7OztJQUxDLDJCQUFrRDs7SUFFdEMsc0JBQWlCOztBQUsvQixNQUFNLE9BQU8sTUFBTyxTQUFRLFdBQVc7Ozs7OztJQUdyQyxZQUFtQixLQUFVLEVBQUUsSUFBYyxFQUFFLEdBQVE7UUFDckQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRFgsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUZuQixlQUFVLEdBQVcsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUluRCxDQUFDO0NBQ0Y7Ozs7OztJQUxDLDRCQUFtRDs7SUFFdkMsdUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnLi4vcGF5bG9hZC9pbmRleCdcblxuaW1wb3J0IHsgdHlwZUZvciB9IGZyb20gJy4vdHlwZS1mb3InXG5cbmV4cG9ydCBjb25zdCBzbGljZUFjdGlvbnMgPSB7XG4gIElOSVQ6ICdJTklUJyxcbiAgSU5JVElBTElaRUQ6ICdJTklUSUFMSVpFRCcsXG4gIExPQUQ6ICdMT0FEJyxcbiAgTE9BRF9GQUlMOiAnTE9BRF9GQUlMJyxcbiAgTE9BRF9TVUNDRVNTOiAnTE9BRF9TVUNDRVNTJyxcbiAgUEFUQ0g6ICdQQVRDSCcsXG4gIFVQREFURTogJ1VQREFURScsXG4gIFVQREFURV9TVUNDRVNTOiAnVVBEQVRFX1NVQ0NFU1MnXG59O1xuXG5leHBvcnQgY2xhc3MgU2xpY2VBY3Rpb24gZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2xpY2U6IHN0cmluZywgcHVibGljIHBheWxvYWQ/OiBhbnkpIHtcbiAgICBzdXBlcihwYXlsb2FkKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0eXBlRm9yKHRoaXMuc2xpY2UsIHRoaXMuYWN0aW9uTmFtZSk7XG4gIH1cblxuICBnZXQgdmVyYigpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25OYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0IGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gc2xpY2VBY3Rpb25zLklOSVQ7XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplZCBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IHNsaWNlQWN0aW9ucy5JTklUSUFMSVpFRDtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRGYWlsIGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gc2xpY2VBY3Rpb25zLkxPQURfRkFJTDtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdWNjZXNzIGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gc2xpY2VBY3Rpb25zLkxPQURfU1VDQ0VTUztcbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoIGV4dGVuZHMgU2xpY2VBY3Rpb24ge1xuICBwcm90ZWN0ZWQgYWN0aW9uTmFtZTogc3RyaW5nID0gc2xpY2VBY3Rpb25zLlBBVENIO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzbGljZTogYW55LCBwYXRoOiBzdHJpbmdbXSwgdmFsOiBhbnkpIHtcbiAgICBzdXBlcihzbGljZSwgeyBwYXRoLCB2YWwgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZSBleHRlbmRzIFNsaWNlQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbk5hbWU6IHN0cmluZyA9IHNsaWNlQWN0aW9ucy5VUERBVEU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBhbnksIHBhdGg6IHN0cmluZ1tdLCB2YWw6IGFueSkge1xuICAgIHN1cGVyKHNsaWNlLCB7IHBhdGgsIHZhbCB9KTtcbiAgfVxufVxuIl19