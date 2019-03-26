/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { slugify, } from '@ceo/core';
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
     * @return {?}
     */
    setAttributes() {
        this.attributes =
            _.defaults(this.attributes, ((/** @type {?} */ (this.constructor))).defaultAttributes);
        this.updateAttributes(this.attributes);
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
     * @return {?}
     */
    get isNew() {
        return !_.has(this, 'id');
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
     * @return {?}
     */
    relationshipSize(relationshipName) {
        if (!this.hasRelationship(relationshipName)) {
            return 0;
        }
        /** @type {?} */
        let relationshipData = this.relationships[relationshipName].data;
        if (_.isArray(relationshipData)) {
            return relationshipData.length;
        }
        return 1;
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
     * @param {?=} opts
     * @return {?}
     */
    save$(opts = {}) {
        /** @type {?} */
        let saveAction = this.isNew ? 'create$' : 'update$';
        return this.dataService[saveAction](this.toResourceIdentifier(), opts);
    }
    /**
     * @private
     * @return {?}
     */
    toResourceIdentifier() {
        /** @type {?} */
        let ri = (/** @type {?} */ (_.clone(_.pick(this, 'feature', 'type'))));
        ri.data = this.attributes;
        if (!this.isNew) {
            ri.id = this.id;
        }
        return ri;
    }
    /**
     * @private
     * @param {?} relationshipName
     * @return {?}
     */
    hasRelationship(relationshipName) {
        return (this.relationships &&
            this.relationships[relationshipName] &&
            this.relationships[relationshipName].data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGkuZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2NsYXNzZXMvZW50aXR5L2VudGl0aWVzL2pzb24tYXBpLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFDTCxPQUFPLEdBRVIsTUFBTSxXQUFXLENBQUE7QUFFbEIsT0FBTyxFQUNMLEtBQUssRUFDTCxxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLFFBQVEsR0FDVCxNQUFNLGFBQWEsQ0FBQTs7SUFtQlAsYUFBYTs7TUFBYixhQUFhOzs7OztJQTJCeEIsWUFDRSxJQUF1QixFQUN2QixXQUEwQjtRQVI1QixlQUFVLEdBQXNCLEVBQUUsQ0FBQTtRQUVsQyxzQkFBaUIsR0FBUSxFQUFFLENBQUE7O1FBMkczQixnQkFBVyxHQUFhLEVBQUUsQ0FBQTtRQW5HeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUE7UUFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7Ozs7SUEzQkQsTUFBTSxLQUFLLFNBQVM7UUFDbEIsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtTQUN2QjtRQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7U0FDeEI7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFBO0lBQzlCLENBQUM7Ozs7SUFtQkQsYUFBYTtRQUNYLElBQUksQ0FBQyxVQUFVO1lBQ2IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsbUJB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ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQge1xuICBzbHVnaWZ5LFxuICBjYW1lbENhc2UsXG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgTWl4aW4sXG4gIEF0dHJpYnV0ZUdldHRlclNldHRlcixcbiAgQXR0cmlidXRlVXBkYXRlcixcbiAgTWVtb2l6ZXIsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5cbmltcG9ydCB7XG4gIGlEYXRhU2VydmljZSxcbiAgaURhdGFTZXJ2aWNlT3B0cyxcbiAgaUVudGl0eSxcbiAgaUVudGl0eUF0dHJpYnV0ZXMsXG4gIGlFbnRpdHlDb25maWcsXG4gIGlFbnRpdHlSZWxhdGlvbnNoaXBzLFxuICBFbnRpdHlEYXRhLFxuICBFbnRpdHlJZGVudGlmaWVyLFxuICBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICBFbnRpdHlUeXBlSWRlbnRpZmllcixcbiAgaVJlc291cmNlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuLy8gQGR5bmFtaWNcbkBNaXhpbihbQXR0cmlidXRlR2V0dGVyU2V0dGVyLCBBdHRyaWJ1dGVVcGRhdGVyLCBNZW1vaXplcl0pXG5leHBvcnQgY2xhc3MgSnNvbkFwaUVudGl0eSBpbXBsZW1lbnRzIGlFbnRpdHksXG4gIEF0dHJpYnV0ZUdldHRlclNldHRlciwgQXR0cmlidXRlVXBkYXRlciB7XG5cbiAgc3RhdGljIF9zbGljZU5hbWU6IHN0cmluZyA9ICcnXG4gIHN0YXRpYyBjb25maWc6IGFueSA9IHt9XG4gIHN0YXRpYyBkZWZhdWx0QXR0cmlidXRlczogYW55ID0ge31cblxuICBzdGF0aWMgZ2V0IHNsaWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIGlmKHRoaXMuX3NsaWNlTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NsaWNlTmFtZVxuICAgIH1cblxuICAgIGlmKHRoaXMuY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcubmFtZVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgfVxuXG4gIGlkOiBFbnRpdHlJZGVudGlmaWVyXG4gIHR5cGU6IEVudGl0eVR5cGVJZGVudGlmaWVyXG4gIGF0dHJpYnV0ZXM6IGlFbnRpdHlBdHRyaWJ1dGVzID0ge31cbiAgcmVsYXRpb25zaGlwczogaUVudGl0eVJlbGF0aW9uc2hpcHNcbiAgZGVmYXVsdEF0dHJpYnV0ZXM6IGFueSA9IHt9XG5cbiAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IGlEYXRhU2VydmljZVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBpbml0PzogUGFydGlhbDxpRW50aXR5PixcbiAgICBkYXRhU2VydmljZT86IGlEYXRhU2VydmljZSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KVxuICAgIHRoaXMuX2RhdGFTZXJ2aWNlID0gZGF0YVNlcnZpY2VcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoKVxuICB9XG5cbiAgc2V0QXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPVxuICAgICAgXy5kZWZhdWx0cyh0aGlzLmF0dHJpYnV0ZXMsICg8YW55PnRoaXMuY29uc3RydWN0b3IpLmRlZmF1bHRBdHRyaWJ1dGVzKVxuICAgIHRoaXMudXBkYXRlQXR0cmlidXRlcyh0aGlzLmF0dHJpYnV0ZXMpXG4gIH1cblxuICBnZXRBdHRyKGF0dHJOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2F0dHJOYW1lXVxuICB9XG5cbiAgc2V0QXR0cihhdHRyTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgYXR0ck5hbWUgPSBzbHVnaWZ5KGF0dHJOYW1lKVxuICAgIGxldCBwcm9wID0ge31cbiAgICBwcm9wW2F0dHJOYW1lXSA9IHZhbHVlXG4gICAgdGhpcy51cGRhdGVBdHRyaWJ1dGVzKHByb3ApXG4gIH1cblxuICBnZXQgZGF0YVNlcnZpY2UoKTogaURhdGFTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNlcnZpY2VcbiAgfVxuXG4gIHNldCBkYXRhU2VydmljZShzZXJ2aWNlOiBpRGF0YVNlcnZpY2UpIHtcbiAgICB0aGlzLl9kYXRhU2VydmljZSA9IHNlcnZpY2VcbiAgfVxuXG4gIGdldCBpc05ldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIV8uaGFzKHRoaXMsICdpZCcpXG4gIH1cblxuICBuYW1lU3RhcnRzV2l0aChuYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbmFtZUluZGV4ID0gdGhpcy5nZXRBdHRyKCduYW1lJylcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAuaW5kZXhPZihuYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgcmV0dXJuIG5hbWVJbmRleCA9PT0gMFxuICB9XG5cbiAgZ2V0U2xpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVcbiAgfVxuXG4gIHJlbGF0aW9uc2hpcCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZV1cbiAgfVxuXG4gIHJlbGF0aW9uc2hpcFNpemUoXG4gICAgcmVsYXRpb25zaGlwTmFtZTogRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgKTogbnVtYmVyIHtcbiAgICBpZighdGhpcy5oYXNSZWxhdGlvbnNoaXAocmVsYXRpb25zaGlwTmFtZSkpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgbGV0IHJlbGF0aW9uc2hpcERhdGEgPSB0aGlzLnJlbGF0aW9uc2hpcHNbcmVsYXRpb25zaGlwTmFtZV0uZGF0YVxuICAgIGlmKF8uaXNBcnJheShyZWxhdGlvbnNoaXBEYXRhKSkge1xuICAgICAgcmV0dXJuIHJlbGF0aW9uc2hpcERhdGEubGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHJlbGF0aW9uc2hpcCQoXG4gICAgcmVsYXRpb25zaGlwTmFtZTogRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge30sXG4gICk6IE9ic2VydmFibGU8RW50aXR5RGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnJlbGF0aW9uc2hpcCQodGhpcywgcmVsYXRpb25zaGlwTmFtZSwgb3B0cylcbiAgfVxuXG4gIHNhdmUkKFxuICAgIG9wdHM6IGlEYXRhU2VydmljZU9wdHMgPSB7fVxuICApOiBPYnNlcnZhYmxlPGlFbnRpdHk+IHtcbiAgICBsZXQgc2F2ZUFjdGlvbiA9IHRoaXMuaXNOZXcgPyAnY3JlYXRlJCcgOiAndXBkYXRlJCdcbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZVtzYXZlQWN0aW9uXSh0aGlzLnRvUmVzb3VyY2VJZGVudGlmaWVyKCksIG9wdHMpXG4gIH1cblxuICBwcml2YXRlIHRvUmVzb3VyY2VJZGVudGlmaWVyKCk6IGFueSB7XG4gICAgbGV0IHJpID0gXy5jbG9uZShfLnBpY2sodGhpcywgJ2ZlYXR1cmUnLCAndHlwZScpKSBhcyBhbnlcbiAgICByaS5kYXRhID0gdGhpcy5hdHRyaWJ1dGVzXG4gICAgaWYoIXRoaXMuaXNOZXcpIHtcbiAgICAgIHJpLmlkID0gdGhpcy5pZFxuICAgIH1cbiAgICByZXR1cm4gcmlcbiAgfVxuXG4gIHByaXZhdGUgaGFzUmVsYXRpb25zaGlwKFxuICAgIHJlbGF0aW9uc2hpcE5hbWU6IEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJlbGF0aW9uc2hpcHMgJiZcbiAgICAgIHRoaXMucmVsYXRpb25zaGlwc1tyZWxhdGlvbnNoaXBOYW1lXSAmJiBcbiAgICAgIHRoaXMucmVsYXRpb25zaGlwc1tyZWxhdGlvbnNoaXBOYW1lXS5kYXRhXG4gICAgKVxuICB9XG5cblxuICAvLyBNaXhpbiBtZXRob2RzXG4gIHVwZGF0ZWRLZXlzOiBzdHJpbmdbXSA9IFtdXG4gIHVwZGF0ZUF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KTogdm9pZCB7fVxuICBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzQW5kR2V0dGVycygpOiB2b2lkIHt9XG4gIGNyZWF0ZVNldHRlcnNBbmRHZXR0ZXJzKHByb3BzOiBhbnkpOiB2b2lkIHt9XG4gIGNyZWF0ZUdldFNldChvYmosIHByb3BzLCBrZXk6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7fVxuICBnZW5lcmF0ZUdldFNldChwcm9wcywga2V5LCBuYW1lKTogYW55IHt9XG4gIHNldFByb3AocHJvcHMsIGtleSwgdmFsdWUpOiB2b2lkIHt9XG4gIGdldFByb3AocHJvcHMsIGtleSk6IGFueSB7fVxuICBtZW1vaXplZChwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHt9XG59XG4iXX0=