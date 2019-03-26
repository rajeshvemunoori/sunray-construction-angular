import { AbstractControl } from '@angular/forms';
import { iFormMemberError } from './form-member.interface';
export declare type FormControlType = 'input' | 'checkbox' | 'select' | 'textbox';
export declare type InputTypeAttribute = 'text' | 'email' | 'password' | 'hidden' | 'button' | 'checkbox';
export interface iFormControlProps {
    controlType?: FormControlType;
    displayName?: string;
    elementId?: string;
    key?: string;
    label?: string;
    order?: number;
    placeholder?: string;
    row?: number;
    text?: string;
    validators?: any;
    value?: any;
    options?: any;
}
export interface iFormControl extends iFormControlProps {
    ngControl: AbstractControl;
    showValidations: boolean;
    errorMessages: iFormMemberError[];
}
export interface iSelectFormControl extends iFormControl {
}
export interface iInputFormControl extends iFormControl {
    inputType?: InputTypeAttribute;
    required: boolean;
}
export interface iFormControlMap {
    [key: string]: iFormControl;
}
export interface iFormControlConstructor {
    new (...args: any[]): iFormControl;
}
