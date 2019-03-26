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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9zdGF0ZS9mZWF0dXJlL2FjdGlvbnMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNMLGFBQWEsR0FDZCxNQUFNLFlBQVksQ0FBQTtBQUVuQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFNUMsTUFBTSxPQUFPLFVBQVcsU0FBUSxhQUFhO0lBQTdDOztRQUNXLFNBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFBO0lBQ3pDLENBQUM7Q0FBQTs7O0lBREMsMEJBQXVDOztBQUd6QyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsYUFBYTtJQUFwRDs7UUFDVyxTQUFJLEdBQUcsV0FBVyxDQUFDLG1CQUFtQixDQUFBO0lBQ2pELENBQUM7Q0FBQTs7O0lBREMsaUNBQStDOztBQUdqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBQWxEOztRQUNXLFNBQUksR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUE7SUFDOUMsQ0FBQztDQUFBOzs7SUFEQywrQkFBNEM7O0FBRzlDLE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFDVyxTQUFJLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixDQUFBO0lBQ25ELENBQUM7Q0FBQTs7O0lBREMsbUNBQWlEOztBQUduRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsYUFBYTtJQUFuRDs7UUFDVyxTQUFJLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFBO0lBQ2hELENBQUM7Q0FBQTs7O0lBREMsZ0NBQThDOztBQUdoRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsYUFBYTtJQUE3RDs7UUFDVyxTQUFJLEdBQUcsV0FBVyxDQUFDLDZCQUE2QixDQUFBO0lBQzNELENBQUM7Q0FBQTs7O0lBREMsMENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7XG4gIFBheWxvYWRBY3Rpb24sXG59IGZyb20gJ0BjZW8vc3RhdGUnXG5cbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24tdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBBZGRGZWF0dXJlIGV4dGVuZHMgUGF5bG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBY3Rpb25UeXBlcy5BRERfRkVBVFVSRVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByaW1hcnlFbnRpdHkgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFjdGlvblR5cGVzLkxPQURfUFJJTUFSWV9FTlRJVFlcbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyRmVhdHVyZSBleHRlbmRzIFBheWxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQWN0aW9uVHlwZXMuUkVHSVNURVJfRkVBVFVSRVxufVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0UHJpbWFyeUVudGl0eSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBY3Rpb25UeXBlcy5TRUxFQ1RfUFJJTUFSWV9FTlRJVFlcbn1cblxuZXhwb3J0IGNsYXNzIFNldFByaW1hcnlFbnRpdHkgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFjdGlvblR5cGVzLlNFVF9QUklNQVJZX0VOVElUWVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UHJpbWFyeUVudGl0eUlkZW50aWZpZXIgZXh0ZW5kcyBQYXlsb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFjdGlvblR5cGVzLlNFVF9QUklNQVJZX0VOVElUWV9JREVOVElGSUVSXG59XG4iXX0=