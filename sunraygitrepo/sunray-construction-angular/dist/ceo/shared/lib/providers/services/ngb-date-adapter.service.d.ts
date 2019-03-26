import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
    fromModel(date: Date): NgbDateStruct;
    toModel(date: NgbDateStruct): Date;
    private isValidDate;
    private ngbDateStructFromValidDate;
    private dateFromValidNgbDateStruct;
}
