import { NgElement } from '@angular/elements';
import { CustomElementName } from '../../interfaces/index';
import { Manager } from './manager.service';
export declare class Factory {
    manager: Manager;
    private defaultElement;
    constructor(manager: Manager);
    build(elementName: CustomElementName, inputs: any): NgElement;
    private getElement;
    private launchElement;
    private buildElementInstance;
    private configureElementInstance;
}
