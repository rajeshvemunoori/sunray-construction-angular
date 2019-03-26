import { Observable } from 'rxjs';
import { iFormMemberFactoryParams } from '@ceo/shared';
import { RelationshipsProvider, RelationshipDataFactory } from '../relationships/index';
export declare class FormMemberFactoryParamsService {
    private relationshipsProvider;
    private relationshipDataFactory;
    constructor(relationshipsProvider: RelationshipsProvider, relationshipDataFactory: RelationshipDataFactory);
    provide$(resourceConfiguration: any, formFieldEntity: any): Observable<iFormMemberFactoryParams>;
    private relationships$;
    private buildParams;
    private buildEntityFormMemberParams;
}
