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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGktZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2NsYXNzZXMvZW50aXR5L2pzb24tYXBpLWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFDTCxPQUFPLEVBQ1IsTUFBTSxXQUFXLENBQUE7QUFFbEIsT0FBTyxFQUNMLEtBQUssRUFDTCxxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLFFBQVEsR0FDVCxNQUFNLGFBQWEsQ0FBQTs7SUFrQlAsYUFBYTs7TUFBYixhQUFhOzs7OztJQWV4QixZQUNFLElBQXVCLEVBQ3ZCLFdBQTBCO1FBUjVCLGVBQVUsR0FBc0IsRUFBRSxDQUFBO1FBRWxDLHNCQUFpQixHQUFRLEVBQUUsQ0FBQTs7UUEyRTNCLGdCQUFXLEdBQWEsRUFBRSxDQUFBO1FBbkV4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQTtRQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsVUFBVTtZQUNiLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLG1CQUFLLElBQUksQ0FBQyxXQUFXLEVBQUEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN4QyxDQUFDOzs7O0lBRUQsTUFBTSxLQUFLLFNBQVM7UUFDbEIsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtTQUN2QjtRQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7U0FDeEI7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFBO0lBQzlCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFFBQWdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsQyxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBZ0IsRUFBRSxLQUFVO1FBQ2xDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7O1lBQ3hCLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDOzs7OztJQUVELElBQUksV0FBVyxDQUFDLE9BQXFCO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQVk7O1lBQ3JCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUNqQyxXQUFXLEVBQUU7YUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLE9BQU8sU0FBUyxLQUFLLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFJO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUNYLGdCQUE4QyxFQUM5QyxPQUF5QixFQUFFO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsVUFBZSxJQUFTLENBQUM7Ozs7SUFDMUMsZ0NBQWdDLEtBQVUsQ0FBQzs7Ozs7SUFDM0MsdUJBQXVCLENBQUMsS0FBVSxJQUFTLENBQUM7Ozs7Ozs7O0lBQzVDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQVcsRUFBRSxJQUFZLElBQVMsQ0FBQzs7Ozs7OztJQUM1RCxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQVEsQ0FBQzs7Ozs7OztJQUN4QyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQVMsQ0FBQzs7Ozs7O0lBQ25DLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFRLENBQUM7Ozs7OztJQUMzQixRQUFRLENBQUMsUUFBZ0IsRUFBRSxLQUFVLElBQVEsQ0FBQztDQUUvQyxDQUFBO0FBN0ZRLHdCQUFVLEdBQVcsRUFBRSxDQUFBO0FBQ3ZCLG9CQUFNLEdBQVEsRUFBRSxDQUFBO0FBQ2hCLCtCQUFpQixHQUFRLEVBQUUsQ0FBQTs7QUFMdkIsYUFBYTtJQUR6QixLQUFLLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQzs7R0FDOUMsYUFBYSxDQWdHekI7U0FoR1ksYUFBYTs7O0lBR3hCLHlCQUE4Qjs7SUFDOUIscUJBQXVCOztJQUN2QixnQ0FBa0M7O0lBRWxDLDJCQUFvQjs7SUFDcEIsNkJBQTBCOztJQUMxQixtQ0FBa0M7O0lBQ2xDLHNDQUFtQzs7SUFDbkMsMENBQTJCOzs7OztJQUUzQixxQ0FBa0M7O0lBeUVsQyxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgc2x1Z2lmeVxufSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIE1peGluLFxuICBBdHRyaWJ1dGVHZXR0ZXJTZXR0ZXIsXG4gIEF0dHJpYnV0ZVVwZGF0ZXIsXG4gIE1lbW9pemVyLFxufSBmcm9tICdAY2VvL3NoYXJlZCdcblxuXG5pbXBvcnQge1xuICBpRGF0YVNlcnZpY2UsXG4gIGlEYXRhU2VydmljZU9wdHMsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlBdHRyaWJ1dGVzLFxuICBpRW50aXR5Q29uZmlnLFxuICBpRW50aXR5UmVsYXRpb25zaGlwcyxcbiAgRW50aXR5RGF0YSxcbiAgRW50aXR5SWRlbnRpZmllcixcbiAgRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgRW50aXR5VHlwZUlkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbi8vIEBkeW5hbWljXG5ATWl4aW4oW0F0dHJpYnV0ZUdldHRlclNldHRlciwgQXR0cmlidXRlVXBkYXRlciwgTWVtb2l6ZXJdKVxuZXhwb3J0IGNsYXNzIEpzb25BcGlFbnRpdHkgaW1wbGVtZW50cyBpRW50aXR5LFxuICBBdHRyaWJ1dGVHZXR0ZXJTZXR0ZXIsIEF0dHJpYnV0ZVVwZGF0ZXIge1xuXG4gIHN0YXRpYyBfc2xpY2VOYW1lOiBzdHJpbmcgPSAnJ1xuICBzdGF0aWMgY29uZmlnOiBhbnkgPSB7fVxuICBzdGF0aWMgZGVmYXVsdEF0dHJpYnV0ZXM6IGFueSA9IHt9XG5cbiAgaWQ6IEVudGl0eUlkZW50aWZpZXJcbiAgdHlwZTogRW50aXR5VHlwZUlkZW50aWZpZXJcbiAgYXR0cmlidXRlczogaUVudGl0eUF0dHJpYnV0ZXMgPSB7fVxuICByZWxhdGlvbnNoaXBzOiBpRW50aXR5UmVsYXRpb25zaGlwc1xuICBkZWZhdWx0QXR0cmlidXRlczogYW55ID0ge31cblxuICBwcml2YXRlIF9kYXRhU2VydmljZTogaURhdGFTZXJ2aWNlXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGluaXQ/OiBQYXJ0aWFsPGlFbnRpdHk+LFxuICAgIGRhdGFTZXJ2aWNlPzogaURhdGFTZXJ2aWNlLFxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpXG4gICAgdGhpcy5fZGF0YVNlcnZpY2UgPSBkYXRhU2VydmljZVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcygpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYXR0cmlidXRlcyA9XG4gICAgICBfLmRlZmF1bHRzKHRoaXMuYXR0cmlidXRlcywgKDxhbnk+dGhpcy5jb25zdHJ1Y3RvcikuZGVmYXVsdEF0dHJpYnV0ZXMpXG4gICAgdGhpcy51cGRhdGVBdHRyaWJ1dGVzKHRoaXMuYXR0cmlidXRlcylcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc2xpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgaWYodGhpcy5fc2xpY2VOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2xpY2VOYW1lXG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5uYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZVxuICB9XG5cbiAgZ2V0QXR0cihhdHRyTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1thdHRyTmFtZV1cbiAgfVxuXG4gIHNldEF0dHIoYXR0ck5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGF0dHJOYW1lID0gc2x1Z2lmeShhdHRyTmFtZSlcbiAgICBsZXQgcHJvcCA9IHt9XG4gICAgcHJvcFthdHRyTmFtZV0gPSB2YWx1ZVxuICAgIHRoaXMudXBkYXRlQXR0cmlidXRlcyhwcm9wKVxuICB9XG5cbiAgZ2V0IGRhdGFTZXJ2aWNlKCk6IGlEYXRhU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTZXJ2aWNlXG4gIH1cblxuICBzZXQgZGF0YVNlcnZpY2Uoc2VydmljZTogaURhdGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UgPSBzZXJ2aWNlXG4gIH1cblxuICBuYW1lU3RhcnRzV2l0aChuYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbmFtZUluZGV4ID0gdGhpcy5nZXRBdHRyKCduYW1lJylcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAuaW5kZXhPZihuYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgcmV0dXJuIG5hbWVJbmRleCA9PT0gMFxuICB9XG5cbiAgZ2V0U2xpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVcbiAgfVxuXG4gIHJlbGF0aW9uc2hpcCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZV1cbiAgfVxuXG4gIHJlbGF0aW9uc2hpcCQoXG4gICAgcmVsYXRpb25zaGlwTmFtZTogRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge30sXG4gICk6IE9ic2VydmFibGU8RW50aXR5RGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnJlbGF0aW9uc2hpcCQodGhpcywgcmVsYXRpb25zaGlwTmFtZSwgb3B0cylcbiAgfVxuXG5cbiAgICBcbiAgLy8gTWl4aW4gbWV0aG9kc1xuICB1cGRhdGVkS2V5czogc3RyaW5nW10gPSBbXVxuICB1cGRhdGVBdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IGFueSk6IHZvaWQge31cbiAgY3JlYXRlQXR0cmlidXRlU2V0dGVyc0FuZEdldHRlcnMoKTogdm9pZCB7fVxuICBjcmVhdGVTZXR0ZXJzQW5kR2V0dGVycyhwcm9wczogYW55KTogdm9pZCB7fVxuICBjcmVhdGVHZXRTZXQob2JqLCBwcm9wcywga2V5OiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge31cbiAgZ2VuZXJhdGVHZXRTZXQocHJvcHMsIGtleSwgbmFtZSk6IGFueSB7fVxuICBzZXRQcm9wKHByb3BzLCBrZXksIHZhbHVlKTogdm9pZCB7fVxuICBnZXRQcm9wKHByb3BzLCBrZXkpOiBhbnkge31cbiAgbWVtb2l6ZWQocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7fVxuICBcbn1cbiJdfQ==