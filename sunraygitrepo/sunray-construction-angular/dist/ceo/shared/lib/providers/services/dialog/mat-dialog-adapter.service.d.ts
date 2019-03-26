import { MatDialog } from '@angular/material';
import { iDialogComponent, iDialogConfig, iDialogContentComponent } from '../../interfaces/index';
export declare class MatDialogAdapterService {
    private dialog;
    private adapterConfigProperties;
    private nonDataProperties;
    constructor(dialog: MatDialog);
    open(contentComponent: iDialogContentComponent, dialogConfig: iDialogConfig): iDialogComponent;
    private getDialogComponent;
    private buildAdapterDialogConfig;
    private buildComponentData;
    private configuredDialogComponent;
    private addContentComponent;
    private showContentComponent;
    private launchContentComponent;
    private buildLaunchAction;
}
