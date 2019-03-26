import { Observable, Subject } from 'rxjs';
import { Response } from "@angular/http";
import { AngularTokenService } from "angular-token";
export declare class AuthService {
    authService: AngularTokenService;
    userSignedIn$: Subject<boolean>;
    constructor(authService: AngularTokenService);
    validate(): void;
    signOutUser(): Observable<Response>;
    registerUser(signUpData: {
        login: string;
        password: string;
        passwordConfirmation: string;
    }): Observable<Response>;
    signInUser(signInData: {
        login: string;
        password: string;
    }): Observable<Response>;
    userSignedIn(): boolean;
    private handleValidationTokenResponse;
    private handleValidationError;
    private successfulLoginResponse;
}
