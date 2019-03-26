import * as _ from 'lodash';
import { reduce, capitalize, kebabCase, upperFirst, replace, isString, head, flatten, drop, bind, camelCase, startsWith, snakeCase, map } from 'lodash';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LocationStrategy, Location, APP_BASE_HREF } from '@angular/common';
import { SpyLocation, MockLocationStrategy } from '@angular/common/testing';
import { Injectable, Inject, ReflectiveInjector, NgModule, Optional, SkipSelf } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

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
/** @enum {number} */
const StorageKey = {
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
class ConsoleService {
    /**
     * @param {?} m
     * @return {?}
     */
    log(m) { return; }
    /**
     * @param {?} m
     * @return {?}
     */
    debug(m) { return; }
    /**
     * @param {?} m
     * @return {?}
     */
    error(m) { return; }
    /**
     * @param {?} m
     * @return {?}
     */
    warn(m) { return; }
    /**
     * @param {?} m
     * @return {?}
     */
    info(m) { return; }
}
ConsoleService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LogLevel = {
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
class LogTargetOptions {
}
/**
 * @abstract
 */
class LogTarget {
}
/**
 * @abstract
 */
class LogTargetBase {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    log(event) {
        if (event.level >= this.options.minLogLevel) {
            return this.writeToLog(event);
        }
        return Promise.resolve();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsoleTarget extends LogTargetBase {
    /**
     * @param {?} console
     * @param {?} options
     */
    constructor(console, options) {
        super(options);
        this.console = console;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    writeToLog(event) {
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
    }
}
ConsoleTarget.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsoleTarget.ctorParameters = () => [
    { type: ConsoleService },
    { type: LogTargetOptions }
];
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
        useFactory: (c) => new ConsoleTarget(c, { minLogLevel: logLevel })
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
    // convenient platform checks
    /**
     * @return {?}
     */
    static IS_WEB() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }
    /**
     * @return {?}
     */
    static IS_MOBILE_NATIVE() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }
    /**
     * @return {?}
     */
    static IS_MOBILE_HYBRID() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_HYBRID;
    }
    /**
     * @return {?}
     */
    static IS_DESKTOP() {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.DESKTOP;
    }
    /**
     * @return {?}
     */
    static ENVIRONMENT() {
        try {
            return JSON.parse('<%= ENV_CONFIG %>');
        }
        catch (exp) {
            return {};
        }
    }
    /**
     * @return {?}
     */
    static IS_DEBUG_MODE() {
        for (let key in Config.DEBUG) {
            if (Config.DEBUG[key]) {
                // if any level is on, debug mode is on
                return true;
            }
        }
        return false;
    }
    // reset debug defaults
    /**
     * @return {?}
     */
    static RESET() {
        for (let key in Config.DEBUG) {
            Config.DEBUG[key] = false;
        }
    }
}
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
    let queryParams = "";
    for (let param in params) {
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
    const { toString, hasOwnProperty } = Object.prototype;
    /** @type {?} */
    const ObjectType = "[object Object]";
    /** @type {?} */
    const ArrayType = "[object Array]"
    /**
     * Join path keys using query string `a[b]` style syntax.
     */
    ;
    /**
     * Join path keys using query string `a[b]` style syntax.
     * @type {?}
     */
    let join = (path, key) => {
        return path != null ? path + "[" + key + "]" : key;
    };
    /** @type {?} */
    let flatten$$1 = (obj, path, result) => {
        /** @type {?} */
        const type = toString.call(obj);
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
            for (const key in obj) {
                /* istanbul ignore if */
                if (!hasOwnProperty.call(obj, key)) {
                    continue;
                }
                /** @type {?} */
                const val = obj[key]
                /*
                if (val == null) {
                  continue
                }
                */
                ;
                /*
                if (val == null) {
                  continue
                }
                */
                switch (toString.call(val)) {
                    case ArrayType:
                        /** @type {?} */
                        let resultKey = join(path, key) + "[]";
                        result[resultKey] = val;
                        break;
                    case ObjectType:
                        flatten$$1(val, join(path, key), result);
                        break;
                    default:
                        result[join(path, key)] = val;
                        break;
                }
            }
        }
        return result;
    };
    return flatten$$1(json);
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
let typeCache = {};
/**
 * @template T
 * @param {?} label
 * @return {?}
 */
function type(label) {
    if (typeCache[(/** @type {?} */ (label))]) {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }
    typeCache[(/** @type {?} */ (label))] = true;
    return (/** @type {?} */ (label));
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
function camelCase$1(value) {
    return camelCase(value);
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
        return upperFirst(camelCase(replace(value, /_/g, "-")));
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
function kebabCase$1(value) {
    return kebabCase(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pluralList = [
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
    let pluralWord = pluralList.filter(item => item.name === value);
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
function removePrefix(value, prefix = '') {
    /** @type {?} */
    let prefixLength = prefix.length;
    if (startsWith(value, prefix)) {
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
snakeCase('fooBar');
// => 'foo_bar'
snakeCase('--FOO-BAR--');
// => 'foo_bar'
/**
 * @param {?} value
 * @return {?}
 */
function snakeCase$1(value) {
    return snakeCase(value);
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
function startsWith$1(value, target) {
    if (!target) {
        return true;
    }
    if (!(value && target)) {
        return true;
    }
    return startsWith(value.toLowerCase(), target.toLowerCase());
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
class LogService {
    /**
     * @param {?} targets
     */
    constructor(targets) {
        this.targets = targets;
    }
    // debug (standard output)
    /**
     * @param {...?} msg
     * @return {?}
     */
    debug(...msg) {
        if (Config.DEBUG.LEVEL_4) {
            // console.debug does not work on {N} apps... use `log`
            return Promise.all(map(this.targets, logger => this.logEvent(logger, msg, LogLevel.Debug)));
        }
        return Promise.resolve();
    }
    // error
    /**
     * @param {...?} err
     * @return {?}
     */
    error(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_3) {
            return Promise.all(map(this.targets, logger => this.logEvent(logger, err, LogLevel.Error)));
        }
        return Promise.resolve();
    }
    // warn
    /**
     * @param {...?} err
     * @return {?}
     */
    warn(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_2) {
            return Promise.all(map(this.targets, logger => this.logEvent(logger, err, LogLevel.Warning)));
        }
        return Promise.resolve();
    }
    // info
    /**
     * @param {...?} err
     * @return {?}
     */
    info(...err) {
        if (Config.DEBUG.LEVEL_4 || Config.DEBUG.LEVEL_1) {
            return Promise.all(map(this.targets, logger => this.logEvent(logger, err, LogLevel.Info)));
        }
        return Promise.resolve();
    }
    /**
     * @private
     * @param {?} target
     * @param {?} message
     * @param {?} level
     * @return {?}
     */
    logEvent(target, message, level) {
        return target.log({ level: level, message: message });
    }
}
LogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LogService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [LogTarget,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterExtensions {
    /**
     * @param {?} router
     * @param {?} locationStrategy
     */
    constructor(router, locationStrategy) {
        this.router = router;
        this.locationStrategy = locationStrategy;
    }
    /**
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    navigate(commands, extras) {
        return this.router.navigate(commands, extras);
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateByUrl(url, options) {
        return this.router.navigateByUrl(url);
    }
    /**
     * @return {?}
     */
    back() {
        this.locationStrategy.back();
    }
}
RouterExtensions.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterExtensions.ctorParameters = () => [
    { type: Router },
    { type: LocationStrategy }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowService {
    constructor() {
        this.navigator = {};
        this.location = {};
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    alert(msg) { return; }
    /**
     * @param {?} msg
     * @return {?}
     */
    confirm(msg) { return; }
}
WindowService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppService {
    /**
     * @param {?} log
     */
    constructor(log) {
        this.log = log;
        this.log.debug(`AppService -> Config env: ${Config.ENVIRONMENT().ENV}`);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    debug(message) {
        this.log.debug(message);
    }
}
AppService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AppService.ctorParameters = () => [
    { type: LogService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorageService {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        localStorage.setItem('' + key, value === null ? null : JSON.stringify(value));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        /** @type {?} */
        const value = localStorage.getItem('' + key);
        return value === null ? null : JSON.parse(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        localStorage.removeItem('' + key);
    }
}
StorageService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InflectionService {
    /**
     * @param {?} value
     * @param {?} inflections
     * @return {?}
     */
    inflect(value, inflections) {
        /** @type {?} */
        let applyInflection = (value, inflection) => {
            return this.applyInflection(value, inflection);
        };
        return reduce(inflections, applyInflection, value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    camelCase(value) {
        return camelCase$1(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    capitalize(value) {
        return capitalize(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    classify(value) {
        /** @type {?} */
        let temp = this.pascalCase(value);
        return this.singularize(temp);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    kebabCase(value) {
        return kebabCase(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pascalCase(value) {
        if (value == 'print-batches') {
            return "PrintBatch";
        }
        else {
            return upperFirst(camelCase$1(replace(value, /_/g, "-")));
        }
    }
    // Simple pluralization;
    // just appends the letter 's'
    // to the tne of the string.
    /**
     * @param {?} value
     * @return {?}
     */
    pluralize(value) {
        return `${value}s`;
    }
    /**
     * @param {?} value
     * @param {?=} prefix
     * @return {?}
     */
    removePrefix(value, prefix = '') {
        return removePrefix(value, prefix);
    }
    // Simple singularization;
    // simply removes the trailing 's'
    // from any string
    /**
     * @param {?} value
     * @return {?}
     */
    singularize(value) {
        /** @type {?} */
        var re = /s$/;
        return value.toString().replace(re, "");
    }
    /**
     * @param {?} value
     * @return {?}
     */
    slugify(value) {
        return slugify(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    words(value) {
        return words(value);
    }
    // Apply an inflection; if it does not exist, delegate it to underscore
    /**
     * @private
     * @param {?} value
     * @param {?} inflection
     * @return {?}
     */
    applyInflection(value, inflection) {
        /** @type {?} */
        var inflectionName;
        /** @type {?} */
        var inflectionArgs;
        if (isString(inflection)) {
            inflectionName = inflection;
            inflectionArgs = [value];
        }
        else {
            inflectionName = head(inflection);
            inflectionArgs = flatten([value, drop(inflection)]);
        }
        /** @type {?} */
        var executeInflection;
        if (this[inflectionName]) {
            executeInflection = bind(this[inflectionName], this);
        }
        else {
            executeInflection = _[inflectionName];
        }
        return executeInflection(...inflectionArgs);
    }
}
InflectionService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
class RouteReusableStrategy extends RouteReuseStrategy {
    /**
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) {
        return false;
    }
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    store(route, detachedTree) { }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) {
        return false;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    retrieve(route) {
        return null;
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        return (future.routeConfig === curr.routeConfig) || future.data.reuseRoute;
    }
}
RouteReusableStrategy.decorators = [
    { type: Injectable }
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
class WindowMock {
    constructor() {
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
    alert(msg) {
        return;
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    confirm(msg) {
        return;
    }
}
class WindowMockFrench extends WindowMock {
    constructor() {
        super();
        this.navigator.language = 'fr-US';
    }
}
class WindowMockNoLanguage extends WindowMock {
    constructor() {
        super();
        this.navigator.language = undefined;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterExtensionsMock {
    /**
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    navigate(commands, extras) {
        return Promise.resolve(true);
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateByUrl(url, options) {
        return Promise.resolve(true);
    }
    /**
     * @return {?}
     */
    back() {
        return;
    }
}
RouterExtensionsMock.decorators = [
    { type: Injectable }
];

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
    let providers = [
        { provide: ConsoleService, useValue: console },
        { provide: StorageService, useValue: localStorage },
        { provide: WindowService, useClass: (options && options.window) || WindowMock },
        {
            provide: LogTarget,
            deps: [ConsoleService],
            useFactory: (c) => new ConsoleTarget(c, { minLogLevel: LogLevel.Debug }),
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
let providers = [
    BaseRequestOptions,
    MockBackend,
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
    return ReflectiveInjector.resolveAndCreate(providers);
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
        { provide: Location, useClass: SpyLocation },
        { provide: LocationStrategy, useClass: MockLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' }
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
class CoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
    /**
     * @param {?} configuredProviders
     * @return {?}
     */
    static forRoot(configuredProviders) {
        return {
            ngModule: CoreModule,
            providers: configuredProviders
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
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
                        provide: RouteReuseStrategy,
                        useClass: RouteReusableStrategy
                    },
                ]
            },] }
];
/** @nocollapse */
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StorageKey, ConsoleService, createConsoleTarget, provideConsoleTarget, ConsoleTarget, LogLevel, LogTargetOptions, LogTarget, LogTargetBase, LogService, RouterExtensions, WindowService, AppService, StorageService, InflectionService, RouteReusableStrategy, WindowMock, WindowMockFrench, WindowMockNoLanguage, TEST_CORE_PROVIDERS, GET_HTTP_PROVIDERS_INJECTOR, TEST_HTTP_PROVIDERS, TEST_LOCATION_PROVIDERS, jsonToQueryParams, jsonToQueryParamsObject, type, Config, camelCase$1 as camelCase, classify, kebabCase$1 as kebabCase, pascalCase, pluralize, removePrefix, singularize, slugify, snakeCase$1 as snakeCase, startsWith$1 as startsWith, words, CoreModule };

//# sourceMappingURL=ceo-core.js.map