import { iPane } from '../interfaces/index';
import { Card } from './card';
export declare class Pane implements iPane {
    name: string;
    iconName: string;
    componentClass: any;
    active: boolean;
    directive: string;
    constructor(attributes: any);
    toCard(): Card;
    private setStatus;
    private setAttributes;
}
