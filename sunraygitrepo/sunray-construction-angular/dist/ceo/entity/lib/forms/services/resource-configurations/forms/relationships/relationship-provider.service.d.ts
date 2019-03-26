import { Observable } from 'rxjs';
import { EntityData } from '../../../../../entity/index';
export declare class RelationshipProvider {
    provide$(resourceConfiguration: any, formFieldEntity: any, relationshipName: any): Observable<EntityData>;
    private relationshipFullyLoaded;
}
