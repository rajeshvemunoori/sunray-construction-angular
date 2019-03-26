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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZmVhdHVyZS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2VudGl0eS91dGlsL2J1aWxkZXJzL3NlbGVjdG9ycy9idWlsZC1mZWF0dXJlLXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUUzQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLE9BQU8sR0FDUixNQUFNLGFBQWEsQ0FBQTtBQUVwQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBUywwQkFBMEIsQ0FBQTtBQUNsRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTtBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBWSx1QkFBdUIsQ0FBQTtBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBVyx3QkFBd0IsQ0FBQTs7QUFFaEUsTUFBTSxPQUFPLG9CQUFvQixHQUFHLENBQ2xDLGFBQWEsRUFDYixjQUFjLEVBQ2QsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsRUFBRTs7O1FBR0UsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDOztRQUMvRSx1QkFBdUIsR0FBRyxxQkFBcUIsQ0FBTSxtQkFBbUIsQ0FBQzs7UUFDekUsZUFBZSxHQUFHO1FBQ3BCLElBQUksRUFBRSxtQkFBbUI7UUFDekIsUUFBUSxFQUFFLHVCQUF1QjtLQUNsQztJQUNELGVBQWUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUE7OztRQUd4QywyQkFBMkIsR0FDN0IsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxDQUFDOztRQUN4RSx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7O1FBQ3pELCtCQUErQixHQUNqQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQzs7UUFDekQsdUJBQXVCLEdBQUc7UUFDNUIsSUFBSSxFQUFFLDJCQUEyQjtRQUNqQyxRQUFRLEVBQUUsK0JBQStCO0tBQzFDO0lBQ0QsZUFBZSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBOzs7UUFJaEQseUJBQXlCLEdBQzNCLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQzs7UUFDdEUsc0JBQXNCLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDOztRQUNyRCw2QkFBNkIsR0FDL0IsT0FBTyxDQUFDLHNCQUFzQixFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUM7O1FBQ3ZELHFCQUFxQixHQUFHO1FBQzFCLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QztJQUNELGVBQWUsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQTs7UUFHOUMsU0FBUyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUU7O1lBQzVCLE9BQU8sR0FBRyxhQUFhOztZQUV2QixrQkFBa0IsR0FBRyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7O1lBRWhFLGVBQWUsR0FDakIsb0JBQW9CLENBQ2xCLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsbUJBQW1CLENBQ3BCOztZQUVDLDBCQUEwQixHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxFQUFFOztnQkFDdEQsY0FBYyxHQUFHO2dCQUNuQixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7WUFFRCxPQUFPLGlCQUFpQixDQUN0Qix1QkFBdUIsRUFDdkIsY0FBYyxDQUNmLENBQUE7UUFDSCxDQUFDOztZQUVHLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQzs7WUFFbEUsWUFBWSxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDOUIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBRUQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRWhDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjb21wb3NlLFxufSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHsgYnVpbGRFbnRpdHlTZWxlY3RvcnMgfSAgICBmcm9tICcuL2J1aWxkLWVudGl0eS1zZWxlY3RvcnMnXG5pbXBvcnQgeyBidWlsZEVudGl0eVR5cGVTbGljZVNlbGVjdG9yIH0gZnJvbSAnLi9idWlsZC1lbnRpdHktdHlwZS1zbGljZS1zZWxlY3RvcidcbmltcG9ydCB7IGJ1aWxkUm9vdFNlbGVjdG9yIH0gICAgICAgZnJvbSAnLi9idWlsZC1yb290LXNlbGVjdG9yJ1xuaW1wb3J0IHsgYnVpbGRTbGljZVNlbGVjdG9yIH0gICAgICBmcm9tICcuL2J1aWxkLXNsaWNlLXNlbGVjdG9yJ1xuXG5leHBvcnQgY29uc3QgYnVpbGRGZWF0dXJlU2VsZWN0b3IgPSAoXG4gIGZlYXR1cmVDb25maWcsXG4gIGVudGl0eUFkYXB0ZXJzLFxuICBzZWxlY3RvclNlcnZpY2UsXG4gIHNlbGVjdG9yTmFtZVNlcnZpY2UsXG4gIGJ1aWxkQ3VzdG9tU2VsZWN0b3JzLFxuKSA9PiB7XG5cbiAgLy8gRmVhdHVyZSBTZWxlY3RvclxuICB2YXIgZmVhdHVyZVNlbGVjdG9yTmFtZSA9IHNlbGVjdG9yTmFtZVNlcnZpY2UuZ2V0RmVhdHVyZVNlbGVjdG9yTmFtZShmZWF0dXJlQ29uZmlnKVxuICBsZXQgZmVhdHVyZVNlbGVjdG9yRnVuY3Rpb24gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8YW55PihmZWF0dXJlU2VsZWN0b3JOYW1lKVxuICBsZXQgZmVhdHVyZVNlbGVjdG9yID0ge1xuICAgIG5hbWU6IGZlYXR1cmVTZWxlY3Rvck5hbWUsXG4gICAgc2VsZWN0b3I6IGZlYXR1cmVTZWxlY3RvckZ1bmN0aW9uXG4gIH1cbiAgc2VsZWN0b3JTZXJ2aWNlLmFkZFNlbGVjdG9yKGZlYXR1cmVTZWxlY3RvcilcblxuICAvLyBGZWF0dXJlIEVudGl0aWVzIFNlbGVjdG9yXG4gIHZhciBmZWF0dXJlRW50aXRpZXNTZWxlY3Rvck5hbWUgPVxuICAgIHNlbGVjdG9yTmFtZVNlcnZpY2UuZ2V0TmVzdGVkU2VsZWN0b3JOYW1lKGZlYXR1cmVTZWxlY3Rvck5hbWUsICdlbnRpdGllcycpXG4gIGxldCBlbnRpdGllc1NlbGVjdG9yRnVuY3Rpb24gPSBidWlsZFNsaWNlU2VsZWN0b3IoJ2VudGl0aWVzJylcbiAgbGV0IGZlYXR1cmVFbnRpdGllc1NlbGVjdG9yRnVuY3Rpb24gPVxuICAgIGNvbXBvc2UoZW50aXRpZXNTZWxlY3RvckZ1bmN0aW9uLCBmZWF0dXJlU2VsZWN0b3Iuc2VsZWN0b3IpXG4gIGxldCBmZWF0dXJlRW50aXRpZXNTZWxlY3RvciA9IHtcbiAgICBuYW1lOiBmZWF0dXJlRW50aXRpZXNTZWxlY3Rvck5hbWUsXG4gICAgc2VsZWN0b3I6IGZlYXR1cmVFbnRpdGllc1NlbGVjdG9yRnVuY3Rpb25cbiAgfVxuICBzZWxlY3RvclNlcnZpY2UuYWRkU2VsZWN0b3IoZmVhdHVyZUVudGl0aWVzU2VsZWN0b3IpXG5cblxuICAvLyBGZWF0dXJlIENvbmZpZyBTZWxlY3RvclxuICB2YXIgZmVhdHVyZUNvbmZpZ1NlbGVjdG9yTmFtZSA9XG4gICAgc2VsZWN0b3JOYW1lU2VydmljZS5nZXROZXN0ZWRTZWxlY3Rvck5hbWUoZmVhdHVyZVNlbGVjdG9yTmFtZSwgJ2NvbmZpZycpXG4gIGxldCBjb25maWdTZWxlY3RvckZ1bmN0aW9uID0gYnVpbGRTbGljZVNlbGVjdG9yKCdjb25maWcnKVxuICBsZXQgZmVhdHVyZUNvbmZpZ1NlbGVjdG9yRnVuY3Rpb24gPVxuICAgIGNvbXBvc2UoY29uZmlnU2VsZWN0b3JGdW5jdGlvbiwgZmVhdHVyZVNlbGVjdG9yLnNlbGVjdG9yKVxuICBsZXQgZmVhdHVyZUNvbmZpZ1NlbGVjdG9yID0ge1xuICAgIG5hbWU6IGZlYXR1cmVDb25maWdTZWxlY3Rvck5hbWUsXG4gICAgc2VsZWN0b3I6IGZlYXR1cmVDb25maWdTZWxlY3RvckZ1bmN0aW9uXG4gIH1cbiAgc2VsZWN0b3JTZXJ2aWNlLmFkZFNlbGVjdG9yKGZlYXR1cmVDb25maWdTZWxlY3RvcilcblxuXG4gIGxldCBhZGRFbnRpdHkgPSAoZW50aXR5QWRhcHRlcikgPT4ge1xuICAgIHZhciBhZGFwdGVyID0gZW50aXR5QWRhcHRlclxuXG4gICAgdmFyIGVudGl0eVR5cGVTZWxlY3RvciA9IGJ1aWxkRW50aXR5VHlwZVNsaWNlU2VsZWN0b3IoZW50aXR5QWRhcHRlcilcblxuICAgIGxldCBlbnRpdHlTZWxlY3RvcnMgPVxuICAgICAgYnVpbGRFbnRpdHlTZWxlY3RvcnMoXG4gICAgICAgIGVudGl0eUFkYXB0ZXIsXG4gICAgICAgIGVudGl0eVR5cGVTZWxlY3RvcixcbiAgICAgICAgc2VsZWN0b3JOYW1lU2VydmljZVxuICAgICAgKVxuXG4gICAgbGV0IGJ1aWxkUm9vdFNlbGVjdG9yRm9yRW50aXR5ID0gKHNlbGVjdG9yLCBzZWxlY3Rvck5hbWUpID0+IHtcbiAgICAgIGxldCBlbnRpdHlTZWxlY3RvciA9IHtcbiAgICAgICAgbmFtZTogc2VsZWN0b3JOYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1aWxkUm9vdFNlbGVjdG9yKFxuICAgICAgICBmZWF0dXJlRW50aXRpZXNTZWxlY3RvcixcbiAgICAgICAgZW50aXR5U2VsZWN0b3JcbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgcm9vdFNlbGVjdG9ycyA9IF8ubWFwKGVudGl0eVNlbGVjdG9ycywgYnVpbGRSb290U2VsZWN0b3JGb3JFbnRpdHkpXG5cbiAgICBsZXQgYWRkU2VsZWN0b3JzID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgICBzZWxlY3RvclNlcnZpY2UuYWRkU2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgXy5tYXAocm9vdFNlbGVjdG9ycywgYWRkU2VsZWN0b3JzKVxuICB9XG5cbiAgXy5tYXAoZW50aXR5QWRhcHRlcnMsIGFkZEVudGl0eSlcblxuICBidWlsZEN1c3RvbVNlbGVjdG9ycyhzZWxlY3RvclNlcnZpY2UpXG59XG5cbiJdfQ==