/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, initialState, reducer, } from './state/state';
import { entityServices } from './services/index';
import { providers } from './util/index';
var EntityModule = /** @class */ (function () {
    function EntityModule() {
    }
    EntityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('entity', reducer, {
                            initialState: initialState,
                        }),
                        EffectsModule.forFeature(tslib_1.__spread(effects)),
                    ],
                    declarations: [],
                    providers: tslib_1.__spread(entityServices, providers)
                },] }
    ];
    return EntityModule;
}());
export { EntityModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9lbnRpdHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUV4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQXNCLGFBQWEsQ0FBQTtBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTdDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsWUFBWSxFQUNaLE9BQU8sR0FDUixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFLLGNBQWMsQ0FBQTtBQUd2QztJQUFBO0lBbUI0QixDQUFDOztnQkFuQjVCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FDcEIsUUFBUSxFQUNSLE9BQU8sRUFDUDs0QkFDRSxZQUFZLEVBQUUsWUFBWTt5QkFDM0IsQ0FDRjt3QkFDRCxhQUFhLENBQUMsVUFBVSxrQkFDbkIsT0FBTyxFQUNWO3FCQUNIO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixTQUFTLG1CQUNKLGNBQWMsRUFDZCxTQUFTLENBQ2I7aUJBQ0Y7O0lBQzJCLG1CQUFDO0NBQUEsQUFuQjdCLElBbUI2QjtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9ICAgICAgICAgICAgICAgICBmcm9tICdAbmdyeC9zdG9yZSdcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuXG5pbXBvcnQge1xuICBlZmZlY3RzLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXIsXG59IGZyb20gJy4vc3RhdGUvc3RhdGUnXG5cbmltcG9ydCB7IGVudGl0eVNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCdcbmltcG9ydCB7IHByb3ZpZGVycyB9ZnJvbSAnLi91dGlsL2luZGV4J1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFxuICAgICAgJ2VudGl0eScsXG4gICAgICByZWR1Y2VyLFxuICAgICAge1xuICAgICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICAgIH1cbiAgICApLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG4gICAgICAuLi5lZmZlY3RzLFxuICAgIF0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5lbnRpdHlTZXJ2aWNlcyxcbiAgICAuLi5wcm92aWRlcnMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5TW9kdWxlIHsgfVxuIl19