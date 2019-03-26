/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { pascalCase } from '@ceo/core';
import { ResourceConfigurationEntity, } from '../../../classes/index';
import { entityConfigTypes as baseEntityConfigTypes } from './base';
/** @type {?} */
var buildResourceConfiguration = function (entityMap, entityConfigType) {
    /** @type {?} */
    var name = entityConfigType.type;
    /** @type {?} */
    var attributes = {
        displayName: pascalCase(name),
        displaySlug: name,
        resourceType: name,
        primaryKeys: ['id'],
    };
    if (entityConfigType.entityType) {
        _.merge(attributes, entityConfigType.entityType.defaultAttributes);
    }
    /** @type {?} */
    var data = {
        id: name,
        type: 'resource-configurations',
        attributes: attributes,
    };
    /** @type {?} */
    var entity = new ResourceConfigurationEntity(data);
    entityMap[name] = entity;
    return entityMap;
};
var ɵ0 = buildResourceConfiguration;
/** @type {?} */
var entities = _.reduce(baseEntityConfigTypes, buildResourceConfiguration, {});
/** @type {?} */
export var entityConfigType = {
    type: "resource-configurations",
    url: 'wp/v2/resource-configurations',
    entityType: ResourceConfigurationEntity,
    initialState: {
        ids: _.map(entities, 'id'),
        entities: entities
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtY29uZmlndXJhdGlvbi1lbnRpdHktY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby93b3JkcHJlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL2NvbmZpZy9lbnRpdHktY29uZmlncy90eXBlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9uLWVudGl0eS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFJdEMsT0FBTyxFQUVMLDJCQUEyQixHQUM1QixNQUFNLHdCQUF3QixDQUFBO0FBRS9CLE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxxQkFBcUIsRUFBRSxNQUFNLFFBQVEsQ0FBQTs7SUFFL0QsMEJBQTBCLEdBQUcsVUFBQyxTQUFTLEVBQUUsZ0JBQWdCOztRQUN2RCxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsSUFBSTs7UUFFNUIsVUFBVSxHQUFHO1FBQ2YsV0FBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsV0FBVyxFQUFFLElBQUk7UUFDakIsWUFBWSxFQUFFLElBQUk7UUFDbEIsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ3BCO0lBRUQsSUFBRyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7UUFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUE7S0FDbkU7O1FBRUcsSUFBSSxHQUFHO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixJQUFJLEVBQUUseUJBQXlCO1FBQy9CLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCOztRQUNHLE1BQU0sR0FBRyxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQztJQUVsRCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFBO0lBQ3hCLE9BQU8sU0FBUyxDQUFBO0FBQ2xCLENBQUM7OztJQUVHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLEVBQUUsQ0FBQzs7QUFFOUUsTUFBTSxLQUFPLGdCQUFnQixHQUFHO0lBQzlCLElBQUksRUFBRSx5QkFBeUI7SUFDL0IsR0FBRyxFQUFFLCtCQUErQjtJQUNwQyxVQUFVLEVBQUUsMkJBQTJCO0lBQ3ZDLFlBQVksRUFBRTtRQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFDMUIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBwYXNjYWxDYXNlIH0gZnJvbSAnQGNlby9jb3JlJ1xuXG5pbXBvcnQgeyBFbnRpdHlDb2xsZWN0aW9uIH0gZnJvbSAnQGNlby9lbnRpdHknXG5cbmltcG9ydCB7XG4gIFdvcmRwcmVzc0VudGl0eSxcbiAgUmVzb3VyY2VDb25maWd1cmF0aW9uRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2luZGV4J1xuXG5pbXBvcnQgeyBlbnRpdHlDb25maWdUeXBlcyBhcyBiYXNlRW50aXR5Q29uZmlnVHlwZXMgfSBmcm9tICcuL2Jhc2UnXG5cbmxldCBidWlsZFJlc291cmNlQ29uZmlndXJhdGlvbiA9IChlbnRpdHlNYXAsIGVudGl0eUNvbmZpZ1R5cGUpID0+IHtcbiAgbGV0IG5hbWUgPSBlbnRpdHlDb25maWdUeXBlLnR5cGVcblxuICBsZXQgYXR0cmlidXRlcyA9IHtcbiAgICBkaXNwbGF5TmFtZTogcGFzY2FsQ2FzZShuYW1lKSxcbiAgICBkaXNwbGF5U2x1ZzogbmFtZSxcbiAgICByZXNvdXJjZVR5cGU6IG5hbWUsXG4gICAgcHJpbWFyeUtleXM6IFsnaWQnXSxcbiAgfVxuXG4gIGlmKGVudGl0eUNvbmZpZ1R5cGUuZW50aXR5VHlwZSkge1xuICAgIF8ubWVyZ2UoYXR0cmlidXRlcywgZW50aXR5Q29uZmlnVHlwZS5lbnRpdHlUeXBlLmRlZmF1bHRBdHRyaWJ1dGVzKVxuICB9XG5cbiAgbGV0IGRhdGEgPSB7XG4gICAgaWQ6IG5hbWUsXG4gICAgdHlwZTogJ3Jlc291cmNlLWNvbmZpZ3VyYXRpb25zJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICB9XG4gIGxldCBlbnRpdHkgPSBuZXcgUmVzb3VyY2VDb25maWd1cmF0aW9uRW50aXR5KGRhdGEpXG5cbiAgZW50aXR5TWFwW25hbWVdID0gZW50aXR5XG4gIHJldHVybiBlbnRpdHlNYXBcbn1cblxubGV0IGVudGl0aWVzID0gXy5yZWR1Y2UoYmFzZUVudGl0eUNvbmZpZ1R5cGVzLCBidWlsZFJlc291cmNlQ29uZmlndXJhdGlvbiwge30pXG5cbmV4cG9ydCBjb25zdCBlbnRpdHlDb25maWdUeXBlID0ge1xuICB0eXBlOiBcInJlc291cmNlLWNvbmZpZ3VyYXRpb25zXCIsXG4gIHVybDogJ3dwL3YyL3Jlc291cmNlLWNvbmZpZ3VyYXRpb25zJyxcbiAgZW50aXR5VHlwZTogUmVzb3VyY2VDb25maWd1cmF0aW9uRW50aXR5LFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBpZHM6IF8ubWFwKGVudGl0aWVzLCAnaWQnKSxcbiAgICBlbnRpdGllczogZW50aXRpZXNcbiAgfVxufVxuIl19