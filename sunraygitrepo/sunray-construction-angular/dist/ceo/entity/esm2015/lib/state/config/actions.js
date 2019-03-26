/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PayloadAction } from '@ceo/state';
/** @enum {string} */
const EntityConfigActionTypes = {
    SET_PRIMARY_ENTITY: 'SET_PRIMARY_ENTITY',
};
export { EntityConfigActionTypes };
export class SetPrimaryEntity extends PayloadAction {
    /**
     * @param {?} slice
     * @param {?} payload
     */
    constructor(slice, payload) {
        super(slice);
        this.slice = slice;
        this.payload = payload;
        this.type = EntityConfigActionTypes.SET_PRIMARY_ENTITY;
    }
}
if (false) {
    /** @type {?} */
    SetPrimaryEntity.prototype.type;
    /** @type {?} */
    SetPrimaryEntity.prototype.slice;
    /** @type {?} */
    SetPrimaryEntity.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2NvbmZpZy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFBOzs7SUFHeEMsb0JBQXFCLG9CQUFvQjs7O0FBRzNDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhOzs7OztJQUVqRCxZQUFtQixLQUFhLEVBQVMsT0FBWTtRQUNuRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFESyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQ1QyxTQUFJLEdBQUcsdUJBQXVCLENBQUMsa0JBQWtCLENBQUE7SUFHMUQsQ0FBQztDQUNGOzs7SUFKQyxnQ0FBMEQ7O0lBQzlDLGlDQUFvQjs7SUFBRSxtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0BjZW8vc3RhdGUnXG5cbmV4cG9ydCBlbnVtIEVudGl0eUNvbmZpZ0FjdGlvblR5cGVzIHtcbiAgU0VUX1BSSU1BUllfRU5USVRZID0gJ1NFVF9QUklNQVJZX0VOVElUWScsXG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQcmltYXJ5RW50aXR5IGV4dGVuZHMgUGF5bG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBFbnRpdHlDb25maWdBY3Rpb25UeXBlcy5TRVRfUFJJTUFSWV9FTlRJVFlcbiAgY29uc3RydWN0b3IocHVibGljIHNsaWNlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihzbGljZSlcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbnRpdHlDb25maWdBY3Rpb25zVW5pb24gPVxuICBTZXRQcmltYXJ5RW50aXR5XG4iXX0=