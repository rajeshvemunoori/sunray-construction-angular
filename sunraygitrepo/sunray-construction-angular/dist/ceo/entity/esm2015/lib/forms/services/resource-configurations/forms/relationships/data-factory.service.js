/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataFactoryResolver } from './data-factory-resolver.service';
import * as i0 from "@angular/core";
import * as i1 from "./data-factory-resolver.service";
export class DataFactory {
    /**
     * @param {?} dataFactoryResolver
     */
    constructor(dataFactoryResolver) {
        this.dataFactoryResolver = dataFactoryResolver;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    build(entity) {
        /** @type {?} */
        let factory = this.resolveDataFactory(entity);
        return (/** @type {?} */ (factory.build(entity)));
    }
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    resolveDataFactory(entity) {
        return this.dataFactoryResolver.resolve(entity);
    }
}
DataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataFactory.ctorParameters = () => [
    { type: DataFactoryResolver }
];
/** @nocollapse */ DataFactory.ngInjectableDef = i0.defineInjectable({ factory: function DataFactory_Factory() { return new DataFactory(i0.inject(i1.DataFactoryResolver)); }, token: DataFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataFactory.prototype.dataFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9zZXJ2aWNlcy9yZXNvdXJjZS1jb25maWd1cmF0aW9ucy9mb3Jtcy9yZWxhdGlvbnNoaXBzL2RhdGEtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBVTFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFBOzs7QUFLckUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFDVSxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDOzs7OztJQUVKLEtBQUssQ0FDSCxNQUFlOztZQUVYLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1FBQzdDLE9BQU8sbUJBQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBcUMsQ0FBQTtJQUNuRSxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FDeEIsTUFBZTtRQUVmLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqRCxDQUFDOzs7WUFuQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsbUJBQW1COzs7Ozs7OztJQU94QiwwQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSAncnhqcydcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXMsXG59IGZyb20gJ0BjZW8vc2hhcmVkJ1xuXG5pbXBvcnQge1xuICBpRW50aXR5LFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRpdHkvaW5kZXgnXG5cbmltcG9ydCB7IERhdGFGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICcuL2RhdGEtZmFjdG9yeS1yZXNvbHZlci5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YUZhY3RvcnlSZXNvbHZlcjogRGF0YUZhY3RvcnlSZXNvbHZlcixcbiAgKSB7fVxuXG4gIGJ1aWxkKFxuICAgIGVudGl0eTogaUVudGl0eSxcbiAgKTogUGFydGlhbDxpRm9ybU1lbWJlckZhY3RvcnlQYXJhbXM+IHtcbiAgICBsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZURhdGFGYWN0b3J5KGVudGl0eSlcbiAgICByZXR1cm4gZmFjdG9yeS5idWlsZChlbnRpdHkpIGFzIFBhcnRpYWw8aUZvcm1NZW1iZXJGYWN0b3J5UGFyYW1zPlxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRGF0YUZhY3RvcnkoXG4gICAgZW50aXR5OiBpRW50aXR5LFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhRmFjdG9yeVJlc29sdmVyLnJlc29sdmUoZW50aXR5KVxuICB9XG59XG4iXX0=