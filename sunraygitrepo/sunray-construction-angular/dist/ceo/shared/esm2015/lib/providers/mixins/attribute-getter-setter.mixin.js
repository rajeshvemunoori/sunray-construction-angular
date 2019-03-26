/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://stackoverflow.com/questions/45236274/is-it-possible-to-create-dynamic-getters-setters-in-typescript
import * as _ from 'lodash';
import { camelCase } from '@ceo/core';
/** @type {?} */
export const createGetSet = (obj, props, key, name) => {
    /** @type {?} */
    let generateGetSet = (props, key, name) => {
        /** @type {?} */
        let getProp = _.bind(obj.getProp, obj);
        /** @type {?} */
        let setProp = _.bind(obj.setProp, obj);
        return {
            get: () => getProp(props, key),
            set: (value) => {
                if (getProp(props, key) !== value) {
                    setProp(props, key, value);
                }
            },
        };
    };
    /** @type {?} */
    let getSetProps = generateGetSet(props, key, name);
    Object.defineProperty(obj, name, getSetProps);
};
export class AttributeGetterSetter {
    constructor() {
        this.attributes = {};
        this.updatedKeys = [];
    }
    /**
     * @return {?}
     */
    createAttributeSettersAndGetters() {
        this.createSettersAndGetters(this.attributes);
    }
    /**
     * @param {?} props
     * @return {?}
     */
    createSettersAndGetters(props) {
        for (let key in props) {
            /** @type {?} */
            var camelizedKey = camelCase(key);
            createGetSet(this, props, key, camelizedKey);
            createGetSet(this, props, key, key);
        }
    }
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setProp(props, key, value) {
        props[key] = value;
        if (this.updatedKeys) {
            this.updatedKeys.push(key);
        }
    }
    /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    getProp(props, key) {
        return props[key];
    }
}
if (false) {
    /** @type {?} */
    AttributeGetterSetter.prototype.attributes;
    /** @type {?} */
    AttributeGetterSetter.prototype.updatedKeys;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWdldHRlci1zZXR0ZXIubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL2F0dHJpYnV0ZS1nZXR0ZXItc2V0dGVyLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQTs7QUFHckMsTUFBTSxPQUFPLFlBQVksR0FBRyxDQUMxQixHQUFRLEVBQ1IsS0FBSyxFQUNMLEdBQVcsRUFDWCxJQUFZLEVBQ1osRUFBRTs7UUFHRSxjQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFOztZQUNwQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQzs7WUFDbEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7UUFFdEMsT0FBTztZQUNMLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUM5QixHQUFHLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDbEIsSUFBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtvQkFDaEMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7aUJBQzNCO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDOztRQUVHLFdBQVcsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7SUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBRS9DLENBQUM7QUFFRCxNQUFNLE9BQU8scUJBQXFCO0lBQWxDO1FBQ0UsZUFBVSxHQUFRLEVBQUUsQ0FBQTtRQUNwQixnQkFBVyxHQUFhLEVBQUUsQ0FBQTtJQXlCNUIsQ0FBQzs7OztJQXZCQyxnQ0FBZ0M7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMvQyxDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLEtBQVU7UUFDaEMsS0FBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7O2dCQUNoQixZQUFZLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNqQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUE7WUFDNUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUVsQixJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDM0I7SUFDSCxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUc7UUFDaEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkIsQ0FBQztDQUNGOzs7SUExQkMsMkNBQW9COztJQUNwQiw0Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTIzNjI3NC9pcy1pdC1wb3NzaWJsZS10by1jcmVhdGUtZHluYW1pYy1nZXR0ZXJzLXNldHRlcnMtaW4tdHlwZXNjcmlwdFxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSAnQGNlby9jb3JlJ1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVHZXRTZXQgPSAoXG4gIG9iajogYW55LFxuICBwcm9wcyxcbiAga2V5OiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZ1xuKSA9PiB7XG5cblxuICBsZXQgZ2VuZXJhdGVHZXRTZXQgPSAocHJvcHMsIGtleSwgbmFtZSkgPT4ge1xuICAgIGxldCBnZXRQcm9wID0gXy5iaW5kKG9iai5nZXRQcm9wLCBvYmopXG4gICAgbGV0IHNldFByb3AgPSBfLmJpbmQob2JqLnNldFByb3AsIG9iailcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQ6ICgpID0+IGdldFByb3AocHJvcHMsIGtleSksXG4gICAgICBzZXQ6ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIGlmKGdldFByb3AocHJvcHMsIGtleSkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgc2V0UHJvcChwcm9wcywga2V5LCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBsZXQgZ2V0U2V0UHJvcHMgPSBnZW5lcmF0ZUdldFNldChwcm9wcywga2V5LCBuYW1lKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCBnZXRTZXRQcm9wcylcblxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlR2V0dGVyU2V0dGVyIHtcbiAgYXR0cmlidXRlczogYW55ID0ge31cbiAgdXBkYXRlZEtleXM6IHN0cmluZ1tdID0gW11cblxuICBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzQW5kR2V0dGVycygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVNldHRlcnNBbmRHZXR0ZXJzKHRoaXMuYXR0cmlidXRlcylcbiAgfVxuXG4gIGNyZWF0ZVNldHRlcnNBbmRHZXR0ZXJzKHByb3BzOiBhbnkpOiB2b2lkIHtcbiAgICBmb3IobGV0IGtleSBpbiBwcm9wcykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHZhciBjYW1lbGl6ZWRLZXkgPSBjYW1lbENhc2Uoa2V5KVxuICAgICAgY3JlYXRlR2V0U2V0KHRoaXMsIHByb3BzLCBrZXksIGNhbWVsaXplZEtleSlcbiAgICAgIGNyZWF0ZUdldFNldCh0aGlzLCBwcm9wcywga2V5LCBrZXkpXG4gICAgfSBcbiAgfVxuXG4gIHNldFByb3AocHJvcHMsIGtleSwgdmFsdWUpOiB2b2lkIHtcbiAgICBwcm9wc1trZXldID0gdmFsdWVcblxuICAgIGlmKHRoaXMudXBkYXRlZEtleXMpIHtcbiAgICAgIHRoaXMudXBkYXRlZEtleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UHJvcChwcm9wcywga2V5KTogYW55IHtcbiAgICByZXR1cm4gcHJvcHNba2V5XVxuICB9XG59XG4iXX0=