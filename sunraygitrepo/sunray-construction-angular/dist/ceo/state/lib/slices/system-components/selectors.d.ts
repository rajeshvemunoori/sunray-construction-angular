import { MemoizedSelector } from '@ngrx/store';
export declare const selectSystemComponents: MemoizedSelector<object, any>;
export declare const selectSystemComponentsActiveComponents: MemoizedSelector<object, any[]>;
export declare const systemComponentsSelectors: {
    slice: MemoizedSelector<object, any>;
    activeComponents: MemoizedSelector<object, any[]>;
};
