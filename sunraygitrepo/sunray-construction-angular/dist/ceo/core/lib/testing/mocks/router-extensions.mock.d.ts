import { UrlTree } from '@angular/router';
import { IRouterExtensions, ExtendedNavigationExtras } from '../../services';
export declare class RouterExtensionsMock implements IRouterExtensions {
    navigate(commands: Array<any>, extras?: ExtendedNavigationExtras): Promise<boolean>;
    navigateByUrl(url: string | UrlTree, options?: ExtendedNavigationExtras): Promise<boolean>;
    back(): void;
}
