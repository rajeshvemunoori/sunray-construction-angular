export declare type NavigationMenuItemDataType = any;
export interface iNavigationMenuItemAttributes {
    [key: string]: NavigationMenuItemDataType;
}
export declare type NavigationMenuItemDisplayType = 'text' | 'link';
export interface iNavigationMenuItem {
    attributes: iNavigationMenuItemAttributes;
    disableLink: boolean;
    displayType: NavigationMenuItemDisplayType;
    displayValue: string;
    submenu: any;
    className: string;
    customContent: string;
    url: string;
    isActive: boolean;
    isCurrentUrl: boolean;
    [key: string]: any;
    hasSubmenu(): boolean;
}
export interface iNavigationMenuItemCollection {
    items: iNavigationMenuItem[];
    sortedItems: iNavigationMenuItem[];
    isActive: boolean;
}
export interface iNavigationMenu {
    slug: string;
    items: iNavigationMenuItemCollection;
    isActive: boolean;
}
export interface iNavigationMenuFactory {
    build(any: any): iNavigationMenu;
}
