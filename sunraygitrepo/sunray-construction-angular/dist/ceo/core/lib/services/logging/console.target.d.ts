import { Provider } from '@angular/core';
import { LogTargetBase, LogEvent, LogLevel, LogTargetOptions } from './log.target';
import { ConsoleService } from '../console.service';
export declare class ConsoleTarget extends LogTargetBase {
    private console;
    constructor(console: ConsoleService, options: LogTargetOptions);
    writeToLog(event: LogEvent): Promise<void>;
}
export declare function createConsoleTarget(level: LogLevel, consoleService: ConsoleService): ConsoleTarget;
export declare function provideConsoleTarget(logLevel: LogLevel): Provider;
