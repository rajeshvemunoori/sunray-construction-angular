import { InputControl } from './input-control';
export declare class InputDropdown extends InputControl<string> {
    controlType: string;
    options: {
        key: string;
        value: string;
    }[];
    constructor(options?: {});
    private emptyDropdown;
}
