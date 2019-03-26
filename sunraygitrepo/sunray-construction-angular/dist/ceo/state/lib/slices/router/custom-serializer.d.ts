import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { iRouterStateUrl } from './state';
export declare class RouterCustomSerializer implements RouterStateSerializer<iRouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): iRouterStateUrl;
}
