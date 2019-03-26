/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { MatDialogModule, } from '@angular/material';
/** @type {?} */
var angularMaterialModules = [
    MatDialogModule,
];
import { SharedDeclarablesModule } from '../../declarables/index';
import { components } from './components/components';
import { services } from './services/services';
import { dialogTokenProviders } from './tokens/index';
var CeoDialogsModule = /** @class */ (function () {
    function CeoDialogsModule() {
    }
    /**
     * @return {?}
     */
    CeoDialogsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CeoDialogsModule,
            providers: tslib_1.__spread(services, dialogTokenProviders),
        };
    };
    CeoDialogsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        NgbDatepickerModule,
                        NgsRevealModule,
                        angularMaterialModules,
                        SharedDeclarablesModule,
                    ],
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components),
                    entryComponents: tslib_1.__spread(components)
                },] }
    ];
    return CeoDialogsModule;
}());
export { CeoDialogsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGlhbG9ncy9kaWFsb2dzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBVSxlQUFlLENBQUE7QUFDNUMsT0FBTyxFQUNMLFdBQVcsRUFDWCxtQkFBbUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQVEsaUJBQWlCLENBQUE7QUFFaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFXLGtCQUFrQixDQUFBO0FBR3ZELE9BQU8sRUFDTCxlQUFlLEdBQ2hCLE1BQU0sbUJBQW1CLENBQUE7O0lBRXBCLHNCQUFzQixHQUFVO0lBQ3BDLGVBQWU7Q0FDaEI7QUFFRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRXJEO0lBQUE7SUE4QkEsQ0FBQzs7OztJQVRRLHdCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsbUJBQ0osUUFBUSxFQUNSLG9CQUFvQixDQUN4QjtTQUNGLENBQUE7SUFDSCxDQUFDOztnQkE3QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysc0JBQXNCO3dCQUN0Qix1QkFBdUI7cUJBQ3hCO29CQUNELFlBQVksbUJBQ1AsVUFBVSxDQUNkO29CQUNELE9BQU8sbUJBQ0YsVUFBVSxDQUNkO29CQUNELGVBQWUsbUJBQ1YsVUFBVSxDQUNkO2lCQUNGOztJQVdELHVCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FWWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcblxuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJ1xuXG5pbXBvcnQgeyBOZ3NSZXZlYWxNb2R1bGUgfSAgICAgIGZyb20gJ25neC1zY3JvbGxyZXZlYWwnXG5cblxuaW1wb3J0IHtcbiAgTWF0RGlhbG9nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCdcblxuY29uc3QgYW5ndWxhck1hdGVyaWFsTW9kdWxlczogYW55W10gPSBbXG4gIE1hdERpYWxvZ01vZHVsZSxcbl1cblxuaW1wb3J0IHsgU2hhcmVkRGVjbGFyYWJsZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9kZWNsYXJhYmxlcy9pbmRleCdcblxuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnRzJ1xuaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzJ1xuaW1wb3J0IHsgZGlhbG9nVG9rZW5Qcm92aWRlcnMgfSBmcm9tICcuL3Rva2Vucy9pbmRleCdcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nYkRhdGVwaWNrZXJNb2R1bGUsXG4gICAgTmdzUmV2ZWFsTW9kdWxlLFxuICAgIGFuZ3VsYXJNYXRlcmlhbE1vZHVsZXMsXG4gICAgU2hhcmVkRGVjbGFyYWJsZXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENlb0RpYWxvZ3NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENlb0RpYWxvZ3NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uc2VydmljZXMsXG4gICAgICAgIC4uLmRpYWxvZ1Rva2VuUHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9XG4gIH1cbn1cblxuIl19