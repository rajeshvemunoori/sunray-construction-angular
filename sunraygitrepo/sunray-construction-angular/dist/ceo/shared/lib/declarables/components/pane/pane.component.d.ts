import { Observable } from 'rxjs';
import { ComponentFactoryResolver } from '@angular/core';
import { iPane } from '../../../providers/interfaces/index';
import { BaseComponent } from '../base/base.component';
export declare class PaneComponent extends BaseComponent {
    private componentFactoryResolver;
    private containerDirective;
    componentRef: any;
    pane$: Observable<iPane>;
    inputs?: any[];
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    private launch;
    private loadComponent;
    private resolveComponentFactory;
    private createComponent;
    private setInputs;
}
