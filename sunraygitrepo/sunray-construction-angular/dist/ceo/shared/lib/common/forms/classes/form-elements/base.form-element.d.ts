import { AbstractControl } from '@angular/forms';
import { iFormElement } from '../../interfaces/index';
export declare class BaseFormElement implements iFormElement {
    type: string;
    key: string;
    control: AbstractControl;
    elementId: string;
    constructor(init?: Partial<iFormElement>);
}
