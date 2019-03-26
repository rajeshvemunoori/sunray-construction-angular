/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var WORDPRESS_API_ENDPOINT_PROVIDER = new InjectionToken("Wordpress API EndpointP Provider");
/** @type {?} */
export var WORDPRESS_API_CONFIG = new InjectionToken("Wordpress API Attribute Builder");
/** @type {?} */
export var WORDPRESS_API_REQUEST_OPTIONS_BUILDER = new InjectionToken('API Request Options Builder');
/** @type {?} */
export var WORDPRESS_API_RESPONSE_PARSER = new InjectionToken("Wordpress API Response Parser");
/** @type {?} */
export var WORDPRESS_API_SERVICE = new InjectionToken("Wordpress API Service");
/** @type {?} */
export var WORDPRESS_FEATURE_REDUCER = new InjectionToken('Feature Reducer');
/** @type {?} */
export var WORDPRESS_ENTITY_SERVICE = new InjectionToken("Wordpress Entity Service");
/** @type {?} */
export var WORDPRESS_ENTITY_TYPE_PROVIDER = new InjectionToken("Wordpress Entity Type Provider");
/** @type {?} */
export var WORDPRESS_ENTITY_ADAPTER_FACTORY = new InjectionToken("Wordpress Entity Adapter Factory");
/** @type {?} */
export var WORDPRESS_FEATURE_CONFIG = new InjectionToken("Wordpress Feature Config");
/** @type {?} */
export var WORDPRESS_FEATURE_CONFIG_ATTRIBUTES = new InjectionToken("Wordpress Feature Config Attributes");
/** @type {?} */
export var WORDPRESS_FEATURE_NAME = new InjectionToken("Wordpress Feature Name");
/** @type {?} */
export var WORDPRESS_BASE_ENTITY = new InjectionToken("Wordpress Base Entity");
/** @type {?} */
export var WORDPRESS_ENTITY_EFFECTS = new InjectionToken("Wordpress Entity Effects");
/** @type {?} */
export var WORDPRESS_CUSTOM_SELECTORS = new InjectionToken("Wordpress Custom Selectors");
/** @type {?} */
export var WORDPRESS_ENTITY_ATTRIBUTE_BUILDER = new InjectionToken("Wordpress Entity Attribute Builder");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL3N0b3JlL3Rva2Vucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFRLGVBQWUsQ0FBQTs7QUFHaEQsTUFBTSxLQUFPLCtCQUErQixHQUMxQyxJQUFJLGNBQWMsQ0FBTSxrQ0FBa0MsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLG9CQUFvQixHQUMvQixJQUFJLGNBQWMsQ0FBTSxpQ0FBaUMsQ0FBQzs7QUFFNUQsTUFBTSxLQUFPLHFDQUFxQyxHQUNoRCxJQUFJLGNBQWMsQ0FBTSw2QkFBNkIsQ0FBQzs7QUFFeEQsTUFBTSxLQUFPLDZCQUE2QixHQUN4QyxJQUFJLGNBQWMsQ0FBTSwrQkFBK0IsQ0FBQzs7QUFFMUQsTUFBTSxLQUFPLHFCQUFxQixHQUNoQyxJQUFJLGNBQWMsQ0FBTSx1QkFBdUIsQ0FBQzs7QUFFbEQsTUFBTSxLQUFPLHlCQUF5QixHQUNwQyxJQUFJLGNBQWMsQ0FBTSxpQkFBaUIsQ0FBQzs7QUFFNUMsTUFBTSxLQUFPLHdCQUF3QixHQUNuQyxJQUFJLGNBQWMsQ0FBTSwwQkFBMEIsQ0FBQzs7QUFFckQsTUFBTSxLQUFPLDhCQUE4QixHQUN6QyxJQUFJLGNBQWMsQ0FBTSxnQ0FBZ0MsQ0FBQzs7QUFFM0QsTUFBTSxLQUFPLGdDQUFnQyxHQUMzQyxJQUFJLGNBQWMsQ0FBTSxrQ0FBa0MsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLHdCQUF3QixHQUNuQyxJQUFJLGNBQWMsQ0FBTSwwQkFBMEIsQ0FBQzs7QUFFckQsTUFBTSxLQUFPLG1DQUFtQyxHQUM5QyxJQUFJLGNBQWMsQ0FBTSxxQ0FBcUMsQ0FBQzs7QUFFaEUsTUFBTSxLQUFPLHNCQUFzQixHQUNqQyxJQUFJLGNBQWMsQ0FBTSx3QkFBd0IsQ0FBQzs7QUFFbkQsTUFBTSxLQUFPLHFCQUFxQixHQUNoQyxJQUFJLGNBQWMsQ0FBTSx1QkFBdUIsQ0FBQzs7QUFFbEQsTUFBTSxLQUFPLHdCQUF3QixHQUNuQyxJQUFJLGNBQWMsQ0FBTSwwQkFBMEIsQ0FBQzs7QUFFckQsTUFBTSxLQUFPLDBCQUEwQixHQUNyQyxJQUFJLGNBQWMsQ0FBTSw0QkFBNEIsQ0FBQzs7QUFFdkQsTUFBTSxLQUFPLGtDQUFrQyxHQUM3QyxJQUFJLGNBQWMsQ0FBTSxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gICBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5cbmV4cG9ydCBjb25zdCBXT1JEUFJFU1NfQVBJX0VORFBPSU5UX1BST1ZJREVSID1cbiAgbmV3IEluamVjdGlvblRva2VuPGFueT4oXCJXb3JkcHJlc3MgQVBJIEVuZHBvaW50UCBQcm92aWRlclwiKVxuXG5leHBvcnQgY29uc3QgV09SRFBSRVNTX0FQSV9DT05GSUcgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcIldvcmRwcmVzcyBBUEkgQXR0cmlidXRlIEJ1aWxkZXJcIilcblxuZXhwb3J0IGNvbnN0IFdPUkRQUkVTU19BUElfUkVRVUVTVF9PUFRJT05TX0JVSUxERVIgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignQVBJIFJlcXVlc3QgT3B0aW9ucyBCdWlsZGVyJylcblxuZXhwb3J0IGNvbnN0IFdPUkRQUkVTU19BUElfUkVTUE9OU0VfUEFSU0VSID1cbiAgbmV3IEluamVjdGlvblRva2VuPGFueT4oXCJXb3JkcHJlc3MgQVBJIFJlc3BvbnNlIFBhcnNlclwiKVxuXG5leHBvcnQgY29uc3QgV09SRFBSRVNTX0FQSV9TRVJWSUNFID1cbiAgbmV3IEluamVjdGlvblRva2VuPGFueT4oXCJXb3JkcHJlc3MgQVBJIFNlcnZpY2VcIilcblxuZXhwb3J0IGNvbnN0IFdPUkRQUkVTU19GRUFUVVJFX1JFRFVDRVIgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignRmVhdHVyZSBSZWR1Y2VyJylcblxuZXhwb3J0IGNvbnN0IFdPUkRQUkVTU19FTlRJVFlfU0VSVklDRSA9XG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KFwiV29yZHByZXNzIEVudGl0eSBTZXJ2aWNlXCIpXG5cbmV4cG9ydCBjb25zdCBXT1JEUFJFU1NfRU5USVRZX1RZUEVfUFJPVklERVIgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcIldvcmRwcmVzcyBFbnRpdHkgVHlwZSBQcm92aWRlclwiKVxuXG5leHBvcnQgY29uc3QgV09SRFBSRVNTX0VOVElUWV9BREFQVEVSX0ZBQ1RPUlkgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcIldvcmRwcmVzcyBFbnRpdHkgQWRhcHRlciBGYWN0b3J5XCIpXG5cbmV4cG9ydCBjb25zdCBXT1JEUFJFU1NfRkVBVFVSRV9DT05GSUcgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcIldvcmRwcmVzcyBGZWF0dXJlIENvbmZpZ1wiKVxuXG5leHBvcnQgY29uc3QgV09SRFBSRVNTX0ZFQVRVUkVfQ09ORklHX0FUVFJJQlVURVMgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcIldvcmRwcmVzcyBGZWF0dXJlIENvbmZpZyBBdHRyaWJ1dGVzXCIpXG5cbmV4cG9ydCBjb25zdCBXT1JEUFJFU1NfRkVBVFVSRV9OQU1FID1cbiAgbmV3IEluamVjdGlvblRva2VuPGFueT4oXCJXb3JkcHJlc3MgRmVhdHVyZSBOYW1lXCIpXG5cbmV4cG9ydCBjb25zdCBXT1JEUFJFU1NfQkFTRV9FTlRJVFkgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcIldvcmRwcmVzcyBCYXNlIEVudGl0eVwiKVxuXG5leHBvcnQgY29uc3QgV09SRFBSRVNTX0VOVElUWV9FRkZFQ1RTID1cbiAgbmV3IEluamVjdGlvblRva2VuPGFueT4oXCJXb3JkcHJlc3MgRW50aXR5IEVmZmVjdHNcIilcblxuZXhwb3J0IGNvbnN0IFdPUkRQUkVTU19DVVNUT01fU0VMRUNUT1JTID1cbiAgbmV3IEluamVjdGlvblRva2VuPGFueT4oXCJXb3JkcHJlc3MgQ3VzdG9tIFNlbGVjdG9yc1wiKVxuXG5leHBvcnQgY29uc3QgV09SRFBSRVNTX0VOVElUWV9BVFRSSUJVVEVfQlVJTERFUiA9XG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KFwiV29yZHByZXNzIEVudGl0eSBBdHRyaWJ1dGUgQnVpbGRlclwiKVxuIl19