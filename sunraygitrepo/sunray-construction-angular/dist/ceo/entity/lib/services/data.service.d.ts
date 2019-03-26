import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityRelationshipIdentifier, EntityData, iResourceIdentifier, iDataService, iDataServiceOpts, iEntity } from '../interfaces/index';
import { EntityCloner } from './entity-cloner.service';
import { EntitySelectorProvider } from './selectors/index';
import { EntityRelationshipProvider } from './entity-relationship-provider.service';
export declare class DataService implements iDataService {
    private store;
    private selectorProvider;
    private entityRelationshipProvider;
    private entityCloner;
    private defaultOpts;
    constructor(store: Store<any>, selectorProvider: EntitySelectorProvider, entityRelationshipProvider: EntityRelationshipProvider, entityCloner: EntityCloner);
    relationship$(entity: iEntity, relationshipIdentifier: EntityRelationshipIdentifier, opts?: iDataServiceOpts): Observable<EntityData>;
    create$(ri: iResourceIdentifier, opts?: iDataServiceOpts): Observable<any>;
    delete$(ri: iResourceIdentifier, opts?: iDataServiceOpts): Observable<any>;
    get$(ri: iResourceIdentifier, opts?: iDataServiceOpts): Observable<any>;
    update$(ri: any, opts?: iDataServiceOpts): Observable<any>;
    get(ri: iResourceIdentifier, opts?: iDataServiceOpts): Observable<any>;
    private executeRequest$;
    private storeData$;
    private decoratedData;
    private getSelector;
    private shouldDispatch;
    private getSliceName;
    private noData$;
}
