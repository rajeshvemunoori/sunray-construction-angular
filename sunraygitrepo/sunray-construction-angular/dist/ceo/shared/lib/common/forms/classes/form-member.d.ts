import { AbstractControl as NgAbstractControl } from '@angular/forms';
import { FormMemberType, iFormMember } from '../interfaces/index';
export declare class FormMember implements iFormMember {
    protected _ngControl: NgAbstractControl;
    type: FormMemberType;
    constructor(props?: any);
    readonly ngControl: NgAbstractControl;
    readonly value: any;
    readonly valid: boolean;
    markAsTouchedAndDirty(): void;
    markAsTouched(): void;
    markAsDirty(): void;
}
