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
export var buildFeatureSelector = function (featureConfig, entityAdapters, selectorService, selectorNameService, buildCustomSelectors) {
    // Feature Selector
    /** @type {?} */
    var featureSelectorName = selectorNameService.getFeatureSelectorName(featureConfig);
    /** @type {?} */
    var featureSelectorFunction = createFeatureSelector(featureSelectorName);
    /** @type {?} */
    var featureSelector = {
        name: featureSelectorName,
        selector: featureSelectorFunction
    };
    selectorService.addSelector(featureSelector);
    // Feature Entities Selector
    /** @type {?} */
    var featureEntitiesSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'entities');
    /** @type {?} */
    var entitiesSelectorFunction = buildSliceSelector('entities');
    /** @type {?} */
    var featureEntitiesSelectorFunction = compose(entitiesSelectorFunction, featureSelector.selector);
    /** @type {?} */
    var featureEntitiesSelector = {
        name: featureEntitiesSelectorName,
        selector: featureEntitiesSelectorFunction
    };
    selectorService.addSelector(featureEntitiesSelector);
    // Feature Config Selector
    /** @type {?} */
    var featureConfigSelectorName = selectorNameService.getNestedSelectorName(featureSelectorName, 'config');
    /** @type {?} */
    var configSelectorFunction = buildSliceSelector('config');
    /** @type {?} */
    var featureConfigSelectorFunction = compose(configSelectorFunction, featureSelector.selector);
    /** @type {?} */
    var featureConfigSelector = {
        name: featureConfigSelectorName,
        selector: featureConfigSelectorFunction
    };
    selectorService.addSelector(featureConfigSelector);
    /** @type {?} */
    var addEntity = function (entityAdapter) {
        /** @type {?} */
        var adapter = entityAdapter;
        /** @type {?} */
        var entityTypeSelector = buildEntityTypeSliceSelector(entityAdapter);
        /** @type {?} */
        var entitySelectors = buildEntitySelectors(entityAdapter, entityTypeSelector, selectorNameService);
        /** @type {?} */
        var buildRootSelectorForEntity = function (selector, selectorName) {
            /** @type {?} */
            var entitySelector = {
                name: selectorName,
                selector: selector
            };
            return buildRootSelector(featureEntitiesSelector, entitySelector);
        };
        /** @type {?} */
        var rootSelectors = _.map(entitySelectors, buildRootSelectorForEntity);
        /** @type {?} */
        var addSelectors = function (selector) {
            selectorService.addSelector(selector);
        };
        _.map(rootSelectors, addSelectors);
    };
    _.map(entityAdapters, addEntity);
    buildCustomSelectors(selectorService);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmVhdHVyZS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3V0aWwvYnVpbGRlcnMvc2VsZWN0b3JzL2J1aWxkLWZlYXR1cmUtc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsT0FBTyxHQUNSLE1BQU0sYUFBYSxDQUFBO0FBRXBCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFTLDBCQUEwQixDQUFBO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFZLHVCQUF1QixDQUFBO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFXLHdCQUF3QixDQUFBOztBQUVoRSxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsVUFDbEMsYUFBYSxFQUNiLGNBQWMsRUFDZCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG9CQUFvQjs7O1FBSWhCLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQzs7UUFDL0UsdUJBQXVCLEdBQUcscUJBQXFCLENBQU0sbUJBQW1CLENBQUM7O1FBQ3pFLGVBQWUsR0FBRztRQUNwQixJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLFFBQVEsRUFBRSx1QkFBdUI7S0FDbEM7SUFDRCxlQUFlLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBOzs7UUFHeEMsMkJBQTJCLEdBQzdCLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLFVBQVUsQ0FBQzs7UUFDeEUsd0JBQXdCLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDOztRQUN6RCwrQkFBK0IsR0FDakMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUM7O1FBQ3pELHVCQUF1QixHQUFHO1FBQzVCLElBQUksRUFBRSwyQkFBMkI7UUFDakMsUUFBUSxFQUFFLCtCQUErQjtLQUMxQztJQUNELGVBQWUsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQTs7O1FBSWhELHlCQUF5QixHQUMzQixtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUM7O1FBQ3RFLHNCQUFzQixHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzs7UUFDckQsNkJBQTZCLEdBQy9CLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDOztRQUN2RCxxQkFBcUIsR0FBRztRQUMxQixJQUFJLEVBQUUseUJBQXlCO1FBQy9CLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEM7SUFDRCxlQUFlLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUE7O1FBRzlDLFNBQVMsR0FBRyxVQUFDLGFBQWE7O1lBQ3hCLE9BQU8sR0FBRyxhQUFhOztZQUV2QixrQkFBa0IsR0FBRyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7O1lBRWhFLGVBQWUsR0FDakIsb0JBQW9CLENBQ2xCLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsbUJBQW1CLENBQ3BCOztZQUVDLDBCQUEwQixHQUFHLFVBQUMsUUFBUSxFQUFFLFlBQVk7O2dCQUNsRCxjQUFjLEdBQUc7Z0JBQ25CLElBQUksRUFBRSxZQUFZO2dCQUNsQixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUVELE9BQU8saUJBQWlCLENBQ3RCLHVCQUF1QixFQUN2QixjQUFjLENBQ2YsQ0FBQTtRQUNILENBQUM7O1lBRUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDBCQUEwQixDQUFDOztZQUVsRSxZQUFZLEdBQUcsVUFBQyxRQUFRO1lBQzFCLGVBQWUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkMsQ0FBQztRQUVELENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUVoQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY29tcG9zZSxcbn0gZnJvbSAnQG5ncngvc3RvcmUnXG5cbmltcG9ydCB7IGJ1aWxkRW50aXR5U2VsZWN0b3JzIH0gICAgZnJvbSAnLi9idWlsZC1lbnRpdHktc2VsZWN0b3JzJ1xuaW1wb3J0IHsgYnVpbGRFbnRpdHlUeXBlU2xpY2VTZWxlY3RvciB9IGZyb20gJy4vYnVpbGQtZW50aXR5LXR5cGUtc2xpY2Utc2VsZWN0b3InXG5pbXBvcnQgeyBidWlsZFJvb3RTZWxlY3RvciB9ICAgICAgIGZyb20gJy4vYnVpbGQtcm9vdC1zZWxlY3RvcidcbmltcG9ydCB7IGJ1aWxkU2xpY2VTZWxlY3RvciB9ICAgICAgZnJvbSAnLi9idWlsZC1zbGljZS1zZWxlY3RvcidcblxuZXhwb3J0IGNvbnN0IGJ1aWxkRmVhdHVyZVNlbGVjdG9yID0gKFxuICBmZWF0dXJlQ29uZmlnLFxuICBlbnRpdHlBZGFwdGVycyxcbiAgc2VsZWN0b3JTZXJ2aWNlLFxuICBzZWxlY3Rvck5hbWVTZXJ2aWNlLFxuICBidWlsZEN1c3RvbVNlbGVjdG9ycyxcbikgPT4ge1xuXG4gIC8vIEZlYXR1cmUgU2VsZWN0b3JcbiAgdmFyIGZlYXR1cmVTZWxlY3Rvck5hbWUgPSBzZWxlY3Rvck5hbWVTZXJ2aWNlLmdldEZlYXR1cmVTZWxlY3Rvck5hbWUoZmVhdHVyZUNvbmZpZylcbiAgbGV0IGZlYXR1cmVTZWxlY3RvckZ1bmN0aW9uID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPGFueT4oZmVhdHVyZVNlbGVjdG9yTmFtZSlcbiAgbGV0IGZlYXR1cmVTZWxlY3RvciA9IHtcbiAgICBuYW1lOiBmZWF0dXJlU2VsZWN0b3JOYW1lLFxuICAgIHNlbGVjdG9yOiBmZWF0dXJlU2VsZWN0b3JGdW5jdGlvblxuICB9XG4gIHNlbGVjdG9yU2VydmljZS5hZGRTZWxlY3RvcihmZWF0dXJlU2VsZWN0b3IpXG5cbiAgLy8gRmVhdHVyZSBFbnRpdGllcyBTZWxlY3RvclxuICB2YXIgZmVhdHVyZUVudGl0aWVzU2VsZWN0b3JOYW1lID1cbiAgICBzZWxlY3Rvck5hbWVTZXJ2aWNlLmdldE5lc3RlZFNlbGVjdG9yTmFtZShmZWF0dXJlU2VsZWN0b3JOYW1lLCAnZW50aXRpZXMnKVxuICBsZXQgZW50aXRpZXNTZWxlY3RvckZ1bmN0aW9uID0gYnVpbGRTbGljZVNlbGVjdG9yKCdlbnRpdGllcycpXG4gIGxldCBmZWF0dXJlRW50aXRpZXNTZWxlY3RvckZ1bmN0aW9uID1cbiAgICBjb21wb3NlKGVudGl0aWVzU2VsZWN0b3JGdW5jdGlvbiwgZmVhdHVyZVNlbGVjdG9yLnNlbGVjdG9yKVxuICBsZXQgZmVhdHVyZUVudGl0aWVzU2VsZWN0b3IgPSB7XG4gICAgbmFtZTogZmVhdHVyZUVudGl0aWVzU2VsZWN0b3JOYW1lLFxuICAgIHNlbGVjdG9yOiBmZWF0dXJlRW50aXRpZXNTZWxlY3RvckZ1bmN0aW9uXG4gIH1cbiAgc2VsZWN0b3JTZXJ2aWNlLmFkZFNlbGVjdG9yKGZlYXR1cmVFbnRpdGllc1NlbGVjdG9yKVxuXG5cbiAgLy8gRmVhdHVyZSBDb25maWcgU2VsZWN0b3JcbiAgdmFyIGZlYXR1cmVDb25maWdTZWxlY3Rvck5hbWUgPVxuICAgIHNlbGVjdG9yTmFtZVNlcnZpY2UuZ2V0TmVzdGVkU2VsZWN0b3JOYW1lKGZlYXR1cmVTZWxlY3Rvck5hbWUsICdjb25maWcnKVxuICBsZXQgY29uZmlnU2VsZWN0b3JGdW5jdGlvbiA9IGJ1aWxkU2xpY2VTZWxlY3RvcignY29uZmlnJylcbiAgbGV0IGZlYXR1cmVDb25maWdTZWxlY3RvckZ1bmN0aW9uID1cbiAgICBjb21wb3NlKGNvbmZpZ1NlbGVjdG9yRnVuY3Rpb24sIGZlYXR1cmVTZWxlY3Rvci5zZWxlY3RvcilcbiAgbGV0IGZlYXR1cmVDb25maWdTZWxlY3RvciA9IHtcbiAgICBuYW1lOiBmZWF0dXJlQ29uZmlnU2VsZWN0b3JOYW1lLFxuICAgIHNlbGVjdG9yOiBmZWF0dXJlQ29uZmlnU2VsZWN0b3JGdW5jdGlvblxuICB9XG4gIHNlbGVjdG9yU2VydmljZS5hZGRTZWxlY3RvcihmZWF0dXJlQ29uZmlnU2VsZWN0b3IpXG5cblxuICBsZXQgYWRkRW50aXR5ID0gKGVudGl0eUFkYXB0ZXIpID0+IHtcbiAgICB2YXIgYWRhcHRlciA9IGVudGl0eUFkYXB0ZXJcblxuICAgIHZhciBlbnRpdHlUeXBlU2VsZWN0b3IgPSBidWlsZEVudGl0eVR5cGVTbGljZVNlbGVjdG9yKGVudGl0eUFkYXB0ZXIpXG5cbiAgICBsZXQgZW50aXR5U2VsZWN0b3JzID1cbiAgICAgIGJ1aWxkRW50aXR5U2VsZWN0b3JzKFxuICAgICAgICBlbnRpdHlBZGFwdGVyLFxuICAgICAgICBlbnRpdHlUeXBlU2VsZWN0b3IsXG4gICAgICAgIHNlbGVjdG9yTmFtZVNlcnZpY2VcbiAgICAgIClcblxuICAgIGxldCBidWlsZFJvb3RTZWxlY3RvckZvckVudGl0eSA9IChzZWxlY3Rvciwgc2VsZWN0b3JOYW1lKSA9PiB7XG4gICAgICBsZXQgZW50aXR5U2VsZWN0b3IgPSB7XG4gICAgICAgIG5hbWU6IHNlbGVjdG9yTmFtZSxcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWlsZFJvb3RTZWxlY3RvcihcbiAgICAgICAgZmVhdHVyZUVudGl0aWVzU2VsZWN0b3IsXG4gICAgICAgIGVudGl0eVNlbGVjdG9yXG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IHJvb3RTZWxlY3RvcnMgPSBfLm1hcChlbnRpdHlTZWxlY3RvcnMsIGJ1aWxkUm9vdFNlbGVjdG9yRm9yRW50aXR5KVxuXG4gICAgbGV0IGFkZFNlbGVjdG9ycyA9IChzZWxlY3RvcikgPT4ge1xuICAgICAgc2VsZWN0b3JTZXJ2aWNlLmFkZFNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIF8ubWFwKHJvb3RTZWxlY3RvcnMsIGFkZFNlbGVjdG9ycylcbiAgfVxuXG4gIF8ubWFwKGVudGl0eUFkYXB0ZXJzLCBhZGRFbnRpdHkpXG5cbiAgYnVpbGRDdXN0b21TZWxlY3RvcnMoc2VsZWN0b3JTZXJ2aWNlKVxufVxuXG4iXX0=