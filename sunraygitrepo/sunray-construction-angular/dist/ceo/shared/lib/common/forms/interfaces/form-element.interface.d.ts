import { AbstractControl } from '@angular/forms';
export interface iFormElement {
    type: string;
    key?: string;
    control?: AbstractControl;
    elementId?: string;
    placeholder?: string;
    inputType?: string;
    text?: string;
    controlId?: string;
}
export interface iFormElementMap {
    [key: string]: iFormElement;
}
