/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { slugify } from '@ceo/core';
import { Mixin, AttributeGetterSetter, AttributeUpdater, Memoizer, } from '@ceo/shared';
// @dynamic
var JsonApiEntity = /** @class */ (function () {
    function JsonApiEntity(init, dataService) {
        this.attributes = {};
        this.defaultAttributes = {};
        // Mixin methods
        this.updatedKeys = [];
        Object.assign(this, init);
        this._dataService = dataService;
        this.setAttributes();
    }
    /**
     * @return {?}
     */
    JsonApiEntity.prototype.setAttributes = /**
     * @return {?}
     */
    function () {
        this.attributes =
            _.defaults(this.attributes, ((/** @type {?} */ (this.constructor))).defaultAttributes);
        this.updateAttributes(this.attributes);
    };
    Object.defineProperty(JsonApiEntity, "sliceName", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._sliceName) {
                return this._sliceName;
            }
            if (this.config) {
                return this.config.name;
            }
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} attrName
     * @return {?}
     */
    JsonApiEntity.prototype.getAttr = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        return this.attributes[attrName];
    };
    /**
     * @param {?} attrName
     * @param {?} value
     * @return {?}
     */
    JsonApiEntity.prototype.setAttr = /**
     * @param {?} attrName
     * @param {?} value
     * @return {?}
     */
    function (attrName, value) {
        attrName = slugify(attrName);
        /** @type {?} */
        var prop = {};
        prop[attrName] = value;
        this.updateAttributes(prop);
    };
    Object.defineProperty(JsonApiEntity.prototype, "dataService", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataService;
        },
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            this._dataService = service;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @return {?}
     */
    JsonApiEntity.prototype.nameStartsWith = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var nameIndex = this.getAttr('name')
            .toLowerCase()
            .indexOf(name.toLowerCase());
        return nameIndex === 0;
    };
    /**
     * @return {?}
     */
    JsonApiEntity.prototype.getSliceName = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    JsonApiEntity.prototype.relationship = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this[type];
    };
    /**
     * @param {?} relationshipName
     * @param {?=} opts
     * @return {?}
     */
    JsonApiEntity.prototype.relationship$ = /**
     * @param {?} relationshipName
     * @param {?=} opts
     * @return {?}
     */
    function (relationshipName, opts) {
        if (opts === void 0) { opts = {}; }
        return this.dataService.relationship$(this, relationshipName, opts);
    };
    /**
     * @param {?} attributes
     * @return {?}
     */
    JsonApiEntity.prototype.updateAttributes = /**
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) { };
    /**
     * @return {?}
     */
    JsonApiEntity.prototype.createAttributeSettersAndGetters = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} props
     * @return {?}
     */
    JsonApiEntity.prototype.createSettersAndGetters = /**
     * @param {?} props
     * @return {?}
     */
    function (props) { };
    /**
     * @param {?} obj
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    JsonApiEntity.prototype.createGetSet = /**
     * @param {?} obj
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    function (obj, props, key, name) { };
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    JsonApiEntity.prototype.generateGetSet = /**
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    function (props, key, name) { };
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    JsonApiEntity.prototype.setProp = /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (props, key, value) { };
    /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    JsonApiEntity.prototype.getProp = /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    function (props, key) { };
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    JsonApiEntity.prototype.memoized = /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) { };
    JsonApiEntity._sliceName = '';
    JsonApiEntity.config = {};
    JsonApiEntity.defaultAttributes = {};
    // @dynamic
    JsonApiEntity = tslib_1.__decorate([
        Mixin([AttributeGetterSetter, AttributeUpdater, Memoizer]),
        tslib_1.__metadata("design:paramtypes", [Object, Object])
    ], JsonApiEntity);
    return JsonApiEntity;
}());
export { JsonApiEntity };
if (false) {
    /** @type {?} */
    JsonApiEntity._sliceName;
    /** @type {?} */
    JsonApiEntity.config;
    /** @type {?} */
    JsonApiEntity.defaultAttributes;
    /** @type {?} */
    JsonApiEntity.prototype.id;
    /** @type {?} */
    JsonApiEntity.prototype.type;
    /** @type {?} */
    JsonApiEntity.prototype.attributes;
    /** @type {?} */
    JsonApiEntity.prototype.relationships;
    /** @type {?} */
    JsonApiEntity.prototype.defaultAttributes;
    /**
     * @type {?}
     * @private
     */
    JsonApiEntity.prototype._dataService;
    /** @type {?} */
    JsonApiEntity.prototype.updatedKeys;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGktZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9lbnRpdHkvanNvbi1hcGktZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFNM0IsT0FBTyxFQUNMLE9BQU8sRUFDUixNQUFNLFdBQVcsQ0FBQTtBQUVsQixPQUFPLEVBQ0wsS0FBSyxFQUNMLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIsUUFBUSxHQUNULE1BQU0sYUFBYSxDQUFBOzs7SUFpQ2xCLHVCQUNFLElBQXVCLEVBQ3ZCLFdBQTBCO1FBUjVCLGVBQVUsR0FBc0IsRUFBRSxDQUFBO1FBRWxDLHNCQUFpQixHQUFRLEVBQUUsQ0FBQTs7UUEyRTNCLGdCQUFXLEdBQWEsRUFBRSxDQUFBO1FBbkV4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQTtRQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7OztJQUVELHFDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxVQUFVO1lBQ2IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsbUJBQUssSUFBSSxDQUFDLFdBQVcsRUFBQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCxzQkFBVywwQkFBUzs7OztRQUFwQjtZQUNFLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO2FBQ3ZCO1lBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLE9BQU8sSUFB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SUF5RWxDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBzbHVnaWZ5XG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgTWl4aW4sXG4gIEF0dHJpYnV0ZUdldHRlclNldHRlcixcbiAgQXR0cmlidXRlVXBkYXRlcixcbiAgTWVtb2l6ZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5cbmltcG9ydCB7XG4gIGlEYXRhU2VydmljZSxcbiAgaURhdGFTZXJ2aWNlT3B0cyxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUF0dHJpYnV0ZXMsXG4gIGlFbnRpdHlDb25maWcsXG4gIGlFbnRpdHlSZWxhdGlvbnNoaXBzLFxuICBFbnRpdHlEYXRhLFxuICBFbnRpdHlJZGVudGlmaWVyLFxuICBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICBFbnRpdHlUeXBlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuLy8gQGR5bmFtaWNcbkBNaXhpbihbQXR0cmlidXRlR2V0dGVyU2V0dGVyLCBBdHRyaWJ1dGVVcGRhdGVyLCBNZW1vaXplcl0pXG5leHBvcnQgY2xhc3MgSnNvbkFwaUVudGl0eSBpbXBsZW1lbnRzIGlFbnRpdHksXG4gIEF0dHJpYnV0ZUdldHRlclNldHRlciwgQXR0cmlidXRlVXBkYXRlciB7XG5cbiAgc3RhdGljIF9zbGljZU5hbWU6IHN0cmluZyA9ICcnXG4gIHN0YXRpYyBjb25maWc6IGFueSA9IHt9XG4gIHN0YXRpYyBkZWZhdWx0QXR0cmlidXRlczogYW55ID0ge31cblxuICBpZDogRW50aXR5SWRlbnRpZmllclxuICB0eXBlOiBFbnRpdHlUeXBlSWRlbnRpZmllclxuICBhdHRyaWJ1dGVzOiBpRW50aXR5QXR0cmlidXRlcyA9IHt9XG4gIHJlbGF0aW9uc2hpcHM6IGlFbnRpdHlSZWxhdGlvbnNoaXBzXG4gIGRlZmF1bHRBdHRyaWJ1dGVzOiBhbnkgPSB7fVxuXG4gIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBpRGF0YVNlcnZpY2VcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgaW5pdD86IFBhcnRpYWw8aUVudGl0eT4sXG4gICAgZGF0YVNlcnZpY2U/OiBpRGF0YVNlcnZpY2UsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdClcbiAgICB0aGlzLl9kYXRhU2VydmljZSA9IGRhdGFTZXJ2aWNlXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKClcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID1cbiAgICAgIF8uZGVmYXVsdHModGhpcy5hdHRyaWJ1dGVzLCAoPGFueT50aGlzLmNvbnN0cnVjdG9yKS5kZWZhdWx0QXR0cmlidXRlcylcbiAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZXModGhpcy5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgc3RhdGljIGdldCBzbGljZU5hbWUoKTogc3RyaW5nIHtcbiAgICBpZih0aGlzLl9zbGljZU5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zbGljZU5hbWVcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm5hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gIH1cblxuICBnZXRBdHRyKGF0dHJOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2F0dHJOYW1lXVxuICB9XG5cbiAgc2V0QXR0cihhdHRyTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgYXR0ck5hbWUgPSBzbHVnaWZ5KGF0dHJOYW1lKVxuICAgIGxldCBwcm9wID0ge31cbiAgICBwcm9wW2F0dHJOYW1lXSA9IHZhbHVlXG4gICAgdGhpcy51cGRhdGVBdHRyaWJ1dGVzKHByb3ApXG4gIH1cblxuICBnZXQgZGF0YVNlcnZpY2UoKTogaURhdGFTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNlcnZpY2VcbiAgfVxuXG4gIHNldCBkYXRhU2VydmljZShzZXJ2aWNlOiBpRGF0YVNlcnZpY2UpIHtcbiAgICB0aGlzLl9kYXRhU2VydmljZSA9IHNlcnZpY2VcbiAgfVxuXG4gIG5hbWVTdGFydHNXaXRoKG5hbWU6IHN0cmluZykge1xuICAgIGxldCBuYW1lSW5kZXggPSB0aGlzLmdldEF0dHIoJ25hbWUnKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5pbmRleE9mKG5hbWUudG9Mb3dlckNhc2UoKSlcbiAgICByZXR1cm4gbmFtZUluZGV4ID09PSAwXG4gIH1cblxuICBnZXRTbGljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVxuICB9XG5cbiAgcmVsYXRpb25zaGlwKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpc1t0eXBlXVxuICB9XG5cbiAgcmVsYXRpb25zaGlwJChcbiAgICByZWxhdGlvbnNoaXBOYW1lOiBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UucmVsYXRpb25zaGlwJCh0aGlzLCByZWxhdGlvbnNoaXBOYW1lLCBvcHRzKVxuICB9XG5cblxuICAgIFxuICAvLyBNaXhpbiBtZXRob2RzXG4gIHVwZGF0ZWRLZXlzOiBzdHJpbmdbXSA9IFtdXG4gIHVwZGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KTogdm9pZCB7fVxuICBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzQW5kR2V0dGVycygpOiB2b2lkIHt9XG4gIGNyZWF0ZVNldHRlcnNBbmRHZXR0ZXJzKHByb3BzOiBhbnkpOiB2b2lkIHt9XG4gIGNyZWF0ZUdldFNldChvYmosIHByb3BzLCBrZXk6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7fVxuICBnZW5lcmF0ZUdldFNldChwcm9wcywga2V5LCBuYW1lKTogYW55IHt9XG4gIHNldFByb3AocHJvcHMsIGtleSwgdmFsdWUpOiB2b2lkIHt9XG4gIGdldFByb3AocHJvcHMsIGtleSk6IGFueSB7fVxuICBtZW1vaXplZChwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHt9XG4gIFxufVxuIl19