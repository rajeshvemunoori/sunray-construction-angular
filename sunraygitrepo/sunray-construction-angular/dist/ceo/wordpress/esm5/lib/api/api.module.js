/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tokenProviders as storeTokenProviders, buildFeatureInitialState, WORDPRESS_FEATURE_REDUCER, } from './store/index';
import { featureName } from './config/index';
import { services, EntityEffects as WordpressEntityEffects, } from './services/index';
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(featureName, WORDPRESS_FEATURE_REDUCER, {
                            initialState: buildFeatureInitialState
                        }),
                        EffectsModule.forFeature([WordpressEntityEffects]),
                    ],
                    providers: tslib_1.__spread(services, storeTokenProviders)
                },] }
    ];
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUV4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQVEsYUFBYSxDQUFBO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFN0MsT0FBTyxFQUNMLGNBQWMsSUFBSSxtQkFBbUIsRUFDckMsd0JBQXdCLEVBQ3hCLHlCQUF5QixHQUMxQixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFNUMsT0FBTyxFQUNMLFFBQVEsRUFDUixhQUFhLElBQUksc0JBQXNCLEdBQ3hDLE1BQU0sa0JBQWtCLENBQUE7QUFFekI7SUFBQTtJQWdCd0IsQ0FBQzs7Z0JBaEJ4QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxVQUFVLENBQ3BCLFdBQVcsRUFDWCx5QkFBeUIsRUFDekI7NEJBQ0UsWUFBWSxFQUFFLHdCQUF3Qjt5QkFDdkMsQ0FDRjt3QkFDRCxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztxQkFDbkQ7b0JBQ0QsU0FBUyxtQkFDSixRQUFRLEVBQ1IsbUJBQW1CLENBQ3ZCO2lCQUNGOztJQUN1QixnQkFBQztDQUFBLEFBaEJ6QixJQWdCeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9ICAgZnJvbSAnQG5ncngvc3RvcmUnXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cydcblxuaW1wb3J0IHtcbiAgdG9rZW5Qcm92aWRlcnMgYXMgc3RvcmVUb2tlblByb3ZpZGVycyxcbiAgYnVpbGRGZWF0dXJlSW5pdGlhbFN0YXRlLFxuICBXT1JEUFJFU1NfRkVBVFVSRV9SRURVQ0VSLFxufSBmcm9tICcuL3N0b3JlL2luZGV4J1xuXG5pbXBvcnQgeyBmZWF0dXJlTmFtZSB9IGZyb20gJy4vY29uZmlnL2luZGV4J1xuXG5pbXBvcnQge1xuICBzZXJ2aWNlcyxcbiAgRW50aXR5RWZmZWN0cyBhcyBXb3JkcHJlc3NFbnRpdHlFZmZlY3RzLFxufSBmcm9tICcuL3NlcnZpY2VzL2luZGV4J1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcbiAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgV09SRFBSRVNTX0ZFQVRVUkVfUkVEVUNFUixcbiAgICAgIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlOiBidWlsZEZlYXR1cmVJbml0aWFsU3RhdGVcbiAgICAgIH1cbiAgICApLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbV29yZHByZXNzRW50aXR5RWZmZWN0c10pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5zZXJ2aWNlcyxcbiAgICAuLi5zdG9yZVRva2VuUHJvdmlkZXJzLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7fVxuIl19