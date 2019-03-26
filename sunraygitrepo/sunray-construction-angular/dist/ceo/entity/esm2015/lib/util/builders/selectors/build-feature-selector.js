/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { createFeatureSelector, compose, } from '@ngrx/store';
import { buildEntitySelectors } from './build-entity-selectors';
import { buildEntityTypeSliceSelector } from './build-entity-type-slice-selector';
import { buildRootSelector } from './build-root-selector';
import { buildSliceSelector } from './build-slice-selector';
/** @type {?} */
export const buildFeatureSelector = (featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors) => {
    // Feature Selector
    /** @type {?} */
    var featureSelectorName = selectorNameService.getFeatureSelectorName(featureConfig);
    /** @type {?} */
    let featureSelectorFunction = createFeatureSelector(featureSelectorName);
    /** @type {?} */
    let featureSelector = {
        name: featureSelectorName,
        selector: featureSelectorFunction
    };
    selectorService.addSelector(featureSelector);
    // Feature Entities Selector
    /** @type {?} */
    var featureEntitiesSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'entities');
    /** @type {?} */
    let entitiesSelectorFunction = buildSliceSelector('entities');
    /** @type {?} */
    let featureEntitiesSelectorFunction = compose(entitiesSelectorFunction, featureSelector.selector);
    /** @type {?} */
    let featureEntitiesSelector = {
        name: featureEntitiesSelectorName,
        selector: featureEntitiesSelectorFunction
    };
    selectorService.addSelector(featureEntitiesSelector);
    // Feature Config Selector
    /** @type {?} */
    var featureConfigSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'config');
    /** @type {?} */
    let configSelectorFunction = buildSliceSelector('config');
    /** @type {?} */
    let featureConfigSelectorFunction = compose(configSelectorFunction, featureSelector.selector);
    /** @type {?} */
    let featureConfigSelector = {
        name: featureConfigSelectorName,
        selector: featureConfigSelectorFunction
    };
    selectorService.addSelector(featureConfigSelector);
    /** @type {?} */
    let addEntity = (entityAdapter) => {
        /** @type {?} */
        var adapter = entityAdapter;
        /** @type {?} */
        var entityTypeSelector = buildEntityTypeSliceSelector(entityAdapter);
        /** @type {?} */
        let entitySelectors = buildEntitySelectors(entityAdapter, entityTypeSelector, selectorNameService);
        /** @type {?} */
        let buildRootSelectorForEntity = (selector, selectorName) => {
            /** @type {?} */
            let entitySelector = {
                name: selectorName,
                selector: selector
            };
            return buildRootSelector(featureEntitiesSelector, entitySelector);
        };
        /** @type {?} */
        let rootSelectors = _.map(entitySelectors, buildRootSelectorForEntity);
        /** @type {?} */
        let addSelectors = (selector) => {
            selectorService.addSelector(selector);
        };
        _.map(rootSelectors, addSelectors);
    };
    _.map(entityAdapters, addEntity);
    buildCustomSelectors(selectorService);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmVhdHVyZS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLWZlYXR1cmUtc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsT0FBTyxHQUNSLE1BQU0sYUFBYSxDQUFBO0FBRXBCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFTLDBCQUEwQixDQUFBO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFZLHVCQUF1QixDQUFBO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFXLHdCQUF3QixDQUFBOztBQUVoRSxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsQ0FDbEMsYUFBYSxFQUNiLGNBQWMsRUFDZCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixFQUFFOzs7UUFHRSxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7O1FBQy9FLHVCQUF1QixHQUFHLHFCQUFxQixDQUFNLG1CQUFtQixDQUFDOztRQUN6RSxlQUFlLEdBQUc7UUFDcEIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDO0lBQ0QsZUFBZSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQTs7O1FBR3hDLDJCQUEyQixHQUM3QixtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUM7O1FBQ3hFLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzs7UUFDekQsK0JBQStCLEdBQ2pDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDOztRQUN6RCx1QkFBdUIsR0FBRztRQUM1QixJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDLFFBQVEsRUFBRSwrQkFBK0I7S0FDMUM7SUFDRCxlQUFlLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUE7OztRQUloRCx5QkFBeUIsR0FDM0IsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDOztRQUN0RSxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7O1FBQ3JELDZCQUE2QixHQUMvQixPQUFPLENBQUMsc0JBQXNCLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQzs7UUFDdkQscUJBQXFCLEdBQUc7UUFDMUIsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDO0lBQ0QsZUFBZSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBOztRQUc5QyxTQUFTLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRTs7WUFDNUIsT0FBTyxHQUFHLGFBQWE7O1lBRXZCLGtCQUFrQixHQUFHLDRCQUE0QixDQUFDLGFBQWEsQ0FBQzs7WUFFaEUsZUFBZSxHQUNqQixvQkFBb0IsQ0FDbEIsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixtQkFBbUIsQ0FDcEI7O1lBRUMsMEJBQTBCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUU7O2dCQUN0RCxjQUFjLEdBQUc7Z0JBQ25CLElBQUksRUFBRSxZQUFZO2dCQUNsQixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUVELE9BQU8saUJBQWlCLENBQ3RCLHVCQUF1QixFQUN2QixjQUFjLENBQ2YsQ0FBQTtRQUNILENBQUM7O1lBRUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDBCQUEwQixDQUFDOztZQUVsRSxZQUFZLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM5QixlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFFRCxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRUQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFFaEMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNvbXBvc2UsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuXG5pbXBvcnQgeyBidWlsZEVudGl0eVNlbGVjdG9ycyB9ICAgIGZyb20gJy4vYnVpbGQtZW50aXR5LXNlbGVjdG9ycydcbmltcG9ydCB7IGJ1aWxkRW50aXR5VHlwZVNsaWNlU2VsZWN0b3IgfSBmcm9tICcuL2J1aWxkLWVudGl0eS10eXBlLXNsaWNlLXNlbGVjdG9yJ1xuaW1wb3J0IHsgYnVpbGRSb290U2VsZWN0b3IgfSAgICAgICBmcm9tICcuL2J1aWxkLXJvb3Qtc2VsZWN0b3InXG5pbXBvcnQgeyBidWlsZFNsaWNlU2VsZWN0b3IgfSAgICAgIGZyb20gJy4vYnVpbGQtc2xpY2Utc2VsZWN0b3InXG5cbmV4cG9ydCBjb25zdCBidWlsZEZlYXR1cmVTZWxlY3RvciA9IChcbiAgZmVhdHVyZUNvbmZpZyxcbiAgZW50aXR5QWRhcHRlcnMsXG4gIHNlbGVjdG9yU2VydmljZSxcbiAgc2VsZWN0b3JOYW1lU2VydmljZSxcbiAgYnVpbGRDdXN0b21TZWxlY3RvcnMsXG4pID0+IHtcblxuICAvLyBGZWF0dXJlIFNlbGVjdG9yXG4gIHZhciBmZWF0dXJlU2VsZWN0b3JOYW1lID0gc2VsZWN0b3JOYW1lU2VydmljZS5nZXRGZWF0dXJlU2VsZWN0b3JOYW1lKGZlYXR1cmVDb25maWcpXG4gIGxldCBmZWF0dXJlU2VsZWN0b3JGdW5jdGlvbiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3Rvcjxhbnk+KGZlYXR1cmVTZWxlY3Rvck5hbWUpXG4gIGxldCBmZWF0dXJlU2VsZWN0b3IgPSB7XG4gICAgbmFtZTogZmVhdHVyZVNlbGVjdG9yTmFtZSxcbiAgICBzZWxlY3RvcjogZmVhdHVyZVNlbGVjdG9yRnVuY3Rpb25cbiAgfVxuICBzZWxlY3RvclNlcnZpY2UuYWRkU2VsZWN0b3IoZmVhdHVyZVNlbGVjdG9yKVxuXG4gIC8vIEZlYXR1cmUgRW50aXRpZXMgU2VsZWN0b3JcbiAgdmFyIGZlYXR1cmVFbnRpdGllc1NlbGVjdG9yTmFtZSA9XG4gICAgc2VsZWN0b3JOYW1lU2VydmljZS5nZXROZXN0ZWRTZWxlY3Rvck5hbWUoZmVhdHVyZVNlbGVjdG9yTmFtZSwgJ2VudGl0aWVzJylcbiAgbGV0IGVudGl0aWVzU2VsZWN0b3JGdW5jdGlvbiA9IGJ1aWxkU2xpY2VTZWxlY3RvcignZW50aXRpZXMnKVxuICBsZXQgZmVhdHVyZUVudGl0aWVzU2VsZWN0b3JGdW5jdGlvbiA9XG4gICAgY29tcG9zZShlbnRpdGllc1NlbGVjdG9yRnVuY3Rpb24sIGZlYXR1cmVTZWxlY3Rvci5zZWxlY3RvcilcbiAgbGV0IGZlYXR1cmVFbnRpdGllc1NlbGVjdG9yID0ge1xuICAgIG5hbWU6IGZlYXR1cmVFbnRpdGllc1NlbGVjdG9yTmFtZSxcbiAgICBzZWxlY3RvcjogZmVhdHVyZUVudGl0aWVzU2VsZWN0b3JGdW5jdGlvblxuICB9XG4gIHNlbGVjdG9yU2VydmljZS5hZGRTZWxlY3RvcihmZWF0dXJlRW50aXRpZXNTZWxlY3RvcilcblxuXG4gIC8vIEZlYXR1cmUgQ29uZmlnIFNlbGVjdG9yXG4gIHZhciBmZWF0dXJlQ29uZmlnU2VsZWN0b3JOYW1lID1cbiAgICBzZWxlY3Rvck5hbWVTZXJ2aWNlLmdldE5lc3RlZFNlbGVjdG9yTmFtZShmZWF0dXJlU2VsZWN0b3JOYW1lLCAnY29uZmlnJylcbiAgbGV0IGNvbmZpZ1NlbGVjdG9yRnVuY3Rpb24gPSBidWlsZFNsaWNlU2VsZWN0b3IoJ2NvbmZpZycpXG4gIGxldCBmZWF0dXJlQ29uZmlnU2VsZWN0b3JGdW5jdGlvbiA9XG4gICAgY29tcG9zZShjb25maWdTZWxlY3RvckZ1bmN0aW9uLCBmZWF0dXJlU2VsZWN0b3Iuc2VsZWN0b3IpXG4gIGxldCBmZWF0dXJlQ29uZmlnU2VsZWN0b3IgPSB7XG4gICAgbmFtZTogZmVhdHVyZUNvbmZpZ1NlbGVjdG9yTmFtZSxcbiAgICBzZWxlY3RvcjogZmVhdHVyZUNvbmZpZ1NlbGVjdG9yRnVuY3Rpb25cbiAgfVxuICBzZWxlY3RvclNlcnZpY2UuYWRkU2VsZWN0b3IoZmVhdHVyZUNvbmZpZ1NlbGVjdG9yKVxuXG5cbiAgbGV0IGFkZEVudGl0eSA9IChlbnRpdHlBZGFwdGVyKSA9PiB7XG4gICAgdmFyIGFkYXB0ZXIgPSBlbnRpdHlBZGFwdGVyXG5cbiAgICB2YXIgZW50aXR5VHlwZVNlbGVjdG9yID0gYnVpbGRFbnRpdHlUeXBlU2xpY2VTZWxlY3RvcihlbnRpdHlBZGFwdGVyKVxuXG4gICAgbGV0IGVudGl0eVNlbGVjdG9ycyA9XG4gICAgICBidWlsZEVudGl0eVNlbGVjdG9ycyhcbiAgICAgICAgZW50aXR5QWRhcHRlcixcbiAgICAgICAgZW50aXR5VHlwZVNlbGVjdG9yLFxuICAgICAgICBzZWxlY3Rvck5hbWVTZXJ2aWNlXG4gICAgICApXG5cbiAgICBsZXQgYnVpbGRSb290U2VsZWN0b3JGb3JFbnRpdHkgPSAoc2VsZWN0b3IsIHNlbGVjdG9yTmFtZSkgPT4ge1xuICAgICAgbGV0IGVudGl0eVNlbGVjdG9yID0ge1xuICAgICAgICBuYW1lOiBzZWxlY3Rvck5hbWUsXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVpbGRSb290U2VsZWN0b3IoXG4gICAgICAgIGZlYXR1cmVFbnRpdGllc1NlbGVjdG9yLFxuICAgICAgICBlbnRpdHlTZWxlY3RvclxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCByb290U2VsZWN0b3JzID0gXy5tYXAoZW50aXR5U2VsZWN0b3JzLCBidWlsZFJvb3RTZWxlY3RvckZvckVudGl0eSlcblxuICAgIGxldCBhZGRTZWxlY3RvcnMgPSAoc2VsZWN0b3IpID0+IHtcbiAgICAgIHNlbGVjdG9yU2VydmljZS5hZGRTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICBfLm1hcChyb290U2VsZWN0b3JzLCBhZGRTZWxlY3RvcnMpXG4gIH1cblxuICBfLm1hcChlbnRpdHlBZGFwdGVycywgYWRkRW50aXR5KVxuXG4gIGJ1aWxkQ3VzdG9tU2VsZWN0b3JzKHNlbGVjdG9yU2VydmljZSlcbn1cblxuIl19