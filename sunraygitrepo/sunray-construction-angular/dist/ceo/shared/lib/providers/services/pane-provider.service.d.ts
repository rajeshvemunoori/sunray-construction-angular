import { Observable, BehaviorSubject } from 'rxjs';
import { iPaneProvider, iPane } from '../interfaces/index';
import { PaneFactory } from './pane-factory.service';
export declare class PaneProvider implements iPaneProvider {
    private paneFactory;
    _panes$: Observable<iPane[]>;
    _activePane$: BehaviorSubject<any>;
    private panes;
    constructor(paneFactory: PaneFactory);
    readonly panes$: Observable<iPane[]>;
    readonly activePane$: Observable<iPane>;
    setPaneActiveStatus(pane: any, activeStatus: any): boolean;
    private emitActivePanes;
    private emitActivePane;
    private setPanes;
    private activePaneFromPanes;
}
