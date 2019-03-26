import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare function padNumber(value: number): string;
export declare class DateParserFormatter {
    parse(value: string): NgbDateStruct;
    format(date: NgbDateStruct): string;
}
