import { Observable } from 'rxjs';
import { PaneProvider } from './pane-provider.service';
import { iPane } from '../interfaces/index';
export declare class PaneManager {
    private paneProvider;
    constructor(paneProvider: PaneProvider);
    readonly panes$: Observable<iPane[]>;
    readonly activePane$: Observable<iPane>;
    activatePane(pane: iPane): void;
    private setPaneActiveStatus;
}
