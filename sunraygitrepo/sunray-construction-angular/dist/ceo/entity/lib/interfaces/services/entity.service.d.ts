import { Observable } from 'rxjs';
import { iResourceIdentifier } from '../resource';
export interface iEntityService {
    create$(opts: any): Observable<any>;
    delete$(resourceIdentifier: any): Observable<any>;
    get$(resourceIdentifier: iResourceIdentifier): Observable<any>;
    update$(opts: any): Observable<any>;
}
