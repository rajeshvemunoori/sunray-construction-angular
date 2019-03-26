import { Observable } from 'rxjs';
import { iEntity } from '../../../../../entity/index';
import { RelationshipProvider } from './relationship-provider.service';
export declare class RelationshipsProvider {
    private relationshipProvider;
    private relationshipTypes;
    constructor(relationshipProvider: RelationshipProvider);
    provide$(resourceConfiguration: any, formFieldEntity: any): Observable<iEntity[]>;
    private flattenedRelationships;
    private provideRelationship$;
}
