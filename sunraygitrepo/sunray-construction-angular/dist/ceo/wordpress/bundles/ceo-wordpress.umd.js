(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@ceo/core'), require('lodash'), require('@angular/common/http'), require('@ceo/shared'), require('@ceo/entity'), require('@angular/core'), require('@ngrx/store'), require('@ngrx/effects')) :
    typeof define === 'function' && define.amd ? define('@ceo/wordpress', ['exports', 'rxjs/operators', '@ceo/core', 'lodash', '@angular/common/http', '@ceo/shared', '@ceo/entity', '@angular/core', '@ngrx/store', '@ngrx/effects'], factory) :
    (factory((global.ceo = global.ceo || {}, global.ceo.wordpress = {}),global.rxjs.operators,global.core,global._,global.ng.common.http,global.shared,global.entity,global.ng.core,global.store,global.effects));
}(this, (function (exports,operators,core,_,http,shared,entity,i0,store,effects) { 'use strict';

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
    var WordpressEntity = /** @class */ (function (_super) {
        __extends(WordpressEntity, _super);
        function WordpressEntity(init, dataService) {
            var _this = _super.call(this, init, dataService) || this;
            _this.createRenderedAttributeGetters();
            return _this;
        }
        Object.defineProperty(WordpressEntity.prototype, "featuredMediaUrl", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._featuredMediaUrl) {
                    this._featuredMediaUrl = this.getFeaturedMediaUrl();
                }
                return this._featuredMediaUrl;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} attachmentName
         * @return {?}
         */
        WordpressEntity.prototype.attachment$ = /**
         * @param {?} attachmentName
         * @return {?}
         */
            function (attachmentName) {
                /** @type {?} */
                var propName = core.camelCase(attachmentName);
                /** @type {?} */
                var attachmentData = this[propName];
                /** @type {?} */
                var ri = ( /** @type {?} */({
                    feature: this.feature,
                    type: 'attachments',
                    id: attachmentData.id || attachmentData.ID
                }));
                return this.dataService.get$(ri).pipe(operators.filter(function (attachment) { return !_.isEmpty(attachment); }));
            };
        /**
         * @private
         * @param {?=} defaultUrl
         * @return {?}
         */
        WordpressEntity.prototype.getFeaturedMediaUrl = /**
         * @private
         * @param {?=} defaultUrl
         * @return {?}
         */
            function (defaultUrl) {
                if (defaultUrl === void 0) {
                    defaultUrl = '';
                }
                if (!_.has(this, 'attributes._embedded.wp:featuredmedia')) {
                    return defaultUrl;
                }
                /** @type {?} */
                var featuredMediaCollection = this.attributes._embedded['wp:featuredmedia'];
                if (featuredMediaCollection) {
                    return featuredMediaCollection[0].source_url;
                }
                return defaultUrl;
            };
        /**
         * @private
         * @return {?}
         */
        WordpressEntity.prototype.createRenderedAttributeGetters = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var createRenderedAttributeGetter = function (value, attrName) {
                    /** @type {?} */
                    var propName = "rendered" + core.pascalCase(attrName);
                    /** @type {?} */
                    var privatePropName = "_" + propName;
                    /** @type {?} */
                    var getter = function () {
                        return _this[attrName]['rendered'];
                    };
                    /** @type {?} */
                    var props = {
                        get: function () {
                            return _this.memoized(privatePropName, getter);
                        },
                        set: function (value) { }
                    };
                    Object.defineProperty(_this, propName, props);
                };
                /** @type {?} */
                var attributes = this.getAttributesWithRenderedFormat();
                _.map(attributes, createRenderedAttributeGetter);
            };
        /**
         * @private
         * @return {?}
         */
        WordpressEntity.prototype.getAttributesWithRenderedFormat = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var hasRenderedFormat = function (attribute) {
                    return _.has(attribute, 'rendered');
                };
                return _.pickBy(this.attributes, hasRenderedFormat);
            };
        WordpressEntity._sliceName = 'wp-entities';
        return WordpressEntity;
    }(entity.JsonApiEntity));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AttachmentEntity = /** @class */ (function (_super) {
        __extends(AttachmentEntity, _super);
        function AttachmentEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(AttachmentEntity.prototype, "htmlTagAttributes", {
            get: /**
             * @return {?}
             */ function () {
                switch (this.htmlMediaType) {
                    case 'image': {
                        return this.imageTagAttributes();
                        break;
                    }
                    case 'video': {
                        return this.videoTagAttributes();
                        break;
                    }
                    default: {
                        return this.imageTagAttributes();
                        break;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttachmentEntity.prototype, "htmlMediaType", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var mimeType = ( /** @type {?} */(_.find(shared.mimeTypes, { mimeType: this.mimeType })));
                return mimeType ? mimeType.mediaType : AttachmentEntity.defaultMediaType;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        AttachmentEntity.prototype.imageTagAttributes = /**
         * @private
         * @return {?}
         */
            function () {
                return {
                    width: this.mediaDetails.width,
                    height: this.mediaDetails.height,
                    alt: this.altText,
                    src: this.sourceUrl,
                };
            };
        /**
         * @private
         * @return {?}
         */
        AttachmentEntity.prototype.videoTagAttributes = /**
         * @private
         * @return {?}
         */
            function () {
                return {
                    autoplay: false,
                    controls: true,
                    width: this.mediaDetails.width,
                    height: this.mediaDetails.height,
                    src: [{
                            src: this.sourceUrl,
                            type: this.mimeType,
                        }]
                };
            };
        AttachmentEntity.defaultMediaType = 'image';
        return AttachmentEntity;
    }(WordpressEntity));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResourceConfigurationEntity = /** @class */ (function (_super) {
        __extends(ResourceConfigurationEntity, _super);
        function ResourceConfigurationEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResourceConfigurationEntity.defaultAttributes = {
            isRoutable: true,
        };
        return ResourceConfigurationEntity;
    }(WordpressEntity));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StateEntity = /** @class */ (function (_super) {
        __extends(StateEntity, _super);
        function StateEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StateEntity.defaultAttributes = {
            isRoutable: false,
        };
        return StateEntity;
    }(WordpressEntity));

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
    var featureUrl = "http://sunray-wordpress.customexposure.tech/wp-json";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WordpressEntityConfig = /** @class */ (function (_super) {
        __extends(WordpressEntityConfig, _super);
        function WordpressEntityConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} entityData
         * @return {?}
         */
        WordpressEntityConfig.prototype.ofType = /**
         * @param {?} entityData
         * @return {?}
         */
            function (entityData) {
                if (entityData.type) {
                    return this.type == entityData.type;
                }
                /** @type {?} */
                var baseUrl = _.join([featureUrl, this.url], '/');
                /** @type {?} */
                var attributesUrl = this.urlFromAttributes(entityData);
                return core.startsWith(attributesUrl, baseUrl);
            };
        /**
         * @param {?=} entityData
         * @return {?}
         */
        WordpressEntityConfig.prototype.urlFromAttributes = /**
         * @param {?=} entityData
         * @return {?}
         */
            function (entityData) {
                if (entityData === void 0) {
                    entityData = {};
                }
                return _.get(entityData, ['attributes', '_links', 'self', '0', 'href'], ' ');
            };
        return WordpressEntityConfig;
    }(entity.EntityConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AttachmentEntityConfig = /** @class */ (function (_super) {
        __extends(AttachmentEntityConfig, _super);
        function AttachmentEntityConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} entityData
         * @return {?}
         */
        AttachmentEntityConfig.prototype.ofType = /**
         * @param {?} entityData
         * @return {?}
         */
            function (entityData) {
                if (entityData.type) {
                    return entityData.type == 'attachment';
                }
                /** @type {?} */
                var attributesUrl = this.urlFromAttributes(entityData);
                return attributesUrl.includes("v2/media");
            };
        return AttachmentEntityConfig;
    }(WordpressEntityConfig));
    /** @type {?} */
    var entityConfigType = {
        type: "attachments",
        url: 'wp/v2/media',
        entityConfig: AttachmentEntityConfig,
        entityType: AttachmentEntity,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuEntityConfig = /** @class */ (function (_super) {
        __extends(MenuEntityConfig, _super);
        function MenuEntityConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} entityData
         * @return {?}
         */
        MenuEntityConfig.prototype.ofType = /**
         * @param {?} entityData
         * @return {?}
         */
            function (entityData) {
                if (entityData.type) {
                    return this.type == entityData.type;
                }
                /** @type {?} */
                var attributesUrl = this.urlFromAttributes(entityData);
                return attributesUrl.includes("v2/menus");
            };
        /**
         * @param {?=} entityData
         * @return {?}
         */
        MenuEntityConfig.prototype.urlFromAttributes = /**
         * @param {?=} entityData
         * @return {?}
         */
            function (entityData) {
                if (entityData === void 0) {
                    entityData = {};
                }
                return _.get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
            };
        return MenuEntityConfig;
    }(WordpressEntityConfig));
    /** @type {?} */
    var entityConfigType$1 = {
        type: "menus",
        isSeed: true,
        seed: [{}],
        url: 'wp-api-menus/v2/menus',
        entityConfig: MenuEntityConfig
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageEntityConfig = /** @class */ (function (_super) {
        __extends(PageEntityConfig, _super);
        function PageEntityConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} entityData
         * @return {?}
         */
        PageEntityConfig.prototype.ofType = /**
         * @param {?} entityData
         * @return {?}
         */
            function (entityData) {
                if (entityData.type) {
                    return entityData.type == 'page';
                }
                /** @type {?} */
                var attributesUrl = this.urlFromAttributes(entityData);
                return attributesUrl.includes("v2/pages");
            };
        /**
         * @param {?=} entityData
         * @return {?}
         */
        PageEntityConfig.prototype.urlFromAttributes = /**
         * @param {?=} entityData
         * @return {?}
         */
            function (entityData) {
                if (entityData === void 0) {
                    entityData = {};
                }
                return _.get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
            };
        return PageEntityConfig;
    }(WordpressEntityConfig));
    /** @type {?} */
    var entityConfigType$2 = {
        type: "pages",
        url: 'wp/v2/pages',
        primaryKeys: ["id", "slug"],
        entityConfig: PageEntityConfig,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var baseEntityConfigTypes = [
        {
            type: "wordpress-entities",
        },
        {
            type: 'categories',
            isSeed: true,
            seed: [{}],
            url: 'wp/v2/categories',
        },
        {
            type: "document-types",
            url: 'wp/v2/document-types'
        },
        {
            type: "ebooks",
            url: 'wp/v2/ebooks'
        },
        {
            type: "faqs",
            url: 'wp/v2/faqs'
        },
        {
            type: "gallery-images",
            url: 'wp/v2/gallery-images'
        },
        {
            type: "infographics",
            url: 'wp/v2/infographics'
        },
        {
            type: "lc-categories",
            url: 'wp/v2/lc-categories'
        },
        {
            type: "posts",
            url: 'wp/v2/posts'
        },
        {
            type: "publications",
            url: 'wp/v2/publications',
        },
        {
            type: "statutory-documents",
            url: 'wp/v2/statutory-documents',
        },
        {
            type: "recorded-webinars",
            url: 'wp/v2/recorded-webinars',
        },
        {
            type: "seminars",
            url: 'wp/v2/seminars',
        },
        {
            type: "states",
            url: 'wp/v2/states',
            entityType: StateEntity,
        },
        {
            type: "team-members",
            url: 'wp/v2/team-members'
        },
        {
            type: "testimonials",
            url: 'wp/v2/testimonials'
        },
        {
            type: "video-testimonials",
            url: 'wp/v2/video-testimonials'
        },
        {
            type: "videos",
            url: 'wp/v2/videos'
        },
        {
            type: "webinars",
            url: 'wp/v2/webinars'
        }
    ];
    /** @type {?} */
    var allEntityConfigTypes = _.concat(baseEntityConfigTypes, entityConfigType$1, entityConfigType$2, entityConfigType);
    /** @type {?} */
    var entityConfigTypes = _.sortBy(allEntityConfigTypes, 'type');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var buildResourceConfiguration = function (entityMap, entityConfigType) {
        /** @type {?} */
        var name = entityConfigType.type;
        /** @type {?} */
        var attributes = {
            displayName: core.pascalCase(name),
            displaySlug: name,
            resourceType: name,
            primaryKeys: ['id'],
        };
        if (entityConfigType.entityType) {
            _.merge(attributes, entityConfigType.entityType.defaultAttributes);
        }
        /** @type {?} */
        var data = {
            id: name,
            type: 'resource-configurations',
            attributes: attributes,
        };
        /** @type {?} */
        var entity$$1 = new ResourceConfigurationEntity(data);
        entityMap[name] = entity$$1;
        return entityMap;
    };
    /** @type {?} */
    var entities = _.reduce(entityConfigTypes, buildResourceConfiguration, {});
    /** @type {?} */
    var entityConfigType$3 = {
        type: "resource-configurations",
        url: 'wp/v2/resource-configurations',
        entityType: ResourceConfigurationEntity,
        initialState: {
            ids: _.map(entities, 'id'),
            entities: entities
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var entityConfigTypes$1 = _.concat(entityConfigTypes, entityConfigType$3);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} params
     * @return {?}
     */
    function buildEntityConfig(params) {
        /** @type {?} */
        var configType = _.get(params, 'entityConfig', WordpressEntityConfig);
        /** @type {?} */
        var configParams = _.omit(params, ['entityConfig', 'configuration']);
        configParams = _.defaults(configParams, { entityType: WordpressEntity });
        return new configType(configParams);
    }
    /**
     * @param {?} entityConfigParams
     * @return {?}
     */
    function buildEntityConfigs(entityConfigParams) {
        return _.map(_.sortBy(entityConfigParams, 'type'), buildEntityConfig);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var entityConfigs = buildEntityConfigs(entityConfigTypes$1);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} selectorService
     * @param {?} ri
     * @return {?}
     */
    function selector(selectorService, ri) {
        /** @type {?} */
        var si = {
            feature: 'cms',
            entityType: ri.type,
            selectorType: 'all'
        };
        /** @type {?} */
        var baseSelector = selectorService
            .selectorFromSelectorIdentifier(si);
        /** @type {?} */
        var taxonomyType = core.pluralize(ri.filter.taxonomy);
        /** @type {?} */
        var taxonomyValue = ri.filter.term;
        // Filter function
        /** @type {?} */
        var filterByTaxonomy = function (state, taxonomyState) {
            if (state && state.where) {
                /** @type {?} */
                var taxonomy = taxonomyState.findByAttr('slug', taxonomyValue);
                if (taxonomy) {
                    /** @type {?} */
                    var filter = {};
                    filter[taxonomyType] = taxonomy.id;
                    return state.where(filter);
                }
                else {
                    return state.none();
                }
            }
            else {
                return state;
            }
        };
        // Get the selector for the taxonomy
        /** @type {?} */
        var taxonomySelectorIdentifier = {
            feature: 'cms',
            entityType: taxonomyType,
            selectorType: 'all'
        };
        /** @type {?} */
        var taxonomySelector = selectorService
            .selectorFromSelectorIdentifier(taxonomySelectorIdentifier);
        return store.createSelector(baseSelector, taxonomySelector, filterByTaxonomy);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} ri
     * @return {?}
     */
    function isValid(ri) {
        /** @type {?} */
        var filter = ri.filter;
        /** @type {?} */
        var filterHasTaxonomy = function (filter) {
            return _.has(filter, 'taxonomy') && _.has(filter, 'term');
        };
        return filter && filterHasTaxonomy(filter);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var forTaxonomy = {
        selector: selector,
        isValid: isValid
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var selectors = [
        forTaxonomy,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var featureName = "cms";
    /** @type {?} */
    var featureConfig = {
        name: featureName,
        entityConfigs: entityConfigs,
        baseEntityType: WordpressEntity,
        selectors: selectors
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var config = new entity.FeatureConfig(featureConfig);
    /** @type {?} */
    var params = {
        url: featureUrl,
        defaultBodyParams: {},
        defaultQueryParams: {
            "_embed": true,
            "per_page": 100,
        },
        resourceTypes: config.entityTypes,
    };
    /** @type {?} */
    var apiConfig = new shared.ApiConfig(params);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EntityAttributeBuilder = /** @class */ (function () {
        function EntityAttributeBuilder() {
            this.omittedAttributes = ["id", "type"];
        }
        /**
         * @param {?} params
         * @return {?}
         */
        EntityAttributeBuilder.prototype.build = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                return {
                    feature: params.feature,
                    type: params.type,
                    id: params.id,
                    attributes: this.buildAttributes(params)
                };
            };
        /**
         * @param {?} params
         * @return {?}
         */
        EntityAttributeBuilder.prototype.buildAttributes = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                return _.omit(params, this.omittedAttributes);
            };
        EntityAttributeBuilder.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ EntityAttributeBuilder.ngInjectableDef = i0.defineInjectable({ factory: function EntityAttributeBuilder_Factory() { return new EntityAttributeBuilder(); }, token: EntityAttributeBuilder, providedIn: "root" });
        return EntityAttributeBuilder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EntityEffects = /** @class */ (function (_super) {
        __extends(EntityEffects, _super);
        function EntityEffects() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EntityEffects.decorators = [
            { type: i0.Injectable }
        ];
        return EntityEffects;
    }(entity.EntityEffects));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RequestOptionsBuilder = /** @class */ (function (_super) {
        __extends(RequestOptionsBuilder, _super);
        function RequestOptionsBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
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
        RequestOptionsBuilder.decorators = [
            { type: i0.Injectable }
        ];
        return RequestOptionsBuilder;
    }(shared.ApiRequestOptionsBuilder));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services = [
        RequestOptionsBuilder,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services$1 = __spread([
        EntityAttributeBuilder,
        EntityEffects
    ], services);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var WORDPRESS_API_ENDPOINT_PROVIDER = new i0.InjectionToken("Wordpress API EndpointP Provider");
    /** @type {?} */
    var WORDPRESS_API_CONFIG = new i0.InjectionToken("Wordpress API Attribute Builder");
    /** @type {?} */
    var WORDPRESS_API_REQUEST_OPTIONS_BUILDER = new i0.InjectionToken('API Request Options Builder');
    /** @type {?} */
    var WORDPRESS_API_RESPONSE_PARSER = new i0.InjectionToken("Wordpress API Response Parser");
    /** @type {?} */
    var WORDPRESS_API_SERVICE = new i0.InjectionToken("Wordpress API Service");
    /** @type {?} */
    var WORDPRESS_FEATURE_REDUCER = new i0.InjectionToken('Feature Reducer');
    /** @type {?} */
    var WORDPRESS_ENTITY_SERVICE = new i0.InjectionToken("Wordpress Entity Service");
    /** @type {?} */
    var WORDPRESS_ENTITY_TYPE_PROVIDER = new i0.InjectionToken("Wordpress Entity Type Provider");
    /** @type {?} */
    var WORDPRESS_ENTITY_ADAPTER_FACTORY = new i0.InjectionToken("Wordpress Entity Adapter Factory");
    /** @type {?} */
    var WORDPRESS_FEATURE_CONFIG = new i0.InjectionToken("Wordpress Feature Config");
    /** @type {?} */
    var WORDPRESS_FEATURE_CONFIG_ATTRIBUTES = new i0.InjectionToken("Wordpress Feature Config Attributes");
    /** @type {?} */
    var WORDPRESS_FEATURE_NAME = new i0.InjectionToken("Wordpress Feature Name");
    /** @type {?} */
    var WORDPRESS_BASE_ENTITY = new i0.InjectionToken("Wordpress Base Entity");
    /** @type {?} */
    var WORDPRESS_ENTITY_EFFECTS = new i0.InjectionToken("Wordpress Entity Effects");
    /** @type {?} */
    var WORDPRESS_CUSTOM_SELECTORS = new i0.InjectionToken("Wordpress Custom Selectors");
    /** @type {?} */
    var WORDPRESS_ENTITY_ATTRIBUTE_BUILDER = new i0.InjectionToken("Wordpress Entity Attribute Builder");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} apiConfig
     * @param {?} http
     * @param {?} csvToJsonService
     * @param {?} responseParser
     * @return {?}
     */
    function buildApiService(apiConfig, http$$1, csvToJsonService, responseParser) {
        /** @type {?} */
        var urlBuilder = new shared.ApiRequestUrlBuilder(apiConfig);
        /** @type {?} */
        var optionsBuilder = new RequestOptionsBuilder(apiConfig);
        return new shared.ApiService(http$$1, csvToJsonService, responseParser, urlBuilder, optionsBuilder);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function buildFeatureInitialState() {
        return entity.buildFeatureInitialState(featureConfig);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} selectorService
     * @return {?}
     */
    function buildSelectors(selectorService) {
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
    var tokenProviders = [
        {
            provide: WORDPRESS_API_CONFIG,
            useValue: apiConfig,
        },
        {
            provide: WORDPRESS_API_REQUEST_OPTIONS_BUILDER,
            useClass: RequestOptionsBuilder,
        },
        {
            provide: WORDPRESS_API_RESPONSE_PARSER,
            useClass: shared.ApiResponseParser,
        },
        {
            provide: WORDPRESS_API_SERVICE,
            useFactory: buildApiService,
            deps: [
                WORDPRESS_API_CONFIG,
                http.HttpClient,
                shared.CsvToJsonService,
                WORDPRESS_API_RESPONSE_PARSER,
                WORDPRESS_API_REQUEST_OPTIONS_BUILDER,
            ]
        },
        {
            provide: WORDPRESS_CUSTOM_SELECTORS,
            useValue: buildSelectors,
        },
        {
            provide: WORDPRESS_ENTITY_ATTRIBUTE_BUILDER,
            useClass: EntityAttributeBuilder,
        },
        {
            provide: EntityEffects,
            useFactory: entity.buildEntityEffects,
            deps: [
                store.Store,
                effects.Actions,
                WORDPRESS_ENTITY_SERVICE,
                WORDPRESS_FEATURE_CONFIG,
                entity.ResourceIdentifierService,
            ],
        },
        {
            provide: WORDPRESS_ENTITY_SERVICE,
            useFactory: entity.buildEntityService,
            deps: [
                entity.EntityFactory,
                WORDPRESS_API_SERVICE,
                WORDPRESS_ENTITY_ATTRIBUTE_BUILDER,
            ]
        },
        {
            provide: entity.FEATURE_CONFIG,
            useValue: featureConfig,
            multi: true,
        },
        {
            provide: WORDPRESS_FEATURE_NAME,
            useValue: featureName,
        },
        {
            provide: WORDPRESS_FEATURE_REDUCER,
            deps: [
                WORDPRESS_FEATURE_CONFIG,
                entity.EntitySelectorService,
                entity.EntitySelectorNameService,
                WORDPRESS_CUSTOM_SELECTORS,
            ],
            useFactory: entity.buildFeatureReducer,
        },
        {
            provide: WORDPRESS_FEATURE_CONFIG,
            deps: [
                WORDPRESS_FEATURE_CONFIG_ATTRIBUTES,
            ],
            useFactory: entity.buildFeatureConfig,
        },
        {
            provide: WORDPRESS_FEATURE_CONFIG_ATTRIBUTES,
            useValue: featureConfig,
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
    var ApiModule = /** @class */ (function () {
        function ApiModule() {
        }
        ApiModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature(featureName, WORDPRESS_FEATURE_REDUCER, {
                                initialState: buildFeatureInitialState
                            }),
                            effects.EffectsModule.forFeature([EntityEffects]),
                        ],
                        providers: __spread(services$1, tokenProviders)
                    },] }
        ];
        return ApiModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.WordpressApiModule = ApiModule;
    exports.WordpressEntity = WordpressEntity;
    exports.AttachmentEntity = AttachmentEntity;
    exports.ResourceConfigurationEntity = ResourceConfigurationEntity;
    exports.StateEntity = StateEntity;
    exports.apiConfig = apiConfig;
    exports.entityConfigs = entityConfigs;
    exports.featureName = featureName;
    exports.featureConfig = featureConfig;
    exports.services = services$1;
    exports.EntityAttributeBuilder = EntityAttributeBuilder;
    exports.EntityEffects = EntityEffects;
    exports.ApiRequestOptionsBuilder = RequestOptionsBuilder;
    exports.WORDPRESS_FEATURE_REDUCER = WORDPRESS_FEATURE_REDUCER;
    exports.buildFeatureInitialState = buildFeatureInitialState;
    exports.buildSelectors = buildSelectors;
    exports.tokenProviders = tokenProviders;
    exports.ɵt = WordpressEntityConfig;
    exports.ɵn = buildEntityConfig;
    exports.ɵo = buildEntityConfigs;
    exports.ɵw = AttachmentEntityConfig;
    exports.ɵx = entityConfigType;
    exports.ɵq = entityConfigTypes;
    exports.ɵp = entityConfigTypes$1;
    exports.ɵr = MenuEntityConfig;
    exports.ɵs = entityConfigType$1;
    exports.ɵu = PageEntityConfig;
    exports.ɵv = entityConfigType$2;
    exports.ɵy = entityConfigType$3;
    exports.ɵz = selectors;
    exports.ɵbc = isValid;
    exports.ɵbb = selector;
    exports.ɵba = forTaxonomy;
    exports.ɵm = featureUrl;
    exports.ɵa = services;
    exports.ɵl = buildApiService;
    exports.ɵb = WORDPRESS_API_CONFIG;
    exports.ɵc = WORDPRESS_API_REQUEST_OPTIONS_BUILDER;
    exports.ɵd = WORDPRESS_API_RESPONSE_PARSER;
    exports.ɵe = WORDPRESS_API_SERVICE;
    exports.ɵj = WORDPRESS_CUSTOM_SELECTORS;
    exports.ɵk = WORDPRESS_ENTITY_ATTRIBUTE_BUILDER;
    exports.ɵf = WORDPRESS_ENTITY_SERVICE;
    exports.ɵg = WORDPRESS_FEATURE_CONFIG;
    exports.ɵh = WORDPRESS_FEATURE_CONFIG_ATTRIBUTES;
    exports.ɵi = WORDPRESS_FEATURE_NAME;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ceo-wordpress.umd.js.map