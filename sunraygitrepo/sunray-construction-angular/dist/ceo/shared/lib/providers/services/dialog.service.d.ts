import { iDialogConfig, DialogComponentType } from '../interfaces/index';
import { MatDialogAdapterService } from './mat-dialog-adapter.service';
export declare class DialogService {
    private dialogAdapter;
    private defaultConfig;
    constructor(dialogAdapter: MatDialogAdapterService);
    open(config: iDialogConfig): DialogComponentType;
    private buildDialogConfig(config);
    private openVendorDialog(config);
}
