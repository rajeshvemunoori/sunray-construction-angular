/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function iDataService() { }
if (false) {
    /**
     * @param {?} entity
     * @param {?} relationshipIdentifier
     * @param {?=} opts
     * @return {?}
     */
    iDataService.prototype.relationship$ = function (entity, relationshipIdentifier, opts) { };
    /**
     * @param {?} entityData
     * @return {?}
     */
    iDataService.prototype.build$ = function (entityData) { };
    /**
     * @param {?} resourceOpts
     * @param {?=} opts
     * @return {?}
     */
    iDataService.prototype.create$ = function (resourceOpts, opts) { };
    /**
     * @param {?} resourceOpts
     * @param {?=} opts
     * @return {?}
     */
    iDataService.prototype.delete$ = function (resourceOpts, opts) { };
    /**
     * @param {?} resourceOpts
     * @param {?=} opts
     * @return {?}
     */
    iDataService.prototype.get$ = function (resourceOpts, opts) { };
    /**
     * @param {?} resourceOpts
     * @param {?} opts
     * @return {?}
     */
    iDataService.prototype.update$ = function (resourceOpts, opts) { };
}
/**
 * @record
 */
export function iDataServiceOpts() { }
if (false) {
    /** @type {?|undefined} */
    iDataServiceOpts.prototype.syncWithApi;
    /** @type {?|undefined} */
    iDataServiceOpts.prototype.selectorOpts;
    /* Skipping unhandled member: [key: string]: any*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvZW50aXR5L2ludGVyZmFjZXMvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFZQSxrQ0FZQzs7Ozs7Ozs7SUFWQywyRkFJeUI7Ozs7O0lBQ3pCLDBEQUFpRTs7Ozs7O0lBQ2pFLG1FQUF1RTs7Ozs7O0lBQ3ZFLG1FQUE0RDs7Ozs7O0lBQzVELGdFQUFvRTs7Ozs7O0lBQ3BFLG1FQUFxRDs7Ozs7QUFHdkQsc0NBT0M7OztJQUxDLHVDQUFxQjs7SUFFckIsd0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IGlTZWxlY3Rvck9wdHMgfSAgICAgICBmcm9tICcuLi9zZWxlY3RvcnMvaW5kZXgnXG5pbXBvcnQgeyBpUmVzb3VyY2VJZGVudGlmaWVyIH0gZnJvbSAnLi4vcmVzb3VyY2UnXG5pbXBvcnQge1xuICBFbnRpdHlEYXRhLFxuICBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMsXG4gIGlFbnRpdHksXG4gIEVudGl0eVJlbGF0aW9uc2hpcElkZW50aWZpZXIsXG59IGZyb20gJy4uL2VudGl0eS9pbmRleCdcblxuXG5leHBvcnQgaW50ZXJmYWNlIGlEYXRhU2VydmljZSB7XG5cbiAgcmVsYXRpb25zaGlwJChcbiAgICBlbnRpdHk6IGlFbnRpdHksXG4gICAgcmVsYXRpb25zaGlwSWRlbnRpZmllcjogRW50aXR5UmVsYXRpb25zaGlwSWRlbnRpZmllcixcbiAgICBvcHRzPzogaURhdGFTZXJ2aWNlT3B0c1xuICApOiBPYnNlcnZhYmxlPEVudGl0eURhdGE+XG4gIGJ1aWxkJChlbnRpdHlEYXRhOiBpRW50aXR5Q29uc3RydWN0b3JQYXJhbXMpOiBPYnNlcnZhYmxlPGlFbnRpdHk+XG4gIGNyZWF0ZSQocmVzb3VyY2VPcHRzOiBpUmVzb3VyY2VJZGVudGlmaWVyLCBvcHRzPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+XG4gIGRlbGV0ZSQocmVzb3VyY2VPcHRzOiBpUmVzb3VyY2VJZGVudGlmaWVyLCBvcHRzPzogYW55KTogdm9pZFxuICBnZXQkKHJlc291cmNlT3B0czogaVJlc291cmNlSWRlbnRpZmllciwgb3B0cz86IGFueSk6IE9ic2VydmFibGU8YW55PlxuICB1cGRhdGUkKHJlc291cmNlT3B0czogaVJlc291cmNlSWRlbnRpZmllciwgb3B0czogYW55KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlEYXRhU2VydmljZU9wdHMge1xuICAvLyBXaGV0aGVyIHRoZSBkYXRhIHNlcnZpY2Ugc2hvdWxkIGZvcmNpYmx5IGZldGNoIGRhdGEgZnJvbSB0aGUgYmFja2VuZC5cbiAgc3luY1dpdGhBcGk/OiBib29sZWFuXG5cbiAgc2VsZWN0b3JPcHRzPzogaVNlbGVjdG9yT3B0c1xuXG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuIl19