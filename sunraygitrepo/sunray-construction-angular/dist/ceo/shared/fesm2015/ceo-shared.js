import { __decorate, __metadata } from 'tslib';
import * as csv_ from 'csvtojson';
import { camelCase, jsonToQueryParamsObject } from '@ceo/core';
import { HttpClient } from '@angular/common/http';
import { filter as filter$1, mergeMap, startWith, first, map as map$1, catchError } from 'rxjs/operators';
import { AngularTokenService } from 'angular-token';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Observable, of, BehaviorSubject, throwError, Subject } from 'rxjs';
import { MatDialog as MatDialog$1 } from '@angular/material/dialog';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateParserFormatter, NgbDateAdapter, NgbDatepickerModule, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatIconModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { isNumber, toInteger, join, merge, includes, map, filter, compact, forEach, reduce, get, has, endsWith, snakeCase, mapKeys, find, isNil, flatten, isString, isPlainObject, isArray, isEmpty, reject, cloneDeepWith, pickBy, castArray, extend, defaultsDeep, pick, mapValues, flattenDeep, bind, partial, lowerCase, uniqBy, assignIn, isFunction, clone, defaultTo, keys, values, defaults } from 'lodash';
import { Directive, HostListener, ViewContainerRef, ElementRef, EventEmitter, Output, Pipe, Component, Input, Injectable, NgModule, TemplateRef, ViewChild, InjectionToken, Inject, ComponentFactoryResolver, forwardRef, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClickStopEventBubbleDirective {
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.stopEventBubble(event);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    stopEventBubble(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
}
ClickStopEventBubbleDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ceoClickStopEventBubble]"
            },] }
];
ClickStopEventBubbleDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContainerDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[shared-declarables-container]'
            },] }
];
/** @nocollapse */
ContainerDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
NavigationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sharedDeclarablesNavigation]'
            },] }
];
/** @nocollapse */
NavigationDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouteTransformerDirective extends ClickStopEventBubbleDirective {
    /**
     * @param {?} el
     * @param {?} router
     */
    constructor(el, router) {
        super();
        this.el = el;
        this.router = router;
        this.routeEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        /** @type {?} */
        let linkElement = this.getLink(event);
        if (linkElement) {
            this.handleLink(linkElement);
            this.stopEventBubble(event);
        }
        else {
            return;
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    getLink(event) {
        if (event.target.tagName === 'A') {
            return event.target;
        }
        else if (event.target.parentElement.tagName === 'A') {
            return event.target.parentElement;
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    handleLink(element) {
        if (this.canRoute(element)) {
            this.navigate(element);
        }
        else {
            this.emitRouteEvent(element);
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    emitRouteEvent(element) {
        /** @type {?} */
        let event = {
            target: element
        };
        this.routeEvent.emit(event);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    canRoute(element) {
        return window.location.origin == element.origin;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    navigate(element) {
        /** @type {?} */
        let url = element.pathname;
        /** @type {?} */
        let opts = {};
        /** @type {?} */
        let extras = this.buildNavigationExtras(element);
        this.router.navigate([url, opts], extras);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    buildNavigationExtras(element) {
        /** @type {?} */
        let extras = ((/** @type {?} */ ({})));
        /** @type {?} */
        let queryParams = this.buildQueryParams(element);
        if (!isEmpty(queryParams)) {
            extras.queryParams = queryParams;
        }
        /** @type {?} */
        let fragment = this.getUrlFragment(element);
        if (!isEmpty(fragment)) {
            extras.fragment = fragment;
        }
        return extras;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getUrlFragment(element) {
        return element.hash.substring(1);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    buildQueryParams(element) {
        /** @type {?} */
        let pairs = element.search.slice(1).split('&');
        /** @type {?} */
        var result = {};
        if (pairs[0].length > 0) {
            forEach(pairs, function (pair) {
                pair = pair.split('=');
                result[pair[0]] = decodeURI(pair[1] || '');
            });
        }
        return result;
    }
}
RouteTransformerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ceoRouteTransformer]'
            },] }
];
/** @nocollapse */
RouteTransformerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Router }
];
RouteTransformerDirective.propDecorators = {
    routeEvent: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollTopDirective {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.routerNavigationEnd$
            .subscribe(event => this.scrollTop());
        this.scrollTop();
    }
    /**
     * @return {?}
     */
    get routerNavigationEnd$() {
        if (!this._routerNavigationEnd$) {
            this._routerNavigationEnd$ = this.buildNavEndEvent();
        }
        return this._routerNavigationEnd$;
    }
    /**
     * @private
     * @return {?}
     */
    buildNavEndEvent() {
        return (/** @type {?} */ (this.router.events.pipe(filter$1(event => event instanceof NavigationEnd))));
    }
    /**
     * @return {?}
     */
    scrollTop() {
        console.log("scroll to the top -- directive");
        window.scrollTo(0, 0);
    }
}
ScrollTopDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ceoScrollTop]"
            },] }
];
/** @nocollapse */
ScrollTopDirective.ctorParameters = () => [
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const directives = [
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
class CustomSearchPipe {
    /**
     * @param {?} collection
     * @param {?=} args
     * @return {?}
     */
    transform(collection, args) {
        if (!isEmpty(args) && collection) {
            return this.filter(collection, args);
        }
        return collection;
    }
    /**
     * @param {?} collection
     * @param {?} attributes
     * @return {?}
     */
    filter(collection, attributes) {
        /** @type {?} */
        let filterCollection = (value, key) => {
            if (isEmpty(value)) {
                return collection.entities;
            }
            return reduce(collection.entities, function (entities, entity) {
                if (includes(lowerCase(entity[key]), lowerCase(value)) &&
                    !isEmpty(value)) {
                    entities.push(entity);
                    return entities;
                }
                return entities;
            }, []);
        };
        return uniqBy(flatten(map(attributes, filterCollection)), 'id');
    }
}
CustomSearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'customSearch'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafeHtmlPipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'safeHtml'
            },] }
];
/** @nocollapse */
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pipes = [
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
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                /** @type {?} */
                const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
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
const createGetSet = (obj, props, key, name) => {
    /** @type {?} */
    let generateGetSet = (props, key, name) => {
        /** @type {?} */
        let getProp = bind(obj.getProp, obj);
        /** @type {?} */
        let setProp = bind(obj.setProp, obj);
        return {
            get: () => getProp(props, key),
            set: (value) => {
                if (getProp(props, key) !== value) {
                    setProp(props, key, value);
                }
            },
        };
    };
    /** @type {?} */
    let getSetProps = generateGetSet(props, key, name);
    Object.defineProperty(obj, name, getSetProps);
};
class AttributeGetterSetter {
    constructor() {
        this.attributes = {};
        this.updatedKeys = [];
    }
    /**
     * @return {?}
     */
    createAttributeSettersAndGetters() {
        this.createSettersAndGetters(this.attributes);
    }
    /**
     * @param {?} props
     * @return {?}
     */
    createSettersAndGetters(props) {
        for (let key in props) {
            /** @type {?} */
            var camelizedKey = camelCase(key);
            createGetSet(this, props, key, camelizedKey);
            createGetSet(this, props, key, key);
        }
    }
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setProp(props, key, value) {
        props[key] = value;
        if (this.updatedKeys) {
            this.updatedKeys.push(key);
        }
    }
    /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    getProp(props, key) {
        return props[key];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeUpdater extends AttributeGetterSetter {
    /**
     * @param {?} attributes
     * @return {?}
     */
    updateAttributes(attributes) {
        extend(this.attributes, attributes);
        this.createSettersAndGetters(this.attributes);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataInspector {
    /**
     * @param {?} data
     * @return {?}
     */
    inspectData(data) {
        /** @type {?} */
        var inspect = (data) => {
            console.log(data);
        };
        if (data.subscribe) {
            data.subscribe(data => inspect(data));
        }
        else {
            inspect(data);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Memoizer {
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    memoized(property, value) {
        if (!this[property]) {
            /** @type {?} */
            let theFunction = bind(value, this);
            /** @type {?} */
            let result = theFunction();
            this[property] = (/** @type {?} */ (result));
        }
        return this[property];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Helper {
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} propNames
     * @param {?} bindToSource
     */
    constructor(source, target, propNames, bindToSource) {
        this.source = source;
        this.target = target;
        this.propNames = propNames;
        this.bindToSource = bindToSource;
    }
    /**
     * @return {?}
     */
    run() {
        /** @type {?} */
        let copyProperty = bind(this.copyProperty, this);
        map(this.propNames, copyProperty);
    }
    /**
     * @private
     * @param {?} propName
     * @return {?}
     */
    copyProperty(propName) {
        /** @type {?} */
        let sourceDescriptor = this.getDescriptor(this.source, propName);
        if (sourceDescriptor) {
            this.copyFromSource(propName, sourceDescriptor);
        }
        else {
            assignIn(this.target, pick(this.source, propName));
        }
    }
    /**
     * @private
     * @param {?} propName
     * @param {?} propDescriptor
     * @return {?}
     */
    copyFromSource(propName, propDescriptor) {
        if (this.bindToSource) {
            /** @type {?} */
            let valueWithBinding = (value) => {
                if (isFunction(value)) {
                    return bind(value, this.source);
                }
                else {
                    return value;
                }
            };
            propDescriptor = mapValues(propDescriptor, valueWithBinding);
        }
        Object.defineProperty(this.target, propName, clone(propDescriptor));
    }
    /**
     * @private
     * @param {?} source
     * @param {?} propName
     * @return {?}
     */
    getDescriptor(source, propName) {
        /** @type {?} */
        let descriptor = Object.getOwnPropertyDescriptor(source, propName);
        if (descriptor) {
            return descriptor;
        }
        else {
            /** @type {?} */
            let parentSource = Object.getPrototypeOf(source);
            if (parentSource) {
                return this.getDescriptor(parentSource, propName);
            }
            else {
                return null;
            }
        }
    }
}
class PropertyDelegator {
    constructor() {
        this.delegatedProperties = {};
    }
    /**
     * @param {?} source
     * @param {?} propNames
     * @param {?=} bindToSource
     * @return {?}
     */
    setDelegatedProperties(source, propNames, bindToSource = true) {
        /** @type {?} */
        let helper = new Helper(source, this, propNames, bindToSource);
        helper.run();
    }
    /**
     * @return {?}
     */
    setAllDelegatedProperties() {
        /** @type {?} */
        let setDelegatedProperties = (propNames, sourceName) => {
            /** @type {?} */
            let source = this[sourceName];
            this.setDelegatedProperties(source, propNames);
        };
        forEach(this.delegatedProperties, setDelegatedProperties);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let BaseComponent = class BaseComponent {
    constructor() {
        this.log();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?=} isEnabled
     * @return {?}
     */
    log(isEnabled = false) {
        if (isEnabled) {
            /** @type {?} */
            let date = new Date();
            this.id = date.toISOString();
            /** @type {?} */
            let message = "The id of the " + this.constructor.name + " component is " + this.id;
            console.log(message);
        }
    }
    //Mixin properties
    /**
     * @param {...?} args
     * @return {?}
     */
    inspectData(...args) { }
};
BaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-base',
                template: '',
                styles: [""]
            }] }
];
/** @nocollapse */
BaseComponent.ctorParameters = () => [];
BaseComponent = __decorate([
    Mixin([DataInspector]),
    __metadata("design:paramtypes", [])
], BaseComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    BaseComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeListComponent extends BaseComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.attributeEntities$ = this.attributeEntity$
            .pipe(mergeMap((entity) => {
            return entity.getAttributeEntities$(this.attributeEntityLabels$);
        }));
    }
    /**
     * @param {?} attributeEntity
     * @param {?} attribute
     * @return {?}
     */
    getAttributeValue(attributeEntity, attribute) {
        return attributeEntity[attribute];
    }
}
AttributeListComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-attribute-list',
                template: "<table *ngIf=\"attributeEntities$\" class='table table-bordered'>\n  <tbody>\n    <tr *ngFor=\"let attributeEntity of (attributeEntities$ | async)\">\n      <th *ngIf=\"attributeEntity\">\n        {{ getAttributeValue(\n        attributeEntity,\n        'displayName'\n        ) }}\n      </th>\n      <td *ngIf=\"attributeEntity\">\n        {{ getAttributeValue(\n        attributeEntity,\n        'value'\n        ) }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                styles: [""]
            }] }
];
AttributeListComponent.propDecorators = {
    attributeEntity$: [{ type: Input }],
    attributeEntityLabels$: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$1 = [
    AttributeListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BodyComponent extends BaseComponent {
}
BodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-body',
                template: "<div class=\"body-inner-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n",
                styles: [".body-wrapper{-webkit-animation-duration:.5s;animation-duration:.5s}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$2 = [
    BodyComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemSelected = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemClick(item) {
        /** @type {?} */
        let event = {
            item: item
        };
        this.itemSelected.emit(event);
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-breadcrumb',
                template: "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li *ngFor=\"let item of breadcrumb$ | async\" class=\"breadcrumb-item\">\n      <a [ngClass]=\"{ 'active': item.isActive }\" href=\"#\"\n        (click)=\"onItemClick(item)\" ceoClickStopEventBubble>\n        {{item.displayValue}}\n      </a>\n    </li>\n  </ol>\n</nav>\n",
                styles: [""]
            }] }
];
BreadcrumbComponent.propDecorators = {
    breadcrumb$: [{ type: Input }],
    itemSelected: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$3 = [
    BreadcrumbComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectListComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEmitter = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelectedItem(item) {
        return (this.selectedItem == item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        this.selectedItem = item;
        this.emit();
    }
    /**
     * @return {?}
     */
    emit() {
        /** @type {?} */
        let event = {
            item: this.selectedItem
        };
        this.itemEmitter.emit(event);
    }
}
SelectListComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-select-list',
                template: "<p>\n  select-list works!\n</p>\n",
                styles: [""]
            }] }
];
SelectListComponent.propDecorators = {
    items$: [{ type: Input }],
    selectedItem: [{ type: Input }],
    itemEmitter: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardSelectListComponent extends SelectListComponent {
    constructor() {
        super();
    }
}
CardSelectListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-declarables-card-select-list',
                template: "<div class=\"cards-wrapper\">\n  <div class=\"card-wrapper\"\n    *ngFor=\"let card of cards$ | async\"\n    (click)=\"select(card.data)\">\n\n    <shared-declarables-card\n      [card]=\"card\">\n    </shared-declarables-card>\n  </div>\n</div>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CardSelectListComponent.ctorParameters = () => [];
CardSelectListComponent.propDecorators = {
    cards$: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$4 = [
    CardSelectListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent extends BaseComponent {
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-card',
                template: "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"icon-wrapper\"\n      [ngClass]=\"card.iconThemeColor\">\n\n      <mat-icon class=\"svg-wrapper\" svgIcon=\"{{card.iconName}}\">\n      </mat-icon>\n\n    </div>\n    <h5 class=\"card-title\">{{card.title}}</h5>\n    <p class=\"card-text\">{{card.body}}</p>\n  </div>\n  <div *ngIf=\"card.footer\" class=\"card-footer\">\n    <a class=\"btn btn-primary btn-lg-curved\"\n    (click)=\"card.action()\" href=\"#\">\n      {{card.actionText}}\n    </a>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
CardComponent.propDecorators = {
    card: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$5 = [
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
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    }
    else {
        return '';
    }
}
class DateParserFormatter {
    // from input -> internal model
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if (value) {
            /** @type {?} */
            const dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
            }
        }
        return null;
    }
    // from internal model -> string
    /**
     * @param {?} date
     * @return {?}
     */
    format(date) {
        if (!date) {
            return '';
        }
        /** @type {?} */
        let separator = '/';
        /** @type {?} */
        let year = isNumber(date.year) ? padNumber(date.year) : '';
        /** @type {?} */
        let month = isNumber(date.month) ? padNumber(date.month) : '';
        /** @type {?} */
        let day = isNumber(date.day) ? padNumber(date.day) : '';
        return join([month, day, year], separator);
    }
}
DateParserFormatter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatepickerComponent extends BaseComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.control.valueChanges.subscribe(value => this.onControlValue(value));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        //console.log("date selected")
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onControlValue(value) {
        //console.log("on control value")
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-datepicker',
                template: "<div class=\"input-group\">\n  <input ngbDatepicker\n    [formControl]=\"control\"\n    (dateSelect)=\"onDateSelect($event)\"\n    #datepicker=\"ngbDatepicker\"\n    name=\"dp\"\n    class=\"form-control\"\n    placeholder=\"mm/dd/yy\">\n\n  <div class=\"input-group-append\"\n    (click)=\"datepicker.toggle()\">\n\n    <div class=\"input-group-text\">\n      <mat-icon class=\"svg-wrapper\" svgIcon=\"calendar\">\n      </mat-icon>\n    </div>\n  </div>\n</div>\n",
                providers: [
                    {
                        provide: NgbDateParserFormatter,
                        useClass: DateParserFormatter,
                    },
                ],
                styles: [""]
            }] }
];
DatepickerComponent.propDecorators = {
    control: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$6 = [
    DatepickerComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    className(item) {
        /** @type {?} */
        let classes = [item.className];
        if (item.hasSubmenu()) {
            classes.push('dropdown-column');
        }
        return join(classes, ' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dropdown',
                template: "<div class=\"dropdown-menu animated fadeIn\">\n  <ceo-dropdown-item\n    *ngFor=\"let item of navigationMenu.items.sortedItems\"\n    [item]=\"item\"\n    [ngClass]=\"className(item)\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown-item>\n</div>\n",
                styles: [""]
            }] }
];
DropdownComponent.propDecorators = {
    navigationMenu: [{ type: Input }],
    itemEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomContentComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRouteEvent(event) {
        event.item = this.item;
        this.itemEvent.emit(event);
    }
}
CustomContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dropdown-custom-content',
                template: "<div [innerHtml]=\"item.customContent | safeHtml\" ceoRouteTransformer\n  (routeEvent)=\"onRouteEvent($event)\">\n</div>\n",
                styles: [""]
            }] }
];
CustomContentComponent.propDecorators = {
    item: [{ type: Input }],
    itemEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    displayType() {
        return this.item.displayType;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    className(item) {
        /** @type {?} */
        let classes = [item.className];
        if (item.hasSubmenu()) {
            classes.push('dropdown-column');
        }
        return join(classes, ' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
ItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dropdown-item',
                template: "<div class=\"dropdown-item\"\n   [ngSwitch]=\"item.displayType\">\n\n  <ceo-dropdown-link\n    *ngSwitchCase=\"'link'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\">\n  </ceo-dropdown-link>\n\n  <ceo-dropdown-text\n    *ngSwitchCase=\"'text'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\">\n  </ceo-dropdown-text>\n\n  <ceo-dropdown-custom-content\n    *ngSwitchCase=\"'custom'\"\n    [ngClass]=\"className(item)\"\n    [item]=\"item\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown-custom-content>\n\n  <div *ngIf=\"item.hasSubmenu()\" class=\"dropdown-submenu\">\n\n    <ceo-dropdown-item\n      *ngFor=\"let submenuItem of item.submenu.items.sortedItems\"\n      [item]=\"submenuItem\"\n      [ngClass]=\"className(submenuItem)\"\n      (itemEvent)=\"onItemEvent($event)\">\n    </ceo-dropdown-item>\n\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
ItemComponent.propDecorators = {
    item: [{ type: Input }],
    itemEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkComponent extends BaseComponent {
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dropdown-link',
                template: "<a class=\"dropdown-link\" href=\"{{item.url}}\" ceoRouteTransformer>\n  {{ item.displayValue }}\n</a>\n",
                styles: [""]
            }] }
];
LinkComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextComponent extends BaseComponent {
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dropdown-text',
                template: "<span class=\"dropdown-text\">\n  {{ item.displayValue }}\n</span>\n",
                styles: [""]
            }] }
];
TextComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$7 = [
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
class FieldComponent extends BaseComponent {
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-field',
                template: "<div class=\"form-group\">\n  <label [attr.for]=\"field.key\">{{field.label}}</label>\n\n  <shared-declarables-input\n    [field]=\"field\"\n    [formGroup]=\"formGroup\">\n  </shared-declarables-input>\n</div>\n",
                styles: [""]
            }] }
];
FieldComponent.propDecorators = {
    field: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$8 = [
    FieldComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormGroupComponent extends BaseComponent {
    /**
     * @param {?} input
     * @return {?}
     */
    isInputGroup(input) {
        return (input.constructor.name == 'InputGroup');
    }
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-form-group',
                template: "<div *ngFor=\"let input of inputGroup\">\n  <div *ngIf=\"isInputGroup(input); then inputGroupTemplate else fieldTemplate\">\n  </div>\n\n  <ng-template #inputGroupTemplate>\n    <div><b>{{input.name}}</b></div>\n\n    <ceo-shared-form-group\n      [inputGroup]=\"input\"\n      [formGroup]=\"formGroup.get(input.key)\">\n    </ceo-shared-form-group>\n\n  </ng-template>\n\n  <ng-template #fieldTemplate>\n\n    <shared-declarables-field\n      [field]=\"input\"\n      [formGroup]=\"formGroup\">\n    </shared-declarables-field>\n\n  </ng-template>\n</div>\n\n",
                styles: [""]
            }] }
];
FormGroupComponent.propDecorators = {
    inputGroup: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$9 = [
    FormGroupComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiConfig {
    /**
     * @param {?} params
     */
    constructor(params) {
        this._url = params.url;
        this._defaultQueryParams = params.defaultQueryParams || {};
        this._defaultBodyParams = params.defaultBodyParams || {};
        this._resourceTypes = params.resourceTypes || {};
    }
    /**
     * @return {?}
     */
    get url() {
        return this._url;
    }
    /**
     * @return {?}
     */
    get defaultQueryParams() {
        return this._defaultQueryParams;
    }
    /**
     * @return {?}
     */
    get defaultBodyParams() {
        return this._defaultBodyParams;
    }
    /**
     * @return {?}
     */
    get resourceTypes() {
        return this._resourceTypes;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Breadcrumb {
    /**
     * @param {?=} items
     */
    constructor(items = []) {
        this.items = items;
        this.length = items.length;
    }
    // Iterator
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        /** @type {?} */
        let current = 0;
        /** @type {?} */
        let items = this.items;
        return {
            next: function () {
                /** @type {?} */
                let noItems = isEmpty(items);
                /** @type {?} */
                let value = noItems ? null : items[current++];
                /** @type {?} */
                let done = noItems ? true : current > items.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Card {
    /**
     * @param {?} attributes
     */
    constructor(attributes) {
        this.setAttributes(attributes);
    }
    /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    setAttributes(attributes) {
        /** @type {?} */
        let setAttribute = (value, key) => {
            this[key] = value;
        };
        map(attributes, bind(setAttribute, this));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Pane {
    /**
     * @param {?} attributes
     */
    constructor(attributes) {
        this.setAttributes(attributes);
    }
    /**
     * @return {?}
     */
    toCard() {
        /** @type {?} */
        let attributes = {
            data: this,
            title: this.name,
            iconName: this.iconName,
        };
        return new Card(attributes);
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    setStatus(status) {
        this.active = status;
    }
    /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    setAttributes(attributes) {
        /** @type {?} */
        let setAttribute = (value, key) => {
            this[key] = value;
        };
        map(attributes, bind(setAttribute, this));
    }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationService {
    constructor() { }
    /**
     * @param {?} message
     * @param {?} action
     * @param {?} timeout
     * @return {?}
     */
    showNotification(message, action, timeout) { }
}
NotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NotificationService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbDateNativeAdapter$1 extends NgbDateAdapter {
    /**
     * @param {?} date
     * @return {?}
     */
    fromModel(date) {
        return this.isValidDate(date) ? this.ngbDateStructFromValidDate(date) : null;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toModel(date) {
        return date ? this.dateFromValidNgbDateStruct(date) : null;
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    isValidDate(date) {
        return (date && has(date, 'getFullYear'));
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    ngbDateStructFromValidDate(date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    dateFromValidNgbDateStruct(date) {
        return new Date(date.year, date.month - 1, date.day);
    }
}
NgbDateNativeAdapter$1.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputControlService {
    /**
     * @param {?} inputGroup
     * @return {?}
     */
    toFormGroup(inputGroup) {
        return this.buildFormGroup(inputGroup);
    }
    /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    buildFormGroup(inputGroup) {
        return new FormGroup(this.buildControls(inputGroup));
    }
    /**
     * @private
     * @param {?} inputGroup
     * @return {?}
     */
    buildControls(inputGroup) {
        return reduce(inputGroup.inputs, bind(partial(this.buildAbstractControl, inputGroup), this), {});
    }
    /**
     * @private
     * @param {?} inputGroup
     * @param {?} controls
     * @param {?} input
     * @return {?}
     */
    buildAbstractControl(inputGroup, controls, input) {
        /** @type {?} */
        var build = this.getFormControlBuilder(input);
        input.key = this.generateInputKey(input, inputGroup);
        controls[input.key] = build(input);
        return controls;
    }
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    getFormControlBuilder(input) {
        if (input.constructor.name == 'InputGroup') {
            return bind(this.buildFormGroup, this);
        }
        else {
            return bind(this.buildFormControl, this);
        }
    }
    /**
     * @private
     * @param {?} input
     * @param {?} inputGroup
     * @return {?}
     */
    generateInputKey(input, inputGroup) {
        return input.key;
    }
    /**
     * @private
     * @param {?} inputControl
     * @return {?}
     */
    buildFormControl(inputControl) {
        /** @type {?} */
        let value = inputControl.value || '';
        return new FormControl(value, Validators.compose(inputControl.validators));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const csvToJson = csv_;
class CsvToJsonService {
    constructor() { }
    /**
     * @param {?=} csvString
     * @param {?=} opts
     * @return {?}
     */
    csvToJsonFromString(csvString = '', opts = {}) {
        /** @type {?} */
        let defaults$$1 = {
            noheader: false,
        };
        opts = extend(opts, defaults$$1);
        return csvToJson(opts).fromString(csvString);
    }
    /**
     * @param {?=} filePath
     * @return {?}
     */
    csvToJsonFromFilePath(filePath = '') {
        return csvToJson().fromFile(filePath);
    }
}
CsvToJsonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CsvToJsonService.ctorParameters = () => [];
/** @nocollapse */ CsvToJsonService.ngInjectableDef = defineInjectable({ factory: function CsvToJsonService_Factory() { return new CsvToJsonService(); }, token: CsvToJsonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const API_CONFIG = new InjectionToken("API Config");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CUSTOM_ELEMENTS_CONFIG = new InjectionToken("Custom Elements Config");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PaneList = new InjectionToken("Pane List");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const providers = [
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
class PaneFactory {
    /**
     * @param {?} paneList
     */
    constructor(paneList) {
        this.paneList = paneList;
    }
    /**
     * @return {?}
     */
    build$() {
        /** @type {?} */
        let panes = map(this.paneList, this.buildPane);
        return of(panes);
    }
    /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    buildPane(attributes) {
        return new Pane(attributes);
    }
}
PaneFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PaneFactory.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PaneList,] }] }
];
/** @nocollapse */ PaneFactory.ngInjectableDef = defineInjectable({ factory: function PaneFactory_Factory() { return new PaneFactory(inject(PaneList)); }, token: PaneFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaneProvider {
    /**
     * @param {?} paneFactory
     */
    constructor(paneFactory) {
        this.paneFactory = paneFactory;
        this._activePane$ = new BehaviorSubject(null);
        this.panes = [];
        this._panes$ = this.paneFactory.build$();
        this._panes$.subscribe(panes => this.setPanes(panes));
    }
    /**
     * @return {?}
     */
    get panes$() {
        return this._panes$;
    }
    /**
     * @return {?}
     */
    get activePane$() {
        return this._activePane$.pipe(startWith(this.activePaneFromPanes(this.panes)));
    }
    /**
     * @param {?} pane
     * @param {?} activeStatus
     * @return {?}
     */
    setPaneActiveStatus(pane, activeStatus) {
        pane.setStatus(activeStatus);
        if (activeStatus) {
            this.emitActivePane(pane);
        }
        return true;
    }
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    emitActivePanes(panes) {
        /** @type {?} */
        let pane = this.activePaneFromPanes(panes);
        this.emitActivePane(pane);
    }
    /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    emitActivePane(pane) {
        this._activePane$.next(pane);
    }
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    setPanes(panes) {
        this.panes = panes;
        this.emitActivePanes(this.panes);
    }
    /**
     * @private
     * @param {?} panes
     * @return {?}
     */
    activePaneFromPanes(panes) {
        return find(panes, 'active');
    }
}
PaneProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PaneProvider.ctorParameters = () => [
    { type: PaneFactory }
];
/** @nocollapse */ PaneProvider.ngInjectableDef = defineInjectable({ factory: function PaneProvider_Factory() { return new PaneProvider(inject(PaneFactory)); }, token: PaneProvider, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaneManager {
    /**
     * @param {?} paneProvider
     */
    constructor(paneProvider) {
        this.paneProvider = paneProvider;
    }
    /**
     * @return {?}
     */
    get panes$() {
        return this.paneProvider.panes$;
    }
    /**
     * @return {?}
     */
    get activePane$() {
        return this.paneProvider.activePane$;
    }
    /**
     * @param {?} pane
     * @return {?}
     */
    activatePane(pane) {
        /** @type {?} */
        let activePane$ = this.activePane$.pipe(first());
        activePane$.subscribe(activePane => {
            this.setPaneActiveStatus(activePane, false);
            this.setPaneActiveStatus(pane, true);
        });
    }
    /**
     * @private
     * @param {?=} pane
     * @param {?=} activeStatus
     * @return {?}
     */
    setPaneActiveStatus(pane = null, activeStatus = false) {
        if (!pane) {
            return false;
        }
        return this.paneProvider.setPaneActiveStatus(pane, activeStatus);
    }
}
PaneManager.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PaneManager.ctorParameters = () => [
    { type: PaneProvider }
];
/** @nocollapse */ PaneManager.ngInjectableDef = defineInjectable({ factory: function PaneManager_Factory() { return new PaneManager(inject(PaneProvider)); }, token: PaneManager, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RequestOptionsBuilder {
    /**
     * @param {?} apiConfig
     */
    constructor(apiConfig) {
        this.apiConfig = apiConfig;
    }
    /**
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    build(method, url, payload) {
        if (this.isBodyRequest(method)) {
            return this.getBody(payload.resourceIdentifier.data);
        }
        else {
            return this.getOptions(url, payload.resourceIdentifier);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getBody(data) {
        /** @type {?} */
        let body = this.sanitizedParams(data);
        body = merge({}, body, this.apiConfig.defaultQueryParams);
        return {
            body: body,
            observe: 'response',
        };
    }
    /**
     * @param {?} url
     * @param {?} ri
     * @return {?}
     */
    getOptions(url, ri) {
        return {
            params: this.getParams(ri),
            responseType: this.getResponseType(url),
            observe: 'response',
        };
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    getParams(ri) {
        /** @type {?} */
        let params = merge({}, this.apiConfig.defaultQueryParams, this.filterParams(ri));
        return jsonToQueryParamsObject(params);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getResponseType(url) {
        if (this.isTextResponseType(url)) {
            return 'text';
        }
        else {
            return 'json';
        }
    }
    /**
     * @protected
     * @param {?} method
     * @return {?}
     */
    isBodyRequest(method) {
        /** @type {?} */
        let bodyMethods = ['post', 'put'];
        return includes(bodyMethods, method);
    }
    /**
     * @protected
     * @param {?} url
     * @return {?}
     */
    isTextResponseType(url) {
        return endsWith(url, 'csv');
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    filterParams(ri) {
        /** @type {?} */
        let filter$$1 = this.getFilter(ri);
        if (filter$$1) {
            return {
                filter: this.sanitizedParams(filter$$1)
            };
        }
        else {
            return {};
        }
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getFilter(ri) {
        return get(ri, 'filter');
    }
    /**
     * @protected
     * @param {?} params
     * @return {?}
     */
    sanitizedParams(params) {
        /** @type {?} */
        let snakeCase$$1 = (value, key) => {
            return snakeCase(key);
        };
        return mapKeys(params, snakeCase$$1);
    }
}
RequestOptionsBuilder.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RequestOptionsBuilder.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RequestUrlBuilder {
    /**
     * @param {?} apiConfig
     */
    constructor(apiConfig) {
        this.apiConfig = apiConfig;
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    build(ri) {
        return this.getResourceTypeUrl(ri);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getResourceTypeUrl(ri) {
        /** @type {?} */
        let fragments = [
            this.apiConfig.url,
            this.getResourceTypeUrlFragment(ri),
        ];
        if (this.isSingleResourceRequest(ri)) {
            /** @type {?} */
            let singleRequestFragment = this.singleResourceRequestFragment(ri);
            fragments.push(singleRequestFragment);
        }
        return join(fragments, '/');
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getResourceTypeUrlFragment(ri) {
        /** @type {?} */
        let resourceType = this.getResourceType(ri);
        /** @type {?} */
        let resourceConfig = resourceType.config;
        return resourceConfig.urlFragment(ri);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    getResourceType(ri) {
        /** @type {?} */
        let ofType = (resourceType) => {
            return resourceType.config.hasResourceType(ri);
        };
        return find(this.apiConfig.resourceTypes, ofType);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    isSingleResourceRequest(ri) {
        return !isNil(ri.id);
    }
    /**
     * @protected
     * @param {?} ri
     * @return {?}
     */
    singleResourceRequestFragment(ri) {
        return ri.id;
    }
}
RequestUrlBuilder.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RequestUrlBuilder.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResponseParser {
    /**
     * @param {?} data
     * @return {?}
     */
    parse(data) {
        return flatten([data]);
    }
}
ResponseParser.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ResponseParser.ngInjectableDef = defineInjectable({ factory: function ResponseParser_Factory() { return new ResponseParser(); }, token: ResponseParser, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiService {
    /**
     * @param {?} http
     * @param {?} csvToJsonService
     * @param {?} responseParser
     * @param {?} urlBuilder
     * @param {?} optionsBuilder
     */
    constructor(http, csvToJsonService, responseParser, urlBuilder, optionsBuilder) {
        this.http = http;
        this.csvToJsonService = csvToJsonService;
        this.responseParser = responseParser;
        this.urlBuilder = urlBuilder;
        this.optionsBuilder = optionsBuilder;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    post$(payload) {
        return this.handleRequest$('post', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    delete$(payload) {
        return this.handleRequest$('delete', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    get$(payload) {
        return this.handleRequest$('get', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    put$(payload) {
        return this.handleRequest$('put', payload);
    }
    // Aliases
    /**
     * @param {?} payload
     * @return {?}
     */
    update$(payload) {
        return this.put$(payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    create$(payload) {
        return this.post$(payload);
    }
    // Private methods
    /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    handleRequest$(method, payload) {
        return this.executeRequest$(method, payload).pipe(catchError((error) => {
            return this.handleError$(error, payload);
        }), mergeMap((response) => {
            return this.processedResponse$(response, payload.resourceIdentifier);
        }));
    }
    /**
     * @private
     * @param {?} error
     * @param {?} payload
     * @return {?}
     */
    handleError$(error, payload) {
        console.error("Error in API Service: " + error);
        return throwError(error);
    }
    /**
     * @private
     * @param {?} method
     * @param {?} payload
     * @return {?}
     */
    executeRequest$(method, payload) {
        /** @type {?} */
        let url = this.getUrl(payload.resourceIdentifier);
        /** @type {?} */
        let httpOpts = this.getHttpOpts(method, url, payload);
        return this.http[method](url, httpOpts);
    }
    /**
     * @private
     * @param {?} ri
     * @return {?}
     */
    getUrl(ri) {
        return this.urlBuilder.build(ri);
    }
    /**
     * @private
     * @param {?} method
     * @param {?} url
     * @param {?} payload
     * @return {?}
     */
    getHttpOpts(method, url, payload) {
        return this.optionsBuilder.build(method, url, payload);
    }
    /**
     * @private
     * @param {?} apiResponse
     * @param {?} ri
     * @return {?}
     */
    processedResponse$(apiResponse, ri) {
        return this.jsonData$(apiResponse.body).pipe(map$1(json => this.sanitizedData(json, ri)), map$1(json => this.buildApiResponse(json, ri)));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    jsonData$(data) {
        if (isString(data)) {
            return this.csvToJsonData$(data);
        }
        else {
            return of(data);
        }
    }
    // Remove empty keys and attributes
    /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    sanitizedData(data, ri) {
        /** @type {?} */
        var isSimpleVariable = (value) => {
            return (isNumber(value) || isString(value));
        };
        /** @type {?} */
        let sanitize = (object) => {
            // Removed this pickBy call -- null and empty string
            // values are specified by backend and should
            // be preserved; might this cause issues elsewhere?
            // They should be fixed in the consumer.
            //var filteredObject = _.pickBy(object, isPresent)
            /** @type {?} */
            var filteredObject = object;
            /** @type {?} */
            let finalFilter = (obj) => {
                if (obj !== filteredObject && isPlainObject(obj)) {
                    return sanitize(obj);
                }
                else if (isArray(obj)) {
                    if (isEmpty(obj) || isSimpleVariable(obj[0])) {
                        return obj;
                    }
                    return reject(map(obj, sanitize), isEmpty);
                }
                return undefined;
            };
            return cloneDeepWith(filteredObject, finalFilter);
        };
        /** @type {?} */
        var sanitizedData;
        if (isArray(data)) {
            sanitizedData = map(data, sanitize);
        }
        else {
            sanitizedData = sanitize(data);
        }
        return sanitizedData;
    }
    /**
     * @private
     * @param {?} data
     * @param {?} ri
     * @return {?}
     */
    buildApiResponse(data, ri) {
        return {
            data: this.responseParser.parse(data),
            resourceIdentifier: ri,
        };
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    csvToJsonData$(data) {
        /** @type {?} */
        let observable = Observable.create((observer) => {
            /** @type {?} */
            var jsonData = [];
            /** @type {?} */
            var jsonApiResponse = {
                data: jsonData,
                included: [],
            };
            /** @type {?} */
            let onNext = (json, index) => {
                /** @type {?} */
                let isValid = (propValue, propName) => {
                    return !isNil(propValue);
                };
                /** @type {?} */
                let sanitizedJson = pickBy(json, isValid);
                jsonData.push(json);
            };
            /** @type {?} */
            let onError = (error) => error;
            /** @type {?} */
            let onComplete = () => {
                return observer.next(jsonApiResponse);
            };
            /** @type {?} */
            let converter = this.csvToJsonService.csvToJsonFromString(data)
                .subscribe(onNext, onError, onComplete);
        });
        return observable;
    }
}
ApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: CsvToJsonService },
    { type: ResponseParser },
    { type: RequestUrlBuilder },
    { type: RequestOptionsBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    RequestOptionsBuilder,
    RequestUrlBuilder,
    ResponseParser,
    ApiService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResponseParser$1 {
    /**
     * @param {?} payload
     * @return {?}
     */
    parse(payload) {
        return castArray(payload.data).
            concat(this.loadIncluded(payload));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    loadIncluded(data) {
        /** @type {?} */
        let buildIncluded = (payloadData) => {
            return payloadData;
        };
        return map(data.included, buildIncluded);
    }
}
ResponseParser$1.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ResponseParser$1.ngInjectableDef = defineInjectable({ factory: function ResponseParser_Factory() { return new ResponseParser$1(); }, token: ResponseParser$1, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$1 = [
    ResponseParser$1,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$2 = [
    ...services,
    ...services$1,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
        this.userSignedIn$ = new Subject();
    }
    /**
     * @return {?}
     */
    validate() {
        this
            .authService.validateToken()
            .subscribe(response => this.handleValidationTokenResponse(response), error => this.handleValidationError(error));
    }
    /**
     * @return {?}
     */
    signOutUser() {
        return this.authService.signOut().pipe(map$1(res => {
            this.userSignedIn$.next(false);
            return res;
        }));
    }
    /**
     * @param {?} signUpData
     * @return {?}
     */
    registerUser(signUpData) {
        return this.authService.registerAccount(signUpData).pipe(map$1(res => {
            this.userSignedIn$.next(true);
            return res;
        }));
    }
    /**
     * @param {?} signInData
     * @return {?}
     */
    signInUser(signInData) {
        return this.authService.signIn(signInData)
            .pipe(map$1(response => {
            this.userSignedIn$.next(true);
            return response;
        }));
    }
    /**
     * @return {?}
     */
    userSignedIn() {
        return this.authService.userSignedIn();
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    handleValidationTokenResponse(response) {
        if (this.successfulLoginResponse(response)) {
            this.userSignedIn$.next(response.json().success);
        }
        else {
            this.userSignedIn$.next(false);
        }
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    handleValidationError(error) {
        //console.log(error)
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    successfulLoginResponse(response) {
        return response.status == 200;
    }
}
AuthService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: AngularTokenService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$3 = [
    AuthService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RequestCacheService {
    constructor() {
        this.cacheEntries = [];
    }
    /**
     * @param {?} req
     * @return {?}
     */
    get(req) {
        return undefined;
    }
    /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    put(req, response) {
        /** @type {?} */
        let cacheKey = 1;
        /** @type {?} */
        let cacheEntry = {
            url: '',
            response: response,
            lastRead: 1,
        };
        this.cacheEntries[cacheKey] = cacheEntry;
    }
}
RequestCacheService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$4 = [
    RequestCacheService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Manager {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.ngComponentPath = 'ngElementStrategy.componentRef.instance';
    }
    /**
     * @return {?}
     */
    get config() {
        return reduce(this._config, merge);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    define(config) {
        if (!this.elementExists(config.elementName)) {
            /** @type {?} */
            let customElement = this.buildCustomElement(this.elementConfig(config));
            this.defineNativeCustomElement(config.elementName, customElement);
        }
    }
    /**
     * @param {?} elementName
     * @return {?}
     */
    elementExists(elementName) {
        return customElements.get(elementName) != null;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isCustomElement(element) {
        return this.hasNgComponent(element);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getNgComponent(element) {
        return get(element, this.ngComponentPath);
    }
    //Private methods
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    hasNgComponent(element) {
        return has(element, this.ngComponentPath);
    }
    /**
     * @private
     * @param {?} elementName
     * @param {?} element
     * @return {?}
     */
    defineNativeCustomElement(elementName, element) {
        customElements.define(elementName, element);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    buildCustomElement(config) {
        return createCustomElement(config.ctor, config.opts);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    elementConfig(config) {
        /** @type {?} */
        let defaultConfig = get(this.config, config.elementName, {});
        return merge(defaultConfig, config);
    }
}
Manager.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Manager.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ELEMENTS_CONFIG,] }] }
];
/** @nocollapse */ Manager.ngInjectableDef = defineInjectable({ factory: function Manager_Factory() { return new Manager(inject(CUSTOM_ELEMENTS_CONFIG)); }, token: Manager, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Factory {
    /**
     * @param {?} manager
     */
    constructor(manager) {
        this.manager = manager;
    }
    /**
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    build(elementName, inputs) {
        /** @type {?} */
        let element = this.getElement(elementName, inputs);
        this.launchElement(element);
        return element;
    }
    //Private methods
    /**
     * @private
     * @param {?} elementName
     * @param {?} inputs
     * @return {?}
     */
    getElement(elementName, inputs) {
        if (this.manager.elementExists(elementName)) {
            /** @type {?} */
            let element = this.buildElementInstance(elementName);
            return this.configureElementInstance(element, inputs);
        }
        else {
            return this.defaultElement;
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    launchElement(element) {
        document
            .getElementById("custom-elements-wrap")
            .appendChild((/** @type {?} */ (element)));
    }
    /**
     * @private
     * @param {?} elementName
     * @return {?}
     */
    buildElementInstance(elementName) {
        return (/** @type {?} */ (document.createElement(elementName)));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} inputs
     * @return {?}
     */
    configureElementInstance(element, inputs) {
        /** @type {?} */
        let onClosed = () => {
            return document.body.removeChild(element);
        };
        element.addEventListener('closed', onClosed);
        /** @type {?} */
        let setInput = (value, prop) => {
            element[prop] = value;
        };
        forEach(inputs, setInput);
        return element;
    }
}
Factory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Factory.ctorParameters = () => [
    { type: Manager }
];
/** @nocollapse */ Factory.ngInjectableDef = defineInjectable({ factory: function Factory_Factory() { return new Factory(inject(Manager)); }, token: Factory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$5 = [
    Manager,
    Factory,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CachingInterceptor {
    /**
     * @param {?} cache
     */
    constructor(cache) {
        this.cache = cache;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (!this.isCachable(req)) {
            return next.handle(req);
        }
        /** @type {?} */
        let cachedResponse = this.cache.get(req);
        //sendRequest(req, next, this.cache)
        return cachedResponse ?
            of(cachedResponse) : next.handle(req);
    }
    /**
     * @private
     * @param {?} req
     * @return {?}
     */
    isCachable(req) {
        return false;
    }
}
CachingInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CachingInterceptor.ctorParameters = () => [
    { type: RequestCacheService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pass untouched request through to the next request handler.
 */
class NoopInterceptor {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$6 = [
    CachingInterceptor,
    NoopInterceptor,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sharedServices = [
    NotificationService,
    NgbDateNativeAdapter$1,
    InputControlService,
    CsvToJsonService,
    PaneFactory,
    PaneProvider,
    PaneManager,
    ...services$2,
    ...services$3,
    ...services$4,
    ...services$5,
    ...services$6,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} authService
     * @param {?} router
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    canActivate() {
        if (this.authService.userSignedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
AuthGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthService },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sharedGuards = [
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
class FormComponent extends BaseComponent {
    /**
     * @param {?} inputControlService
     */
    constructor(inputControlService) {
        super();
        this.inputControlService = inputControlService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.handleActions();
        this.inputGroup$
            .subscribe(inputGroup => {
            this.inputGroup = inputGroup;
            this._formGroup = this.inputControlService.toFormGroup(inputGroup);
        });
    }
    /**
     * @return {?}
     */
    handleActions() {
        if (this.dataService && this.entity) {
            this.dataService.handleDialogActions(this);
        }
    }
    /**
     * @return {?}
     */
    get formGroup() {
        return this._formGroup;
    }
    /**
     * @return {?}
     */
    payload() {
        /** @type {?} */
        let payload = this.formGroup.value;
        if (this.defaultParams) {
            return merge(payload, this.defaultParams);
        }
        else {
            return payload;
        }
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-form',
                template: "<div *ngIf=\"formGroup\">\n  <form [formGroup]=\"formGroup\">\n\n    <ceo-shared-form-group\n      [inputGroup]=\"inputGroup\"\n      [formGroup]=\"formGroup\">\n    </ceo-shared-form-group>\n\n  </form>\n</div>\n",
                providers: [InputControlService],
                styles: [""]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: InputControlService }
];
FormComponent.propDecorators = {
    inputGroup$: [{ type: Input }],
    dataService: [{ type: Input }],
    entity: [{ type: Input }],
    defaultParams: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$a = [
    FormComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IframeComponent extends BaseComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super();
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.url =
            this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
}
IframeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-iframe',
                template: "<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe [src]=\"url\" allowfullscreen></iframe>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
IframeComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
IframeComponent.propDecorators = {
    url: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$b = [
    IframeComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent extends BaseComponent {
    /**
     * @return {?}
     */
    get isValid() {
        return this.formGroup.controls[this.field.key].valid;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selected(option) {
        return (this.field.value == option.key);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    checked(values$$1) {
        return includes(values$$1, this.field.value);
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-input',
                template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"field.controlType\">\n\n    <input *ngSwitchCase=\"'textbox'\"\n      class=\"form-control\"\n      [formControlName]=\"field.key\"\n      [id]=\"field.key\"\n      [type]=\"field.controlType\"\n      [placeholder]=\"field.placeholder\">\n\n    <select *ngSwitchCase=\"'dropdown'\"\n      class=\"form-control\"\n      [id]=\"field.key\" \n      [formControlName]=\"field.key\">\n\n      <option *ngFor=\"let opt of field.options | async\"\n        [value]=\"opt.key\"\n        [selected]=\"selected(opt)\">\n      \n        {{opt.value}}\n\n      </option>\n    </select>\n\n    <div *ngSwitchCase=\"'radio'\">\n      <label *ngFor=\"let opt of field.options\">\n        {{opt.key}}\n        <input [formControlName]=\"field.key\"\n          [type]=\"field.controlType\"\n          [name]=\"field.key\"\n          [value]=\"opt.value\"\n          [checked]=\"checked(opt.values)\">\n      </label>\n    </div>\n\n    <input *ngSwitchCase=\"'checkbox'\"\n      class=\"form-control\"\n      [formControlName]=\"field.key\"\n      [id]=\"field.key\"\n      [type]=\"field.controlType\"\n      [name]=\"field.key\"\n      [checked]=\"checked([true, 1, 'yes', 'Yes'])\">\n\n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{field.label}} is required</div>\n</div>\n",
                styles: [""]
            }] }
];
InputComponent.propDecorators = {
    formGroup: [{ type: Input }],
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$c = [
    InputComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemComponent$1 extends BaseComponent {
    constructor() {
        super(...arguments);
        this.actionEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.attributeEntities$ = this.getAttributeEntities$();
    }
    /**
     * @return {?}
     */
    getAttributeEntities$() {
        return this.entity.getAttributeEntities$(this.configHeader$);
    }
    /**
     * @param {?} entity
     * @param {?} action
     * @return {?}
     */
    triggerAction(entity, action) {
        this.actionEmitter.emit({
            entity: entity,
            action: action
        });
    }
    /**
     * @param {?} attributeEntity
     * @return {?}
     */
    getValue(attributeEntity) {
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
    }
    /**
     * @param {?} headerAttribute
     * @return {?}
     */
    getActions(headerAttribute) {
        if (headerAttribute) {
            return this.getActionArray(headerAttribute);
        }
        return [];
    }
    /**
     * @param {?} headerAttribute
     * @return {?}
     */
    getActionArray(headerAttribute) {
        if (headerAttribute['actions']) {
            return this.checkActions(headerAttribute['actions']);
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    checkActions(actions) {
        /** @type {?} */
        let _currentObj = this;
        /** @type {?} */
        let attributes = map(actions, function (action) {
            if (action['check-attributes']) {
                /** @type {?} */
                let objs = filter(action['check-attributes'], function (condition) {
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
        return compact(attributes);
    }
}
ItemComponent$1.decorators = [
    { type: Component, args: [{
                selector: '[shared-declarables-item]',
                template: "<td *ngFor=\"let attributeEntity of attributeEntities$ | async\">\n  {{ getValue(attributeEntity) }}\n</td>\n<td>\n  <a *ngFor=\"let action of itemActions$ | async\"\n  (click)=\"triggerAction(entity, action.name)\">\n    {{ action.displayValue }}\n  </a>\n\n</td>\n",
                styles: [""]
            }] }
];
ItemComponent$1.propDecorators = {
    entity: [{ type: Input }],
    configHeader$: [{ type: Input }],
    itemActions$: [{ type: Input }],
    actionEmitter: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$d = [
    ItemComponent$1,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.searchAttributes = {};
        this.actionEmitter = new EventEmitter();
    }
    /**
     * @param {?} event_
     * @return {?}
     */
    triggerAction(event_) {
        this.actionEmitter.emit({
            entity: event_.entity,
            action: event_.action
        });
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-list',
                template: "<shared-declarables-table\n  [collection$]=\"collection$\"\n  [configHeader$]=\"configHeader$\"\n  (actionEmitter)=\"triggerAction($event)\">\n</shared-declarables-table>\n",
                styles: [""]
            }] }
];
ListComponent.propDecorators = {
    collection$: [{ type: Input }],
    configHeader$: [{ type: Input }],
    searchAttributes: [{ type: Input }],
    actionEmitter: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$e = [
    ListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavbarToggleComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.animationClass = "hamburger--slider";
        this.activeClass = "is-active";
        this.ngClass = "";
        this.state = 'inactive';
        this.isActive = false;
        this.toggleEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngClass = this.getNgClass();
        this.setState();
    }
    /**
     * @private
     * @return {?}
     */
    setState() {
        this.state = this.isActive ? 'active' : 'inactive';
    }
    /**
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        let oldState = this.state;
        this.isActive = !this.isActive;
        this.setState();
        this.emitNewState(oldState);
        if (this.animation) {
            this.animationClass = `hamburger--${this.animation}`;
        }
    }
    /**
     * @private
     * @param {?} oldState
     * @return {?}
     */
    emitNewState(oldState) {
        /** @type {?} */
        let event = {
            fromState: oldState,
            toState: this.state
        };
        this.toggleEmitter.emit(event);
    }
    /**
     * @return {?}
     */
    getNgClass() {
        /** @type {?} */
        let ngClasses = [this.animationClass];
        if (this.isActive) {
            ngClasses.push(this.activeClass);
        }
        return join(ngClasses, " ");
    }
}
NavbarToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sunray-shared-navbar-toggle',
                template: "<button class=\"hamburger\"\n  [ngClass]=\"getNgClass()\"\n  (click)=\"toggle()\"\n  type=\"button\">\n\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                styles: [""]
            }] }
];
NavbarToggleComponent.propDecorators = {
    animation: [{ type: Input }],
    isActive: [{ type: Input }],
    toggleEmitter: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$f = [
    NavbarToggleComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.menuClass = 'horizontal';
        this.itemEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    getMenuClass() {
        /** @type {?} */
        let classNames = ['menu', this.menuClass];
        return join(classNames, ' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation',
                template: "<nav class=\"navbar navbar-expand-sm\">\n  <div class=\"collapse navbar-collapse\">\n    <ceo-navigation-nav\n      [navigationMenu]=\"navigationMenu\"\n      (itemEvent)=\"onItemEvent($event)\">\n    </ceo-navigation-nav>\n  </div>\n</nav>\n",
                styles: [".menu{display:flex}.horizontal{flex-direction:row;justify-content:space-evenly}.horizontal .pane{flex-direction:column;width:150px;border-radius:.3rem}.horizontal .pane img{width:30px}.vertical{flex-direction:column}"]
            }] }
];
NavigationComponent.propDecorators = {
    navigationMenu: [{ type: Input }],
    navigationLinks: [{ type: Input }],
    menuClass: [{ type: Input }],
    itemEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavItemComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    className() {
        /** @type {?} */
        let classes = [this.item.className];
        if (this.item.hasSubmenu()) {
            classes.push('dropdown');
            classes.push('has-submenu');
        }
        return join(classes, ' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
NavItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation-nav-item',
                template: "<li class=\"nav-item\"\n [ngClass]=\"className()\">\n\n  <ceo-navigation-nav-link\n    *ngIf=\"!item.disableLink\"\n    [ngClass]=\"className()\"\n    [item]=\"item\">\n  </ceo-navigation-nav-link>\n\n  <ceo-navigation-nav-text\n    *ngIf=\"item.disableLink\"\n    [ngClass]=\"className()\"\n    [item]=\"item\">\n  </ceo-navigation-nav-text>\n\n  <ceo-dropdown\n    *ngIf=\"item.hasSubmenu()\"\n    [navigationMenu]=\"item.submenu\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-dropdown>\n\n</li>\n",
                styles: [""]
            }] }
];
NavItemComponent.propDecorators = {
    item: [{ type: Input }],
    itemEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavLinkComponent extends BaseComponent {
}
NavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation-nav-link',
                template: "<a class=\"nav-link\" href=\"{{item.url}}\" ceoRouteTransformer>\n  {{ item.displayValue }}\n</a>\n",
                styles: [""]
            }] }
];
NavLinkComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.itemEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onItemEvent(event) {
        this.itemEvent.emit(event);
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation-nav',
                template: "<ul class=\"navbar-nav\">\n  <ceo-navigation-nav-item\n    *ngFor=\"let item of navigationMenu.items.sortedItems\"\n    [item]=\"item\"\n    (itemEvent)=\"onItemEvent($event)\">\n  </ceo-navigation-nav-item>\n</ul>\n",
                styles: [""]
            }] }
];
NavComponent.propDecorators = {
    navigationMenu: [{ type: Input }],
    itemEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavTextComponent extends BaseComponent {
}
NavTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-navigation-nav-text',
                template: "<span class=\"nav-text\">\n  {{ item.displayValue }}\n</span>\n",
                styles: [""]
            }] }
];
NavTextComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$g = [
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
class PageComponent extends BaseComponent {
}
PageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-page',
                template: "<div class=\"page-inner-wrapper\">\n  <div class=\"body-wrapper\">\n    <ceo-body></ceo-body>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$h = [
    PageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaneComponent extends BaseComponent {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.launch();
    }
    /**
     * @private
     * @return {?}
     */
    launch() {
        this.pane$.subscribe(pane => {
            this.loadComponent(pane);
        });
    }
    /**
     * @private
     * @param {?} pane
     * @return {?}
     */
    loadComponent(pane) {
        /** @type {?} */
        let component = this.createComponent(pane.componentFactory);
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    resolveComponentFactory(component) {
        return this.componentFactoryResolver
            .resolveComponentFactory(component);
    }
    /**
     * @private
     * @param {?} componentFactory
     * @return {?}
     */
    createComponent(componentFactory) {
        /** @type {?} */
        let viewContainerRef = this.containerDirective.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.setInputs();
        return this.componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    setInputs() {
        if (this.inputs) {
            /** @type {?} */
            let setInput = (value, prop) => {
                this.componentRef.instance[prop] = value;
            };
            forEach(this.inputs, setInput);
        }
    }
}
PaneComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-shared-declarables-pane',
                template: "<ng-template shared-declarables-container>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PaneComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
PaneComponent.propDecorators = {
    containerDirective: [{ type: ViewChild, args: [forwardRef(() => ContainerDirective),] }],
    pane$: [{ type: Input }],
    inputs: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$i = [
    PaneComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.search = new FormControl('');
        this.searchKeyEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onValueChange();
    }
    /**
     * @return {?}
     */
    onValueChange() {
        this.search.valueChanges.subscribe((searchText) => {
            this.searchKeyEmitter.emit({
                searchText: searchText
            });
        });
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-search',
                template: "<input type=\"text\" [formControl]=\"search\" placeholder=\"enter search term here\">\n",
                styles: [""]
            }] }
];
SearchComponent.propDecorators = {
    searchKeyEmitter: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$j = [
    SearchComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$k = [
    SelectListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgLoaderComponent extends BaseComponent {
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const view = this._template.createEmbeddedView({ fromContext: 'John' });
        this.vc.insert(view);
    }
}
SvgLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-svg-loader',
                template: "<ng-template #template let-name='fromContext'>{{name}}</ng-template>\n<ng-container #vc></ng-container>\n",
                styles: [""]
            }] }
];
SvgLoaderComponent.propDecorators = {
    _template: [{ type: ViewChild, args: ['template', { read: TemplateRef },] }],
    vc: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$l = [
    SvgLoaderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.searchAttributes = {};
        this.actionEmitter = new EventEmitter();
    }
    /**
     * @param {?} event_
     * @return {?}
     */
    triggerAction(event_) {
        this.actionEmitter.emit({
            entity: event_.entity,
            action: event_.action
        });
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-table',
                template: "<a *ngFor=\"let action of collectionActions$ | async\">\n  {{ action.displayValue }}\n</a>\n<table class='table table-bordered'>\n  <thead>\n    <tr>\n      <th *ngFor=\"let header of configHeader$ | async\">\n        {{ header.displayName }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let entity of collection$ | async | customSearch:searchAttributes\"\n      shared-declarables-item\n      [entity]=\"entity\"\n      [configHeader$]=\"configHeader$\"\n      [itemActions$]=\"itemActions$\"\n      (actionEmitter)=\"triggerAction($event)\">\n    </tr>\n  </tbody>\n</table>\n",
                styles: [""]
            }] }
];
TableComponent.propDecorators = {
    collection$: [{ type: Input }],
    configHeader$: [{ type: Input }],
    itemActions$: [{ type: Input }],
    collectionActions$: [{ type: Input }],
    searchAttributes: [{ type: Input }],
    actionEmitter: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$m = [
    TableComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$n = [
    ...components,
    ...components$1,
    ...components$2,
    ...components$3,
    ...components$4,
    ...components$5,
    ...components$6,
    ...components$7,
    ...components$8,
    ...components$9,
    ...components$a,
    ...components$b,
    ...components$c,
    ...components$d,
    ...components$e,
    ...components$f,
    ...components$g,
    ...components$h,
    ...components$i,
    ...components$j,
    ...components$k,
    ...components$l,
    ...components$m,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasePage extends BaseComponent {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BasePage.decorators = [
    { type: Component, args: [{
                template: '',
                styles: [""]
            }] }
];
/** @nocollapse */
BasePage.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pages = [
    BasePage,
];

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
class DeclarablesModule {
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
                    ...components$n,
                    ...pages,
                ],
                exports: [
                    ...components$n,
                    ...pages,
                    ...directives,
                    ...pipes,
                ],
                entryComponents: [
                    ...components$n,
                    ...pages,
                ]
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
class ProvidersModule {
}
ProvidersModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    DeclarablesModule,
                ],
                providers: [
                    ...sharedServices,
                    ...sharedGuards,
                    ...providers,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClose() {
        this.close.emit();
    }
}
CloseComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-close',
                template: "<button type=\"button\"\n  class=\"close modal-close btn btn-lg btn-lg-curved\"\n  aria-label=\"Close\"\n  (click)=\"onClose()\">\n\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n",
                styles: [""]
            }] }
];
CloseComponent.propDecorators = {
    close: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogComponent extends BaseComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.contentElementId = 'dialog-content';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.data.actions$.subscribe(action => this.onAction(action));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
        this.dialogRef.close('close');
        this.emitAction(this.buildAction('close'));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    onAction(action) {
        //console.log("We have the dialog action " + action.name)
    }
    /**
     * @private
     * @param {?} name
     * @param {?=} payload
     * @return {?}
     */
    buildAction(name, payload = null) {
        return {
            name: name,
            payload: payload
        };
    }
    /**
     * @param {?} action
     * @return {?}
     */
    emitAction(action) {
        this.data.actions$.next(action);
    }
}
DialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog',
                template: "<div id=\"dialog-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetComponent extends DialogComponent {
}
WidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-widget',
                template: "<div class=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n\n  <ceo-dialog-widget-header\n    class=\"modal-header\"\n    *ngIf=\"data.header.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [data]=\"data.header\">\n  </ceo-dialog-widget-header>\n\n  <div class=\"modal-body\">\n    <mat-dialog-content>\n      <div *ngIf=\"data.navigationLinks\" class='navigation-wrapper'>\n        <ceo-navigation\n          [navigationLinks]=\"data.navigationLinks\"\n          [menuClass]=\"'vertical'\">\n        </ceo-navigation>\n      </div>\n\n      <div id=\"dialog-content\" class=\"modal-window\">\n        <ng-template shared-declarables-container>\n        </ng-template>\n      </div>\n\n    </mat-dialog-content>\n  </div>\n\n  <ceo-dialog-widget-footer\n    class=\"modal-footer\"\n    *ngIf=\"data.footer.show\"\n    (actionEmitter)=\"emitAction($event)\"\n    [ngClass]=\"data.footer.className\"\n    [data]=\"data.footer\">\n  </ceo-dialog-widget-footer>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.actionEmitter = new EventEmitter();
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-widget-header',
                template: "<div class=\"modal-header-inner-wrapper\">\n\n  <h2 mat-dialog-title class=\"modal-title title\">{{ data.title }}</h2>\n\n</div>\n",
                styles: [""]
            }] }
];
HeaderComponent.propDecorators = {
    data: [{ type: Input }],
    actionEmitter: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.actionEmitter = new EventEmitter();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    onTriggerAction(action) {
        /** @type {?} */
        let dialogAction = {
            name: action.name,
            payload: null
        };
        this.actionEmitter.emit(dialogAction);
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-dialog-widget-footer',
                template: "<mat-dialog-actions>\n  <a *ngFor=\"let action of data.actions\"\n    href=\"{{action.url}}\"\n    class=\"{{action.className}}\"\n    ceoClickStopEventBubble\n    (click)=\"onTriggerAction(action)\"\n    href=\"{{action.url}}\">\n    {{action.text}}\n  </a>\n</mat-dialog-actions>\n",
                styles: [""]
            }] }
];
FooterComponent.propDecorators = {
    data: [{ type: Input }],
    actionEmitter: [{ type: Output }]
};

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
class ModalNavigationItemComponent extends BaseComponent {
}
ModalNavigationItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-modal-navigation-item',
                template: "<p>\n  modal-navigation-item works!\n</p>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent extends BaseComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.contentElementId = 'modal-content';
    }
    /**
     * @return {?}
     */
    afterClosed() {
        return this.dialogRef.afterClosed();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAction(event) {
        if (event.action.name == 'cancel') {
            this.dialogRef.close(event.action.name);
        }
        else {
            this.data.actions$.next(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
        this.dialogRef.close('close');
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'shared-declarables-modal',
                template: "<div id=\"modal-content\">\n  <ceo-dialog-close\n    (close)=\"onClose($event)\">\n  </ceo-dialog-close>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DIALOGS_CONFIG = new InjectionToken("Dialogs Config");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let initAction = {
    name: 'init',
    payload: null,
};
/** @type {?} */
const defaultDialogsConfig = {
    isDefault: true,
    defaults: {
        actions$: new BehaviorSubject(initAction),
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
const providers$1 = [
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
class ConfigService {
    /**
     * @param {?} customElementManager
     * @param {?} dialogsConfig
     */
    constructor(customElementManager, dialogsConfig) {
        this.customElementManager = customElementManager;
        this.dialogsConfig = dialogsConfig;
    }
    /**
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    provide(dialogElement, config) {
        /** @type {?} */
        let component = this.getComponent(dialogElement);
        config = this.getDialogConfig(dialogElement, config);
        /** @type {?} */
        let configActions = this.dialogConfigActions(component);
        return defaultsDeep(config, configActions, this.defaults);
    }
    /**
     * @return {?}
     */
    get dialogs() {
        return reduce(map(this.dialogsConfig, 'dialogs'), merge);
    }
    /**
     * @return {?}
     */
    get defaults() {
        /** @type {?} */
        let defaults$$1 = this.defaultConfig.defaults;
        /** @type {?} */
        let others = {
            componentType: DialogComponent,
        };
        return merge(defaults$$1, others);
    }
    /**
     * @return {?}
     */
    get defaultConfig() {
        return (/** @type {?} */ (find(this.dialogsConfig, { isDefault: true })));
    }
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    getDialogConfig(dialogElement, config) {
        /** @type {?} */
        var dialogName;
        if (this.customElementManager.isCustomElement(dialogElement)) {
            dialogName = dialogElement.localName;
        }
        if (isString(config)) {
            dialogName = config;
        }
        if (dialogName) {
            return get(this.dialogs, dialogName, this.defaults);
        }
        else {
            return config;
        }
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    dialogConfigActions(component) {
        if (component.dialogActions$) {
            return {
                actions$: component.dialogActions$
            };
        }
        return {};
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getComponent(element) {
        /** @type {?} */
        let component = element;
        if (this.customElementManager.isCustomElement(element)) {
            component = this.customElementManager.getNgComponent(element);
        }
        return (/** @type {?} */ (component));
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: Manager },
    { type: undefined, decorators: [{ type: Inject, args: [DIALOGS_CONFIG,] }] }
];
/** @nocollapse */ ConfigService.ngInjectableDef = defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(inject(Manager), inject(DIALOGS_CONFIG)); }, token: ConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatDialogAdapterService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
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
    open(contentElement, dialogConfig) {
        /** @type {?} */
        let config = this.buildAdapterDialogConfig(dialogConfig);
        /** @type {?} */
        let dialogComponentType = dialogConfig.componentType;
        /** @type {?} */
        let matDialogComponent = this.getMatDialog(dialogComponentType, config);
        /** @type {?} */
        let dialogComponent = this.getDialogComponent(matDialogComponent);
        return this.configuredDialogComponent(dialogComponent, contentElement);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.dialog.closeAll();
    }
    /**
     * @private
     * @param {?} dialogComponentType
     * @param {?} config
     * @return {?}
     */
    getMatDialog(dialogComponentType, config) {
        return this.dialog.open(dialogComponentType, config);
    }
    /**
     * @private
     * @param {?} matDialog
     * @return {?}
     */
    getDialogComponent(matDialog) {
        /** @type {?} */
        let dialogComponent = (/** @type {?} */ (matDialog.componentInstance));
        this.connectDialogs(matDialog, dialogComponent);
        return dialogComponent;
    }
    /**
     * @private
     * @param {?} matDialog
     * @param {?} dialogComponent
     * @return {?}
     */
    connectDialogs(matDialog, dialogComponent) {
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
        let matDialogEventNames = [
            'afterClosed', 'afterOpened', 'backdropClick',
            'beforeClosed', 'keydownEvents'
        ];
        /** @type {?} */
        let attachMatDialogEvent = (eventName) => {
            matDialog[eventName]().subscribe(event => {
                /** @type {?} */
                let action = {
                    name: eventName,
                    payload: dialogComponent,
                };
                dialogComponent.data.actions$.next(action);
            });
        };
        forEach(matDialogEventNames, attachMatDialogEvent);
        dialogComponent.data.actions$.subscribe(action => {
            if (action.name == 'close') {
                matDialog.close(action);
            }
        });
    }
    /**
     * @private
     * @param {?} dialogConfig
     * @return {?}
     */
    buildAdapterDialogConfig(dialogConfig) {
        /** @type {?} */
        let dialogComponentData = {
            data: this.buildComponentData(dialogConfig)
        };
        /** @type {?} */
        let adapterDialogConfig = pick(dialogConfig, this.adapterConfigProperties);
        return merge(adapterDialogConfig, dialogComponentData);
    }
    /**
     * @private
     * @param {?} dialogConfig
     * @return {?}
     */
    buildComponentData(dialogConfig) {
        return dialogConfig;
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentElement
     * @return {?}
     */
    configuredDialogComponent(dialogComponent, contentElement) {
        this.addContentComponent(dialogComponent, contentElement);
        return (/** @type {?} */ (dialogComponent));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentElement
     * @return {?}
     */
    addContentComponent(dialogComponent, contentElement) {
        this.showContentComponent(dialogComponent, contentElement);
        this.launchContentComponent(dialogComponent);
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @param {?} contentElement
     * @return {?}
     */
    showContentComponent(dialogComponent, contentElement) {
        document
            .getElementById(dialogComponent.contentElementId)
            .appendChild((/** @type {?} */ (contentElement)));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @return {?}
     */
    launchContentComponent(dialogComponent) {
        /** @type {?} */
        let action = this.buildLaunchAction(dialogComponent);
        dialogComponent.data.actions$.next((/** @type {?} */ (action)));
    }
    /**
     * @private
     * @param {?} dialogComponent
     * @return {?}
     */
    buildLaunchAction(dialogComponent) {
        return {
            name: 'launch',
            payload: {
                dialogRef: dialogComponent.dialogRef
            }
        };
    }
}
MatDialogAdapterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MatDialogAdapterService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ MatDialogAdapterService.ngInjectableDef = defineInjectable({ factory: function MatDialogAdapterService_Factory() { return new MatDialogAdapterService(inject(MatDialog$1)); }, token: MatDialogAdapterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogService {
    /**
     * @param {?} dialogAdapter
     * @param {?} configService
     */
    constructor(dialogAdapter, configService) {
        this.dialogAdapter = dialogAdapter;
        this.configService = configService;
    }
    /**
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    open(dialogElement, config) {
        config = this.buildDialogConfig(dialogElement, config);
        return this.openVendorDialog(dialogElement, config);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.dialogAdapter.closeAll();
    }
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    buildDialogConfig(dialogElement, config) {
        return this.configService.provide(dialogElement, config);
    }
    /**
     * @private
     * @param {?} dialogElement
     * @param {?} config
     * @return {?}
     */
    openVendorDialog(dialogElement, config) {
        return this.dialogAdapter.open(dialogElement, config);
    }
}
DialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DialogService.ctorParameters = () => [
    { type: MatDialogAdapterService },
    { type: ConfigService }
];
/** @nocollapse */ DialogService.ngInjectableDef = defineInjectable({ factory: function DialogService_Factory() { return new DialogService(inject(MatDialogAdapterService), inject(ConfigService)); }, token: DialogService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$o = [
    WidgetComponent,
    HeaderComponent,
    FooterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$p = [
    CloseComponent,
    DialogComponent,
    ...components$o,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$q = [
    ModalComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$r = [
    ModalNavigationItemComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$s = [
    ...components$p,
    ...components$q,
    ...components$r,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$7 = [
    ConfigService,
    DialogService,
    MatDialogAdapterService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const angularMaterialModules$1 = [
    MatDialogModule,
];
class CeoDialogsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CeoDialogsModule,
            providers: [
                ...services$7,
                ...providers$1,
            ],
        };
    }
}
CeoDialogsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    NgbDatepickerModule,
                    NgsRevealModule,
                    angularMaterialModules$1,
                    DeclarablesModule,
                ],
                declarations: [
                    ...components$s,
                ],
                exports: [
                    ...components$s,
                ],
                entryComponents: [
                    ...components$s,
                ]
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
class FormMember {
    /**
     * @param {?=} props
     */
    constructor(props = {}) {
        Object.assign(this, props);
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this._ngControl;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.ngControl.value;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.ngControl.valid;
    }
    /**
     * @return {?}
     */
    markAsTouchedAndDirty() {
        this.markAsTouched();
        this.markAsDirty();
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        this.ngControl.markAsTouched();
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        this.ngControl.markAsDirty();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormGroup$1 extends FormMember {
    /**
     * @param {?=} props
     */
    constructor(props = {}) {
        super(props);
        this.type = 'form-group';
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this._ngControl;
    }
    /**
     * @return {?}
     */
    get memberNames() {
        return keys(this.members);
    }
    /**
     * @param {?} memberName
     * @return {?}
     */
    getMember(memberName) {
        return this.members[memberName];
    }
    /**
     * @return {?}
     */
    get members() {
        return this._members;
    }
    /**
     * @param {?} members
     * @return {?}
     */
    set members(members) {
        this._members = members;
    }
    /**
     * @param {?} ngControl
     * @return {?}
     */
    set ngControl(ngControl) {
        this._ngControl = ngControl;
    }
    //Marks the control as touched. A control is touched by focus and blur events
    //that do not change the value.
    /**
     * @return {?}
     */
    markAsTouched() {
        /** @type {?} */
        let marker = 'markAsTouched';
        this.applyMarker(marker);
    }
    //Marks the control as dirty. A control becomes dirty when the
    //control's value is changed through the UI
    /**
     * @return {?}
     */
    markAsDirty() {
        /** @type {?} */
        let marker = 'markAsDirty';
        this.applyMarker(marker);
    }
    /**
     * @param {?} markerName
     * @return {?}
     */
    applyMarker(markerName) {
        this.ngControl[markerName]();
        /** @type {?} */
        let markMember = (member) => {
            member[markerName]();
        };
        map(this.members, markMember);
    }
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        /** @type {?} */
        let current = 0;
        /** @type {?} */
        let members = values(this.members);
        return {
            next: function () {
                /** @type {?} */
                let isEmpty$$1 = isEmpty(members);
                /** @type {?} */
                let value = isEmpty$$1 ? null : members[current++];
                /** @type {?} */
                let done = isEmpty$$1 ? true : current > members.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormItem extends FormMember {
    /**
     * @param {?=} props
     */
    constructor(props = {}) {
        super(props);
        this.type = 'form-item';
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this.control.ngControl;
    }
    /**
     * @param {?} ngControl
     * @return {?}
     */
    set ngControl(ngControl) {
        this.control.ngControl = ngControl;
    }
    /**
     * @return {?}
     */
    get showValidations() {
        return this.control.showValidations;
    }
    /**
     * @return {?}
     */
    get errorMessages() {
        return this.control.errorMessages;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormWrapper extends FormGroup$1 {
    constructor() {
        super(...arguments);
        this.type = 'form';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelElement {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseFormControl {
    /**
     * @param {?=} init
     */
    constructor(init = {}) {
        this.order = -1;
        this.validators = [];
        Object.assign(this, init);
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this._ngControl;
    }
    /**
     * @param {?} ngControl
     * @return {?}
     */
    set ngControl(ngControl) {
        this._ngControl = ngControl;
    }
    /**
     * @return {?}
     */
    get showValidations() {
        return this.ngControl.errors &&
            (this.ngControl.dirty || this.ngControl.touched);
    }
    /**
     * @return {?}
     */
    get errorMessages() {
        /** @type {?} */
        let buildErrorMessage = (value, key) => {
            /** @type {?} */
            var message = '';
            /** @type {?} */
            let lowerCased = lowerCase(this.displayName);
            /** @type {?} */
            let firstLetter = lowerCased[0];
            /** @type {?} */
            let startsWithVowel = includes(['a', 'e', 'i', 'o', 'u'], firstLetter);
            /** @type {?} */
            let article = startsWithVowel ? 'an' : 'a';
            if (key == 'required') {
                message = `Please enter ${article} ${lowerCased}.`;
            }
            if (key == 'email') {
                message = `Please enter a valid email.`;
            }
            return {
                key: key,
                message: message,
            };
        };
        return map(this.ngControl.errors, buildErrorMessage);
    }
    /**
     * @return {?}
     */
    get name() {
        return this.displayName;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxFormControl extends BaseFormControl {
    constructor() {
        super(...arguments);
        this.controlType = 'checkbox';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectFormControl extends BaseFormControl {
    /**
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.controlType = 'select';
        this.options = [];
        //eg. [{key: 1, value: "Test1"}]
        //this.options = init['options'] || this.emptyDropdown$()
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let inputFormControlDefaults = {
    key: '',
    label: '',
    placeholder: '',
    row: null,
    value: null,
    inputType: (/** @type {?} */ ('text')),
    required: false,
    options: [],
};
class InputFormControl extends BaseFormControl {
    /**
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.defaults = inputFormControlDefaults;
        this.controlType = 'input';
        this.options = [];
        init = defaults(init, this.defaults);
        Object.assign(this, init);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextboxFormControl extends BaseFormControl {
    constructor() {
        super(...arguments);
        this.controlType = 'textbox';
    }
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
class FormComponent$1 extends BaseComponent {
}
FormComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-form',
                template: "<div *ngIf=\"formWrapper\" class=\"form-wrap\">\n  <form [formGroup]=\"formWrapper.ngControl\">\n    <div class=\"form-inner\">\n      <ceo-forms-form-group\n        [model]=\"formWrapper\">\n      </ceo-forms-form-group>\n    </div>\n  </form>\n</div>\n",
                styles: [""]
            }] }
];
FormComponent$1.propDecorators = {
    formWrapper: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormControlComponent extends BaseComponent {
}
FormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-form-control',
                template: "<ng-container [ngSwitch]=\"control.controlType\">\n  <ng-container *ngSwitchCase=\"'input'\">\n    <ceo-forms-elements-form-controls-input\n      [element]=\"control\">\n    </ceo-forms-elements-form-controls-input>\n  </ng-container>\n</ng-container>\n",
                styles: [""]
            }] }
];
FormControlComponent.propDecorators = {
    control: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormGroupComponent$1 extends BaseComponent {
}
FormGroupComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-form-group',
                template: "<ng-container *ngIf=\"model\">\n  <ng-container *ngFor=\"let memberName of model.memberNames\">\n    <ng-container [ngSwitch]=\"model.getMember(memberName).type\">\n\n      <ng-container *ngSwitchCase=\"'form-item'\">\n        <ceo-forms-form-item\n          [key]=\"memberName\"\n          [item]=\"model.getMember(memberName)\">\n        </ceo-forms-form-item>\n      </ng-container>\n\n      <ng-container *ngSwitchCase=\"'form-group'\">\n        <ceo-forms-form-group\n          [key]=\"memberName\"\n          [model]=\"model.getMember(memberName)\">\n        </ceo-forms-form-group>\n      </ng-container>\n\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                styles: [""]
            }] }
];
FormGroupComponent$1.propDecorators = {
    key: [{ type: Input }],
    model: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormItemComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.classes = {
            valid: 'is-valid',
            invalid: 'is-invalid',
        };
    }
    /**
     * @return {?}
     */
    formGroupClass() {
        /** @type {?} */
        let classes = [];
        /** @type {?} */
        let ngControl = this.item.ngControl;
        if (ngControl.valid) {
            classes.push(this.classes.valid);
        }
        if (ngControl.invalid) {
            classes.push(this.classes.invalid);
        }
        return classes;
    }
}
FormItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-form-item',
                template: "<div class=\"form-group\" [ngClass]=\"formGroupClass()\">\n  <ng-container *ngIf=\"item.label\">\n    <ceo-forms-elements-label\n      [element]=\"item.label\">\n    </ceo-forms-elements-label>\n  </ng-container>\n\n  <ceo-forms-form-control\n    [control]=\"item.control\">\n  </ceo-forms-form-control>\n\n  <ceo-forms-form-item-error\n    [item]=\"item\">\n  </ceo-forms-form-item-error>\n\n</div>\n",
                styles: [""]
            }] }
];
FormItemComponent.propDecorators = {
    key: [{ type: Input }],
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormItemErrorComponent extends BaseComponent {
}
FormItemErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-form-item-error',
                template: "<ng-container *ngIf=\"item.showValidations\">\n  <div class=\"invalid-feedback\">\n    <ng-container *ngFor=\"let errorMessage of item.errorMessages\">\n      <span class=\"invalid-feedback-message\">{{errorMessage.message}}</span>\n    </ng-container>\n  </div>\n</ng-container>\n",
                styles: [""]
            }] }
];
FormItemErrorComponent.propDecorators = {
    key: [{ type: Input }],
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelComponent extends BaseComponent {
}
LabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-elements-label',
                template: "<label [attr.for]=\"element.controlId\">{{element.text}}</label>\n",
                styles: [""]
            }] }
];
LabelComponent.propDecorators = {
    element: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseComponent$1 extends BaseComponent {
}
BaseComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-elements-form-controls-base',
                template: "<p>\n  base works!\n</p>\n",
                styles: [""]
            }] }
];
BaseComponent$1.propDecorators = {
    element: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent$1 extends BaseComponent$1 {
}
InputComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-elements-form-controls-input',
                template: "<ng-container [ngSwitch]=\"element.inputType\">\n\n  <ceo-datepicker\n    *ngSwitchCase=\"'date'\"\n    [control]=\"element.ngControl\">\n  </ceo-datepicker>\n\n  <ceo-forms-elements-form-controls-input-checkbox\n    *ngSwitchCase=\"'checkbox'\"\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-checkbox>\n\n  <ceo-forms-elements-form-controls-input-radio\n    *ngSwitchCase=\"'radio'\"\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-radio>\n\n  <ceo-forms-elements-form-controls-input-base\n    *ngSwitchDefault\n    [element]=\"element\">\n  </ceo-forms-elements-form-controls-input-base>\n\n</ng-container>\n",
                styles: [""]
            }] }
];
InputComponent$1.propDecorators = {
    element: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseComponent$2 extends BaseComponent$1 {
}
BaseComponent$2.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-elements-form-controls-input-base',
                template: "<input\n  class=\"form-control\"\n  [formControl]=\"element.ngControl\"\n  [type]=\"element.inputType\"\n  [attr.id]=\"element.elementId\"\n  [attr.required]=\"element.required\"\n  [attr.placeholder]=\"element.placeholder\">\n",
                styles: [""]
            }] }
];
BaseComponent$2.propDecorators = {
    element: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent extends BaseComponent$2 {
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-elements-form-controls-input-checkbox',
                template: "<mat-checkbox\n  class=\"checkbox\"\n  [formControl]=\"element.ngControl\">\n\n  {{element.displayName}}\n\n</mat-checkbox>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioComponent extends BaseComponent$2 {
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-forms-elements-form-controls-input-radio',
                template: "<mat-radio-group\n  class=\"radio-group\"\n  [formControl]=\"element.ngControl\">\n\n  <mat-radio-button\n    *ngFor=\"let option of element.options\"\n    class=\"radio-button\"\n    [value]=\"option.value\">\n\n    {{option.text}}\n\n  </mat-radio-button>\n\n</mat-radio-group>\n",
                styles: [""]
            }] }
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
class FormControlFactory {
    /**
     * @param {?} formControl
     * @return {?}
     */
    build(formControl) {
        return new FormControl(formControl.value, Validators.compose(formControl.validators));
    }
}
FormControlFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ FormControlFactory.ngInjectableDef = defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory(); }, token: FormControlFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormGroupFactory {
    /**
     * @param {?} formControlFactory
     */
    constructor(formControlFactory) {
        this.formControlFactory = formControlFactory;
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    build(formGroup) {
        return this.buildNgFormGroup(formGroup);
    }
    /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    buildNgFormGroup(formGroup) {
        /** @type {?} */
        let ngControls = this.buildNgControls(formGroup.members);
        return new FormGroup(ngControls);
    }
    /**
     * @private
     * @param {?} members
     * @return {?}
     */
    buildNgControls(members) {
        /** @type {?} */
        let getNgControl = (member) => {
            return this.getNgControl(member);
        };
        return mapValues(members, getNgControl);
    }
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    getNgControl(member) {
        if (!member.ngControl) {
            /** @type {?} */
            let control = this.buildNgControl(member);
            member.ngControl = control;
        }
        return member.ngControl;
    }
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    buildNgControl(member) {
        /** @type {?} */
        let factory = (/** @type {?} */ (this.resolveControlFactory(member)));
        /** @type {?} */
        let ngControl = factory.build(member);
        return ngControl;
    }
    /**
     * @private
     * @param {?} member
     * @return {?}
     */
    resolveControlFactory(member) {
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
    }
}
FormGroupFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormGroupFactory.ctorParameters = () => [
    { type: FormControlFactory }
];
/** @nocollapse */ FormGroupFactory.ngInjectableDef = defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory(inject(FormControlFactory)); }, token: FormGroupFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormControlFactory$1 {
    /**
     * @param {?} ngFormControlFactory
     */
    constructor(ngFormControlFactory) {
        this.ngFormControlFactory = ngFormControlFactory;
    }
    /**
     * @param {?} props
     * @return {?}
     */
    build(props) {
        /** @type {?} */
        let formControl = this.buildFormControl(props);
        formControl.ngControl = this.buildNgFormControl(formControl);
        return formControl;
    }
    /**
     * @private
     * @param {?} props
     * @return {?}
     */
    buildFormControl(props) {
        /** @type {?} */
        let controlConstructor = this.resolveControlConstructor(props);
        return new controlConstructor(props);
    }
    /**
     * @private
     * @param {?} props
     * @return {?}
     */
    resolveControlConstructor(props) {
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
    }
    /**
     * @private
     * @param {?} formControl
     * @return {?}
     */
    buildNgFormControl(formControl) {
        return this.ngFormControlFactory.build(formControl);
    }
}
FormControlFactory$1.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormControlFactory$1.ctorParameters = () => [
    { type: FormControlFactory }
];
/** @nocollapse */ FormControlFactory$1.ngInjectableDef = defineInjectable({ factory: function FormControlFactory_Factory() { return new FormControlFactory$1(inject(FormControlFactory)); }, token: FormControlFactory$1, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormGroupFactory$1 {
    /**
     * @param {?} ngFormGroupFactory
     */
    constructor(ngFormGroupFactory) {
        this.ngFormGroupFactory = ngFormGroupFactory;
        this.type = 'form-group';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        /** @type {?} */
        let formGroup = this.buildFormGroup(params);
        formGroup.ngControl = this.buildNgFormGroup(formGroup);
        return formGroup;
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    buildFormGroup(params) {
        /** @type {?} */
        let formMemberCtor = this.resolveFormGroupCtor(params);
        return new formMemberCtor((/** @type {?} */ (params.data)));
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    resolveFormGroupCtor(params) {
        switch (params.type) {
            case "form-group": {
                return FormGroup$1;
            }
            case "form": {
                return FormWrapper;
            }
            default: {
                return FormGroup$1;
            }
        }
    }
    /**
     * @private
     * @param {?} formGroup
     * @return {?}
     */
    buildNgFormGroup(formGroup) {
        return this.ngFormGroupFactory.build(formGroup);
    }
}
FormGroupFactory$1.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormGroupFactory$1.ctorParameters = () => [
    { type: FormGroupFactory }
];
/** @nocollapse */ FormGroupFactory$1.ngInjectableDef = defineInjectable({ factory: function FormGroupFactory_Factory() { return new FormGroupFactory$1(inject(FormGroupFactory)); }, token: FormGroupFactory$1, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormFactory {
    /**
     * @param {?} formGroupFactory
     */
    constructor(formGroupFactory) {
        this.formGroupFactory = formGroupFactory;
    }
    /**
     * @param {?} members
     * @return {?}
     */
    build(members) {
        /** @type {?} */
        let data = {
            members: members
        };
        /** @type {?} */
        let params = {
            type: (/** @type {?} */ ('form')),
            data: (/** @type {?} */ (data))
        };
        return this.formGroupFactory.build(params);
    }
}
FormFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormFactory.ctorParameters = () => [
    { type: FormGroupFactory$1 }
];
/** @nocollapse */ FormFactory.ngInjectableDef = defineInjectable({ factory: function FormFactory_Factory() { return new FormFactory(inject(FormGroupFactory$1)); }, token: FormFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormItemFactory {
    /**
     * @param {?} formControlFactory
     */
    constructor(formControlFactory) {
        this.formControlFactory = formControlFactory;
        this.type = 'form-item';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        /** @type {?} */
        let label = this.buildLabel(params);
        /** @type {?} */
        let control = this.buildControl(params);
        return this.buildItem(label, control);
    }
    /**
     * @private
     * @param {?} label
     * @param {?} control
     * @return {?}
     */
    buildItem(label, control) {
        /** @type {?} */
        let itemParams = {
            label: label,
            control: control
        };
        return new FormItem(itemParams);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    buildLabel(params) {
        /** @type {?} */
        let props = (/** @type {?} */ (params.data));
        return new LabelElement(props.label);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    buildControl(params) {
        /** @type {?} */
        let props = (/** @type {?} */ (params.data));
        return this.formControlFactory.build(props.control);
    }
}
FormItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormItemFactory.ctorParameters = () => [
    { type: FormControlFactory$1 }
];
/** @nocollapse */ FormItemFactory.ngInjectableDef = defineInjectable({ factory: function FormItemFactory_Factory() { return new FormItemFactory(inject(FormControlFactory$1)); }, token: FormItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormMemberFactory {
    /**
     * @param {?} formItemFactory
     * @param {?} formGroupFactory
     */
    constructor(formItemFactory, formGroupFactory) {
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
    build(params) {
        /** @type {?} */
        let factory = this.resolveMemberFactory(params);
        return factory.build(params);
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    resolveMemberFactory(params) {
        /** @type {?} */
        let typeFactory = find(this.factories, { type: params.type });
        return (/** @type {?} */ (defaultTo(typeFactory, this.defaultMemberFactory)));
    }
}
FormMemberFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormMemberFactory.ctorParameters = () => [
    { type: FormItemFactory },
    { type: FormGroupFactory$1 }
];
/** @nocollapse */ FormMemberFactory.ngInjectableDef = defineInjectable({ factory: function FormMemberFactory_Factory() { return new FormMemberFactory(inject(FormItemFactory), inject(FormGroupFactory$1)); }, token: FormMemberFactory, providedIn: "root" });

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
const components$t = [
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
const components$u = [
    BaseComponent$1,
    ...components$t,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$v = [
    LabelComponent,
    ...components$u,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$w = [
    FormComponent$1,
    FormControlComponent,
    FormGroupComponent$1,
    FormItemComponent,
    FormItemErrorComponent,
    ...components$v,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$8 = [
    FormControlFactory,
    FormGroupFactory,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$9 = [
    FormControlFactory$1,
    FormFactory,
    FormGroupFactory$1,
    FormItemFactory,
    FormMemberFactory,
    ...services$8,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const angularMaterialModules$2 = [
    MatRadioModule,
    MatCheckboxModule,
];
class CeoFormsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CeoFormsModule,
            providers: [
                ...services$9,
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
                    angularMaterialModules$2,
                    DeclarablesModule,
                ],
                declarations: [
                    ...components$w,
                ],
                exports: [
                    ...components$w,
                ],
                entryComponents: []
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
class HtmlVideoComponent extends BaseComponent {
    /**
     * @return {?}
     */
    get videoSources() {
        /** @type {?} */
        var sources;
        if (isString(this.tagAttributes.src)) {
            /** @type {?} */
            let source = {
                src: this.tagAttributes.src,
                type: 'video/mp4'
            };
            sources = [source];
        }
        else {
            sources = this.tagAttributes.src;
        }
        return (/** @type {?} */ (flattenDeep(sources)));
    }
}
HtmlVideoComponent.decorators = [
    { type: Component, args: [{
                selector: 'ceo-html-video',
                template: "<video\n  [width]=\"tagAttributes.width\"\n  [height]=\"tagAttributes.height\"\n  [autoplay]=\"tagAttributes.autoplay\"\n  [controls]=\"tagAttributes.controls\">\n\n\n  <source \n    *ngFor=\"let src of videoSources\"\n    [src]=\"src.src\"\n    [type]=\"src.type\">\n\n\n</video>\n",
                styles: [""]
            }] }
];
HtmlVideoComponent.propDecorators = {
    tagAttributes: [{ type: Input }]
};

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
const mimeTypes = [
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
/** @type {?} */
const components$x = [
    HtmlVideoComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$y = [
    ...components$x,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CeoHtmlModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CeoHtmlModule,
            providers: [],
        };
    }
}
CeoHtmlModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    ...components$y,
                ],
                exports: [
                    ...components$y,
                ],
                entryComponents: [
                    ...components$y,
                ]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ProvidersModule as SharedProvidersModule, DeclarablesModule as SharedDeclarablesModule, directives, ClickStopEventBubbleDirective, ContainerDirective, NavigationDirective, RouteTransformerDirective, ScrollTopDirective, pipes, CustomSearchPipe, SafeHtmlPipe, components$n as components, BaseComponent, AttributeListComponent, BodyComponent, BreadcrumbComponent, CardSelectListComponent, CardComponent, DatepickerComponent, DropdownComponent, FieldComponent, FormGroupComponent, FormComponent, InputComponent, IframeComponent, ItemComponent$1 as ItemComponent, ListComponent, NavbarToggleComponent, NavigationComponent, PageComponent, PaneComponent, SearchComponent, SelectListComponent, SvgLoaderComponent, TableComponent, pages, BasePage, ApiConfig, Breadcrumb, Card, Pane, Mixin, AttributeUpdater, createGetSet, AttributeGetterSetter, DataInspector, Memoizer, Helper, PropertyDelegator, sharedServices, CsvToJsonService, PaneFactory, PaneProvider, PaneManager, AuthService, CachingInterceptor, NoopInterceptor, RequestCacheService, Manager as CustomElementManager, Factory as CustomElementFactory, NotificationService, NgbDateNativeAdapter$1 as NgbDateNativeAdapter, InputControlService, services$2 as services, RequestOptionsBuilder as ApiRequestOptionsBuilder, RequestUrlBuilder as ApiRequestUrlBuilder, ResponseParser as ApiResponseParser, ApiService, ResponseParser$1 as JsonApiResponseParser, sharedGuards, AuthGuard, API_CONFIG, CUSTOM_ELEMENTS_CONFIG, PaneList, providers, CeoDialogsModule, CloseComponent as DialogCloseComponent, DialogComponent, WidgetComponent as DialogWidgetComponent, HeaderComponent as DialogWidgetHeaderComponent, FooterComponent as DialogWidgetFooterComponent, ModalNavigationItemComponent, ModalComponent, ConfigService as DialogConfigService, DialogService, MatDialogAdapterService, providers$1 as dialogTokenProviders, defaultDialogsConfig, DIALOGS_CONFIG, CeoFormsModule, FormGroup$1 as FormGroup, FormItem, FormMember, FormWrapper, LabelElement, BaseFormControl, CheckboxFormControl, SelectFormControl, InputFormControl, TextboxFormControl, FormComponent$1 as CeoFormComponent, FormControlComponent as CeoFormControlComponent, FormGroupComponent$1 as CeoFormGroupComponent, FormItemComponent as CeoFormItemComponent, FormItemErrorComponent as CeoFormItemErrorComponent, LabelComponent, BaseComponent$1 as BaseFormControlComponent, InputComponent$1 as InputFormControlComponent, BaseComponent$2 as InputBaseFormControlComponent, CheckboxComponent as InputCheckboxFormControlComponent, RadioComponent as InputRadioFormControlComponent, FormControlFactory$1 as FormControlFactory, FormFactory, FormGroupFactory$1 as FormGroupFactory, FormItemFactory, FormMemberFactory, FormControlFactory as NgFormControlFactory, FormGroupFactory as NgFormGroupFactory, CeoHtmlModule, HtmlVideoComponent, mimeTypes, components$s as ɵbm, components$p as ɵbn, components$o as ɵbo, components$r as ɵbq, components$q as ɵbp, services$7 as ɵbr, components$w as ɵbs, components$v as ɵbt, components$u as ɵbu, components$t as ɵbv, services$8 as ɵbx, services$9 as ɵbw, components$y as ɵby, components$x as ɵbz, components$1 as ɵb, components as ɵa, components$2 as ɵc, components$3 as ɵd, components$4 as ɵe, components$5 as ɵf, DateParserFormatter as ɵbl, components$6 as ɵg, CustomContentComponent as ɵl, components$7 as ɵh, ItemComponent as ɵi, LinkComponent as ɵj, TextComponent as ɵk, components$8 as ɵm, components$9 as ɵn, components$a as ɵo, components$b as ɵq, components$c as ɵp, components$d as ɵr, components$e as ɵs, components$f as ɵt, components$g as ɵu, NavItemComponent as ɵv, NavLinkComponent as ɵw, NavTextComponent as ɵx, NavComponent as ɵy, components$h as ɵz, components$i as ɵba, components$j as ɵbb, components$k as ɵbc, components$l as ɵbd, components$m as ɵbe, services as ɵbf, services$1 as ɵbg, services$3 as ɵbh, services$4 as ɵbj, services$5 as ɵbk, services$6 as ɵbi };

//# sourceMappingURL=ceo-shared.js.map