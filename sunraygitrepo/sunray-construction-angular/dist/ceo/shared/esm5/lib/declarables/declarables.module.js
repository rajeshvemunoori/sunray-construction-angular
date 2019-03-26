/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var angularMaterialModules = [
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
var DeclarablesModule = /** @class */ (function () {
    function DeclarablesModule() {
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
                    declarations: tslib_1.__spread(directives, pipes, components, pages),
                    exports: tslib_1.__spread(components, pages, directives, pipes),
                    entryComponents: tslib_1.__spread(components, pages)
                },] }
    ];
    return DeclarablesModule;
}());
export { DeclarablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYWJsZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYWJsZXMvZGVjbGFyYWJsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFVLGVBQWUsQ0FBQTtBQUM1QyxPQUFPLEVBQ0wsV0FBVyxFQUNYLG1CQUFtQixFQUNwQixNQUFNLGdCQUFnQixDQUFBO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBUSxpQkFBaUIsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQVEsaUJBQWlCLENBQUE7QUFFaEQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixjQUFjLEVBQ2Qsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUE7QUFFbkMsT0FBTyxFQUNMLGVBQWUsRUFBRSxpQkFBaUIsRUFDbEMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQ3hDLGtCQUFrQixFQUFFLGNBQWMsRUFDbEMsY0FBYyxFQUFFLGVBQWUsRUFDL0IsYUFBYSxFQUFFLGVBQWUsR0FDL0IsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBVyxlQUFlLENBQUE7QUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFXLGVBQWUsQ0FBQTs7SUFFcEMsc0JBQXNCLEdBQVU7SUFDcEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtDQUNoQjtBQUVEO0lBQUE7SUFnQ2lDLENBQUM7O2dCQWhDakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGNBQWM7NEJBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7eUJBQy9CO3FCQUNGO29CQUNELFlBQVksbUJBQ1AsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLEVBQ1YsS0FBSyxDQUNUO29CQUNELE9BQU8sbUJBQ0YsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLEVBQ1YsS0FBSyxDQUNUO29CQUNELGVBQWUsbUJBQ1YsVUFBVSxFQUNWLEtBQUssQ0FDVDtpQkFDRjs7SUFDZ0Msd0JBQUM7Q0FBQSxBQWhDbEMsSUFnQ2tDO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9jb21tb24nXG5cbmltcG9ydCB7XG4gIE5nYkRhdGVwaWNrZXJNb2R1bGUsXG4gIE5nYkRhdGVBZGFwdGVyLFxuICBOZ2JEYXRlTmF0aXZlQWRhcHRlcixcbn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnXG5cbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLCBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsIE1hdERpYWxvZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnXG5cbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnXG5pbXBvcnQgeyBkaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4J1xuaW1wb3J0IHsgcGFnZXMgfSAgICAgIGZyb20gJy4vcGFnZXMvaW5kZXgnXG5pbXBvcnQgeyBwaXBlcyB9ICAgICAgZnJvbSAnLi9waXBlcy9pbmRleCdcblxuY29uc3QgYW5ndWxhck1hdGVyaWFsTW9kdWxlczogYW55W10gPSBbXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdERpYWxvZ01vZHVsZSxcbl1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBOZ2JEYXRlcGlja2VyTW9kdWxlLFxuICAgIGFuZ3VsYXJNYXRlcmlhbE1vZHVsZXMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5nYkRhdGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE5nYkRhdGVOYXRpdmVBZGFwdGVyXG4gICAgfSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uZGlyZWN0aXZlcyxcbiAgICAuLi5waXBlcyxcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIC4uLnBhZ2VzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5wYWdlcyxcbiAgICAuLi5kaXJlY3RpdmVzLFxuICAgIC4uLnBpcGVzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIC4uLnBhZ2VzLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERlY2xhcmFibGVzTW9kdWxlIHsgfVxuIl19