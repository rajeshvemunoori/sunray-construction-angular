import { PipeTransform } from '@angular/core';
export declare class CustomSearchPipe implements PipeTransform {
    transform(collection: any, args?: any): any;
    filter(collection: any, attributes: any): any[];
}
