import { iDialogConfig, iDialogContentComponent, iDialogComponent, iDialogService } from '../../interfaces/index';
import { MatDialogAdapterService } from './mat-dialog-adapter.service';
import { ConfigService } from './config.service';
export declare class DialogService implements iDialogService {
    private dialogAdapter;
    private configService;
    constructor(dialogAdapter: MatDialogAdapterService, configService: ConfigService);
    open(component: iDialogContentComponent, config: iDialogConfig): iDialogComponent;
    private buildDialogConfig;
    private openVendorDialog;
}
