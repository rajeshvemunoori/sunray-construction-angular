import { iLabelElement } from '../interfaces/index';
export declare class LabelElement implements iLabelElement {
    controlId: string;
    text: string;
    element: any;
    constructor(init?: Partial<iLabelElement>);
}
