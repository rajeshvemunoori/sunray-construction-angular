import { AbstractControl } from '@angular/forms';
import { iFormControl } from './form-control.interface';
import { iFormMember } from './form-member.interface';
import { iLabelElement } from './label-element.interface';
export interface iFormItem extends iFormMember {
    formControl: iFormControl;
    label?: iLabelElement;
    control: AbstractControl;
}
export interface iFormItemMap {
    [key: string]: iFormItem;
}
