/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Card } from './card';
var Pane = /** @class */ (function () {
    function Pane(attributes) {
        this.setAttributes(attributes);
    }
    /**
     * @return {?}
     */
    Pane.prototype.toCard = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var attributes = {
            data: this,
            title: this.name,
            iconName: this.iconName,
        };
        return new Card(attributes);
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    Pane.prototype.setStatus = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.active = status;
    };
    /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    Pane.prototype.setAttributes = /**
     * @private
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) {
        var _this = this;
        /** @type {?} */
        var setAttribute = function (value, key) {
            _this[key] = value;
        };
        _.map(attributes, _.bind(setAttribute, this));
    };
    return Pane;
}());
export { Pane };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Byb3ZpZGVycy9jbGFzc2VzL3BhbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBSTNCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUE7QUFFN0I7SUFPRSxjQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7O0lBRUQscUJBQU07OztJQUFOOztZQUNNLFVBQVUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QjtRQUNELE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Ozs7O0lBRU8sd0JBQVM7Ozs7O0lBQWpCLFVBQWtCLE1BQU07UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQzs7Ozs7O0lBRU8sNEJBQWE7Ozs7O0lBQXJCLFVBQXNCLFVBQVU7UUFBaEMsaUJBTUM7O1lBTEssWUFBWSxHQUFHLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDNUIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUNuQixDQUFDO1FBRUQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUEvQkQsSUErQkM7Ozs7SUE5QkMsb0JBQVk7O0lBQ1osd0JBQWdCOztJQUNoQiw4QkFBbUI7O0lBQ25CLHNCQUFlOztJQUNmLHlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBpUGFuZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IENhcmQgfSBmcm9tICcuL2NhcmQnXG5cbmV4cG9ydCBjbGFzcyBQYW5lIGltcGxlbWVudHMgaVBhbmUge1xuICBuYW1lOiBzdHJpbmdcbiAgaWNvbk5hbWU6IHN0cmluZ1xuICBjb21wb25lbnRDbGFzczogYW55XG4gIGFjdGl2ZTogYm9vbGVhblxuICBkaXJlY3RpdmU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcylcbiAgfVxuXG4gIHRvQ2FyZCgpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IHtcbiAgICAgIGRhdGE6IHRoaXMsXG4gICAgICB0aXRsZTogdGhpcy5uYW1lLFxuICAgICAgaWNvbk5hbWU6IHRoaXMuaWNvbk5hbWUsXG4gICAgfVxuICAgIHJldHVybiBuZXcgQ2FyZChhdHRyaWJ1dGVzKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBzdGF0dXNcbiAgfVxuXG4gIHByaXZhdGUgc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IHNldEF0dHJpYnV0ZSA9ICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZVxuICAgIH1cblxuICAgIF8ubWFwKGF0dHJpYnV0ZXMsIF8uYmluZChzZXRBdHRyaWJ1dGUsIHRoaXMpKVxuICB9XG59XG5cbiJdfQ==