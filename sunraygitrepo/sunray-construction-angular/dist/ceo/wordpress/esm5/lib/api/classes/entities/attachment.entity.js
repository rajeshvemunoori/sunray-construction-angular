/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { mimeTypes, } from '@ceo/shared';
import { WordpressEntity } from './wordpress.entity';
var AttachmentEntity = /** @class */ (function (_super) {
    tslib_1.__extends(AttachmentEntity, _super);
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
            var mimeType = (/** @type {?} */ (_.find(mimeTypes, { mimeType: this.mimeType })));
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
export { AttachmentEntity };
if (false) {
    /** @type {?} */
    AttachmentEntity.defaultMediaType;
    /** @type {?} */
    AttachmentEntity.prototype.mimeType;
    /** @type {?} */
    AttachmentEntity.prototype.mediaDetails;
    /** @type {?} */
    AttachmentEntity.prototype.altText;
    /** @type {?} */
    AttachmentEntity.prototype.sourceUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudC5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvY2xhc3Nlcy9lbnRpdGllcy9hdHRhY2htZW50LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFJTCxTQUFTLEdBQ1YsTUFBTSxhQUFhLENBQUE7QUFFcEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBRXBEO0lBQXNDLDRDQUFlO0lBQXJEOztJQW1EQSxDQUFDO0lBM0NDLHNCQUFJLCtDQUFpQjs7OztRQUFyQjtZQUNFLFFBQU8sSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekIsS0FBSyxPQUFPLENBQUMsQ0FBQztvQkFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO29CQUNoQyxNQUFNO2lCQUNQO2dCQUNELEtBQUssT0FBTyxDQUFDLENBQUM7b0JBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtvQkFDaEMsTUFBTTtpQkFDUDtnQkFDRCxPQUFPLENBQUMsQ0FBQztvQkFDUCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO29CQUNoQyxNQUFNO2lCQUNQO2FBQ0Y7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFhOzs7O1FBQWpCOztnQkFDTSxRQUFRLEdBQUcsbUJBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQU87WUFDcEUsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFBO1FBQzFFLENBQUM7OztPQUFBOzs7OztJQUVPLDZDQUFrQjs7OztJQUExQjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDaEMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUztTQUNwQixDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFFTyw2Q0FBa0I7Ozs7SUFBMUI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtZQUNoQyxHQUFHLEVBQUUsQ0FBQztvQkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDcEIsQ0FBQztTQUNILENBQUE7SUFDSCxDQUFDO0lBakRNLGlDQUFnQixHQUFXLE9BQU8sQ0FBQTtJQWtEM0MsdUJBQUM7Q0FBQSxBQW5ERCxDQUFzQyxlQUFlLEdBbURwRDtTQW5EWSxnQkFBZ0I7OztJQUMzQixrQ0FBeUM7O0lBRXpDLG9DQUFnQjs7SUFDaEIsd0NBQWlCOztJQUNqQixtQ0FBZTs7SUFDZixxQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgSHRtbE1lZGlhVGFnQXR0cmlidXRlcyxcbiAgaUh0bWxJbWFnZVRhZ0F0dHJpYnV0ZXMsXG4gIGlIdG1sVmlkZW9UYWdBdHRyaWJ1dGVzLFxuICBtaW1lVHlwZXMsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQgeyBXb3JkcHJlc3NFbnRpdHkgfSBmcm9tICcuL3dvcmRwcmVzcy5lbnRpdHknXG5cbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50RW50aXR5IGV4dGVuZHMgV29yZHByZXNzRW50aXR5IHtcbiAgc3RhdGljIGRlZmF1bHRNZWRpYVR5cGU6IHN0cmluZyA9ICdpbWFnZSdcblxuICBtaW1lVHlwZTogc3RyaW5nXG4gIG1lZGlhRGV0YWlsczogYW55XG4gIGFsdFRleHQ6IHN0cmluZ1xuICBzb3VyY2VVcmw6IHN0cmluZ1xuXG4gIGdldCBodG1sVGFnQXR0cmlidXRlcygpOiBIdG1sTWVkaWFUYWdBdHRyaWJ1dGVzIHtcbiAgICBzd2l0Y2godGhpcy5odG1sTWVkaWFUeXBlKSB7IFxuICAgICAgY2FzZSAnaW1hZ2UnOiB7IFxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZVRhZ0F0dHJpYnV0ZXMoKVxuICAgICAgICBicmVhazsgXG4gICAgICB9IFxuICAgICAgY2FzZSAndmlkZW8nOiB7IFxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb1RhZ0F0dHJpYnV0ZXMoKVxuICAgICAgICBicmVhazsgXG4gICAgICB9IFxuICAgICAgZGVmYXVsdDogeyBcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VUYWdBdHRyaWJ1dGVzKClcbiAgICAgICAgYnJlYWs7IFxuICAgICAgfSBcbiAgICB9IFxuICB9XG5cbiAgZ2V0IGh0bWxNZWRpYVR5cGUoKTogc3RyaW5nIHtcbiAgICBsZXQgbWltZVR5cGUgPSBfLmZpbmQobWltZVR5cGVzLCB7IG1pbWVUeXBlOiB0aGlzLm1pbWVUeXBlIH0pIGFzIGFueVxuICAgIHJldHVybiBtaW1lVHlwZSA/IG1pbWVUeXBlLm1lZGlhVHlwZSA6IEF0dGFjaG1lbnRFbnRpdHkuZGVmYXVsdE1lZGlhVHlwZVxuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVRhZ0F0dHJpYnV0ZXMoKTogaUh0bWxJbWFnZVRhZ0F0dHJpYnV0ZXMge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5tZWRpYURldGFpbHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMubWVkaWFEZXRhaWxzLmhlaWdodCxcbiAgICAgIGFsdDogdGhpcy5hbHRUZXh0LFxuICAgICAgc3JjOiB0aGlzLnNvdXJjZVVybCxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHZpZGVvVGFnQXR0cmlidXRlcygpOiBpSHRtbFZpZGVvVGFnQXR0cmlidXRlcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgd2lkdGg6IHRoaXMubWVkaWFEZXRhaWxzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLm1lZGlhRGV0YWlscy5oZWlnaHQsXG4gICAgICBzcmM6IFt7XG4gICAgICAgIHNyYzogdGhpcy5zb3VyY2VVcmwsXG4gICAgICAgIHR5cGU6IHRoaXMubWltZVR5cGUsXG4gICAgICB9XVxuICAgIH1cbiAgfVxufVxuIl19