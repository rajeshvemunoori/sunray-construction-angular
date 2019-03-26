import { FormControlType, FormMemberType, iFormMemberFactoryParams } from '@ceo/shared';
import { iEntity } from '../../../../../entity/index';
import { DropdownFactory as SelectFactory } from './dropdown-factory.service';
export declare class FormControlDataFactory {
    private selectFactory;
    static defaultControlType: FormControlType;
    static formMemberType: FormMemberType;
    constructor(selectFactory: SelectFactory);
    build(entity: iEntity): Partial<iFormMemberFactoryParams>;
    private labelParams;
    private controlParams;
    private controlType;
    private controlTypeData;
    private selectControlTypeData;
    private inputControlTypeData;
    private inputType;
    private buildEntityValidators;
}
