import { filter } from 'rxjs/operators';
import { pascalCase, camelCase, startsWith, pluralize } from '@ceo/core';
import { join, get, omit, defaults, map, sortBy, concat, merge, reduce, has, isEmpty, pickBy, find } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { mimeTypes, ApiConfig, ApiRequestOptionsBuilder, ApiService, ApiRequestUrlBuilder, ApiResponseParser, CsvToJsonService } from '@ceo/shared';
import { JsonApiEntity, EntityConfig, FeatureConfig, EntityEffects, buildFeatureInitialState, EntityFactory, EntitySelectorService, EntitySelectorNameService, ResourceIdentifierService, FEATURE_CONFIG, buildEntityEffects, buildEntityService, buildFeatureConfig, buildFeatureReducer } from '@ceo/entity';
import { Injectable, InjectionToken, NgModule, defineInjectable } from '@angular/core';
import { createSelector, Store, StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WordpressEntity extends JsonApiEntity {
    /**
     * @param {?=} init
     * @param {?=} dataService
     */
    constructor(init, dataService) {
        super(init, dataService);
        this.createRenderedAttributeGetters();
    }
    /**
     * @return {?}
     */
    get featuredMediaUrl() {
        if (!this._featuredMediaUrl) {
            this._featuredMediaUrl = this.getFeaturedMediaUrl();
        }
        return this._featuredMediaUrl;
    }
    /**
     * @param {?} attachmentName
     * @return {?}
     */
    attachment$(attachmentName) {
        /** @type {?} */
        let propName = camelCase(attachmentName);
        /** @type {?} */
        let attachmentData = this[propName];
        /** @type {?} */
        let ri = (/** @type {?} */ ({
            feature: this.feature,
            type: 'attachments',
            id: attachmentData.id || attachmentData.ID
        }));
        return this.dataService.get$(ri).pipe(filter(attachment => !isEmpty(attachment)));
    }
    /**
     * @private
     * @param {?=} defaultUrl
     * @return {?}
     */
    getFeaturedMediaUrl(defaultUrl = '') {
        if (!has(this, 'attributes._embedded.wp:featuredmedia')) {
            return defaultUrl;
        }
        /** @type {?} */
        let featuredMediaCollection = this.attributes._embedded['wp:featuredmedia'];
        if (featuredMediaCollection) {
            return featuredMediaCollection[0].source_url;
        }
        return defaultUrl;
    }
    /**
     * @private
     * @return {?}
     */
    createRenderedAttributeGetters() {
        /** @type {?} */
        let createRenderedAttributeGetter = (value, attrName) => {
            /** @type {?} */
            let propName = `rendered${pascalCase(attrName)}`;
            /** @type {?} */
            let privatePropName = `_${propName}`;
            /** @type {?} */
            let getter = () => {
                return this[attrName]['rendered'];
            };
            /** @type {?} */
            let props = {
                get: () => {
                    return this.memoized(privatePropName, getter);
                },
                set: (value) => { }
            };
            Object.defineProperty(this, propName, props);
        };
        /** @type {?} */
        let attributes = this.getAttributesWithRenderedFormat();
        map(attributes, createRenderedAttributeGetter);
    }
    /**
     * @private
     * @return {?}
     */
    getAttributesWithRenderedFormat() {
        /** @type {?} */
        let hasRenderedFormat = (attribute) => {
            return has(attribute, 'rendered');
        };
        return pickBy(this.attributes, hasRenderedFormat);
    }
}
WordpressEntity._sliceName = 'wp-entities';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttachmentEntity extends WordpressEntity {
    /**
     * @return {?}
     */
    get htmlTagAttributes() {
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
    }
    /**
     * @return {?}
     */
    get htmlMediaType() {
        /** @type {?} */
        let mimeType = (/** @type {?} */ (find(mimeTypes, { mimeType: this.mimeType })));
        return mimeType ? mimeType.mediaType : AttachmentEntity.defaultMediaType;
    }
    /**
     * @private
     * @return {?}
     */
    imageTagAttributes() {
        return {
            width: this.mediaDetails.width,
            height: this.mediaDetails.height,
            alt: this.altText,
            src: this.sourceUrl,
        };
    }
    /**
     * @private
     * @return {?}
     */
    videoTagAttributes() {
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
    }
}
AttachmentEntity.defaultMediaType = 'image';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceConfigurationEntity extends WordpressEntity {
}
ResourceConfigurationEntity.defaultAttributes = {
    isRoutable: true,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StateEntity extends WordpressEntity {
}
StateEntity.defaultAttributes = {
    isRoutable: false,
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
const featureUrl = "http://sunray-wordpress.customexposure.tech/wp-json";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WordpressEntityConfig extends EntityConfig {
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        if (entityData.type) {
            return this.type == entityData.type;
        }
        /** @type {?} */
        let baseUrl = join([featureUrl, this.url], '/');
        /** @type {?} */
        let attributesUrl = this.urlFromAttributes(entityData);
        return startsWith(attributesUrl, baseUrl);
    }
    /**
     * @param {?=} entityData
     * @return {?}
     */
    urlFromAttributes(entityData = {}) {
        return get(entityData, ['attributes', '_links', 'self', '0', 'href'], ' ');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttachmentEntityConfig extends WordpressEntityConfig {
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        if (entityData.type) {
            return entityData.type == 'attachment';
        }
        /** @type {?} */
        let attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/media");
    }
}
/** @type {?} */
const entityConfigType = {
    type: "attachments",
    url: 'wp/v2/media',
    entityConfig: AttachmentEntityConfig,
    entityType: AttachmentEntity,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuEntityConfig extends WordpressEntityConfig {
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        if (entityData.type) {
            return this.type == entityData.type;
        }
        /** @type {?} */
        let attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/menus");
    }
    /**
     * @param {?=} entityData
     * @return {?}
     */
    urlFromAttributes(entityData = {}) {
        return get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
    }
}
/** @type {?} */
const entityConfigType$1 = {
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
class PageEntityConfig extends WordpressEntityConfig {
    /**
     * @param {?} entityData
     * @return {?}
     */
    ofType(entityData) {
        if (entityData.type) {
            return entityData.type == 'page';
        }
        /** @type {?} */
        let attributesUrl = this.urlFromAttributes(entityData);
        return attributesUrl.includes("v2/pages");
    }
    /**
     * @param {?=} entityData
     * @return {?}
     */
    urlFromAttributes(entityData = {}) {
        return get(entityData, ['attributes', 'meta', 'links', 'self'], ' ');
    }
}
/** @type {?} */
const entityConfigType$2 = {
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
let baseEntityConfigTypes = [
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
let allEntityConfigTypes = concat(baseEntityConfigTypes, entityConfigType$1, entityConfigType$2, entityConfigType);
/** @type {?} */
const entityConfigTypes = sortBy(allEntityConfigTypes, 'type');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let buildResourceConfiguration = (entityMap, entityConfigType) => {
    /** @type {?} */
    let name = entityConfigType.type;
    /** @type {?} */
    let attributes = {
        displayName: pascalCase(name),
        displaySlug: name,
        resourceType: name,
        primaryKeys: ['id'],
    };
    if (entityConfigType.entityType) {
        merge(attributes, entityConfigType.entityType.defaultAttributes);
    }
    /** @type {?} */
    let data = {
        id: name,
        type: 'resource-configurations',
        attributes: attributes,
    };
    /** @type {?} */
    let entity = new ResourceConfigurationEntity(data);
    entityMap[name] = entity;
    return entityMap;
};
/** @type {?} */
let entities = reduce(entityConfigTypes, buildResourceConfiguration, {});
/** @type {?} */
const entityConfigType$3 = {
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
const entityConfigTypes$1 = concat(entityConfigTypes, entityConfigType$3);

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
    let configType = get(params, 'entityConfig', WordpressEntityConfig);
    /** @type {?} */
    let configParams = omit(params, ['entityConfig', 'configuration']);
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
const entityConfigs = buildEntityConfigs(entityConfigTypes$1);

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
    let si = {
        feature: 'cms',
        entityType: ri.type,
        selectorType: 'all'
    };
    /** @type {?} */
    let baseSelector = selectorService
        .selectorFromSelectorIdentifier(si);
    /** @type {?} */
    var taxonomyType = pluralize(ri.filter.taxonomy);
    /** @type {?} */
    var taxonomyValue = ri.filter.term
    // Filter function
    ;
    // Filter function
    /** @type {?} */
    let filterByTaxonomy = (state, taxonomyState) => {
        if (state && state.where) {
            /** @type {?} */
            let taxonomy = taxonomyState.findByAttr('slug', taxonomyValue);
            if (taxonomy) {
                /** @type {?} */
                let filter$$1 = {};
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
    let taxonomySelectorIdentifier = {
        feature: 'cms',
        entityType: taxonomyType,
        selectorType: 'all'
    };
    /** @type {?} */
    let taxonomySelector = selectorService
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
    let filter$$1 = ri.filter;
    /** @type {?} */
    let filterHasTaxonomy = (filter$$1) => {
        return has(filter$$1, 'taxonomy') && has(filter$$1, 'term');
    };
    return filter$$1 && filterHasTaxonomy(filter$$1);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const forTaxonomy = {
    selector: selector,
    isValid: isValid
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const selectors = [
    forTaxonomy,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const featureName = "cms";
/** @type {?} */
const featureConfig = {
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
let config = new FeatureConfig(featureConfig);
/** @type {?} */
let params = {
    url: featureUrl,
    defaultBodyParams: {},
    defaultQueryParams: {
        "_embed": true,
        "per_page": 100,
    },
    resourceTypes: config.entityTypes,
};
/** @type {?} */
const apiConfig = new ApiConfig(params);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityAttributeBuilder {
    constructor() {
        this.omittedAttributes = ["id", "type"];
    }
    /**
     * @param {?} params
     * @return {?}
     */
    build(params) {
        return {
            feature: params.feature,
            type: params.type,
            id: params.id,
            attributes: this.buildAttributes(params)
        };
    }
    /**
     * @param {?} params
     * @return {?}
     */
    buildAttributes(params) {
        return omit(params, this.omittedAttributes);
    }
}
EntityAttributeBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ EntityAttributeBuilder.ngInjectableDef = defineInjectable({ factory: function EntityAttributeBuilder_Factory() { return new EntityAttributeBuilder(); }, token: EntityAttributeBuilder, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityEffects$1 extends EntityEffects {
}
EntityEffects$1.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RequestOptionsBuilder extends ApiRequestOptionsBuilder {
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
}
RequestOptionsBuilder.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    RequestOptionsBuilder,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$1 = [
    EntityAttributeBuilder,
    EntityEffects$1,
    ...services,
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
const WORDPRESS_API_ENDPOINT_PROVIDER = new InjectionToken("Wordpress API EndpointP Provider");
/** @type {?} */
const WORDPRESS_API_CONFIG = new InjectionToken("Wordpress API Attribute Builder");
/** @type {?} */
const WORDPRESS_API_REQUEST_OPTIONS_BUILDER = new InjectionToken('API Request Options Builder');
/** @type {?} */
const WORDPRESS_API_RESPONSE_PARSER = new InjectionToken("Wordpress API Response Parser");
/** @type {?} */
const WORDPRESS_API_SERVICE = new InjectionToken("Wordpress API Service");
/** @type {?} */
const WORDPRESS_FEATURE_REDUCER = new InjectionToken('Feature Reducer');
/** @type {?} */
const WORDPRESS_ENTITY_SERVICE = new InjectionToken("Wordpress Entity Service");
/** @type {?} */
const WORDPRESS_ENTITY_TYPE_PROVIDER = new InjectionToken("Wordpress Entity Type Provider");
/** @type {?} */
const WORDPRESS_ENTITY_ADAPTER_FACTORY = new InjectionToken("Wordpress Entity Adapter Factory");
/** @type {?} */
const WORDPRESS_FEATURE_CONFIG = new InjectionToken("Wordpress Feature Config");
/** @type {?} */
const WORDPRESS_FEATURE_CONFIG_ATTRIBUTES = new InjectionToken("Wordpress Feature Config Attributes");
/** @type {?} */
const WORDPRESS_FEATURE_NAME = new InjectionToken("Wordpress Feature Name");
/** @type {?} */
const WORDPRESS_BASE_ENTITY = new InjectionToken("Wordpress Base Entity");
/** @type {?} */
const WORDPRESS_ENTITY_EFFECTS = new InjectionToken("Wordpress Entity Effects");
/** @type {?} */
const WORDPRESS_CUSTOM_SELECTORS = new InjectionToken("Wordpress Custom Selectors");
/** @type {?} */
const WORDPRESS_ENTITY_ATTRIBUTE_BUILDER = new InjectionToken("Wordpress Entity Attribute Builder");

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
    let urlBuilder = new ApiRequestUrlBuilder(apiConfig);
    /** @type {?} */
    let optionsBuilder = new RequestOptionsBuilder(apiConfig);
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
const tokenProviders = [
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
class ApiModule {
}
ApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(featureName, WORDPRESS_FEATURE_REDUCER, {
                        initialState: buildFeatureInitialState$1
                    }),
                    EffectsModule.forFeature([EntityEffects$1]),
                ],
                providers: [
                    ...services$1,
                    ...tokenProviders,
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

export { ApiModule as WordpressApiModule, WordpressEntity, AttachmentEntity, ResourceConfigurationEntity, StateEntity, apiConfig, entityConfigs, featureName, featureConfig, services$1 as services, EntityAttributeBuilder, EntityEffects$1 as EntityEffects, RequestOptionsBuilder as ApiRequestOptionsBuilder, WORDPRESS_FEATURE_REDUCER, buildFeatureInitialState$1 as buildFeatureInitialState, buildSelectors, tokenProviders, WordpressEntityConfig as ɵt, buildEntityConfig as ɵn, buildEntityConfigs as ɵo, AttachmentEntityConfig as ɵw, entityConfigType as ɵx, entityConfigTypes as ɵq, entityConfigTypes$1 as ɵp, MenuEntityConfig as ɵr, entityConfigType$1 as ɵs, PageEntityConfig as ɵu, entityConfigType$2 as ɵv, entityConfigType$3 as ɵy, selectors as ɵz, isValid as ɵbc, selector as ɵbb, forTaxonomy as ɵba, featureUrl as ɵm, services as ɵa, buildApiService as ɵl, WORDPRESS_API_CONFIG as ɵb, WORDPRESS_API_REQUEST_OPTIONS_BUILDER as ɵc, WORDPRESS_API_RESPONSE_PARSER as ɵd, WORDPRESS_API_SERVICE as ɵe, WORDPRESS_CUSTOM_SELECTORS as ɵj, WORDPRESS_ENTITY_ATTRIBUTE_BUILDER as ɵk, WORDPRESS_ENTITY_SERVICE as ɵf, WORDPRESS_FEATURE_CONFIG as ɵg, WORDPRESS_FEATURE_CONFIG_ATTRIBUTES as ɵh, WORDPRESS_FEATURE_NAME as ɵi };

//# sourceMappingURL=ceo-wordpress.js.map