import { IWindow } from '../interfaces';
export declare class WindowService implements IWindow {
    navigator: any;
    location: any;
    alert(msg: string): void;
    confirm(msg: string): void;
}
