import { Observable } from 'rxjs';
import { DialogComponent } from '../dialog.component';
export declare class WidgetComponent extends DialogComponent {
    data: any;
    afterClosed(): Observable<any>;
    onAction(event: any): void;
}
