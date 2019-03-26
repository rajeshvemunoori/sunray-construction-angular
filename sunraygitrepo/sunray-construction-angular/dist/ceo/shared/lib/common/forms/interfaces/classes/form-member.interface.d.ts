import { AbstractControl } from '@angular/forms';
import { iFormGroupProps } from './form-group.interface';
import { iFormItemProps } from './form-item.interface';
export declare type FormMemberType = 'form-item' | 'form-group' | 'form';
export interface iFormMember {
    type: FormMemberType;
    ngControl: AbstractControl;
    value: any;
    valid: boolean;
    markAsTouchedAndDirty(): void;
    markAsTouched(): void;
    markAsDirty(): void;
}
export interface iFormMemberMap {
    [key: string]: iFormMember;
}
export declare type FormMemberConstructorParamsType = iFormGroupProps | iFormItemProps;
export interface iFormMemberError {
    key: string;
    message: string;
}
