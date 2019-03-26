/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { InflectionService, } from '@ceo/core';
import * as i0 from "@angular/core";
import * as i1 from "@ceo/core";
var ResourceIdentifierService = /** @class */ (function () {
    function ResourceIdentifierService(inflectionService) {
        this.inflectionService = inflectionService;
    }
    /**
     * @param {?} ri
     * @return {?}
     */
    ResourceIdentifierService.prototype.isValid = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.has(ri, 'feature') && _.has(ri, 'type');
    };
    /**
     * @param {?} ri
     * @return {?}
     */
    ResourceIdentifierService.prototype.isScope = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        return _.has(ri, 'filter.scope');
    };
    /**
     * @param {?} riOne
     * @param {?} riTwo
     * @return {?}
     */
    ResourceIdentifierService.prototype.isSameResource = /**
     * @param {?} riOne
     * @param {?} riTwo
     * @return {?}
     */
    function (riOne, riTwo) {
        return _.isEqual(riOne, riTwo);
    };
    /**
     * @param {?} ri
     * @return {?}
     */
    ResourceIdentifierService.prototype.scopeName = /**
     * @param {?} ri
     * @return {?}
     */
    function (ri) {
        /** @type {?} */
        var scopeKey = _.get(ri, 'filter.scope');
        return this.inflectionService.camelCase(scopeKey);
    };
    ResourceIdentifierService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ResourceIdentifierService.ctorParameters = function () { return [
        { type: InflectionService }
    ]; };
    /** @nocollapse */ ResourceIdentifierService.ngInjectableDef = i0.defineInjectable({ factory: function ResourceIdentifierService_Factory() { return new ResourceIdentifierService(i0.inject(i1.InflectionService)); }, token: ResourceIdentifierService, providedIn: "root" });
    return ResourceIdentifierService;
}());
export { ResourceIdentifierService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResourceIdentifierService.prototype.inflectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtaWRlbnRpZmllci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L3NlcnZpY2VzL3Jlc291cmNlLWlkZW50aWZpZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFM0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQVEsV0FBVyxDQUFBOzs7QUFNcEI7SUFJRSxtQ0FDVSxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUMzQyxDQUFDOzs7OztJQUVKLDJDQUFPOzs7O0lBQVAsVUFBUSxFQUF1QjtRQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ2xELENBQUM7Ozs7O0lBRUQsMkNBQU87Ozs7SUFBUCxVQUFRLEVBQXVCO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsa0RBQWM7Ozs7O0lBQWQsVUFDRSxLQUEwQixFQUMxQixLQUEwQjtRQUUxQixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsNkNBQVM7Ozs7SUFBVCxVQUFVLEVBQXVCOztZQUMzQixRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNuRCxDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUQyxpQkFBaUI7OztvQ0FMbkI7Q0F1Q0MsQUEzQkQsSUEyQkM7U0F4QlkseUJBQXlCOzs7Ozs7SUFFbEMsc0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBJbmZsZWN0aW9uU2VydmljZSxcbn0gICBmcm9tICdAY2VvL2NvcmUnXG5cbmltcG9ydCB7XG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlSWRlbnRpZmllclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluZmxlY3Rpb25TZXJ2aWNlOiBJbmZsZWN0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGlzVmFsaWQocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdmZWF0dXJlJykgJiYgXy5oYXMocmksICd0eXBlJylcbiAgfVxuXG4gIGlzU2NvcGUocmk6IGlSZXNvdXJjZUlkZW50aWZpZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5oYXMocmksICdmaWx0ZXIuc2NvcGUnKVxuICB9XG5cbiAgaXNTYW1lUmVzb3VyY2UoXG4gICAgcmlPbmU6IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICAgcmlUd286IGlSZXNvdXJjZUlkZW50aWZpZXIsXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBfLmlzRXF1YWwocmlPbmUsIHJpVHdvKVxuICB9XG5cbiAgc2NvcGVOYW1lKHJpOiBpUmVzb3VyY2VJZGVudGlmaWVyKTogc3RyaW5nIHtcbiAgICBsZXQgc2NvcGVLZXkgPSBfLmdldChyaSwgJ2ZpbHRlci5zY29wZScpXG4gICAgcmV0dXJuIHRoaXMuaW5mbGVjdGlvblNlcnZpY2UuY2FtZWxDYXNlKHNjb3BlS2V5KVxuICB9XG59XG4iXX0=