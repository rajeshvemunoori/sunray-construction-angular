import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { __spread } from 'tslib';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatIconModule, MatDialogModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
var vendorModules = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
];
var DeclarablesModule = /** @class */ (function () {
    function DeclarablesModule() {
    }
    DeclarablesModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(vendorModules, angularMaterialModules),
                    declarations: [],
                    exports: __spread(vendorModules, angularMaterialModules),
                },] }
    ];
    return DeclarablesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var angularMaterialModules$1 = [
    MatIconModule,
    MatDialogModule,
];
var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread([
                        HttpClientModule
                    ], angularMaterialModules$1),
                    providers: [],
                },] }
    ];
    return ProvidersModule;
}());

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