/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var Helper = /** @class */ (function () {
    function Helper(source, target, propNames, bindToSource) {
        this.source = source;
        this.target = target;
        this.propNames = propNames;
        this.bindToSource = bindToSource;
    }
    /**
     * @return {?}
     */
    Helper.prototype.run = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var copyProperty = _.bind(this.copyProperty, this);
        _.map(this.propNames, copyProperty);
    };
    /**
     * @private
     * @param {?} propName
     * @return {?}
     */
    Helper.prototype.copyProperty = /**
     * @private
     * @param {?} propName
     * @return {?}
     */
    function (propName) {
        /** @type {?} */
        var sourceDescriptor = this.getDescriptor(this.source, propName);
        if (sourceDescriptor) {
            this.copyFromSource(propName, sourceDescriptor);
        }
        else {
            _.assignIn(this.target, _.pick(this.source, propName));
        }
    };
    /**
     * @private
     * @param {?} propName
     * @param {?} propDescriptor
     * @return {?}
     */
    Helper.prototype.copyFromSource = /**
     * @private
     * @param {?} propName
     * @param {?} propDescriptor
     * @return {?}
     */
    function (propName, propDescriptor) {
        var _this = this;
        if (this.bindToSource) {
            /** @type {?} */
            var valueWithBinding = function (value) {
                if (_.isFunction(value)) {
                    return _.bind(value, _this.source);
                }
                else {
                    return value;
                }
            };
            propDescriptor = _.mapValues(propDescriptor, valueWithBinding);
        }
        Object.defineProperty(this.target, propName, _.clone(propDescriptor));
    };
    /**
     * @private
     * @param {?} source
     * @param {?} propName
     * @return {?}
     */
    Helper.prototype.getDescriptor = /**
     * @private
     * @param {?} source
     * @param {?} propName
     * @return {?}
     */
    function (source, propName) {
        /** @type {?} */
        var descriptor = Object.getOwnPropertyDescriptor(source, propName);
        if (descriptor) {
            return descriptor;
        }
        else {
            /** @type {?} */
            var parentSource = Object.getPrototypeOf(source);
            if (parentSource) {
                return this.getDescriptor(parentSource, propName);
            }
            else {
                return null;
            }
        }
    };
    return Helper;
}());
export { Helper };
if (false) {
    /** @type {?} */
    Helper.prototype.source;
    /** @type {?} */
    Helper.prototype.target;
    /** @type {?} */
    Helper.prototype.propNames;
    /** @type {?} */
    Helper.prototype.bindToSource;
}
var PropertyDelegator = /** @class */ (function () {
    function PropertyDelegator() {
        this.delegatedProperties = {};
    }
    /**
     * @param {?} source
     * @param {?} propNames
     * @param {?=} bindToSource
     * @return {?}
     */
    PropertyDelegator.prototype.setDelegatedProperties = /**
     * @param {?} source
     * @param {?} propNames
     * @param {?=} bindToSource
     * @return {?}
     */
    function (source, propNames, bindToSource) {
        if (bindToSource === void 0) { bindToSource = true; }
        /** @type {?} */
        var helper = new Helper(source, this, propNames, bindToSource);
        helper.run();
    };
    /**
     * @return {?}
     */
    PropertyDelegator.prototype.setAllDelegatedProperties = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var setDelegatedProperties = function (propNames, sourceName) {
            /** @type {?} */
            var source = _this[sourceName];
            _this.setDelegatedProperties(source, propNames);
        };
        _.forEach(this.delegatedProperties, setDelegatedProperties);
    };
    return PropertyDelegator;
}());
export { PropertyDelegator };
if (false) {
    /** @type {?} */
    PropertyDelegator.prototype.delegatedProperties;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZGVsZWdhdG9yLm1peGluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL21peGlucy9wcm9wZXJ0eS1kZWxlZ2F0b3IubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCO0lBQ0UsZ0JBQ1MsTUFBVyxFQUNYLE1BQVcsRUFDWCxTQUFjLEVBQ2QsWUFBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUNYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFDWCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQVM7SUFDM0IsQ0FBQzs7OztJQUVKLG9CQUFHOzs7SUFBSDs7WUFDTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztRQUNsRCxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sNkJBQVk7Ozs7O0lBQXBCLFVBQXFCLFFBQVE7O1lBQ3ZCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7UUFFaEUsSUFBRyxnQkFBZ0IsRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1NBQ2hEO2FBQ0k7WUFDSCxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFFLENBQUE7U0FDeEQ7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sK0JBQWM7Ozs7OztJQUF0QixVQUF1QixRQUFRLEVBQUUsY0FBYztRQUEvQyxpQkFnQkM7UUFmQyxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7O2dCQUVoQixnQkFBZ0IsR0FBRyxVQUFDLEtBQUs7Z0JBQzNCLElBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7aUJBQ2xDO3FCQUNJO29CQUNILE9BQU8sS0FBSyxDQUFBO2lCQUNiO1lBQ0gsQ0FBQztZQUVELGNBQWMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1NBQy9EO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQzs7Ozs7OztJQUVPLDhCQUFhOzs7Ozs7SUFBckIsVUFBc0IsTUFBTSxFQUFFLFFBQVE7O1lBQ2hDLFVBQVUsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztRQUNsRSxJQUFHLFVBQVUsRUFBRTtZQUNiLE9BQU8sVUFBVSxDQUFBO1NBQ2xCO2FBQ0k7O2dCQUNDLFlBQVksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxJQUFHLFlBQVksRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQ2xEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFBO2FBQ1o7U0FDRjtJQUNILENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQzs7OztJQXRERyx3QkFBa0I7O0lBQ2xCLHdCQUFrQjs7SUFDbEIsMkJBQXFCOztJQUNyQiw4QkFBNEI7O0FBcURoQztJQUFBO1FBQ0Usd0JBQW1CLEdBQVEsRUFBRSxDQUFBO0lBbUIvQixDQUFDOzs7Ozs7O0lBakJDLGtEQUFzQjs7Ozs7O0lBQXRCLFVBQ0UsTUFBVyxFQUNYLFNBQW1CLEVBQ25CLFlBQTRCO1FBQTVCLDZCQUFBLEVBQUEsbUJBQTRCOztZQUd4QixNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDO1FBQzlELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNkLENBQUM7Ozs7SUFFRCxxREFBeUI7OztJQUF6QjtRQUFBLGlCQU1DOztZQUxLLHNCQUFzQixHQUFHLFVBQUMsU0FBUyxFQUFFLFVBQVU7O2dCQUM3QyxNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ2hELENBQUM7UUFDRCxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7Ozs7SUFuQkMsZ0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjbGFzcyBIZWxwZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc291cmNlOiBhbnksXG4gICAgcHVibGljIHRhcmdldDogYW55LFxuICAgIHB1YmxpYyBwcm9wTmFtZXM6IGFueSxcbiAgICBwdWJsaWMgYmluZFRvU291cmNlOiBib29sZWFuLFxuICApIHt9XG5cbiAgcnVuKCkge1xuICAgIGxldCBjb3B5UHJvcGVydHkgPSBfLmJpbmQodGhpcy5jb3B5UHJvcGVydHksIHRoaXMpXG4gICAgXy5tYXAodGhpcy5wcm9wTmFtZXMsIGNvcHlQcm9wZXJ0eSlcbiAgfVxuXG4gIHByaXZhdGUgY29weVByb3BlcnR5KHByb3BOYW1lKSB7XG4gICAgbGV0IHNvdXJjZURlc2NyaXB0b3IgPSB0aGlzLmdldERlc2NyaXB0b3IodGhpcy5zb3VyY2UsIHByb3BOYW1lKVxuXG4gICAgaWYoc291cmNlRGVzY3JpcHRvcikge1xuICAgICAgdGhpcy5jb3B5RnJvbVNvdXJjZShwcm9wTmFtZSwgc291cmNlRGVzY3JpcHRvcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBfLmFzc2lnbkluKHRoaXMudGFyZ2V0LCBfLnBpY2sodGhpcy5zb3VyY2UsIHByb3BOYW1lKSApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3B5RnJvbVNvdXJjZShwcm9wTmFtZSwgcHJvcERlc2NyaXB0b3IpIHtcbiAgICBpZih0aGlzLmJpbmRUb1NvdXJjZSkge1xuXG4gICAgICBsZXQgdmFsdWVXaXRoQmluZGluZyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZihfLmlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIF8uYmluZCh2YWx1ZSwgdGhpcy5zb3VyY2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvcERlc2NyaXB0b3IgPSBfLm1hcFZhbHVlcyhwcm9wRGVzY3JpcHRvciwgdmFsdWVXaXRoQmluZGluZylcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXQsIHByb3BOYW1lLCBfLmNsb25lKHByb3BEZXNjcmlwdG9yKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVzY3JpcHRvcihzb3VyY2UsIHByb3BOYW1lKSB7XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgcHJvcE5hbWUpXG4gICAgaWYoZGVzY3JpcHRvcikge1xuICAgICAgcmV0dXJuIGRlc2NyaXB0b3JcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcGFyZW50U291cmNlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSlcbiAgICAgIGlmKHBhcmVudFNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREZXNjcmlwdG9yKHBhcmVudFNvdXJjZSwgcHJvcE5hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlEZWxlZ2F0b3Ige1xuICBkZWxlZ2F0ZWRQcm9wZXJ0aWVzOiBhbnkgPSB7fVxuXG4gIHNldERlbGVnYXRlZFByb3BlcnRpZXMoXG4gICAgc291cmNlOiBhbnksXG4gICAgcHJvcE5hbWVzOiBzdHJpbmdbXSxcbiAgICBiaW5kVG9Tb3VyY2U6IGJvb2xlYW4gPSB0cnVlXG4gICk6IHZvaWQge1xuXG4gICAgbGV0IGhlbHBlciA9IG5ldyBIZWxwZXIoc291cmNlLCB0aGlzLCBwcm9wTmFtZXMsIGJpbmRUb1NvdXJjZSlcbiAgICBoZWxwZXIucnVuKClcbiAgfVxuXG4gIHNldEFsbERlbGVnYXRlZFByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHNldERlbGVnYXRlZFByb3BlcnRpZXMgPSAocHJvcE5hbWVzLCBzb3VyY2VOYW1lKSA9PiB7XG4gICAgICBsZXQgc291cmNlID0gdGhpc1tzb3VyY2VOYW1lXVxuICAgICAgdGhpcy5zZXREZWxlZ2F0ZWRQcm9wZXJ0aWVzKHNvdXJjZSwgcHJvcE5hbWVzKVxuICAgIH1cbiAgICBfLmZvckVhY2godGhpcy5kZWxlZ2F0ZWRQcm9wZXJ0aWVzLCBzZXREZWxlZ2F0ZWRQcm9wZXJ0aWVzKVxuICB9XG59XG4iXX0=