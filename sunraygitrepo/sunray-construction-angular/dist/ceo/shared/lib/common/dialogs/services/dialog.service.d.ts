import { iDialogConfig, iDialogComponent, iDialogHtmlElement, iDialogService } from '../interfaces/index';
import { MatDialogAdapterService } from './mat-dialog-adapter.service';
import { ConfigService } from './config.service';
export declare class DialogService implements iDialogService {
    private dialogAdapter;
    private configService;
    constructor(dialogAdapter: MatDialogAdapterService, configService: ConfigService);
    open(dialogElement: iDialogHtmlElement, config: iDialogConfig | string): iDialogComponent;
    closeAll(): void;
    private buildDialogConfig;
    private openVendorDialog;
}
