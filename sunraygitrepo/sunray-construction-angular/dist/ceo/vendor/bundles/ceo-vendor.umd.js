(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/core'), require('@angular/common/http'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@ceo/vendor', ['exports', '@angular/common', '@angular/router', '@angular/forms', '@ng-bootstrap/ng-bootstrap', '@angular/core', '@angular/common/http', '@angular/material'], factory) :
    (factory((global.ceo = global.ceo || {}, global.ceo.vendor = {}),global.ng.common,global.ng.router,global.ng.forms,global.ngBootstrap,global.ng.core,global.ng.common.http,global.ng.material));
}(this, (function (exports,common,router,forms,ngBootstrap,core,http,material) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var angularMaterialModules = [
        material.MatButtonModule,
        material.MatCheckboxModule,
        material.MatSnackBarModule,
        material.MatAutocompleteModule,
        material.MatFormFieldModule,
        material.MatInputModule,
        material.MatRadioModule,
        material.MatSelectModule,
        material.MatIconModule,
        material.MatDialogModule,
    ];
    /** @type {?} */
    var vendorModules = [
        common.CommonModule,
        router.RouterModule,
        forms.FormsModule,
        forms.ReactiveFormsModule,
        ngBootstrap.NgbModule,
    ];
    var DeclarablesModule = /** @class */ (function () {
        function DeclarablesModule() {
        }
        DeclarablesModule.decorators = [
            { type: core.NgModule, args: [{
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
        material.MatIconModule,
        material.MatDialogModule,
    ];
    var ProvidersModule = /** @class */ (function () {
        function ProvidersModule() {
        }
        ProvidersModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([
                            http.HttpClientModule
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

    exports.VendorDeclarablesModule = DeclarablesModule;
    exports.VendorProvidersModule = ProvidersModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ceo-vendor.umd.js.map