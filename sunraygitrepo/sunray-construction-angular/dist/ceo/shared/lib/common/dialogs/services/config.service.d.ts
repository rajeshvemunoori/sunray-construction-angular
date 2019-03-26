import { CustomElementManager } from '../../../providers/index';
import { iDialogConfig, iDialogsConfig, iDialogHtmlElement } from '../interfaces/index';
export declare class ConfigService {
    private customElementManager;
    dialogsConfig: any;
    constructor(customElementManager: CustomElementManager, dialogsConfig: any);
    provide(dialogElement: iDialogHtmlElement, config: iDialogConfig | string): iDialogConfig;
    readonly dialogs: any;
    readonly defaults: any;
    readonly defaultConfig: iDialogsConfig;
    private getDialogConfig;
    private dialogConfigActions;
    private getComponent;
}
