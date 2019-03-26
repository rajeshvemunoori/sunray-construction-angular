import { Observable } from 'rxjs';
import { iPaneFactory, iPane } from '../interfaces/index';
export declare class PaneFactory implements iPaneFactory {
    paneList: any;
    constructor(paneList: any);
    build$(): Observable<iPane[]>;
    private buildPane;
}
