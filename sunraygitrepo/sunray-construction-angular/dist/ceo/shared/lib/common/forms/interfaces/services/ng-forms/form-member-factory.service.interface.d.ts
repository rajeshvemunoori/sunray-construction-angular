import { AbstractControl as NgAbstractControl } from '@angular/forms';
import { iFormMember } from '../../classes/index';
export interface iFormMemberFactory {
    build(member: iFormMember): NgAbstractControl;
}
