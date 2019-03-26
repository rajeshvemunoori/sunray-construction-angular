import { LogService } from './logging/log.service';
export declare class AppService {
    log: LogService;
    constructor(log: LogService);
    debug(message: any): void;
}
