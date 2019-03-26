import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { DataService } from '../../services/data.service';
import { RouteEntityTypeProvider } from '../../services/route-entity-type-provider.service';
import { ResourceIdentifierService } from '../../services/resource-identifier.service';
import { SelectorProvider } from '../../services/selectors/selector-provider.service';
export declare class FeatureEffects {
    private store;
    private actions$;
    protected dataService: DataService;
    protected routeEntityTypeProvider: RouteEntityTypeProvider;
    protected resourceIdentifierService: ResourceIdentifierService;
    protected selectorProvider: SelectorProvider;
    constructor(store: Store<any>, actions$: Actions<any>, dataService: DataService, routeEntityTypeProvider: RouteEntityTypeProvider, resourceIdentifierService: ResourceIdentifierService, selectorProvider: SelectorProvider);
    handleRouterNavigation$: Observable<Action>;
    registerFeature$: Observable<Action>;
    loadPrimaryEntity$: Observable<Action>;
    selectPrimaryEntity$: Observable<Action>;
    init$: Observable<Action>;
}
