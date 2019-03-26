(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('@angular/http'), require('@angular/http/testing'), require('@angular/common'), require('@angular/common/testing'), require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@ceo/core', ['exports', 'lodash', '@angular/http', '@angular/http/testing', '@angular/common', '@angular/common/testing', '@angular/core', '@angular/router'], factory) :
    (factory((global.ceo = global.ceo || {}, global.ceo.core = {}),global._,global.ng.http,global.ng.http.testing,global.ng.common,global.ng.common.testing,global.ng.core,global.ng.router));
}(this, (function (exports,_,http,testing,common,testing$1,core,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var StorageKey = {
        USERNAME: 0,
    };
    StorageKey[StorageKey.USERNAME] = 'USERNAME';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConsoleService = /** @class */ (function () {
        function ConsoleService() {
        }
        /**
         * @param {?} m
         * @return {?}
         */
        ConsoleService.prototype.log = /**
         * @param {?} m
         * @return {?}
         */
            function (m) { return; };
        /**
         * @param {?} m
         * @return {?}
         */
        ConsoleService.prototype.debug = /**
         * @param {?} m
         * @return {?}
         */
            function (m) { return; };
        /**
         * @param {?} m
         * @return {?}
         */
        ConsoleService.prototype.error = /**
         * @param {?} m
         * @return {?}
         */
            function (m) { return; };
        /**
         * @param {?} m
         * @return {?}
         */
        ConsoleService.prototype.warn = /**
         * @param {?} m
         * @return {?}
         */
            function (m) { return; };
        /**
         * @param {?} m
         * @return {?}
         */
        ConsoleService.prototype.info = /**
         * @param {?} m
         * @return {?}
         */
            function (m) { return; };
        ConsoleService.decorators = [
            { type: core.Injectable }
        ];
        return ConsoleService;
    }());

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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
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
    /** @enum {number} */
    var LogLevel = {
        Debug: 0,
        Info: 1,
        Warning: 2,
        Error: 4,
    };
    LogLevel[LogLevel.Debug] = 'Debug';
    LogLevel[LogLevel.Info] = 'Info';
    LogLevel[LogLevel.Warning] = 'Warning';
    LogLevel[LogLevel.Error] = 'Error';
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ LogTargetOptions = /** @class */ (function () {
        function LogTargetOptions() {
        }
        return LogTargetOptions;
    }());
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ LogTarget = /** @class */ (function () {
        function LogTarget() {
        }
        return LogTarget;
    }());
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ LogTargetBase = /** @class */ (function () {
        function LogTargetBase(options) {
            this.options = options;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        LogTargetBase.prototype.log = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.level >= this.options.minLogLevel) {
                    return this.writeToLog(event);
                }
                return Promise.resolve();
            };
        return LogTargetBase;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConsoleTarget = /** @class */ (function (_super) {
        __extends(ConsoleTarget, _super);
        function ConsoleTarget(console, options) {
            var _this = _super.call(this, options) || this;
            _this.console = console;
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        ConsoleTarget.prototype.writeToLog = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.level) {
                    case LogLevel.Debug:
                        this.console.log(event.message);
                        break;
                    case LogLevel.Info:
                        this.console.info(event.message);
                        break;
                    case LogLevel.Warning:
                        this.console.warn(event.message);
                        break;
                    case LogLevel.Error:
                        this.console.error(event.message);
                        break;
                }
                return Promise.resolve();
            };
        ConsoleTarget.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ConsoleTarget.ctorParameters = function () {
            return [
                { type: ConsoleService },
                { type: LogTargetOptions }
            ];
        };
        return ConsoleTarget;
    }(LogTargetBase));
    /**
     * @param {?} level
     * @param {?} consoleService
     * @return {?}
     */
    function createConsoleTarget(level, consoleService) {
        return new ConsoleTarget(consoleService, { minLogLevel: level });
    }
    /**
     * @param {?} logLevel
     * @return {?}
     */
    function provideConsoleTarget(logLevel) {
        return {
            provide: LogTarget, deps: [ConsoleService],
            multi: true,
            useFactory: function (c) { return new ConsoleTarget(c, { minLogLevel: logLevel }); }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Config = /** @class */ (function () {
        function Config() {
        }
        // convenient platform checks
        // convenient platform checks
        /**
         * @return {?}
         */
        Config.IS_WEB =
            // convenient platform checks
            /**
             * @return {?}
             */
            function () {
                return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
            };
        /**
         * @return {?}
         */
        Config.IS_MOBILE_NATIVE = /**
         * @return {?}
         */
            function () {
                return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
            };
        /**
         * @return {?}
         */
        Config.IS_MOBILE_HYBRID = /**
         * @return {?}
         */
            function () {
                return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_HYBRID;
            };
        /**
         * @return {?}
         */
        Config.IS_DESKTOP = /**
         * @return {?}
         */
            function () {
                return Config.PLATFORM_TARGET === Config.PLATFORMS.DESKTOP;
            };
        /**
         * @return {?}
         */
        Config.ENVIRONMENT = /**
         * @return {?}
         */
            function () {
                try {
                    return JSON.parse('<%= ENV_CONFIG %>');
                }
                catch (exp) {
                    return {};
                }
            };
        /**
         * @return {?}
         */
        Config.IS_DEBUG_MODE = /**
         * @return {?}
         */
            function () {
                for (var key in Config.DEBUG) {
                    if (Config.DEBUG[key]) {
                        // if any level is on, debug mode is on
                        return true;
                    }
                }
                return false;
            };
        // reset debug defaults
        // reset debug defaults
        /**
         * @return {?}
         */
        Config.RESET =
            // reset debug defaults
            /**
             * @return {?}
             */
            function () {
                for (var key in Config.DEBUG) {
                    Config.DEBUG[key] = false;
                }
            };
        Config.DEBUG = {
            LEVEL_1: false,
            // .info only
            LEVEL_2: false,
            // .warn only
            LEVEL_3: false,
            // .error only
            LEVEL_4: false // .log + all the above
        };
        // supported platforms
        Config.PLATFORMS = {
            WEB: 'web',
            MOBILE_NATIVE: 'mobile_native',
            MOBILE_HYBRID: 'mobile_hybrid',
            DESKTOP: 'desktop'
        };
        // current target (defaults to web)
        Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
        return Config;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} params
     * @return {?}
     */
    function jsonToQueryParams(params) {
        /** @type {?} */
        var queryParams = "";
        for (var param in params) {
            queryParams += '&filter[' + param + ']=' + params[param];
        }
        return queryParams;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     *
     * taken from:
     * https://github.com/DylanPiercey/q-flat
     *
     * @description
     * Creates a querystring style object from a nested one.
     *
     * @example
     * var result = flatten({ a: { b: 1 }, c: { d: 1 } })
     * result //-> { "a[b]": 1, "c[d]": 2 }
     *
     * @param obj The object to flatten.
     */
    /**
     * @param {?} json
     * @return {?}
     */
    function jsonToQueryParamsObject(json) {
        var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
        /** @type {?} */
        var ObjectType = "[object Object]";
        /** @type {?} */
        var ArrayType = "[object Array]";
        /**
         * Join path keys using query string `a[b]` style syntax.
         * @type {?}
         */
        var join = function (path, key) {
            return path != null ? path + "[" + key + "]" : key;
        };
        /** @type {?} */
        var flatten = function (obj, path, result) {
            /** @type {?} */
            var type = toString.call(obj);
            if (result === undefined) {
                if (type === ObjectType) {
                    result = {};
                }
                else if (type === ArrayType) {
                    result = [];
                }
                else {
                    return;
                }
            }
            if (type === ArrayType) {
                //result[join(path, '[]')] = obj
                console.log("The path is " + path);
                result[path] = obj;
            }
            else {
                for (var key in obj) {
                    /* istanbul ignore if */
                    if (!hasOwnProperty.call(obj, key)) {
                        continue;
                    }
                    /** @type {?} */
                    var val = obj[key];
                    /*
                    if (val == null) {
                      continue
                    }
                    */
                    switch (toString.call(val)) {
                        case ArrayType:
                            /** @type {?} */
                            var resultKey = join(path, key) + "[]";
                            result[resultKey] = val;
                            break;
                        case ObjectType:
                            flatten(val, join(path, key), result);
                            break;
                        default:
                            result[join(path, key)] = val;
                            break;
                    }
                }
            }
            return result;
        };
        return flatten(json);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * This function coerces a string into a string literal type.
     * Using tagged union types in TypeScript 2.0, this enables
     * powerful typechecking of our reducers.
     *
     * Since every action label passes through this function it
     * is a good place to ensure all of our action labels
     * are unique.
     */
    /** @type {?} */
    var typeCache = {};
    /**
     * @template T
     * @param {?} label
     * @return {?}
     */
    function type(label) {
        if (typeCache[( /** @type {?} */(label))]) {
            throw new Error("Action type \"" + label + "\" is not unqiue\"");
        }
        typeCache[( /** @type {?} */(label))] = true;
        return ( /** @type {?} */(label));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // camelCase('Foo Bar')
    // => 'fooBar'
    //camelCase('--foo-bar--')
    // => 'fooBar'
    //camelCase('__FOO_BAR__')
    // => 'fooBar'
    /**
     * @param {?} value
     * @return {?}
     */
    function camelCase(value) {
        return _.camelCase(value);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function pascalCase(value) {
        if (value == 'print-batches') {
            return "PrintBatch";
        }
        else {
            return _.upperFirst(_.camelCase(_.replace(value, /_/g, "-")));
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Simple singularization;
    // simply removes the trailing 's'
    // from any string
    /**
     * @param {?} value
     * @return {?}
     */
    function singularize(value) {
        /** @type {?} */
        var re = /s$/;
        return value.toString().replace(re, "");
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function classify(value) {
        return singularize(pascalCase(value));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // _.kebabCase('Foo Bar');
    // => 'foo-bar'
    // _.kebabCase('fooBar');
    // => 'foo-bar'
    // _.kebabCase('__FOO_BAR__');
    // => 'foo-bar'
    /**
     * @param {?} value
     * @return {?}
     */
    function kebabCase(value) {
        return _.kebabCase(value);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var pluralList = [
        {
            name: 'address',
            value: 'addresses'
        },
        {
            name: 'category',
            value: 'categories'
        },
        {
            name: 'gallery',
            value: 'galleries'
        },
        {
            name: 'company',
            value: 'companies'
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function pluralize(value) {
        /** @type {?} */
        var pluralWord = pluralList.filter(function (item) { return item.name === value; });
        if (pluralWord.length > 0) {
            return pluralWord[0].value;
        }
        return value.toString().concat('s');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Removes the prefix from the front of the string,
    // if it exists
    /**
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    function removePrefix(value, prefix) {
        if (prefix === void 0) {
            prefix = '';
        }
        /** @type {?} */
        var prefixLength = prefix.length;
        if (_.startsWith(value, prefix)) {
            return value.slice(prefixLength);
        }
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * convert the string into its slugified counterpart
     * @param value
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function slugify(value) {
        return value.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/_/g, '-') // Replace underscores with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // _.snakeCase('Foo Bar')
    // => 'foo_bar'
    _.snakeCase('fooBar');
    // => 'foo_bar'
    _.snakeCase('--FOO-BAR--');
    // => 'foo_bar'
    /**
     * @param {?} value
     * @return {?}
     */
    function snakeCase(value) {
        return _.snakeCase(value);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @param {?} target
     * @return {?}
     */
    function startsWith(value, target) {
        if (!target) {
            return true;
        }
        if (!(value && target)) {
            return true;
        }
        return _.startsWith(value.toLowerCase(), target.toLowerCase());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function words(value) {
        return slugify(value)
            .replace(/-/g, ' ');
    }

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
    var LogService = /** @class */ (function () {
        function LogService(targets) {
            this.targets = targets;
        }
        // debug (standard output)
        // debug (standard output)
        /**
         * @param {...?} msg
         * @return {?}
         */
        LogService.prototype.debug =
            // debug (standard output)
            /**
             * @param {...?} msg
             * @return {?}
             */
            function () {
                var _this = this;
                var msg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msg[_i] = arguments[_i];
                }
                if (Config.DEBUG.LEVEL_4) {
                    // console.debug does not work on {N} apps... use `log`
                    return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, msg, LogLevel.Debug); }));
                }
                return Promise.resolve();
            };
        // error
        // error
        /**
         * @param {...?} err
         * @return {?}
         */
        LogService.prototype.error =
            // error
            /**
             * @param {...?} err
             * @return {?}
             */
            function () {
                var _this = this;
                var err = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    err[_i] = arguments[_i];
                }
                if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_3) {
                    return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, LogLevel.Error); }));
                }
                return Promise.resolve();
            };
        // warn
        // warn
        /**
         * @param {...?} err
         * @return {?}
         */
        LogService.prototype.warn =
            // warn
            /**
             * @param {...?} err
             * @return {?}
             */
            function () {
                var _this = this;
                var err = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    err[_i] = arguments[_i];
                }
                if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_2) {
                    return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, LogLevel.Warning); }));
                }
                return Promise.resolve();
            };
        // info
        // info
        /**
         * @param {...?} err
         * @return {?}
         */
        LogService.prototype.info =
            // info
            /**
             * @param {...?} err
             * @return {?}
             */
            function () {
                var _this = this;
                var err = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    err[_i] = arguments[_i];
                }
                if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_1) {
                    return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, LogLevel.Info); }));
                }
                return Promise.resolve();
            };
        /**
         * @private
         * @param {?} target
         * @param {?} message
         * @param {?} level
         * @return {?}
         */
        LogService.prototype.logEvent = /**
         * @private
         * @param {?} target
         * @param {?} message
         * @param {?} level
         * @return {?}
         */
            function (target, message, level) {
                return target.log({ level: level, message: message });
            };
        LogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LogService.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: core.Inject, args: [LogTarget,] }] }
            ];
        };
        return LogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RouterExtensions = /** @class */ (function () {
        function RouterExtensions(router$$1, locationStrategy) {
            this.router = router$$1;
            this.locationStrategy = locationStrategy;
        }
        /**
         * @param {?} commands
         * @param {?=} extras
         * @return {?}
         */
        RouterExtensions.prototype.navigate = /**
         * @param {?} commands
         * @param {?=} extras
         * @return {?}
         */
            function (commands, extras) {
                return this.router.navigate(commands, extras);
            };
        /**
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        RouterExtensions.prototype.navigateByUrl = /**
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
            function (url, options) {
                return this.router.navigateByUrl(url);
            };
        /**
         * @return {?}
         */
        RouterExtensions.prototype.back = /**
         * @return {?}
         */
            function () {
                this.locationStrategy.back();
            };
        RouterExtensions.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        RouterExtensions.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: common.LocationStrategy }
            ];
        };
        return RouterExtensions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WindowService = /** @class */ (function () {
        function WindowService() {
            this.navigator = {};
            this.location = {};
        }
        /**
         * @param {?} msg
         * @return {?}
         */
        WindowService.prototype.alert = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) { return; };
        /**
         * @param {?} msg
         * @return {?}
         */
        WindowService.prototype.confirm = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) { return; };
        WindowService.decorators = [
            { type: core.Injectable }
        ];
        return WindowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppService = /** @class */ (function () {
        function AppService(log) {
            this.log = log;
            this.log.debug("AppService -> Config env: " + Config.ENVIRONMENT().ENV);
        }
        /**
         * @param {?} message
         * @return {?}
         */
        AppService.prototype.debug = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.log.debug(message);
            };
        AppService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AppService.ctorParameters = function () {
            return [
                { type: LogService }
            ];
        };
        return AppService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        StorageService.prototype.setItem = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                localStorage.setItem('' + key, value === null ? null : JSON.stringify(value));
            };
        /**
         * @param {?} key
         * @return {?}
         */
        StorageService.prototype.getItem = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                /** @type {?} */
                var value = localStorage.getItem('' + key);
                return value === null ? null : JSON.parse(value);
            };
        /**
         * @param {?} key
         * @return {?}
         */
        StorageService.prototype.removeItem = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                localStorage.removeItem('' + key);
            };
        StorageService.decorators = [
            { type: core.Injectable }
        ];
        return StorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InflectionService = /** @class */ (function () {
        function InflectionService() {
        }
        /**
         * @param {?} value
         * @param {?} inflections
         * @return {?}
         */
        InflectionService.prototype.inflect = /**
         * @param {?} value
         * @param {?} inflections
         * @return {?}
         */
            function (value, inflections) {
                var _this = this;
                /** @type {?} */
                var applyInflection = function (value, inflection) {
                    return _this.applyInflection(value, inflection);
                };
                return _.reduce(inflections, applyInflection, value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.camelCase = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return camelCase(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.capitalize = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return _.capitalize(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.classify = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var temp = this.pascalCase(value);
                return this.singularize(temp);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.kebabCase = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return _.kebabCase(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.pascalCase = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value == 'print-batches') {
                    return "PrintBatch";
                }
                else {
                    return _.upperFirst(camelCase(_.replace(value, /_/g, "-")));
                }
            };
        // Simple pluralization;
        // just appends the letter 's'
        // to the tne of the string.
        // Simple pluralization;
        // just appends the letter 's'
        // to the tne of the string.
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.pluralize =
            // Simple pluralization;
            // just appends the letter 's'
            // to the tne of the string.
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return value + "s";
            };
        /**
         * @param {?} value
         * @param {?=} prefix
         * @return {?}
         */
        InflectionService.prototype.removePrefix = /**
         * @param {?} value
         * @param {?=} prefix
         * @return {?}
         */
            function (value, prefix) {
                if (prefix === void 0) {
                    prefix = '';
                }
                return removePrefix(value, prefix);
            };
        // Simple singularization;
        // simply removes the trailing 's'
        // from any string
        // Simple singularization;
        // simply removes the trailing 's'
        // from any string
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.singularize =
            // Simple singularization;
            // simply removes the trailing 's'
            // from any string
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var re = /s$/;
                return value.toString().replace(re, "");
            };
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.slugify = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return slugify(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        InflectionService.prototype.words = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return words(value);
            };
        // Apply an inflection; if it does not exist, delegate it to underscore
        // Apply an inflection; if it does not exist, delegate it to underscore
        /**
         * @private
         * @param {?} value
         * @param {?} inflection
         * @return {?}
         */
        InflectionService.prototype.applyInflection =
            // Apply an inflection; if it does not exist, delegate it to underscore
            /**
             * @private
             * @param {?} value
             * @param {?} inflection
             * @return {?}
             */
            function (value, inflection) {
                /** @type {?} */
                var inflectionName;
                /** @type {?} */
                var inflectionArgs;
                if (_.isString(inflection)) {
                    inflectionName = inflection;
                    inflectionArgs = [value];
                }
                else {
                    inflectionName = _.head(inflection);
                    inflectionArgs = _.flatten([value, _.drop(inflection)]);
                }
                /** @type {?} */
                var executeInflection;
                if (this[inflectionName]) {
                    executeInflection = _.bind(this[inflectionName], this);
                }
                else {
                    executeInflection = _[inflectionName];
                }
                return executeInflection.apply(void 0, __spread(inflectionArgs));
            };
        InflectionService.decorators = [
            { type: core.Injectable }
        ];
        return InflectionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A route strategy allowing for explicit route reuse.
     * Used as a workaround for https://github.com/angular/angular/issues/18374
     * To reuse a given route, add `data: { reuse: true }` to the route definition.
     */
    var RouteReusableStrategy = /** @class */ (function (_super) {
        __extends(RouteReusableStrategy, _super);
        function RouteReusableStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} route
         * @return {?}
         */
        RouteReusableStrategy.prototype.shouldDetach = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                return false;
            };
        /**
         * @param {?} route
         * @param {?} detachedTree
         * @return {?}
         */
        RouteReusableStrategy.prototype.store = /**
         * @param {?} route
         * @param {?} detachedTree
         * @return {?}
         */
            function (route, detachedTree) { };
        /**
         * @param {?} route
         * @return {?}
         */
        RouteReusableStrategy.prototype.shouldAttach = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                return false;
            };
        /**
         * @param {?} route
         * @return {?}
         */
        RouteReusableStrategy.prototype.retrieve = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                return null;
            };
        /**
         * @param {?} future
         * @param {?} curr
         * @return {?}
         */
        RouteReusableStrategy.prototype.shouldReuseRoute = /**
         * @param {?} future
         * @param {?} curr
         * @return {?}
         */
            function (future, curr) {
                return (future.routeConfig === curr.routeConfig) || future.data.reuseRoute;
            };
        RouteReusableStrategy.decorators = [
            { type: core.Injectable }
        ];
        return RouteReusableStrategy;
    }(router.RouteReuseStrategy));

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
    var WindowMock = /** @class */ (function () {
        function WindowMock() {
            this.navigator = {
                language: 'en-US',
                userAgent: 'testing'
            };
            this.location = {};
        }
        /**
         * @param {?} msg
         * @return {?}
         */
        WindowMock.prototype.alert = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                return;
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        WindowMock.prototype.confirm = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                return;
            };
        return WindowMock;
    }());
    var WindowMockFrench = /** @class */ (function (_super) {
        __extends(WindowMockFrench, _super);
        function WindowMockFrench() {
            var _this = _super.call(this) || this;
            _this.navigator.language = 'fr-US';
            return _this;
        }
        return WindowMockFrench;
    }(WindowMock));
    var WindowMockNoLanguage = /** @class */ (function (_super) {
        __extends(WindowMockNoLanguage, _super);
        function WindowMockNoLanguage() {
            var _this = _super.call(this) || this;
            _this.navigator.language = undefined;
            return _this;
        }
        return WindowMockNoLanguage;
    }(WindowMock));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RouterExtensionsMock = /** @class */ (function () {
        function RouterExtensionsMock() {
        }
        /**
         * @param {?} commands
         * @param {?=} extras
         * @return {?}
         */
        RouterExtensionsMock.prototype.navigate = /**
         * @param {?} commands
         * @param {?=} extras
         * @return {?}
         */
            function (commands, extras) {
                return Promise.resolve(true);
            };
        /**
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        RouterExtensionsMock.prototype.navigateByUrl = /**
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
            function (url, options) {
                return Promise.resolve(true);
            };
        /**
         * @return {?}
         */
        RouterExtensionsMock.prototype.back = /**
         * @return {?}
         */
            function () {
                return;
            };
        RouterExtensionsMock.decorators = [
            { type: core.Injectable }
        ];
        return RouterExtensionsMock;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?=} options
     * @return {?}
     */
    function TEST_CORE_PROVIDERS(options) {
        // options:
        // window:   = custom window mock (mainly for changing out language)
        // options:
        // window:   = custom window mock (mainly for changing out language)
        /** @type {?} */
        var providers = [
            { provide: ConsoleService, useValue: console },
            { provide: StorageService, useValue: localStorage },
            { provide: WindowService, useClass: (options && options.window) || WindowMock },
            {
                provide: LogTarget,
                deps: [ConsoleService],
                useFactory: function (c) { return new ConsoleTarget(c, { minLogLevel: LogLevel.Debug }); },
                multi: true
            },
            LogService,
            //analyticsProviders,
            { provide: RouterExtensions, useClass: RouterExtensionsMock },
            AppService
        ];
        return providers;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var providers = [
        http.BaseRequestOptions,
        testing.MockBackend,
    ];
    /*
    * For instances where you need the injector
    * @returns `ReflectiveInjector`
    */
    /**
     * @param {?=} additionalProviders
     * @return {?}
     */
    function GET_HTTP_PROVIDERS_INJECTOR(additionalProviders) {
        if (additionalProviders) {
            providers = providers.concat(additionalProviders);
        }
        return core.ReflectiveInjector.resolveAndCreate(providers);
    }
    /*
    * For testing http services
    * @returns `Array<any>`
    */
    /**
     * @return {?}
     */
    function TEST_HTTP_PROVIDERS() {
        return providers;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function TEST_LOCATION_PROVIDERS() {
        return [
            { provide: common.Location, useClass: testing$1.SpyLocation },
            { provide: common.LocationStrategy, useClass: testing$1.MockLocationStrategy },
            { provide: common.APP_BASE_HREF, useValue: '/' }
        ];
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            if (parentModule) {
                throw new Error('CoreModule already loaded; Import in root module only.');
            }
        }
        /**
         * @param {?} configuredProviders
         * @return {?}
         */
        CoreModule.forRoot = /**
         * @param {?} configuredProviders
         * @return {?}
         */
            function (configuredProviders) {
                return {
                    ngModule: CoreModule,
                    providers: configuredProviders
                };
            };
        CoreModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        providers: [
                            ConsoleService,
                            LogService,
                            RouterExtensions,
                            WindowService,
                            AppService,
                            StorageService,
                            InflectionService,
                            {
                                provide: router.RouteReuseStrategy,
                                useClass: RouteReusableStrategy
                            },
                        ]
                    },] }
        ];
        /** @nocollapse */
        CoreModule.ctorParameters = function () {
            return [
                { type: CoreModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
            ];
        };
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.StorageKey = StorageKey;
    exports.ConsoleService = ConsoleService;
    exports.createConsoleTarget = createConsoleTarget;
    exports.provideConsoleTarget = provideConsoleTarget;
    exports.ConsoleTarget = ConsoleTarget;
    exports.LogLevel = LogLevel;
    exports.LogTargetOptions = LogTargetOptions;
    exports.LogTarget = LogTarget;
    exports.LogTargetBase = LogTargetBase;
    exports.LogService = LogService;
    exports.RouterExtensions = RouterExtensions;
    exports.WindowService = WindowService;
    exports.AppService = AppService;
    exports.StorageService = StorageService;
    exports.InflectionService = InflectionService;
    exports.RouteReusableStrategy = RouteReusableStrategy;
    exports.WindowMock = WindowMock;
    exports.WindowMockFrench = WindowMockFrench;
    exports.WindowMockNoLanguage = WindowMockNoLanguage;
    exports.TEST_CORE_PROVIDERS = TEST_CORE_PROVIDERS;
    exports.GET_HTTP_PROVIDERS_INJECTOR = GET_HTTP_PROVIDERS_INJECTOR;
    exports.TEST_HTTP_PROVIDERS = TEST_HTTP_PROVIDERS;
    exports.TEST_LOCATION_PROVIDERS = TEST_LOCATION_PROVIDERS;
    exports.jsonToQueryParams = jsonToQueryParams;
    exports.jsonToQueryParamsObject = jsonToQueryParamsObject;
    exports.type = type;
    exports.Config = Config;
    exports.camelCase = camelCase;
    exports.classify = classify;
    exports.kebabCase = kebabCase;
    exports.pascalCase = pascalCase;
    exports.pluralize = pluralize;
    exports.removePrefix = removePrefix;
    exports.singularize = singularize;
    exports.slugify = slugify;
    exports.snakeCase = snakeCase;
    exports.startsWith = startsWith;
    exports.words = words;
    exports.CoreModule = CoreModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ceo-core.umd.js.map