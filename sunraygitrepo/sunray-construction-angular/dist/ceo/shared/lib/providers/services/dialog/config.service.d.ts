import { iDialogConfig, iDialogContentComponent } from '../../interfaces/index';
export declare class ConfigService {
    dialogConfigs: any;
    private _defaultConfig;
    constructor(dialogConfigs: any);
    provide(component: iDialogContentComponent, config: iDialogConfig): iDialogConfig;
    readonly defaultConfig: iDialogConfig;
    private getContentComponentActions;
}
