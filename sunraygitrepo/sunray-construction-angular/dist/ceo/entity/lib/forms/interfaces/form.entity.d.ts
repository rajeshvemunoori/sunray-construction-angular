import { Observable } from 'rxjs';
import { iEntityCollection, iEntity } from '../../entity/index';
export interface iFormEntity extends iEntity {
    formFields$: Observable<iEntityCollection>;
}
