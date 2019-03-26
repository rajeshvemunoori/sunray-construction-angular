import { iInputGroup, InputType } from '../../interfaces/index';
export declare class InputGroup implements iInputGroup {
    key: string;
    inputs: InputType[];
    name: string;
    constructor(inputs: InputType[], key: string);
    [Symbol.iterator](): {
        next: () => {
            value: import("../../interfaces").iInputControl;
            done: boolean;
        };
    };
}
