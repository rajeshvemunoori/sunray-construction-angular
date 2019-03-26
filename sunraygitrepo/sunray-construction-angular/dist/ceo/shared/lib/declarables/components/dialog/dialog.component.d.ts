import { MatDialogRef } from '@angular/material';
import { iDialogComponentInputProperties, iDialogComponent } from '../../../providers/interfaces/index';
import { BaseComponent } from '../base/base.component';
export declare class DialogComponent extends BaseComponent {
    dialogRef: MatDialogRef<iDialogComponent>;
    data: iDialogComponentInputProperties;
    contentElementId: string;
    constructor(dialogRef: MatDialogRef<iDialogComponent>, data: iDialogComponentInputProperties);
    onClose(event: any): void;
}
