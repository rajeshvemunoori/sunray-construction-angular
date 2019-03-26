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
            var currentActiveComponents = state.activeComponents;
            /** @type {?} */
            var addActiveComponent = function (components, component) {
                components.push(component);
                return components;
            };
            /** @type {?} */
            var components = _.reduce(currentActiveComponents, addActiveComponent, []);
            components.push(action.payload);
            deltaState = {
                activeComponents: components
            };
            return _.assign({}, state, deltaState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc3RhdGUvIiwic291cmNlcyI6WyJsaWIvc2xpY2VzL3N5c3RlbS1jb21wb25lbnRzL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFXNUIsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxLQUE2QixFQUM3QixNQUFvQzs7UUFFaEMsVUFBVSxHQUFHLEVBQUU7SUFDbkIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssdUNBQXVDOzs7Z0JBRXRDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxnQkFBZ0I7O2dCQUNoRCxrQkFBa0IsR0FBRyxVQUFDLFVBQVUsRUFBRSxTQUFTO2dCQUM3QyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUMxQixPQUFPLFVBQVUsQ0FBQTtZQUNuQixDQUFDOztnQkFDRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUM7WUFDMUUsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7WUFFL0IsVUFBVSxHQUFHO2dCQUNYLGdCQUFnQixFQUFFLFVBQVU7YUFDN0IsQ0FBQztZQUVGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuICBTeXN0ZW1Db21wb25lbnRzQWN0aW9uVHlwZXMsXG4gIFN5c3RlbUNvbXBvbmVudHNBY3Rpb25zVW5pb24sXG59IGZyb20gJy4vYWN0aW9ucyc7XG5cbmltcG9ydCB7XG4gIGlTeXN0ZW1Db21wb25lbnRzU3RhdGVcbn0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzeXN0ZW1Db21wb25lbnRzUmVkdWNlcihcbiAgc3RhdGU6IGlTeXN0ZW1Db21wb25lbnRzU3RhdGUsXG4gIGFjdGlvbjogU3lzdGVtQ29tcG9uZW50c0FjdGlvbnNVbmlvblxuKTogaVN5c3RlbUNvbXBvbmVudHNTdGF0ZSB7XG4gIHZhciBkZWx0YVN0YXRlID0ge307XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdbU3lzdGVtQ29tcG9uZW50c10gQUNUSVZBVEVfQ09NUE9ORU5UJzpcbiAgICAgIC8vIE1ha2Ugc3VyZSB5b3UgY2FuIHJlYWNoIHRoaXMgcGlvbnRcbiAgICAgIGxldCBjdXJyZW50QWN0aXZlQ29tcG9uZW50cyA9IHN0YXRlLmFjdGl2ZUNvbXBvbmVudHNcbiAgICAgIGxldCBhZGRBY3RpdmVDb21wb25lbnQgPSAoY29tcG9uZW50cywgY29tcG9uZW50KSA9PiB7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzXG4gICAgICB9XG4gICAgICBsZXQgY29tcG9uZW50cyA9IF8ucmVkdWNlKGN1cnJlbnRBY3RpdmVDb21wb25lbnRzLCBhZGRBY3RpdmVDb21wb25lbnQsIFtdKVxuICAgICAgY29tcG9uZW50cy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgXG4gICAgICBkZWx0YVN0YXRlID0ge1xuICAgICAgICBhY3RpdmVDb21wb25lbnRzOiBjb21wb25lbnRzXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gXy5hc3NpZ24oe30sIHN0YXRlLCBkZWx0YVN0YXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=