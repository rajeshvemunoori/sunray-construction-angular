/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { defineEntityRelationshipGetSet, } from '../../../util/builders/entity/build-entity-relationship-properties';
import { JsonApiEntity } from './json-api.entity';
var ResourceConfigurationEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ResourceConfigurationEntity, _super);
    function ResourceConfigurationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceConfigurationEntity.defaultAttributes = {
        isRoutable: true
    };
    ResourceConfigurationEntity.relationshipNames = [
        'resource-associations',
        'resource-attributes',
        'resource-validators',
    ];
    return ResourceConfigurationEntity;
}(JsonApiEntity));
export { ResourceConfigurationEntity };
if (false) {
    /** @type {?} */
    ResourceConfigurationEntity.defaultAttributes;
    /** @type {?} */
    ResourceConfigurationEntity.relationshipNames;
    /** @type {?} */
    ResourceConfigurationEntity.prototype.resourceAssociations$;
}
/** @type {?} */
var buildEntityRelationship = function (name) {
    defineEntityRelationshipGetSet(ResourceConfigurationEntity, name);
};
var ɵ0 = buildEntityRelationship;
_.map(ResourceConfigurationEntity.relationshipNames, buildEntityRelationship);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtY29uZmlndXJhdGlvbi5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvZW50aXRpZXMvcmVzb3VyY2UtY29uZmlndXJhdGlvbi5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQWUzQixPQUFPLEVBRUwsOEJBQThCLEdBQy9CLE1BQU0sb0VBQW9FLENBQUE7QUFFM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRWpEO0lBQWlELHVEQUFhO0lBQTlEOztJQWNBLENBQUM7SUFYUSw2Q0FBaUIsR0FBTztRQUM3QixVQUFVLEVBQUUsSUFBSTtLQUNqQixDQUFBO0lBRU0sNkNBQWlCLEdBQWE7UUFDbkMsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixxQkFBcUI7S0FDdEIsQ0FBQTtJQUdILGtDQUFDO0NBQUEsQUFkRCxDQUFpRCxhQUFhLEdBYzdEO1NBZFksMkJBQTJCOzs7SUFHdEMsOENBRUM7O0lBRUQsOENBSUM7O0lBRUQsNERBQTBCOzs7SUFHeEIsdUJBQXVCLEdBQUcsVUFBQyxJQUFJO0lBQ2pDLDhCQUE4QixDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ25FLENBQUM7O0FBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIHNsdWdpZnksXG59IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHtcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG4gIGlSZXNvdXJjZUNvbmZpZ3VyYXRpb25FbnRpdHksXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIGJ1aWxkRW50aXR5UmVsYXRpb25zaGlwUHJvcGVydGllcyxcbiAgZGVmaW5lRW50aXR5UmVsYXRpb25zaGlwR2V0U2V0LFxufSBmcm9tICcuLi8uLi8uLi91dGlsL2J1aWxkZXJzL2VudGl0eS9idWlsZC1lbnRpdHktcmVsYXRpb25zaGlwLXByb3BlcnRpZXMnXG5cbmltcG9ydCB7IEpzb25BcGlFbnRpdHkgfSBmcm9tICcuL2pzb24tYXBpLmVudGl0eSdcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlQ29uZmlndXJhdGlvbkVudGl0eSBleHRlbmRzIEpzb25BcGlFbnRpdHlcbiAgaW1wbGVtZW50cyBpUmVzb3VyY2VDb25maWd1cmF0aW9uRW50aXR5IHtcblxuICBzdGF0aWMgZGVmYXVsdEF0dHJpYnV0ZXM6IHt9ID0ge1xuICAgIGlzUm91dGFibGU6IHRydWVcbiAgfVxuXG4gIHN0YXRpYyByZWxhdGlvbnNoaXBOYW1lczogc3RyaW5nW10gPSBbXG4gICAgJ3Jlc291cmNlLWFzc29jaWF0aW9ucycsXG4gICAgJ3Jlc291cmNlLWF0dHJpYnV0ZXMnLFxuICAgICdyZXNvdXJjZS12YWxpZGF0b3JzJyxcbiAgXVxuXG4gIHJlc291cmNlQXNzb2NpYXRpb25zJDogYW55XG59XG5cbmxldCBidWlsZEVudGl0eVJlbGF0aW9uc2hpcCA9IChuYW1lKSA9PiB7XG4gIGRlZmluZUVudGl0eVJlbGF0aW9uc2hpcEdldFNldChSZXNvdXJjZUNvbmZpZ3VyYXRpb25FbnRpdHksIG5hbWUpXG59XG5fLm1hcChSZXNvdXJjZUNvbmZpZ3VyYXRpb25FbnRpdHkucmVsYXRpb25zaGlwTmFtZXMsIGJ1aWxkRW50aXR5UmVsYXRpb25zaGlwKVxuXG4vKlxuUmVzb3VyY2VDb25maWd1cmF0aW9uRW50aXR5LnByb3RvdHlwZS5yZXNvdXJjZUFzc29jaWF0aW9ucyQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UucmVsYXRpb25zaGlwJCh0aGlzLCAncmVzb3VyY2UtYXNzb2NpYXRpb25zJywge30pXG59XG4qL1xuIl19