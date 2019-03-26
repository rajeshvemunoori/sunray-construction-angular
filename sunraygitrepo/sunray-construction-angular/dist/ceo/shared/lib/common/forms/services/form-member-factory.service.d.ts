import { iFactory, iFormMember, iFormMemberFactoryParams } from '../interfaces/index';
import { FormItemFactory } from './form-item-factory.service';
import { FormGroupFactory } from './form-group-factory.service';
export declare class FormMemberFactory implements iFactory<iFormMember, iFormMemberFactoryParams> {
    private formItemFactory;
    private formGroupFactory;
    private factories;
    private defaultMemberFactory;
    constructor(formItemFactory: FormItemFactory, formGroupFactory: FormGroupFactory);
    build(params: iFormMemberFactoryParams): iFormMember;
    private resolveMemberFactory;
}
