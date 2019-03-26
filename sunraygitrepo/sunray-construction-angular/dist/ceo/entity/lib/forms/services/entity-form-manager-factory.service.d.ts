import { Observable } from 'rxjs';
import { iEntity } from '../../entity/index';
import { EntityFormManager } from '../classes/index';
import { EntityFormFactory } from './entity-form-factory.service';
export declare class EntityFormManagerFactory {
    private formFactory;
    constructor(formFactory: EntityFormFactory);
    build(entity$: Observable<iEntity>, formName: string): EntityFormManager;
    private buildForm$;
    private buildForm;
}
