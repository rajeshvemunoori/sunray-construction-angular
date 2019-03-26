/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Shared Providers created internally.
import { NgModule } from '@angular/core';
import { DeclarablesModule as SharedDeclarablesModule, } from '../declarables/declarables.module';
import { sharedServices } from './services/index';
import { sharedGuards } from './guards/index';
import { providers as tokenProviders } from './tokens/index';
var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        SharedDeclarablesModule,
                    ],
                    providers: tslib_1.__spread(sharedServices, sharedGuards, tokenProviders),
                },] }
    ];
    return ProvidersModule;
}());
export { ProvidersModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9wcm92aWRlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFeEMsT0FBTyxFQUNMLGlCQUFpQixJQUFJLHVCQUF1QixHQUM3QyxNQUFNLG1DQUFtQyxDQUFBO0FBRTFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBUSxrQkFBa0IsQ0FBQTtBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQVUsZ0JBQWdCLENBQUE7QUFDakQsT0FBTyxFQUFFLFNBQVMsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUU1RDtJQUFBO0lBVStCLENBQUM7O2dCQVYvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxtQkFDSixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsQ0FDbEI7aUJBQ0Y7O0lBQzhCLHNCQUFDO0NBQUEsQUFWaEMsSUFVZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNoYXJlZCBQcm92aWRlcnMgY3JlYXRlZCBpbnRlcm5hbGx5LlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBEZWNsYXJhYmxlc01vZHVsZSBhcyBTaGFyZWREZWNsYXJhYmxlc01vZHVsZSxcbn0gZnJvbSAnLi4vZGVjbGFyYWJsZXMvZGVjbGFyYWJsZXMubW9kdWxlJ1xuXG5pbXBvcnQgeyBzaGFyZWRTZXJ2aWNlcyB9ICAgZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCdcbmltcG9ydCB7IHNoYXJlZEd1YXJkcyB9ICAgICBmcm9tICcuL2d1YXJkcy9pbmRleCdcbmltcG9ydCB7IHByb3ZpZGVycyBhcyB0b2tlblByb3ZpZGVycyB9IGZyb20gJy4vdG9rZW5zL2luZGV4J1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkRGVjbGFyYWJsZXNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnNoYXJlZFNlcnZpY2VzLFxuICAgIC4uLnNoYXJlZEd1YXJkcyxcbiAgICAuLi50b2tlblByb3ZpZGVycyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJzTW9kdWxlIHsgfVxuIl19