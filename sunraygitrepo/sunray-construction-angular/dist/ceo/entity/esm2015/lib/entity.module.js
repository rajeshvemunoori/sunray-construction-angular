/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, initialState, reducer, } from './state/state';
import { services } from './services/index';
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
                    ...services,
                    ...providers,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFzQixhQUFhLENBQUE7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUU3QyxPQUFPLEVBQ0wsT0FBTyxFQUNQLFlBQVksRUFDWixPQUFPLEdBQ1IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBSyxjQUFjLENBQUE7QUFzQnZDLE1BQU0sT0FBTyxZQUFZOzs7WUFuQnhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FDcEIsUUFBUSxFQUNSLE9BQU8sRUFDUDt3QkFDRSxZQUFZLEVBQUUsWUFBWTtxQkFDM0IsQ0FDRjtvQkFDRCxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN2QixHQUFHLE9BQU87cUJBQ1gsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsU0FBUyxFQUFFO29CQUNULEdBQUcsUUFBUTtvQkFDWCxHQUFHLFNBQVM7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSAgICAgICAgICAgICAgICAgZnJvbSAnQG5ncngvc3RvcmUnXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cydcblxuaW1wb3J0IHtcbiAgZWZmZWN0cyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2VyLFxufSBmcm9tICcuL3N0YXRlL3N0YXRlJ1xuXG5pbXBvcnQgeyBzZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnXG5pbXBvcnQgeyBwcm92aWRlcnMgfWZyb20gJy4vdXRpbC9pbmRleCdcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcbiAgICAgICdlbnRpdHknLFxuICAgICAgcmVkdWNlcixcbiAgICAgIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgICB9XG4gICAgKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgLi4uZWZmZWN0cyxcbiAgICBdKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uc2VydmljZXMsXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eU1vZHVsZSB7IH1cbiJdfQ==