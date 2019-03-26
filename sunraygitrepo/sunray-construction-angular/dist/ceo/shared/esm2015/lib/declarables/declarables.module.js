/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule, NgbDateAdapter, NgbDateNativeAdapter, } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatIconModule, MatDialogModule, } from '@angular/material';
import { components } from './components/index';
import { directives } from './directives/index';
import { pages } from './pages/index';
import { pipes } from './pipes/index';
/** @type {?} */
const angularMaterialModules = [
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
];
export class DeclarablesModule {
}
DeclarablesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    RouterModule,
                    NgbDatepickerModule,
                    angularMaterialModules,
                ],
                providers: [
                    {
                        provide: NgbDateAdapter,
                        useClass: NgbDateNativeAdapter
                    },
                ],
                declarations: [
                    ...directives,
                    ...pipes,
                    ...components,
                    ...pages,
                ],
                exports: [
                    ...components,
                    ...pages,
                    ...directives,
                    ...pipes,
                ],
                entryComponents: [
                    ...components,
                    ...pages,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYWJsZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvZGVjbGFyYWJsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVUsZUFBZSxDQUFBO0FBQzVDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ3BCLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFRLGlCQUFpQixDQUFBO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBUSxpQkFBaUIsQ0FBQTtBQUVoRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxvQkFBb0IsR0FDckIsTUFBTSw0QkFBNEIsQ0FBQTtBQUVuQyxPQUFPLEVBQ0wsZUFBZSxFQUFFLGlCQUFpQixFQUNsQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFDeEMsa0JBQWtCLEVBQUUsY0FBYyxFQUNsQyxjQUFjLEVBQUUsZUFBZSxFQUMvQixhQUFhLEVBQUUsZUFBZSxHQUMvQixNQUFNLG1CQUFtQixDQUFBO0FBRTFCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFXLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQVcsZUFBZSxDQUFBOztNQUVwQyxzQkFBc0IsR0FBVTtJQUNwQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0NBQ2hCO0FBa0NELE1BQU0sT0FBTyxpQkFBaUI7OztZQWhDN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsc0JBQXNCO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGNBQWM7d0JBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7cUJBQy9CO2lCQUNGO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxLQUFLO29CQUNSLEdBQUcsVUFBVTtvQkFDYixHQUFHLEtBQUs7aUJBQ1Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsVUFBVTtvQkFDYixHQUFHLEtBQUs7b0JBQ1IsR0FBRyxVQUFVO29CQUNiLEdBQUcsS0FBSztpQkFDVDtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsR0FBRyxVQUFVO29CQUNiLEdBQUcsS0FBSztpQkFDVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgTmdiRGF0ZXBpY2tlck1vZHVsZSxcbiAgTmdiRGF0ZUFkYXB0ZXIsXG4gIE5nYkRhdGVOYXRpdmVBZGFwdGVyLFxufSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCdcblxuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCdcblxuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCdcbmltcG9ydCB7IGRpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnXG5pbXBvcnQgeyBwYWdlcyB9ICAgICAgZnJvbSAnLi9wYWdlcy9pbmRleCdcbmltcG9ydCB7IHBpcGVzIH0gICAgICBmcm9tICcuL3BpcGVzL2luZGV4J1xuXG5jb25zdCBhbmd1bGFyTWF0ZXJpYWxNb2R1bGVzOiBhbnlbXSA9IFtcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE5nYkRhdGVwaWNrZXJNb2R1bGUsXG4gICAgYW5ndWxhck1hdGVyaWFsTW9kdWxlcyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTmdiRGF0ZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogTmdiRGF0ZU5hdGl2ZUFkYXB0ZXJcbiAgICB9LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5kaXJlY3RpdmVzLFxuICAgIC4uLnBpcGVzLFxuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4ucGFnZXMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIC4uLnBhZ2VzLFxuICAgIC4uLmRpcmVjdGl2ZXMsXG4gICAgLi4ucGlwZXMsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4ucGFnZXMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVjbGFyYWJsZXNNb2R1bGUgeyB9XG4iXX0=