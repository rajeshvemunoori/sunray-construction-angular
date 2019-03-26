import { filter } from 'rxjs/operators';
import { pascalCase, camelCase, startsWith, pluralize } from '@ceo/core';
import { join, get, omit, defaults, map, sortBy, concat, merge, reduce, has, isEmpty, pickBy, find } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { mimeTypes, ApiConfig, ApiRequestOptionsBuilder, ApiService, ApiRequestUrlBuilder, ApiResponseParser, CsvToJsonService } from '@ceo/shared';
import { JsonApiEntity, EntityConfig, FeatureConfig, EntityEffects, buildFeatureInitialState, EntityFactory, EntitySelectorService, EntitySelectorNameService, ResourceIdentifierService, FEATURE_CONFIG, buildEntityEffects, buildEntityService, buildFeatureConfig, buildFeatureReducer } from '@ceo/entity';
import { __extends, __spread } from 'tslib';
import { Injectable, InjectionToken, NgModule, defineInjectable } from '@angular/core';
import { createSelector, Store, StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';

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
         */
        function () {
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
        var propName = camelCase(attachmentName);
        /** @type {?} */
        var attachmentData = this[propName];
        /** @type {?} */
        var ri = (/** @type {?} */ ({
            feature: this.feature,
            type: 'attachments',
            id: attachmentData.id || attachmentData.ID
        }));
        return this.dataService.get$(ri).pipe(filter(function (attachment) { return !isEmpty(attachment); }));
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
        if (defaultUrl === void 0) { defaultUrl = ''; }
        if (!has(this, 'attributes._embedded.wp:featuredmedia')) {
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
            var propName = "rendered" + pascalCase(attrName);
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
        map(attributes, createRenderedAttributeGetter);
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
            return has(attribute, 'rendered');
        };
        return pickBy(this.attributes, hasRenderedFormat);
    };
    WordpressEntity._sliceName = 'wp-entities';
    return WordpressEntity;
}(JsonApiEntity));

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
         */
        function () {
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
         */
        function () {
            /** @type {?} */
            var mimeType = (/** @type {?} */ (find(mimeTypes, { mimeType: this.mimeType })));
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
        var baseUrl = join([featureUrl, this.url], '/');
        /** @type {?} */
        var attributesUrl = this.urlFromAttributes(entityData);
        return startsWith(attributesUrl, baseUrl);
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
        if (entityData === void 0) { entityData = {}; }
        return get(entityData, ['attributes', '_links', 'self', '0', 'href'], ' ');
    };
    return WordpressEntityConfig;
}(EntityConfig));

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
        if (entityData === void 0) { entityData = {}; }
        return get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
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
        if (entityData === void 0) { entityData = {}; }
        return get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
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
var allEntityConfigTypes = concat(baseEntityConfigTypes, entityConfigType$1, entityConfigType$2, entityConfigType);
/** @type {?} */
var entityConfigTypes = sortBy(allEntityConfigTypes, 'type');

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
        displayName: pascalCase(name),
        displaySlug: name,
        resourceType: name,
        primaryKeys: ['id'],
    };
    if (entityConfigType.entityType) {
        merge(attributes, entityConfigType.entityType.defaultAttributes);
    }
    /** @type {?} */
    var data = {
        id: name,
        type: 'resource-configurations',
        attributes: attributes,
    };
    /** @type {?} */
    var entity = new ResourceConfigurationEntity(data);
    entityMap[name] = entity;
    return entityMap;
};
/** @type {?} */
var entities = reduce(entityConfigTypes, buildResourceConfiguration, {});
/** @type {?} */
var entityConfigType$3 = {
    type: "resource-configurations",
    url: 'wp/v2/resource-configurations',
    entityType: ResourceConfigurationEntity,
    initialState: {
        ids: map(entities, 'id'),
        entities: entities
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var entityConfigTypes$1 = concat(entityConfigTypes, entityConfigType$3);

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
    var configType = get(params, 'entityConfig', WordpressEntityConfig);
    /** @type {?} */
    var configParams = omit(params, ['entityConfig', 'configuration']);
    configParams = defaults(configParams, { entityType: WordpressEntity });
    return new configType(configParams);
}
/**
 * @param {?} entityConfigParams
 * @return {?}
 */
function buildEntityConfigs(entityConfigParams) {
    return map(sortBy(entityConfigParams, 'type'), buildEntityConfig);
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
    var taxonomyType = pluralize(ri.filter.taxonomy);
    /** @type {?} */
    var taxonomyValue = ri.filter.term
    // Filter function
    ;
    // Filter function
    /** @type {?} */
    var filterByTaxonomy = function (state, taxonomyState) {
        if (state && state.where) {
            /** @type {?} */
            var taxonomy = taxonomyState.findByAttr('slug', taxonomyValue);
            if (taxonomy) {
                /** @type {?} */
                var filter$$1 = {};
                filter$$1[taxonomyType] = taxonomy.id;
                return state.where(filter$$1);
            }
            else {
                return state.none();
            }
        }
        else {
            return state;
        }
    }
    // Get the selector for the taxonomy
    ;
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
    return createSelector(baseSelector, taxonomySelector, filterByTaxonomy);
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
    var filter$$1 = ri.filter;
    /** @type {?} */
    var filterHasTaxonomy = function (filter$$1) {
        return has(filter$$1, 'taxonomy') && has(filter$$1, 'term');
    };
    return filter$$1 && filterHasTaxonomy(filter$$1);
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
var config = new FeatureConfig(featureConfig);
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
var apiConfig = new ApiConfig(params);

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
        return omit(params, this.omittedAttributes);
    };
    EntityAttributeBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ EntityAttributeBuilder.ngInjectableDef = defineInjectable({ factory: function EntityAttributeBuilder_Factory() { return new EntityAttributeBuilder(); }, token: EntityAttributeBuilder, providedIn: "root" });
    return EntityAttributeBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityEffects$1 = /** @class */ (function (_super) {
    __extends(EntityEffects$$1, _super);
    function EntityEffects$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntityEffects$$1.decorators = [
        { type: Injectable }
    ];
    return EntityEffects$$1;
}(EntityEffects));

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
        var filter$$1 = this.getFilter(ri);
        if (filter$$1) {
            return {
                filter: this.sanitizedParams(filter$$1)
            };
        }
        else {
            return {};
        }
    };
    RequestOptionsBuilder.decorators = [
        { type: Injectable }
    ];
    return RequestOptionsBuilder;
}(ApiRequestOptionsBuilder));

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
    EntityEffects$1
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
var WORDPRESS_API_ENDPOINT_PROVIDER = new InjectionToken("Wordpress API EndpointP Provider");
/** @type {?} */
var WORDPRESS_API_CONFIG = new InjectionToken("Wordpress API Attribute Builder");
/** @type {?} */
var WORDPRESS_API_REQUEST_OPTIONS_BUILDER = new InjectionToken('API Request Options Builder');
/** @type {?} */
var WORDPRESS_API_RESPONSE_PARSER = new InjectionToken("Wordpress API Response Parser");
/** @type {?} */
var WORDPRESS_API_SERVICE = new InjectionToken("Wordpress API Service");
/** @type {?} */
var WORDPRESS_FEATURE_REDUCER = new InjectionToken('Feature Reducer');
/** @type {?} */
var WORDPRESS_ENTITY_SERVICE = new InjectionToken("Wordpress Entity Service");
/** @type {?} */
var WORDPRESS_ENTITY_TYPE_PROVIDER = new InjectionToken("Wordpress Entity Type Provider");
/** @type {?} */
var WORDPRESS_ENTITY_ADAPTER_FACTORY = new InjectionToken("Wordpress Entity Adapter Factory");
/** @type {?} */
var WORDPRESS_FEATURE_CONFIG = new InjectionToken("Wordpress Feature Config");
/** @type {?} */
var WORDPRESS_FEATURE_CONFIG_ATTRIBUTES = new InjectionToken("Wordpress Feature Config Attributes");
/** @type {?} */
var WORDPRESS_FEATURE_NAME = new InjectionToken("Wordpress Feature Name");
/** @type {?} */
var WORDPRESS_BASE_ENTITY = new InjectionToken("Wordpress Base Entity");
/** @type {?} */
var WORDPRESS_ENTITY_EFFECTS = new InjectionToken("Wordpress Entity Effects");
/** @type {?} */
var WORDPRESS_CUSTOM_SELECTORS = new InjectionToken("Wordpress Custom Selectors");
/** @type {?} */
var WORDPRESS_ENTITY_ATTRIBUTE_BUILDER = new InjectionToken("Wordpress Entity Attribute Builder");

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
function buildApiService(apiConfig, http, csvToJsonService, responseParser) {
    /** @type {?} */
    var urlBuilder = new ApiRequestUrlBuilder(apiConfig);
    /** @type {?} */
    var optionsBuilder = new RequestOptionsBuilder(apiConfig);
    return new ApiService(http, csvToJsonService, responseParser, urlBuilder, optionsBuilder);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function buildFeatureInitialState$1() {
    return buildFeatureInitialState(featureConfig);
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
        useClass: ApiResponseParser,
    },
    {
        provide: WORDPRESS_API_SERVICE,
        useFactory: buildApiService,
        deps: [
            WORDPRESS_API_CONFIG,
            HttpClient,
            CsvToJsonService,
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
        provide: EntityEffects$1,
        useFactory: buildEntityEffects,
        deps: [
            Store,
            Actions,
            WORDPRESS_ENTITY_SERVICE,
            WORDPRESS_FEATURE_CONFIG,
            ResourceIdentifierService,
        ],
    },
    {
        provide: WORDPRESS_ENTITY_SERVICE,
        useFactory: buildEntityService,
        deps: [
            EntityFactory,
            WORDPRESS_API_SERVICE,
            WORDPRESS_ENTITY_ATTRIBUTE_BUILDER,
        ]
    },
    {
        provide: FEATURE_CONFIG,
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
            EntitySelectorService,
            EntitySelectorNameService,
            WORDPRESS_CUSTOM_SELECTORS,
        ],
        useFactory: buildFeatureReducer,
    },
    {
        provide: WORDPRESS_FEATURE_CONFIG,
        deps: [
            WORDPRESS_FEATURE_CONFIG_ATTRIBUTES,
        ],
        useFactory: buildFeatureConfig,
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
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(featureName, WORDPRESS_FEATURE_REDUCER, {
                            initialState: buildFeatureInitialState$1
                        }),
                        EffectsModule.forFeature([EntityEffects$1]),
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

export { ApiModule as WordpressApiModule, WordpressEntity, AttachmentEntity, ResourceConfigurationEntity, StateEntity, apiConfig, entityConfigs, featureName, featureConfig, services$1 as services, EntityAttributeBuilder, EntityEffects$1 as EntityEffects, RequestOptionsBuilder as ApiRequestOptionsBuilder, WORDPRESS_FEATURE_REDUCER, buildFeatureInitialState$1 as buildFeatureInitialState, buildSelectors, tokenProviders, WordpressEntityConfig as ɵt, buildEntityConfig as ɵn, buildEntityConfigs as ɵo, AttachmentEntityConfig as ɵw, entityConfigType as ɵx, entityConfigTypes as ɵq, entityConfigTypes$1 as ɵp, MenuEntityConfig as ɵr, entityConfigType$1 as ɵs, PageEntityConfig as ɵu, entityConfigType$2 as ɵv, entityConfigType$3 as ɵy, selectors as ɵz, isValid as ɵbc, selector as ɵbb, forTaxonomy as ɵba, featureUrl as ɵm, services as ɵa, buildApiService as ɵl, WORDPRESS_API_CONFIG as ɵb, WORDPRESS_API_REQUEST_OPTIONS_BUILDER as ɵc, WORDPRESS_API_RESPONSE_PARSER as ɵd, WORDPRESS_API_SERVICE as ɵe, WORDPRESS_CUSTOM_SELECTORS as ɵj, WORDPRESS_ENTITY_ATTRIBUTE_BUILDER as ɵk, WORDPRESS_ENTITY_SERVICE as ɵf, WORDPRESS_FEATURE_CONFIG as ɵg, WORDPRESS_FEATURE_CONFIG_ATTRIBUTES as ɵh, WORDPRESS_FEATURE_NAME as ɵi };

//# sourceMappingURL=ceo-wordpress.js.map