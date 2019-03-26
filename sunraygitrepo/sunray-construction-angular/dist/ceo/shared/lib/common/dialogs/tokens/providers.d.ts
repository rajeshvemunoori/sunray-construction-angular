import { DialogComponent } from '../components/index';
import { BehaviorSubject } from 'rxjs';
export declare const defaultDialogsConfig: {
    isDefault: boolean;
    defaults: {
        actions$: BehaviorSubject<{
            name: string;
            payload: any;
        }>;
        componentType: typeof DialogComponent;
        width: string;
        header: {
            show: boolean;
        };
        footer: {
            show: boolean;
        };
    };
    dialogs: {};
};
export declare const providers: any[];
