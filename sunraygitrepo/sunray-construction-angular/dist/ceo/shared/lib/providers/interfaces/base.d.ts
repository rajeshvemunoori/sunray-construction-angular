import { Observable } from 'rxjs';
export interface iResponseParser {
    parse(data: any): any;
}
export interface iPane {
    name: string;
    componentClass?: any;
    componentFactory?: any;
    active: boolean;
    directive: string;
}
export interface iPaneProvider {
    panes$: Observable<iPane[]>;
}
export interface iPaneFactory {
    build$(): Observable<iPane[]>;
}
export interface iPaneManager {
    activePane$(): Observable<iPane>;
    deactivatePane$(pane: iPane): Observable<any>;
}
export interface iCard {
    data: any;
    title: string;
    iconName?: string;
}
export interface iMap<T> {
    [key: string]: T;
}
export interface iConstructor<T> {
    new (...args: any[]): T;
}
