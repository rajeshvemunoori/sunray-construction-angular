import { Observable } from 'rxjs';
import { iEntity, iEntityConstructorParams } from '../interfaces/index';
import { EntityTypeProviderService } from './entity-type-provider.service';
import { EntityRelationshipProvider } from './entity-relationship-provider.service';
export declare class EntityFactory {
    private entityTypeProvider;
    private relationshipProvider;
    constructor(entityTypeProvider: EntityTypeProviderService, relationshipProvider: EntityRelationshipProvider);
    build$(entityData: iEntityConstructorParams): Observable<iEntity>;
    private getEntityType$;
}
