/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { WordpressApiModule, WordpressEntity, AttachmentEntity, ResourceConfigurationEntity, StateEntity, apiConfig, entityConfigs, featureName, featureConfig, services, EntityAttributeBuilder, EntityEffects, ApiRequestOptionsBuilder, WORDPRESS_FEATURE_REDUCER, buildFeatureInitialState, buildSelectors, tokenProviders } from './public_api';
export { WordpressEntityConfig as ɵt } from './lib/api/config/entity-configs/base-entity-config';
export { buildEntityConfig as ɵn, buildEntityConfigs as ɵo } from './lib/api/config/entity-configs/build-entity-configs';
export { AttachmentEntityConfig as ɵw, entityConfigType as ɵx } from './lib/api/config/entity-configs/types/attachment-entity-config';
export { entityConfigTypes as ɵq } from './lib/api/config/entity-configs/types/base';
export { entityConfigTypes as ɵp } from './lib/api/config/entity-configs/types/index';
export { MenuEntityConfig as ɵr, entityConfigType as ɵs } from './lib/api/config/entity-configs/types/menu-entity-config';
export { PageEntityConfig as ɵu, entityConfigType as ɵv } from './lib/api/config/entity-configs/types/page-entity-config';
export { entityConfigType as ɵy } from './lib/api/config/entity-configs/types/resource-configuration-entity-config';
export { selectors as ɵz } from './lib/api/config/selectors';
export { isValid as ɵbc } from './lib/api/config/selectors/for-taxonomy/is-valid';
export { selector as ɵbb } from './lib/api/config/selectors/for-taxonomy/selector';
export { forTaxonomy as ɵba } from './lib/api/config/selectors/index';
export { featureUrl as ɵm } from './lib/api/config/url';
export { services as ɵa } from './lib/api/services/api/index';
export { buildApiService as ɵl } from './lib/api/store/builders/build-api-service';
export { WORDPRESS_API_CONFIG as ɵb, WORDPRESS_API_REQUEST_OPTIONS_BUILDER as ɵc, WORDPRESS_API_RESPONSE_PARSER as ɵd, WORDPRESS_API_SERVICE as ɵe, WORDPRESS_CUSTOM_SELECTORS as ɵj, WORDPRESS_ENTITY_ATTRIBUTE_BUILDER as ɵk, WORDPRESS_ENTITY_SERVICE as ɵf, WORDPRESS_FEATURE_CONFIG as ɵg, WORDPRESS_FEATURE_CONFIG_ATTRIBUTES as ɵh, WORDPRESS_FEATURE_NAME as ɵi } from './lib/api/store/tokens';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VvLXdvcmRwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsiY2VvLXdvcmRwcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsc1VBQWMsY0FBYyxDQUFDO0FBRTdCLE9BQU8sRUFBQyxxQkFBcUIsSUFBSSxFQUFFLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUMvRixPQUFPLEVBQUMsaUJBQWlCLElBQUksRUFBRSxFQUFDLGtCQUFrQixJQUFJLEVBQUUsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3RILE9BQU8sRUFBQyxzQkFBc0IsSUFBSSxFQUFFLEVBQUMsZ0JBQWdCLElBQUksRUFBRSxFQUFDLE1BQU0sZ0VBQWdFLENBQUM7QUFDbkksT0FBTyxFQUFDLGlCQUFpQixJQUFJLEVBQUUsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxpQkFBaUIsSUFBSSxFQUFFLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsZ0JBQWdCLElBQUksRUFBRSxFQUFDLGdCQUFnQixJQUFJLEVBQUUsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZILE9BQU8sRUFBQyxnQkFBZ0IsSUFBSSxFQUFFLEVBQUMsZ0JBQWdCLElBQUksRUFBRSxFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDdkgsT0FBTyxFQUFDLGdCQUFnQixJQUFJLEVBQUUsRUFBQyxNQUFNLDRFQUE0RSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxTQUFTLElBQUksRUFBRSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFDLE9BQU8sSUFBSSxHQUFHLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUNoRixPQUFPLEVBQUMsUUFBUSxJQUFJLEdBQUcsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxXQUFXLElBQUksR0FBRyxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFDLG9CQUFvQixJQUFJLEVBQUUsRUFBQyxxQ0FBcUMsSUFBSSxFQUFFLEVBQUMsNkJBQTZCLElBQUksRUFBRSxFQUFDLHFCQUFxQixJQUFJLEVBQUUsRUFBQywwQkFBMEIsSUFBSSxFQUFFLEVBQUMsa0NBQWtDLElBQUksRUFBRSxFQUFDLHdCQUF3QixJQUFJLEVBQUUsRUFBQyx3QkFBd0IsSUFBSSxFQUFFLEVBQUMsbUNBQW1DLElBQUksRUFBRSxFQUFDLHNCQUFzQixJQUFJLEVBQUUsRUFBQyxNQUFNLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY19hcGknO1xuXG5leHBvcnQge1dvcmRwcmVzc0VudGl0eUNvbmZpZyBhcyDJtXR9IGZyb20gJy4vbGliL2FwaS9jb25maWcvZW50aXR5LWNvbmZpZ3MvYmFzZS1lbnRpdHktY29uZmlnJztcbmV4cG9ydCB7YnVpbGRFbnRpdHlDb25maWcgYXMgybVuLGJ1aWxkRW50aXR5Q29uZmlncyBhcyDJtW99IGZyb20gJy4vbGliL2FwaS9jb25maWcvZW50aXR5LWNvbmZpZ3MvYnVpbGQtZW50aXR5LWNvbmZpZ3MnO1xuZXhwb3J0IHtBdHRhY2htZW50RW50aXR5Q29uZmlnIGFzIMm1dyxlbnRpdHlDb25maWdUeXBlIGFzIMm1eH0gZnJvbSAnLi9saWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9hdHRhY2htZW50LWVudGl0eS1jb25maWcnO1xuZXhwb3J0IHtlbnRpdHlDb25maWdUeXBlcyBhcyDJtXF9IGZyb20gJy4vbGliL2FwaS9jb25maWcvZW50aXR5LWNvbmZpZ3MvdHlwZXMvYmFzZSc7XG5leHBvcnQge2VudGl0eUNvbmZpZ1R5cGVzIGFzIMm1cH0gZnJvbSAnLi9saWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9pbmRleCc7XG5leHBvcnQge01lbnVFbnRpdHlDb25maWcgYXMgybVyLGVudGl0eUNvbmZpZ1R5cGUgYXMgybVzfSBmcm9tICcuL2xpYi9hcGkvY29uZmlnL2VudGl0eS1jb25maWdzL3R5cGVzL21lbnUtZW50aXR5LWNvbmZpZyc7XG5leHBvcnQge1BhZ2VFbnRpdHlDb25maWcgYXMgybV1LGVudGl0eUNvbmZpZ1R5cGUgYXMgybV2fSBmcm9tICcuL2xpYi9hcGkvY29uZmlnL2VudGl0eS1jb25maWdzL3R5cGVzL3BhZ2UtZW50aXR5LWNvbmZpZyc7XG5leHBvcnQge2VudGl0eUNvbmZpZ1R5cGUgYXMgybV5fSBmcm9tICcuL2xpYi9hcGkvY29uZmlnL2VudGl0eS1jb25maWdzL3R5cGVzL3Jlc291cmNlLWNvbmZpZ3VyYXRpb24tZW50aXR5LWNvbmZpZyc7XG5leHBvcnQge3NlbGVjdG9ycyBhcyDJtXp9IGZyb20gJy4vbGliL2FwaS9jb25maWcvc2VsZWN0b3JzJztcbmV4cG9ydCB7aXNWYWxpZCBhcyDJtWJjfSBmcm9tICcuL2xpYi9hcGkvY29uZmlnL3NlbGVjdG9ycy9mb3ItdGF4b25vbXkvaXMtdmFsaWQnO1xuZXhwb3J0IHtzZWxlY3RvciBhcyDJtWJifSBmcm9tICcuL2xpYi9hcGkvY29uZmlnL3NlbGVjdG9ycy9mb3ItdGF4b25vbXkvc2VsZWN0b3InO1xuZXhwb3J0IHtmb3JUYXhvbm9teSBhcyDJtWJhfSBmcm9tICcuL2xpYi9hcGkvY29uZmlnL3NlbGVjdG9ycy9pbmRleCc7XG5leHBvcnQge2ZlYXR1cmVVcmwgYXMgybVtfSBmcm9tICcuL2xpYi9hcGkvY29uZmlnL3VybCc7XG5leHBvcnQge3NlcnZpY2VzIGFzIMm1YX0gZnJvbSAnLi9saWIvYXBpL3NlcnZpY2VzL2FwaS9pbmRleCc7XG5leHBvcnQge2J1aWxkQXBpU2VydmljZSBhcyDJtWx9IGZyb20gJy4vbGliL2FwaS9zdG9yZS9idWlsZGVycy9idWlsZC1hcGktc2VydmljZSc7XG5leHBvcnQge1dPUkRQUkVTU19BUElfQ09ORklHIGFzIMm1YixXT1JEUFJFU1NfQVBJX1JFUVVFU1RfT1BUSU9OU19CVUlMREVSIGFzIMm1YyxXT1JEUFJFU1NfQVBJX1JFU1BPTlNFX1BBUlNFUiBhcyDJtWQsV09SRFBSRVNTX0FQSV9TRVJWSUNFIGFzIMm1ZSxXT1JEUFJFU1NfQ1VTVE9NX1NFTEVDVE9SUyBhcyDJtWosV09SRFBSRVNTX0VOVElUWV9BVFRSSUJVVEVfQlVJTERFUiBhcyDJtWssV09SRFBSRVNTX0VOVElUWV9TRVJWSUNFIGFzIMm1ZixXT1JEUFJFU1NfRkVBVFVSRV9DT05GSUcgYXMgybVnLFdPUkRQUkVTU19GRUFUVVJFX0NPTkZJR19BVFRSSUJVVEVTIGFzIMm1aCxXT1JEUFJFU1NfRkVBVFVSRV9OQU1FIGFzIMm1aX0gZnJvbSAnLi9saWIvYXBpL3N0b3JlL3Rva2Vucyc7Il19