import { IConsole } from '../interfaces';
export declare class ConsoleService implements IConsole {
    log(m: any): void;
    debug(m: any): void;
    error(m: any): void;
    warn(m: any): void;
    info(m: any): void;
}
