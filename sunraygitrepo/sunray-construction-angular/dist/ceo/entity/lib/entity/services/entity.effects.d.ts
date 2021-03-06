import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Actions, OnIdentifyEffects, OnInitEffects } from '@ngrx/effects';
import { EntityService } from './entity.service';
import { ResourceIdentifierService } from './resource-identifier.service';
export declare class EntityEffects implements OnIdentifyEffects, OnInitEffects {
    protected store: Store<any>;
    protected actions$: Actions<any>;
    protected entityService: EntityService;
    protected featureConfig: any;
    protected resourceIdentifierService: ResourceIdentifierService;
    featureName: string;
    constructor(store: Store<any>, actions$: Actions<any>, entityService: EntityService, featureConfig: any, resourceIdentifierService: ResourceIdentifierService);
    init$: Observable<Action>;
    seed$: Observable<Action>;
    load$: Observable<Action>;
    add$: Observable<Action>;
    update$: Observable<Action>;
    asyncSuccess$: Observable<Action>;
    delete$: Observable<Action>;
    loadApplicationResource$: Observable<Action>;
    ngrxOnIdentifyEffects(): string;
    ngrxOnInitEffects(): Action;
    private buildAddToStoreActions;
    private buildAddEntitiesAction;
    private buildAddScopeEntitiesAction;
    private groupedEntities;
    private isValidPayload;
    private isValidResource;
    private buildResourceOpts;
    private featureAction;
    private sliceActions;
    private getSliceName;
    private getEntitySlice;
    private getFeatureEntitySlice;
}
