import { Action } from '@ngrx/store';
export declare class PayloadAction implements Action {
    payload?: any;
    type: string;
    constructor(payload?: any);
}
