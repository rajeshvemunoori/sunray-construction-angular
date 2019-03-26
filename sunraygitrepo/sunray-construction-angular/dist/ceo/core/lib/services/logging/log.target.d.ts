export declare enum LogLevel {
    Debug = 0,
    Info = 1,
    Warning = 2,
    Error = 4
}
export interface LogEvent {
    message: string | Object;
    level: LogLevel;
}
export declare abstract class LogTargetOptions {
    minLogLevel: LogLevel;
}
export declare abstract class LogTarget {
    abstract log(event: LogEvent): Promise<any>;
}
export declare abstract class LogTargetBase implements LogTarget {
    protected options: LogTargetOptions;
    constructor(options: LogTargetOptions);
    log(event: LogEvent): Promise<any>;
    protected abstract writeToLog(event: LogEvent): Promise<any>;
}
