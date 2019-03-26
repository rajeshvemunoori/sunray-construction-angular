import { iCustomElementConfig } from '../../interfaces/index';
export declare class Manager {
    private _config;
    private ngComponentPath;
    constructor(_config: any);
    readonly config: any;
    define(config: iCustomElementConfig): void;
    elementExists(elementName: string): boolean;
    isCustomElement(element: any): boolean;
    getNgComponent(element: any): any;
    private hasNgComponent;
    private defineNativeCustomElement;
    private buildCustomElement;
    private elementConfig;
}
