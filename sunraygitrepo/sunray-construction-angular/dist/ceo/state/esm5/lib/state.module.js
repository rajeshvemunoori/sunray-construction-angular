/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
//import { StoreDevtoolsModule }         from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer, } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, initialState } from './state';
import { effects } from './effects/index';
import { services } from './services/index';
import { ApplicationConfigEffects, RouterCustomSerializer, SystemComponentsEffects, } from './slices/index';
// @DEEPAK, @JEETHU
// This method (used below in the *serialize*
// option for the StoreDevtoolsModule,
// can be used for adding in the name to be displayed for the action.
// (now it's always showing "<UNDEFINED>"
// More Info:
// https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md
// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#serialize
//let storeDevtoolsReplacer = (key, value) => {
//  return value
//}
//@ts-ignore
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forRoot(reducer, {
                            initialState: initialState,
                        }),
                        EffectsModule.forRoot(tslib_1.__spread(effects, [
                            ApplicationConfigEffects,
                            SystemComponentsEffects,
                        ])),
                        //@ts-ignore: This is the correct interface
                        //for some reason, the ngrx store-devtools package
                        //does not have this correct interface,
                        //they say *serialize* should be just boolean.
                        //See links above for more info.
                        // TODO -- This is not working when moved to the @ceo/state package
                        //StoreDevtoolsModule.instrument({
                        //  name: "SunRay",
                        //  //name: environment.applicationName,
                        //  maxAge: 25,
                        //  serialize: {
                        //    replacer: "storeDevtoolsReplacer",
                        //  },
                        //}),
                        StoreRouterConnectingModule.forRoot({
                            stateKey: 'router',
                        }),
                    ],
                    declarations: [],
                    providers: tslib_1.__spread(services, [
                        {
                            provide: RouterStateSerializer,
                            useClass: RouterCustomSerializer
                        }
                    ]),
                },] }
    ];
    return StateModule;
}());
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zdGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBOztBQUl4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQXNCLGFBQWEsQ0FBQTtBQUN6RCxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLHFCQUFxQixHQUN0QixNQUFNLG9CQUFvQixDQUFBO0FBQzNCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTyxTQUFTLENBQUE7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFxQixpQkFBaUIsQ0FBQTtBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQW9CLGtCQUFrQixDQUFBO0FBRXpELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLHVCQUF1QixHQUN4QixNQUFNLGdCQUFnQixDQUFBOzs7Ozs7Ozs7Ozs7O0FBZXZCO0lBQUE7SUF3QzBCLENBQUM7O2dCQXhDMUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsT0FBTyxDQUNqQixPQUFPLEVBQ1A7NEJBQ0UsWUFBWSxFQUFFLFlBQVk7eUJBQzNCLENBQ0Y7d0JBQ0QsYUFBYSxDQUFDLE9BQU8sa0JBQ2hCLE9BQU87NEJBQ1Ysd0JBQXdCOzRCQUN4Qix1QkFBdUI7MkJBQ3ZCO3dCQUNGLDJDQUEyQzt3QkFDM0Msa0RBQWtEO3dCQUNsRCx1Q0FBdUM7d0JBQ3ZDLDhDQUE4Qzt3QkFDOUMsZ0NBQWdDO3dCQUNoQyxtRUFBbUU7d0JBQ25FLGtDQUFrQzt3QkFDbEMsbUJBQW1CO3dCQUNuQix3Q0FBd0M7d0JBQ3hDLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix3Q0FBd0M7d0JBQ3hDLE1BQU07d0JBQ04sS0FBSzt3QkFDTCwyQkFBMkIsQ0FBQyxPQUFPLENBQUM7NEJBQ2xDLFFBQVEsRUFBRSxRQUFRO3lCQUNuQixDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixTQUFTLG1CQUNKLFFBQVE7d0JBQ1g7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLHNCQUFzQjt5QkFDakM7c0JBQ0Y7aUJBQ0Y7O0lBQ3lCLGtCQUFDO0NBQUEsQUF4QzNCLElBd0MyQjtTQUFkLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbi8vaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9ICAgICAgICAgZnJvbSAnQG5ncngvc3RvcmUtZGV2dG9vbHMnXG5cbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gICAgICAgICAgICAgICAgIGZyb20gJ0BuZ3J4L3N0b3JlJ1xuaW1wb3J0IHtcbiAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLFxuICBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIsXG59IGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSdcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuXG5pbXBvcnQgeyByZWR1Y2VyLCBpbml0aWFsU3RhdGUgfSAgZnJvbSAnLi9zdGF0ZSdcbmltcG9ydCB7IGVmZmVjdHMgfSAgICAgICAgICAgICAgICBmcm9tICcuL2VmZmVjdHMvaW5kZXgnXG5pbXBvcnQgeyBzZXJ2aWNlcyB9ICAgICAgICAgICAgICAgZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgQXBwbGljYXRpb25Db25maWdFZmZlY3RzLFxuICBSb3V0ZXJDdXN0b21TZXJpYWxpemVyLFxuICBTeXN0ZW1Db21wb25lbnRzRWZmZWN0cyxcbn0gZnJvbSAnLi9zbGljZXMvaW5kZXgnXG5cbi8vIEBERUVQQUssIEBKRUVUSFVcbi8vIFRoaXMgbWV0aG9kICh1c2VkIGJlbG93IGluIHRoZSAqc2VyaWFsaXplKlxuLy8gb3B0aW9uIGZvciB0aGUgU3RvcmVEZXZ0b29sc01vZHVsZSxcbi8vIGNhbiBiZSB1c2VkIGZvciBhZGRpbmcgaW4gdGhlIG5hbWUgdG8gYmUgZGlzcGxheWVkIGZvciB0aGUgYWN0aW9uLlxuLy8gKG5vdyBpdCdzIGFsd2F5cyBzaG93aW5nIFwiPFVOREVGSU5FRD5cIlxuLy8gTW9yZSBJbmZvOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25ncngvcGxhdGZvcm0vYmxvYi9tYXN0ZXIvZG9jcy9zdG9yZS1kZXZ0b29scy9SRUFETUUubWRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96YWxtb3hpc3VzL3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9ibG9iL21hc3Rlci9kb2NzL0FQSS9Bcmd1bWVudHMubWQjc2VyaWFsaXplXG4vL2xldCBzdG9yZURldnRvb2xzUmVwbGFjZXIgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuLy8gIHJldHVybiB2YWx1ZVxuLy99XG5cbi8vQHRzLWlnbm9yZVxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvclJvb3QoXG4gICAgICByZWR1Y2VyLFxuICAgICAge1xuICAgICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICAgIH1cbiAgICApLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXG4gICAgICAuLi5lZmZlY3RzLFxuICAgICAgQXBwbGljYXRpb25Db25maWdFZmZlY3RzLFxuICAgICAgU3lzdGVtQ29tcG9uZW50c0VmZmVjdHMsXG4gICAgXSksXG4gICAgLy9AdHMtaWdub3JlOiBUaGlzIGlzIHRoZSBjb3JyZWN0IGludGVyZmFjZVxuICAgIC8vZm9yIHNvbWUgcmVhc29uLCB0aGUgbmdyeCBzdG9yZS1kZXZ0b29scyBwYWNrYWdlXG4gICAgLy9kb2VzIG5vdCBoYXZlIHRoaXMgY29ycmVjdCBpbnRlcmZhY2UsXG4gICAgLy90aGV5IHNheSAqc2VyaWFsaXplKiBzaG91bGQgYmUganVzdCBib29sZWFuLlxuICAgIC8vU2VlIGxpbmtzIGFib3ZlIGZvciBtb3JlIGluZm8uXG4gICAgLy8gVE9ETyAtLSBUaGlzIGlzIG5vdCB3b3JraW5nIHdoZW4gbW92ZWQgdG8gdGhlIEBjZW8vc3RhdGUgcGFja2FnZVxuICAgIC8vU3RvcmVEZXZ0b29sc01vZHVsZS5pbnN0cnVtZW50KHtcbiAgICAvLyAgbmFtZTogXCJTdW5SYXlcIixcbiAgICAvLyAgLy9uYW1lOiBlbnZpcm9ubWVudC5hcHBsaWNhdGlvbk5hbWUsXG4gICAgLy8gIG1heEFnZTogMjUsXG4gICAgLy8gIHNlcmlhbGl6ZToge1xuICAgIC8vICAgIHJlcGxhY2VyOiBcInN0b3JlRGV2dG9vbHNSZXBsYWNlclwiLFxuICAgIC8vICB9LFxuICAgIC8vfSksXG4gICAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgc3RhdGVLZXk6ICdyb3V0ZXInLFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5zZXJ2aWNlcyxcbiAgICB7XG4gICAgICBwcm92aWRlOiBSb3V0ZXJTdGF0ZVNlcmlhbGl6ZXIsXG4gICAgICB1c2VDbGFzczogUm91dGVyQ3VzdG9tU2VyaWFsaXplclxuICAgIH1cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVNb2R1bGUge31cbiJdfQ==