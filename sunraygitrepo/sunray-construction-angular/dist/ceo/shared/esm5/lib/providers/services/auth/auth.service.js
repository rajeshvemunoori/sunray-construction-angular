/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularTokenService } from "angular-token";
var AuthService = /** @class */ (function () {
    function AuthService(authService) {
        this.authService = authService;
        this.userSignedIn$ = new Subject();
    }
    /**
     * @return {?}
     */
    AuthService.prototype.validate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this
            .authService.validateToken()
            .subscribe(function (response) { return _this.handleValidationTokenResponse(response); }, function (error) { return _this.handleValidationError(error); });
    };
    /**
     * @return {?}
     */
    AuthService.prototype.signOutUser = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.authService.signOut().pipe(map(function (res) {
            _this.userSignedIn$.next(false);
            return res;
        }));
    };
    /**
     * @param {?} signUpData
     * @return {?}
     */
    AuthService.prototype.registerUser = /**
     * @param {?} signUpData
     * @return {?}
     */
    function (signUpData) {
        var _this = this;
        return this.authService.registerAccount(signUpData).pipe(map(function (res) {
            _this.userSignedIn$.next(true);
            return res;
        }));
    };
    /**
     * @param {?} signInData
     * @return {?}
     */
    AuthService.prototype.signInUser = /**
     * @param {?} signInData
     * @return {?}
     */
    function (signInData) {
        var _this = this;
        return this.authService.signIn(signInData)
            .pipe(map(function (response) {
            _this.userSignedIn$.next(true);
            return response;
        }));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.userSignedIn = /**
     * @return {?}
     */
    function () {
        return this.authService.userSignedIn();
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    AuthService.prototype.handleValidationTokenResponse = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (this.successfulLoginResponse(response)) {
            this.userSignedIn$.next(response.json().success);
        }
        else {
            this.userSignedIn$.next(false);
        }
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    AuthService.prototype.handleValidationError = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        //console.log(error)
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    AuthService.prototype.successfulLoginResponse = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        return response.status == 200;
    };
    AuthService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: AngularTokenService }
    ]; };
    return AuthService;
}());
export { AuthService };
if (false) {
    /** @type {?} */
    AuthService.prototype.userSignedIn$;
    /** @type {?} */
    AuthService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU8sTUFBTSxDQUFBO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBdUIsZ0JBQWdCLENBQUE7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFnQixlQUFlLENBQUE7QUFHcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQVEsZUFBZSxDQUFBO0FBRXJEO0lBSUUscUJBQW1CLFdBQWdDO1FBQWhDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUZuRCxrQkFBYSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFBO0lBRVMsQ0FBQzs7OztJQUV4RCw4QkFBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUk7YUFDRCxXQUFXLENBQUMsYUFBYSxFQUFFO2FBQzNCLFNBQVMsQ0FDUixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsRUFBNUMsQ0FBNEMsRUFDeEQsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLENBQzNDLENBQUE7SUFDTCxDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDeEMsVUFBQSxHQUFHO1lBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDOUIsT0FBTyxHQUFHLENBQUE7UUFDWixDQUFDLENBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxrQ0FBWTs7OztJQUFaLFVBQWEsVUFHaUI7UUFIOUIsaUJBWUM7UUFOQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3hELFVBQUEsR0FBRztZQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdCLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxDQUNKLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLFVBQTJDO1FBQXRELGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FDUCxVQUFBLFFBQVE7WUFDTixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QixPQUFPLFFBQVEsQ0FBQTtRQUNqQixDQUFDLENBQ0YsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVELGtDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN4QyxDQUFDOzs7Ozs7SUFFTyxtREFBNkI7Ozs7O0lBQXJDLFVBQXNDLFFBQVE7UUFDNUMsSUFBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ2pEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUMvQjtJQUNILENBQUM7Ozs7OztJQUVPLDJDQUFxQjs7Ozs7SUFBN0IsVUFBOEIsS0FBSztRQUNqQyxvQkFBb0I7SUFDdEIsQ0FBQzs7Ozs7O0lBRU8sNkNBQXVCOzs7OztJQUEvQixVQUFnQyxRQUFRO1FBQ3RDLE9BQU8sUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUE7SUFDL0IsQ0FBQzs7Z0JBbkVGLFVBQVU7Ozs7Z0JBRkYsbUJBQW1COztJQXNFNUIsa0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQW5FWSxXQUFXOzs7SUFDdEIsb0NBQThDOztJQUVsQyxrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gIGZyb20gJ3J4anMnXG5pbXBvcnQgeyBtYXAgfSAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSZXNwb25zZSB9ICAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9odHRwXCJcblxuaW1wb3J0IHsgQW5ndWxhclRva2VuU2VydmljZSB9ICAgZnJvbSBcImFuZ3VsYXItdG9rZW5cIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICB1c2VyU2lnbmVkSW4kOlN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBbmd1bGFyVG9rZW5TZXJ2aWNlKSB7IH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzXG4gICAgICAuYXV0aFNlcnZpY2UudmFsaWRhdGVUb2tlbigpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB0aGlzLmhhbmRsZVZhbGlkYXRpb25Ub2tlblJlc3BvbnNlKHJlc3BvbnNlKSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5oYW5kbGVWYWxpZGF0aW9uRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBzaWduT3V0VXNlcigpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbk91dCgpLnBpcGUobWFwKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgdGhpcy51c2VyU2lnbmVkSW4kLm5leHQoZmFsc2UpXG4gICAgICAgIHJldHVybiByZXNcbiAgICAgIH1cbiAgICApKVxuICB9XG5cbiAgcmVnaXN0ZXJVc2VyKHNpZ25VcERhdGE6ICB7XG4gICAgbG9naW46c3RyaW5nLFxuICAgIHBhc3N3b3JkOnN0cmluZyxcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjpzdHJpbmd9XG4gICk6IE9ic2VydmFibGU8UmVzcG9uc2U+e1xuXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXJBY2NvdW50KHNpZ25VcERhdGEpLnBpcGUobWFwKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIHRoaXMudXNlclNpZ25lZEluJC5uZXh0KHRydWUpXG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9XG4gICAgKSlcbiAgfVxuXG4gIHNpZ25JblVzZXIoc2lnbkluRGF0YToge2xvZ2luOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nfSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5zaWduSW4oc2lnbkluRGF0YSlcbiAgICAgIC5waXBlKG1hcChcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMudXNlclNpZ25lZEluJC5uZXh0KHRydWUpXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgICkpXG4gIH1cblxuICB1c2VyU2lnbmVkSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UudXNlclNpZ25lZEluKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVmFsaWRhdGlvblRva2VuUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZih0aGlzLnN1Y2Nlc3NmdWxMb2dpblJlc3BvbnNlKHJlc3BvbnNlKSkge1xuICAgICAgdGhpcy51c2VyU2lnbmVkSW4kLm5leHQocmVzcG9uc2UuanNvbigpLnN1Y2Nlc3MpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy51c2VyU2lnbmVkSW4kLm5leHQoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVWYWxpZGF0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICAvL2NvbnNvbGUubG9nKGVycm9yKVxuICB9XG5cbiAgcHJpdmF0ZSBzdWNjZXNzZnVsTG9naW5SZXNwb25zZShyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gMjAwXG4gIH1cbn1cbiJdfQ==