import { MatDialogRef } from '@angular/material';
import { iDialogAction, iDialogComponentInputProperties, iDialogComponent } from '../../interfaces/index';
import { BaseComponent } from '../../../../declarables/index';
export declare class DialogComponent extends BaseComponent {
    dialogRef: MatDialogRef<iDialogComponent>;
    data: iDialogComponentInputProperties;
    contentElementId: string;
    constructor(dialogRef: MatDialogRef<iDialogComponent>, data: iDialogComponentInputProperties);
    ngOnInit(): void;
    onClose(event: any): void;
    onAction(action: iDialogAction): void;
    private buildAction;
    emitAction(action: iDialogAction): void;
}
