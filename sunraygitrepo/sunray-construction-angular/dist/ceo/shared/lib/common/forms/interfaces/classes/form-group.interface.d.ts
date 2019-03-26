import { iFormMemberMap, iFormMember } from './form-member.interface';
export interface iFormGroupProps extends iFormMember {
    members: iFormMemberMap;
}
export interface iFormGroup extends iFormGroupProps {
    memberNames: string[];
    getMember(memberName: string): iFormMember;
}
