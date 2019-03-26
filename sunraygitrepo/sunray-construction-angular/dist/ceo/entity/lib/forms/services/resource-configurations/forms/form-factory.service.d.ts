import { BehaviorSubject } from 'rxjs';
import { FormMemberFactory, FormFactory as BaseFormFactory } from '@ceo/shared';
import { iEntity } from '../../../../entity/index';
import { iFormEntity } from '../../../interfaces/index';
import { FormMemberFactoryParamsService } from './form-fields/index';
export declare class FormFactory {
    private formMemberFactory;
    private formMemberFactoryParamsService;
    private formFactory;
    constructor(formMemberFactory: FormMemberFactory, formMemberFactoryParamsService: FormMemberFactoryParamsService, formFactory: BaseFormFactory);
    build$(resourceConfiguration: iEntity, form: iFormEntity): BehaviorSubject<any>;
    buildFormGroup$(resourceConfiguration: iEntity, form: iFormEntity, resourceType: any): BehaviorSubject<any>;
    private buildFormMembersParams$;
    private buildFormMemberParams$;
    private buildFormMembers;
    private buildForm;
}
