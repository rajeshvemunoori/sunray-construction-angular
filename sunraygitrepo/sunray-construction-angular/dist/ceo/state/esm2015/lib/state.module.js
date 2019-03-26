/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StateModule {
}
StateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forRoot(reducer, {
                        initialState: initialState,
                    }),
                    EffectsModule.forRoot([
                        ...effects,
                        ApplicationConfigEffects,
                        SystemComponentsEffects,
                    ]),
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
                providers: [
                    ...services,
                    {
                        provide: RouterStateSerializer,
                        useClass: RouterCustomSerializer
                    }
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zdGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBSXhDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBc0IsYUFBYSxDQUFBO0FBQ3pELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IscUJBQXFCLEdBQ3RCLE1BQU0sb0JBQW9CLENBQUE7QUFDM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFPLFNBQVMsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQXFCLGlCQUFpQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBb0Isa0JBQWtCLENBQUE7QUFFekQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsdUJBQXVCLEdBQ3hCLE1BQU0sZ0JBQWdCLENBQUE7Ozs7Ozs7Ozs7Ozs7QUF1RHZCLE1BQU0sT0FBTyxXQUFXOzs7WUF4Q3ZCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLE9BQU8sQ0FDakIsT0FBTyxFQUNQO3dCQUNFLFlBQVksRUFBRSxZQUFZO3FCQUMzQixDQUNGO29CQUNELGFBQWEsQ0FBQyxPQUFPLENBQUM7d0JBQ3BCLEdBQUcsT0FBTzt3QkFDVix3QkFBd0I7d0JBQ3hCLHVCQUF1QjtxQkFDeEIsQ0FBQztvQkFDRiwyQ0FBMkM7b0JBQzNDLGtEQUFrRDtvQkFDbEQsdUNBQXVDO29CQUN2Qyw4Q0FBOEM7b0JBQzlDLGdDQUFnQztvQkFDaEMsbUVBQW1FO29CQUNuRSxrQ0FBa0M7b0JBQ2xDLG1CQUFtQjtvQkFDbkIsd0NBQXdDO29CQUN4QyxlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsd0NBQXdDO29CQUN4QyxNQUFNO29CQUNOLEtBQUs7b0JBQ0wsMkJBQTJCLENBQUMsT0FBTyxDQUFDO3dCQUNsQyxRQUFRLEVBQUUsUUFBUTtxQkFDbkIsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsU0FBUyxFQUFFO29CQUNULEdBQUcsUUFBUTtvQkFDWDt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsc0JBQXNCO3FCQUNqQztpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG4vL2ltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSAgICAgICAgIGZyb20gJ0BuZ3J4L3N0b3JlLWRldnRvb2xzJ1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9ICAgICAgICAgICAgICAgICBmcm9tICdAbmdyeC9zdG9yZSdcbmltcG9ydCB7XG4gIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZSxcbiAgUm91dGVyU3RhdGVTZXJpYWxpemVyLFxufSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cydcblxuaW1wb3J0IHsgcmVkdWNlciwgaW5pdGlhbFN0YXRlIH0gIGZyb20gJy4vc3RhdGUnXG5pbXBvcnQgeyBlZmZlY3RzIH0gICAgICAgICAgICAgICAgZnJvbSAnLi9lZmZlY3RzL2luZGV4J1xuaW1wb3J0IHsgc2VydmljZXMgfSAgICAgICAgICAgICAgIGZyb20gJy4vc2VydmljZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uQ29uZmlnRWZmZWN0cyxcbiAgUm91dGVyQ3VzdG9tU2VyaWFsaXplcixcbiAgU3lzdGVtQ29tcG9uZW50c0VmZmVjdHMsXG59IGZyb20gJy4vc2xpY2VzL2luZGV4J1xuXG4vLyBAREVFUEFLLCBASkVFVEhVXG4vLyBUaGlzIG1ldGhvZCAodXNlZCBiZWxvdyBpbiB0aGUgKnNlcmlhbGl6ZSpcbi8vIG9wdGlvbiBmb3IgdGhlIFN0b3JlRGV2dG9vbHNNb2R1bGUsXG4vLyBjYW4gYmUgdXNlZCBmb3IgYWRkaW5nIGluIHRoZSBuYW1lIHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIGFjdGlvbi5cbi8vIChub3cgaXQncyBhbHdheXMgc2hvd2luZyBcIjxVTkRFRklORUQ+XCJcbi8vIE1vcmUgSW5mbzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3J4L3BsYXRmb3JtL2Jsb2IvbWFzdGVyL2RvY3Mvc3RvcmUtZGV2dG9vbHMvUkVBRE1FLm1kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemFsbW94aXN1cy9yZWR1eC1kZXZ0b29scy1leHRlbnNpb24vYmxvYi9tYXN0ZXIvZG9jcy9BUEkvQXJndW1lbnRzLm1kI3NlcmlhbGl6ZVxuLy9sZXQgc3RvcmVEZXZ0b29sc1JlcGxhY2VyID0gKGtleSwgdmFsdWUpID0+IHtcbi8vICByZXR1cm4gdmFsdWVcbi8vfVxuXG4vL0B0cy1pZ25vcmVcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JSb290KFxuICAgICAgcmVkdWNlcixcbiAgICAgIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgICB9XG4gICAgKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvclJvb3QoW1xuICAgICAgLi4uZWZmZWN0cyxcbiAgICAgIEFwcGxpY2F0aW9uQ29uZmlnRWZmZWN0cyxcbiAgICAgIFN5c3RlbUNvbXBvbmVudHNFZmZlY3RzLFxuICAgIF0pLFxuICAgIC8vQHRzLWlnbm9yZTogVGhpcyBpcyB0aGUgY29ycmVjdCBpbnRlcmZhY2VcbiAgICAvL2ZvciBzb21lIHJlYXNvbiwgdGhlIG5ncnggc3RvcmUtZGV2dG9vbHMgcGFja2FnZVxuICAgIC8vZG9lcyBub3QgaGF2ZSB0aGlzIGNvcnJlY3QgaW50ZXJmYWNlLFxuICAgIC8vdGhleSBzYXkgKnNlcmlhbGl6ZSogc2hvdWxkIGJlIGp1c3QgYm9vbGVhbi5cbiAgICAvL1NlZSBsaW5rcyBhYm92ZSBmb3IgbW9yZSBpbmZvLlxuICAgIC8vIFRPRE8gLS0gVGhpcyBpcyBub3Qgd29ya2luZyB3aGVuIG1vdmVkIHRvIHRoZSBAY2VvL3N0YXRlIHBhY2thZ2VcbiAgICAvL1N0b3JlRGV2dG9vbHNNb2R1bGUuaW5zdHJ1bWVudCh7XG4gICAgLy8gIG5hbWU6IFwiU3VuUmF5XCIsXG4gICAgLy8gIC8vbmFtZTogZW52aXJvbm1lbnQuYXBwbGljYXRpb25OYW1lLFxuICAgIC8vICBtYXhBZ2U6IDI1LFxuICAgIC8vICBzZXJpYWxpemU6IHtcbiAgICAvLyAgICByZXBsYWNlcjogXCJzdG9yZURldnRvb2xzUmVwbGFjZXJcIixcbiAgICAvLyAgfSxcbiAgICAvL30pLFxuICAgIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIHN0YXRlS2V5OiAncm91dGVyJyxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uc2VydmljZXMsXG4gICAge1xuICAgICAgcHJvdmlkZTogUm91dGVyU3RhdGVTZXJpYWxpemVyLFxuICAgICAgdXNlQ2xhc3M6IFJvdXRlckN1c3RvbVNlcmlhbGl6ZXJcbiAgICB9XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlTW9kdWxlIHt9XG4iXX0=