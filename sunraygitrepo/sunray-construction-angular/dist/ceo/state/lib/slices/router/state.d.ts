import { Params } from '@angular/router';
export interface iRouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
    [key: string]: any;
}
export interface RouterState {
    state: any;
    navigationId: any;
}
