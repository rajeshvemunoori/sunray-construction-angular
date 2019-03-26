/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
// https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#navigation-actions
// https://ngrx.io/guide/router-store/configuration
export class RouterCustomSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        /** @type {?} */
        let route = routerState.root;
        /** @type {?} */
        let params = {};
        while (route.firstChild) {
            Object.assign(params, route.params);
            route = route.firstChild;
        }
        Object.assign(params, route.params);
        /** @type {?} */
        let segments = (/** @type {?} */ (_.get(routerState, 'root.children[0]._urlSegment.segments')));
        const { url, root: { queryParams }, } = routerState;
        return { url, params, segments, queryParams };
    }
}
RouterCustomSerializer.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3N0YXRlLyIsInNvdXJjZXMiOlsibGliL3NsaWNlcy9yb3V0ZXIvY3VzdG9tLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBdUIsZUFBZSxDQUFBOzs7QUFnQjNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBR2pDLFNBQVMsQ0FBQyxXQUFnQzs7WUFDcEMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJOztZQUV4QixNQUFNLEdBQUcsRUFBRTtRQUNmLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUE7U0FDekI7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7O1lBRS9CLFFBQVEsR0FBRyxtQkFBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx1Q0FBdUMsQ0FBQyxFQUFBO2NBRXpFLEVBQ0osR0FBRyxFQUNILElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUN0QixHQUFHLFdBQVc7UUFFZixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUE7SUFDL0MsQ0FBQzs7O1lBdEJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUsIEFjdGlvblJlZHVjZXJNYXAgfSBmcm9tICdAbmdyeC9zdG9yZSdcblxuaW1wb3J0IHtcbiAgUm91dGVyU3RhdGVTZXJpYWxpemVyLFxufSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnXG5cbmltcG9ydCB7IGlSb3V0ZXJTdGF0ZVVybCB9IGZyb20gJy4vc3RhdGUnXG5cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25ncngvcGxhdGZvcm0vYmxvYi9tYXN0ZXIvZG9jcy9yb3V0ZXItc3RvcmUvYXBpLm1kI25hdmlnYXRpb24tYWN0aW9uc1xuLy8gaHR0cHM6Ly9uZ3J4LmlvL2d1aWRlL3JvdXRlci1zdG9yZS9jb25maWd1cmF0aW9uXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJDdXN0b21TZXJpYWxpemVyXG4gIGltcGxlbWVudHMgUm91dGVyU3RhdGVTZXJpYWxpemVyPGlSb3V0ZXJTdGF0ZVVybD4ge1xuXG4gIHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGlSb3V0ZXJTdGF0ZVVybCB7XG4gICAgbGV0IHJvdXRlID0gcm91dGVyU3RhdGUucm9vdFxuXG4gICAgbGV0IHBhcmFtcyA9IHt9XG4gICAgd2hpbGUgKHJvdXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCByb3V0ZS5wYXJhbXMpXG4gICAgICByb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGRcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHJvdXRlLnBhcmFtcylcblxuICAgIGxldCBzZWdtZW50cyA9IDxhbnk+Xy5nZXQocm91dGVyU3RhdGUsICdyb290LmNoaWxkcmVuWzBdLl91cmxTZWdtZW50LnNlZ21lbnRzJylcblxuICAgIGNvbnN0IHtcbiAgICAgIHVybCxcbiAgICAgIHJvb3Q6IHsgcXVlcnlQYXJhbXMgfSxcbiAgICB9ID0gcm91dGVyU3RhdGVcblxuICAgIHJldHVybiB7IHVybCwgcGFyYW1zLCBzZWdtZW50cywgcXVlcnlQYXJhbXMgfVxuICB9XG59XG5cbiJdfQ==