/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule, MatCheckboxModule, } from '@angular/material';
import { SharedDeclarablesModule } from '../../declarables/index';
import { components } from './components/components';
import { services } from './services/services';
/** @type {?} */
const angularMaterialModules = [
    MatRadioModule,
    MatCheckboxModule,
];
export class CeoFormsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CeoFormsModule,
            providers: [
                ...services,
            ],
        };
    }
}
CeoFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    NgbDatepickerModule,
                    angularMaterialModules,
                    SharedDeclarablesModule,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    ...components,
                ],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2Zvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFVLGVBQWUsQ0FBQTtBQUM1QyxPQUFPLEVBQ0wsV0FBVyxFQUNYLG1CQUFtQixFQUNwQixNQUFNLGdCQUFnQixDQUFBO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBUSxpQkFBaUIsQ0FBQTtBQUVoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUVoRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGlCQUFpQixHQUNsQixNQUFNLG1CQUFtQixDQUFBO0FBRTFCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBRWpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVEscUJBQXFCLENBQUE7O01BRTFDLHNCQUFzQixHQUFVO0lBQ3BDLGNBQWM7SUFDZCxpQkFBaUI7Q0FFbEI7QUFvQkQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEdBQUcsUUFBUTthQUNaO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztZQTFCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qix1QkFBdUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxlQUFlLEVBQUUsRUFDaEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuXG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnXG5cbmltcG9ydCB7XG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnXG5cbmltcG9ydCB7IFNoYXJlZERlY2xhcmFibGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cydcbmltcG9ydCB7IHNlcnZpY2VzIH0gICBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzJ1xuXG5jb25zdCBhbmd1bGFyTWF0ZXJpYWxNb2R1bGVzOiBhbnlbXSA9IFtcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuXG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ2JEYXRlcGlja2VyTW9kdWxlLFxuICAgIGFuZ3VsYXJNYXRlcmlhbE1vZHVsZXMsXG4gICAgU2hhcmVkRGVjbGFyYWJsZXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDZW9Gb3Jtc01vZHVsZXtcbiAgc3RhdGljIGZvclJvb3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDZW9Gb3Jtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5zZXJ2aWNlcyxcbiAgICAgIF0sXG4gICAgfVxuICB9XG59XG4iXX0=