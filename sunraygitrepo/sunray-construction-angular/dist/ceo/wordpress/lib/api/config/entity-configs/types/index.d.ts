import { StateEntity } from '../../../classes/index';
export declare const entityConfigTypes: ({
    type: string;
    isSeed?: undefined;
    seed?: undefined;
    url?: undefined;
    entityType?: undefined;
} | {
    type: string;
    isSeed: boolean;
    seed: {}[];
    url: string;
    entityType?: undefined;
} | {
    type: string;
    url: string;
    isSeed?: undefined;
    seed?: undefined;
    entityType?: undefined;
} | {
    type: string;
    url: string;
    entityType: typeof StateEntity;
    isSeed?: undefined;
    seed?: undefined;
})[];
