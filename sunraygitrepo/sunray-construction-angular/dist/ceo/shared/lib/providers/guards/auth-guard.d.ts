import { CanActivate, Router } from "@angular/router";
import { AuthService } from '../services/index';
export declare class AuthGuard implements CanActivate {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    canActivate(): boolean;
}
