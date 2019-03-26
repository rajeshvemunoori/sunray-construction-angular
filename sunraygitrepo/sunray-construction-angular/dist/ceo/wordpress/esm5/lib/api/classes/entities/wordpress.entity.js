/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { filter, } from 'rxjs/operators';
import { pascalCase, camelCase, } from '@ceo/core';
import { JsonApiEntity, } from '@ceo/entity';
var WordpressEntity = /** @class */ (function (_super) {
    tslib_1.__extends(WordpressEntity, _super);
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
        return this.dataService.get$(ri).pipe(filter(function (attachment) { return !_.isEmpty(attachment); }));
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
}(JsonApiEntity));
export { WordpressEntity };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZHByZXNzLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vd29yZHByZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9jbGFzc2VzL2VudGl0aWVzL3dvcmRwcmVzcy5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkIsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxXQUFXLENBQUE7QUFFbEIsT0FBTyxFQUNMLGFBQWEsR0FLZCxNQUFNLGFBQWEsQ0FBQTtBQUVwQjtJQUFxQywyQ0FBYTtJQVFoRCx5QkFDRSxJQUF1QixFQUN2QixXQUEwQjtRQUY1QixZQUlFLGtCQUFNLElBQUksRUFBRSxXQUFXLENBQUMsU0FFekI7UUFEQyxLQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQTs7SUFDdkMsQ0FBQztJQUVELHNCQUFJLDZDQUFnQjs7OztRQUFwQjtZQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTthQUNwRDtZQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBO1FBQy9CLENBQUM7OztPQUFBOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxjQUFzQjs7WUFDNUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7O1lBQ3BDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOztZQUMvQixFQUFFLEdBQUcsbUJBQUE7WUFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsRUFBRSxFQUFFLGNBQWMsQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFDLEVBQUU7U0FDM0MsRUFBdUI7UUFFeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUM3QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sNkNBQW1COzs7OztJQUEzQixVQUE0QixVQUF1QjtRQUF2QiwyQkFBQSxFQUFBLGVBQXVCO1FBQ2pELElBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSx1Q0FBdUMsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sVUFBVSxDQUFBO1NBQ2xCOztZQUVHLHVCQUF1QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO1FBQzNFLElBQUcsdUJBQXVCLEVBQUU7WUFDMUIsT0FBTyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUE7U0FDN0M7UUFFRCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDOzs7OztJQUVPLHdEQUE4Qjs7OztJQUF0QztRQUFBLGlCQXFCQzs7WUFwQkssNkJBQTZCLEdBQUcsVUFBQyxLQUFLLEVBQUUsUUFBZ0I7O2dCQUN0RCxRQUFRLEdBQUcsYUFBVyxVQUFVLENBQUMsUUFBUSxDQUFHOztnQkFDNUMsZUFBZSxHQUFHLE1BQUksUUFBVTs7Z0JBRWhDLE1BQU0sR0FBRztnQkFDWCxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNuQyxDQUFDOztnQkFFRyxLQUFLLEdBQUc7Z0JBQ1YsR0FBRyxFQUFFO29CQUNILE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQy9DLENBQUM7Z0JBQ0QsR0FBRyxFQUFFLFVBQUMsS0FBVSxJQUFNLENBQUM7YUFDeEI7WUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDOUMsQ0FBQzs7WUFFRyxVQUFVLEdBQUcsSUFBSSxDQUFDLCtCQUErQixFQUFFO1FBQ3ZELENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUE7SUFDbEQsQ0FBQzs7Ozs7SUFFTyx5REFBK0I7Ozs7SUFBdkM7O1lBQ00saUJBQWlCLEdBQUcsVUFBQyxTQUFTO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDckMsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUE7SUFDckQsQ0FBQztJQTlFTSwwQkFBVSxHQUFXLGFBQWEsQ0FBQTtJQStFM0Msc0JBQUM7Q0FBQSxBQWhGRCxDQUFxQyxhQUFhLEdBZ0ZqRDtTQWhGWSxlQUFlOzs7SUFDMUIsMkJBQXlDOztJQUV6QyxrQ0FBYzs7Ozs7SUFDZCx5Q0FBZ0M7Ozs7O0lBQ2hDLDJDQUFrQzs7Ozs7SUFDbEMsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGZpbHRlcixcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7XG4gIHBhc2NhbENhc2UsXG4gIGNhbWVsQ2FzZSxcbn0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQge1xuICBKc29uQXBpRW50aXR5LFxuICBpRW50aXR5LFxuICBpRGF0YVNlcnZpY2UsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gIEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG59IGZyb20gJ0BjZW8vZW50aXR5J1xuXG5leHBvcnQgY2xhc3MgV29yZHByZXNzRW50aXR5IGV4dGVuZHMgSnNvbkFwaUVudGl0eSB7XG4gIHN0YXRpYyBfc2xpY2VOYW1lOiBzdHJpbmcgPSAnd3AtZW50aXRpZXMnXG5cbiAgZmVhdHVyZTogJ2NtcydcbiAgcHJvdGVjdGVkIF9yZW5kZXJlZFRpdGxlOiBzdHJpbmdcbiAgcHJvdGVjdGVkIF9yZW5kZXJlZENvbnRlbnQ6IHN0cmluZ1xuICBwcm90ZWN0ZWQgX2ZlYXR1cmVkTWVkaWFVcmw6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGluaXQ/OiBQYXJ0aWFsPGlFbnRpdHk+LFxuICAgIGRhdGFTZXJ2aWNlPzogaURhdGFTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihpbml0LCBkYXRhU2VydmljZSlcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVkQXR0cmlidXRlR2V0dGVycygpXG4gIH1cblxuICBnZXQgZmVhdHVyZWRNZWRpYVVybCgpOiBzdHJpbmcge1xuICAgIGlmKCF0aGlzLl9mZWF0dXJlZE1lZGlhVXJsKSB7XG4gICAgICB0aGlzLl9mZWF0dXJlZE1lZGlhVXJsID0gdGhpcy5nZXRGZWF0dXJlZE1lZGlhVXJsKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZWRNZWRpYVVybFxuICB9XG5cbiAgYXR0YWNobWVudCQoYXR0YWNobWVudE5hbWU6IHN0cmluZykge1xuICAgIGxldCBwcm9wTmFtZSA9IGNhbWVsQ2FzZShhdHRhY2htZW50TmFtZSlcbiAgICBsZXQgYXR0YWNobWVudERhdGEgPSB0aGlzW3Byb3BOYW1lXVxuICAgIGxldCByaSA9IHtcbiAgICAgIGZlYXR1cmU6IHRoaXMuZmVhdHVyZSxcbiAgICAgIHR5cGU6ICdhdHRhY2htZW50cycsXG4gICAgICBpZDogYXR0YWNobWVudERhdGEuaWQgfHwgYXR0YWNobWVudERhdGEuSURcbiAgICB9IGFzIGlSZXNvdXJjZUlkZW50aWZpZXJcblxuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldCQocmkpLnBpcGUoXG4gICAgICBmaWx0ZXIoYXR0YWNobWVudCA9PiAhXy5pc0VtcHR5KGF0dGFjaG1lbnQpKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZWRNZWRpYVVybChkZWZhdWx0VXJsOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgaWYoIV8uaGFzKHRoaXMsICdhdHRyaWJ1dGVzLl9lbWJlZGRlZC53cDpmZWF0dXJlZG1lZGlhJykpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VXJsXG4gICAgfVxuXG4gICAgbGV0IGZlYXR1cmVkTWVkaWFDb2xsZWN0aW9uID0gdGhpcy5hdHRyaWJ1dGVzLl9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddXG4gICAgaWYoZmVhdHVyZWRNZWRpYUNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmZWF0dXJlZE1lZGlhQ29sbGVjdGlvblswXS5zb3VyY2VfdXJsXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRVcmxcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmVuZGVyZWRBdHRyaWJ1dGVHZXR0ZXJzKCkge1xuICAgIGxldCBjcmVhdGVSZW5kZXJlZEF0dHJpYnV0ZUdldHRlciA9ICh2YWx1ZSwgYXR0ck5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IHByb3BOYW1lID0gYHJlbmRlcmVkJHtwYXNjYWxDYXNlKGF0dHJOYW1lKX1gXG4gICAgICBsZXQgcHJpdmF0ZVByb3BOYW1lID0gYF8ke3Byb3BOYW1lfWBcblxuICAgICAgbGV0IGdldHRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXNbYXR0ck5hbWVdWydyZW5kZXJlZCddXG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVtb2l6ZWQocHJpdmF0ZVByb3BOYW1lLCBnZXR0ZXIpXG4gICAgICAgIH0sXG4gICAgICAgIHNldDogKHZhbHVlOiBhbnkpID0+IHt9XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wTmFtZSwgcHJvcHMpXG4gICAgfVxuXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSB0aGlzLmdldEF0dHJpYnV0ZXNXaXRoUmVuZGVyZWRGb3JtYXQoKVxuICAgIF8ubWFwKGF0dHJpYnV0ZXMsIGNyZWF0ZVJlbmRlcmVkQXR0cmlidXRlR2V0dGVyKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGVzV2l0aFJlbmRlcmVkRm9ybWF0KCkge1xuICAgIGxldCBoYXNSZW5kZXJlZEZvcm1hdCA9IChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIHJldHVybiBfLmhhcyhhdHRyaWJ1dGUsICdyZW5kZXJlZCcpXG4gICAgfVxuICAgIHJldHVybiBfLnBpY2tCeSh0aGlzLmF0dHJpYnV0ZXMsIGhhc1JlbmRlcmVkRm9ybWF0KVxuICB9XG59XG4iXX0=