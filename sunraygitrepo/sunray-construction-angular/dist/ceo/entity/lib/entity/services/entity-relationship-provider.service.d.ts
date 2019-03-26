import { Observable } from 'rxjs';
import { EntityRelationshipIdentifier, EntityData, iDataService, iDataServiceOpts, iEntityRelationshipProvider, iEntity } from '../interfaces/index';
export declare class EntityRelationshipProvider implements iEntityRelationshipProvider {
    private defaultDataServiceOpts;
    provide$(dataService: iDataService, entity: iEntity, relationshipIdentifier: EntityRelationshipIdentifier, opts?: iDataServiceOpts): Observable<EntityData>;
    private loadRelationshipData$;
    private prepareHasMany;
    private prepareHasOne;
    private loadResourceTypeData$;
    private buildDataServiceOpts;
    private relationshipData;
    private relationshipType;
    private defaultRelationResourceType;
}
