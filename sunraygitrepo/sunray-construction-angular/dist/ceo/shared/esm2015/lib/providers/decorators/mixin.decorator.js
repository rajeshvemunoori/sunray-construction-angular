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
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                /** @type {?} */
                const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4aW4uZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL2RlY29yYXRvcnMvbWl4aW4uZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxNQUFNLFVBQVUsS0FBSyxDQUFDLFNBQXFCO0lBQ3pDLE9BQU8sVUFBVSxXQUFxQjtRQUNwQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztzQkFDdEQsVUFBVSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztnQkFFNUUsSUFBSSxJQUFJLEtBQUssYUFBYTtvQkFDMUIsT0FBTTtnQkFFTixJQUNFLFVBQVU7b0JBQ1YsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTt3QkFDaEQsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FDMUQsRUFDQTtvQkFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2lCQUMvRDtxQkFDSTtvQkFDSCxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ3ZEO1lBRUgsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL21lZGl1bS5jb20vQGRteWwvbWl4aW5zLWFzLWNsYXNzLWRlY29yYXRvcnMtaW4tdHlwZXNjcmlwdC1hbmd1bGFyMi04ZTA5ZjFiYzFmMDJcblxuLy8gRGVjb3JhdG9yIHRvIGNyZWF0ZSBtaXhpbnNcblxuZXhwb3J0IGZ1bmN0aW9uIE1peGluKGJhc2VDdG9yczogRnVuY3Rpb25bXSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRlcml2ZWRDdG9yOiBGdW5jdGlvbikge1xuICAgIGJhc2VDdG9ycy5mb3JFYWNoKGJhc2VDdG9yID0+IHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJhc2VDdG9yLnByb3RvdHlwZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZUN0b3IucHJvdG90eXBlLCBuYW1lKVxuXG4gICAgICAgIGlmIChuYW1lID09PSAnY29uc3RydWN0b3InKVxuICAgICAgICByZXR1cm5cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZGVzY3JpcHRvciAmJlxuICAgICAgICAgICghZGVzY3JpcHRvci53cml0YWJsZSB8fCAhZGVzY3JpcHRvci5jb25maWd1cmFibGUgfHxcbiAgICAgICAgICAgIWRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBkZXNjcmlwdG9yLmdldCB8fCBkZXNjcmlwdG9yLnNldFxuICAgICAgICAgIClcbiAgICAgICAgICkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXJpdmVkQ3Rvci5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVyaXZlZEN0b3IucHJvdG90eXBlW25hbWVdID0gYmFzZUN0b3IucHJvdG90eXBlW25hbWVdXG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=