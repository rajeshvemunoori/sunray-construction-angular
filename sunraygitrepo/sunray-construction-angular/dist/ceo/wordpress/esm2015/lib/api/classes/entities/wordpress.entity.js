/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { filter, } from 'rxjs/operators';
import { pascalCase, camelCase, } from '@ceo/core';
import { JsonApiEntity, } from '@ceo/entity';
export class WordpressEntity extends JsonApiEntity {
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
        return this.dataService.get$(ri).pipe(filter(attachment => !_.isEmpty(attachment)));
    }
    /**
     * @private
     * @param {?=} defaultUrl
     * @return {?}
     */
    getFeaturedMediaUrl(defaultUrl = '') {
        if (!_.has(this, 'attributes._embedded.wp:featuredmedia')) {
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
        _.map(attributes, createRenderedAttributeGetter);
    }
    /**
     * @private
     * @return {?}
     */
    getAttributesWithRenderedFormat() {
        /** @type {?} */
        let hasRenderedFormat = (attribute) => {
            return _.has(attribute, 'rendered');
        };
        return _.pickBy(this.attributes, hasRenderedFormat);
    }
}
WordpressEntity._sliceName = 'wp-entities';
if (false) {
    /** @type {?} */
    WordpressEntity._sliceName;
    /** @type {?} */
    WordpressEntity.prototype.feature;
    /**
     * @type {?}
     * @protected
     */
    WordpressEntity.prototype._renderedTitle;
    /**
     * @type {?}
     * @protected
     */
    WordpressEntity.prototype._renderedContent;
    /**
     * @type {?}
     * @protected
     */
    WordpressEntity.prototype._featuredMediaUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZHByZXNzLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9jbGFzc2VzL2VudGl0aWVzL3dvcmRwcmVzcy5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxNQUFNLEdBQ1AsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLFdBQVcsQ0FBQTtBQUVsQixPQUFPLEVBQ0wsYUFBYSxHQUtkLE1BQU0sYUFBYSxDQUFBO0FBRXBCLE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7Ozs7O0lBUWhELFlBQ0UsSUFBdUIsRUFDdkIsV0FBMEI7UUFFMUIsS0FBSyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQTtJQUN2QyxDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7U0FDcEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQTtJQUMvQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxjQUFzQjs7WUFDNUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7O1lBQ3BDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOztZQUMvQixFQUFFLEdBQUcsbUJBQUE7WUFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsRUFBRSxFQUFFLGNBQWMsQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFDLEVBQUU7U0FDM0MsRUFBdUI7UUFFeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUM3QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsYUFBcUIsRUFBRTtRQUNqRCxJQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsdUNBQXVDLENBQUMsRUFBRTtZQUN4RCxPQUFPLFVBQVUsQ0FBQTtTQUNsQjs7WUFFRyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUMzRSxJQUFHLHVCQUF1QixFQUFFO1lBQzFCLE9BQU8sdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFBO1NBQzdDO1FBRUQsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQzs7Ozs7SUFFTyw4QkFBOEI7O1lBQ2hDLDZCQUE2QixHQUFHLENBQUMsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTs7Z0JBQzFELFFBQVEsR0FBRyxXQUFXLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTs7Z0JBQzVDLGVBQWUsR0FBRyxJQUFJLFFBQVEsRUFBRTs7Z0JBRWhDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ25DLENBQUM7O2dCQUVHLEtBQUssR0FBRztnQkFDVixHQUFHLEVBQUUsR0FBRyxFQUFFO29CQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQy9DLENBQUM7Z0JBQ0QsR0FBRyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsR0FBRSxDQUFDO2FBQ3hCO1lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzlDLENBQUM7O1lBRUcsVUFBVSxHQUFHLElBQUksQ0FBQywrQkFBK0IsRUFBRTtRQUN2RCxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFBO0lBQ2xELENBQUM7Ozs7O0lBRU8sK0JBQStCOztZQUNqQyxpQkFBaUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDckMsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUE7SUFDckQsQ0FBQzs7QUE5RU0sMEJBQVUsR0FBVyxhQUFhLENBQUE7OztJQUF6QywyQkFBeUM7O0lBRXpDLGtDQUFjOzs7OztJQUNkLHlDQUFnQzs7Ozs7SUFDaEMsMkNBQWtDOzs7OztJQUNsQyw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgZmlsdGVyLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHtcbiAgcGFzY2FsQ2FzZSxcbiAgY2FtZWxDYXNlLFxufSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIEpzb25BcGlFbnRpdHksXG4gIGlFbnRpdHksXG4gIGlEYXRhU2VydmljZSxcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbiAgRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbn0gZnJvbSAnQGNlby9lbnRpdHknXG5cbmV4cG9ydCBjbGFzcyBXb3JkcHJlc3NFbnRpdHkgZXh0ZW5kcyBKc29uQXBpRW50aXR5IHtcbiAgc3RhdGljIF9zbGljZU5hbWU6IHN0cmluZyA9ICd3cC1lbnRpdGllcydcblxuICBmZWF0dXJlOiAnY21zJ1xuICBwcm90ZWN0ZWQgX3JlbmRlcmVkVGl0bGU6IHN0cmluZ1xuICBwcm90ZWN0ZWQgX3JlbmRlcmVkQ29udGVudDogc3RyaW5nXG4gIHByb3RlY3RlZCBfZmVhdHVyZWRNZWRpYVVybDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5pdD86IFBhcnRpYWw8aUVudGl0eT4sXG4gICAgZGF0YVNlcnZpY2U/OiBpRGF0YVNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGluaXQsIGRhdGFTZXJ2aWNlKVxuICAgIHRoaXMuY3JlYXRlUmVuZGVyZWRBdHRyaWJ1dGVHZXR0ZXJzKClcbiAgfVxuXG4gIGdldCBmZWF0dXJlZE1lZGlhVXJsKCk6IHN0cmluZyB7XG4gICAgaWYoIXRoaXMuX2ZlYXR1cmVkTWVkaWFVcmwpIHtcbiAgICAgIHRoaXMuX2ZlYXR1cmVkTWVkaWFVcmwgPSB0aGlzLmdldEZlYXR1cmVkTWVkaWFVcmwoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9mZWF0dXJlZE1lZGlhVXJsXG4gIH1cblxuICBhdHRhY2htZW50JChhdHRhY2htZW50TmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IHByb3BOYW1lID0gY2FtZWxDYXNlKGF0dGFjaG1lbnROYW1lKVxuICAgIGxldCBhdHRhY2htZW50RGF0YSA9IHRoaXNbcHJvcE5hbWVdXG4gICAgbGV0IHJpID0ge1xuICAgICAgZmVhdHVyZTogdGhpcy5mZWF0dXJlLFxuICAgICAgdHlwZTogJ2F0dGFjaG1lbnRzJyxcbiAgICAgIGlkOiBhdHRhY2htZW50RGF0YS5pZCB8fCBhdHRhY2htZW50RGF0YS5JRFxuICAgIH0gYXMgaVJlc291cmNlSWRlbnRpZmllclxuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0JChyaSkucGlwZShcbiAgICAgIGZpbHRlcihhdHRhY2htZW50ID0+ICFfLmlzRW1wdHkoYXR0YWNobWVudCkpXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlZE1lZGlhVXJsKGRlZmF1bHRVcmw6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBpZighXy5oYXModGhpcywgJ2F0dHJpYnV0ZXMuX2VtYmVkZGVkLndwOmZlYXR1cmVkbWVkaWEnKSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRVcmxcbiAgICB9XG5cbiAgICBsZXQgZmVhdHVyZWRNZWRpYUNvbGxlY3Rpb24gPSB0aGlzLmF0dHJpYnV0ZXMuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11cbiAgICBpZihmZWF0dXJlZE1lZGlhQ29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZlYXR1cmVkTWVkaWFDb2xsZWN0aW9uWzBdLnNvdXJjZV91cmxcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFVybFxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSZW5kZXJlZEF0dHJpYnV0ZUdldHRlcnMoKSB7XG4gICAgbGV0IGNyZWF0ZVJlbmRlcmVkQXR0cmlidXRlR2V0dGVyID0gKHZhbHVlLCBhdHRyTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgcHJvcE5hbWUgPSBgcmVuZGVyZWQke3Bhc2NhbENhc2UoYXR0ck5hbWUpfWBcbiAgICAgIGxldCBwcml2YXRlUHJvcE5hbWUgPSBgXyR7cHJvcE5hbWV9YFxuXG4gICAgICBsZXQgZ2V0dGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpc1thdHRyTmFtZV1bJ3JlbmRlcmVkJ11cbiAgICAgIH1cblxuICAgICAgbGV0IHByb3BzID0ge1xuICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tZW1vaXplZChwcml2YXRlUHJvcE5hbWUsIGdldHRlcilcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiAodmFsdWU6IGFueSkgPT4ge31cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BOYW1lLCBwcm9wcylcbiAgICB9XG5cbiAgICBsZXQgYXR0cmlidXRlcyA9IHRoaXMuZ2V0QXR0cmlidXRlc1dpdGhSZW5kZXJlZEZvcm1hdCgpXG4gICAgXy5tYXAoYXR0cmlidXRlcywgY3JlYXRlUmVuZGVyZWRBdHRyaWJ1dGVHZXR0ZXIpXG4gIH1cblxuICBwcml2YXRlIGdldEF0dHJpYnV0ZXNXaXRoUmVuZGVyZWRGb3JtYXQoKSB7XG4gICAgbGV0IGhhc1JlbmRlcmVkRm9ybWF0ID0gKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgcmV0dXJuIF8uaGFzKGF0dHJpYnV0ZSwgJ3JlbmRlcmVkJylcbiAgICB9XG4gICAgcmV0dXJuIF8ucGlja0J5KHRoaXMuYXR0cmlidXRlcywgaGFzUmVuZGVyZWRGb3JtYXQpXG4gIH1cbn1cbiJdfQ==