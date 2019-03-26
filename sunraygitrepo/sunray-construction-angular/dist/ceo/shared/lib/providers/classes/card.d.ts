import { iCard } from '../interfaces/index';
export declare class Card implements iCard {
    data: any;
    title: string;
    iconName: string;
    constructor(attributes: any);
    private setAttributes;
}
