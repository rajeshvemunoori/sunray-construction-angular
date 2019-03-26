import { OnInit } from '@angular/core';
export declare class BaseComponent implements OnInit {
    id: string;
    constructor();
    ngOnInit(): void;
    log(isEnabled?: boolean): void;
    inspectData(...args: any[]): void;
}
