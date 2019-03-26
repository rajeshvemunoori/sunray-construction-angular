import { AfterViewChecked, TemplateRef, ViewContainerRef } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export declare class SvgLoaderComponent extends BaseComponent implements AfterViewChecked {
    _template: TemplateRef<any>;
    vc: ViewContainerRef;
    ngAfterViewChecked(): void;
}
