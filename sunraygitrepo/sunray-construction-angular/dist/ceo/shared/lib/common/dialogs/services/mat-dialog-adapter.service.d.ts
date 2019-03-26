import { MatDialog } from '@angular/material';
import { iDialogComponent, iDialogConfig, iDialogHtmlElement } from '../interfaces/index';
export declare class MatDialogAdapterService {
    private dialog;
    private adapterConfigProperties;
    private nonDataProperties;
    constructor(dialog: MatDialog);
    open(contentElement: iDialogHtmlElement, dialogConfig: iDialogConfig): iDialogComponent;
    closeAll(): void;
    private getMatDialog;
    private getDialogComponent;
    private connectDialogs;
    private buildAdapterDialogConfig;
    private buildComponentData;
    private configuredDialogComponent;
    private addContentComponent;
    private showContentComponent;
    private launchContentComponent;
    private buildLaunchAction;
}
