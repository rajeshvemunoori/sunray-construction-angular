/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
/**
 * @param {?} action
 * @param {?} adapter
 * @param {?} state
 * @return {?}
 */
export function removeMany(action, adapter, state) {
    /** @type {?} */
    let payloadIds = _.map(_.flatten([action.payload]), 'id');
    return adapter.removeMany(payloadIds, state);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLW1hbnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2VudGl0eS9yZWR1Y2VyL2Z1bmN0aW9ucy9yZW1vdmUtbWFueS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7Ozs7QUFJM0IsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsTUFBeUIsRUFDekIsT0FBWSxFQUNaLEtBQVU7O1FBR04sVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDM0IsSUFBSSxDQUNMO0lBQ0QsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEVudGl0eUFjdGlvbiB9IGZyb20gJy4uLy4uL2VudGl0eS5hY3Rpb24tY2xhc3NlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU1hbnkoXG4gIGFjdGlvbjogRW50aXR5QWN0aW9uPGFueT4sXG4gIGFkYXB0ZXI6IGFueSxcbiAgc3RhdGU6IGFueVxuKSB7XG5cbiAgbGV0IHBheWxvYWRJZHMgPSBfLm1hcChcbiAgICBfLmZsYXR0ZW4oW2FjdGlvbi5wYXlsb2FkXSksXG4gICAgJ2lkJ1xuICApXG4gIHJldHVybiBhZGFwdGVyLnJlbW92ZU1hbnkocGF5bG9hZElkcywgc3RhdGUpXG59XG4iXX0=