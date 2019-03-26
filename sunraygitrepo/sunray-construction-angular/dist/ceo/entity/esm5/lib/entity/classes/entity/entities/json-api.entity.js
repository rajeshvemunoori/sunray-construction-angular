/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { slugify, } from '@ceo/core';
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
    Object.defineProperty(JsonApiEntity.prototype, "isNew", {
        get: /**
         * @return {?}
         */
        function () {
            return !_.has(this, 'id');
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
     * @return {?}
     */
    JsonApiEntity.prototype.relationshipSize = /**
     * @param {?} relationshipName
     * @return {?}
     */
    function (relationshipName) {
        if (!this.hasRelationship(relationshipName)) {
            return 0;
        }
        /** @type {?} */
        var relationshipData = this.relationships[relationshipName].data;
        if (_.isArray(relationshipData)) {
            return relationshipData.length;
        }
        return 1;
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
     * @param {?=} opts
     * @return {?}
     */
    JsonApiEntity.prototype.save$ = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        /** @type {?} */
        var saveAction = this.isNew ? 'create$' : 'update$';
        return this.dataService[saveAction](this.toResourceIdentifier(), opts);
    };
    /**
     * @private
     * @return {?}
     */
    JsonApiEntity.prototype.toResourceIdentifier = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ri = (/** @type {?} */ (_.clone(_.pick(this, 'feature', 'type'))));
        ri.data = this.attributes;
        if (!this.isNew) {
            ri.id = this.id;
        }
        return ri;
    };
    /**
     * @private
     * @param {?} relationshipName
     * @return {?}
     */
    JsonApiEntity.prototype.hasRelationship = /**
     * @private
     * @param {?} relationshipName
     * @return {?}
     */
    function (relationshipName) {
        return (this.relationships &&
            this.relationships[relationshipName] &&
            this.relationships[relationshipName].data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1hcGkuZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2NsYXNzZXMvZW50aXR5L2VudGl0aWVzL2pzb24tYXBpLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBTTNCLE9BQU8sRUFDTCxPQUFPLEdBRVIsTUFBTSxXQUFXLENBQUE7QUFFbEIsT0FBTyxFQUNMLEtBQUssRUFDTCxxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLFFBQVEsR0FDVCxNQUFNLGFBQWEsQ0FBQTs7O0lBOENsQix1QkFDRSxJQUF1QixFQUN2QixXQUEwQjtRQVI1QixlQUFVLEdBQXNCLEVBQUUsQ0FBQTtRQUVsQyxzQkFBaUIsR0FBUSxFQUFFLENBQUE7O1FBMkczQixnQkFBVyxHQUFhLEVBQUUsQ0FBQTtRQW5HeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUE7UUFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUEzQkQsc0JBQVcsMEJBQVM7Ozs7UUFBcEI7WUFDRSxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTthQUN2QjtZQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO2FBQ3hCO1lBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtRQUM5QixDQUFDOzs7T0FBQTs7OztJQW1CRCxxQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsVUFBVTtZQUNiLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLG1CQUFLLElB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QkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQzs7T0FDOUMsYUFBYSxDQTJJekI7SUFBRCxvQkFBQztDQUFBLElBQUE7U0EzSVksYUFBYTs7O0lBR3hCLHlCQUE4Qjs7SUFDOUIscUJBQXVCOztJQUN2QixnQ0FBa0M7O0lBY2xDLDJCQUFvQjs7SUFDcEIsNkJBQTBCOztJQUMxQixtQ0FBa0M7O0lBQ2xDLHNDQUFtQzs7SUFDbkMsMENBQTJCOzs7OztJQUUzQixxQ0FBa0M7O0lBeUdsQyxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgc2x1Z2lmeSxcbiAgY2FtZWxDYXNlLFxufSBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIE1peGluLFxuICBBdHRyaWJ1dGVHZXR0ZXJTZXR0ZXIsXG4gIEF0dHJpYnV0ZVVwZGF0ZXIsXG4gIE1lbW9pemVyLFxufSBmcm9tICdAY2VvL3NoYXJlZCdcblxuXG5pbXBvcnQge1xuICBpRGF0YVNlcnZpY2UsXG4gIGlEYXRhU2VydmljZU9wdHMsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlBdHRyaWJ1dGVzLFxuICBpRW50aXR5Q29uZmlnLFxuICBpRW50aXR5UmVsYXRpb25zaGlwcyxcbiAgRW50aXR5RGF0YSxcbiAgRW50aXR5SWRlbnRpZmllcixcbiAgRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgRW50aXR5VHlwZUlkZW50aWZpZXIsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbi8vIEBkeW5hbWljXG5ATWl4aW4oW0F0dHJpYnV0ZUdldHRlclNldHRlciwgQXR0cmlidXRlVXBkYXRlciwgTWVtb2l6ZXJdKVxuZXhwb3J0IGNsYXNzIEpzb25BcGlFbnRpdHkgaW1wbGVtZW50cyBpRW50aXR5LFxuICBBdHRyaWJ1dGVHZXR0ZXJTZXR0ZXIsIEF0dHJpYnV0ZVVwZGF0ZXIge1xuXG4gIHN0YXRpYyBfc2xpY2VOYW1lOiBzdHJpbmcgPSAnJ1xuICBzdGF0aWMgY29uZmlnOiBhbnkgPSB7fVxuICBzdGF0aWMgZGVmYXVsdEF0dHJpYnV0ZXM6IGFueSA9IHt9XG5cbiAgc3RhdGljIGdldCBzbGljZU5hbWUoKTogc3RyaW5nIHtcbiAgICBpZih0aGlzLl9zbGljZU5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zbGljZU5hbWVcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm5hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gIH1cblxuICBpZDogRW50aXR5SWRlbnRpZmllclxuICB0eXBlOiBFbnRpdHlUeXBlSWRlbnRpZmllclxuICBhdHRyaWJ1dGVzOiBpRW50aXR5QXR0cmlidXRlcyA9IHt9XG4gIHJlbGF0aW9uc2hpcHM6IGlFbnRpdHlSZWxhdGlvbnNoaXBzXG4gIGRlZmF1bHRBdHRyaWJ1dGVzOiBhbnkgPSB7fVxuXG4gIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBpRGF0YVNlcnZpY2VcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgaW5pdD86IFBhcnRpYWw8aUVudGl0eT4sXG4gICAgZGF0YVNlcnZpY2U/OiBpRGF0YVNlcnZpY2UsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdClcbiAgICB0aGlzLl9kYXRhU2VydmljZSA9IGRhdGFTZXJ2aWNlXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKClcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID1cbiAgICAgIF8uZGVmYXVsdHModGhpcy5hdHRyaWJ1dGVzLCAoPGFueT50aGlzLmNvbnN0cnVjdG9yKS5kZWZhdWx0QXR0cmlidXRlcylcbiAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZXModGhpcy5hdHRyaWJ1dGVzKVxuICB9XG5cbiAgZ2V0QXR0cihhdHRyTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1thdHRyTmFtZV1cbiAgfVxuXG4gIHNldEF0dHIoYXR0ck5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGF0dHJOYW1lID0gc2x1Z2lmeShhdHRyTmFtZSlcbiAgICBsZXQgcHJvcCA9IHt9XG4gICAgcHJvcFthdHRyTmFtZV0gPSB2YWx1ZVxuICAgIHRoaXMudXBkYXRlQXR0cmlidXRlcyhwcm9wKVxuICB9XG5cbiAgZ2V0IGRhdGFTZXJ2aWNlKCk6IGlEYXRhU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTZXJ2aWNlXG4gIH1cblxuICBzZXQgZGF0YVNlcnZpY2Uoc2VydmljZTogaURhdGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UgPSBzZXJ2aWNlXG4gIH1cblxuICBnZXQgaXNOZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFfLmhhcyh0aGlzLCAnaWQnKVxuICB9XG5cbiAgbmFtZVN0YXJ0c1dpdGgobmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IG5hbWVJbmRleCA9IHRoaXMuZ2V0QXR0cignbmFtZScpXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLmluZGV4T2YobmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgIHJldHVybiBuYW1lSW5kZXggPT09IDBcbiAgfVxuXG4gIGdldFNsaWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlXG4gIH1cblxuICByZWxhdGlvbnNoaXAodHlwZSkge1xuICAgIHJldHVybiB0aGlzW3R5cGVdXG4gIH1cblxuICByZWxhdGlvbnNoaXBTaXplKFxuICAgIHJlbGF0aW9uc2hpcE5hbWU6IEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gICk6IG51bWJlciB7XG4gICAgaWYoIXRoaXMuaGFzUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcE5hbWUpKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCByZWxhdGlvbnNoaXBEYXRhID0gdGhpcy5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uc2hpcE5hbWVdLmRhdGFcbiAgICBpZihfLmlzQXJyYXkocmVsYXRpb25zaGlwRGF0YSkpIHtcbiAgICAgIHJldHVybiByZWxhdGlvbnNoaXBEYXRhLmxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiAxXG4gIH1cblxuICByZWxhdGlvbnNoaXAkKFxuICAgIHJlbGF0aW9uc2hpcE5hbWU6IEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG4gICAgb3B0czogaURhdGFTZXJ2aWNlT3B0cyA9IHt9LFxuICApOiBPYnNlcnZhYmxlPEVudGl0eURhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5yZWxhdGlvbnNoaXAkKHRoaXMsIHJlbGF0aW9uc2hpcE5hbWUsIG9wdHMpXG4gIH1cblxuICBzYXZlJChcbiAgICBvcHRzOiBpRGF0YVNlcnZpY2VPcHRzID0ge31cbiAgKTogT2JzZXJ2YWJsZTxpRW50aXR5PiB7XG4gICAgbGV0IHNhdmVBY3Rpb24gPSB0aGlzLmlzTmV3ID8gJ2NyZWF0ZSQnIDogJ3VwZGF0ZSQnXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2Vbc2F2ZUFjdGlvbl0odGhpcy50b1Jlc291cmNlSWRlbnRpZmllcigpLCBvcHRzKVxuICB9XG5cbiAgcHJpdmF0ZSB0b1Jlc291cmNlSWRlbnRpZmllcigpOiBhbnkge1xuICAgIGxldCByaSA9IF8uY2xvbmUoXy5waWNrKHRoaXMsICdmZWF0dXJlJywgJ3R5cGUnKSkgYXMgYW55XG4gICAgcmkuZGF0YSA9IHRoaXMuYXR0cmlidXRlc1xuICAgIGlmKCF0aGlzLmlzTmV3KSB7XG4gICAgICByaS5pZCA9IHRoaXMuaWRcbiAgICB9XG4gICAgcmV0dXJuIHJpXG4gIH1cblxuICBwcml2YXRlIGhhc1JlbGF0aW9uc2hpcChcbiAgICByZWxhdGlvbnNoaXBOYW1lOiBFbnRpdHlSZWxhdGlvbnNoaXBJZGVudGlmaWVyLFxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5yZWxhdGlvbnNoaXBzICYmXG4gICAgICB0aGlzLnJlbGF0aW9uc2hpcHNbcmVsYXRpb25zaGlwTmFtZV0gJiYgXG4gICAgICB0aGlzLnJlbGF0aW9uc2hpcHNbcmVsYXRpb25zaGlwTmFtZV0uZGF0YVxuICAgIClcbiAgfVxuXG5cbiAgLy8gTWl4aW4gbWV0aG9kc1xuICB1cGRhdGVkS2V5czogc3RyaW5nW10gPSBbXVxuICB1cGRhdGVBdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IGFueSk6IHZvaWQge31cbiAgY3JlYXRlQXR0cmlidXRlU2V0dGVyc0FuZEdldHRlcnMoKTogdm9pZCB7fVxuICBjcmVhdGVTZXR0ZXJzQW5kR2V0dGVycyhwcm9wczogYW55KTogdm9pZCB7fVxuICBjcmVhdGVHZXRTZXQob2JqLCBwcm9wcywga2V5OiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge31cbiAgZ2VuZXJhdGVHZXRTZXQocHJvcHMsIGtleSwgbmFtZSk6IGFueSB7fVxuICBzZXRQcm9wKHByb3BzLCBrZXksIHZhbHVlKTogdm9pZCB7fVxuICBnZXRQcm9wKHByb3BzLCBrZXkpOiBhbnkge31cbiAgbWVtb2l6ZWQocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7fVxufVxuIl19