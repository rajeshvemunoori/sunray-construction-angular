/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { AttributeGetterSetter } from './attribute-getter-setter.mixin';
export class AttributeUpdater extends AttributeGetterSetter {
    /**
     * @param {?} attributes
     * @return {?}
     */
    updateAttributes(attributes) {
        _.extend(this.attributes, attributes);
        this.createSettersAndGetters(this.attributes);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLXVwZGF0ZXIubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL2F0dHJpYnV0ZS11cGRhdGVyLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQUV2RSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEscUJBQXFCOzs7OztJQUN6RCxnQkFBZ0IsQ0FBQyxVQUFlO1FBQzlCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQy9DLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBBdHRyaWJ1dGVHZXR0ZXJTZXR0ZXIgfSBmcm9tICcuL2F0dHJpYnV0ZS1nZXR0ZXItc2V0dGVyLm1peGluJ1xuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlVXBkYXRlciBleHRlbmRzIEF0dHJpYnV0ZUdldHRlclNldHRlciB7XG4gIHVwZGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KTogdm9pZCB7XG4gICAgXy5leHRlbmQodGhpcy5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKVxuICAgIHRoaXMuY3JlYXRlU2V0dGVyc0FuZEdldHRlcnModGhpcy5hdHRyaWJ1dGVzKVxuICB9XG59XG4iXX0=