import { iEntity } from '../../../../../entity/index';
import { FormGroupDataFactory, FormItemDataFactory } from '../data-factories/index';
export declare class DataFactoryResolver {
    private formGroupDataFactory;
    private formItemDataFactory;
    constructor(formGroupDataFactory: FormGroupDataFactory, formItemDataFactory: FormItemDataFactory);
    resolve(entity: iEntity): FormGroupDataFactory | FormItemDataFactory;
}
