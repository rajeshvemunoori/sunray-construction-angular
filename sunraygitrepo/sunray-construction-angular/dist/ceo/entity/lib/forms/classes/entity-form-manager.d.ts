import { Observable, BehaviorSubject } from 'rxjs';
import { iFormWrapper } from '@ceo/shared';
import { iEntity } from '../../entity/index';
import { iEntityFormManager } from '../interfaces/index';
export declare class EntityFormManager implements iEntityFormManager {
    private _entity;
    private _form;
    private _entity$;
    private _form$;
    constructor(entity$: Observable<iEntity>, form$: BehaviorSubject<iFormWrapper>);
    entity$: Observable<iEntity>;
    form$: BehaviorSubject<iFormWrapper>;
    entity: iEntity;
    form: iFormWrapper;
    formToEntity(): void;
}
