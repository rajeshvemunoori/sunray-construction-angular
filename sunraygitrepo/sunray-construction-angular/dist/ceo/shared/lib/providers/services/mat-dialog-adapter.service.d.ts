import { MatDialog } from '@angular/material';
import { iDialogConfig } from '../interfaces/index';
export declare class MatDialogAdapterService {
    private dialog;
    private adapterConfigProperties;
    private nonDataProperties;
    constructor(dialog: MatDialog);
    open(dialogConfig: iDialogConfig): any;
    private buildAdapterDialogConfig(dialogConfig);
    private buildComponentData(dialogConfig);
}
