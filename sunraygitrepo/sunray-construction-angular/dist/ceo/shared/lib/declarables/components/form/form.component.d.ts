import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { iInputGroup, InputControlService } from '../../../providers/index';
import { BaseComponent } from '../base/base.component';
export declare class FormComponent extends BaseComponent {
    private inputControlService;
    inputGroup$: Observable<iInputGroup>;
    dataService: any;
    entity: any;
    defaultParams: any;
    inputGroup: iInputGroup;
    _formGroup: FormGroup;
    constructor(inputControlService: InputControlService);
    ngOnInit(): void;
    handleActions(): void;
    readonly formGroup: FormGroup;
    payload(): any;
}
