import { NgElement } from '@angular/elements';
import { iCustomElementConfig } from '../interfaces/index';
export declare class CustomElementService {
    build(config: iCustomElementConfig): void;
    buildInstance(elementName: string, inputs: any): NgElement;
    private launchElement(element);
    private getElement(elementName, inputs);
    private buildElementInstance(elementName);
    private configureElementInstance(element, inputs);
    private buildCustomElement(config);
    private elementExists(elementName);
}
