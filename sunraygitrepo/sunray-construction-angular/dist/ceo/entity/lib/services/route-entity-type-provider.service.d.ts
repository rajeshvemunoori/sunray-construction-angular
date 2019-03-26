import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { InflectionService } from '@ceo/core';
import { iRouterStateUrl } from '@ceo/state';
import { iResourceIdentifier } from '../interfaces/index';
import { DataService } from './data.service';
export declare class RouteEntityTypeProvider {
    protected store: Store<any>;
    protected dataService: DataService;
    protected inflectionService: InflectionService;
    private _features$;
    constructor(store: Store<any>, dataService: DataService, inflectionService: InflectionService);
    handleRouterNavigation$(routerState: iRouterStateUrl): Observable<iResourceIdentifier>;
    private resourceIdentifierFromRouterState;
    private resourceIdentifierOptsFromRouterState;
    private entityTypeSlugFromRouterState;
    private featureRoutableEntities$;
    private getRoutableEntities;
    private routableResourceConfigurations;
    private resourceConfigurations$;
    private buildResourceIdentifiers;
    private readonly features$;
    private getFeatures$;
}
