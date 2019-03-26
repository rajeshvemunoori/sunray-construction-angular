/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, initialState, reducer, } from './state/state';
import { services } from './services/index';
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
                    providers: tslib_1.__spread(services, providers)
                },] }
    ];
    return EntityModule;
}());
export { EntityModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXhDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBc0IsYUFBYSxDQUFBO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFN0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osT0FBTyxHQUNSLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQUssY0FBYyxDQUFBO0FBR3ZDO0lBQUE7SUFtQjRCLENBQUM7O2dCQW5CNUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsVUFBVSxDQUNwQixRQUFRLEVBQ1IsT0FBTyxFQUNQOzRCQUNFLFlBQVksRUFBRSxZQUFZO3lCQUMzQixDQUNGO3dCQUNELGFBQWEsQ0FBQyxVQUFVLGtCQUNuQixPQUFPLEVBQ1Y7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFNBQVMsbUJBQ0osUUFBUSxFQUNSLFNBQVMsQ0FDYjtpQkFDRjs7SUFDMkIsbUJBQUM7Q0FBQSxBQW5CN0IsSUFtQjZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gICAgICAgICAgICAgICAgIGZyb20gJ0BuZ3J4L3N0b3JlJ1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnXG5cbmltcG9ydCB7XG4gIGVmZmVjdHMsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcixcbn0gZnJvbSAnLi9zdGF0ZS9zdGF0ZSdcblxuaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4J1xuaW1wb3J0IHsgcHJvdmlkZXJzIH1mcm9tICcuL3V0aWwvaW5kZXgnXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXG4gICAgICAnZW50aXR5JyxcbiAgICAgIHJlZHVjZXIsXG4gICAgICB7XG4gICAgICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgICAgfVxuICAgICksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcbiAgICAgIC4uLmVmZmVjdHMsXG4gICAgXSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnNlcnZpY2VzLFxuICAgIC4uLnByb3ZpZGVycyxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlNb2R1bGUgeyB9XG4iXX0=