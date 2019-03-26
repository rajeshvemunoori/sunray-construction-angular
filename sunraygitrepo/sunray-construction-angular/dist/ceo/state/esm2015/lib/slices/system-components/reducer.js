/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function systemComponentsReducer(state, action) {
    /** @type {?} */
    var deltaState = {};
    switch (action.type) {
        case '[SystemComponents] ACTIVATE_COMPONENT':
            // Make sure you can reach this piont
            /** @type {?} */
            let currentActiveComponents = state.activeComponents;
            /** @type {?} */
            let addActiveComponent = (components, component) => {
                components.push(component);
                return components;
            };
            /** @type {?} */
            let components = _.reduce(currentActiveComponents, addActiveComponent, []);
            components.push(action.payload);
            deltaState = {
                activeComponents: components
            };
            return _.assign({}, state, deltaState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL3N5c3RlbS1jb21wb25lbnRzL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFXNUIsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxLQUE2QixFQUM3QixNQUFvQzs7UUFFaEMsVUFBVSxHQUFHLEVBQUU7SUFDbkIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssdUNBQXVDOzs7Z0JBRXRDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxnQkFBZ0I7O2dCQUNoRCxrQkFBa0IsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFDakQsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDMUIsT0FBTyxVQUFVLENBQUE7WUFDbkIsQ0FBQzs7Z0JBQ0csVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO1lBQzFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRS9CLFVBQVUsR0FBRztnQkFDWCxnQkFBZ0IsRUFBRSxVQUFVO2FBQzdCLENBQUM7WUFFRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6QztZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgU3lzdGVtQ29tcG9uZW50c0FjdGlvblR5cGVzLFxuICBTeXN0ZW1Db21wb25lbnRzQWN0aW9uc1VuaW9uLFxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBpU3lzdGVtQ29tcG9uZW50c1N0YXRlXG59IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3lzdGVtQ29tcG9uZW50c1JlZHVjZXIoXG4gIHN0YXRlOiBpU3lzdGVtQ29tcG9uZW50c1N0YXRlLFxuICBhY3Rpb246IFN5c3RlbUNvbXBvbmVudHNBY3Rpb25zVW5pb25cbik6IGlTeXN0ZW1Db21wb25lbnRzU3RhdGUge1xuICB2YXIgZGVsdGFTdGF0ZSA9IHt9O1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnW1N5c3RlbUNvbXBvbmVudHNdIEFDVElWQVRFX0NPTVBPTkVOVCc6XG4gICAgICAvLyBNYWtlIHN1cmUgeW91IGNhbiByZWFjaCB0aGlzIHBpb250XG4gICAgICBsZXQgY3VycmVudEFjdGl2ZUNvbXBvbmVudHMgPSBzdGF0ZS5hY3RpdmVDb21wb25lbnRzXG4gICAgICBsZXQgYWRkQWN0aXZlQ29tcG9uZW50ID0gKGNvbXBvbmVudHMsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICAgICAgICByZXR1cm4gY29tcG9uZW50c1xuICAgICAgfVxuICAgICAgbGV0IGNvbXBvbmVudHMgPSBfLnJlZHVjZShjdXJyZW50QWN0aXZlQ29tcG9uZW50cywgYWRkQWN0aXZlQ29tcG9uZW50LCBbXSlcbiAgICAgIGNvbXBvbmVudHMucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgIFxuICAgICAgZGVsdGFTdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlQ29tcG9uZW50czogY29tcG9uZW50c1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwgZGVsdGFTdGF0ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19