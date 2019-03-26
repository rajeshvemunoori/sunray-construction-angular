/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Card } from './card';
export class Pane {
    /**
     * @param {?} attributes
     */
    constructor(attributes) {
        this.setAttributes(attributes);
    }
    /**
     * @return {?}
     */
    toCard() {
        /** @type {?} */
        let attributes = {
            data: this,
            title: this.name,
            iconName: this.iconName,
        };
        return new Card(attributes);
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    setStatus(status) {
        this.active = status;
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
    Pane.prototype.name;
    /** @type {?} */
    Pane.prototype.iconName;
    /** @type {?} */
    Pane.prototype.componentClass;
    /** @type {?} */
    Pane.prototype.active;
    /** @type {?} */
    Pane.prototype.directive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9jbGFzc2VzL3BhbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBSTNCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUE7QUFFN0IsTUFBTSxPQUFPLElBQUk7Ozs7SUFPZixZQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7O0lBRUQsTUFBTTs7WUFDQSxVQUFVLEdBQUc7WUFDZixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEI7UUFDRCxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxVQUFVOztZQUMxQixZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUNuQixDQUFDO1FBRUQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0NBQ0Y7OztJQTlCQyxvQkFBWTs7SUFDWix3QkFBZ0I7O0lBQ2hCLDhCQUFtQjs7SUFDbkIsc0JBQWU7O0lBQ2YseUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGlQYW5lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4vY2FyZCdcblxuZXhwb3J0IGNsYXNzIFBhbmUgaW1wbGVtZW50cyBpUGFuZSB7XG4gIG5hbWU6IHN0cmluZ1xuICBpY29uTmFtZTogc3RyaW5nXG4gIGNvbXBvbmVudENsYXNzOiBhbnlcbiAgYWN0aXZlOiBib29sZWFuXG4gIGRpcmVjdGl2ZTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKVxuICB9XG5cbiAgdG9DYXJkKCkge1xuICAgIGxldCBhdHRyaWJ1dGVzID0ge1xuICAgICAgZGF0YTogdGhpcyxcbiAgICAgIHRpdGxlOiB0aGlzLm5hbWUsXG4gICAgICBpY29uTmFtZTogdGhpcy5pY29uTmFtZSxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDYXJkKGF0dHJpYnV0ZXMpXG4gIH1cblxuICBwcml2YXRlIHNldFN0YXR1cyhzdGF0dXMpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHN0YXR1c1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc2V0QXR0cmlidXRlID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlXG4gICAgfVxuXG4gICAgXy5tYXAoYXR0cmlidXRlcywgXy5iaW5kKHNldEF0dHJpYnV0ZSwgdGhpcykpXG4gIH1cbn1cblxuIl19