/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
// updateMany
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
export function updateMany(action, adapter, state) {
    /** @type {?} */
    var payload = _.flatten([action.payload]);
    /** @type {?} */
    var payloadIds = _.map(_.flatten([payload]), 'id');
    return adapter.upsertMany(payload, state);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW1hbnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvcmVkdWNlci9mdW5jdGlvbnMvdXBkYXRlLW1hbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7Ozs7OztBQUszQixNQUFNLFVBQVUsVUFBVSxDQUN4QixNQUF5QixFQUN6QixPQUFZLEVBQ1osS0FBVTs7UUFFTixPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFDckMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNwQixJQUFJLENBQ0w7SUFDRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi4vLi4vZW50aXR5LmFjdGlvbi1jbGFzc2VzJ1xuXG4vLyB1cGRhdGVNYW55XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWFueShcbiAgYWN0aW9uOiBFbnRpdHlBY3Rpb248YW55PixcbiAgYWRhcHRlcjogYW55LFxuICBzdGF0ZTogYW55XG4pIHtcbiAgbGV0IHBheWxvYWQgPSBfLmZsYXR0ZW4oW2FjdGlvbi5wYXlsb2FkXSlcbiAgbGV0IHBheWxvYWRJZHMgPSBfLm1hcChcbiAgICBfLmZsYXR0ZW4oW3BheWxvYWRdKSxcbiAgICAnaWQnXG4gIClcbiAgcmV0dXJuIGFkYXB0ZXIudXBzZXJ0TWFueShwYXlsb2FkLCBzdGF0ZSlcbn1cbiJdfQ==