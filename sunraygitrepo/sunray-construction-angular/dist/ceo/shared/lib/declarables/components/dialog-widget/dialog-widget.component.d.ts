import { Observable } from 'rxjs';
import { BaseComponent } from '../base/base.component';
export declare class DialogWidgetComponent extends BaseComponent {
    data: any;
    afterClosed(): Observable<any>;
    onAction(event: any): void;
    onClose(): void;
}
