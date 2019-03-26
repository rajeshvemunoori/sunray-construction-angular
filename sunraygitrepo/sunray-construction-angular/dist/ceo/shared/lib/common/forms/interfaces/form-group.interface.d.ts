import { AbstractControl } from '@angular/forms';
import { iFormMemberMap, iFormMember } from './form-member.interface';
export interface iFormGroup extends iFormMember {
    items: iFormMemberMap;
    control: AbstractControl;
    itemNames: string[];
    getItem(itemName: string): iFormMember;
}
