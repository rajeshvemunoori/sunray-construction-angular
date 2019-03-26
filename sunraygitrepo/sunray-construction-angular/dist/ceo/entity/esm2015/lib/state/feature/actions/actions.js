/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PayloadAction, } from '@ceo/state';
import { ActionTypes } from './action-types';
export class AddFeature extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.ADD_FEATURE;
    }
}
if (false) {
    /** @type {?} */
    AddFeature.prototype.type;
}
export class LoadPrimaryEntity extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.LOAD_PRIMARY_ENTITY;
    }
}
if (false) {
    /** @type {?} */
    LoadPrimaryEntity.prototype.type;
}
export class RegisterFeature extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.REGISTER_FEATURE;
    }
}
if (false) {
    /** @type {?} */
    RegisterFeature.prototype.type;
}
export class SelectPrimaryEntity {
    constructor() {
        this.type = ActionTypes.SELECT_PRIMARY_ENTITY;
    }
}
if (false) {
    /** @type {?} */
    SelectPrimaryEntity.prototype.type;
}
export class SetPrimaryEntity extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.SET_PRIMARY_ENTITY;
    }
}
if (false) {
    /** @type {?} */
    SetPrimaryEntity.prototype.type;
}
export class SetPrimaryEntityIdentifier extends PayloadAction {
    constructor() {
        super(...arguments);
        this.type = ActionTypes.SET_PRIMARY_ENTITY_IDENTIFIER;
    }
}
if (false) {
    /** @type {?} */
    SetPrimaryEntityIdentifier.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2ZlYXR1cmUvYWN0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsYUFBYSxHQUNkLE1BQU0sWUFBWSxDQUFBO0FBRW5CLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUU1QyxNQUFNLE9BQU8sVUFBVyxTQUFRLGFBQWE7SUFBN0M7O1FBQ1csU0FBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUE7SUFDekMsQ0FBQztDQUFBOzs7SUFEQywwQkFBdUM7O0FBR3pDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhO0lBQXBEOztRQUNXLFNBQUksR0FBRyxXQUFXLENBQUMsbUJBQW1CLENBQUE7SUFDakQsQ0FBQztDQUFBOzs7SUFEQyxpQ0FBK0M7O0FBR2pELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUFBbEQ7O1FBQ1csU0FBSSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM5QyxDQUFDO0NBQUE7OztJQURDLCtCQUE0Qzs7QUFHOUMsTUFBTSxPQUFPLG1CQUFtQjtJQUFoQztRQUNXLFNBQUksR0FBRyxXQUFXLENBQUMscUJBQXFCLENBQUE7SUFDbkQsQ0FBQztDQUFBOzs7SUFEQyxtQ0FBaUQ7O0FBR25ELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhO0lBQW5EOztRQUNXLFNBQUksR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUE7SUFDaEQsQ0FBQztDQUFBOzs7SUFEQyxnQ0FBOEM7O0FBR2hELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxhQUFhO0lBQTdEOztRQUNXLFNBQUksR0FBRyxXQUFXLENBQUMsNkJBQTZCLENBQUE7SUFDM0QsQ0FBQztDQUFBOzs7SUFEQywwQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgUGF5bG9hZEFjdGlvbixcbn0gZnJvbSAnQGNlby9zdGF0ZSdcblxuaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbi10eXBlcydcblxuZXhwb3J0IGNsYXNzIEFkZEZlYXR1cmUgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFjdGlvblR5cGVzLkFERF9GRUFUVVJFXG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJpbWFyeUVudGl0eSBleHRlbmRzIFBheWxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQWN0aW9uVHlwZXMuTE9BRF9QUklNQVJZX0VOVElUWVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJGZWF0dXJlIGV4dGVuZHMgUGF5bG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBY3Rpb25UeXBlcy5SRUdJU1RFUl9GRUFUVVJFXG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RQcmltYXJ5RW50aXR5IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFjdGlvblR5cGVzLlNFTEVDVF9QUklNQVJZX0VOVElUWVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UHJpbWFyeUVudGl0eSBleHRlbmRzIFBheWxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQWN0aW9uVHlwZXMuU0VUX1BSSU1BUllfRU5USVRZXG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQcmltYXJ5RW50aXR5SWRlbnRpZmllciBleHRlbmRzIFBheWxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQWN0aW9uVHlwZXMuU0VUX1BSSU1BUllfRU5USVRZX0lERU5USUZJRVJcbn1cbiJdfQ==