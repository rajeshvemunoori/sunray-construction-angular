/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { mimeTypes, } from '@ceo/shared';
import { WordpressEntity } from './wordpress.entity';
export class AttachmentEntity extends WordpressEntity {
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
        let mimeType = (/** @type {?} */ (_.find(mimeTypes, { mimeType: this.mimeType })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudC5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3dvcmRwcmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvY2xhc3Nlcy9lbnRpdGllcy9hdHRhY2htZW50LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUlMLFNBQVMsR0FDVixNQUFNLGFBQWEsQ0FBQTtBQUVwQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFFcEQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQWU7Ozs7SUFRbkQsSUFBSSxpQkFBaUI7UUFDbkIsUUFBTyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3pCLEtBQUssT0FBTyxDQUFDLENBQUM7Z0JBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtnQkFDaEMsTUFBTTthQUNQO1lBQ0QsS0FBSyxPQUFPLENBQUMsQ0FBQztnQkFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dCQUNoQyxNQUFNO2FBQ1A7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDUCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dCQUNoQyxNQUFNO2FBQ1A7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7O1lBQ1gsUUFBUSxHQUFHLG1CQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFPO1FBQ3BFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUMxRSxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN4QixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztZQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQ2hDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDcEIsQ0FBQTtJQUNILENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3hCLE9BQU87WUFDTCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztZQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQ2hDLEdBQUcsRUFBRSxDQUFDO29CQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUNwQixDQUFDO1NBQ0gsQ0FBQTtJQUNILENBQUM7O0FBakRNLGlDQUFnQixHQUFXLE9BQU8sQ0FBQTs7O0lBQXpDLGtDQUF5Qzs7SUFFekMsb0NBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLG1DQUFlOztJQUNmLHFDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBIdG1sTWVkaWFUYWdBdHRyaWJ1dGVzLFxuICBpSHRtbEltYWdlVGFnQXR0cmlidXRlcyxcbiAgaUh0bWxWaWRlb1RhZ0F0dHJpYnV0ZXMsXG4gIG1pbWVUeXBlcyxcbn0gZnJvbSAnQGNlby9zaGFyZWQnXG5cbmltcG9ydCB7IFdvcmRwcmVzc0VudGl0eSB9IGZyb20gJy4vd29yZHByZXNzLmVudGl0eSdcblxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRFbnRpdHkgZXh0ZW5kcyBXb3JkcHJlc3NFbnRpdHkge1xuICBzdGF0aWMgZGVmYXVsdE1lZGlhVHlwZTogc3RyaW5nID0gJ2ltYWdlJ1xuXG4gIG1pbWVUeXBlOiBzdHJpbmdcbiAgbWVkaWFEZXRhaWxzOiBhbnlcbiAgYWx0VGV4dDogc3RyaW5nXG4gIHNvdXJjZVVybDogc3RyaW5nXG5cbiAgZ2V0IGh0bWxUYWdBdHRyaWJ1dGVzKCk6IEh0bWxNZWRpYVRhZ0F0dHJpYnV0ZXMge1xuICAgIHN3aXRjaCh0aGlzLmh0bWxNZWRpYVR5cGUpIHsgXG4gICAgICBjYXNlICdpbWFnZSc6IHsgXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlVGFnQXR0cmlidXRlcygpXG4gICAgICAgIGJyZWFrOyBcbiAgICAgIH0gXG4gICAgICBjYXNlICd2aWRlbyc6IHsgXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvVGFnQXR0cmlidXRlcygpXG4gICAgICAgIGJyZWFrOyBcbiAgICAgIH0gXG4gICAgICBkZWZhdWx0OiB7IFxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZVRhZ0F0dHJpYnV0ZXMoKVxuICAgICAgICBicmVhazsgXG4gICAgICB9IFxuICAgIH0gXG4gIH1cblxuICBnZXQgaHRtbE1lZGlhVHlwZSgpOiBzdHJpbmcge1xuICAgIGxldCBtaW1lVHlwZSA9IF8uZmluZChtaW1lVHlwZXMsIHsgbWltZVR5cGU6IHRoaXMubWltZVR5cGUgfSkgYXMgYW55XG4gICAgcmV0dXJuIG1pbWVUeXBlID8gbWltZVR5cGUubWVkaWFUeXBlIDogQXR0YWNobWVudEVudGl0eS5kZWZhdWx0TWVkaWFUeXBlXG4gIH1cblxuICBwcml2YXRlIGltYWdlVGFnQXR0cmlidXRlcygpOiBpSHRtbEltYWdlVGFnQXR0cmlidXRlcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLm1lZGlhRGV0YWlscy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5tZWRpYURldGFpbHMuaGVpZ2h0LFxuICAgICAgYWx0OiB0aGlzLmFsdFRleHQsXG4gICAgICBzcmM6IHRoaXMuc291cmNlVXJsLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmlkZW9UYWdBdHRyaWJ1dGVzKCk6IGlIdG1sVmlkZW9UYWdBdHRyaWJ1dGVzIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICB3aWR0aDogdGhpcy5tZWRpYURldGFpbHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMubWVkaWFEZXRhaWxzLmhlaWdodCxcbiAgICAgIHNyYzogW3tcbiAgICAgICAgc3JjOiB0aGlzLnNvdXJjZVVybCxcbiAgICAgICAgdHlwZTogdGhpcy5taW1lVHlwZSxcbiAgICAgIH1dXG4gICAgfVxuICB9XG59XG4iXX0=