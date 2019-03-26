import { LogTarget } from './log.target';
export declare class LogService {
    private targets;
    constructor(targets: LogTarget[]);
    debug(...msg: any[]): Promise<void> | Promise<any[]>;
    error(...err: any[]): Promise<void> | Promise<any[]>;
    warn(...err: any[]): Promise<void> | Promise<any[]>;
    info(...err: any[]): Promise<void> | Promise<any[]>;
    private logEvent;
}
