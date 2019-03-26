import { LocationStrategy } from '@angular/common';
import { Router, UrlTree, NavigationExtras } from '@angular/router';
export interface ExtendedNavigationExtras extends NavigationExtras {
    clearHistory?: boolean;
    animated?: boolean;
    transition?: {
        name?: string;
        instance?: any;
        duration?: number;
        curve?: any;
    };
}
export interface IRouterExtensions {
    navigate(commands: Array<any>, extras?: ExtendedNavigationExtras): Promise<boolean>;
    navigateByUrl(url: string | UrlTree, options?: ExtendedNavigationExtras): Promise<boolean>;
    back(): void;
}
export declare class RouterExtensions implements IRouterExtensions {
    router: Router;
    private locationStrategy;
    constructor(router: Router, locationStrategy: LocationStrategy);
    navigate(commands: Array<any>, extras?: ExtendedNavigationExtras): Promise<boolean>;
    navigateByUrl(url: string | UrlTree, options?: ExtendedNavigationExtras): Promise<boolean>;
    back(): void;
}
