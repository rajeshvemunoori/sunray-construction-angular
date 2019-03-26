/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, initialState, reducer, } from './state/state';
import { entityServices } from './services/index';
import { providers } from './util/index';
export class EntityModule {
}
EntityModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('entity', reducer, {
                        initialState: initialState,
                    }),
                    EffectsModule.forFeature([
                        ...effects,
                    ]),
                ],
                declarations: [],
                providers: [
                    ...entityServices,
                    ...providers,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS9lbnRpdHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXhDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBc0IsYUFBYSxDQUFBO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFN0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osT0FBTyxHQUNSLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQUssY0FBYyxDQUFBO0FBc0J2QyxNQUFNLE9BQU8sWUFBWTs7O1lBbkJ4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVcsQ0FBQyxVQUFVLENBQ3BCLFFBQVEsRUFDUixPQUFPLEVBQ1A7d0JBQ0UsWUFBWSxFQUFFLFlBQVk7cUJBQzNCLENBQ0Y7b0JBQ0QsYUFBYSxDQUFDLFVBQVUsQ0FBQzt3QkFDdkIsR0FBRyxPQUFPO3FCQUNYLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLFNBQVMsRUFBRTtvQkFDVCxHQUFHLGNBQWM7b0JBQ2pCLEdBQUcsU0FBUztpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9ICAgICAgICAgICAgICAgICBmcm9tICdAbmdyeC9zdG9yZSdcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuXG5pbXBvcnQge1xuICBlZmZlY3RzLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXIsXG59IGZyb20gJy4vc3RhdGUvc3RhdGUnXG5cbmltcG9ydCB7IGVudGl0eVNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCdcbmltcG9ydCB7IHByb3ZpZGVycyB9ZnJvbSAnLi91dGlsL2luZGV4J1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFxuICAgICAgJ2VudGl0eScsXG4gICAgICByZWR1Y2VyLFxuICAgICAge1xuICAgICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICAgIH1cbiAgICApLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG4gICAgICAuLi5lZmZlY3RzLFxuICAgIF0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5lbnRpdHlTZXJ2aWNlcyxcbiAgICAuLi5wcm92aWRlcnMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5TW9kdWxlIHsgfVxuIl19