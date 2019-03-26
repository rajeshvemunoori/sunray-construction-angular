/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of state
 */
export { PayloadAction, sliceActions, SliceAction, Init, Initialized, LoadFail, LoadSuccess, Patch, Update, load, loadFail, loadSuccess, update, patch, type, typeFor } from './lib/classes/index';
export { effects } from './lib/effects/index';
export { services } from './lib/services/index';
export { ApplicationConfigActions, applicationConfigInitialState, ApplicationConfigEffects, applicationConfigReducer, selectApplicationConfig, selectApplicationConfigLaunched, selectApplicationConfigResourceType, selectApplicationConfigResourceById, selectApplicationConfigPrimaryEntity, applicationConfigSelectors, routerInitialState, selectRouter, selectRouterState, selectRouteParamId, routerSelectors, RouterCustomSerializer, SystemComponentsActions, systemComponentsInitialState, SystemComponentsEffects, systemComponentsReducer, selectSystemComponents, selectSystemComponentsActiveComponents, systemComponentsSelectors } from './lib/slices/index';
export {} from './lib/types/index';
export { propertySelector } from './lib/util/index';
//
export { StateModule } from './lib/state.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSw2S0FBYyxxQkFBcUIsQ0FBQTtBQUNuQyx3QkFBYyxxQkFBcUIsQ0FBQTtBQUNuQyx5QkFBYyxzQkFBc0IsQ0FBQTtBQUNwQyx3bkJBQWMsb0JBQW9CLENBQUE7QUFDbEMsZUFBYyxtQkFBbUIsQ0FBQTtBQUNqQyxpQ0FBYyxrQkFBa0IsQ0FBQTs7QUFFaEMsNEJBQWMsb0JBQW9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIHN0YXRlXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9saWIvY2xhc3Nlcy9pbmRleCdcbmV4cG9ydCAqIGZyb20gJy4vbGliL2VmZmVjdHMvaW5kZXgnXG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9pbmRleCdcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NsaWNlcy9pbmRleCdcbmV4cG9ydCAqIGZyb20gJy4vbGliL3R5cGVzL2luZGV4J1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdXRpbC9pbmRleCdcbi8vXG5leHBvcnQgKiBmcm9tICcuL2xpYi9zdGF0ZS5tb2R1bGUnXG4iXX0=