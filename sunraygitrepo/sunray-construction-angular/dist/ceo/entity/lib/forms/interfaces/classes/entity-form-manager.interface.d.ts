import { Observable, BehaviorSubject } from 'rxjs';
import { iFormWrapper } from '@ceo/shared';
import { iEntity } from '../../../entity/index';
export interface iEntityFormManager {
    entity$: Observable<iEntity>;
    form$: BehaviorSubject<iFormWrapper>;
    entity: iEntity;
    form: iFormWrapper;
    formToEntity(): any;
}
