/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { StateEntity, } from '../../../classes/index';
import { entityConfigType as attachmentEntityConfigType } from './attachment-entity-config';
import { entityConfigType as menuEntityConfigType } from './menu-entity-config';
import { entityConfigType as pageEntityConfigType } from './page-entity-config';
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
var allEntityConfigTypes = _.concat(baseEntityConfigTypes, menuEntityConfigType, pageEntityConfigType, attachmentEntityConfigType);
/** @type {?} */
export var entityConfigTypes = _.sortBy(allEntityConfigTypes, 'type');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9jb25maWcvZW50aXR5LWNvbmZpZ3MvdHlwZXMvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUNMLFdBQVcsR0FDWixNQUFNLHdCQUF3QixDQUFBO0FBRS9CLE9BQU8sRUFBRSxnQkFBZ0IsSUFBSSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFBO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsSUFBSSxvQkFBb0IsRUFBRSxNQUFZLHNCQUFzQixDQUFBO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsSUFBSSxvQkFBb0IsRUFBRSxNQUFZLHNCQUFzQixDQUFBOztJQUVqRixxQkFBcUIsR0FBRztJQUMxQjtRQUNFLElBQUksRUFBRSxvQkFBb0I7S0FDM0I7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ1YsR0FBRyxFQUFFLGtCQUFrQjtLQUN4QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixHQUFHLEVBQUUsc0JBQXNCO0tBQzVCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxjQUFjO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFBRSxZQUFZO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEdBQUcsRUFBRSxzQkFBc0I7S0FDNUI7SUFDRDtRQUNFLElBQUksRUFBRSxjQUFjO1FBQ3BCLEdBQUcsRUFBRSxvQkFBb0I7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxlQUFlO1FBQ3JCLEdBQUcsRUFBRSxxQkFBcUI7S0FDM0I7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxFQUFFLGFBQWE7S0FDbkI7SUFDRDtRQUNFLElBQUksRUFBRSxjQUFjO1FBQ3BCLEdBQUcsRUFBRSxvQkFBb0I7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsR0FBRyxFQUFFLDJCQUEyQjtLQUNqQztJQUNEO1FBQ0UsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixHQUFHLEVBQUUseUJBQXlCO0tBQy9CO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixHQUFHLEVBQUUsZ0JBQWdCO0tBQ3RCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxjQUFjO1FBQ25CLFVBQVUsRUFBRSxXQUFXO0tBQ3hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixHQUFHLEVBQUUsb0JBQW9CO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixHQUFHLEVBQUUsb0JBQW9CO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLEdBQUcsRUFBRSwwQkFBMEI7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLGNBQWM7S0FDcEI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLEdBQUcsRUFBRSxnQkFBZ0I7S0FDdEI7Q0FDRjs7SUFFRyxvQkFBb0IsR0FDdEIsQ0FBQyxDQUFDLE1BQU0sQ0FDTixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQiwwQkFBMEIsQ0FDM0I7O0FBRUgsTUFBTSxLQUFPLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIFN0YXRlRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQgeyBlbnRpdHlDb25maWdUeXBlIGFzIGF0dGFjaG1lbnRFbnRpdHlDb25maWdUeXBlIH0gZnJvbSAnLi9hdHRhY2htZW50LWVudGl0eS1jb25maWcnXG5pbXBvcnQgeyBlbnRpdHlDb25maWdUeXBlIGFzIG1lbnVFbnRpdHlDb25maWdUeXBlIH0gICAgICAgZnJvbSAnLi9tZW51LWVudGl0eS1jb25maWcnXG5pbXBvcnQgeyBlbnRpdHlDb25maWdUeXBlIGFzIHBhZ2VFbnRpdHlDb25maWdUeXBlIH0gICAgICAgZnJvbSAnLi9wYWdlLWVudGl0eS1jb25maWcnXG5cbmxldCBiYXNlRW50aXR5Q29uZmlnVHlwZXMgPSBbXG4gIHtcbiAgICB0eXBlOiBcIndvcmRwcmVzcy1lbnRpdGllc1wiLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ2NhdGVnb3JpZXMnLFxuICAgIGlzU2VlZDogdHJ1ZSxcbiAgICBzZWVkOiBbe31dLFxuICAgIHVybDogJ3dwL3YyL2NhdGVnb3JpZXMnLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJkb2N1bWVudC10eXBlc1wiLFxuICAgIHVybDogJ3dwL3YyL2RvY3VtZW50LXR5cGVzJ1xuICB9LFxuICB7XG4gICAgdHlwZTogXCJlYm9va3NcIixcbiAgICB1cmw6ICd3cC92Mi9lYm9va3MnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImZhcXNcIixcbiAgICB1cmw6ICd3cC92Mi9mYXFzJ1xuICB9LFxuICB7XG4gICAgdHlwZTogXCJnYWxsZXJ5LWltYWdlc1wiLFxuICAgIHVybDogJ3dwL3YyL2dhbGxlcnktaW1hZ2VzJ1xuICB9LFxuICB7XG4gICAgdHlwZTogXCJpbmZvZ3JhcGhpY3NcIixcbiAgICB1cmw6ICd3cC92Mi9pbmZvZ3JhcGhpY3MnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImxjLWNhdGVnb3JpZXNcIixcbiAgICB1cmw6ICd3cC92Mi9sYy1jYXRlZ29yaWVzJ1xuICB9LFxuICB7XG4gICAgdHlwZTogXCJwb3N0c1wiLFxuICAgIHVybDogJ3dwL3YyL3Bvc3RzJ1xuICB9LFxuICB7XG4gICAgdHlwZTogXCJwdWJsaWNhdGlvbnNcIixcbiAgICB1cmw6ICd3cC92Mi9wdWJsaWNhdGlvbnMnLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJzdGF0dXRvcnktZG9jdW1lbnRzXCIsXG4gICAgdXJsOiAnd3AvdjIvc3RhdHV0b3J5LWRvY3VtZW50cycsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInJlY29yZGVkLXdlYmluYXJzXCIsXG4gICAgdXJsOiAnd3AvdjIvcmVjb3JkZWQtd2ViaW5hcnMnLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJzZW1pbmFyc1wiLFxuICAgIHVybDogJ3dwL3YyL3NlbWluYXJzJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwic3RhdGVzXCIsXG4gICAgdXJsOiAnd3AvdjIvc3RhdGVzJyxcbiAgICBlbnRpdHlUeXBlOiBTdGF0ZUVudGl0eSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwidGVhbS1tZW1iZXJzXCIsXG4gICAgdXJsOiAnd3AvdjIvdGVhbS1tZW1iZXJzJ1xuICB9LFxuICB7XG4gICAgdHlwZTogXCJ0ZXN0aW1vbmlhbHNcIixcbiAgICB1cmw6ICd3cC92Mi90ZXN0aW1vbmlhbHMnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInZpZGVvLXRlc3RpbW9uaWFsc1wiLFxuICAgIHVybDogJ3dwL3YyL3ZpZGVvLXRlc3RpbW9uaWFscydcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwidmlkZW9zXCIsXG4gICAgdXJsOiAnd3AvdjIvdmlkZW9zJ1xuICB9LFxuICB7XG4gICAgdHlwZTogXCJ3ZWJpbmFyc1wiLFxuICAgIHVybDogJ3dwL3YyL3dlYmluYXJzJ1xuICB9XG5dXG5cbmxldCBhbGxFbnRpdHlDb25maWdUeXBlcyA9IFxuICBfLmNvbmNhdChcbiAgICBiYXNlRW50aXR5Q29uZmlnVHlwZXMsXG4gICAgbWVudUVudGl0eUNvbmZpZ1R5cGUsXG4gICAgcGFnZUVudGl0eUNvbmZpZ1R5cGUsXG4gICAgYXR0YWNobWVudEVudGl0eUNvbmZpZ1R5cGUsXG4gIClcblxuZXhwb3J0IGNvbnN0IGVudGl0eUNvbmZpZ1R5cGVzID0gXy5zb3J0QnkoYWxsRW50aXR5Q29uZmlnVHlwZXMsICd0eXBlJylcbiJdfQ==