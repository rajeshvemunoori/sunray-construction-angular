import { iFactory, iFormControl, iFormControlProps } from '../interfaces/index';
import { NgFormControlFactory } from './ng-forms/index';
export declare class FormControlFactory implements iFactory<iFormControl, any> {
    private ngFormControlFactory;
    constructor(ngFormControlFactory: NgFormControlFactory);
    build(props: iFormControlProps): iFormControl;
    private buildFormControl;
    private resolveControlConstructor;
    private buildNgFormControl;
}
