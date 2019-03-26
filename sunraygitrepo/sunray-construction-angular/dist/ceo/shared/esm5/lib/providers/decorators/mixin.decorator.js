/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://medium.com/@dmyl/mixins-as-class-decorators-in-typescript-angular2-8e09f1bc1f02
// Decorator to create mixins
/**
 * @param {?} baseCtors
 * @return {?}
 */
export function Mixin(baseCtors) {
    return function (derivedCtor) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                /** @type {?} */
                var descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
                if (name === 'constructor')
                    return;
                if (descriptor &&
                    (!descriptor.writable || !descriptor.configurable ||
                        !descriptor.enumerable || descriptor.get || descriptor.set)) {
                    Object.defineProperty(derivedCtor.prototype, name, descriptor);
                }
                else {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                }
            });
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4aW4uZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL2RlY29yYXRvcnMvbWl4aW4uZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxNQUFNLFVBQVUsS0FBSyxDQUFDLFNBQXFCO0lBQ3pDLE9BQU8sVUFBVSxXQUFxQjtRQUNwQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtZQUN4QixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O29CQUNuRCxVQUFVLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2dCQUU1RSxJQUFJLElBQUksS0FBSyxhQUFhO29CQUMxQixPQUFNO2dCQUVOLElBQ0UsVUFBVTtvQkFDVixDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO3dCQUNoRCxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUMxRCxFQUNBO29CQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7aUJBQy9EO3FCQUNJO29CQUNILFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDdkQ7WUFFSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vbWVkaXVtLmNvbS9AZG15bC9taXhpbnMtYXMtY2xhc3MtZGVjb3JhdG9ycy1pbi10eXBlc2NyaXB0LWFuZ3VsYXIyLThlMDlmMWJjMWYwMlxuXG4vLyBEZWNvcmF0b3IgdG8gY3JlYXRlIG1peGluc1xuXG5leHBvcnQgZnVuY3Rpb24gTWl4aW4oYmFzZUN0b3JzOiBGdW5jdGlvbltdKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGVyaXZlZEN0b3I6IEZ1bmN0aW9uKSB7XG4gICAgYmFzZUN0b3JzLmZvckVhY2goYmFzZUN0b3IgPT4ge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYmFzZUN0b3IucHJvdG90eXBlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlQ3Rvci5wcm90b3R5cGUsIG5hbWUpXG5cbiAgICAgICAgaWYgKG5hbWUgPT09ICdjb25zdHJ1Y3RvcicpXG4gICAgICAgIHJldHVyblxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBkZXNjcmlwdG9yICYmXG4gICAgICAgICAgKCFkZXNjcmlwdG9yLndyaXRhYmxlIHx8ICFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fFxuICAgICAgICAgICAhZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGRlc2NyaXB0b3IuZ2V0IHx8IGRlc2NyaXB0b3Iuc2V0XG4gICAgICAgICAgKVxuICAgICAgICAgKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlcml2ZWRDdG9yLnByb3RvdHlwZSwgbmFtZSwgZGVzY3JpcHRvcilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXJpdmVkQ3Rvci5wcm90b3R5cGVbbmFtZV0gPSBiYXNlQ3Rvci5wcm90b3R5cGVbbmFtZV1cbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==