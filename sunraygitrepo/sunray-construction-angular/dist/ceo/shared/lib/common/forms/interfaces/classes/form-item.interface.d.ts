import { iFormControl, iFormControlProps } from './form-control.interface';
import { iFormMember, iFormMemberError } from './form-member.interface';
import { iLabelElementProps } from './label-element.interface';
export interface iFormItemProps {
    label: iLabelElementProps;
    control: iFormControlProps;
}
export interface iFormItem extends iFormItemProps, iFormMember {
    control: iFormControl;
    showValidations: boolean;
    errorMessages: iFormMemberError[];
}
export interface iFormItemMap {
    [key: string]: iFormItem;
}
