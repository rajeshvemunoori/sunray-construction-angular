import { AbstractControl as NgAbstractControl } from '@angular/forms';
import { FormMemberType, iFormControl, iFormItem, iFormMemberError, iLabelElement } from '../interfaces/index';
import { FormMember } from './form-member';
export declare class FormItem extends FormMember implements iFormItem {
    type: FormMemberType;
    control: iFormControl;
    label: iLabelElement;
    constructor(props?: Partial<iFormItem>);
    ngControl: NgAbstractControl;
    readonly showValidations: boolean;
    readonly errorMessages: iFormMemberError[];
}
