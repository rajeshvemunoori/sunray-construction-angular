/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * convert the string into its slugified counterpart
 * @param value
 */
/**
 * @param {?} value
 * @return {?}
 */
export function slugify(value) {
    return value.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/_/g, '-') // Replace underscores with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Z2lmeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9zdHJpbmctdXRpbHMvc2x1Z2lmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFZO0lBR1osT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFO1NBQ2xDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQVcsd0JBQXdCO1NBQ3ZELE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQVcsNkJBQTZCO1NBQzFELE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQU8sNEJBQTRCO1NBQzNELE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQVMsbUNBQW1DO1NBQ2xFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQWEsNEJBQTRCO1NBQzNELE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUEsQ0FBWSwwQkFBMEI7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY29udmVydCB0aGUgc3RyaW5nIGludG8gaXRzIHNsdWdpZmllZCBjb3VudGVycGFydFxuICogQHBhcmFtIHZhbHVlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoXG4gIHZhbHVlOnN0cmluZ1xuKTogc3RyaW5nIHtcblxuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJy0nKSAgICAgICAgICAgLy8gUmVwbGFjZSBzcGFjZXMgd2l0aCAtXG4gICAgLnJlcGxhY2UoL18vZywgJy0nKSAgICAgICAgICAgLy8gUmVwbGFjZSB1bmRlcnNjb3JlcyB3aXRoIC1cbiAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCAnJykgICAgICAgLy8gUmVtb3ZlIGFsbCBub24td29yZCBjaGFyc1xuICAgIC5yZXBsYWNlKC9cXC1cXC0rL2csICctJykgICAgICAgICAvLyBSZXBsYWNlIG11bHRpcGxlIC0gd2l0aCBzaW5nbGUgLVxuICAgIC5yZXBsYWNlKC9eLSsvLCAnJykgICAgICAgICAgICAgLy8gVHJpbSAtIGZyb20gc3RhcnQgb2YgdGV4dFxuICAgIC5yZXBsYWNlKC8tKyQvLCAnJykgICAgICAgICAgICAvLyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxufVxuIl19