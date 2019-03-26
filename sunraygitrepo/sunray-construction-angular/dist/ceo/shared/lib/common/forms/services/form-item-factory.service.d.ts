import { FormMemberType, iFactory, iFormControl, iFormItem, iFormMemberFactoryParams, iLabelElement } from '../interfaces/index';
import { FormControlFactory } from './form-control-factory.service';
export declare class FormItemFactory implements iFactory<iFormItem, iFormMemberFactoryParams> {
    private formControlFactory;
    type: FormMemberType;
    constructor(formControlFactory: FormControlFactory);
    build(params: iFormMemberFactoryParams): iFormItem;
    private buildItem;
    buildLabel(params: iFormMemberFactoryParams): iLabelElement;
    buildControl(params: iFormMemberFactoryParams): iFormControl;
}
