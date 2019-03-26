/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { slugify } from '@ceo/core';
import { Mixin, AttributeGetterSetter, AttributeUpdater, Memoizer, } from '@ceo/shared';
// @dynamic
let JsonApiEntity = 
// @dynamic
class JsonApiEntity {
    /**
     * @param {?=} init
     * @param {?=} dataService
     */
    constructor(init, dataService) {
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
    setAttributes() {
        this.attributes =
            _.defaults(this.attributes, ((/** @type {?} */ (this.constructor))).defaultAttributes);
        this.updateAttributes(this.attributes);
    }
    /**
     * @return {?}
     */
    static get sliceName() {
        if (this._sliceName) {
            return this._sliceName;
        }
        if (this.config) {
            return this.config.name;
        }
        return this.constructor.name;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    getAttr(attrName) {
        return this.attributes[attrName];
    }
    /**
     * @param {?} attrName
     * @param {?} value
     * @return {?}
     */
    setAttr(attrName, value) {
        attrName = slugify(attrName);
        /** @type {?} */
        let prop = {};
        prop[attrName] = value;
        this.updateAttributes(prop);
    }
    /**
     * @return {?}
     */
    get dataService() {
        return this._dataService;
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set dataService(service) {
        this._dataService = service;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    nameStartsWith(name) {
        /** @type {?} */
        let nameIndex = this.getAttr('name')
            .toLowerCase()
            .indexOf(name.toLowerCase());
        return nameIndex === 0;
    }
    /**
     * @return {?}
     */
    getSliceName() {
        return this.type;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    relationship(type) {
        return this[type];
    }
    /**
     * @param {?} relationshipName
     * @param {?=} opts
     * @return {?}
     */
    relationship$(relationshipName, opts = {}) {
        return this.dataService.relationship$(this, relationshipName, opts);
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    updateAttributes(attributes) { }
    /**
     * @return {?}
     */
    createAttributeSettersAndGetters() { }
    /**
     * @param {?} props
     * @return {?}
     */
    createSettersAndGetters(props) { }
    /**
     * @param {?} obj
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    createGetSet(obj, props, key, name) { }
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} name
     * @return {?}
     */
    generateGetSet(props, key, name) { }
    /**
     * @param {?} props
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setProp(props, key, value) { }
    /**
     * @param {?} props
     * @param {?} key
     * @return {?}
     */
    getProp(props, key) { }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    memoized(property, value) { }
};
JsonApiEntity._sliceName = '';
JsonApiEntity.config = {};
JsonApiEntity.defaultAttributes = {};
// @dynamic
JsonApiEntity = tslib_1.__decorate([
    Mixin([AttributeGetterSetter, AttributeUpdater, Memoizer]),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], JsonApiEntity);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGktZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9lbnRpdHkvanNvbi1hcGktZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFNM0IsT0FBTyxFQUNMLE9BQU8sRUFDUixNQUFNLFdBQVcsQ0FBQTtBQUVsQixPQUFPLEVBQ0wsS0FBSyxFQUNMLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIsUUFBUSxHQUNULE1BQU0sYUFBYSxDQUFBOztJQWtCUCxhQUFhOztNQUFiLGFBQWE7Ozs7O0lBZXhCLFlBQ0UsSUFBdUIsRUFDdkIsV0FBMEI7UUFSNUIsZUFBVSxHQUFzQixFQUFFLENBQUE7UUFFbEMsc0JBQWlCLEdBQVEsRUFBRSxDQUFBOztRQTJFM0IsZ0JBQVcsR0FBYSxFQUFFLENBQUE7UUFuRXhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFBO1FBQy9CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxVQUFVO1lBQ2IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsbUJBQUssSUFBSSxDQUFDLFdBQVcsRUFBQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFFRCxNQUFNLEtBQUssU0FBUztRQUNsQixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1NBQ3ZCO1FBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtTQUN4QjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUE7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBZ0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxRQUFnQixFQUFFLEtBQVU7UUFDbEMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7WUFDeEIsSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxXQUFXLENBQUMsT0FBcUI7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUE7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBWTs7WUFDckIsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ2pDLFdBQVcsRUFBRTthQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsT0FBTyxTQUFTLEtBQUssQ0FBQyxDQUFBO0lBQ3hCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQ1gsZ0JBQThDLEVBQzlDLE9BQXlCLEVBQUU7UUFFM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckUsQ0FBQzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxVQUFlLElBQVMsQ0FBQzs7OztJQUMxQyxnQ0FBZ0MsS0FBVSxDQUFDOzs7OztJQUMzQyx1QkFBdUIsQ0FBQyxLQUFVLElBQVMsQ0FBQzs7Ozs7Ozs7SUFDNUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBVyxFQUFFLElBQVksSUFBUyxDQUFDOzs7Ozs7O0lBQzVELGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBUSxDQUFDOzs7Ozs7O0lBQ3hDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBUyxDQUFDOzs7Ozs7SUFDbkMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQVEsQ0FBQzs7Ozs7O0lBQzNCLFFBQVEsQ0FBQyxRQUFnQixFQUFFLEtBQVUsSUFBUSxDQUFDO0NBRS9DLENBQUE7QUE3RlEsd0JBQVUsR0FBVyxFQUFFLENBQUE7QUFDdkIsb0JBQU0sR0FBUSxFQUFFLENBQUE7QUFDaEIsK0JBQWlCLEdBQVEsRUFBRSxDQUFBOztBQUx2QixhQUFhO0lBRHpCLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDOztHQUM5QyxhQUFhLENBZ0d6QjtTQWhHWSxhQUFhOzs7SUFHeEIseUJBQThCOztJQUM5QixxQkFBdUI7O0lBQ3ZCLGdDQUFrQzs7SUFFbEMsMkJBQW9COztJQUNwQiw2QkFBMEI7O0lBQzFCLG1DQUFrQzs7SUFDbEMsc0NBQW1DOztJQUNuQywwQ0FBMkI7Ozs7O0lBRTNCLHFDQUFrQzs7SUF5RWxDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBzbHVnaWZ5XG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgTWl4aW4sXG4gIEF0dHJpYnV0ZUdldHRlclNldHRlcixcbiAgQXR0cmlidXRlVXBkYXRlcixcbiAgTWVtb2l6ZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5cbmltcG9ydCB7XG4gIGlEYXRhU2VydmljZSxcbiAgaURhdGFTZXJ2aWNlT3B0cyxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUF0dHJpYnV0ZXMsXG4gIGlFbnRpdHlDb25maWcsXG4gIGlFbnRpdHlSZWxhdGlvbnNoaXBzLFxuICBFbnRpdHlEYXRhLFxuICBFbnRpdHlJZGVudGlmaWVyLFxuICBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICBFbnRpdHlUeXBlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuLy8gQGR5bmFtaWNcbkBNaXhpbihbQXR0cmlidXRlR2V0dGVyU2V0dGVyLCBBdHRyaWJ1dGVVcGRhdGVyLCBNZW1vaXplcl0pXG5leHBvcnQgY2xhc3MgSnNvbkFwaUVudGl0eSBpbXBsZW1lbnRzIGlFbnRpdHksXG4gIEF0dHJpYnV0ZUdldHRlclNldHRlciwgQXR0cmlidXRlVXBkYXRlciB7XG5cbiAgc3RhdGljIF9zbGljZU5hbWU6IHN0cmluZyA9ICcnXG4gIHN0YXRpYyBjb25maWc6IGFueSA9IHt9XG4gIHN0YXRpYyBkZWZhdWx0QXR0cmlidXRlczogYW55ID0ge31cblxuICBpZDogRW50aXR5SWRlbnRpZmllclxuICB0eXBlOiBFbnRpdHlUeXBlSWRlbnRpZmllclxuICBhdHRyaWJ1dGVzOiBpRW50aXR5QXR0cmlidXRlcyA9IHt9XG4gIHJlbGF0aW9uc2hpcHM6IGlFbnRpdHlSZWxhdGlvbnNoaXBzXG4gIGRlZmF1bHRBdHRyaWJ1dGVzOiBhbnkgPSB7fVxuXG4gIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBpRGF0YVNlcnZpY2VcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgaW5pdD86IFBhcnRpYWw8aUVudGl0eT4sXG4gICAgZGF0YVNlcnZpY2U/OiBpRGF0YVNlcnZpY2UsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdClcbiAgICB0aGlzLl9kYXRhU2VydmljZSA9IGRhdGFTZXJ2aWNlXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKClcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID1cbiAgICAgIF8uZGVmYXVsdHModGhpcy5hdHRyaWJ1dGVzLCAoPGFueT50aGlzLmNvbnN0cnVjdG9yKS5kZWZhdWx0QXR0cmlidXRlcylcbiAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZXModGhpcy5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgc3RhdGljIGdldCBzbGljZU5hbWUoKTogc3RyaW5nIHtcbiAgICBpZih0aGlzLl9zbGljZU5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zbGljZU5hbWVcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm5hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gIH1cblxuICBnZXRBdHRyKGF0dHJOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2F0dHJOYW1lXVxuICB9XG5cbiAgc2V0QXR0cihhdHRyTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgYXR0ck5hbWUgPSBzbHVnaWZ5KGF0dHJOYW1lKVxuICAgIGxldCBwcm9wID0ge31cbiAgICBwcm9wW2F0dHJOYW1lXSA9IHZhbHVlXG4gICAgdGhpcy51cGRhdGVBdHRyaWJ1dGVzKHByb3ApXG4gIH1cblxuICBnZXQgZGF0YVNlcnZpY2UoKTogaURhdGFTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNlcnZpY2VcbiAgfVxuXG4gIHNldCBkYXRhU2VydmljZShzZXJ2aWNlOiBpRGF0YVNlcnZpY2UpIHtcbiAgICB0aGlzLl9kYXRhU2VydmljZSA9IHNlcnZpY2VcbiAgfVxuXG4gIG5hbWVTdGFydHNXaXRoKG5hbWU6IHN0cmluZykge1xuICAgIGxldCBuYW1lSW5kZXggPSB0aGlzLmdldEF0dHIoJ25hbWUnKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5pbmRleE9mKG5hbWUudG9Mb3dlckNhc2UoKSlcbiAgICByZXR1cm4gbmFtZUluZGV4ID09PSAwXG4gIH1cblxuICBnZXRTbGljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVxuICB9XG5cbiAgcmVsYXRpb25zaGlwKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpc1t0eXBlXVxuICB9XG5cbiAgcmVsYXRpb25zaGlwJChcbiAgICByZWxhdGlvbnNoaXBOYW1lOiBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxFbnRpdHlEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UucmVsYXRpb25zaGlwJCh0aGlzLCByZWxhdGlvbnNoaXBOYW1lLCBvcHRzKVxuICB9XG5cblxuICAgIFxuICAvLyBNaXhpbiBtZXRob2RzXG4gIHVwZGF0ZWRLZXlzOiBzdHJpbmdbXSA9IFtdXG4gIHVwZGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KTogdm9pZCB7fVxuICBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzQW5kR2V0dGVycygpOiB2b2lkIHt9XG4gIGNyZWF0ZVNldHRlcnNBbmRHZXR0ZXJzKHByb3BzOiBhbnkpOiB2b2lkIHt9XG4gIGNyZWF0ZUdldFNldChvYmosIHByb3BzLCBrZXk6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7fVxuICBnZW5lcmF0ZUdldFNldChwcm9wcywga2V5LCBuYW1lKTogYW55IHt9XG4gIHNldFByb3AocHJvcHMsIGtleSwgdmFsdWUpOiB2b2lkIHt9XG4gIGdldFByb3AocHJvcHMsIGtleSk6IGFueSB7fVxuICBtZW1vaXplZChwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHt9XG4gIFxufVxuIl19