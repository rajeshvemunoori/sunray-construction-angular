/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as EntityActions from './entity.action-classes';
export { EntityActions };
export { EntityAction } from './entity.action-classes';
export { actions as EntityActionsMap } from './entity.actions';
export { EntityAdapter } from './entity.adapter';
export { EntityAdapterFactory } from './entity-adapter.factory';
export { EntityTypeFactory } from './entity-type.factory';
export { EntityCollection } from './entity.collection';
export { EntityConfig } from './entity.config';
export { EntityEffectsConfig } from './entity.effects-config';
export { actionType, addMany, addOne, removeMany, removeOne, setScopeIds, updateMany, updateOne, entityReducer } from './reducer/index';
export { JsonApiEntity, ResourceAssociationEntity, ResourceAttributeEntity, ResourceConfigurationEntity, ResourceValidatorEntity } from './entities/index';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9jbGFzc2VzL2VudGl0eS9wdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssYUFBYSxNQUFNLHlCQUF5QixDQUFBO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQTtBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFFdEQsT0FBTyxFQUFFLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRTlELDhCQUFjLGtCQUFrQixDQUFBO0FBQ2hDLHFDQUFjLDBCQUEwQixDQUFBO0FBQ3hDLGtDQUFjLHVCQUF1QixDQUFBO0FBQ3JDLGlDQUFjLHFCQUFxQixDQUFBO0FBQ25DLDZCQUFjLGlCQUFpQixDQUFBO0FBQy9CLG9DQUFjLHlCQUF5QixDQUFBO0FBQ3ZDLHNIQUFjLGlCQUFpQixDQUFBO0FBQy9CLHdJQUFjLGtCQUFrQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRW50aXR5QWN0aW9ucyBmcm9tICcuL2VudGl0eS5hY3Rpb24tY2xhc3NlcydcbmV4cG9ydCB7IEVudGl0eUFjdGlvbnMgfVxuZXhwb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi9lbnRpdHkuYWN0aW9uLWNsYXNzZXMnXG5cbmV4cG9ydCB7IGFjdGlvbnMgYXMgRW50aXR5QWN0aW9uc01hcCB9IGZyb20gJy4vZW50aXR5LmFjdGlvbnMnXG5cbmV4cG9ydCAqIGZyb20gJy4vZW50aXR5LmFkYXB0ZXInXG5leHBvcnQgKiBmcm9tICcuL2VudGl0eS1hZGFwdGVyLmZhY3RvcnknXG5leHBvcnQgKiBmcm9tICcuL2VudGl0eS10eXBlLmZhY3RvcnknXG5leHBvcnQgKiBmcm9tICcuL2VudGl0eS5jb2xsZWN0aW9uJ1xuZXhwb3J0ICogZnJvbSAnLi9lbnRpdHkuY29uZmlnJ1xuZXhwb3J0ICogZnJvbSAnLi9lbnRpdHkuZWZmZWN0cy1jb25maWcnXG5leHBvcnQgKiBmcm9tICcuL3JlZHVjZXIvaW5kZXgnXG5leHBvcnQgKiBmcm9tICcuL2VudGl0aWVzL2luZGV4J1xuIl19