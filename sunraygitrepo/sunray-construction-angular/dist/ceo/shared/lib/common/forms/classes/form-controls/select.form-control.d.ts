import { BaseFormControl } from './base.form-control';
import { iFormControl, iSelectFormControl, FormControlType } from '../../interfaces/index';
export declare class SelectFormControl extends BaseFormControl implements iSelectFormControl {
    controlType: FormControlType;
    options: {
        text: string;
        value: string;
    }[];
    constructor(init?: Partial<iFormControl>);
}
