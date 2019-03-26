/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule, MatCheckboxModule, } from '@angular/material';
import { SharedDeclarablesModule } from '../../declarables/index';
import { components } from './components/components';
import { services } from './services/services';
/** @type {?} */
var angularMaterialModules = [
    MatRadioModule,
    MatCheckboxModule,
];
var CeoFormsModule = /** @class */ (function () {
    function CeoFormsModule() {
    }
    /**
     * @return {?}
     */
    CeoFormsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CeoFormsModule,
            providers: tslib_1.__spread(services),
        };
    };
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
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components),
                    entryComponents: []
                },] }
    ];
    return CeoFormsModule;
}());
export { CeoFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2Zvcm1zL2Zvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBVSxlQUFlLENBQUE7QUFDNUMsT0FBTyxFQUNMLFdBQVcsRUFDWCxtQkFBbUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQVEsaUJBQWlCLENBQUE7QUFFaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFFaEUsT0FBTyxFQUNMLGNBQWMsRUFDZCxpQkFBaUIsR0FDbEIsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFRLHFCQUFxQixDQUFBOztJQUUxQyxzQkFBc0IsR0FBVTtJQUNwQyxjQUFjO0lBQ2QsaUJBQWlCO0NBRWxCO0FBRUQ7SUFBQTtJQTJCQSxDQUFDOzs7O0lBUlEsc0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsbUJBQ0osUUFBUSxDQUNaO1NBQ0YsQ0FBQTtJQUNILENBQUM7O2dCQTFCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7cUJBQ3hCO29CQUNELFlBQVksbUJBQ1AsVUFBVSxDQUNkO29CQUNELE9BQU8sbUJBQ0YsVUFBVSxDQUNkO29CQUNELGVBQWUsRUFBRSxFQUNoQjtpQkFDRjs7SUFVRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO1NBVFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuXG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnXG5cbmltcG9ydCB7XG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnXG5cbmltcG9ydCB7IFNoYXJlZERlY2xhcmFibGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGVjbGFyYWJsZXMvaW5kZXgnXG5cbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cydcbmltcG9ydCB7IHNlcnZpY2VzIH0gICBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzJ1xuXG5jb25zdCBhbmd1bGFyTWF0ZXJpYWxNb2R1bGVzOiBhbnlbXSA9IFtcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuXG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ2JEYXRlcGlja2VyTW9kdWxlLFxuICAgIGFuZ3VsYXJNYXRlcmlhbE1vZHVsZXMsXG4gICAgU2hhcmVkRGVjbGFyYWJsZXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDZW9Gb3Jtc01vZHVsZXtcbiAgc3RhdGljIGZvclJvb3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDZW9Gb3Jtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5zZXJ2aWNlcyxcbiAgICAgIF0sXG4gICAgfVxuICB9XG59XG4iXX0=