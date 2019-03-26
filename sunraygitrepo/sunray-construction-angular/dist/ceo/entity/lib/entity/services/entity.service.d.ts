import { Observable } from 'rxjs';
import { ApiService } from '@ceo/shared';
import { iEntityService } from '../interfaces/index';
import { EntityFactory } from './entity-factory.service';
import { EntityAttributeBuilder } from './attribute-builders/index';
export declare class EntityService implements iEntityService {
    entityFactory: EntityFactory;
    apiService: ApiService;
    attributeBuilder: EntityAttributeBuilder;
    constructor(entityFactory: EntityFactory, apiService: ApiService, attributeBuilder: EntityAttributeBuilder);
    create$(...args: any[]): Observable<any>;
    post$(...args: any[]): Observable<any>;
    delete$(...args: any[]): Observable<any>;
    get$(...args: any[]): Observable<any>;
    update$(...args: any[]): Observable<any>;
    private apiEntityRequest$;
    private entityData$;
    private buildEntityData$;
    private buildEntities$;
    private buildEntity$;
}
