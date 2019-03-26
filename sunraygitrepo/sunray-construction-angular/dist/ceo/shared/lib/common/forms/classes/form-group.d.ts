import { AbstractControl as NgAbstractControl } from '@angular/forms';
import { FormMemberType, iFormMemberMap, iFormMember, iFormGroup } from '../interfaces/index';
import { FormMember } from './form-member';
export declare class FormGroup extends FormMember implements iFormGroup {
    type: FormMemberType;
    private _members;
    constructor(props?: Partial<iFormGroup>);
    ngControl: NgAbstractControl;
    readonly memberNames: string[];
    getMember(memberName: string): iFormMember;
    members: iFormMemberMap;
    markAsTouched(): void;
    markAsDirty(): void;
    applyMarker(markerName: string): void;
    [Symbol.iterator](): {
        next: () => {
            value: iFormMember;
            done: boolean;
        };
    };
}
