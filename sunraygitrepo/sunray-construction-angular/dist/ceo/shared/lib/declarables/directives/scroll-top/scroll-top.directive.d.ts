import { Observable } from 'rxjs';
import { OnInit } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
export declare class ScrollTopDirective implements OnInit {
    private router;
    private _routerNavigationEnd$;
    constructor(router: Router);
    ngOnInit(): void;
    readonly routerNavigationEnd$: Observable<NavigationEnd>;
    private buildNavEndEvent;
    scrollTop(): void;
}
