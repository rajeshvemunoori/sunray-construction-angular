import { iResponseParser } from '../../../interfaces/index';
export declare class ResponseParser implements iResponseParser {
    parse(payload: any): any;
    private loadIncluded;
}
