import { FormMemberType, iFactory, iFormGroup, iFormMemberFactoryParams } from '../interfaces/index';
import { NgFormGroupFactory } from './ng-forms/index';
export declare class FormGroupFactory implements iFactory<iFormGroup, iFormMemberFactoryParams> {
    private ngFormGroupFactory;
    type: FormMemberType;
    constructor(ngFormGroupFactory: NgFormGroupFactory);
    build(params: iFormMemberFactoryParams): iFormGroup;
    private buildFormGroup;
    private resolveFormGroupCtor;
    private buildNgFormGroup;
}
