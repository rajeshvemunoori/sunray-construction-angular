/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class Card {
    /**
     * @param {?} attributes
     */
    constructor(attributes) {
        this.setAttributes(attributes);
    }
    /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    setAttributes(attributes) {
        /** @type {?} */
        let setAttribute = (value, key) => {
            this[key] = value;
        };
        _.map(attributes, _.bind(setAttribute, this));
    }
}
if (false) {
    /** @type {?} */
    Card.prototype.data;
    /** @type {?} */
    Card.prototype.title;
    /** @type {?} */
    Card.prototype.iconName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9jbGFzc2VzL2NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBSTNCLE1BQU0sT0FBTyxJQUFJOzs7O0lBS2YsWUFBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFVBQVU7O1lBQzFCLFlBQVksR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFBO1FBQ25CLENBQUM7UUFFRCxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQy9DLENBQUM7Q0FDRjs7O0lBZkMsb0JBQVM7O0lBQ1QscUJBQWE7O0lBQ2Isd0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGlDYXJkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuZXhwb3J0IGNsYXNzIENhcmQgaW1wbGVtZW50cyBpQ2FyZCB7XG4gIGRhdGE6IGFueVxuICB0aXRsZTogc3RyaW5nXG4gIGljb25OYW1lOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpXG4gIH1cblxuICBwcml2YXRlIHNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgIGxldCBzZXRBdHRyaWJ1dGUgPSAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdGhpc1trZXldID0gdmFsdWVcbiAgICB9XG5cbiAgICBfLm1hcChhdHRyaWJ1dGVzLCBfLmJpbmQoc2V0QXR0cmlidXRlLCB0aGlzKSlcbiAgfVxufVxuIl19