/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { MatDialogModule, } from '@angular/material';
/** @type {?} */
const angularMaterialModules = [
    MatDialogModule,
];
import { SharedDeclarablesModule } from '../../declarables/index';
import { components } from './components/components';
import { services } from './services/services';
import { dialogTokenProviders } from './tokens/index';
export class CeoDialogsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CeoDialogsModule,
            providers: [
                ...services,
                ...dialogTokenProviders,
            ],
        };
    }
}
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
                declarations: [
                    ...components,
                ],
                exports: [
                    ...components,
                ],
                entryComponents: [
                    ...components,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGlhbG9ncy9kaWFsb2dzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFVLGVBQWUsQ0FBQTtBQUM1QyxPQUFPLEVBQ0wsV0FBVyxFQUNYLG1CQUFtQixFQUNwQixNQUFNLGdCQUFnQixDQUFBO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBUSxpQkFBaUIsQ0FBQTtBQUVoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUVoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQVcsa0JBQWtCLENBQUE7QUFHdkQsT0FBTyxFQUNMLGVBQWUsR0FDaEIsTUFBTSxtQkFBbUIsQ0FBQTs7TUFFcEIsc0JBQXNCLEdBQVU7SUFDcEMsZUFBZTtDQUNoQjtBQUVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBRWpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFzQnJELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxRQUFRO2dCQUNYLEdBQUcsb0JBQW9CO2FBQ3hCO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztZQTdCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxVQUFVO2lCQUNkO2dCQUNELGVBQWUsRUFBRTtvQkFDZixHQUFHLFVBQVU7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuXG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnXG5cbmltcG9ydCB7IE5nc1JldmVhbE1vZHVsZSB9ICAgICAgZnJvbSAnbmd4LXNjcm9sbHJldmVhbCdcblxuXG5pbXBvcnQge1xuICBNYXREaWFsb2dNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJ1xuXG5jb25zdCBhbmd1bGFyTWF0ZXJpYWxNb2R1bGVzOiBhbnlbXSA9IFtcbiAgTWF0RGlhbG9nTW9kdWxlLFxuXVxuXG5pbXBvcnQgeyBTaGFyZWREZWNsYXJhYmxlc01vZHVsZSB9IGZyb20gJy4uLy4uL2RlY2xhcmFibGVzL2luZGV4J1xuXG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBzZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZXMnXG5pbXBvcnQgeyBkaWFsb2dUb2tlblByb3ZpZGVycyB9IGZyb20gJy4vdG9rZW5zL2luZGV4J1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmdiRGF0ZXBpY2tlck1vZHVsZSxcbiAgICBOZ3NSZXZlYWxNb2R1bGUsXG4gICAgYW5ndWxhck1hdGVyaWFsTW9kdWxlcyxcbiAgICBTaGFyZWREZWNsYXJhYmxlc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2VvRGlhbG9nc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2VvRGlhbG9nc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5zZXJ2aWNlcyxcbiAgICAgICAgLi4uZGlhbG9nVG9rZW5Qcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH1cbiAgfVxufVxuXG4iXX0=