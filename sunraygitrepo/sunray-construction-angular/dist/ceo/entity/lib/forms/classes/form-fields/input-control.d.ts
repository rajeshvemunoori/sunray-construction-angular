import { iInputControl, iInputControlOptions } from '../../interfaces/index';
export declare class InputControl<T> implements iInputControl {
    value: T;
    key: string;
    label: string;
    placeholder: string;
    validators: any[];
    order: number;
    row: number;
    controlType: string;
    constructor(options?: iInputControlOptions<T>);
    private setAttribute;
}
