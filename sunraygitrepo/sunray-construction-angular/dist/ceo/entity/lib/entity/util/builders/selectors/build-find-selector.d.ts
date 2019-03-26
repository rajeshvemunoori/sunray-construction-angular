import { MemoizedSelector } from '@ngrx/store';
import { iResourceIdentifier } from '../../../interfaces/index';
export declare const buildFindSelector: (selector: any, ri: iResourceIdentifier, findPropPath?: string) => MemoizedSelector<{}, any>;
