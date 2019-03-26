import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';
export declare class IframeComponent extends BaseComponent {
    private sanitizer;
    url: any;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
}
