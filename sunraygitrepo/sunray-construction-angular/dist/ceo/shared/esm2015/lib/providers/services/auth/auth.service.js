/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularTokenService } from "angular-token";
export class AuthService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
        this.userSignedIn$ = new Subject();
    }
    /**
     * @return {?}
     */
    validate() {
        this
            .authService.validateToken()
            .subscribe(response => this.handleValidationTokenResponse(response), error => this.handleValidationError(error));
    }
    /**
     * @return {?}
     */
    signOutUser() {
        return this.authService.signOut().pipe(map(res => {
            this.userSignedIn$.next(false);
            return res;
        }));
    }
    /**
     * @param {?} signUpData
     * @return {?}
     */
    registerUser(signUpData) {
        return this.authService.registerAccount(signUpData).pipe(map(res => {
            this.userSignedIn$.next(true);
            return res;
        }));
    }
    /**
     * @param {?} signInData
     * @return {?}
     */
    signInUser(signInData) {
        return this.authService.signIn(signInData)
            .pipe(map(response => {
            this.userSignedIn$.next(true);
            return response;
        }));
    }
    /**
     * @return {?}
     */
    userSignedIn() {
        return this.authService.userSignedIn();
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    handleValidationTokenResponse(response) {
        if (this.successfulLoginResponse(response)) {
            this.userSignedIn$.next(response.json().success);
        }
        else {
            this.userSignedIn$.next(false);
        }
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    handleValidationError(error) {
        //console.log(error)
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    successfulLoginResponse(response) {
        return response.status == 200;
    }
}
AuthService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: AngularTokenService }
];
if (false) {
    /** @type {?} */
    AuthService.prototype.userSignedIn$;
    /** @type {?} */
    AuthService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU8sTUFBTSxDQUFBO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBdUIsZ0JBQWdCLENBQUE7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFnQixlQUFlLENBQUE7QUFHcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQVEsZUFBZSxDQUFBO0FBR3JELE1BQU0sT0FBTyxXQUFXOzs7O0lBR3RCLFlBQW1CLFdBQWdDO1FBQWhDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUZuRCxrQkFBYSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFBO0lBRVMsQ0FBQzs7OztJQUV4RCxRQUFRO1FBQ04sSUFBSTthQUNELFdBQVcsQ0FBQyxhQUFhLEVBQUU7YUFDM0IsU0FBUyxDQUNSLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFFBQVEsQ0FBQyxFQUN4RCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDM0MsQ0FBQTtJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3hDLEdBQUcsQ0FBQyxFQUFFO1lBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDOUIsT0FBTyxHQUFHLENBQUE7UUFDWixDQUFDLENBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsVUFHaUI7UUFHNUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUN4RCxHQUFHLENBQUMsRUFBRTtZQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdCLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxDQUNKLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFVBQTJDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQ1AsUUFBUSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QixPQUFPLFFBQVEsQ0FBQTtRQUNqQixDQUFDLENBQ0YsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sNkJBQTZCLENBQUMsUUFBUTtRQUM1QyxJQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDakQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsS0FBSztRQUNqQyxvQkFBb0I7SUFDdEIsQ0FBQzs7Ozs7O0lBRU8sdUJBQXVCLENBQUMsUUFBUTtRQUN0QyxPQUFPLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFBO0lBQy9CLENBQUM7OztZQW5FRixVQUFVOzs7O1lBRkYsbUJBQW1COzs7O0lBSTFCLG9DQUE4Qzs7SUFFbEMsa0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9ICBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgbWFwIH0gICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUmVzcG9uc2UgfSAgICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXG5cbmltcG9ydCB7IEFuZ3VsYXJUb2tlblNlcnZpY2UgfSAgIGZyb20gXCJhbmd1bGFyLXRva2VuXCJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgdXNlclNpZ25lZEluJDpTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogQW5ndWxhclRva2VuU2VydmljZSkgeyB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgdGhpc1xuICAgICAgLmF1dGhTZXJ2aWNlLnZhbGlkYXRlVG9rZW4oKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5oYW5kbGVWYWxpZGF0aW9uVG9rZW5SZXNwb25zZShyZXNwb25zZSksXG4gICAgICAgIGVycm9yID0+IHRoaXMuaGFuZGxlVmFsaWRhdGlvbkVycm9yKGVycm9yKVxuICAgICAgKVxuICB9XG5cbiAgc2lnbk91dFVzZXIoKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25PdXQoKS5waXBlKG1hcChcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIHRoaXMudXNlclNpZ25lZEluJC5uZXh0KGZhbHNlKVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICB9XG4gICAgKSlcbiAgfVxuXG4gIHJlZ2lzdGVyVXNlcihzaWduVXBEYXRhOiAge1xuICAgIGxvZ2luOnN0cmluZyxcbiAgICBwYXNzd29yZDpzdHJpbmcsXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb246c3RyaW5nfVxuICApOiBPYnNlcnZhYmxlPFJlc3BvbnNlPntcblxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyQWNjb3VudChzaWduVXBEYXRhKS5waXBlKG1hcChcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJTaWduZWRJbiQubmV4dCh0cnVlKVxuICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfVxuICAgICkpXG4gIH1cblxuICBzaWduSW5Vc2VyKHNpZ25JbkRhdGE6IHtsb2dpbjpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZ30pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbkluKHNpZ25JbkRhdGEpXG4gICAgICAucGlwZShtYXAoXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJTaWduZWRJbiQubmV4dCh0cnVlKVxuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICApKVxuICB9XG5cbiAgdXNlclNpZ25lZEluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnVzZXJTaWduZWRJbigpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVZhbGlkYXRpb25Ub2tlblJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYodGhpcy5zdWNjZXNzZnVsTG9naW5SZXNwb25zZShyZXNwb25zZSkpIHtcbiAgICAgIHRoaXMudXNlclNpZ25lZEluJC5uZXh0KHJlc3BvbnNlLmpzb24oKS5zdWNjZXNzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudXNlclNpZ25lZEluJC5uZXh0KGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVmFsaWRhdGlvbkVycm9yKGVycm9yKSB7XG4gICAgLy9jb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuXG4gIHByaXZhdGUgc3VjY2Vzc2Z1bExvZ2luUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IDIwMFxuICB9XG59XG4iXX0=