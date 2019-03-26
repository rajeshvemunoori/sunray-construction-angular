import { Observable } from 'rxjs';
import { iSelectorOpts } from '../selectors/index';
import { iResourceIdentifier } from '../resource';
import { EntityData, iEntityConstructorParams, iEntity, EntityRelationshipIdentifier } from '../entity/index';
export interface iDataService {
    relationship$(entity: iEntity, relationshipIdentifier: EntityRelationshipIdentifier, opts?: iDataServiceOpts): Observable<EntityData>;
    build$(entityData: iEntityConstructorParams): Observable<iEntity>;
    create$(resourceOpts: iResourceIdentifier, opts?: any): Observable<any>;
    delete$(resourceOpts: iResourceIdentifier, opts?: any): void;
    get$(resourceOpts: iResourceIdentifier, opts?: any): Observable<any>;
    update$(resourceOpts: iResourceIdentifier, opts: any): any;
}
export interface iDataServiceOpts {
    syncWithApi?: boolean;
    selectorOpts?: iSelectorOpts;
    [key: string]: any;
}
