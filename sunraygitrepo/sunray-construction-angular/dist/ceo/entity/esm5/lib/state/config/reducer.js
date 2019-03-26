/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { EntityConfigActionTypes, } from './actions';
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function entityConfigReducer(state, action) {
    /** @type {?} */
    var deltaState = {};
    switch (action.type) {
        case EntityConfigActionTypes.SET_PRIMARY_ENTITY:
            deltaState = {
                primaryEntity: _.omit(action.payload, 'feature'),
            };
            return _.assign({}, state, deltaState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2NvbmZpZy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsdUJBQXVCLEdBRXhCLE1BQU0sV0FBVyxDQUFBOzs7Ozs7QUFNbEIsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxLQUF5QixFQUN6QixNQUFnQzs7UUFFNUIsVUFBVSxHQUFHLEVBQUU7SUFFbkIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssdUJBQXVCLENBQUMsa0JBQWtCO1lBQzdDLFVBQVUsR0FBRztnQkFDWixhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUNoRCxDQUFBO1lBQ0QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDeEM7WUFDRSxPQUFPLEtBQUssQ0FBQTtLQUNmO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlDb25maWdBY3Rpb25UeXBlcyxcbiAgRW50aXR5Q29uZmlnQWN0aW9uc1VuaW9uLFxufSBmcm9tICcuL2FjdGlvbnMnXG5cbmltcG9ydCB7XG4gIGlFbnRpdHlDb25maWdTdGF0ZVxufSBmcm9tICcuL3N0YXRlJ1xuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5Q29uZmlnUmVkdWNlcihcbiAgc3RhdGU6IGlFbnRpdHlDb25maWdTdGF0ZSxcbiAgYWN0aW9uOiBFbnRpdHlDb25maWdBY3Rpb25zVW5pb25cbik6IGlFbnRpdHlDb25maWdTdGF0ZSB7XG4gIHZhciBkZWx0YVN0YXRlID0ge31cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBFbnRpdHlDb25maWdBY3Rpb25UeXBlcy5TRVRfUFJJTUFSWV9FTlRJVFk6XG4gICAgICBkZWx0YVN0YXRlID0ge1xuICAgICAgIHByaW1hcnlFbnRpdHk6IF8ub21pdChhY3Rpb24ucGF5bG9hZCwgJ2ZlYXR1cmUnKSxcbiAgICAgIH1cbiAgICAgIHJldHVybiBfLmFzc2lnbih7fSwgc3RhdGUsIGRlbHRhU3RhdGUpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG4iXX0=