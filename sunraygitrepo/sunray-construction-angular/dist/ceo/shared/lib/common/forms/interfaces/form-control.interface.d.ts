import { AbstractControl } from '@angular/forms';
export interface iFormControlOptions {
    value?: any;
    key?: string;
    label?: string;
    placeholder?: string;
    validators?: any[];
    order?: number;
    row?: number;
    controlType?: string;
}
export interface iFormControl extends iFormControlOptions {
    type: string;
    control?: AbstractControl;
    key?: string;
    elementId?: string;
    placeholder?: string;
    inputType?: string;
    text?: string;
    controlId?: string;
}
export interface iFormControlMap {
    [key: string]: iFormControl;
}
export interface iFormControlConstructor {
    new (...args: any[]): iFormControl;
}
