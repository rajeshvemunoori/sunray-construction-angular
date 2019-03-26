import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialogRef } from '@angular/material';
import { iDialogComponentInputProperties, iDialogComponent } from '../../interfaces/index';
import { BaseComponent } from '../../../../declarables/index';
export declare class ModalComponent extends BaseComponent implements iDialogComponent {
    dialogRef: MatDialogRef<iDialogComponent>;
    data: iDialogComponentInputProperties;
    contentElementId: string;
    actions$: BehaviorSubject<any>;
    constructor(dialogRef: MatDialogRef<iDialogComponent>, data: iDialogComponentInputProperties);
    afterClosed(): Observable<any>;
    onAction(event: any): void;
    onClose(event: any): void;
}
