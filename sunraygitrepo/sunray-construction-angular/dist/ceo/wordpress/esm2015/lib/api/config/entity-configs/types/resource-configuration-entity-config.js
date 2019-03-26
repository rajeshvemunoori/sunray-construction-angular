/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { pascalCase } from '@ceo/core';
import { ResourceConfigurationEntity, } from '../../../classes/index';
import { entityConfigTypes as baseEntityConfigTypes } from './base';
/** @type {?} */
let buildResourceConfiguration = (entityMap, entityConfigType) => {
    /** @type {?} */
    let name = entityConfigType.type;
    /** @type {?} */
    let attributes = {
        displayName: pascalCase(name),
        displaySlug: name,
        resourceType: name,
        primaryKeys: ['id'],
    };
    if (entityConfigType.entityType) {
        _.merge(attributes, entityConfigType.entityType.defaultAttributes);
    }
    /** @type {?} */
    let data = {
        id: name,
        type: 'resource-configurations',
        attributes: attributes,
    };
    /** @type {?} */
    let entity = new ResourceConfigurationEntity(data);
    entityMap[name] = entity;
    return entityMap;
};
const ɵ0 = buildResourceConfiguration;
/** @type {?} */
let entities = _.reduce(baseEntityConfigTypes, buildResourceConfiguration, {});
/** @type {?} */
export const entityConfigType = {
    type: "resource-configurations",
    url: 'wp/v2/resource-configurations',
    entityType: ResourceConfigurationEntity,
    initialState: {
        ids: _.map(entities, 'id'),
        entities: entities
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtY29uZmlndXJhdGlvbi1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9uLWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFJdEMsT0FBTyxFQUVMLDJCQUEyQixHQUM1QixNQUFNLHdCQUF3QixDQUFBO0FBRS9CLE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxxQkFBcUIsRUFBRSxNQUFNLFFBQVEsQ0FBQTs7SUFFL0QsMEJBQTBCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRTs7UUFDM0QsSUFBSSxHQUFHLGdCQUFnQixDQUFDLElBQUk7O1FBRTVCLFVBQVUsR0FBRztRQUNmLFdBQVcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztLQUNwQjtJQUVELElBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1FBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0tBQ25FOztRQUVHLElBQUksR0FBRztRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixVQUFVLEVBQUUsVUFBVTtLQUN2Qjs7UUFDRyxNQUFNLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUM7SUFFbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQTtJQUN4QixPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDOzs7SUFFRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLENBQUM7O0FBRTlFLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRztJQUM5QixJQUFJLEVBQUUseUJBQXlCO0lBQy9CLEdBQUcsRUFBRSwrQkFBK0I7SUFDcEMsVUFBVSxFQUFFLDJCQUEyQjtJQUN2QyxZQUFZLEVBQUU7UUFDWixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1FBQzFCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgcGFzY2FsQ2FzZSB9IGZyb20gJ0BjZW8vY29yZSdcblxuaW1wb3J0IHsgRW50aXR5Q29sbGVjdGlvbiB9IGZyb20gJ0BjZW8vZW50aXR5J1xuXG5pbXBvcnQge1xuICBXb3JkcHJlc3NFbnRpdHksXG4gIFJlc291cmNlQ29uZmlndXJhdGlvbkVudGl0eSxcbn0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9pbmRleCdcblxuaW1wb3J0IHsgZW50aXR5Q29uZmlnVHlwZXMgYXMgYmFzZUVudGl0eUNvbmZpZ1R5cGVzIH0gZnJvbSAnLi9iYXNlJ1xuXG5sZXQgYnVpbGRSZXNvdXJjZUNvbmZpZ3VyYXRpb24gPSAoZW50aXR5TWFwLCBlbnRpdHlDb25maWdUeXBlKSA9PiB7XG4gIGxldCBuYW1lID0gZW50aXR5Q29uZmlnVHlwZS50eXBlXG5cbiAgbGV0IGF0dHJpYnV0ZXMgPSB7XG4gICAgZGlzcGxheU5hbWU6IHBhc2NhbENhc2UobmFtZSksXG4gICAgZGlzcGxheVNsdWc6IG5hbWUsXG4gICAgcmVzb3VyY2VUeXBlOiBuYW1lLFxuICAgIHByaW1hcnlLZXlzOiBbJ2lkJ10sXG4gIH1cblxuICBpZihlbnRpdHlDb25maWdUeXBlLmVudGl0eVR5cGUpIHtcbiAgICBfLm1lcmdlKGF0dHJpYnV0ZXMsIGVudGl0eUNvbmZpZ1R5cGUuZW50aXR5VHlwZS5kZWZhdWx0QXR0cmlidXRlcylcbiAgfVxuXG4gIGxldCBkYXRhID0ge1xuICAgIGlkOiBuYW1lLFxuICAgIHR5cGU6ICdyZXNvdXJjZS1jb25maWd1cmF0aW9ucycsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgfVxuICBsZXQgZW50aXR5ID0gbmV3IFJlc291cmNlQ29uZmlndXJhdGlvbkVudGl0eShkYXRhKVxuXG4gIGVudGl0eU1hcFtuYW1lXSA9IGVudGl0eVxuICByZXR1cm4gZW50aXR5TWFwXG59XG5cbmxldCBlbnRpdGllcyA9IF8ucmVkdWNlKGJhc2VFbnRpdHlDb25maWdUeXBlcywgYnVpbGRSZXNvdXJjZUNvbmZpZ3VyYXRpb24sIHt9KVxuXG5leHBvcnQgY29uc3QgZW50aXR5Q29uZmlnVHlwZSA9IHtcbiAgdHlwZTogXCJyZXNvdXJjZS1jb25maWd1cmF0aW9uc1wiLFxuICB1cmw6ICd3cC92Mi9yZXNvdXJjZS1jb25maWd1cmF0aW9ucycsXG4gIGVudGl0eVR5cGU6IFJlc291cmNlQ29uZmlndXJhdGlvbkVudGl0eSxcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgaWRzOiBfLm1hcChlbnRpdGllcywgJ2lkJyksXG4gICAgZW50aXRpZXM6IGVudGl0aWVzXG4gIH1cbn1cbiJdfQ==