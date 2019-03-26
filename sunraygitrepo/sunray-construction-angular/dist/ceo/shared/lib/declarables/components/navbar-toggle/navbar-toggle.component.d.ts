import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../base/base.component';
export declare class NavbarToggleComponent extends BaseComponent {
    private animationClass;
    private activeClass;
    private ngClass;
    private state;
    animation: string;
    isActive: boolean;
    toggleEmitter: EventEmitter<any>;
    ngOnInit(): void;
    private setState;
    toggle(): void;
    private emitNewState;
    getNgClass(): string;
}
