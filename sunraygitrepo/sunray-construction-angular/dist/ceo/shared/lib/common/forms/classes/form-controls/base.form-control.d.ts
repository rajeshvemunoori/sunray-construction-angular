import { AbstractControl as NgAbstractControl } from '@angular/forms';
import { iFormControl, iFormMemberError, FormControlType } from '../../interfaces/index';
export declare class BaseFormControl implements iFormControl {
    controlType: FormControlType;
    protected _ngControl: NgAbstractControl;
    displayName: string;
    elementId: string;
    key: string;
    label: string;
    order: number;
    placeholder: string;
    row: number;
    text: string;
    validators: any[];
    value: any;
    constructor(init?: Partial<iFormControl>);
    ngControl: NgAbstractControl;
    readonly showValidations: boolean;
    readonly errorMessages: iFormMemberError[];
    readonly name: string;
}
