(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('csvtojson'), require('@ceo/core'), require('@angular/common/http'), require('rxjs/operators'), require('angular-token'), require('@angular/elements'), require('@angular/platform-browser'), require('@angular/router'), require('rxjs'), require('@angular/material/dialog'), require('ngx-scrollreveal'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/material'), require('lodash'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@ceo/shared', ['exports', 'csvtojson', '@ceo/core', '@angular/common/http', 'rxjs/operators', 'angular-token', '@angular/elements', '@angular/platform-browser', '@angular/router', 'rxjs', '@angular/material/dialog', 'ngx-scrollreveal', '@angular/forms', '@ng-bootstrap/ng-bootstrap', '@angular/material', 'lodash', '@angular/core', '@angular/common'], factory) :
    (factory((global.ceo = global.ceo || {}, global.ceo.shared = {}),global.csv_,global.core,global.ng.common.http,global.rxjs.operators,global.angularToken,global.ng.elements,global.ng.platformBrowser,global.ng.router,global.rxjs,global.ng.material.dialog,global.ngxScrollreveal,global.ng.forms,global.ngBootstrap,global.ng.material,global._,global.ng.core,global.ng.common));
}(this, (function (exports,csv_,core,http,operators,angularToken,elements,platformBrowser,router,rxjs,i1,ngxScrollreveal,forms,ngBootstrap,material,_,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClickStopEventBubbleDirective = /** @class */ (function () {
        function ClickStopEventBubbleDirective() {
        }
        /**
         * @param {?} event
         * @return {?}
         */
        ClickStopEventBubbleDirective.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.stopEventBubble(event);
            };
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */
        ClickStopEventBubbleDirective.prototype.stopEventBubble = /**
         * @protected
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                if (event.preventDefault) {
                    event.preventDefault();
                }
            };
        ClickStopEventBubbleDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[ceoClickStopEventBubble]"
                    },] }
        ];
        ClickStopEventBubbleDirective.propDecorators = {
            onClick: [{ type: i0.HostListener, args: ["click", ["$event"],] }]
        };
        return ClickStopEventBubbleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContainerDirective = /** @class */ (function () {
        function ContainerDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        ContainerDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[shared-declarables-container]'
                    },] }
        ];
        /** @nocollapse */
        ContainerDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef }
            ];
        };
        return ContainerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationDirective = /** @class */ (function () {
        function NavigationDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        NavigationDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[sharedDeclarablesNavigation]'
                    },] }
        ];
        /** @nocollapse */
        NavigationDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef }
            ];
        };
        return NavigationDirective;
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
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
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
    var RouteTransformerDirective = /** @class */ (function (_super) {
        __extends(RouteTransformerDirective, _super);
        function RouteTransformerDirective(el, router$$1) {
            var _this = _super.call(this) || this;
            _this.el = el;
            _this.router = router$$1;
            _this.routeEvent = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        RouteTransformerDirective.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var linkElement = this.getLink(event);
                if (linkElement) {
                    this.handleLink(linkElement);
                    this.stopEventBubble(event);
                }
                else {
                    return;
                }
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        RouteTransformerDirective.prototype.getLink = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.target.tagName === 'A') {
                    return event.target;
                }
                else if (event.target.parentElement.tagName === 'A') {
                    return event.target.parentElement;
                }
                else {
                    return null;
                }
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        RouteTransformerDirective.prototype.handleLink = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                if (this.canRoute(element)) {
                    this.navigate(element);
                }
                else {
                    this.emitRouteEvent(element);
                }
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        RouteTransformerDirective.prototype.emitRouteEvent = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var event = {
                    target: element
                };
                this.routeEvent.emit(event);
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        RouteTransformerDirective.prototype.canRoute = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return window.location.origin == element.origin;
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        RouteTransformerDirective.prototype.navigate = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var url = element.pathname;
                /** @type {?} */
                var opts = {};
                /** @type {?} */
                var extras = this.buildNavigationExtras(element);
                this.router.navigate([url, opts], extras);
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        RouteTransformerDirective.prototype.buildNavigationExtras = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var extras = (( /** @type {?} */({})));
                /** @type {?} */
                var queryParams = this.buildQueryParams(element);
                if (!_.isEmpty(queryParams)) {
                    extras.queryParams = queryParams;
                }
                /** @type {?} */
                var fragment = this.getUrlFragment(element);
                if (!_.isEmpty(fragment)) {
                    extras.fragment = fragment;
                }
                return extras;
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        RouteTransformerDirective.prototype.getUrlFragment = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return element.hash.substring(1);
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        RouteTransformerDirective.prototype.buildQueryParams = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var pairs = element.search.slice(1).split('&');
                /** @type {?} */
                var result = {};
                if (pairs[0].length > 0) {
                    _.forEach(pairs, function (pair) {
                        pair = pair.split('=');
                        result[pair[0]] = decodeURI(pair[1] || '');
                    });
                }
                return result;
            };
        RouteTransformerDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ceoRouteTransformer]'
                    },] }
        ];
        /** @nocollapse */
        RouteTransformerDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: router.Router }
            ];
        };
        RouteTransformerDirective.propDecorators = {
            routeEvent: [{ type: i0.Output }],
            onClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
        };
        return RouteTransformerDirective;
    }(ClickStopEventBubbleDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollTopDirective = /** @class */ (function () {
        function ScrollTopDirective(router$$1) {
            this.router = router$$1;
        }
        /**
         * @return {?}
         */
        ScrollTopDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.routerNavigationEnd$
                    .subscribe(function (event) { return _this.scrollTop(); });
                this.scrollTop();
            };
        Object.defineProperty(ScrollTopDirective.prototype, "routerNavigationEnd$", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._routerNavigationEnd$) {
                    this._routerNavigationEnd$ = this.buildNavEndEvent();
                }
                return this._routerNavigationEnd$;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        ScrollTopDirective.prototype.buildNavEndEvent = /**
         * @private
         * @return {?}
         */
            function () {
                return ( /** @type {?} */(this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }))));
            };
        /**
         * @return {?}
         */
        ScrollTopDirective.prototype.scrollTop = /**
         * @return {?}
         */
            function () {
                console.log("scroll to the top -- directive");
                window.scrollTo(0, 0);
            };
        ScrollTopDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[ceoScrollTop]"
                    },] }
        ];
        /** @nocollapse */
        ScrollTopDirective.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return ScrollTopDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var directives = [
        ClickStopEventBubbleDirective,
        ContainerDirective,
        NavigationDirective,
        RouteTransformerDirective,
        ScrollTopDirective,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomSearchPipe = /** @class */ (function () {
        function CustomSearchPipe() {
        }
        /**
         * @param {?} collection
         * @param {?=} args
         * @return {?}
         */
        CustomSearchPipe.prototype.transform = /**
         * @param {?} collection
         * @param {?=} args
         * @return {?}
         */
            function (collection, args) {
                if (!_.isEmpty(args) && collection) {
                    return this.filter(collection, args);
                }
                return collection;
            };
        /**
         * @param {?} collection
         * @param {?} attributes
         * @return {?}
         */
        CustomSearchPipe.prototype.filter = /**
         * @param {?} collection
         * @param {?} attributes
         * @return {?}
         */
            function (collection, attributes) {
                /** @type {?} */
                var filterCollection = function (value, key) {
                    if (_.isEmpty(value)) {
                        return collection.entities;
                    }
                    return _.reduce(collection.entities, function (entities, entity) {
                        if (_.includes(_.lowerCase(entity[key]), _.lowerCase(value)) &&
                            !_.isEmpty(value)) {
                            entities.push(entity);
                            return entities;
                        }
                        return entities;
                    }, []);
                };
                return _.uniqBy(_.flatten(_.map(attributes, filterCollection)), 'id');
            };
        CustomSearchPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'customSearch'
                    },] }
        ];
        return CustomSearchPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitized) {
            this.sanitized = sanitized;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SafeHtmlPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this.sanitized.bypassSecurityTrustHtml(value);
            };
        SafeHtmlPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeHtml'
                    },] }
        ];
        /** @nocollapse */
        SafeHtmlPipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return SafeHtmlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var pipes = [
        CustomSearchPipe,
        SafeHtmlPipe,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // https://medium.com/@dmyl/mixins-as-class-decorators-in-typescript-angular2-8e09f1bc1f02
    // Decorator to create mixins
    /**
     * @param {?} baseCtors
     * @return {?}
     */
    function Mixin(baseCtors) {
        return function (derivedCtor) {
            baseCtors.forEach(function (baseCtor) {
                Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                    /** @type {?} */
                    var descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
                    if (name === 'constructor')
                        return;
                    if (descriptor &&
                        (!descriptor.writable || !descriptor.configurable ||
                            !descriptor.enumerable || descriptor.get || descriptor.set)) {
                        Object.defineProperty(derivedCtor.prototype, name, descriptor);
                    }
                    else {
                        derivedCtor.prototype[name] = baseCtor.prototype[name];
                    }
                });
            });
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var createGetSet = function (obj, props, key, name) {
        /** @type {?} */
        var generateGetSet = function (props, key, name) {
            /** @type {?} */
            var getProp = _.bind(obj.getProp, obj);
            /** @type {?} */
            var setProp = _.bind(obj.setProp, obj);
            return {
                get: function () { return getProp(props, key); },
                set: function (value) {
                    if (getProp(props, key) !== value) {
                        setProp(props, key, value);
                    }
                },
            };
        };
        /** @type {?} */
        var getSetProps = generateGetSet(props, key, name);
        Object.defineProperty(obj, name, getSetProps);
    };
    var AttributeGetterSetter = /** @class */ (function () {
        function AttributeGetterSetter() {
            this.attributes = {};
            this.updatedKeys = [];
        }
        /**
         * @return {?}
         */
        AttributeGetterSetter.prototype.createAttributeSettersAndGetters = /**
         * @return {?}
         */
            function () {
                this.createSettersAndGetters(this.attributes);
            };
        /**
         * @param {?} props
         * @return {?}
         */
        AttributeGetterSetter.prototype.createSettersAndGetters = /**
         * @param {?} props
         * @return {?}
         */
            function (props) {
                for (var key in props) {
                    /** @type {?} */
                    var camelizedKey = core.camelCase(key);
                    createGetSet(this, props, key, camelizedKey);
                    createGetSet(this, props, key, key);
                }
            };
        /**
         * @param {?} props
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        AttributeGetterSetter.prototype.setProp = /**
         * @param {?} props
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (props, key, value) {
                props[key] = value;
                if (this.updatedKeys) {
                    this.updatedKeys.push(key);
                }
            };
        /**
         * @param {?} props
         * @param {?} key
         * @return {?}
         */
        AttributeGetterSetter.prototype.getProp = /**
         * @param {?} props
         * @param {?} key
         * @return {?}
         */
            function (props, key) {
                return props[key];
            };
        return AttributeGetterSetter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AttributeUpdater = /** @class */ (function (_super) {
        __extends(AttributeUpdater, _super);
        function AttributeUpdater() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} attributes
         * @return {?}
         */
        AttributeUpdater.prototype.updateAttributes = /**
         * @param {?} attributes
         * @return {?}
         */
            function (attributes) {
                _.extend(this.attributes, attributes);
                this.createSettersAndGetters(this.attributes);
            };
        return AttributeUpdater;
    }(AttributeGetterSetter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataInspector = /** @class */ (function () {
        function DataInspector() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        DataInspector.prototype.inspectData = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var inspect = function (data) {
                    console.log(data);
                };
                if (data.subscribe) {
                    data.subscribe(function (data) { return inspect(data); });
                }
                else {
                    inspect(data);
                }
            };
        return DataInspector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Memoizer = /** @class */ (function () {
        function Memoizer() {
        }
        /**
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        Memoizer.prototype.memoized = /**
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
            function (property, value) {
                if (!this[property]) {
                    /** @type {?} */
                    var theFunction = _.bind(value, this);
                    /** @type {?} */
                    var result = theFunction();
                    this[property] = ( /** @type {?} */(result));
                }
                return this[property];
            };
        return Memoizer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Helper = /** @class */ (function () {
        function Helper(source, target, propNames, bindToSource) {
            this.source = source;
            this.target = target;
            this.propNames = propNames;
            this.bindToSource = bindToSource;
        }
        /**
         * @return {?}
         */
        Helper.prototype.run = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var copyProperty = _.bind(this.copyProperty, this);
                _.map(this.propNames, copyProperty);
            };
        /**
         * @private
         * @param {?} propName
         * @return {?}
         */
        Helper.prototype.copyProperty = /**
         * @private
         * @param {?} propName
         * @return {?}
         */
            function (propName) {
                /** @type {?} */
                var sourceDescriptor = this.getDescriptor(this.source, propName);
                if (sourceDescriptor) {
                    this.copyFromSource(propName, sourceDescriptor);
                }
                else {
                    _.assignIn(this.target, _.pick(this.source, propName));
                }
            };
        /**
         * @private
         * @param {?} propName
         * @param {?} propDescriptor
         * @return {?}
         */
        Helper.prototype.copyFromSource = /**
         * @private
         * @param {?} propName
         * @param {?} propDescriptor
         * @return {?}
         */
            function (propName, propDescriptor) {
                var _this = this;
                if (this.bindToSource) {
                    /** @type {?} */
                    var valueWithBinding = function (value) {
                        if (_.isFunction(value)) {
                            return _.bind(value, _this.source);
                        }
                        else {
                            return value;
                        }
                    };
                    propDescriptor = _.mapValues(propDescriptor, valueWithBinding);
                }
                Object.defineProperty(this.target, propName, _.clone(propDescriptor));
            };
        /**
         * @private
         * @param {?} source
         * @param {?} propName
         * @return {?}
         */
        Helper.prototype.getDescriptor = /**
         * @private
         * @param {?} source
         * @param {?} propName
         * @return {?}
         */
            function (source, propName) {
                /** @type {?} */
                var descriptor = Object.getOwnPropertyDescriptor(source, propName);
                if (descriptor) {
                    return descriptor;
                }
                else {
                    /** @type {?} */
                    var parentSource = Object.getPrototypeOf(source);
                    if (parentSource) {
                        return this.getDescriptor(parentSource, propName);
                    }
                    else {
                        return null;
                    }
                }
            };
        return Helper;
    }());
    var PropertyDelegator = /** @class */ (function () {
        function PropertyDelegator() {
            this.delegatedProperties = {};
        }
        /**
         * @param {?} source
         * @param {?} propNames
         * @param {?=} bindToSource
         * @return {?}
         */
        PropertyDelegator.prototype.setDelegatedProperties = /**
         * @param {?} source
         * @param {?} propNames
         * @param {?=} bindToSource
         * @return {?}
         */
            function (source, propNames, bindToSource) {
                if (bindToSource === void 0) {
                    bindToSource = true;
                }
                /** @type {?} */
                var helper = new Helper(source, this, propNames, bindToSource);
                helper.run();
            };
        /**
         * @return {?}
         */
        PropertyDelegator.prototype.setAllDelegatedProperties = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var setDelegatedProperties = function (propNames, sourceName) {
                    /** @type {?} */
                    var source = _this[sourceName];
                    _this.setDelegatedProperties(source, propNames);
                };
                _.forEach(this.delegatedProperties, setDelegatedProperties);
            };
        return PropertyDelegator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseComponent = /** @class */ (function () {
        function BaseComponent() {
            this.log();
        }
        /**
         * @return {?}
         */
        BaseComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?=} isEnabled
         * @return {?}
         */
        BaseComponent.prototype.log = /**
         * @param {?=} isEnabled
         * @return {?}
         */
            function (isEnabled) {
                if (isEnabled === void 0) {
                    isEnabled = false;
                }
                if (isEnabled) {
                    /** @type {?} */
                    var date = new Date();
                    this.id = date.toISOString();
                    /** @type {?} */
                    var message = "The id of the " + this.constructor.name + " component is " + this.id;
                    console.log(message);
                }
            };
        //Mixin properties
        //Mixin properties
        /**
         * @param {...?} args
         * @return {?}
         */
        BaseComponent.prototype.inspectData =
            //Mixin properties
            /**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            };
        BaseComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-base',
                        template: '',
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BaseComponent.ctorParameters = function () { return []; };
        BaseComponent = __decorate([
            Mixin([DataInspector]),
            __metadata("design:paramtypes", [])
        ], BaseComponent);
        return BaseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [
        BaseComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AttributeListComponent = /** @class */ (function (_super) {
        __extends(AttributeListComponent, _super);
        function AttributeListComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        AttributeListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.attributeEntities$ = this.attributeEntity$
                    .pipe(operators.mergeMap(function (entity) {
                    return entity.getAttributeEntities$(_this.attributeEntityLabels$);
                }));
            };
        /**
         * @param {?} attributeEntity
         * @param {?} attribute
         * @return {?}
         */
        AttributeListComponent.prototype.getAttributeValue = /**
         * @param {?} attributeEntity
         * @param {?} attribute
         * @return {?}
         */
            function (attributeEntity, attribute) {
                return attributeEntity[attribute];
            };
        AttributeListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-attribute-list',
                        template: "<table *ngIf=\"attributeEntities$\" class='table table-bordered'>\n  <tbody>\n    <tr *ngFor=\"let attributeEntity of (attributeEntities$ | async)\">\n      <th *ngIf=\"attributeEntity\">\n        {{ getAttributeValue(\n        attributeEntity,\n        'displayName'\n        ) }}\n      </th>\n      <td *ngIf=\"attributeEntity\">\n        {{ getAttributeValue(\n        attributeEntity,\n        'value'\n        ) }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                        styles: [""]
                    }] }
        ];
        AttributeListComponent.propDecorators = {
            attributeEntity$: [{ type: i0.Input }],
            attributeEntityLabels$: [{ type: i0.Input }]
        };
        return AttributeListComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$1 = [
        AttributeListComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BodyComponent = /** @class */ (function (_super) {
        __extends(BodyComponent, _super);
        function BodyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BodyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-body',
                        template: "<div class=\"body-inner-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n",
                        styles: [".body-wrapper{-webkit-animation-duration:.5s;animation-duration:.5s}"]
                    }] }
        ];
        return BodyComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$2 = [
        BodyComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function (_super) {
        __extends(BreadcrumbComponent, _super);
        function BreadcrumbComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemSelected = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} item
         * @return {?}
         */
        BreadcrumbComponent.prototype.onItemClick = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var event = {
                    item: item
                };
                this.itemSelected.emit(event);
            };
        BreadcrumbComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-shared-breadcrumb',
                        template: "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li *ngFor=\"let item of breadcrumb$ | async\" class=\"breadcrumb-item\">\n      <a [ngClass]=\"{ 'active': item.isActive }\" href=\"#\"\n        (click)=\"onItemClick(item)\" ceoClickStopEventBubble>\n        {{item.displayValue}}\n      </a>\n    </li>\n  </ol>\n</nav>\n",
                        styles: [""]
                    }] }
        ];
        BreadcrumbComponent.propDecorators = {
            breadcrumb$: [{ type: i0.Input }],
            itemSelected: [{ type: i0.Output }]
        };
        return BreadcrumbComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$3 = [
        BreadcrumbComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectListComponent = /** @class */ (function (_super) {
        __extends(SelectListComponent, _super);
        function SelectListComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemEmitter = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} item
         * @return {?}
         */
        SelectListComponent.prototype.isSelectedItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return (this.selectedItem == item);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        SelectListComponent.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.selectedItem = item;
                this.emit();
            };
        /**
         * @return {?}
         */
        SelectListComponent.prototype.emit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var event = {
                    item: this.selectedItem
                };
                this.itemEmitter.emit(event);
            };
        SelectListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-select-list',
                        template: "<p>\n  select-list works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        SelectListComponent.propDecorators = {
            items$: [{ type: i0.Input }],
            selectedItem: [{ type: i0.Input }],
            itemEmitter: [{ type: i0.Output }]
        };
        return SelectListComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardSelectListComponent = /** @class */ (function (_super) {
        __extends(CardSelectListComponent, _super);
        function CardSelectListComponent() {
            return _super.call(this) || this;
        }
        CardSelectListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-shared-declarables-card-select-list',
                        template: "<div class=\"cards-wrapper\">\n  <div class=\"card-wrapper\"\n    *ngFor=\"let card of cards$ | async\"\n    (click)=\"select(card.data)\">\n\n    <shared-declarables-card\n      [card]=\"card\">\n    </shared-declarables-card>\n  </div>\n</div>\n\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CardSelectListComponent.ctorParameters = function () { return []; };
        CardSelectListComponent.propDecorators = {
            cards$: [{ type: i0.Input }]
        };
        return CardSelectListComponent;
    }(SelectListComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$4 = [
        CardSelectListComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardComponent = /** @class */ (function (_super) {
        __extends(CardComponent, _super);
        function CardComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-card',
                        template: "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"icon-wrapper\"\n      [ngClass]=\"card.iconThemeColor\">\n\n      <mat-icon class=\"svg-wrapper\" svgIcon=\"{{card.iconName}}\">\n      </mat-icon>\n\n    </div>\n    <h5 class=\"card-title\">{{card.title}}</h5>\n    <p class=\"card-text\">{{card.body}}</p>\n  </div>\n  <div *ngIf=\"card.footer\" class=\"card-footer\">\n    <a class=\"btn btn-primary btn-lg-curved\"\n    (click)=\"card.action()\" href=\"#\">\n      {{card.actionText}}\n    </a>\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        CardComponent.propDecorators = {
            card: [{ type: i0.Input }]
        };
        return CardComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$5 = [
        CardComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function padNumber(value) {
        if (_.isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    }
    var DateParserFormatter = /** @class */ (function () {
        function DateParserFormatter() {
        }
        // from input -> internal model
        // from input -> internal model
        /**
         * @param {?} value
         * @return {?}
         */
        DateParserFormatter.prototype.parse =
            // from input -> internal model
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    /** @type {?} */
                    var dateParts = value.trim().split('-');
                    if (dateParts.length === 1 && _.isNumber(dateParts[0])) {
                        return { year: _.toInteger(dateParts[0]), month: null, day: null };
                    }
                    else if (dateParts.length === 2 && _.isNumber(dateParts[0]) && _.isNumber(dateParts[1])) {
                        return { year: _.toInteger(dateParts[0]), month: _.toInteger(dateParts[1]), day: null };
                    }
                    else if (dateParts.length === 3 && _.isNumber(dateParts[0]) && _.isNumber(dateParts[1]) && _.isNumber(dateParts[2])) {
                        return { year: _.toInteger(dateParts[0]), month: _.toInteger(dateParts[1]), day: _.toInteger(dateParts[2]) };
                    }
                }
                return null;
            };
        // from internal model -> string
        // from internal model -> string
        /**
         * @param {?} date
         * @return {?}
         */
        DateParserFormatter.prototype.format =
            // from internal model -> string
            /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                if (!date) {
                    return '';
                }
                /** @type {?} */
                var separator = '/';
                /** @type {?} */
                var year = _.isNumber(date.year) ? padNumber(date.year) : '';
                /** @type {?} */
                var month = _.isNumber(date.month) ? padNumber(date.month) : '';
                /** @type {?} */
                var day = _.isNumber(date.day) ? padNumber(date.day) : '';
                return _.join([month, day, year], separator);
            };
        DateParserFormatter.decorators = [
            { type: i0.Injectable }
        ];
        return DateParserFormatter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatepickerComponent = /** @class */ (function (_super) {
        __extends(DatepickerComponent, _super);
        function DatepickerComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        DatepickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                _super.prototype.ngOnInit.call(this);
                this.control.valueChanges.subscribe(function (value) { return _this.onControlValue(value); });
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatepickerComponent.prototype.onDateSelect = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                //console.log("date selected")
            };
        /**
         * @param {?} value
         * @return {?}
         */
        DatepickerComponent.prototype.onControlValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                //console.log("on control value")
            };
        DatepickerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-datepicker',
                        template: "<div class=\"input-group\">\n  <input ngbDatepicker\n    [formControl]=\"control\"\n    (dateSelect)=\"onDateSelect($event)\"\n    #datepicker=\"ngbDatepicker\"\n    name=\"dp\"\n    class=\"form-control\"\n    placeholder=\"mm/dd/yy\">\n\n  <div class=\"input-group-append\"\n    (click)=\"datepicker.toggle()\">\n\n    <div class=\"input-group-text\">\n      <mat-icon class=\"svg-wrapper\" svgIcon=\"calendar\">\n      </mat-icon>\n    </div>\n  </div>\n</div>\n",
                        providers: [
                            {
                                provide: ngBootstrap.NgbDateParserFormatter,
                                useClass: DateParserFormatter,
                            },
                        ],
                        styles: [""]
                    }] }
        ];
        DatepickerComponent.propDecorators = {
            control: [{ type: i0.Input }]
        };
        return DatepickerComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$6 = [
        DatepickerComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownComponent = /** @class */ (function (_super) {
        __extends(DropdownComponent, _super);
        function DropdownComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemEvent = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} item
         * @return {?}
         */
        DropdownComponent.prototype.className = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var classes = [item.className];
                if (item.hasSubmenu()) {
                    classes.push('dropdown-column');
                }
                return _.join(classes, ' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DropdownComponent.prototype.onItemEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.itemEvent.emit(event);
            };
        DropdownComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dropdown',
                        template: "<div class=\"dropdown-menu animated fadeIn\">\n  <ceo-dropdown-item\n    *ngFor=\"let item of navigationMenu.items.sortedItems\"\n    [item]=\"item\"\n    [ngClass]=\"className(item)\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown-item>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        DropdownComponent.propDecorators = {
            navigationMenu: [{ type: i0.Input }],
            itemEvent: [{ type: i0.Output }]
        };
        return DropdownComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomContentComponent = /** @class */ (function (_super) {
        __extends(CustomContentComponent, _super);
        function CustomContentComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemEvent = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        CustomContentComponent.prototype.onRouteEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.item = this.item;
                this.itemEvent.emit(event);
            };
        CustomContentComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dropdown-custom-content',
                        template: "<div [innerHtml]=\"item.customContent | safeHtml\" ceoRouteTransformer\n  (routeEvent)=\"onRouteEvent($event)\">\n</div>\n",
                        styles: [""]
                    }] }
        ];
        CustomContentComponent.propDecorators = {
            item: [{ type: i0.Input }],
            itemEvent: [{ type: i0.Output }]
        };
        return CustomContentComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ItemComponent = /** @class */ (function (_super) {
        __extends(ItemComponent, _super);
        function ItemComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemEvent = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        ItemComponent.prototype.displayType = /**
         * @return {?}
         */
            function () {
                return this.item.displayType;
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemComponent.prototype.className = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var classes = [item.className];
                if (item.hasSubmenu()) {
                    classes.push('dropdown-column');
                }
                return _.join(classes, ' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ItemComponent.prototype.onItemEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.itemEvent.emit(event);
            };
        ItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dropdown-item',
                        template: "<div class=\"dropdown-item\"\n   [ngSwitch]=\"item.displayType\">\n\n  <ceo-dropdown-link\n    *ngSwitchCase=\"'link'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\">\n  </ceo-dropdown-link>\n\n  <ceo-dropdown-text\n    *ngSwitchCase=\"'text'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\">\n  </ceo-dropdown-text>\n\n  <ceo-dropdown-custom-content\n    *ngSwitchCase=\"'custom'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown-custom-content>\n\n  <div *ngIf=\"item.hasSubmenu()\" class=\"dropdown-submenu\">\n\n    <ceo-dropdown-item\n      *ngFor=\"let submenuItem of item.submenu.items.sortedItems\"\n      [item]=\"submenuItem\"\n      [ngClass]=\"className(submenuItem)\"\n      (itemEvent)=\"onItemEvent($event)\">\n    </ceo-dropdown-item>\n\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        ItemComponent.propDecorators = {
            item: [{ type: i0.Input }],
            itemEvent: [{ type: i0.Output }]
        };
        return ItemComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkComponent = /** @class */ (function (_super) {
        __extends(LinkComponent, _super);
        function LinkComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dropdown-link',
                        template: "<a class=\"dropdown-link\" href=\"{{item.url}}\" ceoRouteTransformer>\n  {{ item.displayValue }}\n</a>\n",
                        styles: [""]
                    }] }
        ];
        LinkComponent.propDecorators = {
            item: [{ type: i0.Input }]
        };
        return LinkComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextComponent = /** @class */ (function (_super) {
        __extends(TextComponent, _super);
        function TextComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dropdown-text',
                        template: "<span class=\"dropdown-text\">\n  {{ item.displayValue }}\n</span>\n",
                        styles: [""]
                    }] }
        ];
        TextComponent.propDecorators = {
            item: [{ type: i0.Input }]
        };
        return TextComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$7 = [
        DropdownComponent,
        ItemComponent,
        LinkComponent,
        TextComponent,
        CustomContentComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldComponent = /** @class */ (function (_super) {
        __extends(FieldComponent, _super);
        function FieldComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-field',
                        template: "<div class=\"form-group\">\n  <label [attr.for]=\"field.key\">{{field.label}}</label>\n\n  <shared-declarables-input\n    [field]=\"field\"\n    [formGroup]=\"formGroup\">\n  </shared-declarables-input>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        FieldComponent.propDecorators = {
            field: [{ type: i0.Input }],
            formGroup: [{ type: i0.Input }]
        };
        return FieldComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$8 = [
        FieldComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormGroupComponent = /** @class */ (function (_super) {
        __extends(FormGroupComponent, _super);
        function FormGroupComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} input
         * @return {?}
         */
        FormGroupComponent.prototype.isInputGroup = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                return (input.constructor.name == 'InputGroup');
            };
        FormGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-shared-form-group',
                        template: "<div *ngFor=\"let input of inputGroup\">\n  <div *ngIf=\"isInputGroup(input); then inputGroupTemplate else fieldTemplate\">\n  </div>\n\n  <ng-template #inputGroupTemplate>\n    <div><b>{{input.name}}</b></div>\n\n    <ceo-shared-form-group\n      [inputGroup]=\"input\"\n      [formGroup]=\"formGroup.get(input.key)\">\n    </ceo-shared-form-group>\n\n  </ng-template>\n\n  <ng-template #fieldTemplate>\n\n    <shared-declarables-field\n      [field]=\"input\"\n      [formGroup]=\"formGroup\">\n    </shared-declarables-field>\n\n  </ng-template>\n</div>\n\n",
                        styles: [""]
                    }] }
        ];
        FormGroupComponent.propDecorators = {
            inputGroup: [{ type: i0.Input }],
            formGroup: [{ type: i0.Input }]
        };
        return FormGroupComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$9 = [
        FormGroupComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiConfig = /** @class */ (function () {
        function ApiConfig(params) {
            this._url = params.url;
            this._defaultQueryParams = params.defaultQueryParams || {};
            this._defaultBodyParams = params.defaultBodyParams || {};
            this._resourceTypes = params.resourceTypes || {};
        }
        Object.defineProperty(ApiConfig.prototype, "url", {
            get: /**
             * @return {?}
             */ function () {
                return this._url;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiConfig.prototype, "defaultQueryParams", {
            get: /**
             * @return {?}
             */ function () {
                return this._defaultQueryParams;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiConfig.prototype, "defaultBodyParams", {
            get: /**
             * @return {?}
             */ function () {
                return this._defaultBodyParams;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiConfig.prototype, "resourceTypes", {
            get: /**
             * @return {?}
             */ function () {
                return this._resourceTypes;
            },
            enumerable: true,
            configurable: true
        });
        return ApiConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Breadcrumb = /** @class */ (function () {
        function Breadcrumb(items) {
            if (items === void 0) {
                items = [];
            }
            this.items = items;
            this.length = items.length;
        }
        // Iterator
        // Allows us to use the collections in angular directives
        // (i.e. ngFor, etc)
        // Iterator
        // Allows us to use the collections in angular directives
        // (i.e. ngFor, etc)
        /**
         * @return {?}
         */
        Breadcrumb.prototype[Symbol.iterator] =
            // Iterator
            // Allows us to use the collections in angular directives
            // (i.e. ngFor, etc)
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var current = 0;
                /** @type {?} */
                var items = this.items;
                return {
                    next: function () {
                        /** @type {?} */
                        var noItems = _.isEmpty(items);
                        /** @type {?} */
                        var value = noItems ? null : items[current++];
                        /** @type {?} */
                        var done = noItems ? true : current > items.length;
                        return {
                            value: value,
                            done: done
                        };
                    }
                };
            };
        return Breadcrumb;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Card = /** @class */ (function () {
        function Card(attributes) {
            this.setAttributes(attributes);
        }
        /**
         * @private
         * @param {?} attributes
         * @return {?}
         */
        Card.prototype.setAttributes = /**
         * @private
         * @param {?} attributes
         * @return {?}
         */
            function (attributes) {
                var _this = this;
                /** @type {?} */
                var setAttribute = function (value, key) {
                    _this[key] = value;
                };
                _.map(attributes, _.bind(setAttribute, this));
            };
        return Card;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Pane = /** @class */ (function () {
        function Pane(attributes) {
            this.setAttributes(attributes);
        }
        /**
         * @return {?}
         */
        Pane.prototype.toCard = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var attributes = {
                    data: this,
                    title: this.name,
                    iconName: this.iconName,
                };
                return new Card(attributes);
            };
        /**
         * @private
         * @param {?} status
         * @return {?}
         */
        Pane.prototype.setStatus = /**
         * @private
         * @param {?} status
         * @return {?}
         */
            function (status) {
                this.active = status;
            };
        /**
         * @private
         * @param {?} attributes
         * @return {?}
         */
        Pane.prototype.setAttributes = /**
         * @private
         * @param {?} attributes
         * @return {?}
         */
            function (attributes) {
                var _this = this;
                /** @type {?} */
                var setAttribute = function (value, key) {
                    _this[key] = value;
                };
                _.map(attributes, _.bind(setAttribute, this));
            };
        return Pane;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotificationService = /** @class */ (function () {
        function NotificationService() {
        }
        /**
         * @param {?} message
         * @param {?} action
         * @param {?} timeout
         * @return {?}
         */
        NotificationService.prototype.showNotification = /**
         * @param {?} message
         * @param {?} action
         * @param {?} timeout
         * @return {?}
         */
            function (message, action, timeout) { };
        NotificationService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NotificationService.ctorParameters = function () { return []; };
        return NotificationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbDateNativeAdapter = /** @class */ (function (_super) {
        __extends(NgbDateNativeAdapter, _super);
        function NgbDateNativeAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype.fromModel = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this.isValidDate(date) ? this.ngbDateStructFromValidDate(date) : null;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype.toModel = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date ? this.dateFromValidNgbDateStruct(date) : null;
            };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype.isValidDate = /**
         * @private
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return (date && _.has(date, 'getFullYear'));
            };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype.ngbDateStructFromValidDate = /**
         * @private
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                };
            };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype.dateFromValidNgbDateStruct = /**
         * @private
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return new Date(date.year, date.month - 1, date.day);
            };
        NgbDateNativeAdapter.decorators = [
            { type: i0.Injectable }
        ];
        return NgbDateNativeAdapter;
    }(ngBootstrap.NgbDateAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputControlService = /** @class */ (function () {
        function InputControlService() {
        }
        /**
         * @param {?} inputGroup
         * @return {?}
         */
        InputControlService.prototype.toFormGroup = /**
         * @param {?} inputGroup
         * @return {?}
         */
            function (inputGroup) {
                return this.buildFormGroup(inputGroup);
            };
        /**
         * @private
         * @param {?} inputGroup
         * @return {?}
         */
        InputControlService.prototype.buildFormGroup = /**
         * @private
         * @param {?} inputGroup
         * @return {?}
         */
            function (inputGroup) {
                return new forms.FormGroup(this.buildControls(inputGroup));
            };
        /**
         * @private
         * @param {?} inputGroup
         * @return {?}
         */
        InputControlService.prototype.buildControls = /**
         * @private
         * @param {?} inputGroup
         * @return {?}
         */
            function (inputGroup) {
                return _.reduce(inputGroup.inputs, _.bind(_.partial(this.buildAbstractControl, inputGroup), this), {});
            };
        /**
         * @private
         * @param {?} inputGroup
         * @param {?} controls
         * @param {?} input
         * @return {?}
         */
        InputControlService.prototype.buildAbstractControl = /**
         * @private
         * @param {?} inputGroup
         * @param {?} controls
         * @param {?} input
         * @return {?}
         */
            function (inputGroup, controls, input) {
                /** @type {?} */
                var build = this.getFormControlBuilder(input);
                input.key = this.generateInputKey(input, inputGroup);
                controls[input.key] = build(input);
                return controls;
            };
        /**
         * @private
         * @param {?} input
         * @return {?}
         */
        InputControlService.prototype.getFormControlBuilder = /**
         * @private
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (input.constructor.name == 'InputGroup') {
                    return _.bind(this.buildFormGroup, this);
                }
                else {
                    return _.bind(this.buildFormControl, this);
                }
            };
        /**
         * @private
         * @param {?} input
         * @param {?} inputGroup
         * @return {?}
         */
        InputControlService.prototype.generateInputKey = /**
         * @private
         * @param {?} input
         * @param {?} inputGroup
         * @return {?}
         */
            function (input, inputGroup) {
                return input.key;
            };
        /**
         * @private
         * @param {?} inputControl
         * @return {?}
         */
        InputControlService.prototype.buildFormControl = /**
         * @private
         * @param {?} inputControl
         * @return {?}
         */
            function (inputControl) {
                /** @type {?} */
                var value = inputControl.value || '';
                return new forms.FormControl(value, forms.Validators.compose(inputControl.validators));
            };
        return InputControlService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var csvToJson = csv_;
    var CsvToJsonService = /** @class */ (function () {
        function CsvToJsonService() {
        }
        /**
         * @param {?=} csvString
         * @param {?=} opts
         * @return {?}
         */
        CsvToJsonService.prototype.csvToJsonFromString = /**
         * @param {?=} csvString
         * @param {?=} opts
         * @return {?}
         */
            function (csvString, opts) {
                if (csvString === void 0) {
                    csvString = '';
                }
                if (opts === void 0) {
                    opts = {};
                }
                /** @type {?} */
                var defaults = {
                    noheader: false,
                };
                opts = _.extend(opts, defaults);
                return csvToJson(opts).fromString(csvString);
            };
        /**
         * @param {?=} filePath
         * @return {?}
         */
        CsvToJsonService.prototype.csvToJsonFromFilePath = /**
         * @param {?=} filePath
         * @return {?}
         */
            function (filePath) {
                if (filePath === void 0) {
                    filePath = '';
                }
                return csvToJson().fromFile(filePath);
            };
        CsvToJsonService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CsvToJsonService.ctorParameters = function () { return []; };
        /** @nocollapse */ CsvToJsonService.ngInjectableDef = i0.defineInjectable({ factory: function CsvToJsonService_Factory() { return new CsvToJsonService(); }, token: CsvToJsonService, providedIn: "root" });
        return CsvToJsonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var API_CONFIG = new i0.InjectionToken("API Config");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CUSTOM_ELEMENTS_CONFIG = new i0.InjectionToken("Custom Elements Config");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PaneList = new i0.InjectionToken("Pane List");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var providers = [
        {
            provide: API_CONFIG,
            useValue: {}
        },
        {
            provide: CUSTOM_ELEMENTS_CONFIG,
            useValue: {},
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaneFactory = /** @class */ (function () {
        function PaneFactory(paneList) {
            this.paneList = paneList;
        }
        /**
         * @return {?}
         */
        PaneFactory.prototype.build$ = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var panes = _.map(this.paneList, this.buildPane);
                return rxjs.of(panes);
            };
        /**
         * @private
         * @param {?} attributes
         * @return {?}
         */
        PaneFactory.prototype.buildPane = /**
         * @private
         * @param {?} attributes
         * @return {?}
         */
            function (attributes) {
                return new Pane(attributes);
            };
        PaneFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PaneFactory.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [PaneList,] }] }
            ];
        };
        /** @nocollapse */ PaneFactory.ngInjectableDef = i0.defineInjectable({ factory: function PaneFactory_Factory() { return new PaneFactory(i0.inject(PaneList)); }, token: PaneFactory, providedIn: "root" });
        return PaneFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaneProvider = /** @class */ (function () {
        function PaneProvider(paneFactory) {
            var _this = this;
            this.paneFactory = paneFactory;
            this._activePane$ = new rxjs.BehaviorSubject(null);
            this.panes = [];
            this._panes$ = this.paneFactory.build$();
            this._panes$.subscribe(function (panes) { return _this.setPanes(panes); });
        }
        Object.defineProperty(PaneProvider.prototype, "panes$", {
            get: /**
             * @return {?}
             */ function () {
                return this._panes$;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaneProvider.prototype, "activePane$", {
            get: /**
             * @return {?}
             */ function () {
                return this._activePane$.pipe(operators.startWith(this.activePaneFromPanes(this.panes)));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} pane
         * @param {?} activeStatus
         * @return {?}
         */
        PaneProvider.prototype.setPaneActiveStatus = /**
         * @param {?} pane
         * @param {?} activeStatus
         * @return {?}
         */
            function (pane, activeStatus) {
                pane.setStatus(activeStatus);
                if (activeStatus) {
                    this.emitActivePane(pane);
                }
                return true;
            };
        /**
         * @private
         * @param {?} panes
         * @return {?}
         */
        PaneProvider.prototype.emitActivePanes = /**
         * @private
         * @param {?} panes
         * @return {?}
         */
            function (panes) {
                /** @type {?} */
                var pane = this.activePaneFromPanes(panes);
                this.emitActivePane(pane);
            };
        /**
         * @private
         * @param {?} pane
         * @return {?}
         */
        PaneProvider.prototype.emitActivePane = /**
         * @private
         * @param {?} pane
         * @return {?}
         */
            function (pane) {
                this._activePane$.next(pane);
            };
        /**
         * @private
         * @param {?} panes
         * @return {?}
         */
        PaneProvider.prototype.setPanes = /**
         * @private
         * @param {?} panes
         * @return {?}
         */
            function (panes) {
                this.panes = panes;
                this.emitActivePanes(this.panes);
            };
        /**
         * @private
         * @param {?} panes
         * @return {?}
         */
        PaneProvider.prototype.activePaneFromPanes = /**
         * @private
         * @param {?} panes
         * @return {?}
         */
            function (panes) {
                return _.find(panes, 'active');
            };
        PaneProvider.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PaneProvider.ctorParameters = function () {
            return [
                { type: PaneFactory }
            ];
        };
        /** @nocollapse */ PaneProvider.ngInjectableDef = i0.defineInjectable({ factory: function PaneProvider_Factory() { return new PaneProvider(i0.inject(PaneFactory)); }, token: PaneProvider, providedIn: "root" });
        return PaneProvider;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaneManager = /** @class */ (function () {
        function PaneManager(paneProvider) {
            this.paneProvider = paneProvider;
        }
        Object.defineProperty(PaneManager.prototype, "panes$", {
            get: /**
             * @return {?}
             */ function () {
                return this.paneProvider.panes$;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaneManager.prototype, "activePane$", {
            get: /**
             * @return {?}
             */ function () {
                return this.paneProvider.activePane$;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} pane
         * @return {?}
         */
        PaneManager.prototype.activatePane = /**
         * @param {?} pane
         * @return {?}
         */
            function (pane) {
                var _this = this;
                /** @type {?} */
                var activePane$ = this.activePane$.pipe(operators.first());
                activePane$.subscribe(function (activePane) {
                    _this.setPaneActiveStatus(activePane, false);
                    _this.setPaneActiveStatus(pane, true);
                });
            };
        /**
         * @private
         * @param {?=} pane
         * @param {?=} activeStatus
         * @return {?}
         */
        PaneManager.prototype.setPaneActiveStatus = /**
         * @private
         * @param {?=} pane
         * @param {?=} activeStatus
         * @return {?}
         */
            function (pane, activeStatus) {
                if (pane === void 0) {
                    pane = null;
                }
                if (activeStatus === void 0) {
                    activeStatus = false;
                }
                if (!pane) {
                    return false;
                }
                return this.paneProvider.setPaneActiveStatus(pane, activeStatus);
            };
        PaneManager.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PaneManager.ctorParameters = function () {
            return [
                { type: PaneProvider }
            ];
        };
        /** @nocollapse */ PaneManager.ngInjectableDef = i0.defineInjectable({ factory: function PaneManager_Factory() { return new PaneManager(i0.inject(PaneProvider)); }, token: PaneManager, providedIn: "root" });
        return PaneManager;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RequestOptionsBuilder = /** @class */ (function () {
        function RequestOptionsBuilder(apiConfig) {
            this.apiConfig = apiConfig;
        }
        /**
         * @param {?} method
         * @param {?} url
         * @param {?} payload
         * @return {?}
         */
        RequestOptionsBuilder.prototype.build = /**
         * @param {?} method
         * @param {?} url
         * @param {?} payload
         * @return {?}
         */
            function (method, url, payload) {
                if (this.isBodyRequest(method)) {
                    return this.getBody(payload.resourceIdentifier.data);
                }
                else {
                    return this.getOptions(url, payload.resourceIdentifier);
                }
            };
        /**
         * @param {?} data
         * @return {?}
         */
        RequestOptionsBuilder.prototype.getBody = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var body = this.sanitizedParams(data);
                body = _.merge({}, body, this.apiConfig.defaultQueryParams);
                return {
                    body: body,
                    observe: 'response',
                };
            };
        /**
         * @param {?} url
         * @param {?} ri
         * @return {?}
         */
        RequestOptionsBuilder.prototype.getOptions = /**
         * @param {?} url
         * @param {?} ri
         * @return {?}
         */
            function (url, ri) {
                return {
                    params: this.getParams(ri),
                    responseType: this.getResponseType(url),
                    observe: 'response',
                };
            };
        /**
         * @param {?} ri
         * @return {?}
         */
        RequestOptionsBuilder.prototype.getParams = /**
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                /** @type {?} */
                var params = _.merge({}, this.apiConfig.defaultQueryParams, this.filterParams(ri));
                return core.jsonToQueryParamsObject(params);
            };
        /**
         * @param {?} url
         * @return {?}
         */
        RequestOptionsBuilder.prototype.getResponseType = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                if (this.isTextResponseType(url)) {
                    return 'text';
                }
                else {
                    return 'json';
                }
            };
        /**
         * @protected
         * @param {?} method
         * @return {?}
         */
        RequestOptionsBuilder.prototype.isBodyRequest = /**
         * @protected
         * @param {?} method
         * @return {?}
         */
            function (method) {
                /** @type {?} */
                var bodyMethods = ['post', 'put'];
                return _.includes(bodyMethods, method);
            };
        /**
         * @protected
         * @param {?} url
         * @return {?}
         */
        RequestOptionsBuilder.prototype.isTextResponseType = /**
         * @protected
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return _.endsWith(url, 'csv');
            };
        /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
        RequestOptionsBuilder.prototype.filterParams = /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                /** @type {?} */
                var filter = this.getFilter(ri);
                if (filter) {
                    return {
                        filter: this.sanitizedParams(filter)
                    };
                }
                else {
                    return {};
                }
            };
        /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
        RequestOptionsBuilder.prototype.getFilter = /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                return _.get(ri, 'filter');
            };
        /**
         * @protected
         * @param {?} params
         * @return {?}
         */
        RequestOptionsBuilder.prototype.sanitizedParams = /**
         * @protected
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var snakeCase = function (value, key) {
                    return _.snakeCase(key);
                };
                return _.mapKeys(params, snakeCase);
            };
        RequestOptionsBuilder.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        RequestOptionsBuilder.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [API_CONFIG,] }] }
            ];
        };
        return RequestOptionsBuilder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RequestUrlBuilder = /** @class */ (function () {
        function RequestUrlBuilder(apiConfig) {
            this.apiConfig = apiConfig;
        }
        /**
         * @param {?} ri
         * @return {?}
         */
        RequestUrlBuilder.prototype.build = /**
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                return this.getResourceTypeUrl(ri);
            };
        /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
        RequestUrlBuilder.prototype.getResourceTypeUrl = /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                /** @type {?} */
                var fragments = [
                    this.apiConfig.url,
                    this.getResourceTypeUrlFragment(ri),
                ];
                if (this.isSingleResourceRequest(ri)) {
                    /** @type {?} */
                    var singleRequestFragment = this.singleResourceRequestFragment(ri);
                    fragments.push(singleRequestFragment);
                }
                return _.join(fragments, '/');
            };
        /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
        RequestUrlBuilder.prototype.getResourceTypeUrlFragment = /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                /** @type {?} */
                var resourceType = this.getResourceType(ri);
                /** @type {?} */
                var resourceConfig = resourceType.config;
                return resourceConfig.urlFragment(ri);
            };
        /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
        RequestUrlBuilder.prototype.getResourceType = /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                /** @type {?} */
                var ofType = function (resourceType) {
                    return resourceType.config.hasResourceType(ri);
                };
                return _.find(this.apiConfig.resourceTypes, ofType);
            };
        /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
        RequestUrlBuilder.prototype.isSingleResourceRequest = /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                return !_.isNil(ri.id);
            };
        /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
        RequestUrlBuilder.prototype.singleResourceRequestFragment = /**
         * @protected
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                return ri.id;
            };
        RequestUrlBuilder.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        RequestUrlBuilder.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [API_CONFIG,] }] }
            ];
        };
        return RequestUrlBuilder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResponseParser = /** @class */ (function () {
        function ResponseParser() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ResponseParser.prototype.parse = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return _.flatten([data]);
            };
        ResponseParser.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ResponseParser.ngInjectableDef = i0.defineInjectable({ factory: function ResponseParser_Factory() { return new ResponseParser(); }, token: ResponseParser, providedIn: "root" });
        return ResponseParser;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiService = /** @class */ (function () {
        function ApiService(http$$1, csvToJsonService, responseParser, urlBuilder, optionsBuilder) {
            this.http = http$$1;
            this.csvToJsonService = csvToJsonService;
            this.responseParser = responseParser;
            this.urlBuilder = urlBuilder;
            this.optionsBuilder = optionsBuilder;
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.post$ = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return this.handleRequest$('post', payload);
            };
        /**
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.delete$ = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return this.handleRequest$('delete', payload);
            };
        /**
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.get$ = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return this.handleRequest$('get', payload);
            };
        /**
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.put$ = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return this.handleRequest$('put', payload);
            };
        // Aliases
        // Aliases
        /**
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.update$ =
            // Aliases
            /**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                return this.put$(payload);
            };
        /**
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.create$ = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return this.post$(payload);
            };
        // Private methods
        // Private methods
        /**
         * @private
         * @param {?} method
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.handleRequest$ =
            // Private methods
            /**
             * @private
             * @param {?} method
             * @param {?} payload
             * @return {?}
             */
            function (method, payload) {
                var _this = this;
                return this.executeRequest$(method, payload).pipe(operators.catchError(function (error) {
                    return _this.handleError$(error, payload);
                }), operators.mergeMap(function (response) {
                    return _this.processedResponse$(response, payload.resourceIdentifier);
                }));
            };
        /**
         * @private
         * @param {?} error
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.handleError$ = /**
         * @private
         * @param {?} error
         * @param {?} payload
         * @return {?}
         */
            function (error, payload) {
                console.error("Error in API Service: " + error);
                return rxjs.throwError(error);
            };
        /**
         * @private
         * @param {?} method
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.executeRequest$ = /**
         * @private
         * @param {?} method
         * @param {?} payload
         * @return {?}
         */
            function (method, payload) {
                /** @type {?} */
                var url = this.getUrl(payload.resourceIdentifier);
                /** @type {?} */
                var httpOpts = this.getHttpOpts(method, url, payload);
                return this.http[method](url, httpOpts);
            };
        /**
         * @private
         * @param {?} ri
         * @return {?}
         */
        ApiService.prototype.getUrl = /**
         * @private
         * @param {?} ri
         * @return {?}
         */
            function (ri) {
                return this.urlBuilder.build(ri);
            };
        /**
         * @private
         * @param {?} method
         * @param {?} url
         * @param {?} payload
         * @return {?}
         */
        ApiService.prototype.getHttpOpts = /**
         * @private
         * @param {?} method
         * @param {?} url
         * @param {?} payload
         * @return {?}
         */
            function (method, url, payload) {
                return this.optionsBuilder.build(method, url, payload);
            };
        /**
         * @private
         * @param {?} apiResponse
         * @param {?} ri
         * @return {?}
         */
        ApiService.prototype.processedResponse$ = /**
         * @private
         * @param {?} apiResponse
         * @param {?} ri
         * @return {?}
         */
            function (apiResponse, ri) {
                var _this = this;
                return this.jsonData$(apiResponse.body).pipe(operators.map(function (json) { return _this.sanitizedData(json, ri); }), operators.map(function (json) { return _this.buildApiResponse(json, ri); }));
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        ApiService.prototype.jsonData$ = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (_.isString(data)) {
                    return this.csvToJsonData$(data);
                }
                else {
                    return rxjs.of(data);
                }
            };
        // Remove empty keys and attributes
        // Remove empty keys and attributes
        /**
         * @private
         * @param {?} data
         * @param {?} ri
         * @return {?}
         */
        ApiService.prototype.sanitizedData =
            // Remove empty keys and attributes
            /**
             * @private
             * @param {?} data
             * @param {?} ri
             * @return {?}
             */
            function (data, ri) {
                /** @type {?} */
                var isSimpleVariable = function (value) {
                    return (_.isNumber(value) || _.isString(value));
                };
                /** @type {?} */
                var sanitize = function (object) {
                    // Removed this pickBy call -- null and empty string
                    // values are specified by backend and should
                    // be preserved; might this cause issues elsewhere?
                    // They should be fixed in the consumer.
                    //var filteredObject = _.pickBy(object, isPresent)
                    /** @type {?} */
                    var filteredObject = object;
                    /** @type {?} */
                    var finalFilter = function (obj) {
                        if (obj !== filteredObject && _.isPlainObject(obj)) {
                            return sanitize(obj);
                        }
                        else if (_.isArray(obj)) {
                            if (_.isEmpty(obj) || isSimpleVariable(obj[0])) {
                                return obj;
                            }
                            return _.reject(_.map(obj, sanitize), _.isEmpty);
                        }
                        return undefined;
                    };
                    return _.cloneDeepWith(filteredObject, finalFilter);
                };
                /** @type {?} */
                var sanitizedData;
                if (_.isArray(data)) {
                    sanitizedData = _.map(data, sanitize);
                }
                else {
                    sanitizedData = sanitize(data);
                }
                return sanitizedData;
            };
        /**
         * @private
         * @param {?} data
         * @param {?} ri
         * @return {?}
         */
        ApiService.prototype.buildApiResponse = /**
         * @private
         * @param {?} data
         * @param {?} ri
         * @return {?}
         */
            function (data, ri) {
                return {
                    data: this.responseParser.parse(data),
                    resourceIdentifier: ri,
                };
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        ApiService.prototype.csvToJsonData$ = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                /** @type {?} */
                var observable = rxjs.Observable.create(function (observer) {
                    /** @type {?} */
                    var jsonData = [];
                    /** @type {?} */
                    var jsonApiResponse = {
                        data: jsonData,
                        included: [],
                    };
                    /** @type {?} */
                    var onNext = function (json, index) {
                        /** @type {?} */
                        var isValid = function (propValue, propName) {
                            return !_.isNil(propValue);
                        };
                        /** @type {?} */
                        var sanitizedJson = _.pickBy(json, isValid);
                        jsonData.push(json);
                    };
                    /** @type {?} */
                    var onError = function (error) { return error; };
                    /** @type {?} */
                    var onComplete = function () {
                        return observer.next(jsonApiResponse);
                    };
                    /** @type {?} */
                    var converter = _this.csvToJsonService.csvToJsonFromString(data)
                        .subscribe(onNext, onError, onComplete);
                });
                return observable;
            };
        ApiService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: CsvToJsonService },
                { type: ResponseParser },
                { type: RequestUrlBuilder },
                { type: RequestOptionsBuilder }
            ];
        };
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services = [
        RequestOptionsBuilder,
        RequestUrlBuilder,
        ResponseParser,
        ApiService,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResponseParser$1 = /** @class */ (function () {
        function ResponseParser() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        ResponseParser.prototype.parse = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return _.castArray(payload.data).
                    concat(this.loadIncluded(payload));
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        ResponseParser.prototype.loadIncluded = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var buildIncluded = function (payloadData) {
                    return payloadData;
                };
                return _.map(data.included, buildIncluded);
            };
        ResponseParser.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ResponseParser.ngInjectableDef = i0.defineInjectable({ factory: function ResponseParser_Factory() { return new ResponseParser(); }, token: ResponseParser, providedIn: "root" });
        return ResponseParser;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$1 = [
        ResponseParser$1,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$2 = __spread(services, services$1);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthService = /** @class */ (function () {
        function AuthService(authService) {
            this.authService = authService;
            this.userSignedIn$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        AuthService.prototype.validate = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this
                    .authService.validateToken()
                    .subscribe(function (response) { return _this.handleValidationTokenResponse(response); }, function (error) { return _this.handleValidationError(error); });
            };
        /**
         * @return {?}
         */
        AuthService.prototype.signOutUser = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.authService.signOut().pipe(operators.map(function (res) {
                    _this.userSignedIn$.next(false);
                    return res;
                }));
            };
        /**
         * @param {?} signUpData
         * @return {?}
         */
        AuthService.prototype.registerUser = /**
         * @param {?} signUpData
         * @return {?}
         */
            function (signUpData) {
                var _this = this;
                return this.authService.registerAccount(signUpData).pipe(operators.map(function (res) {
                    _this.userSignedIn$.next(true);
                    return res;
                }));
            };
        /**
         * @param {?} signInData
         * @return {?}
         */
        AuthService.prototype.signInUser = /**
         * @param {?} signInData
         * @return {?}
         */
            function (signInData) {
                var _this = this;
                return this.authService.signIn(signInData)
                    .pipe(operators.map(function (response) {
                    _this.userSignedIn$.next(true);
                    return response;
                }));
            };
        /**
         * @return {?}
         */
        AuthService.prototype.userSignedIn = /**
         * @return {?}
         */
            function () {
                return this.authService.userSignedIn();
            };
        /**
         * @private
         * @param {?} response
         * @return {?}
         */
        AuthService.prototype.handleValidationTokenResponse = /**
         * @private
         * @param {?} response
         * @return {?}
         */
            function (response) {
                if (this.successfulLoginResponse(response)) {
                    this.userSignedIn$.next(response.json().success);
                }
                else {
                    this.userSignedIn$.next(false);
                }
            };
        /**
         * @private
         * @param {?} error
         * @return {?}
         */
        AuthService.prototype.handleValidationError = /**
         * @private
         * @param {?} error
         * @return {?}
         */
            function (error) {
                //console.log(error)
            };
        /**
         * @private
         * @param {?} response
         * @return {?}
         */
        AuthService.prototype.successfulLoginResponse = /**
         * @private
         * @param {?} response
         * @return {?}
         */
            function (response) {
                return response.status == 200;
            };
        AuthService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () {
            return [
                { type: angularToken.AngularTokenService }
            ];
        };
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$3 = [
        AuthService,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RequestCacheService = /** @class */ (function () {
        function RequestCacheService() {
            this.cacheEntries = [];
        }
        /**
         * @param {?} req
         * @return {?}
         */
        RequestCacheService.prototype.get = /**
         * @param {?} req
         * @return {?}
         */
            function (req) {
                return undefined;
            };
        /**
         * @param {?} req
         * @param {?} response
         * @return {?}
         */
        RequestCacheService.prototype.put = /**
         * @param {?} req
         * @param {?} response
         * @return {?}
         */
            function (req, response) {
                /** @type {?} */
                var cacheKey = 1;
                /** @type {?} */
                var cacheEntry = {
                    url: '',
                    response: response,
                    lastRead: 1,
                };
                this.cacheEntries[cacheKey] = cacheEntry;
            };
        RequestCacheService.decorators = [
            { type: i0.Injectable }
        ];
        return RequestCacheService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$4 = [
        RequestCacheService,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Manager = /** @class */ (function () {
        function Manager(_config) {
            this._config = _config;
            this.ngComponentPath = 'ngElementStrategy.componentRef.instance';
        }
        Object.defineProperty(Manager.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return _.reduce(this._config, _.merge);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} config
         * @return {?}
         */
        Manager.prototype.define = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                if (!this.elementExists(config.elementName)) {
                    /** @type {?} */
                    var customElement = this.buildCustomElement(this.elementConfig(config));
                    this.defineNativeCustomElement(config.elementName, customElement);
                }
            };
        /**
         * @param {?} elementName
         * @return {?}
         */
        Manager.prototype.elementExists = /**
         * @param {?} elementName
         * @return {?}
         */
            function (elementName) {
                return customElements.get(elementName) != null;
            };
        /**
         * @param {?} element
         * @return {?}
         */
        Manager.prototype.isCustomElement = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return this.hasNgComponent(element);
            };
        /**
         * @param {?} element
         * @return {?}
         */
        Manager.prototype.getNgComponent = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return _.get(element, this.ngComponentPath);
            };
        //Private methods
        //Private methods
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        Manager.prototype.hasNgComponent =
            //Private methods
            /**
             * @private
             * @param {?} element
             * @return {?}
             */
            function (element) {
                return _.has(element, this.ngComponentPath);
            };
        /**
         * @private
         * @param {?} elementName
         * @param {?} element
         * @return {?}
         */
        Manager.prototype.defineNativeCustomElement = /**
         * @private
         * @param {?} elementName
         * @param {?} element
         * @return {?}
         */
            function (elementName, element) {
                customElements.define(elementName, element);
            };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        Manager.prototype.buildCustomElement = /**
         * @private
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return elements.createCustomElement(config.ctor, config.opts);
            };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        Manager.prototype.elementConfig = /**
         * @private
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var defaultConfig = _.get(this.config, config.elementName, {});
                return _.merge(defaultConfig, config);
            };
        Manager.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Manager.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [CUSTOM_ELEMENTS_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ Manager.ngInjectableDef = i0.defineInjectable({ factory: function Manager_Factory() { return new Manager(i0.inject(CUSTOM_ELEMENTS_CONFIG)); }, token: Manager, providedIn: "root" });
        return Manager;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Factory = /** @class */ (function () {
        function Factory(manager) {
            this.manager = manager;
        }
        /**
         * @param {?} elementName
         * @param {?} inputs
         * @return {?}
         */
        Factory.prototype.build = /**
         * @param {?} elementName
         * @param {?} inputs
         * @return {?}
         */
            function (elementName, inputs) {
                /** @type {?} */
                var element = this.getElement(elementName, inputs);
                this.launchElement(element);
                return element;
            };
        //Private methods
        //Private methods
        /**
         * @private
         * @param {?} elementName
         * @param {?} inputs
         * @return {?}
         */
        Factory.prototype.getElement =
            //Private methods
            /**
             * @private
             * @param {?} elementName
             * @param {?} inputs
             * @return {?}
             */
            function (elementName, inputs) {
                if (this.manager.elementExists(elementName)) {
                    /** @type {?} */
                    var element = this.buildElementInstance(elementName);
                    return this.configureElementInstance(element, inputs);
                }
                else {
                    return this.defaultElement;
                }
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        Factory.prototype.launchElement = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                document
                    .getElementById("custom-elements-wrap")
                    .appendChild(( /** @type {?} */(element)));
            };
        /**
         * @private
         * @param {?} elementName
         * @return {?}
         */
        Factory.prototype.buildElementInstance = /**
         * @private
         * @param {?} elementName
         * @return {?}
         */
            function (elementName) {
                return ( /** @type {?} */(document.createElement(elementName)));
            };
        /**
         * @private
         * @param {?} element
         * @param {?} inputs
         * @return {?}
         */
        Factory.prototype.configureElementInstance = /**
         * @private
         * @param {?} element
         * @param {?} inputs
         * @return {?}
         */
            function (element, inputs) {
                /** @type {?} */
                var onClosed = function () {
                    return document.body.removeChild(element);
                };
                element.addEventListener('closed', onClosed);
                /** @type {?} */
                var setInput = function (value, prop) {
                    element[prop] = value;
                };
                _.forEach(inputs, setInput);
                return element;
            };
        Factory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Factory.ctorParameters = function () {
            return [
                { type: Manager }
            ];
        };
        /** @nocollapse */ Factory.ngInjectableDef = i0.defineInjectable({ factory: function Factory_Factory() { return new Factory(i0.inject(Manager)); }, token: Factory, providedIn: "root" });
        return Factory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$5 = [
        Manager,
        Factory,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CachingInterceptor = /** @class */ (function () {
        function CachingInterceptor(cache) {
            this.cache = cache;
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        CachingInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                if (!this.isCachable(req)) {
                    return next.handle(req);
                }
                /** @type {?} */
                var cachedResponse = this.cache.get(req);
                //sendRequest(req, next, this.cache)
                return cachedResponse ?
                    rxjs.of(cachedResponse) : next.handle(req);
            };
        /**
         * @private
         * @param {?} req
         * @return {?}
         */
        CachingInterceptor.prototype.isCachable = /**
         * @private
         * @param {?} req
         * @return {?}
         */
            function (req) {
                return false;
            };
        CachingInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CachingInterceptor.ctorParameters = function () {
            return [
                { type: RequestCacheService }
            ];
        };
        return CachingInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Pass untouched request through to the next request handler.
     */
    var NoopInterceptor = /** @class */ (function () {
        function NoopInterceptor() {
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        NoopInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                return next.handle(req);
            };
        NoopInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        return NoopInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$6 = [
        CachingInterceptor,
        NoopInterceptor,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var sharedServices = __spread([
        NotificationService,
        NgbDateNativeAdapter,
        InputControlService,
        CsvToJsonService,
        PaneFactory,
        PaneProvider,
        PaneManager
    ], services$2, services$3, services$4, services$5, services$6);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuard = /** @class */ (function () {
        function AuthGuard(authService, router$$1) {
            this.authService = authService;
            this.router = router$$1;
        }
        /**
         * @return {?}
         */
        AuthGuard.prototype.canActivate = /**
         * @return {?}
         */
            function () {
                if (this.authService.userSignedIn()) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            };
        AuthGuard.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () {
            return [
                { type: AuthService },
                { type: router.Router }
            ];
        };
        return AuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var sharedGuards = [
        AuthGuard,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormComponent = /** @class */ (function (_super) {
        __extends(FormComponent, _super);
        function FormComponent(inputControlService) {
            var _this = _super.call(this) || this;
            _this.inputControlService = inputControlService;
            return _this;
        }
        /**
         * @return {?}
         */
        FormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handleActions();
                this.inputGroup$
                    .subscribe(function (inputGroup) {
                    _this.inputGroup = inputGroup;
                    _this._formGroup = _this.inputControlService.toFormGroup(inputGroup);
                });
            };
        /**
         * @return {?}
         */
        FormComponent.prototype.handleActions = /**
         * @return {?}
         */
            function () {
                if (this.dataService && this.entity) {
                    this.dataService.handleDialogActions(this);
                }
            };
        Object.defineProperty(FormComponent.prototype, "formGroup", {
            get: /**
             * @return {?}
             */ function () {
                return this._formGroup;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormComponent.prototype.payload = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var payload = this.formGroup.value;
                if (this.defaultParams) {
                    return _.merge(payload, this.defaultParams);
                }
                else {
                    return payload;
                }
            };
        FormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-form',
                        template: "<div *ngIf=\"formGroup\">\n  <form [formGroup]=\"formGroup\">\n\n    <ceo-shared-form-group\n      [inputGroup]=\"inputGroup\"\n      [formGroup]=\"formGroup\">\n    </ceo-shared-form-group>\n\n  </form>\n</div>\n",
                        providers: [InputControlService],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FormComponent.ctorParameters = function () {
            return [
                { type: InputControlService }
            ];
        };
        FormComponent.propDecorators = {
            inputGroup$: [{ type: i0.Input }],
            dataService: [{ type: i0.Input }],
            entity: [{ type: i0.Input }],
            defaultParams: [{ type: i0.Input }]
        };
        return FormComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$a = [
        FormComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IframeComponent = /** @class */ (function (_super) {
        __extends(IframeComponent, _super);
        function IframeComponent(sanitizer) {
            var _this = _super.call(this) || this;
            _this.sanitizer = sanitizer;
            return _this;
        }
        /**
         * @return {?}
         */
        IframeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.url =
                    this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
            };
        IframeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-shared-iframe',
                        template: "<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe [src]=\"url\" allowfullscreen></iframe>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        IframeComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        IframeComponent.propDecorators = {
            url: [{ type: i0.Input }]
        };
        return IframeComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$b = [
        IframeComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputComponent = /** @class */ (function (_super) {
        __extends(InputComponent, _super);
        function InputComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(InputComponent.prototype, "isValid", {
            get: /**
             * @return {?}
             */ function () {
                return this.formGroup.controls[this.field.key].valid;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} option
         * @return {?}
         */
        InputComponent.prototype.selected = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                return (this.field.value == option.key);
            };
        /**
         * @param {?} values
         * @return {?}
         */
        InputComponent.prototype.checked = /**
         * @param {?} values
         * @return {?}
         */
            function (values) {
                return _.includes(values, this.field.value);
            };
        InputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-input',
                        template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"field.controlType\">\n\n    <input *ngSwitchCase=\"'textbox'\"\n      class=\"form-control\"\n      [formControlName]=\"field.key\"\n      [id]=\"field.key\"\n      [type]=\"field.controlType\"\n      [placeholder]=\"field.placeholder\">\n\n    <select *ngSwitchCase=\"'dropdown'\"\n      class=\"form-control\"\n      [id]=\"field.key\" \n      [formControlName]=\"field.key\">\n\n      <option *ngFor=\"let opt of field.options | async\"\n        [value]=\"opt.key\"\n        [selected]=\"selected(opt)\">\n      \n        {{opt.value}}\n\n      </option>\n    </select>\n\n    <div *ngSwitchCase=\"'radio'\">\n      <label *ngFor=\"let opt of field.options\">\n        {{opt.key}}\n        <input [formControlName]=\"field.key\"\n          [type]=\"field.controlType\"\n          [name]=\"field.key\"\n          [value]=\"opt.value\"\n          [checked]=\"checked(opt.values)\">\n      </label>\n    </div>\n\n    <input *ngSwitchCase=\"'checkbox'\"\n      class=\"form-control\"\n      [formControlName]=\"field.key\"\n      [id]=\"field.key\"\n      [type]=\"field.controlType\"\n      [name]=\"field.key\"\n      [checked]=\"checked([true, 1, 'yes', 'Yes'])\">\n\n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{field.label}} is required</div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        InputComponent.propDecorators = {
            formGroup: [{ type: i0.Input }],
            field: [{ type: i0.Input }]
        };
        return InputComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$c = [
        InputComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ItemComponent$1 = /** @class */ (function (_super) {
        __extends(ItemComponent, _super);
        function ItemComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.actionEmitter = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        ItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.attributeEntities$ = this.getAttributeEntities$();
            };
        /**
         * @return {?}
         */
        ItemComponent.prototype.getAttributeEntities$ = /**
         * @return {?}
         */
            function () {
                return this.entity.getAttributeEntities$(this.configHeader$);
            };
        /**
         * @param {?} entity
         * @param {?} action
         * @return {?}
         */
        ItemComponent.prototype.triggerAction = /**
         * @param {?} entity
         * @param {?} action
         * @return {?}
         */
            function (entity, action) {
                this.actionEmitter.emit({
                    entity: entity,
                    action: action
                });
            };
        /**
         * @param {?} attributeEntity
         * @return {?}
         */
        ItemComponent.prototype.getValue = /**
         * @param {?} attributeEntity
         * @return {?}
         */
            function (attributeEntity) {
                if (attributeEntity) {
                    switch (attributeEntity['value']) {
                        case null: {
                            return "nil";
                        }
                        case true: {
                            return "Yes";
                        }
                        case false: {
                            return "No";
                        }
                        default: {
                            return attributeEntity['value'];
                        }
                    }
                }
                else {
                    return '';
                }
            };
        /**
         * @param {?} headerAttribute
         * @return {?}
         */
        ItemComponent.prototype.getActions = /**
         * @param {?} headerAttribute
         * @return {?}
         */
            function (headerAttribute) {
                if (headerAttribute) {
                    return this.getActionArray(headerAttribute);
                }
                return [];
            };
        /**
         * @param {?} headerAttribute
         * @return {?}
         */
        ItemComponent.prototype.getActionArray = /**
         * @param {?} headerAttribute
         * @return {?}
         */
            function (headerAttribute) {
                if (headerAttribute['actions']) {
                    return this.checkActions(headerAttribute['actions']);
                }
                else {
                    return [];
                }
            };
        /**
         * @param {?} actions
         * @return {?}
         */
        ItemComponent.prototype.checkActions = /**
         * @param {?} actions
         * @return {?}
         */
            function (actions) {
                /** @type {?} */
                var _currentObj = this;
                /** @type {?} */
                var attributes = _.map(actions, function (action) {
                    if (action['check-attributes']) {
                        /** @type {?} */
                        var objs = _.filter(action['check-attributes'], function (condition) {
                            if (_currentObj.entity[condition['attribute']] != condition['value']) {
                                return false;
                            }
                            return true;
                        });
                        if (objs.length == action["check-attributes"].length) {
                            return action;
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        return action;
                    }
                });
                return _.compact(attributes);
            };
        ItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: '[shared-declarables-item]',
                        template: "<td *ngFor=\"let attributeEntity of attributeEntities$ | async\">\n  {{ getValue(attributeEntity) }}\n</td>\n<td>\n  <a *ngFor=\"let action of itemActions$ | async\"\n  (click)=\"triggerAction(entity, action.name)\">\n    {{ action.displayValue }}\n  </a>\n\n</td>\n",
                        styles: [""]
                    }] }
        ];
        ItemComponent.propDecorators = {
            entity: [{ type: i0.Input }],
            configHeader$: [{ type: i0.Input }],
            itemActions$: [{ type: i0.Input }],
            actionEmitter: [{ type: i0.Output }]
        };
        return ItemComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$d = [
        ItemComponent$1,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListComponent = /** @class */ (function (_super) {
        __extends(ListComponent, _super);
        function ListComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.searchAttributes = {};
            _this.actionEmitter = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} event_
         * @return {?}
         */
        ListComponent.prototype.triggerAction = /**
         * @param {?} event_
         * @return {?}
         */
            function (event_) {
                this.actionEmitter.emit({
                    entity: event_.entity,
                    action: event_.action
                });
            };
        ListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-list',
                        template: "<shared-declarables-table\n  [collection$]=\"collection$\"\n  [configHeader$]=\"configHeader$\"\n  (actionEmitter)=\"triggerAction($event)\">\n</shared-declarables-table>\n",
                        styles: [""]
                    }] }
        ];
        ListComponent.propDecorators = {
            collection$: [{ type: i0.Input }],
            configHeader$: [{ type: i0.Input }],
            searchAttributes: [{ type: i0.Input }],
            actionEmitter: [{ type: i0.Output }]
        };
        return ListComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$e = [
        ListComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavbarToggleComponent = /** @class */ (function (_super) {
        __extends(NavbarToggleComponent, _super);
        function NavbarToggleComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.animationClass = "hamburger--slider";
            _this.activeClass = "is-active";
            _this.ngClass = "";
            _this.state = 'inactive';
            _this.isActive = false;
            _this.toggleEmitter = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        NavbarToggleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.ngClass = this.getNgClass();
                this.setState();
            };
        /**
         * @private
         * @return {?}
         */
        NavbarToggleComponent.prototype.setState = /**
         * @private
         * @return {?}
         */
            function () {
                this.state = this.isActive ? 'active' : 'inactive';
            };
        /**
         * @return {?}
         */
        NavbarToggleComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var oldState = this.state;
                this.isActive = !this.isActive;
                this.setState();
                this.emitNewState(oldState);
                if (this.animation) {
                    this.animationClass = "hamburger--" + this.animation;
                }
            };
        /**
         * @private
         * @param {?} oldState
         * @return {?}
         */
        NavbarToggleComponent.prototype.emitNewState = /**
         * @private
         * @param {?} oldState
         * @return {?}
         */
            function (oldState) {
                /** @type {?} */
                var event = {
                    fromState: oldState,
                    toState: this.state
                };
                this.toggleEmitter.emit(event);
            };
        /**
         * @return {?}
         */
        NavbarToggleComponent.prototype.getNgClass = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var ngClasses = [this.animationClass];
                if (this.isActive) {
                    ngClasses.push(this.activeClass);
                }
                return _.join(ngClasses, " ");
            };
        NavbarToggleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sunray-shared-navbar-toggle',
                        template: "<button class=\"hamburger\"\n  [ngClass]=\"getNgClass()\"\n  (click)=\"toggle()\"\n  type=\"button\">\n\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                        styles: [""]
                    }] }
        ];
        NavbarToggleComponent.propDecorators = {
            animation: [{ type: i0.Input }],
            isActive: [{ type: i0.Input }],
            toggleEmitter: [{ type: i0.Output }]
        };
        return NavbarToggleComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$f = [
        NavbarToggleComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationComponent = /** @class */ (function (_super) {
        __extends(NavigationComponent, _super);
        function NavigationComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.menuClass = 'horizontal';
            _this.itemEvent = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        NavigationComponent.prototype.getMenuClass = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var classNames = ['menu', this.menuClass];
                return _.join(classNames, ' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NavigationComponent.prototype.onItemEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.itemEvent.emit(event);
            };
        NavigationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-navigation',
                        template: "<nav class=\"navbar navbar-expand-sm\">\n  <div class=\"collapse navbar-collapse\">\n    <ceo-navigation-nav\n      [navigationMenu]=\"navigationMenu\"\n      (itemEvent)=\"onItemEvent($event)\">\n    </ceo-navigation-nav>\n  </div>\n</nav>\n",
                        styles: [".menu{display:flex}.horizontal{flex-direction:row;justify-content:space-evenly}.horizontal .pane{flex-direction:column;width:150px;border-radius:.3rem}.horizontal .pane img{width:30px}.vertical{flex-direction:column}"]
                    }] }
        ];
        NavigationComponent.propDecorators = {
            navigationMenu: [{ type: i0.Input }],
            navigationLinks: [{ type: i0.Input }],
            menuClass: [{ type: i0.Input }],
            itemEvent: [{ type: i0.Output }]
        };
        return NavigationComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavItemComponent = /** @class */ (function (_super) {
        __extends(NavItemComponent, _super);
        function NavItemComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemEvent = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        NavItemComponent.prototype.className = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var classes = [this.item.className];
                if (this.item.hasSubmenu()) {
                    classes.push('dropdown');
                    classes.push('has-submenu');
                }
                return _.join(classes, ' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NavItemComponent.prototype.onItemEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.itemEvent.emit(event);
            };
        NavItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-navigation-nav-item',
                        template: "<li class=\"nav-item\"\n [ngClass]=\"className()\">\n\n  <ceo-navigation-nav-link\n    *ngIf=\"!item.disableLink\"\n    [ngClass]=\"className()\"\n    [item]=\"item\">\n  </ceo-navigation-nav-link>\n\n  <ceo-navigation-nav-text\n    *ngIf=\"item.disableLink\"\n    [ngClass]=\"className()\"\n    [item]=\"item\">\n  </ceo-navigation-nav-text>\n\n  <ceo-dropdown\n    *ngIf=\"item.hasSubmenu()\"\n    [navigationMenu]=\"item.submenu\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown>\n\n</li>\n",
                        styles: [""]
                    }] }
        ];
        NavItemComponent.propDecorators = {
            item: [{ type: i0.Input }],
            itemEvent: [{ type: i0.Output }]
        };
        return NavItemComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavLinkComponent = /** @class */ (function (_super) {
        __extends(NavLinkComponent, _super);
        function NavLinkComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NavLinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-navigation-nav-link',
                        template: "<a class=\"nav-link\" href=\"{{item.url}}\" ceoRouteTransformer>\n  {{ item.displayValue }}\n</a>\n",
                        styles: [""]
                    }] }
        ];
        NavLinkComponent.propDecorators = {
            item: [{ type: i0.Input }]
        };
        return NavLinkComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavComponent = /** @class */ (function (_super) {
        __extends(NavComponent, _super);
        function NavComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemEvent = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        NavComponent.prototype.onItemEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.itemEvent.emit(event);
            };
        NavComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-navigation-nav',
                        template: "<ul class=\"navbar-nav\">\n  <ceo-navigation-nav-item\n    *ngFor=\"let item of navigationMenu.items.sortedItems\"\n    [item]=\"item\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-navigation-nav-item>\n</ul>\n",
                        styles: [""]
                    }] }
        ];
        NavComponent.propDecorators = {
            navigationMenu: [{ type: i0.Input }],
            itemEvent: [{ type: i0.Output }]
        };
        return NavComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavTextComponent = /** @class */ (function (_super) {
        __extends(NavTextComponent, _super);
        function NavTextComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NavTextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-navigation-nav-text',
                        template: "<span class=\"nav-text\">\n  {{ item.displayValue }}\n</span>\n",
                        styles: [""]
                    }] }
        ];
        NavTextComponent.propDecorators = {
            item: [{ type: i0.Input }]
        };
        return NavTextComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$g = [
        NavigationComponent,
        NavItemComponent,
        NavLinkComponent,
        NavTextComponent,
        NavComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageComponent = /** @class */ (function (_super) {
        __extends(PageComponent, _super);
        function PageComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-page',
                        template: "<div class=\"page-inner-wrapper\">\n  <div class=\"body-wrapper\">\n    <ceo-body></ceo-body>\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        return PageComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$h = [
        PageComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaneComponent = /** @class */ (function (_super) {
        __extends(PaneComponent, _super);
        function PaneComponent(componentFactoryResolver) {
            var _this = _super.call(this) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            return _this;
        }
        /**
         * @return {?}
         */
        PaneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.launch();
            };
        /**
         * @private
         * @return {?}
         */
        PaneComponent.prototype.launch = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.pane$.subscribe(function (pane) {
                    _this.loadComponent(pane);
                });
            };
        /**
         * @private
         * @param {?} pane
         * @return {?}
         */
        PaneComponent.prototype.loadComponent = /**
         * @private
         * @param {?} pane
         * @return {?}
         */
            function (pane) {
                /** @type {?} */
                var component = this.createComponent(pane.componentFactory);
            };
        /**
         * @private
         * @param {?} component
         * @return {?}
         */
        PaneComponent.prototype.resolveComponentFactory = /**
         * @private
         * @param {?} component
         * @return {?}
         */
            function (component) {
                return this.componentFactoryResolver
                    .resolveComponentFactory(component);
            };
        /**
         * @private
         * @param {?} componentFactory
         * @return {?}
         */
        PaneComponent.prototype.createComponent = /**
         * @private
         * @param {?} componentFactory
         * @return {?}
         */
            function (componentFactory) {
                /** @type {?} */
                var viewContainerRef = this.containerDirective.viewContainerRef;
                viewContainerRef.clear();
                this.componentRef = viewContainerRef.createComponent(componentFactory);
                this.setInputs();
                return this.componentRef;
            };
        /**
         * @private
         * @return {?}
         */
        PaneComponent.prototype.setInputs = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.inputs) {
                    /** @type {?} */
                    var setInput = function (value, prop) {
                        _this.componentRef.instance[prop] = value;
                    };
                    _.forEach(this.inputs, setInput);
                }
            };
        PaneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-shared-declarables-pane',
                        template: "<ng-template shared-declarables-container>\n</ng-template>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PaneComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver }
            ];
        };
        PaneComponent.propDecorators = {
            containerDirective: [{ type: i0.ViewChild, args: [i0.forwardRef(function () { return ContainerDirective; }),] }],
            pane$: [{ type: i0.Input }],
            inputs: [{ type: i0.Input }]
        };
        return PaneComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$i = [
        PaneComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchComponent = /** @class */ (function (_super) {
        __extends(SearchComponent, _super);
        function SearchComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.search = new forms.FormControl('');
            _this.searchKeyEmitter = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        SearchComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.onValueChange();
            };
        /**
         * @return {?}
         */
        SearchComponent.prototype.onValueChange = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.search.valueChanges.subscribe(function (searchText) {
                    _this.searchKeyEmitter.emit({
                        searchText: searchText
                    });
                });
            };
        SearchComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-search',
                        template: "<input type=\"text\" [formControl]=\"search\" placeholder=\"enter search term here\">\n",
                        styles: [""]
                    }] }
        ];
        SearchComponent.propDecorators = {
            searchKeyEmitter: [{ type: i0.Output }]
        };
        return SearchComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$j = [
        SearchComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$k = [
        SelectListComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgLoaderComponent = /** @class */ (function (_super) {
        __extends(SvgLoaderComponent, _super);
        function SvgLoaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SvgLoaderComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var view = this._template.createEmbeddedView({ fromContext: 'John' });
                this.vc.insert(view);
            };
        SvgLoaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-svg-loader',
                        template: "<ng-template #template let-name='fromContext'>{{name}}</ng-template>\n<ng-container #vc></ng-container>\n",
                        styles: [""]
                    }] }
        ];
        SvgLoaderComponent.propDecorators = {
            _template: [{ type: i0.ViewChild, args: ['template', { read: i0.TemplateRef },] }],
            vc: [{ type: i0.ViewChild, args: ['vc', { read: i0.ViewContainerRef },] }]
        };
        return SvgLoaderComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$l = [
        SvgLoaderComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function (_super) {
        __extends(TableComponent, _super);
        function TableComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.searchAttributes = {};
            _this.actionEmitter = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} event_
         * @return {?}
         */
        TableComponent.prototype.triggerAction = /**
         * @param {?} event_
         * @return {?}
         */
            function (event_) {
                this.actionEmitter.emit({
                    entity: event_.entity,
                    action: event_.action
                });
            };
        TableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-table',
                        template: "<a *ngFor=\"let action of collectionActions$ | async\">\n  {{ action.displayValue }}\n</a>\n<table class='table table-bordered'>\n  <thead>\n    <tr>\n      <th *ngFor=\"let header of configHeader$ | async\">\n        {{ header.displayName }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let entity of collection$ | async | customSearch:searchAttributes\"\n      shared-declarables-item\n      [entity]=\"entity\"\n      [configHeader$]=\"configHeader$\"\n      [itemActions$]=\"itemActions$\"\n      (actionEmitter)=\"triggerAction($event)\">\n    </tr>\n  </tbody>\n</table>\n",
                        styles: [""]
                    }] }
        ];
        TableComponent.propDecorators = {
            collection$: [{ type: i0.Input }],
            configHeader$: [{ type: i0.Input }],
            itemActions$: [{ type: i0.Input }],
            collectionActions$: [{ type: i0.Input }],
            searchAttributes: [{ type: i0.Input }],
            actionEmitter: [{ type: i0.Output }]
        };
        return TableComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$m = [
        TableComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$n = __spread(components, components$1, components$2, components$3, components$4, components$5, components$6, components$7, components$8, components$9, components$a, components$b, components$c, components$d, components$e, components$f, components$g, components$h, components$i, components$j, components$k, components$l, components$m);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasePage = /** @class */ (function (_super) {
        __extends(BasePage, _super);
        function BasePage() {
            return _super.call(this) || this;
        }
        /**
         * @return {?}
         */
        BasePage.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        BasePage.decorators = [
            { type: i0.Component, args: [{
                        template: '',
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BasePage.ctorParameters = function () { return []; };
        return BasePage;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var pages = [
        BasePage,
    ];

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
    var DeclarablesModule = /** @class */ (function () {
        function DeclarablesModule() {
        }
        DeclarablesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            router.RouterModule,
                            ngBootstrap.NgbDatepickerModule,
                            angularMaterialModules,
                        ],
                        providers: [
                            {
                                provide: ngBootstrap.NgbDateAdapter,
                                useClass: ngBootstrap.NgbDateNativeAdapter
                            },
                        ],
                        declarations: __spread(directives, pipes, components$n, pages),
                        exports: __spread(components$n, pages, directives, pipes),
                        entryComponents: __spread(components$n, pages)
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
    var ProvidersModule = /** @class */ (function () {
        function ProvidersModule() {
        }
        ProvidersModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            DeclarablesModule,
                        ],
                        providers: __spread(sharedServices, sharedGuards, providers),
                    },] }
        ];
        return ProvidersModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseComponent = /** @class */ (function (_super) {
        __extends(CloseComponent, _super);
        function CloseComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.close = new i0.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        CloseComponent.prototype.onClose = /**
         * @return {?}
         */
            function () {
                this.close.emit();
            };
        CloseComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dialog-close',
                        template: "<button type=\"button\"\n  class=\"close modal-close btn btn-lg btn-lg-curved\"\n  aria-label=\"Close\"\n  (click)=\"onClose()\">\n\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n",
                        styles: [""]
                    }] }
        ];
        CloseComponent.propDecorators = {
            close: [{ type: i0.Output }]
        };
        return CloseComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogComponent = /** @class */ (function (_super) {
        __extends(DialogComponent, _super);
        function DialogComponent(dialogRef, data) {
            var _this = _super.call(this) || this;
            _this.dialogRef = dialogRef;
            _this.data = data;
            _this.contentElementId = 'dialog-content';
            return _this;
        }
        /**
         * @return {?}
         */
        DialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                _super.prototype.ngOnInit.call(this);
                this.data.actions$.subscribe(function (action) { return _this.onAction(action); });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DialogComponent.prototype.onClose = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.dialogRef.close('close');
                this.emitAction(this.buildAction('close'));
            };
        /**
         * @param {?} action
         * @return {?}
         */
        DialogComponent.prototype.onAction = /**
         * @param {?} action
         * @return {?}
         */
            function (action) {
                //console.log("We have the dialog action " + action.name)
            };
        /**
         * @private
         * @param {?} name
         * @param {?=} payload
         * @return {?}
         */
        DialogComponent.prototype.buildAction = /**
         * @private
         * @param {?} name
         * @param {?=} payload
         * @return {?}
         */
            function (name, payload) {
                if (payload === void 0) {
                    payload = null;
                }
                return {
                    name: name,
                    payload: payload
                };
            };
        /**
         * @param {?} action
         * @return {?}
         */
        DialogComponent.prototype.emitAction = /**
         * @param {?} action
         * @return {?}
         */
            function (action) {
                this.data.actions$.next(action);
            };
        DialogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dialog',
                        template: "<div id=\"dialog-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DialogComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return DialogComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetComponent = /** @class */ (function (_super) {
        __extends(WidgetComponent, _super);
        function WidgetComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dialog-widget',
                        template: "<div class=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n\n  <ceo-dialog-widget-header\n    class=\"modal-header\"\n    *ngIf=\"data.header.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [data]=\"data.header\">\n  </ceo-dialog-widget-header>\n\n  <div class=\"modal-body\">\n    <mat-dialog-content>\n      <div *ngIf=\"data.navigationLinks\" class='navigation-wrapper'>\n        <ceo-navigation\n          [navigationLinks]=\"data.navigationLinks\"\n          [menuClass]=\"'vertical'\">\n        </ceo-navigation>\n      </div>\n\n      <div id=\"dialog-content\" class=\"modal-window\">\n        <ng-template shared-declarables-container>\n        </ng-template>\n      </div>\n\n    </mat-dialog-content>\n  </div>\n\n  <ceo-dialog-widget-footer\n    class=\"modal-footer\"\n    *ngIf=\"data.footer.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [ngClass]=\"data.footer.className\"\n    [data]=\"data.footer\">\n  </ceo-dialog-widget-footer>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        return WidgetComponent;
    }(DialogComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function (_super) {
        __extends(HeaderComponent, _super);
        function HeaderComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.actionEmitter = new i0.EventEmitter();
            return _this;
        }
        HeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dialog-widget-header',
                        template: "<div class=\"modal-header-inner-wrapper\">\n\n  <h2 mat-dialog-title class=\"modal-title title\">{{ data.title }}</h2>\n\n</div>\n",
                        styles: [""]
                    }] }
        ];
        HeaderComponent.propDecorators = {
            data: [{ type: i0.Input }],
            actionEmitter: [{ type: i0.Output }]
        };
        return HeaderComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function (_super) {
        __extends(FooterComponent, _super);
        function FooterComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.actionEmitter = new i0.EventEmitter();
            return _this;
        }
        /**
         * @param {?} action
         * @return {?}
         */
        FooterComponent.prototype.onTriggerAction = /**
         * @param {?} action
         * @return {?}
         */
            function (action) {
                /** @type {?} */
                var dialogAction = {
                    name: action.name,
                    payload: null
                };
                this.actionEmitter.emit(dialogAction);
            };
        FooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-dialog-widget-footer',
                        template: "<mat-dialog-actions>\n  <a *ngFor=\"let action of data.actions\"\n    href=\"{{action.url}}\"\n    class=\"{{action.className}}\"\n    ceoClickStopEventBubble\n    (click)=\"onTriggerAction(action)\"\n    href=\"{{action.url}}\">\n    {{action.text}}\n  </a>\n</mat-dialog-actions>\n",
                        styles: [""]
                    }] }
        ];
        FooterComponent.propDecorators = {
            data: [{ type: i0.Input }],
            actionEmitter: [{ type: i0.Output }]
        };
        return FooterComponent;
    }(BaseComponent));

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
    var ModalNavigationItemComponent = /** @class */ (function (_super) {
        __extends(ModalNavigationItemComponent, _super);
        function ModalNavigationItemComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ModalNavigationItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-modal-navigation-item',
                        template: "<p>\n  modal-navigation-item works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        return ModalNavigationItemComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalComponent = /** @class */ (function (_super) {
        __extends(ModalComponent, _super);
        function ModalComponent(dialogRef, data) {
            var _this = _super.call(this) || this;
            _this.dialogRef = dialogRef;
            _this.data = data;
            _this.contentElementId = 'modal-content';
            return _this;
        }
        /**
         * @return {?}
         */
        ModalComponent.prototype.afterClosed = /**
         * @return {?}
         */
            function () {
                return this.dialogRef.afterClosed();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ModalComponent.prototype.onAction = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.action.name == 'cancel') {
                    this.dialogRef.close(event.action.name);
                }
                else {
                    this.data.actions$.next(event);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ModalComponent.prototype.onClose = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.dialogRef.close('close');
            };
        ModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'shared-declarables-modal',
                        template: "<div id=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ModalComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return ModalComponent;
    }(BaseComponent));

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
    /** @type {?} */
    var DIALOGS_CONFIG = new i0.InjectionToken("Dialogs Config");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initAction = {
        name: 'init',
        payload: null,
    };
    /** @type {?} */
    var defaultDialogsConfig = {
        isDefault: true,
        defaults: {
            actions$: new rxjs.BehaviorSubject(initAction),
            componentType: DialogComponent,
            width: '500px',
            header: {
                show: false,
            },
            footer: {
                show: false,
            },
        },
        dialogs: {}
    };
    /** @type {?} */
    var providers$1 = [
        {
            provide: DIALOGS_CONFIG,
            useValue: defaultDialogsConfig,
            multi: true,
        },
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigService = /** @class */ (function () {
        function ConfigService(customElementManager, dialogsConfig) {
            this.customElementManager = customElementManager;
            this.dialogsConfig = dialogsConfig;
        }
        /**
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
        ConfigService.prototype.provide = /**
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
            function (dialogElement, config) {
                /** @type {?} */
                var component = this.getComponent(dialogElement);
                config = this.getDialogConfig(dialogElement, config);
                /** @type {?} */
                var configActions = this.dialogConfigActions(component);
                return _.defaultsDeep(config, configActions, this.defaults);
            };
        Object.defineProperty(ConfigService.prototype, "dialogs", {
            get: /**
             * @return {?}
             */ function () {
                return _.reduce(_.map(this.dialogsConfig, 'dialogs'), _.merge);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigService.prototype, "defaults", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var defaults = this.defaultConfig.defaults;
                /** @type {?} */
                var others = {
                    componentType: DialogComponent,
                };
                return _.merge(defaults, others);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigService.prototype, "defaultConfig", {
            get: /**
             * @return {?}
             */ function () {
                return ( /** @type {?} */(_.find(this.dialogsConfig, { isDefault: true })));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
        ConfigService.prototype.getDialogConfig = /**
         * @private
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
            function (dialogElement, config) {
                /** @type {?} */
                var dialogName;
                if (this.customElementManager.isCustomElement(dialogElement)) {
                    dialogName = dialogElement.localName;
                }
                if (_.isString(config)) {
                    dialogName = config;
                }
                if (dialogName) {
                    return _.get(this.dialogs, dialogName, this.defaults);
                }
                else {
                    return config;
                }
            };
        /**
         * @private
         * @param {?} component
         * @return {?}
         */
        ConfigService.prototype.dialogConfigActions = /**
         * @private
         * @param {?} component
         * @return {?}
         */
            function (component) {
                if (component.dialogActions$) {
                    return {
                        actions$: component.dialogActions$
                    };
                }
                return {};
            };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        ConfigService.prototype.getComponent = /**
         * @private
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var component = element;
                if (this.customElementManager.isCustomElement(element)) {
                    component = this.customElementManager.getNgComponent(element);
                }
                return ( /** @type {?} */(component));
            };
        ConfigService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConfigService.ctorParameters = function () {
            return [
                { type: Manager },
                { type: undefined, decorators: [{ type: i0.Inject, args: [DIALOGS_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(Manager), i0.inject(DIALOGS_CONFIG)); }, token: ConfigService, providedIn: "root" });
        return ConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatDialogAdapterService = /** @class */ (function () {
        function MatDialogAdapterService(dialog) {
            this.dialog = dialog;
            this.adapterConfigProperties = [
                'width', 'height',
            ];
            this.nonDataProperties = [
                'componentType',
            ];
        }
        /**
         * @param {?} contentElement
         * @param {?} dialogConfig
         * @return {?}
         */
        MatDialogAdapterService.prototype.open = /**
         * @param {?} contentElement
         * @param {?} dialogConfig
         * @return {?}
         */
            function (contentElement, dialogConfig) {
                /** @type {?} */
                var config = this.buildAdapterDialogConfig(dialogConfig);
                /** @type {?} */
                var dialogComponentType = dialogConfig.componentType;
                /** @type {?} */
                var matDialogComponent = this.getMatDialog(dialogComponentType, config);
                /** @type {?} */
                var dialogComponent = this.getDialogComponent(matDialogComponent);
                return this.configuredDialogComponent(dialogComponent, contentElement);
            };
        /**
         * @return {?}
         */
        MatDialogAdapterService.prototype.closeAll = /**
         * @return {?}
         */
            function () {
                this.dialog.closeAll();
            };
        /**
         * @private
         * @param {?} dialogComponentType
         * @param {?} config
         * @return {?}
         */
        MatDialogAdapterService.prototype.getMatDialog = /**
         * @private
         * @param {?} dialogComponentType
         * @param {?} config
         * @return {?}
         */
            function (dialogComponentType, config) {
                return this.dialog.open(dialogComponentType, config);
            };
        /**
         * @private
         * @param {?} matDialog
         * @return {?}
         */
        MatDialogAdapterService.prototype.getDialogComponent = /**
         * @private
         * @param {?} matDialog
         * @return {?}
         */
            function (matDialog) {
                /** @type {?} */
                var dialogComponent = ( /** @type {?} */(matDialog.componentInstance));
                this.connectDialogs(matDialog, dialogComponent);
                return dialogComponent;
            };
        /**
         * @private
         * @param {?} matDialog
         * @param {?} dialogComponent
         * @return {?}
         */
        MatDialogAdapterService.prototype.connectDialogs = /**
         * @private
         * @param {?} matDialog
         * @param {?} dialogComponent
         * @return {?}
         */
            function (matDialog, dialogComponent) {
                /*
                //Gets an observable that is notified when the dialog is finished opening.
                afterOpened
            
                //Gets an observable that emits when the overlay's backdrop has been clicked.
                backdropClick
            
                //Gets an observable that is notified when the dialog has started closing.
                beforeClosed
            
                //Gets an observable that emits when keydown events are targeted on the overlay.
                keydownEvents
                */
                /*
                    //Gets an observable that is notified when the dialog is finished opening.
                    afterOpened
                
                    //Gets an observable that emits when the overlay's backdrop has been clicked.
                    backdropClick
                
                    //Gets an observable that is notified when the dialog has started closing.
                    beforeClosed
                
                    //Gets an observable that emits when keydown events are targeted on the overlay.
                    keydownEvents
                    */
                /** @type {?} */
                var matDialogEventNames = [
                    'afterClosed', 'afterOpened', 'backdropClick',
                    'beforeClosed', 'keydownEvents'
                ];
                /** @type {?} */
                var attachMatDialogEvent = function (eventName) {
                    matDialog[eventName]().subscribe(function (event) {
                        /** @type {?} */
                        var action = {
                            name: eventName,
                            payload: dialogComponent,
                        };
                        dialogComponent.data.actions$.next(action);
                    });
                };
                _.forEach(matDialogEventNames, attachMatDialogEvent);
                dialogComponent.data.actions$.subscribe(function (action) {
                    if (action.name == 'close') {
                        matDialog.close(action);
                    }
                });
            };
        /**
         * @private
         * @param {?} dialogConfig
         * @return {?}
         */
        MatDialogAdapterService.prototype.buildAdapterDialogConfig = /**
         * @private
         * @param {?} dialogConfig
         * @return {?}
         */
            function (dialogConfig) {
                /** @type {?} */
                var dialogComponentData = {
                    data: this.buildComponentData(dialogConfig)
                };
                /** @type {?} */
                var adapterDialogConfig = _.pick(dialogConfig, this.adapterConfigProperties);
                return _.merge(adapterDialogConfig, dialogComponentData);
            };
        /**
         * @private
         * @param {?} dialogConfig
         * @return {?}
         */
        MatDialogAdapterService.prototype.buildComponentData = /**
         * @private
         * @param {?} dialogConfig
         * @return {?}
         */
            function (dialogConfig) {
                return dialogConfig;
            };
        /**
         * @private
         * @param {?} dialogComponent
         * @param {?} contentElement
         * @return {?}
         */
        MatDialogAdapterService.prototype.configuredDialogComponent = /**
         * @private
         * @param {?} dialogComponent
         * @param {?} contentElement
         * @return {?}
         */
            function (dialogComponent, contentElement) {
                this.addContentComponent(dialogComponent, contentElement);
                return ( /** @type {?} */(dialogComponent));
            };
        /**
         * @private
         * @param {?} dialogComponent
         * @param {?} contentElement
         * @return {?}
         */
        MatDialogAdapterService.prototype.addContentComponent = /**
         * @private
         * @param {?} dialogComponent
         * @param {?} contentElement
         * @return {?}
         */
            function (dialogComponent, contentElement) {
                this.showContentComponent(dialogComponent, contentElement);
                this.launchContentComponent(dialogComponent);
            };
        /**
         * @private
         * @param {?} dialogComponent
         * @param {?} contentElement
         * @return {?}
         */
        MatDialogAdapterService.prototype.showContentComponent = /**
         * @private
         * @param {?} dialogComponent
         * @param {?} contentElement
         * @return {?}
         */
            function (dialogComponent, contentElement) {
                document
                    .getElementById(dialogComponent.contentElementId)
                    .appendChild(( /** @type {?} */(contentElement)));
            };
        /**
         * @private
         * @param {?} dialogComponent
         * @return {?}
         */
        MatDialogAdapterService.prototype.launchContentComponent = /**
         * @private
         * @param {?} dialogComponent
         * @return {?}
         */
            function (dialogComponent) {
                /** @type {?} */
                var action = this.buildLaunchAction(dialogComponent);
                dialogComponent.data.actions$.next(( /** @type {?} */(action)));
            };
        /**
         * @private
         * @param {?} dialogComponent
         * @return {?}
         */
        MatDialogAdapterService.prototype.buildLaunchAction = /**
         * @private
         * @param {?} dialogComponent
         * @return {?}
         */
            function (dialogComponent) {
                return {
                    name: 'launch',
                    payload: {
                        dialogRef: dialogComponent.dialogRef
                    }
                };
            };
        MatDialogAdapterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MatDialogAdapterService.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        /** @nocollapse */ MatDialogAdapterService.ngInjectableDef = i0.defineInjectable({ factory: function MatDialogAdapterService_Factory() { return new MatDialogAdapterService(i0.inject(i1.MatDialog)); }, token: MatDialogAdapterService, providedIn: "root" });
        return MatDialogAdapterService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogService = /** @class */ (function () {
        function DialogService(dialogAdapter, configService) {
            this.dialogAdapter = dialogAdapter;
            this.configService = configService;
        }
        /**
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
        DialogService.prototype.open = /**
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
            function (dialogElement, config) {
                config = this.buildDialogConfig(dialogElement, config);
                return this.openVendorDialog(dialogElement, config);
            };
        /**
         * @return {?}
         */
        DialogService.prototype.closeAll = /**
         * @return {?}
         */
            function () {
                this.dialogAdapter.closeAll();
            };
        /**
         * @private
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
        DialogService.prototype.buildDialogConfig = /**
         * @private
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
            function (dialogElement, config) {
                return this.configService.provide(dialogElement, config);
            };
        /**
         * @private
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
        DialogService.prototype.openVendorDialog = /**
         * @private
         * @param {?} dialogElement
         * @param {?} config
         * @return {?}
         */
            function (dialogElement, config) {
                return this.dialogAdapter.open(dialogElement, config);
            };
        DialogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DialogService.ctorParameters = function () {
            return [
                { type: MatDialogAdapterService },
                { type: ConfigService }
            ];
        };
        /** @nocollapse */ DialogService.ngInjectableDef = i0.defineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.inject(MatDialogAdapterService), i0.inject(ConfigService)); }, token: DialogService, providedIn: "root" });
        return DialogService;
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
    var components$o = [
        WidgetComponent,
        HeaderComponent,
        FooterComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$p = __spread([
        CloseComponent,
        DialogComponent
    ], components$o);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$q = [
        ModalComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$r = [
        ModalNavigationItemComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$s = __spread(components$p, components$q, components$r);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$7 = [
        ConfigService,
        DialogService,
        MatDialogAdapterService,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var angularMaterialModules$1 = [
        material.MatDialogModule,
    ];
    var CeoDialogsModule = /** @class */ (function () {
        function CeoDialogsModule() {
        }
        /**
         * @return {?}
         */
        CeoDialogsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: CeoDialogsModule,
                    providers: __spread(services$7, providers$1),
                };
            };
        CeoDialogsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            ngBootstrap.NgbDatepickerModule,
                            ngxScrollreveal.NgsRevealModule,
                            angularMaterialModules$1,
                            DeclarablesModule,
                        ],
                        declarations: __spread(components$s),
                        exports: __spread(components$s),
                        entryComponents: __spread(components$s)
                    },] }
        ];
        return CeoDialogsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormMember = /** @class */ (function () {
        function FormMember(props) {
            if (props === void 0) {
                props = {};
            }
            Object.assign(this, props);
        }
        Object.defineProperty(FormMember.prototype, "ngControl", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngControl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormMember.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this.ngControl.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormMember.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this.ngControl.valid;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormMember.prototype.markAsTouchedAndDirty = /**
         * @return {?}
         */
            function () {
                this.markAsTouched();
                this.markAsDirty();
            };
        /**
         * @return {?}
         */
        FormMember.prototype.markAsTouched = /**
         * @return {?}
         */
            function () {
                this.ngControl.markAsTouched();
            };
        /**
         * @return {?}
         */
        FormMember.prototype.markAsDirty = /**
         * @return {?}
         */
            function () {
                this.ngControl.markAsDirty();
            };
        return FormMember;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormGroup = /** @class */ (function (_super) {
        __extends(FormGroup, _super);
        function FormGroup(props) {
            if (props === void 0) {
                props = {};
            }
            var _this = _super.call(this, props) || this;
            _this.type = 'form-group';
            return _this;
        }
        Object.defineProperty(FormGroup.prototype, "ngControl", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngControl;
            },
            set: /**
             * @param {?} ngControl
             * @return {?}
             */ function (ngControl) {
                this._ngControl = ngControl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroup.prototype, "memberNames", {
            get: /**
             * @return {?}
             */ function () {
                return _.keys(this.members);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} memberName
         * @return {?}
         */
        FormGroup.prototype.getMember = /**
         * @param {?} memberName
         * @return {?}
         */
            function (memberName) {
                return this.members[memberName];
            };
        Object.defineProperty(FormGroup.prototype, "members", {
            get: /**
             * @return {?}
             */ function () {
                return this._members;
            },
            set: /**
             * @param {?} members
             * @return {?}
             */ function (members) {
                this._members = members;
            },
            enumerable: true,
            configurable: true
        });
        //Marks the control as touched. A control is touched by focus and blur events
        //that do not change the value.
        //Marks the control as touched. A control is touched by focus and blur events
        //that do not change the value.
        /**
         * @return {?}
         */
        FormGroup.prototype.markAsTouched =
            //Marks the control as touched. A control is touched by focus and blur events
            //that do not change the value.
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var marker = 'markAsTouched';
                this.applyMarker(marker);
            };
        //Marks the control as dirty. A control becomes dirty when the
        //control's value is changed through the UI
        //Marks the control as dirty. A control becomes dirty when the
        //control's value is changed through the UI
        /**
         * @return {?}
         */
        FormGroup.prototype.markAsDirty =
            //Marks the control as dirty. A control becomes dirty when the
            //control's value is changed through the UI
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var marker = 'markAsDirty';
                this.applyMarker(marker);
            };
        /**
         * @param {?} markerName
         * @return {?}
         */
        FormGroup.prototype.applyMarker = /**
         * @param {?} markerName
         * @return {?}
         */
            function (markerName) {
                this.ngControl[markerName]();
                /** @type {?} */
                var markMember = function (member) {
                    member[markerName]();
                };
                _.map(this.members, markMember);
            };
        // Iterator
        // Allows us to use the object in angular directives
        // (i.e. ngFor, etc)
        // Iterator
        // Allows us to use the object in angular directives
        // (i.e. ngFor, etc)
        /**
         * @return {?}
         */
        FormGroup.prototype[Symbol.iterator] =
            // Iterator
            // Allows us to use the object in angular directives
            // (i.e. ngFor, etc)
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var current = 0;
                /** @type {?} */
                var members = _.values(this.members);
                return {
                    next: function () {
                        /** @type {?} */
                        var isEmpty = _.isEmpty(members);
                        /** @type {?} */
                        var value = isEmpty ? null : members[current++];
                        /** @type {?} */
                        var done = isEmpty ? true : current > members.length;
                        return {
                            value: value,
                            done: done
                        };
                    }
                };
            };
        return FormGroup;
    }(FormMember));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormItem = /** @class */ (function (_super) {
        __extends(FormItem, _super);
        function FormItem(props) {
            if (props === void 0) {
                props = {};
            }
            var _this = _super.call(this, props) || this;
            _this.type = 'form-item';
            return _this;
        }
        Object.defineProperty(FormItem.prototype, "ngControl", {
            get: /**
             * @return {?}
             */ function () {
                return this.control.ngControl;
            },
            set: /**
             * @param {?} ngControl
             * @return {?}
             */ function (ngControl) {
                this.control.ngControl = ngControl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormItem.prototype, "showValidations", {
            get: /**
             * @return {?}
             */ function () {
                return this.control.showValidations;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormItem.prototype, "errorMessages", {
            get: /**
             * @return {?}
             */ function () {
                return this.control.errorMessages;
            },
            enumerable: true,
            configurable: true
        });
        return FormItem;
    }(FormMember));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormWrapper = /** @class */ (function (_super) {
        __extends(FormWrapper, _super);
        function FormWrapper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = 'form';
            return _this;
        }
        return FormWrapper;
    }(FormGroup));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelElement = /** @class */ (function () {
        function LabelElement(init) {
            Object.assign(this, init);
        }
        return LabelElement;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseFormControl = /** @class */ (function () {
        function BaseFormControl(init) {
            if (init === void 0) {
                init = {};
            }
            this.order = -1;
            this.validators = [];
            Object.assign(this, init);
        }
        Object.defineProperty(BaseFormControl.prototype, "ngControl", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngControl;
            },
            set: /**
             * @param {?} ngControl
             * @return {?}
             */ function (ngControl) {
                this._ngControl = ngControl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseFormControl.prototype, "showValidations", {
            get: /**
             * @return {?}
             */ function () {
                return this.ngControl.errors &&
                    (this.ngControl.dirty || this.ngControl.touched);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseFormControl.prototype, "errorMessages", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                /** @type {?} */
                var buildErrorMessage = function (value, key) {
                    /** @type {?} */
                    var message = '';
                    /** @type {?} */
                    var lowerCased = _.lowerCase(_this.displayName);
                    /** @type {?} */
                    var firstLetter = lowerCased[0];
                    /** @type {?} */
                    var startsWithVowel = _.includes(['a', 'e', 'i', 'o', 'u'], firstLetter);
                    /** @type {?} */
                    var article = startsWithVowel ? 'an' : 'a';
                    if (key == 'required') {
                        message = "Please enter " + article + " " + lowerCased + ".";
                    }
                    if (key == 'email') {
                        message = "Please enter a valid email.";
                    }
                    return {
                        key: key,
                        message: message,
                    };
                };
                return _.map(this.ngControl.errors, buildErrorMessage);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseFormControl.prototype, "name", {
            get: /**
             * @return {?}
             */ function () {
                return this.displayName;
            },
            enumerable: true,
            configurable: true
        });
        return BaseFormControl;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxFormControl = /** @class */ (function (_super) {
        __extends(CheckboxFormControl, _super);
        function CheckboxFormControl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.controlType = 'checkbox';
            return _this;
        }
        return CheckboxFormControl;
    }(BaseFormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectFormControl = /** @class */ (function (_super) {
        __extends(SelectFormControl, _super);
        function SelectFormControl(init) {
            if (init === void 0) {
                init = {};
            }
            var _this = _super.call(this, init) || this;
            _this.controlType = 'select';
            _this.options = [];
            return _this;
            //eg. [{key: 1, value: "Test1"}]
            //this.options = init['options'] || this.emptyDropdown$()
        }
        return SelectFormControl;
    }(BaseFormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var inputFormControlDefaults = {
        key: '',
        label: '',
        placeholder: '',
        row: null,
        value: null,
        inputType: ( /** @type {?} */('text')),
        required: false,
        options: [],
    };
    var InputFormControl = /** @class */ (function (_super) {
        __extends(InputFormControl, _super);
        function InputFormControl(init) {
            if (init === void 0) {
                init = {};
            }
            var _this = _super.call(this, init) || this;
            _this.defaults = inputFormControlDefaults;
            _this.controlType = 'input';
            _this.options = [];
            init = _.defaults(init, _this.defaults);
            Object.assign(_this, init);
            return _this;
        }
        return InputFormControl;
    }(BaseFormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextboxFormControl = /** @class */ (function (_super) {
        __extends(TextboxFormControl, _super);
        function TextboxFormControl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.controlType = 'textbox';
            return _this;
        }
        return TextboxFormControl;
    }(BaseFormControl));

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
    var FormComponent$1 = /** @class */ (function (_super) {
        __extends(FormComponent$$1, _super);
        function FormComponent$$1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormComponent$$1.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-form',
                        template: "<div *ngIf=\"formWrapper\" class=\"form-wrap\">\n  <form [formGroup]=\"formWrapper.ngControl\">\n    <div class=\"form-inner\">\n      <ceo-forms-form-group\n        [model]=\"formWrapper\">\n      </ceo-forms-form-group>\n    </div>\n  </form>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        FormComponent$$1.propDecorators = {
            formWrapper: [{ type: i0.Input }]
        };
        return FormComponent$$1;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormControlComponent = /** @class */ (function (_super) {
        __extends(FormControlComponent, _super);
        function FormControlComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-form-control',
                        template: "<ng-container [ngSwitch]=\"control.controlType\">\n  <ng-container *ngSwitchCase=\"'input'\">\n    <ceo-forms-elements-form-controls-input\n      [element]=\"control\">\n    </ceo-forms-elements-form-controls-input>\n  </ng-container>\n</ng-container>\n",
                        styles: [""]
                    }] }
        ];
        FormControlComponent.propDecorators = {
            control: [{ type: i0.Input }]
        };
        return FormControlComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormGroupComponent$1 = /** @class */ (function (_super) {
        __extends(FormGroupComponent$$1, _super);
        function FormGroupComponent$$1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormGroupComponent$$1.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-form-group',
                        template: "<ng-container *ngIf=\"model\">\n  <ng-container *ngFor=\"let memberName of model.memberNames\">\n    <ng-container [ngSwitch]=\"model.getMember(memberName).type\">\n\n      <ng-container *ngSwitchCase=\"'form-item'\">\n        <ceo-forms-form-item\n          [key]=\"memberName\"\n          [item]=\"model.getMember(memberName)\">\n        </ceo-forms-form-item>\n      </ng-container>\n\n      <ng-container *ngSwitchCase=\"'form-group'\">\n        <ceo-forms-form-group\n          [key]=\"memberName\"\n          [model]=\"model.getMember(memberName)\">\n        </ceo-forms-form-group>\n      </ng-container>\n\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                        styles: [""]
                    }] }
        ];
        FormGroupComponent$$1.propDecorators = {
            key: [{ type: i0.Input }],
            model: [{ type: i0.Input }]
        };
        return FormGroupComponent$$1;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormItemComponent = /** @class */ (function (_super) {
        __extends(FormItemComponent, _super);
        function FormItemComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.classes = {
                valid: 'is-valid',
                invalid: 'is-invalid',
            };
            return _this;
        }
        /**
         * @return {?}
         */
        FormItemComponent.prototype.formGroupClass = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var classes = [];
                /** @type {?} */
                var ngControl = this.item.ngControl;
                if (ngControl.valid) {
                    classes.push(this.classes.valid);
                }
                if (ngControl.invalid) {
                    classes.push(this.classes.invalid);
                }
                return classes;
            };
        FormItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-form-item',
                        template: "<div class=\"form-group\" [ngClass]=\"formGroupClass()\">\n  <ng-container *ngIf=\"item.label\">\n    <ceo-forms-elements-label\n      [element]=\"item.label\">\n    </ceo-forms-elements-label>\n  </ng-container>\n\n  <ceo-forms-form-control\n    [control]=\"item.control\">\n  </ceo-forms-form-control>\n\n  <ceo-forms-form-item-error\n    [item]=\"item\">\n  </ceo-forms-form-item-error>\n\n</div>\n",
                        styles: [""]
                    }] }
        ];
        FormItemComponent.propDecorators = {
            key: [{ type: i0.Input }],
            item: [{ type: i0.Input }]
        };
        return FormItemComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormItemErrorComponent = /** @class */ (function (_super) {
        __extends(FormItemErrorComponent, _super);
        function FormItemErrorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormItemErrorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-form-item-error',
                        template: "<ng-container *ngIf=\"item.showValidations\">\n  <div class=\"invalid-feedback\">\n    <ng-container *ngFor=\"let errorMessage of item.errorMessages\">\n      <span class=\"invalid-feedback-message\">{{errorMessage.message}}</span>\n    </ng-container>\n  </div>\n</ng-container>\n",
                        styles: [""]
                    }] }
        ];
        FormItemErrorComponent.propDecorators = {
            key: [{ type: i0.Input }],
            item: [{ type: i0.Input }]
        };
        return FormItemErrorComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelComponent = /** @class */ (function (_super) {
        __extends(LabelComponent, _super);
        function LabelComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LabelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-elements-label',
                        template: "<label [attr.for]=\"element.controlId\">{{element.text}}</label>\n",
                        styles: [""]
                    }] }
        ];
        LabelComponent.propDecorators = {
            element: [{ type: i0.Input }]
        };
        return LabelComponent;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseComponent$1 = /** @class */ (function (_super) {
        __extends(BaseComponent$$1, _super);
        function BaseComponent$$1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseComponent$$1.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-elements-form-controls-base',
                        template: "<p>\n  base works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        BaseComponent$$1.propDecorators = {
            element: [{ type: i0.Input }]
        };
        return BaseComponent$$1;
    }(BaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputComponent$1 = /** @class */ (function (_super) {
        __extends(InputComponent, _super);
        function InputComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-elements-form-controls-input',
                        template: "<ng-container [ngSwitch]=\"element.inputType\">\n\n  <ceo-datepicker\n    *ngSwitchCase=\"'date'\"\n    [control]=\"element.ngControl\">\n  </ceo-datepicker>\n\n  <ceo-forms-elements-form-controls-input-checkbox\n    *ngSwitchCase=\"'checkbox'\"\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-checkbox>\n\n  <ceo-forms-elements-form-controls-input-radio\n    *ngSwitchCase=\"'radio'\"\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-radio>\n\n  <ceo-forms-elements-form-controls-input-base\n    *ngSwitchDefault\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-base>\n\n</ng-container>\n",
                        styles: [""]
                    }] }
        ];
        InputComponent.propDecorators = {
            element: [{ type: i0.Input }]
        };
        return InputComponent;
    }(BaseComponent$1));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseComponent$2 = /** @class */ (function (_super) {
        __extends(BaseComponent$$1, _super);
        function BaseComponent$$1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseComponent$$1.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-elements-form-controls-input-base',
                        template: "<input\n  class=\"form-control\"\n  [formControl]=\"element.ngControl\"\n  [type]=\"element.inputType\"\n  [attr.id]=\"element.elementId\"\n  [attr.required]=\"element.required\"\n  [attr.placeholder]=\"element.placeholder\">\n",
                        styles: [""]
                    }] }
        ];
        BaseComponent$$1.propDecorators = {
            element: [{ type: i0.Input }]
        };
        return BaseComponent$$1;
    }(BaseComponent$1));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function (_super) {
        __extends(CheckboxComponent, _super);
        function CheckboxComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-elements-form-controls-input-checkbox',
                        template: "<mat-checkbox\n  class=\"checkbox\"\n  [formControl]=\"element.ngControl\">\n\n  {{element.displayName}}\n\n</mat-checkbox>\n",
                        styles: [""]
                    }] }
        ];
        return CheckboxComponent;
    }(BaseComponent$2));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RadioComponent = /** @class */ (function (_super) {
        __extends(RadioComponent, _super);
        function RadioComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RadioComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-forms-elements-form-controls-input-radio',
                        template: "<mat-radio-group\n  class=\"radio-group\"\n  [formControl]=\"element.ngControl\">\n\n  <mat-radio-button\n    *ngFor=\"let option of element.options\"\n    class=\"radio-button\"\n    [value]=\"option.value\">\n\n    {{option.text}}\n\n  </mat-radio-button>\n\n</mat-radio-group>\n",
                        styles: [""]
                    }] }
        ];
        return RadioComponent;
    }(BaseComponent$2));

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormControlFactory = /** @class */ (function () {
        function FormControlFactory() {
        }
        /**
         * @param {?} formControl
         * @return {?}
         */
        FormControlFactory.prototype.build = /**
         * @param {?} formControl
         * @return {?}
         */
            function (formControl) {
                return new forms.FormControl(formControl.value, forms.Validators.compose(formControl.validators));
            };
        FormControlFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ FormControlFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory(); }, token: FormControlFactory, providedIn: "root" });
        return FormControlFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormGroupFactory = /** @class */ (function () {
        function FormGroupFactory(formControlFactory) {
            this.formControlFactory = formControlFactory;
        }
        /**
         * @param {?} formGroup
         * @return {?}
         */
        FormGroupFactory.prototype.build = /**
         * @param {?} formGroup
         * @return {?}
         */
            function (formGroup) {
                return this.buildNgFormGroup(formGroup);
            };
        /**
         * @private
         * @param {?} formGroup
         * @return {?}
         */
        FormGroupFactory.prototype.buildNgFormGroup = /**
         * @private
         * @param {?} formGroup
         * @return {?}
         */
            function (formGroup) {
                /** @type {?} */
                var ngControls = this.buildNgControls(formGroup.members);
                return new forms.FormGroup(ngControls);
            };
        /**
         * @private
         * @param {?} members
         * @return {?}
         */
        FormGroupFactory.prototype.buildNgControls = /**
         * @private
         * @param {?} members
         * @return {?}
         */
            function (members) {
                var _this = this;
                /** @type {?} */
                var getNgControl = function (member) {
                    return _this.getNgControl(member);
                };
                return _.mapValues(members, getNgControl);
            };
        /**
         * @private
         * @param {?} member
         * @return {?}
         */
        FormGroupFactory.prototype.getNgControl = /**
         * @private
         * @param {?} member
         * @return {?}
         */
            function (member) {
                if (!member.ngControl) {
                    /** @type {?} */
                    var control = this.buildNgControl(member);
                    member.ngControl = control;
                }
                return member.ngControl;
            };
        /**
         * @private
         * @param {?} member
         * @return {?}
         */
        FormGroupFactory.prototype.buildNgControl = /**
         * @private
         * @param {?} member
         * @return {?}
         */
            function (member) {
                /** @type {?} */
                var factory = ( /** @type {?} */(this.resolveControlFactory(member)));
                /** @type {?} */
                var ngControl = factory.build(member);
                return ngControl;
            };
        /**
         * @private
         * @param {?} member
         * @return {?}
         */
        FormGroupFactory.prototype.resolveControlFactory = /**
         * @private
         * @param {?} member
         * @return {?}
         */
            function (member) {
                switch (member.type) {
                    case "form-item": {
                        return this.formControlFactory;
                    }
                    case "form-group": {
                        return this;
                    }
                    default: {
                        return this.formControlFactory;
                    }
                }
            };
        FormGroupFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormGroupFactory.ctorParameters = function () {
            return [
                { type: FormControlFactory }
            ];
        };
        /** @nocollapse */ FormGroupFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory(i0.inject(FormControlFactory)); }, token: FormGroupFactory, providedIn: "root" });
        return FormGroupFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormControlFactory$1 = /** @class */ (function () {
        function FormControlFactory$$1(ngFormControlFactory) {
            this.ngFormControlFactory = ngFormControlFactory;
        }
        /**
         * @param {?} props
         * @return {?}
         */
        FormControlFactory$$1.prototype.build = /**
         * @param {?} props
         * @return {?}
         */
            function (props) {
                /** @type {?} */
                var formControl = this.buildFormControl(props);
                formControl.ngControl = this.buildNgFormControl(formControl);
                return formControl;
            };
        /**
         * @private
         * @param {?} props
         * @return {?}
         */
        FormControlFactory$$1.prototype.buildFormControl = /**
         * @private
         * @param {?} props
         * @return {?}
         */
            function (props) {
                /** @type {?} */
                var controlConstructor = this.resolveControlConstructor(props);
                return new controlConstructor(props);
            };
        /**
         * @private
         * @param {?} props
         * @return {?}
         */
        FormControlFactory$$1.prototype.resolveControlConstructor = /**
         * @private
         * @param {?} props
         * @return {?}
         */
            function (props) {
                switch (props.controlType) {
                    case "input": {
                        return InputFormControl;
                    }
                    case "textbox": {
                        return TextboxFormControl;
                    }
                    case "select": {
                        return SelectFormControl;
                    }
                    case "checkbox": {
                        return CheckboxFormControl;
                    }
                    default: {
                        return InputFormControl;
                    }
                }
            };
        /**
         * @private
         * @param {?} formControl
         * @return {?}
         */
        FormControlFactory$$1.prototype.buildNgFormControl = /**
         * @private
         * @param {?} formControl
         * @return {?}
         */
            function (formControl) {
                return this.ngFormControlFactory.build(formControl);
            };
        FormControlFactory$$1.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormControlFactory$$1.ctorParameters = function () {
            return [
                { type: FormControlFactory }
            ];
        };
        /** @nocollapse */ FormControlFactory$$1.ngInjectableDef = i0.defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory$$1(i0.inject(FormControlFactory)); }, token: FormControlFactory$$1, providedIn: "root" });
        return FormControlFactory$$1;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormGroupFactory$1 = /** @class */ (function () {
        function FormGroupFactory$$1(ngFormGroupFactory) {
            this.ngFormGroupFactory = ngFormGroupFactory;
            this.type = 'form-group';
        }
        /**
         * @param {?} params
         * @return {?}
         */
        FormGroupFactory$$1.prototype.build = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var formGroup = this.buildFormGroup(params);
                formGroup.ngControl = this.buildNgFormGroup(formGroup);
                return formGroup;
            };
        /**
         * @private
         * @param {?} params
         * @return {?}
         */
        FormGroupFactory$$1.prototype.buildFormGroup = /**
         * @private
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var formMemberCtor = this.resolveFormGroupCtor(params);
                return new formMemberCtor(( /** @type {?} */(params.data)));
            };
        /**
         * @private
         * @param {?} params
         * @return {?}
         */
        FormGroupFactory$$1.prototype.resolveFormGroupCtor = /**
         * @private
         * @param {?} params
         * @return {?}
         */
            function (params) {
                switch (params.type) {
                    case "form-group": {
                        return FormGroup;
                    }
                    case "form": {
                        return FormWrapper;
                    }
                    default: {
                        return FormGroup;
                    }
                }
            };
        /**
         * @private
         * @param {?} formGroup
         * @return {?}
         */
        FormGroupFactory$$1.prototype.buildNgFormGroup = /**
         * @private
         * @param {?} formGroup
         * @return {?}
         */
            function (formGroup) {
                return this.ngFormGroupFactory.build(formGroup);
            };
        FormGroupFactory$$1.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormGroupFactory$$1.ctorParameters = function () {
            return [
                { type: FormGroupFactory }
            ];
        };
        /** @nocollapse */ FormGroupFactory$$1.ngInjectableDef = i0.defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory$$1(i0.inject(FormGroupFactory)); }, token: FormGroupFactory$$1, providedIn: "root" });
        return FormGroupFactory$$1;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormFactory = /** @class */ (function () {
        function FormFactory(formGroupFactory) {
            this.formGroupFactory = formGroupFactory;
        }
        /**
         * @param {?} members
         * @return {?}
         */
        FormFactory.prototype.build = /**
         * @param {?} members
         * @return {?}
         */
            function (members) {
                /** @type {?} */
                var data = {
                    members: members
                };
                /** @type {?} */
                var params = {
                    type: ( /** @type {?} */('form')),
                    data: ( /** @type {?} */(data))
                };
                return this.formGroupFactory.build(params);
            };
        FormFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormFactory.ctorParameters = function () {
            return [
                { type: FormGroupFactory$1 }
            ];
        };
        /** @nocollapse */ FormFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory(i0.inject(FormGroupFactory$1)); }, token: FormFactory, providedIn: "root" });
        return FormFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormItemFactory = /** @class */ (function () {
        function FormItemFactory(formControlFactory) {
            this.formControlFactory = formControlFactory;
            this.type = 'form-item';
        }
        /**
         * @param {?} params
         * @return {?}
         */
        FormItemFactory.prototype.build = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var label = this.buildLabel(params);
                /** @type {?} */
                var control = this.buildControl(params);
                return this.buildItem(label, control);
            };
        /**
         * @private
         * @param {?} label
         * @param {?} control
         * @return {?}
         */
        FormItemFactory.prototype.buildItem = /**
         * @private
         * @param {?} label
         * @param {?} control
         * @return {?}
         */
            function (label, control) {
                /** @type {?} */
                var itemParams = {
                    label: label,
                    control: control
                };
                return new FormItem(itemParams);
            };
        /**
         * @param {?} params
         * @return {?}
         */
        FormItemFactory.prototype.buildLabel = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var props = ( /** @type {?} */(params.data));
                return new LabelElement(props.label);
            };
        /**
         * @param {?} params
         * @return {?}
         */
        FormItemFactory.prototype.buildControl = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var props = ( /** @type {?} */(params.data));
                return this.formControlFactory.build(props.control);
            };
        FormItemFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormItemFactory.ctorParameters = function () {
            return [
                { type: FormControlFactory$1 }
            ];
        };
        /** @nocollapse */ FormItemFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormItemFactory_Factory() { return new FormItemFactory(i0.inject(FormControlFactory$1)); }, token: FormItemFactory, providedIn: "root" });
        return FormItemFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormMemberFactory = /** @class */ (function () {
        function FormMemberFactory(formItemFactory, formGroupFactory) {
            this.formItemFactory = formItemFactory;
            this.formGroupFactory = formGroupFactory;
            this.factories = [
                formItemFactory,
                formGroupFactory
            ];
            this.defaultMemberFactory = formItemFactory;
        }
        /**
         * @param {?} params
         * @return {?}
         */
        FormMemberFactory.prototype.build = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var factory = this.resolveMemberFactory(params);
                return factory.build(params);
            };
        /**
         * @private
         * @param {?} params
         * @return {?}
         */
        FormMemberFactory.prototype.resolveMemberFactory = /**
         * @private
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /** @type {?} */
                var typeFactory = _.find(this.factories, { type: params.type });
                return ( /** @type {?} */(_.defaultTo(typeFactory, this.defaultMemberFactory)));
            };
        FormMemberFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormMemberFactory.ctorParameters = function () {
            return [
                { type: FormItemFactory },
                { type: FormGroupFactory$1 }
            ];
        };
        /** @nocollapse */ FormMemberFactory.ngInjectableDef = i0.defineInjectable({ factory: function FormMemberFactory_Factory() { return new FormMemberFactory(i0.inject(FormItemFactory), i0.inject(FormGroupFactory$1)); }, token: FormMemberFactory, providedIn: "root" });
        return FormMemberFactory;
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
    /** @type {?} */
    var components$t = [
        InputComponent$1,
        BaseComponent$2,
        CheckboxComponent,
        RadioComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$u = __spread([
        BaseComponent$1
    ], components$t);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$v = __spread([
        LabelComponent
    ], components$u);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$w = __spread([
        FormComponent$1,
        FormControlComponent,
        FormGroupComponent$1,
        FormItemComponent,
        FormItemErrorComponent
    ], components$v);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$8 = [
        FormControlFactory,
        FormGroupFactory,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$9 = __spread([
        FormControlFactory$1,
        FormFactory,
        FormGroupFactory$1,
        FormItemFactory,
        FormMemberFactory
    ], services$8);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var angularMaterialModules$2 = [
        material.MatRadioModule,
        material.MatCheckboxModule,
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
                    providers: __spread(services$9),
                };
            };
        CeoFormsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            ngBootstrap.NgbDatepickerModule,
                            angularMaterialModules$2,
                            DeclarablesModule,
                        ],
                        declarations: __spread(components$w),
                        exports: __spread(components$w),
                        entryComponents: []
                    },] }
        ];
        return CeoFormsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HtmlVideoComponent = /** @class */ (function (_super) {
        __extends(HtmlVideoComponent, _super);
        function HtmlVideoComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(HtmlVideoComponent.prototype, "videoSources", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var sources;
                if (_.isString(this.tagAttributes.src)) {
                    /** @type {?} */
                    var source = {
                        src: this.tagAttributes.src,
                        type: 'video/mp4'
                    };
                    sources = [source];
                }
                else {
                    sources = this.tagAttributes.src;
                }
                return ( /** @type {?} */(_.flattenDeep(sources)));
            },
            enumerable: true,
            configurable: true
        });
        HtmlVideoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ceo-html-video',
                        template: "<video\n  [width]=\"tagAttributes.width\"\n  [height]=\"tagAttributes.height\"\n  [autoplay]=\"tagAttributes.autoplay\"\n  [controls]=\"tagAttributes.controls\">\n\n\n  <source \n    *ngFor=\"let src of videoSources\"\n    [src]=\"src.src\"\n    [type]=\"src.type\">\n\n\n</video>\n",
                        styles: [""]
                    }] }
        ];
        HtmlVideoComponent.propDecorators = {
            tagAttributes: [{ type: i0.Input }]
        };
        return HtmlVideoComponent;
    }(BaseComponent));

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
    /** @type {?} */
    var mimeTypes = [
        {
            name: 'image/png',
            mimeType: 'image/png',
            mediaType: 'image',
        },
        {
            name: 'audio/mpeg',
            mimeType: 'audio/mpeg',
            mediaType: 'video',
        },
        {
            name: 'audio/ogg',
            mimeType: 'audio/ogg',
            mediaType: 'video',
        },
        {
            name: 'audio/*',
            mimeType: 'audio/*',
            mediaType: 'video',
        },
        {
            name: 'video/mp4',
            mimeType: 'video/mp4',
            mediaType: 'video',
        },
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
    var components$x = [
        HtmlVideoComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$y = __spread(components$x);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CeoHtmlModule = /** @class */ (function () {
        function CeoHtmlModule() {
        }
        /**
         * @return {?}
         */
        CeoHtmlModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: CeoHtmlModule,
                    providers: [],
                };
            };
        CeoHtmlModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: __spread(components$y),
                        exports: __spread(components$y),
                        entryComponents: __spread(components$y)
                    },] }
        ];
        return CeoHtmlModule;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SharedProvidersModule = ProvidersModule;
    exports.SharedDeclarablesModule = DeclarablesModule;
    exports.directives = directives;
    exports.ClickStopEventBubbleDirective = ClickStopEventBubbleDirective;
    exports.ContainerDirective = ContainerDirective;
    exports.NavigationDirective = NavigationDirective;
    exports.RouteTransformerDirective = RouteTransformerDirective;
    exports.ScrollTopDirective = ScrollTopDirective;
    exports.pipes = pipes;
    exports.CustomSearchPipe = CustomSearchPipe;
    exports.SafeHtmlPipe = SafeHtmlPipe;
    exports.components = components$n;
    exports.BaseComponent = BaseComponent;
    exports.AttributeListComponent = AttributeListComponent;
    exports.BodyComponent = BodyComponent;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.CardSelectListComponent = CardSelectListComponent;
    exports.CardComponent = CardComponent;
    exports.DatepickerComponent = DatepickerComponent;
    exports.DropdownComponent = DropdownComponent;
    exports.FieldComponent = FieldComponent;
    exports.FormGroupComponent = FormGroupComponent;
    exports.FormComponent = FormComponent;
    exports.InputComponent = InputComponent;
    exports.IframeComponent = IframeComponent;
    exports.ItemComponent = ItemComponent$1;
    exports.ListComponent = ListComponent;
    exports.NavbarToggleComponent = NavbarToggleComponent;
    exports.NavigationComponent = NavigationComponent;
    exports.PageComponent = PageComponent;
    exports.PaneComponent = PaneComponent;
    exports.SearchComponent = SearchComponent;
    exports.SelectListComponent = SelectListComponent;
    exports.SvgLoaderComponent = SvgLoaderComponent;
    exports.TableComponent = TableComponent;
    exports.pages = pages;
    exports.BasePage = BasePage;
    exports.ApiConfig = ApiConfig;
    exports.Breadcrumb = Breadcrumb;
    exports.Card = Card;
    exports.Pane = Pane;
    exports.Mixin = Mixin;
    exports.AttributeUpdater = AttributeUpdater;
    exports.createGetSet = createGetSet;
    exports.AttributeGetterSetter = AttributeGetterSetter;
    exports.DataInspector = DataInspector;
    exports.Memoizer = Memoizer;
    exports.Helper = Helper;
    exports.PropertyDelegator = PropertyDelegator;
    exports.sharedServices = sharedServices;
    exports.CsvToJsonService = CsvToJsonService;
    exports.PaneFactory = PaneFactory;
    exports.PaneProvider = PaneProvider;
    exports.PaneManager = PaneManager;
    exports.AuthService = AuthService;
    exports.CachingInterceptor = CachingInterceptor;
    exports.NoopInterceptor = NoopInterceptor;
    exports.RequestCacheService = RequestCacheService;
    exports.CustomElementManager = Manager;
    exports.CustomElementFactory = Factory;
    exports.NotificationService = NotificationService;
    exports.NgbDateNativeAdapter = NgbDateNativeAdapter;
    exports.InputControlService = InputControlService;
    exports.services = services$2;
    exports.ApiRequestOptionsBuilder = RequestOptionsBuilder;
    exports.ApiRequestUrlBuilder = RequestUrlBuilder;
    exports.ApiResponseParser = ResponseParser;
    exports.ApiService = ApiService;
    exports.JsonApiResponseParser = ResponseParser$1;
    exports.sharedGuards = sharedGuards;
    exports.AuthGuard = AuthGuard;
    exports.API_CONFIG = API_CONFIG;
    exports.CUSTOM_ELEMENTS_CONFIG = CUSTOM_ELEMENTS_CONFIG;
    exports.PaneList = PaneList;
    exports.providers = providers;
    exports.CeoDialogsModule = CeoDialogsModule;
    exports.DialogCloseComponent = CloseComponent;
    exports.DialogComponent = DialogComponent;
    exports.DialogWidgetComponent = WidgetComponent;
    exports.DialogWidgetHeaderComponent = HeaderComponent;
    exports.DialogWidgetFooterComponent = FooterComponent;
    exports.ModalNavigationItemComponent = ModalNavigationItemComponent;
    exports.ModalComponent = ModalComponent;
    exports.DialogConfigService = ConfigService;
    exports.DialogService = DialogService;
    exports.MatDialogAdapterService = MatDialogAdapterService;
    exports.dialogTokenProviders = providers$1;
    exports.defaultDialogsConfig = defaultDialogsConfig;
    exports.DIALOGS_CONFIG = DIALOGS_CONFIG;
    exports.CeoFormsModule = CeoFormsModule;
    exports.FormGroup = FormGroup;
    exports.FormItem = FormItem;
    exports.FormMember = FormMember;
    exports.FormWrapper = FormWrapper;
    exports.LabelElement = LabelElement;
    exports.BaseFormControl = BaseFormControl;
    exports.CheckboxFormControl = CheckboxFormControl;
    exports.SelectFormControl = SelectFormControl;
    exports.InputFormControl = InputFormControl;
    exports.TextboxFormControl = TextboxFormControl;
    exports.CeoFormComponent = FormComponent$1;
    exports.CeoFormControlComponent = FormControlComponent;
    exports.CeoFormGroupComponent = FormGroupComponent$1;
    exports.CeoFormItemComponent = FormItemComponent;
    exports.CeoFormItemErrorComponent = FormItemErrorComponent;
    exports.LabelComponent = LabelComponent;
    exports.BaseFormControlComponent = BaseComponent$1;
    exports.InputFormControlComponent = InputComponent$1;
    exports.InputBaseFormControlComponent = BaseComponent$2;
    exports.InputCheckboxFormControlComponent = CheckboxComponent;
    exports.InputRadioFormControlComponent = RadioComponent;
    exports.FormControlFactory = FormControlFactory$1;
    exports.FormFactory = FormFactory;
    exports.FormGroupFactory = FormGroupFactory$1;
    exports.FormItemFactory = FormItemFactory;
    exports.FormMemberFactory = FormMemberFactory;
    exports.NgFormControlFactory = FormControlFactory;
    exports.NgFormGroupFactory = FormGroupFactory;
    exports.CeoHtmlModule = CeoHtmlModule;
    exports.HtmlVideoComponent = HtmlVideoComponent;
    exports.mimeTypes = mimeTypes;
    exports.ɵbm = components$s;
    exports.ɵbn = components$p;
    exports.ɵbo = components$o;
    exports.ɵbq = components$r;
    exports.ɵbp = components$q;
    exports.ɵbr = services$7;
    exports.ɵbs = components$w;
    exports.ɵbt = components$v;
    exports.ɵbu = components$u;
    exports.ɵbv = components$t;
    exports.ɵbx = services$8;
    exports.ɵbw = services$9;
    exports.ɵby = components$y;
    exports.ɵbz = components$x;
    exports.ɵb = components$1;
    exports.ɵa = components;
    exports.ɵc = components$2;
    exports.ɵd = components$3;
    exports.ɵe = components$4;
    exports.ɵf = components$5;
    exports.ɵbl = DateParserFormatter;
    exports.ɵg = components$6;
    exports.ɵl = CustomContentComponent;
    exports.ɵh = components$7;
    exports.ɵi = ItemComponent;
    exports.ɵj = LinkComponent;
    exports.ɵk = TextComponent;
    exports.ɵm = components$8;
    exports.ɵn = components$9;
    exports.ɵo = components$a;
    exports.ɵq = components$b;
    exports.ɵp = components$c;
    exports.ɵr = components$d;
    exports.ɵs = components$e;
    exports.ɵt = components$f;
    exports.ɵu = components$g;
    exports.ɵv = NavItemComponent;
    exports.ɵw = NavLinkComponent;
    exports.ɵx = NavTextComponent;
    exports.ɵy = NavComponent;
    exports.ɵz = components$h;
    exports.ɵba = components$i;
    exports.ɵbb = components$j;
    exports.ɵbc = components$k;
    exports.ɵbd = components$l;
    exports.ɵbe = components$m;
    exports.ɵbf = services;
    exports.ɵbg = services$1;
    exports.ɵbh = services$3;
    exports.ɵbj = services$4;
    exports.ɵbk = services$5;
    exports.ɵbi = services$6;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ceo-shared.umd.js.map