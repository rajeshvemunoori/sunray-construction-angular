/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tokenProviders as storeTokenProviders, buildFeatureInitialState, WORDPRESS_FEATURE_REDUCER, } from './store/index';
import { featureName } from './config/index';
import { services, EntityEffects as WordpressEntityEffects, } from './services/index';
export class ApiModule {
}
ApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(featureName, WORDPRESS_FEATURE_REDUCER, {
                        initialState: buildFeatureInitialState
                    }),
                    EffectsModule.forFeature([WordpressEntityEffects]),
                ],
                providers: [
                    ...services,
                    ...storeTokenProviders,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXhDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBUSxhQUFhLENBQUE7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUU3QyxPQUFPLEVBQ0wsY0FBYyxJQUFJLG1CQUFtQixFQUNyQyx3QkFBd0IsRUFDeEIseUJBQXlCLEdBQzFCLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUU1QyxPQUFPLEVBQ0wsUUFBUSxFQUNSLGFBQWEsSUFBSSxzQkFBc0IsR0FDeEMsTUFBTSxrQkFBa0IsQ0FBQTtBQWtCekIsTUFBTSxPQUFPLFNBQVM7OztZQWhCckIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsVUFBVSxDQUNwQixXQUFXLEVBQ1gseUJBQXlCLEVBQ3pCO3dCQUNFLFlBQVksRUFBRSx3QkFBd0I7cUJBQ3ZDLENBQ0Y7b0JBQ0QsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ25EO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxHQUFHLFFBQVE7b0JBQ1gsR0FBRyxtQkFBbUI7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gICBmcm9tICdAbmdyeC9zdG9yZSdcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuXG5pbXBvcnQge1xuICB0b2tlblByb3ZpZGVycyBhcyBzdG9yZVRva2VuUHJvdmlkZXJzLFxuICBidWlsZEZlYXR1cmVJbml0aWFsU3RhdGUsXG4gIFdPUkRQUkVTU19GRUFUVVJFX1JFRFVDRVIsXG59IGZyb20gJy4vc3RvcmUvaW5kZXgnXG5cbmltcG9ydCB7IGZlYXR1cmVOYW1lIH0gZnJvbSAnLi9jb25maWcvaW5kZXgnXG5cbmltcG9ydCB7XG4gIHNlcnZpY2VzLFxuICBFbnRpdHlFZmZlY3RzIGFzIFdvcmRwcmVzc0VudGl0eUVmZmVjdHMsXG59IGZyb20gJy4vc2VydmljZXMvaW5kZXgnXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFxuICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICBXT1JEUFJFU1NfRkVBVFVSRV9SRURVQ0VSLFxuICAgICAge1xuICAgICAgICBpbml0aWFsU3RhdGU6IGJ1aWxkRmVhdHVyZUluaXRpYWxTdGF0ZVxuICAgICAgfVxuICAgICksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtXb3JkcHJlc3NFbnRpdHlFZmZlY3RzXSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnNlcnZpY2VzLFxuICAgIC4uLnN0b3JlVG9rZW5Qcm92aWRlcnMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIHt9XG4iXX0=