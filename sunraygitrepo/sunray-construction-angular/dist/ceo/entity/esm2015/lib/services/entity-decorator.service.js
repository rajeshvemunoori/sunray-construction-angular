/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { JsonApiEntity, } from '../classes/index';
import { DataService } from './data.service';
export class EntityDecorator {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * @param {?} entityData
     * @return {?}
     */
    decorate(entityData) {
        /** @type {?} */
        let parent = JsonApiEntity
        //entityData.dataService = this.dataService
        ;
        //entityData.dataService = this.dataService
        return entityData;
    }
}
EntityDecorator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityDecorator.ctorParameters = () => [
    { type: DataService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityDecorator.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRlY29yYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9lbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZW50aXR5LWRlY29yYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFVQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBVzFDLE9BQU8sRUFDTCxhQUFhLEdBQ2QsTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFHNUMsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsWUFDVSxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMvQixDQUFDOzs7OztJQUVKLFFBQVEsQ0FDTixVQUFzQjs7WUFFbEIsTUFBTSxHQUFHLGFBQWE7UUFDMUIsMkNBQTJDOztRQUEzQywyQ0FBMkM7UUFDM0MsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQzs7O1lBWkYsVUFBVTs7OztZQUZGLFdBQVc7Ozs7Ozs7SUFLaEIsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIG1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBFbnRpdHlEYXRhLFxuICBGZWF0dXJlSWRlbnRpZmllcixcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbnN0cnVjdG9yUGFyYW1zLFxuICBpRW50aXR5Q29uc3RydWN0b3IsXG4gIGlSZXNvdXJjZUlkZW50aWZpZXIsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7XG4gIEpzb25BcGlFbnRpdHksXG59IGZyb20gJy4uL2NsYXNzZXMvaW5kZXgnXG5cbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlEZWNvcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgKSB7fVxuXG4gIGRlY29yYXRlKFxuICAgIGVudGl0eURhdGE6IEVudGl0eURhdGEsXG4gICk6IEVudGl0eURhdGEge1xuICAgIGxldCBwYXJlbnQgPSBKc29uQXBpRW50aXR5XG4gICAgLy9lbnRpdHlEYXRhLmRhdGFTZXJ2aWNlID0gdGhpcy5kYXRhU2VydmljZVxuICAgIHJldHVybiBlbnRpdHlEYXRhXG4gIH1cblxufVxuIl19