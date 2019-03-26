import { Observable } from 'rxjs';
import { iSelectorOpts } from '../selectors/index';
import { iResourceIdentifier } from '../resource';
import { EntityData } from '../entity/index';
export interface iDataService {
    relationship$(entity: any, relationshipIdentifier: any, opts: any): Observable<EntityData>;
    create$(resourceOpts: iResourceIdentifier, opts: any): Observable<any>;
    delete$(resourceOpts: iResourceIdentifier, opts: any): void;
    get$(resourceOpts: iResourceIdentifier, opts: any): Observable<any>;
    update$(resourceOpts: iResourceIdentifier, opts: any): any;
}
export interface iDataServiceOpts {
    syncWithApi?: boolean;
    selectorOpts?: iSelectorOpts;
    [key: string]: any;
}
