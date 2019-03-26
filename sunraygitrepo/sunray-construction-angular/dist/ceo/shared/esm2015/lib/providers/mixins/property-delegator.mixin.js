/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class Helper {
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} propNames
     * @param {?} bindToSource
     */
    constructor(source, target, propNames, bindToSource) {
        this.source = source;
        this.target = target;
        this.propNames = propNames;
        this.bindToSource = bindToSource;
    }
    /**
     * @return {?}
     */
    run() {
        /** @type {?} */
        let copyProperty = _.bind(this.copyProperty, this);
        _.map(this.propNames, copyProperty);
    }
    /**
     * @private
     * @param {?} propName
     * @return {?}
     */
    copyProperty(propName) {
        /** @type {?} */
        let sourceDescriptor = this.getDescriptor(this.source, propName);
        if (sourceDescriptor) {
            this.copyFromSource(propName, sourceDescriptor);
        }
        else {
            _.assignIn(this.target, _.pick(this.source, propName));
        }
    }
    /**
     * @private
     * @param {?} propName
     * @param {?} propDescriptor
     * @return {?}
     */
    copyFromSource(propName, propDescriptor) {
        if (this.bindToSource) {
            /** @type {?} */
            let valueWithBinding = (value) => {
                if (_.isFunction(value)) {
                    return _.bind(value, this.source);
                }
                else {
                    return value;
                }
            };
            propDescriptor = _.mapValues(propDescriptor, valueWithBinding);
        }
        Object.defineProperty(this.target, propName, _.clone(propDescriptor));
    }
    /**
     * @private
     * @param {?} source
     * @param {?} propName
     * @return {?}
     */
    getDescriptor(source, propName) {
        /** @type {?} */
        let descriptor = Object.getOwnPropertyDescriptor(source, propName);
        if (descriptor) {
            return descriptor;
        }
        else {
            /** @type {?} */
            let parentSource = Object.getPrototypeOf(source);
            if (parentSource) {
                return this.getDescriptor(parentSource, propName);
            }
            else {
                return null;
            }
        }
    }
}
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
export class PropertyDelegator {
    constructor() {
        this.delegatedProperties = {};
    }
    /**
     * @param {?} source
     * @param {?} propNames
     * @param {?=} bindToSource
     * @return {?}
     */
    setDelegatedProperties(source, propNames, bindToSource = true) {
        /** @type {?} */
        let helper = new Helper(source, this, propNames, bindToSource);
        helper.run();
    }
    /**
     * @return {?}
     */
    setAllDelegatedProperties() {
        /** @type {?} */
        let setDelegatedProperties = (propNames, sourceName) => {
            /** @type {?} */
            let source = this[sourceName];
            this.setDelegatedProperties(source, propNames);
        };
        _.forEach(this.delegatedProperties, setDelegatedProperties);
    }
}
if (false) {
    /** @type {?} */
    PropertyDelegator.prototype.delegatedProperties;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZGVsZWdhdG9yLm1peGluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL21peGlucy9wcm9wZXJ0eS1kZWxlZ2F0b3IubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE1BQU0sT0FBTyxNQUFNOzs7Ozs7O0lBQ2pCLFlBQ1MsTUFBVyxFQUNYLE1BQVcsRUFDWCxTQUFjLEVBQ2QsWUFBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUNYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFDWCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQVM7SUFDM0IsQ0FBQzs7OztJQUVKLEdBQUc7O1lBQ0csWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7UUFDbEQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ3JDLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxRQUFROztZQUN2QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1FBRWhFLElBQUcsZ0JBQWdCLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtTQUNoRDthQUNJO1lBQ0gsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBRSxDQUFBO1NBQ3hEO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYztRQUM3QyxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7O2dCQUVoQixnQkFBZ0IsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMvQixJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNsQztxQkFDSTtvQkFDSCxPQUFPLEtBQUssQ0FBQTtpQkFDYjtZQUNILENBQUM7WUFFRCxjQUFjLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtTQUMvRDtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7Ozs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVE7O1lBQ2hDLFVBQVUsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztRQUNsRSxJQUFHLFVBQVUsRUFBRTtZQUNiLE9BQU8sVUFBVSxDQUFBO1NBQ2xCO2FBQ0k7O2dCQUNDLFlBQVksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxJQUFHLFlBQVksRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQ2xEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFBO2FBQ1o7U0FDRjtJQUNILENBQUM7Q0FDRjs7O0lBdERHLHdCQUFrQjs7SUFDbEIsd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLDhCQUE0Qjs7QUFxRGhDLE1BQU0sT0FBTyxpQkFBaUI7SUFBOUI7UUFDRSx3QkFBbUIsR0FBUSxFQUFFLENBQUE7SUFtQi9CLENBQUM7Ozs7Ozs7SUFqQkMsc0JBQXNCLENBQ3BCLE1BQVcsRUFDWCxTQUFtQixFQUNuQixlQUF3QixJQUFJOztZQUd4QixNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDO1FBQzlELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNkLENBQUM7Ozs7SUFFRCx5QkFBeUI7O1lBQ25CLHNCQUFzQixHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFOztnQkFDakQsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUNoRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0NBQ0Y7OztJQW5CQyxnREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNsYXNzIEhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzb3VyY2U6IGFueSxcbiAgICBwdWJsaWMgdGFyZ2V0OiBhbnksXG4gICAgcHVibGljIHByb3BOYW1lczogYW55LFxuICAgIHB1YmxpYyBiaW5kVG9Tb3VyY2U6IGJvb2xlYW4sXG4gICkge31cblxuICBydW4oKSB7XG4gICAgbGV0IGNvcHlQcm9wZXJ0eSA9IF8uYmluZCh0aGlzLmNvcHlQcm9wZXJ0eSwgdGhpcylcbiAgICBfLm1hcCh0aGlzLnByb3BOYW1lcywgY29weVByb3BlcnR5KVxuICB9XG5cbiAgcHJpdmF0ZSBjb3B5UHJvcGVydHkocHJvcE5hbWUpIHtcbiAgICBsZXQgc291cmNlRGVzY3JpcHRvciA9IHRoaXMuZ2V0RGVzY3JpcHRvcih0aGlzLnNvdXJjZSwgcHJvcE5hbWUpXG5cbiAgICBpZihzb3VyY2VEZXNjcmlwdG9yKSB7XG4gICAgICB0aGlzLmNvcHlGcm9tU291cmNlKHByb3BOYW1lLCBzb3VyY2VEZXNjcmlwdG9yKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIF8uYXNzaWduSW4odGhpcy50YXJnZXQsIF8ucGljayh0aGlzLnNvdXJjZSwgcHJvcE5hbWUpIClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvcHlGcm9tU291cmNlKHByb3BOYW1lLCBwcm9wRGVzY3JpcHRvcikge1xuICAgIGlmKHRoaXMuYmluZFRvU291cmNlKSB7XG5cbiAgICAgIGxldCB2YWx1ZVdpdGhCaW5kaW5nID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gXy5iaW5kKHZhbHVlLCB0aGlzLnNvdXJjZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9wRGVzY3JpcHRvciA9IF8ubWFwVmFsdWVzKHByb3BEZXNjcmlwdG9yLCB2YWx1ZVdpdGhCaW5kaW5nKVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldCwgcHJvcE5hbWUsIF8uY2xvbmUocHJvcERlc2NyaXB0b3IpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREZXNjcmlwdG9yKHNvdXJjZSwgcHJvcE5hbWUpIHtcbiAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBwcm9wTmFtZSlcbiAgICBpZihkZXNjcmlwdG9yKSB7XG4gICAgICByZXR1cm4gZGVzY3JpcHRvclxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBwYXJlbnRTb3VyY2UgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKVxuICAgICAgaWYocGFyZW50U291cmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERlc2NyaXB0b3IocGFyZW50U291cmNlLCBwcm9wTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eURlbGVnYXRvciB7XG4gIGRlbGVnYXRlZFByb3BlcnRpZXM6IGFueSA9IHt9XG5cbiAgc2V0RGVsZWdhdGVkUHJvcGVydGllcyhcbiAgICBzb3VyY2U6IGFueSxcbiAgICBwcm9wTmFtZXM6IHN0cmluZ1tdLFxuICAgIGJpbmRUb1NvdXJjZTogYm9vbGVhbiA9IHRydWVcbiAgKTogdm9pZCB7XG5cbiAgICBsZXQgaGVscGVyID0gbmV3IEhlbHBlcihzb3VyY2UsIHRoaXMsIHByb3BOYW1lcywgYmluZFRvU291cmNlKVxuICAgIGhlbHBlci5ydW4oKVxuICB9XG5cbiAgc2V0QWxsRGVsZWdhdGVkUHJvcGVydGllcygpIHtcbiAgICBsZXQgc2V0RGVsZWdhdGVkUHJvcGVydGllcyA9IChwcm9wTmFtZXMsIHNvdXJjZU5hbWUpID0+IHtcbiAgICAgIGxldCBzb3VyY2UgPSB0aGlzW3NvdXJjZU5hbWVdXG4gICAgICB0aGlzLnNldERlbGVnYXRlZFByb3BlcnRpZXMoc291cmNlLCBwcm9wTmFtZXMpXG4gICAgfVxuICAgIF8uZm9yRWFjaCh0aGlzLmRlbGVnYXRlZFByb3BlcnRpZXMsIHNldERlbGVnYXRlZFByb3BlcnRpZXMpXG4gIH1cbn1cbiJdfQ==