import { Observable } from 'rxjs';
import { FormControlFactory } from '@ceo/shared';
import { FormMemberDataFactory } from './form-member-data-factory.service';
export declare class FormMemberFactory {
    private formControlFactory;
    private formMemberDataFactory;
    constructor(formControlFactory: FormControlFactory, formMemberDataFactory: FormMemberDataFactory);
    build$(resourceConfiguration: any, formFieldEntity: any): Observable<any>;
    private buildFormMember;
}
