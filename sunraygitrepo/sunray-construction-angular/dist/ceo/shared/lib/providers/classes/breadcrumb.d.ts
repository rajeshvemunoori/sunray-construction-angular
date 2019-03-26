import { iBreadcrumb, iBreadcrumbItem } from '../interfaces/index';
export declare class Breadcrumb implements iBreadcrumb {
    items: iBreadcrumbItem[];
    length: number;
    constructor(items?: iBreadcrumbItem[]);
    [Symbol.iterator](): {
        next: () => {
            value: iBreadcrumbItem;
            done: boolean;
        };
    };
}
