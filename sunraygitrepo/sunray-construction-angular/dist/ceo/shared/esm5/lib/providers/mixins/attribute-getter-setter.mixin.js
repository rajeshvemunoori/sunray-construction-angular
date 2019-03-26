/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://stackoverflow.com/questions/45236274/is-it-possible-to-create-dynamic-getters-setters-in-typescript
import * as _ from 'lodash';
import { camelCase } from '@ceo/core';
/** @type {?} */
export var createGetSet = function (obj, props, key, name) {
    /** @type {?} */
    var generateGetSet = function (props, key, name) {
        /** @type {?} */
        var getProp = _.bind(obj.getProp, obj);
        /** @type {?} */
        var setProp = _.bind(obj.setProp, obj);
        return {
            get: function () { return getProp(props, key); },
            set: function (value) {
                if (getProp(props, key) !== value) {
                    setProp(props, key, value);
                }
            },
        };
    };
    /** @type {?} */
    var getSetProps = generateGetSet(props, key, name);
    Object.defineProperty(obj, name, getSetProps);
};
var AttributeGetterSetter = /** @class */ (function () {
    function AttributeGetterSetter() {
        this.attributes = {};
        this.updatedKeys = [];
    }
    /**
     * @return {?}
     */
    AttributeGetterSetter.prototype.createAttributeSettersAndGetters = /**
     * @return {?}
     */
    function () {
        this.createSettersAndGetters(this.attributes);
    };
    /**
     * @param {?} props
     * @return {?}
     */
    AttributeGetterSetter.prototype.createSettersAndGetters = /**
     * @param {?} props
     * @return {?}
     */
    function (props) {
        for (var key in props) {
            /** @type {?} */
            var camelizedKey = camelCase(key);
            createGetSet(this, props, key, camelizedKey);
            createGetSet(this, props, key, key);
        }
    };
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    AttributeGetterSetter.prototype.setProp = /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (props, key, value) {
        props[key] = value;
        if (this.updatedKeys) {
            this.updatedKeys.push(key);
        }
    };
    /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    AttributeGetterSetter.prototype.getProp = /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    function (props, key) {
        return props[key];
    };
    return AttributeGetterSetter;
}());
export { AttributeGetterSetter };
if (false) {
    /** @type {?} */
    AttributeGetterSetter.prototype.attributes;
    /** @type {?} */
    AttributeGetterSetter.prototype.updatedKeys;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWdldHRlci1zZXR0ZXIubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL2F0dHJpYnV0ZS1nZXR0ZXItc2V0dGVyLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQTs7QUFHckMsTUFBTSxLQUFPLFlBQVksR0FBRyxVQUMxQixHQUFRLEVBQ1IsS0FBSyxFQUNMLEdBQVcsRUFDWCxJQUFZOztRQUlSLGNBQWMsR0FBRyxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSTs7WUFDaEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7O1lBQ2xDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBRXRDLE9BQU87WUFDTCxHQUFHLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQW5CLENBQW1CO1lBQzlCLEdBQUcsRUFBRSxVQUFDLEtBQVU7Z0JBQ2QsSUFBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtvQkFDaEMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7aUJBQzNCO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDOztRQUVHLFdBQVcsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7SUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBRS9DLENBQUM7QUFFRDtJQUFBO1FBQ0UsZUFBVSxHQUFRLEVBQUUsQ0FBQTtRQUNwQixnQkFBVyxHQUFhLEVBQUUsQ0FBQTtJQXlCNUIsQ0FBQzs7OztJQXZCQyxnRUFBZ0M7OztJQUFoQztRQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0MsQ0FBQzs7Ozs7SUFFRCx1REFBdUI7Ozs7SUFBdkIsVUFBd0IsS0FBVTtRQUNoQyxLQUFJLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTs7Z0JBQ2hCLFlBQVksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ2pDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQTtZQUM1QyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDcEM7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsdUNBQU87Ozs7OztJQUFQLFVBQVEsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLO1FBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUE7UUFFbEIsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsdUNBQU87Ozs7O0lBQVAsVUFBUSxLQUFLLEVBQUUsR0FBRztRQUNoQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDOzs7O0lBMUJDLDJDQUFvQjs7SUFDcEIsNENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUyMzYyNzQvaXMtaXQtcG9zc2libGUtdG8tY3JlYXRlLWR5bmFtaWMtZ2V0dGVycy1zZXR0ZXJzLWluLXR5cGVzY3JpcHRcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gJ0BjZW8vY29yZSdcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlR2V0U2V0ID0gKFxuICBvYmo6IGFueSxcbiAgcHJvcHMsXG4gIGtleTogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmdcbikgPT4ge1xuXG5cbiAgbGV0IGdlbmVyYXRlR2V0U2V0ID0gKHByb3BzLCBrZXksIG5hbWUpID0+IHtcbiAgICBsZXQgZ2V0UHJvcCA9IF8uYmluZChvYmouZ2V0UHJvcCwgb2JqKVxuICAgIGxldCBzZXRQcm9wID0gXy5iaW5kKG9iai5zZXRQcm9wLCBvYmopXG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoKSA9PiBnZXRQcm9wKHByb3BzLCBrZXkpLFxuICAgICAgc2V0OiAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICBpZihnZXRQcm9wKHByb3BzLCBrZXkpICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHNldFByb3AocHJvcHMsIGtleSwgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgbGV0IGdldFNldFByb3BzID0gZ2VuZXJhdGVHZXRTZXQocHJvcHMsIGtleSwgbmFtZSlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwgZ2V0U2V0UHJvcHMpXG5cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUdldHRlclNldHRlciB7XG4gIGF0dHJpYnV0ZXM6IGFueSA9IHt9XG4gIHVwZGF0ZWRLZXlzOiBzdHJpbmdbXSA9IFtdXG5cbiAgY3JlYXRlQXR0cmlidXRlU2V0dGVyc0FuZEdldHRlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVTZXR0ZXJzQW5kR2V0dGVycyh0aGlzLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBjcmVhdGVTZXR0ZXJzQW5kR2V0dGVycyhwcm9wczogYW55KTogdm9pZCB7XG4gICAgZm9yKGxldCBrZXkgaW4gcHJvcHMpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICB2YXIgY2FtZWxpemVkS2V5ID0gY2FtZWxDYXNlKGtleSlcbiAgICAgIGNyZWF0ZUdldFNldCh0aGlzLCBwcm9wcywga2V5LCBjYW1lbGl6ZWRLZXkpXG4gICAgICBjcmVhdGVHZXRTZXQodGhpcywgcHJvcHMsIGtleSwga2V5KVxuICAgIH0gXG4gIH1cblxuICBzZXRQcm9wKHByb3BzLCBrZXksIHZhbHVlKTogdm9pZCB7XG4gICAgcHJvcHNba2V5XSA9IHZhbHVlXG5cbiAgICBpZih0aGlzLnVwZGF0ZWRLZXlzKSB7XG4gICAgICB0aGlzLnVwZGF0ZWRLZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIGdldFByb3AocHJvcHMsIGtleSk6IGFueSB7XG4gICAgcmV0dXJuIHByb3BzW2tleV1cbiAgfVxufVxuIl19