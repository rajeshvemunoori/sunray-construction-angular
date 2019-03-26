/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { AttributeGetterSetter } from './attribute-getter-setter.mixin';
var AttributeUpdater = /** @class */ (function (_super) {
    tslib_1.__extends(AttributeUpdater, _super);
    function AttributeUpdater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    AttributeUpdater.prototype.updateAttributes = /**
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) {
        _.extend(this.attributes, attributes);
        this.createSettersAndGetters(this.attributes);
    };
    return AttributeUpdater;
}(AttributeGetterSetter));
export { AttributeUpdater };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLXVwZGF0ZXIubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL2F0dHJpYnV0ZS11cGRhdGVyLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFFdkU7SUFBc0MsNENBQXFCO0lBQTNEOztJQUtBLENBQUM7Ozs7O0lBSkMsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQWU7UUFDOUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLHFCQUFxQixHQUsxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBBdHRyaWJ1dGVHZXR0ZXJTZXR0ZXIgfSBmcm9tICcuL2F0dHJpYnV0ZS1nZXR0ZXItc2V0dGVyLm1peGluJ1xuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlVXBkYXRlciBleHRlbmRzIEF0dHJpYnV0ZUdldHRlclNldHRlciB7XG4gIHVwZGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KTogdm9pZCB7XG4gICAgXy5leHRlbmQodGhpcy5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKVxuICAgIHRoaXMuY3JlYXRlU2V0dGVyc0FuZEdldHRlcnModGhpcy5hdHRyaWJ1dGVzKVxuICB9XG59XG4iXX0=