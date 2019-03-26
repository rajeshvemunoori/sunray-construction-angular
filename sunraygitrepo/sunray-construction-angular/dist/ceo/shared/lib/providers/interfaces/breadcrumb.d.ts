export interface iBreadcrumbItem {
    displayValue: string;
    isActive: boolean;
    url: string;
}
export interface iBreadcrumb {
    items: iBreadcrumbItem[];
}
