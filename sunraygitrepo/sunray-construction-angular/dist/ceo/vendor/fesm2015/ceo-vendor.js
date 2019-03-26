import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatIconModule, MatDialogModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
const vendorModules = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
];
class DeclarablesModule {
}
DeclarablesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...vendorModules,
                    ...angularMaterialModules,
                ],
                declarations: [],
                exports: [
                    ...vendorModules,
                    ...angularMaterialModules,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const angularMaterialModules$1 = [
    MatIconModule,
    MatDialogModule,
];
class ProvidersModule {
}
ProvidersModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                    ...angularMaterialModules$1,
                ],
                providers: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DeclarablesModule as VendorDeclarablesModule, ProvidersModule as VendorProvidersModule };

//# sourceMappingURL=ceo-vendor.js.map